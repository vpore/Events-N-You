import React, {useState} from 'react'
import "./login.css";
import { signin } from '../../api';

const initialState = {username: '', password: ''};

const Login = () => {
    return(
      <div id="loginform">
        <h2 id="headerTitle">Welcome to Events-N-You</h2>
        <div>

          <div class="row">
            <label>Username</label>
            <input type="text" placeholder="Enter your Username"/>
          </div>

          <div class="row">
            <label>Password</label>
            <input type="password" placeholder="Enter your Password"/>
          </div>

          <div id="button" class="row">
            <button>Log In</button>
          </div>

        </div>
      </div>
    );
}

export default Login