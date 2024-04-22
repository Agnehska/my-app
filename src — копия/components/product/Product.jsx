import React, { useState } from 'react'

export default function Product({product, products, setProducts, isAuth}) {
    const [isEdit, setIsEdit] = useState(false)
    
    function makeSale(id){
        setProducts(products.map(product => {
          if (product.id === id){
            return {...product, price: product.price*0.8}
          } else{
            return product
          }
        }))
      }

    function changeTitle(id, event){
        setProducts(products.map(product => {
            if (product.id === id){
              return {...product, title: event.target.value}
            } else{
              return product
            }
          }))
    }

    function startChangeTitle(){
        if (isAuth){
            setIsEdit(true)
        }
        
    }

    let title;
    if (isEdit){
        title = <input type='text' value={product.title} onChange={(event) => changeTitle(product.id, event)}  onBlur={() => setIsEdit(false)}/>
    } else {
        title = <h1 className="product__title" onClick={startChangeTitle}>{product.title}</h1>
    }

  return (
    <div  className='product'>
        {title}
        <p className='products__desc'>{product.description}</p>
        <i>{product.price}</i><br />
        <button onClick={() => makeSale(product.id)}>Sale</button>
        { isAuth && <button onClick={() => console.log(product.id)}>Add to Cart</button>}
    </div>
  )
}
