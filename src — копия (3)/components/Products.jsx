import React, { useState} from 'react'
import { useEffect } from 'react'


export default function Products({isAuth, activeUser}) {
    const [prods, setProds] = useState([])


    useEffect(() => {
        fetch('http://localhost:3005/products')
        .then(data=>data.json())
        .then(data => setProds(data))
    },[])

    function addToCart(prod){
        const newCart = {
            product: prod.id,
            user: activeUser,
            price: prod.price
        }
        fetch('http://localhost:3005/cart',{
            method:"POST",
            headers:{'Content-type':'apllicatin/json'},
            body:JSON.stringify(newCart)
        })
    }
    

    const printProds = prods.map(prod => {
        return(
            <div key={prod.id} className='prod_carts'>
                <h3>{prod.title}</h3>
                <img src={prod.prodImg} alt="img" />
                <p>{prod.description}</p>
                <p>Цена: {prod.price}</p>
                {isAuth && <button onClick={() => addToCart(prod)} className='prod_btn'>Add to cart</button>}
            </div>
        )
    })

    return (
        <><h1>Products</h1>
                <div className='prod_container'>
            
            {printProds}
            
        </div>
        </>

    )
}
