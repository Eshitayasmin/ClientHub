import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
        <div className='login-form'>
        <form>
                <h1>Welcome</h1>
                <p>Enter your email and password.</p>
                <input type="email"/>
                <input type="password" />
                <button className='login-button'>Login</button>
            </form>
            
        </div>
        <div className='login-side-part'>
          <img className='login-side-image' src="https://t4.ftcdn.net/jpg/05/05/38/97/360_F_505389779_z7ZoE20zrbHkXFu5L7Gdhiyd8aAn9I9V.jpg" alt="" />
        </div>
        </div>
    );
};

export default Login;