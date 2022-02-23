import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
    <header class="masthead mb-auto">
      
      <div class="inner">
      <nav className="navbar nav nav-masthead justify-content-center">
        <div className="navbar-container">
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            RYDG
          </NavLink>
          <div className="nav-link" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/shlfindex"
                className="nav-link"
                onClick={closeMenu}
              >
                Shlf
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogindex" className="nav-link" onClick={closeMenu}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
        
      </nav>
      </div>
    </header>
  );
}
export default Navbar;
