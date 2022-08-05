import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavigationBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target">
        <div className="container">
          <a href="#home-section" className="navbar-brand">
            Muhammad Sohaib
          </a>
          <button
            class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MenuIcon fontSize="large" /> Menu
          </button>
          <div class="navbar-collapse collapse" id="ftco-nav">
            <ul class="navbar-nav nav ml-auto">
              <li class="nav-item">
                <a href="#home-section" class="nav-link active">
                  <span>Home</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#about-section" class="nav-link">
                  <span>About</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#resume-section" class="nav-link">
                  <span>Resume</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#services-section" class="nav-link">
                  <span>Services</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#skills-section" class="nav-link">
                  <span>Skills</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#projects-section" class="nav-link">
                  <span>Projects</span>
                </a>
              </li>

              <li class="nav-item">
                <a href="#contact-section" class="nav-link">
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
