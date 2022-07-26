import React from 'react'
import { useState } from "react";
const Login= () =>{
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    return(
        <form action= "">
            
                <h2>Welcome to Events-N-You </h2>
                <div className= "form-group">
                    <label htmlFor= "email">Email </label>
                    <input type="email" name="email" id="email"/>
                       
                </div>
                <div className= "form-group">
                    <label htmlFor="password">Password </label>
                    <input type="password" name="password" id="password"/>
                   </div>
                <button type ="submit">Login</button>

            
        </form>
    )
       
    
}

export default Login