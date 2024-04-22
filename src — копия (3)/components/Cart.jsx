import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cart({activeUser}) {
    const[carts, setCarts] = useState([])
    const [allCarts, setAllCarts] = useState([])
    const nav = useNavigate()

    
    useEffect(() => {
        fetch('http://localhost:3005/cart')
        .then(data=>data.json())
        .then(data => {
            setAllCarts(data)
            let myCart = [];
            data.forEach(elem => {
                if (elem.user === activeUser){
                    myCart.push(elem)
                }
            })
            setCarts(myCart)
        })
    },[])

    const printCarts = carts.map(cart => {
        return(
            <div key={cart.id}>
                <h4>Название Продукта: "{cart.product}"</h4>
                <p>Цена {cart.price}</p>
                <hr />
            </div>
        )
    })

    function makeOrder(){
        let products = [];
        let sum = 0;

        carts.forEach(cart => {
            products.push(cart.product);
            sum+=cart.price
        })
        const newOrder = {products, user: activeUser, total_price: sum}
        fetch('http://localhost:3005/order',{
            method:"POST",
            headers:{'Content-type':'apllicatin/json'},
            body:JSON.stringify(newOrder)
        })
        allCarts.forEach(cart =>{
            if (cart.user === activeUser){
                fetch(`http://localhost:3005/cart/${cart.id}`,{
                    method:'DELETE',
                    headers: {"Content-Type":"application/json"}
                })
            }
        })
        nav('/order')
    }

    return (
        <div>
            <button onClick={makeOrder}>Add all in Order</button>
            {printCarts}
        </div>
    )
}
