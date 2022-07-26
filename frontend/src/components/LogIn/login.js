import React, {useState} from 'react'
import "./login.css";
import { signin } from '../../api';

const initialState = {username: '', password: ''};

class Login extends React.Component{
  render(){
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }
    return(
      <div id="loginform">
        <FormHeader title="Welcome to Event-N-You" />
        <Form/>
        {console.log('hi')}
      </div>
    )
  }
}


const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
    // const [form, setForm] = useState(initialState);
    // const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

   <div>
    {console.log('bye')}
     <FormInput description="Username" placeholder="Enter your username" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <FormButton title="Log in"/>
   </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);


export default Login