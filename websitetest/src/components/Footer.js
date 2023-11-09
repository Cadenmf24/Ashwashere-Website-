import React from "react";
import {
    Box,
    FooterContainer,
} from "./FooterStyles";


const Footer = () => {
    return(
        <Box>
            <FooterContainer>
            <h2
                style = {{color:"#D80032",
                        textAlign:"left",
                        marginTop: "1px",
                    }}
                    >
                        Contact:
                    </h2>
                    
                    <h3 style = {{textAlign: 'left', whiteSpace: 'pre-wrap', color: '#CE5A67'}} > Email: cadenmf24@gmail.com {'\n'} <a style = {{textAlign: 'left', color: '#CE5A67'}} href = "https://github.com/Cadenmf24" rel = "nonreferrer">GitHub: Cadenmf24</a></h3>
                    </FooterContainer>
        </Box>
    )
};

export default Footer;