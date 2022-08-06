import React from "react";

const Home = () => {
  return (
    <section id="intro">
      <div class="intro-overlay"></div>
      <div class="intro-content">
        <div class="row">
          <div class="col-twelve">
            <h5>Hello, World.</h5>
            <h1 className="intro-name ">I'm Muhammad Sohaib.</h1>

            <p class="intro-position">
              <span>Front-end Developer</span>
              <span>UI/UX Designer</span>
            </p>

            <a class="btn btn-primary py-3 px-3" href="#about" title="">
              Download CV
            </a>
          </div>
        </div>
      </div>

      <ul class="intro-social">
        <li>
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-behance"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-dribbble"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Home;
