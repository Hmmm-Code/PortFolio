import React from "react";
import WebhookIcon from "@mui/icons-material/Webhook";

const Services = () => {
  return (
    <section className="ftco-section" id="services-section">
      <div className="container sec-container">
        <div className="row justify-content-center py-5 mt-5">
          <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
            <h1 className="big big-2">Services</h1>
            <h2 className="mb-4">Services</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
            <a href="#" className="services-1">
              <span className="icon">
                <WebhookIcon className="flaticon-ideas" fontSize="large" />
              </span>
              <div className="desc">
                <h3 className="mb-5">Web Design</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
            <a href="#" className="services-1">
              <span className="icon">
                <WebhookIcon className="flaticon-ideas" fontSize="large" />
              </span>
              <div className="desc">
                <h3 className="mb-5">Cryptography</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
            <a href="#" className="services-1">
              <span className="icon">
                <WebhookIcon className="flaticon-ideas" fontSize="large" />
              </span>
              <div className="desc">
                <h3 className="mb-5">Web Developer</h3>
              </div>
            </a>
          </div>

          <div className="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
            <a href="#" className="services-1">
              <span className="icon">
                <WebhookIcon className="flaticon-ideas" fontSize="large" />
              </span>
              <div className="desc">
                <h3 className="mb-5">App Developing</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
            <a href="#" className="services-1">
              <span className="icon">
                <WebhookIcon className="flaticon-ideas" fontSize="large" />
              </span>
              <div className="desc">
                <h3 className="mb-5">WordPress</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
            <a href="#" className="services-1">
              <span className="icon">
                <WebhookIcon className="flaticon-ideas" fontSize="medium" />
              </span>
              <div className="desc">
                <h3 className="mb-5">Social Media Marking</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
