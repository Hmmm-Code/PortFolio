import React from "react";
import resume from "../components/assets/Sohaib_Resume.pdf";

const Resume = () => {
  return (
    <section className="ftco-section ftco-no-pb" id="resume-section">
      <div className="container sec-container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ftco-animate fadeInUp ftco-animated">
            <h1 className="big big-2">Resume</h1>
            <h2 className="mb-4">Resume</h2>
            <p>
              Innovative Front End Developer with 2 years experience building
              and maintaining responsive websites in the recruiting industry.
              Proficient in HTML, CSS, JAVASCRIPT, REACT: plus modern libraries
              and frameworks. Passionate about usability and possess working
              knowledge of FIGMA
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 justify-content-md-center">
            <div className="resume-wrap ftco-animate fadeInUp ftco-animated">
              <span className="date">2016-2020</span>
              <h2>BS in Computer Science</h2>
              <span className="position">University of Gujrat</span>
              <p className="mt-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            <div className="resume-wrap ftco-animate fadeInUp ftco-animated">
              <span className="date">2013-2016</span>
              <h2>Diploma In Information Tecnology</h2>
              <span className="position">Govt. Collage of technology</span>
              <p className="mt-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="resume-wrap ftco-animate fadeInUp ftco-animated">
              <span className="date">2021-2022</span>
              <h2>Front End Developer</h2>
              <span className="position">Hostollo</span>
              <p className="mt-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>

            <div className="resume-wrap ftco-animate fadeInUp ftco-animated">
              <span className="date">2016-2021</span>
              <h2>Computer Operator</h2>
              <span className="position">Ammar Amjad Cotton Industry</span>
              <p className="mt-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center ftco-animate fadeInUp ftco-animated">
            <p>
              <a
                href={resume}
                className="btn btn-primary py-4 px-5"
                download={resume}
              >
                Download CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
