import React from 'react'
// import { Link } from 'react-router-dom';

function ForgotPassword() {
    return (
        <div className='forgotPassword'>
            <h1>Forgot Password?</h1>
            <p className='password-para'> Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
            <label>
                Email address
            </label>
            < br />
            <input type='password'
                id='password'
                required />
                <br/>
                <button type='submit' className='password'>
                 Reset Password
                </button>

        </div>
    )
}

export default ForgotPassword;