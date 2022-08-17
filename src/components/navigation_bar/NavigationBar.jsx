import React, { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavigationBar = () => {
  const refCollapse = useRef(null);
  const [ariaExpanded, setAreaExpended] = useState(false);

  const HandleNavClick = (e) => {
    console.log(e);
    // e.target.parentElement.classList.toggle("active");
  };

  // Menu button in mobile screen view
  const toggleButton = (e) => {
    e.target.classList.toggle("active");
    if (!ariaExpanded) {
      setAreaExpended(true);
    } else {
      setAreaExpended(false);
    }
    refCollapse.current.classList.toggle("show");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target sticky">
        <div className="container sec-container">
          <a href="#home-section" className="navbar-brand">
            Muhammad Sohaib
          </a>
          <button
            className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded={ariaExpanded}
            aria-label="Toggle navigation"
            onClick={toggleButton}
          >
            <MenuIcon fontSize="large" /> Menu
          </button>
          <div
            className="navbar-collapse collapse"
            ref={refCollapse}
            id="ftco-nav"
          >
            <ul onClick={HandleNavClick} className="navbar-nav nav ml-auto">
              <li className="nav-item">
                <a href="#home-section" className="nav-link active">
                  <span>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about-section" className="nav-link">
                  <span>About</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#resume-section" className="nav-link">
                  <span>Resume</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#services-section" className="nav-link">
                  <span>Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills-section" className="nav-link">
                  <span>Skills</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects-section" className="nav-link">
                  <span>Projects</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="#contact-section" className="nav-link">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
