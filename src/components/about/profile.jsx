import React from "react";
import Fade from "react-reveal/Fade";

const Profile = () => {
  return (
    <div className="row profile-row">
      <div className="col-lg-5 offset-lg-1 profile-col">
        <div className="profile-header">
          <h3 className="sub-heading">Profile</h3>
        </div>
        <div className="profile-body">
          <Fade>
            <div className="image-container">
              <img
                className="img-fluid profile-img"
                src="/images/profile.png"
                alt=""
              />
            </div>
          </Fade>
          <p>
            I'm a Full Stack Developer and a Registered Mechanical Engineer.
            Coding is my passion since I was in teenage years but unfortunately
            my course in college is not related to tech and also my first job.
            But now I'm pursuing my career now as web developer because I enjoy
            it a lot. I have done projects in front-end and back-end web.
          </p>
        </div>
      </div>
      <div className="col-lg-4 profile-col">
        <div className="history-header">
          <h3 className="sub-heading"> Timeline</h3>
        </div>
        <div className="history-body">
          <Fade right cascade>
            <ul className="timeline-list">
              <li>
                <span className="time">2014</span>
                <div className="timeline-content">
                  <img
                    className="timeline-img"
                    src="/images/timeline-graduate.png"
                    alt="graduate"
                  />
                  <p>
                    I graduated at University of Santo Tomas with a bachelor's
                    degree in Mechanical Engineering and also took and passed
                    the board exam on this year.
                  </p>
                </div>
              </li>
              <li>
                <span className="time">2015</span>
                <div className="timeline-content">
                  <img
                    className="timeline-img"
                    src="/images/timeline-engineer.png"
                    alt="engineer"
                  />
                  <p>
                    Landed my first job and worked as a Project Engineer at
                    Maynilad Water Services Inc., a water utility company here
                    in the Philippines.
                  </p>
                </div>
              </li>
              <li>
                <span className="time">2020</span>
                <div className="timeline-content">
                  <img
                    className="timeline-img"
                    src="/images/timeline-code.png"
                    alt="code"
                  />
                  <p>
                    I decided to change my career to Tech industry and to pursue
                    my passion. I started by self-studying then eventually
                    decided to join Zuitt Coding Bootcamp.
                  </p>
                </div>
              </li>

              <li>
                <span className="time">present</span>
                <div className="timeline-content">
                  <img
                    className="timeline-img"
                    src="/images/timeline-present.png"
                    alt="developer"
                  />
                  <p>Now I'm pursuing my career as a Web Developer.</p>
                </div>
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Profile;
