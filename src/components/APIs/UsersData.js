import React, { useEffect, useState } from 'react'
import { getUsers } from './userService'
// import { error } from 'console'
// import { useNavigate } from 'react-router-dom';

function UsersData() {
    // const navigate = useNavigate()
    const [users, setUsers] = useState([])

    function fetchUser() {
        getUsers()
            .then(response => {
                setUsers(response.data)})
            .catch(error => {
                console.error('There is an in manage users data', error)
            })
    }

    useEffect(() => {
        fetchUser()
    })


    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">email</th>
                        <th scope="col">name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
<td>
    <button>Update</button>
    <button>Delete</button>
</td>
                            </tr>
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default UsersData;
