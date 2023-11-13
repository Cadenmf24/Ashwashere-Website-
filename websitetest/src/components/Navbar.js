import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="ashwashere/general" activeStyle>
                        General
                    </NavLink>
                    <NavLink to= "ashwashere/aboutme" activeStyle>
                        About Me
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;