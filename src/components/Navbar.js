import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "./Navbar.css";
import {
  MdFingerprint,
  MdLaptop,
  MdLaptopChromebook,
  MdLaptopWindows,
} from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return {
      // window.removeEventListener('resize', showButton)
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#1c2237" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <LinkS
              to="bioo"
              className="navbar-logo"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onClick={closeMobileMenu}
            >
              <MdLaptopWindows className="navbar-icon" />
              VLACK-CODER
            </LinkS>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <LinkS
                  to="bioo"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass='active'
                >
                  Home
                </LinkS>
              </li>
              <li className="nav-item">
                <LinkS
                  to="projects"
                  smooth={true}
                  duration={600}
                  spy={true}
                  offset={-160}
                  className="nav-links"
                  onClick={closeMobileMenu}
                  activeClass='active'
                >
                  Projects
                </LinkS>
              </li>
              <li className="nav-item">
                <LinkS
                  to="kontact"
                  smooth={true}
                  duration={600}
                  spy={true}
                  offset={-80}
                  className="nav-links"
                  onClick={closeMobileMenu}
                  activeClass='active'
                >
                  Contact
                </LinkS>
              </li>
              <li className="nav-btn">
                {button ? (
                  <LinkS to="/sign-up" className="btn-link">
                    <Button
                      buttonStyle="btn--primary"
                      // buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    ></Button>
                  </LinkS>
                ) : (
                  <LinkS to="/sign-up" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </LinkS>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
