import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import MailIcon from "@mui/icons-material/Mail";
import PreviewIcon from "@mui/icons-material/Preview";

const Footer = () => {
  return (
    <footer class="ftco-footer ftco-section">
      <div class="container sec-container">
        <div class="row mb-5">
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">About</h2>
              <p>
                Innovative Front End Developer with 2 years experience building
                and maintaining responsive websites in the recruiting industry.
                Proficient in HTML, CSS, JAVASCRIPT, REACT: plus modern
                libraries and frameworks. Passionate about usability and possess
                working knowledge of FIGMA
              </p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate fadeInUp ftco-animated">
                  <a href="https://www.linkedin.com/in/muhammad-sohaib-khan-1b7108220/">
                    <span class="icon-linkedin">
                      <LinkedInIcon fontSize="large" />
                    </span>
                  </a>
                </li>
                <li class="ftco-animate fadeInUp ftco-animated">
                  <a href="https://www.facebook.com/profile.php?id=100080025653362">
                    <span class="icon-facebook">
                      <FacebookIcon fontSize="large" />
                    </span>
                  </a>
                </li>
                <li class="ftco-animate fadeInUp ftco-animated">
                  <a href="https://github.com/Hmmm-Code">
                    <span class="icon-github test">
                      <GitHubIcon fontSize="large" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-4">
              <h2 class="ftco-heading-2">Links</h2>
              <ul class="list-unstyled">
                <li>
                  <a href="#">
                    <span class="icon-long-arrow-right mr-2"></span>Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon-long-arrow-right mr-2"></span>About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon-long-arrow-right mr-2"></span>Services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon-long-arrow-right mr-2"></span>Projects
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon-long-arrow-right mr-2"></span>Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Services</h2>
              <ul class="list-unstyled">
                <li>
                  <a href="#">
                    <span class="icon-long-arrow-right mr-2"></span>Web Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon-long-arrow-right mr-2"></span>Web
                    Development
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon-long-arrow-right mr-2"></span>SEO
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon-long-arrow-right mr-2"></span>DEVOPS
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon-long-arrow-right mr-2"></span>FIGMA
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Have a Questions?</h2>
              <div class="block-23 mb-3">
                <ul>
                  <li>
                    <span class="icon icon-map-marker">
                      <HomeIcon />
                    </span>
                    <span class="text">Sharjah UAE</span>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon icon-phone">
                        <ContactsIcon />
                      </span>
                      <span class="text">+971 58 2361 890</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon icon-envelope">
                        <MailIcon />
                      </span>

                      <span class="text">skcbskcb0@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
