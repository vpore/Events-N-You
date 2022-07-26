import React, { useState } from 'react';
import { signin } from '../../api';

const initialState = {username: '', password: ''};

const Login= () =>{
    const [form, setForm] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            
                <h2>Welcome to Events-N-You </h2>
                <div className= "form-group">
                    <label htmlFor= "username">Username </label>
                    <input type="username" name="username" id="username" handleChange={handleChange}/>
                       
                </div>
                <div className= "form-group">
                    <label htmlFor="password">Password </label>
                    <input type={showPassword ? 'text' : 'password' } name="password" id="password" handleChange={handleChange} handleShowPassword={handleShowPassword}/>
                   </div>
                <button type ="submit">Login</button>

            
        </form>
    )
       
    
}

export default Login