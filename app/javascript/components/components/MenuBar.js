import React, { useState, useEffect } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink,} from "reactstrap";
import ShlfLogo from "../assets/shlf.svg"
import "./MenuBar.css"






// import "./Navbar.css";
function MenuBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);


  return (
    <div>
  <Navbar
    color="dark"
    dark
    expand="md"
    light >
      
    <NavbarBrand href="/">
    <img src={ShlfLogo} alt="Shlf Logo" width="150px" />
        
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink to= "/" className="nav-link" onClick={closeMenu}>
                <p>Home</p>
          </NavLink>
          </NavItem>
          <NavItem>
          <NavLink to="/shlfindex" className="nav-link" onClick={closeMenu}>
                Shlf
           </NavLink>
           </NavItem>
           <NavItem>
          <NavLink to="/blogindex" className="nav-link" onClick={closeMenu}>
                Blog
          </NavLink >
          </NavItem>
          <NavItem>
            <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                About
          </NavLink>
          </NavItem>
          <NavItem>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                Login
          </NavLink>
          </NavItem>
        </Nav>
    
    </Collapse>
  </Navbar>
</div>
  
  );
}
export default MenuBar;
