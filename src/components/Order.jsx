import { useNavigate } from 'react-router-dom'
import '../css/bootstrap.min.css'
import { useEffect, useState } from 'react'


export default function Order({isAuth, userToken}) {
    const navigate = useNavigate()
    const [orders, setOrders] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://api-shop.edu.alabuga.space/api-shop/order', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${userToken}`
            }
        })
        .then(response => response.json())
        .then(response => setOrders(response.data))

        fetch('https://api-shop.edu.alabuga.space/api-shop/products')
        .then(response => response.json())
        .then(response => setProducts(response.data))
    }, [])

    


    const printOrders = orders.map((order, index) => {  
        let products__list = []

        for(let i = 0; i < order.products.length; i++) {
            for(let j = 0; j < products.length; j++) {
                if(order.products[i] === products[j].id) {
                    products__list.push(products[j])
                    break
                }
            }
        }
        const printProducts = products__list.map((product, index) => {
            return (
                <div key={index} className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">{product.name}</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">{product.price}р.<small className="text-muted fw-light"> &times; 2 шт.</small></h1>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            )

        })
        return (
            <div key={index} className="row row-cols-1 row-cols-md-3 mb-3 text-center bg-light">
                <h2 className="w-100">Заказ №{order.id}</h2>

                {printProducts}

                <h2 className="w-100">Итоговая стоимость: {order.order_price}р.</h2>
            </div>
        )
    })
    return (
        <main>
            
            {printOrders}

            <div className="row justify-content-center gap-1">
                <button className="col-6 btn btn-lg btn-outline-secondary mb-3" type="button" onClick={() => navigate('/')}>Назад</button>
            </div>
        </main>
    )
}