import { useEffect, useState } from 'react'
import '../css/bootstrap.min.css'

export default function Product({isAuth, userToken}) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://api-shop.edu.alabuga.space/api-shop/products')
        .then(response => response.json())
        .then(response => setProducts(response.data))
    }, [])

    function addToCart(id) {
        fetch(`https://api-shop.edu.alabuga.space/api-shop/cart/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${userToken}`
            }
        })
    }

    const printProducts = products.map((product, index) => {
        return (
            <div key={index} className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">{product.name}</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">{product.price}р.</h1>
                        <p>{product.description}</p>
                        {isAuth && <button type="button" className="w-100 btn btn-lg btn-outline-success" onClick={() => addToCart(product.id)}>Добавить в корзину</button>}
                    </div>
                </div>
            </div>
        )
    })
    return (
        
        <main>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                
                {printProducts}
                
            </div>
        </main>
    )
}