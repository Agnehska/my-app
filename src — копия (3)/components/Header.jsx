import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({isAuth}) {
    let menu;
    if (isAuth){
        menu =<>
                <li>
                    <Link to='/'>Main</Link>
                </li>
                <li>
                    <Link to='/order'>Order</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
            </>
    } else {
        menu =<>
        <li>
            <Link to='/'>Main</Link>
        </li>
        <li>
            <Link to='/reg'>Registration</Link>
        </li>
        <li>
            <Link to='/log'>Login</Link>
        </li>
    </>
    }


  return (
    <div>
        <nav>
            <ul>
                {menu}
            </ul>
        </nav>
    </div>
  )
}
