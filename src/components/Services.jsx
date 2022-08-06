import React from "react";
import WebhookIcon from "@mui/icons-material/Webhook";

const Services = () => {
  return (
    <section class="ftco-section" id="services-section">
      <div class="container sec-container">
        <div class="row justify-content-center py-5 mt-5">
          <div class="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
            <h1 class="big big-2">Services</h1>
            <h2 class="mb-4">Services</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
            <a href="#" class="services-1">
              <span class="icon">
                <WebhookIcon class="flaticon-ideas" fontSize="large" />
              </span>
              <div class="desc">
                <h3 class="mb-5">Web Design</h3>
              </div>
            </a>
          </div>
          <div class="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
            <a href="#" class="services-1">
              <span class="icon">
                <WebhookIcon class="flaticon-ideas" fontSize="large" />
              </span>
              <div class="desc">
                <h3 class="mb-5">Cryptography</h3>
              </div>
            </a>
          </div>
          <div class="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
            <a href="#" class="services-1">
              <span class="icon">
                <WebhookIcon class="flaticon-ideas" fontSize="large" />
              </span>
              <div class="desc">
                <h3 class="mb-5">Web Developer</h3>
              </div>
            </a>
          </div>

          <div class="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
            <a href="#" class="services-1">
              <span class="icon">
                <WebhookIcon class="flaticon-ideas" fontSize="large" />
              </span>
              <div class="desc">
                <h3 class="mb-5">App Developing</h3>
              </div>
            </a>
          </div>
          <div class="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
            <a href="#" class="services-1">
              <span class="icon">
                <WebhookIcon class="flaticon-ideas" fontSize="large" />
              </span>
              <div class="desc">
                <h3 class="mb-5">WordPress</h3>
              </div>
            </a>
          </div>
          <div class="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
            <a href="#" class="services-1">
              <span class="icon">
                <WebhookIcon class="flaticon-ideas" fontSize="medium" />
              </span>
              <div class="desc">
                <h3 class="mb-5">Social Media Marking</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
