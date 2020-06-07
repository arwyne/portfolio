import React from "react";
import Fade from "react-reveal/Fade";

const Standards = () => {
  return (
    <div className="row standards-row">
      <Fade>
        <div className="col-lg-4 offset-lg-2 col-md-10 offset-md-1 standards-img-container">
          <img
            className="skill-img img-fluid"
            src="/images/standards-img.png"
            alt=""
          />
        </div>
      </Fade>

      <div className="col-lg-4">
        <div className="standards-header">
          <h3 className="sub-heading"> Standards</h3>
        </div>
        <div className="standards-body">
          <ul className="standards-list">
            <Fade right cascade>
              <li>
                <img
                  className="standards-img"
                  src="/images/standards-webstandards.png"
                  alt="web standards"
                />
                <div className="standards-wrapper">
                  <h5>Up-to-date Web Standards</h5>
                  <p>
                    Making sure latest technologies are learned and implemented.
                  </p>
                </div>
              </li>

              <li>
                <img
                  className="standards-img"
                  src="/images/standards-responsive.png"
                  alt="responsive"
                />
                <div className="standards-wrapper">
                  <h5>Responsive Layout</h5>
                  <p>
                    A responsive design that is accessible to all users,
                    regardless of their device.
                  </p>
                </div>
              </li>

              <li>
                <img
                  className="standards-img"
                  src="/images/standards-ux.png"
                  alt="ux"
                />
                <div className="standards-wrapper">
                  <h5>Great User Experience</h5>
                  <p>Strong preference for easy to use, intuitive UX/UI.</p>
                </div>
              </li>

              <li>
                <img
                  className="standards-img"
                  src="/images/standards-dynamic.png"
                  alt="dynamic"
                />
                <div className="standards-wrapper">
                  <h5>Dynamic</h5>
                  <p>A highly functional and interactive website.</p>
                </div>
              </li>

              <li>
                <img
                  className="standards-img"
                  src="/images/standards-hd.png"
                  alt="hd image"
                />
                <div className="standards-wrapper">
                  <h5>High Resolution Graphics</h5>
                  <p>Good quality images for elegant looking website.</p>
                </div>
              </li>
            </Fade>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Standards;
