import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Redirect, useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";

import Home from "./components/Home";
import NavBar from './components/NavBar/NavBar';
import Login from "./components/LogIn/login";
import Form from "./components/Form/form";

import './App.css'  

const App = () => {
    // const user = JSON.parse(localStorage.getItem('profile'));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // const location = useLocation();

    // useEffect (() => {
    //     // const token = user?.token;
    //     // if(token){
    //     //     const decodedToken = decode(token);
    //     //     if(decodedToken.exp*1000 < new Date().getTime()) logout();
    //     // }
    //     setUser(JSON.parse(localStorage.getItem('profile')));
    // }, [location]);
    return(
        <>            
            <BrowserRouter forceRefresh={true}>
                <NavBar />
                <Routes>
                    <Route path='/' exact element={<Home />}/>
                    <Route path='/login' exact element= {(!user) ? <Login />: <Navigate to="/principal"/>} />
                    <Route path='/committee/form' exact element= {(!user) ? <Login />: <Form/>} />
                    <Route path='/principal' exact element= {(!user) ? <Login />: <Home />}/> 
                    <Route path='/committee' exact element= {(!user) ? <Login />: <Home />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;