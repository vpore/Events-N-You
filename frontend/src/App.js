import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from "./components/Home";
import NavBar from './components/NavBar/NavBar';
import Login from "./components/LogIn/login";
import Form from "./components/Form/form";

import './App.css'  

const App = () => {
    return(
        <>            
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' exact element={<Home />}/>
                    <Route path='/login' exact element= {<Login />} />
                    <Route path='/form' exact element= {<Form />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;