import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/general" activeStyle>
                        General
                    </NavLink>
                    <NavLink to= "/aboutme" activeStyle>
                        About Me
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;