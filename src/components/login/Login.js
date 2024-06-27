import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Adbello from '../assets/logo.jpg'
import './Login.css'
import { useForm } from 'react-hook-form';


function Login() {
    const form = useForm();
    return (
        <div id='login-container'>
            <img src={Adbello} alt='adbello logo' className='logo' />
            <form onSubmit={handleSubmit} className='input-group'>
                <input type='email'
                    id='email'
                    name='email'
                    value={login.email}
                    onChange={handleChange}
                    placeholder='Your Email'
                    required
                />
                <br />
                <input type='password'
                    id='password'
                    name='password'
                    value={login.password}
                    onChange={handleChange}
                    placeholder='Your Password'
                    required
                />
                <br />
                <p className='forgot-password'>
                    <Link to='/forgot-password'>Forgot Password?</Link>
                </p>
                <button type='submit'>Login</button>
                <p className='register-link'>
                    Not a Member Yet? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    )
}

export default Login;
