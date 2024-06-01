import React from "react";
import pic from "../pictures/Homepic.jpg"


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
