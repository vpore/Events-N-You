import React from 'react'
import { useState } from "react";
import "./login.css";

class Login extends React.Component{
  render(){
    return(
      <div id="loginform">
        <FormHeader title="Welcome to Event-N-You" />
        <Form />
      </div>
    )
  }
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
   <div>
     <FormInput description="Username" placeholder="Enter your username" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <FormButton title="Log in"/>
   </div>
);

const FormButton = props => (
  <div id="button" class="field">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="field">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);


export default Login