import React, { useState, useEffect } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import ShlfLogo from "../assets/shlf.svg";
import { Link } from "react-router-dom";

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
      <Navbar color="dark" dark expand="md" light>
        <NavbarBrand href="/">
          <img src={ShlfLogo} alt="Shlf Logo" width="150px" />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <Link to="/">
              <NavItem>
                <NavLink className="nav-link" onClick={closeMenu}>
                  <p>Home</p>
                </NavLink>
              </NavItem>
            </Link>
            <Link to="/shlfindex">
              <NavItem>
                <NavLink className="nav-link" onClick={closeMenu}>
                  Shlf
                </NavLink>
              </NavItem>
            </Link>
            <Link to="/blogindex">
              <NavItem>
                <NavLink
                  to="/blogindex"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Blog
                </NavLink>
              </NavItem>
            </Link>
            <Link to="/recipe">
              <NavItem>
                <NavLink to="/recipe" className="nav-link" onClick={closeMenu}>
                  Recipes
                </NavLink>
              </NavItem>
            </Link>
            <Link to="/about">
              <NavItem>
                <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                  About
                </NavLink>
              </NavItem>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default MenuBar;
