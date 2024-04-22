import { React, useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Main() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(location.pathname)
    }, [location])

  return (
    <div>
        <nav>
            <Link to='/one'>Page one</Link>
            <br />
            <Link to='/two'>Page two</Link>
        </nav>
        <div>
            <button onClick={() => navigate('one')}>
                First
            </button>
            <button onClick={() => navigate('two')}>
                Second
            </button>
        </div>
        <Outlet />
    </div>
  )
}
