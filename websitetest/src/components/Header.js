import React from "react";
import { Link  } from "react-router-dom";


export default function Header(){
    return <nav className="Header">
        <Link to = "/home" className = "HeaderHome"> Home </Link>
        <ul>
            <li> 
                <Link to="/about"> About </Link>
            </li>
            
            <li>
                <Link to = "/general"> General</Link>
            </li>

        </ul>

    </nav>
}
