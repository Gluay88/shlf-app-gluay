import React, { useState, useEffect } from "react";
// import { Button } from "./Button";
import { NavLink } from "react-router-dom";
// import "./Navbar.css";
function Navbar() {
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
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
            RYDG
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/shlfindex"
                className="nav-links"
                onClick={closeMenu}
              >
                Shlf
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogindex" className="nav-links" onClick={closeMenu}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-links" onClick={closeMenu}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
