import React, {useState} from 'react'
import "./login.css";
import { signin } from '../../api';
import { Navigate } from 'react-router-dom';

const initialState = {username: '', password: ''};

const Login = () => {

    const [form, setForm] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleSubmit = (e) => {
        e.preventDefault();

        signin(form);
        
        Navigate('/principal');
    }

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return(
       <form onSubmit={handleSubmit}> 
      <div id="loginform">
        <h2 id="headerTitle">Welcome to Events-N-You</h2>
        <div>

          <div class="row">
            <label>Username</label>
            <input type="text" name='username' placeholder="Enter your Username" onChange={handleChange}/>
          </div>

          <div class="row">
            <label>Password</label>
            <input placeholder="Enter your Password" name='password' onChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
          </div>

          <div id="button" class="row">
            <button type="submit">Log In</button>
          </div>

        </div>
      </div>
      </form>
    );
}

export default Login