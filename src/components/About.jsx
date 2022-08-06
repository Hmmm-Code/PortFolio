import React from "react";

const About = () => {
  return (
    <section class="ftco-about img ftco-section ftco-no-pb" id="about-section">
      <div class="container sec-container">
        <div class="row d-flex">
          <div class="col-md-6 col-lg-5 d-flex">
            <div class="img-about img d-flex align-items-stretch">
              <div class="overlay"></div>
              <div
                class="img d-flex align-self-stretch align-items-center"
                id="bg-image"
              ></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-7 pl-lg-5 pb-5">
            <div class="row justify-content-start pb-3">
              <div class="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                <h1 class="big">About</h1>
                <h2 class="mb-4">About Me</h2>
                <p>
                  Innovative Front End Developer with 2 years experience
                  building and maintaining responsive websites in the recruiting
                  industry. Proficient in HTML, CSS, JAVASCRIPT, REACT: plus
                  modern libraries and frameworks. Passionate about usability
                  and possess working knowledge of FIGMA
                </p>
                <ul class="about-info mt-4 px-md-0 px-2">
                  <li class="d-flex">
                    <span>Name:</span> <span>Muhammad Sohaib Khan</span>
                  </li>
                  <li class="d-flex">
                    <span>Date of birth:</span> <span>April 17, 1998</span>
                  </li>
                  <li class="d-flex">
                    <span>Address:</span> <span>Sharjah UAE</span>
                  </li>
                  <li class="d-flex">
                    <span>Zip code:</span> <span>0000</span>
                  </li>
                  <li class="d-flex">
                    <span>Email:</span> <span>skcbskcb0@gmail.com</span>
                  </li>
                  <li class="d-flex">
                    <span>Phone: </span> <span>+971582361890</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated">
              <div class="text">
                <p class="mb-4">
                  <span class="number" data-number="10">
                    10
                  </span>
                  <span> Project completed</span>
                </p>
                <p>
                  <a href="#" class="btn btn-primary py-3 px-3">
                    Download CV
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
