import React from "react";
import "./projects.css";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <section className="container-fluid" id="projects">
      <h2 className="main-heading">Projects</h2>

      <div className="projects-container">
        <div className="row projects-row">
          <Fade>
            <div className="col-lg-6">
              <div class="card">
                <div className="card-img-container">
                  <a href="https://carhub-ph.herokuapp.com/" target="_blank">
                    <img
                      class="card-img-top"
                      src="/images/carhub.png"
                      alt="Card image cap"
                    />
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">CarHub</h5>
                  <p class="card-text">
                    Created an asset management system using Laravel and MySQL.
                    The project is about Car Rental System.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div class="card">
                <div className="card-img-container">
                  <a
                    href="https://covid19quickie.herokuapp.com/"
                    target="_blank"
                  >
                    <img
                      class="card-img-top"
                      src="/images/covid19quickie.png"
                      alt="Card image cap"
                    />
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Covid19 Quickie</h5>
                  <p class="card-text">
                    A mini project that can help people assess their status
                    regarding Covid-19. Used PHP and MySQL database to build the
                    website.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div class="card">
                <div className="card-img-container">
                  <a
                    href="https://arwyne.gitlab.io/akyat-ph/home.html"
                    target="_blank"
                  >
                    <img
                      class="card-img-top"
                      src="/images/akyatph.png"
                      alt="Card image cap"
                    />
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Akyat PH</h5>
                  <p class="card-text">
                    A static website showcasing a topic of my choice. Used HTML,
                    CSS and Bootstrap to build the website.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Projects;
