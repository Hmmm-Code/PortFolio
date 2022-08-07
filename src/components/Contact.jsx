import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import MailIcon from "@mui/icons-material/Mail";
import PreviewIcon from "@mui/icons-material/Preview";

const Contact = () => {
  return (
    <section
      className="ftco-section contact-section ftco-no-pb"
      id="contact-section"
    >
      <div className="container sec-container">
        <div className="row justify-content-center  mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
            <h1 className="big big-2">Contact</h1>
            <h2 className="mb-4">Contact Me</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>

        <div className="row d-flex contact-info mb-5">
          <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-map-signs">
                  <HomeIcon />
                </span>
              </div>
              <h3 className="mb-4">Address</h3>
              <p>Sharjah UAE</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-map-signs">
                  <ContactsIcon />
                </span>
              </div>
              <h3 className="mb-4">Contact Number</h3>
              <p>
                <a href="tel://1234567920">+971 58 2361 890</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-map-signs">
                  <MailIcon />
                </span>
              </div>
              <h3 className="mb-4">Email Address</h3>
              <p>
                <a href="mailto:info@yoursite.com">skcbskcb0@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-map-signs">
                  <PreviewIcon />
                </span>
              </div>
              <h3 className="mb-4">Website</h3>
              <p>
                <a href="https://www.linkedin.com/in/muhammad-sohaib-khan-1b7108220/">
                  Linkedin
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="row no-gutters block-9 justify-content-center">
          <div className="col-md-6 order-md-last d-flex">
            <form action="#" className="bg-light p-4 p-md-5 contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
