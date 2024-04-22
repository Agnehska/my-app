import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { UsersContext } from '../Context'

export default function Users() {
    const users = useContext(UsersContext)
    console.log(users)
    const [usersInfo, setUsersInfo] = useState([])

    useEffect(() => {
        const printUsers = users.map(user => {
        // console.log(user)
        return (
            <div key={user.id}>
            <h2 className="title">{user.name}</h2>
            <p className="login">Login: {user.username}</p>
            <p className="email">Email: {user.email}</p>
            </div>
        )
        });
        setUsersInfo(printUsers)
    }, [users])

  return (
    <div>
        {usersInfo}
    </div>
  )
}
