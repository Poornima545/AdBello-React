import { Link } from "react-router-dom";
import Adbello from '../../assets/logo.png';
import './style.css'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
// import { error } from "console";

function Register() {
    const { register, handleSubmit, formState, reset } = useForm()
    const { errors } = formState;
    const [users, setUsers] = useState([]);

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:8080/users', data)
            alert('Form is Submited');
            console.log(response.data);
            reset();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    }

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/users')
            setUsers(response.data);
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    }

    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/users/${id}`)
            alert('User is Deleted');
            console.log(response.data);
            reset();
        } catch (error) {
            console.error('There was an error deleting the User!', error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, []);

    return (
        <div id='register-container'>
            <img src={Adbello} alt='adbello logo' className='logo' />
            <form onSubmit={handleSubmit(onSubmit)} className='input-group'>
                <input
                    type='email'
                    placeholder='Email'
                    {...register('email', {
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email '
                        }
                    })}
                    required
                />
                {errors.email && <div className='error'>{errors.email.message}</div>}
                <br />
                <input type='text'
                    placeholder="Full Name"
                    {...register('fullName', {
                        required: 'Name is required'
                    })}
                    required
                />
                {errors.fullName && <div>{errors.fullName.message}</div>}
                <br />
                <select className="select-reason"
                    {...register('reason', {
                    })}
                    required
                >
                    <option value=' '>I'm here to...</option>
                    <option value='learn'>Learn to Front-end developer</option>
                    <option value='learn'>Learn to Back-end developer</option>
                    <option value='learn'>Learn to SQL developer</option>
                </select>
                {errors.reason && <div className='error'>{errors.reason.message}</div>}
                <br />
                <input
                    type='tel'
                    placeholder='Phone Number'
                    {...register('phone', {
                        pattern: {
                            value: /^\d{10}$/,
                            message: 'Phone number must be 10 digits'
                        }
                    })}
                    required
                />
                {errors.phone && <div className='error'>{errors.phone.message}</div>}
                <br />
                <input type='password'
                    id='password'
                    placeholder='Your Password'
                    {...register('password', {
                        pattern: {
                            value: /^.{6,}$/,
                            message: 'Password must contain at least 6 characters'
                        }
                    })}
                    required
                />
                {errors.password && <div className='error'>{errors.password.message}</div>}
                <br />
                <div className="checkbox-grp">
                    <input
                        type="checkbox"
                        {...register('terms', {
                            required: 'You must accept the terms and conditions'
                        })}
                    />
                    <label htmlFor="terms" className="terms">I Accept <Link to="/terms-conditions"> Terms and Conditions </Link> and
                        <Link to="/privacy">  Privacy Policy  </Link>
                    </label>
                </div>
                {errors.terms && <div className='error'>{errors.terms.message}</div>}
                <button type='submit'>Register</button>
                <p className='login-link'>
                    Not a member yet? <Link to="/login">Login</Link>
                </p>
            </form>
            <div className="user-list">
                <h2>Registered Users</h2>
                <ol>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.email}
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Register;
