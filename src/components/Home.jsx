import React from "react";
import Resume from "../components/assets/Sohaib_Resume.pdf";

const Home = () => {
  return (
    <section id="intro">
      <div className="intro-overlay"></div>
      <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <h5>Hello, World.</h5>
            <h1 className="intro-name ">I'm Muhammad Sohaib.</h1>

            <p className="intro-position">
              <span>Front-end Developer</span>
              <span>UI/UX Designer</span>
            </p>

            <a
              className="btn btn-primary py-3 px-3"
              href={Resume}
              title=""
              download={Resume}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
