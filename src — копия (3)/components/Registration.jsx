import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Registration({setIsAuth}) {
    const [users,setUsers]=useState([])
    const [name, setName]=useState('')
    const [password, setPassword]=useState('')
    const [error, setError]=useState('')
    const [password2,setPassword2]=useState('')
    const navigate = useNavigate()



    useEffect(() => {
        fetch('http://localhost:3005/users')
        .then(data=>data.json())
        .then(data => setUsers(data))
    },[])


    function registration(event){
        event.preventDefault()
        if (name && password && password === password2){
            const  newUser = {name, password, avatarUrl:''}
            fetch('http://localhost:3005/users',{
                method:"POST",
                headers:{'Content-type':'apllicatin/json'},
                body:JSON.stringify(newUser)
            })
            setError('')
            navigate('/log')
        } else {
            setError('Не верные данные')
        }
    }

    return (
        <div>
            <h1>Registration</h1>
            <form action="" className='form'>
                <p className="error">{error}</p>
                <input type="text" className="name" placeholder='name' value={name} onChange={event => setName(event.target.value)}/>
                <input type="text" className="name" placeholder='password' value={password} onChange={event => setPassword(event.target.value)}/>
                <input type="text" className="name" placeholder='repeat' value={password2} onChange={event => setPassword2(event.target.value)}/>
                <button onClick={registration}> Go toLogin</button>
            </form>
        </div>
    )
}
