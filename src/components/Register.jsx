import '../css/bootstrap.min.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register({isAuth, setIsAuth, setUserToken}) {
    const navigate = useNavigate()
    const [errors, setErrors] = useState('')
    const [fio, setFio] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    function registration(event) {
        event.preventDefault()
        fetch('https://api-shop.edu.alabuga.space/api-shop/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({fio, email, password})
        })
        .then(response => response.json())
        .then(response => {
            if(response.data){
                setIsAuth(true)
                setUserToken(response.data.user_token)
                navigate('/')
            } else {
                setErrors(response.error.message)
                console.log(response.error)
            }
        })
    }
    return (
        <main>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
                <div className="col">
                    <div className="row">
                        <form>
                            <p className='text-danger'>{errors}</p>
                            <h1 className="h3 mb-3 fw-normal">Пожалуйста заполните все поля</h1>
                            <div className="form-floating mb-3">
                                <input value={fio} onChange={(event) => setFio(event.target.value)} type="text" className="form-control" id="floatingFio" placeholder="ФИО"/>
                                <label htmlFor="floatingFio">ФИО</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <button className="w-100 btn btn-lg btn-success mb-3" type="submit" onClick={registration}>Зарегистрироваться</button>
                            <button className="w-100 btn btn-lg btn-outline-secondary" type="submit" onClick={() => navigate('/')}>Назад</button>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    )
}