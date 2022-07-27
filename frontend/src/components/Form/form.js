import React from 'react'
import { useState } from "react";
import "./form.css";

class  form extends React.Component{
  render(){
    return(
      <div id="form">
        <FormHeader title="Register" />
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
     <FormInput description="Committee" placeholder="Enter committee name" type="text" />
     <FormInput description="Event Name" placeholder="Enter event name" type="text"/>
     <FormInput description="Start Date"  type="date" />
     <FormInput description="Time"  type="time" />
     <FormInput description="End Date"  type="date" />
     <FormInput description="Time"  type="time" />
     
     <FormInput description="Event details" placeholder="Enter event details" type="text" />
     <FormButton title="Register"/>
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


export default Form