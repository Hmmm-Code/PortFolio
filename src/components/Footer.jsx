import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-section">
      <div className="container sec-container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>
                Innovative Front End Developer with 2 years experience building
                and maintaining responsive websites in the recruiting industry.
                Proficient in HTML, CSS, JAVASCRIPT, REACT: plus modern
                libraries and frameworks. Passionate about usability and possess
                working knowledge of FIGMA
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate fadeInUp ftco-animated">
                  <a href="https://www.linkedin.com/in/muhammad-sohaib-khan-1b7108220/">
                    <span className="icon-linkedin">
                      <LinkedInIcon fontSize="large" />
                    </span>
                  </a>
                </li>
                <li className="ftco-animate fadeInUp ftco-animated">
                  <a href="https://www.facebook.com/profile.php?id=100080025653362">
                    <span className="icon-facebook">
                      <FacebookIcon fontSize="large" />
                    </span>
                  </a>
                </li>
                <li className="ftco-animate fadeInUp ftco-animated">
                  <a href="https://github.com/Hmmm-Code">
                    <span className="icon-github test">
                      <GitHubIcon fontSize="large" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Projects
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Web
                    Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Web
                    Development
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>SEO
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>DEVOPS
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>FIGMA
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker">
                      <HomeIcon />
                    </span>
                    <span className="text">Sharjah UAE</span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-phone">
                        <ContactsIcon />
                      </span>
                      <span className="text">+971 58 2361 890</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-envelope">
                        <MailIcon />
                      </span>

                      <span className="text">skcbskcb0@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
