import React from 'react'
import './Header.css'

export default function Header({isAuth, setIsAuth}) {
    let menu;
    if (isAuth){
        menu = <li>
                    <a href="#" className="link"
                    onClick={() => setIsAuth(false)}
                    >Logout</a>
                </li>
    } else {
        menu =<>
                 <li>
                    <a href="#" className="link"
                    onClick={() => setIsAuth(true)}
                    >Login</a>
                </li>
                <li>
                    <a href="#" className="link">Registration</a>
                </li>
            </>
    }

  return (
    <div>
        <nav>
            <ul className='menu'>
                {menu}          
            </ul>
        </nav>
    </div>
  )
}
