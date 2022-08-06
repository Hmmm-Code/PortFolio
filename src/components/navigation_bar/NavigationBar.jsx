import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavigationBar = () => {
  const toggleButton = () => {};
  //   Pending work make toggle button work in mobile view screen work
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target">
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
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleButton}
          >
            <MenuIcon fontSize="large" /> Menu
          </button>
          <div className="navbar-collapse collapse" id="ftco-nav">
            <ul className="navbar-nav nav ml-auto">
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
