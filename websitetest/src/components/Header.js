import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <nav className= "header-links">
            <Link to = "/" className="link">Home </Link>
            <Link to ="/about" className="link">About </Link>
            <Link to = "/general" className = "link">General</Link>
        </nav>
    )
};


export default Header;