import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./form.css";
import { submitreq } from '../../api';

const initialState = {comname: '', evename: '', sdate: '', stime: '', edate: '', etime: '', evedet: ''};

const Request = () => {

  const navigate = useNavigate();
    const [form, setForm] = useState(initialState);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.comname);
        submitreq(form);
        
        navigate('/committee');
    }

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return(
      <form onSubmit={handleSubmit}>
        <div id="form">
        <h2 id="headerTitle">Register</h2>
        <div class="field">
        <label>Committee</label>
        <input type="text" name="comname" placeholder="Enter your username" onChange={handleChange}/>
        </div>
        <div class="field">
        <label>Committee Email</label>
        <input type="text" name="email" placeholder="Enter committee email" onChange={handleChange}/>
        </div>
        <div class="field">
        <label>Event Name</label>
        <input type="text" name="evename" placeholder="Enter your name" onChange={handleChange}/>
        </div>
        <div class="field">
        <label>Start Date</label>
        <input type="text" name="sdate" onChange={handleChange}/>
        </div>
        <div class="field">
        <label>Start Time</label>
        <input type="text" name="stime" onChange={handleChange}/>
        </div>
        <div class="field">
        <label>End Date</label>
        <input type="text" name="edate" onChange={handleChange}/>
        </div>
        <div class="field">
        <label>End Time</label>
        <input type="text" name="etime" onChange={handleChange}/>
        </div>
        <div class="field">
        <label>Evevnt Details</label>
        <input type="text" name="evedet" placeholder="Enter event details" onChange={handleChange}/>
        </div>

        <div id="button" class="field">
        <button>Register</button>
        </div>
      </div>
      </form>
    )
};


export default Request