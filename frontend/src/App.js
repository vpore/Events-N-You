import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from "./components/Home";
import NavBar from './components/NavBar/NavBar';
import Login from "./components/LogIn/login";

import './App.css'  

const App = () => {
    return(
        <>            
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' exact element={<Home />}/>
                    <Route path='/login' exact element= {<Login />} />
                    
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;