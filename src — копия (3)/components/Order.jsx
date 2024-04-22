import React from 'react'
import { useState,useEffect } from 'react'


export default function Order({activeUser}) {
  const [prodsOrder, setProdsOrder] = useState([])
  const [allOrders, setAllOrders] = useState([])
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('http://localhost:3005/order')
    .then(data=>data.json())
    .then(data => {
      setAllOrders(data)
      let myOrder = [];
      data.forEach(elem => {
          if (elem.user === activeUser){
              myOrder.push(elem)
          }
      })
      setOrders(myOrder)
      myOrder.forEach(idprod =>{
      })
    })

    fetch('http://localhost:3005/products')
    .then(data=>data.json())
    .then(data => setProdsOrder(data))
  },[])

  // console.log('orders', orders)




  const printProds = orders.map(ord => {
    return(
      <div key={ord.id}>
        <h3>Products: {ord.products.map(prod => {
          for(let product of prodsOrder){
            if(product.id===prod){
              return(<span key={ord.id+prod}>{product.title}  </span>)
            }
          }
        })}</h3>
      <h3>{ord.total_price}</h3>
      <hr />
      </div>
    )
  })


  console.log(orders)


  return (
      <div>
        {printProds}
      </div>
    )
}
