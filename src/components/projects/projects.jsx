import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <section className="container-fluid" id="projects">
      <h2 className="main-heading">Projects</h2>

      <div className="projects-container">
        <div className="row projects-row">
          <div className="col-lg-6">
            <div className="card" data-aos="fade" data-aos-delay="100">
              <div className="card-img-container">
                <a
                  href="https://cut-n-shave.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="card-img-top"
                    src="/images/cutnshave.png"
                    alt="cutnshave"
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Cut 'N' Shave</h5>
                <p className="card-text">
                  Created an booking application using the MERN Stack (MongoDB,
                  Express, ReactJS, NodeJS). This project is about booking of
                  barbershop online.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card" data-aos="fade" data-aos-delay="100">
              <div className="card-img-container">
                <a
                  href="https://carhub-ph.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="card-img-top"
                    src="/images/carhub.png"
                    alt="carhub"
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">CarHub</h5>
                <p className="card-text">
                  Created an asset management system using Laravel and MySQL.
                  The project is about Car Rental System.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card" data-aos="fade" data-aos-delay="100">
              <div className="card-img-container">
                <a
                  href="https://covid19quickie.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="card-img-top"
                    src="/images/covid19quickie.png"
                    alt="covid19quickie"
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Covid19 Quickie</h5>
                <p className="card-text">
                  A mini project that can help people assess their status
                  regarding Covid-19. Used PHP and MySQL database to build the
                  website.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card" data-aos="fade" data-aos-delay="100">
              <div className="card-img-container">
                <a
                  href="https://arwyne.gitlab.io/akyat-ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="card-img-top"
                    src="/images/akyatph.png"
                    alt="akyatph"
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Akyat PH</h5>
                <p className="card-text">
                  A static website showcasing a topic of my choice. Used HTML,
                  CSS and Bootstrap to build the website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
