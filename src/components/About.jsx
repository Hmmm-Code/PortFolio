import React from "react";

const About = () => {
  return (
    <section
      className="ftco-about img ftco-section ftco-no-pb"
      id="about-section"
    >
      <div className="container sec-container">
        <div className="row d-flex content-center">
          <div className="col-md-6 col-lg-5 d-flex d-none-img">
            <div className="img-about img d-flex align-items-stretch ">
              <div className="overlay"></div>
              <div
                className="img d-flex align-self-stretch align-items-center"
                id="bg-image"
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 pb-5 content-center-about">
            <div className="row justify-content-center pb-3">
              <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>
                <p>
                  Innovative Front End Developer with 2 years experience
                  building and maintaining responsive websites in the recruiting
                  industry. Proficient in HTML, CSS, JAVASCRIPT, REACT: plus
                  modern libraries and frameworks. Passionate about usability
                  and possess working knowledge of FIGMA
                </p>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex">
                    <span>Name:</span> <span>Muhammad Sohaib Khan</span>
                  </li>
                  <li className="d-flex">
                    <span>Date of birth:</span> <span>April 17, 1998</span>
                  </li>
                  <li className="d-flex">
                    <span>Address:</span> <span>Sharjah UAE</span>
                  </li>
                  <li className="d-flex">
                    <span>Zip code:</span> <span>0000</span>
                  </li>
                  <li className="d-flex">
                    <span>Email:</span> <span>skcbskcb0@gmail.com</span>
                  </li>
                  <li className="d-flex">
                    <span>Phone: </span> <span>+971582361890</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated">
              <div className="text">
                <p className="mb-4">
                  <span className="number" data-number="10">
                    10
                  </span>
                  <span> Project completed</span>
                </p>
                <p>
                  <a href="#" className="btn btn-primary py-3 px-3">
                    Download CV
                  </a>
                  <a href="#" className="btn btn-primary py-3 px-3">
                    Hire me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
