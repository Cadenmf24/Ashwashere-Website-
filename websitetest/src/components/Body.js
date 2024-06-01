import React from "react";
import pic from "../pictures/Homepic.jpg"

const Body = () => {
    return(
        
        <div style = {{marginLeft: 30, color: "#000000"}}>

            <h1> About Me: </h1>


        <div className = "App-body">
            <p>Hello! My name is Caden Franklin, but my friends call me Ash!
            I am currently a 4rd year attending Rochester Institute of Technology as a Software Engineer. 
            Software gives people freedom to make whatever they want, as long as they have the skills to.
            It's an different feeling to see something you think about creating at 3 in the morning in action.
            {'\n'}
            {'\n'}So while I am creating silly projects now, one day I will create something that will change the world. {'\n'}{'\n'}
            When I am not coding, I enjoy learning new things, such as bartending. I also enjoy playing video games with friends
            along with reading manga and listening to music. 

            I am a nerd, I know.
            </p>
            <img className = "App-image" src = {pic}></img>
        </div>
        </div>

    )
};

export default Body;