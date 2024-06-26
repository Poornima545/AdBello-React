import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Adbello from '../assets/logo.jpg'
import './Register.css'


function Register() {
    const [register, setRegister] = useState({ email: '', fullName: '', text: '', phone: '', password: '' })

    const handleChange = (e) => {
        const { name, value } = e && e.target;
        setRegister((prev) => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setRegister({ email: '', fullName: '', text: '', phone: '', password: '' })
    }

    return (
        <div id='register-container'>
            <img src={Adbello} alt='adbello logo' className='logo' />
            <form onSubmit={handleSubmit} className='input-group'>
                <input type='email'
                    id='email'
                    name='email'
                    value={register.email}
                    placeholder='Email'
                    onChange={handleChange}
                    required
                />
                <br />
                <input type='text'
                    id='fullName'
                    name='fullName'
                    value={register.fullName}
                    placeholder='Full Name'
                    onChange={handleChange}
                    required
                />
                <br />
                <input type='text'
                    id='text'
                    name='text'
                    value={register.text}
                    placeholder="I'm here to"
                    onChange={handleChange}
                    required
                />
                <br />
                <input type='tel'
                    id='phone'
                    name='phone'
                    value={register.phone}
                    placeholder='Phone Number'
                    onChange={handleChange}
                    required
                />
                <br />
                <input type='password'
                    id='password'
                    name='password'
                    value={register.password}
                    onChange={handleChange}
                    placeholder='Password'
                    required
                />
                <br />
                <div class="checkbox-grp">
                    <input type="checkbox" id='terms' name="terms" required />
                    <label htmlFor="terms" class="terms">I Accept <Link to="/privacy"> Terms and Conditions </Link> and
                        <Link to="/privacy">  Privacy Policy  </Link>
                    </label>
                </div>
                <button type='submit'>Register</button>
                <p className='login-link'>
                    Not a Member Yet? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    )
}

export default Register;
