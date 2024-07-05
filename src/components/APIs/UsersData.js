import React, { useEffect, useState } from 'react'
import { deleteUser, getUsers } from './userService'
import { useNavigate } from 'react-router-dom';

function UsersData() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    function fetchUser() {
        getUsers()
            .then(response => {
                setUsers(response.data)
            })
            .catch(error => {
                console.error('There is an in manage users data', error)
            })
    }

    useEffect(() => {
        fetchUser()
    })

    function handleUpdate(id) {
        navigate(`/update-user/${id}`)
    }

    function handleDelete(id) {
        deleteUser(id)
            .then(response => {
                setUsers(response.data)
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error deleting the user!', error)
            })
    }

    return (
        <div className='container'>
            <h2>Users Data</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Full Name</th>
                        <th scope='col'>Reason</th>
                        <th scope='col'>phone Number</th>
                        <th scope='col'>Password</th>
                        <th scope='col'>Button</th>
                        <th scope='col'>Add New User</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.fullName}</td>
                                <td>{user.reason}</td>
                                <td>{user.phone}</td>
                                <td>{user.password}</td>
                                <td className='users-manage-data'>
                                    <button className="btn btn-outline-warning" onClick={() => handleUpdate(user.id)}>Update</button>
                                    <button className="btn btn-outline-warning" onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                                <td>
                                    <button className='btn btn-outline-warning'>Add</button>
                                </td>

                            </tr>
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default UsersData;
