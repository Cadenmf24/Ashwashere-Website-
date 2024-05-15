import React from "react";

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
            <img className = "App-image" src = "https://cdn.discordapp.com/attachments/876921481672654929/1171996841672445962/IMG_4868.jpg?ex=655eb61d&is=654c411d&hm=ac7f18481b59b4eab6fa3622ea51f60ff81b966c6e0dd668ffef8a3e1a397a25&"></img>
        </div>
        </div>

    )
};

export default Body;