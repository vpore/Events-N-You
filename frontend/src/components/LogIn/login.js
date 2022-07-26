import React from 'react'
import { useState } from "react";
import "./login.css";

const Login = () => {
    return(
      <div id="loginform">
        <h2 id="headerTitle">Welcome to Events-N-You</h2>
        <div>

          <div class="field">
            <label>Username</label>
            <input type="text" placeholder="Enter your Username"/>
          </div>

          <div class="field">
            <label>Password</label>
            <input type="password" placeholder="Enter your Password"/>
          </div>

          <div id="button" class="field">
            <button>Log In</button>
          </div>

        </div>
      </div>
    );
}

export default Login