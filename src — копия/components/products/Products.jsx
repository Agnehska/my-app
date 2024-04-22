import React from 'react'
import Product from '../product/Product'

export default function Products({products, setProducts, isAuth}) {
 

    const printProducts = products.map(product => {
    return (
        <Product key={product.id} isAuth={isAuth} product={product} products={products} setProducts={setProducts} />
    )
    })   
      
  return (
    <div className='row'>
        {printProducts}
    </div>
  )
}
