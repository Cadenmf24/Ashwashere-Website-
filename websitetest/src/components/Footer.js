import React from "react";
import Stack from '@mui/material/Stack';
import git from '../pictures/github.png';
import linkedin from "../pictures/linkedin.png";

export default function Footer(){
    return <div className= "Footer">
        <h3> Caden Franklin Software Developer </h3>
        
        <Stack direction={"row"} alignItems={"center"} spacing={2}>

            <a href= 'https://www.linkedin.com/in/caden-f-150ba2158/'>
                
                <img src={linkedin} />
          
            </a>


            <a href = 'https://github.com/Cadenmf24'>
                
                <img src={git} />
          
            </a>


        </Stack>
    </div>
    
}
