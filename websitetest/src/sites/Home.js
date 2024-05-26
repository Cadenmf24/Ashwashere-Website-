import React from "react";
import pic from "../components/Homepic.jpg"
import App from "../App";
import Footer from "../components/Footer"
// import Layout from "../components/Layout";
// import Navagation from "../components/Navagation"

const Home = () => {
    return (

        <div className="Home">
            <App/>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
            </style>
            <h1 className="App-header"> Welcome Home 
            </h1>


            <img className = "App-image" src = {pic}></img>
            <Footer/>
        </div>


    )
}

export default Home;