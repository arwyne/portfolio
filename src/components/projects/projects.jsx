import React from "react"
import "./projects.css"

const Projects = () => {
  return (
    <section className="container-fluid" id="projects">
      <h2 className="main-heading">Projects</h2>

      <div className="projects-container">
        <div className="row projects-row">
          <div className="col-lg-4">
            <div className="card" data-aos="fade" data-aos-delay="100">
              <div className="card-img-container">
                <a
                  href="https://arwyne-proshop.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="card-img-top"
                    src="/images/proshop.jpg"
                    alt="proshop"
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Pro Shop</h5>
                <p className="card-text">
                  Created an online store with the same functionality of modern
                  e-commerce website. Used MERN Stack (MongoDB, Express,
                  ReactJS, NodeJS) with Redux.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card" data-aos="fade" data-aos-delay="100">
              <div className="card-img-container">
                <a
                  href="https://cut-n-shave.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="card-img-top"
                    src="/images/cutnshave.jpg"
                    alt="cutnshave"
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Cut 'N' Shave</h5>
                <p className="card-text">
                  Created an booking application using the MERNG Stack (MongoDB,
                  Express, ReactJS, NodeJS, GraphQL). This project is about
                  booking of barbershop online.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card" data-aos="fade" data-aos-delay="100">
              <div className="card-img-container">
                <a
                  href="https://carhub.arwynedeguzman.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="card-img-top"
                    src="/images/carhub.jpg"
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

          <div className="col-lg-4">
            <div className="card" data-aos="fade" data-aos-delay="100">
              <div className="card-img-container">
                <a
                  href="http://covid19quickie.arwynedeguzman.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="card-img-top"
                    src="/images/covid19quickie.jpg"
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

          <div className="col-lg-4">
            <div className="card" data-aos="fade" data-aos-delay="100">
              <div className="card-img-container">
                <a
                  href="https://arwyne.gitlab.io/akyat-ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="card-img-top"
                    src="/images/akyatph.jpg"
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

          <div className="col-lg-4">
            <div className="card" data-aos="fade" data-aos-delay="100">
              <div className="card-img-container">
                <a
                  href="https://arwyne.github.io/natour/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="card-img-top"
                    src="/images/natours.jpg"
                    alt="natours"
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Natours</h5>
                <p className="card-text">
                  A static website showcasing CSS effects and animations. Used
                  HTML and SASS to build the website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
