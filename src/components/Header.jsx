import '../css/bootstrap.min.css'
import { Link } from 'react-router-dom'

export default function Header({isAuth, setIsAuth, setUserToken}) {
    return (
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <Link to="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">«MyShop»</span>
                </Link>

                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    {isAuth ? (
                        <>
                            <Link className="me-3 py-2 text-dark text-decoration-none" to="/order">Мои заказы</Link>
                            <Link className="me-3 py-2 text-dark text-decoration-none" to="/cart">Корзина</Link>
                            <a className="me-3 py-2 text-dark text-decoration-none" href="#" onClick={() => {
                                setIsAuth(false)
                                setUserToken('')
                            }}>Выйти</a>
                        </>
                    ) : (
                        <>
                            <Link className="me-3 py-2 text-dark text-decoration-none" to="/signup">Регистрация</Link>
                            <Link className="me-3 py-2 text-dark text-decoration-none" to="/login">Авторизация</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>

    )
}