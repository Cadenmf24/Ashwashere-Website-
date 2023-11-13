import React from "react";
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import General from "../sites/General";
import Navbar from "./Navbar";
import Aboutme from "../sites/Aboutme";



const Header = () => {
    return(
        <div className="App-header">
            <h1> Welcome To the Website of Ash Franklin</h1>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
            </style>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path ='ashwashere/general' element = {<General />} />
                    <Route exact path = 'ashwashere/aboutme' element = {<Aboutme />} />
                </Routes>
            </Router>
        </div>
    )
};


export default Header;