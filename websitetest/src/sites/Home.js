import React from "react";
import pic from "../components/Homepic.jpg"
import App from "../App";
import Footer from "../components/Footer"
import Header from "../components/Header";

export default function Home(){
    return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
            </style>
            <h1 className="App-header"> Welcome Home 
            </h1>


            <img className = "App-image" src = {pic}></img>
        </div>


    )
}
