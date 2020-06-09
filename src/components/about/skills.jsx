import React from "react";

const Skills = () => {
  return (
    <div className="row skills">
      <div className="col-lg-4 offset-lg-2">
        <div className="skills-header">
          <h3 className="sub-heading">Skills</h3>
        </div>
        <div className="skills-body">
          <div className="frontend-container">
            <h4>Front-end</h4>
            <div className="frontend-content">
              <div>
                <img
                  className="skill-icons"
                  src="/images/icon-html.png"
                  alt="icon-html"
                />
                <p>HTML</p>
              </div>

              <div>
                <img
                  className="skill-icons"
                  src="/images/icon-css.png"
                  alt="icon-css"
                />
                <p>CSS</p>
              </div>

              <div>
                <img
                  className="skill-icons"
                  src="/images/icon-js.png"
                  alt="icon-js"
                />
                <p>JavaScript</p>
              </div>

              {/* <div>
                <img
                className="skill-icons"
                src="/images/icon-jquery.png"
                alt="icon-jquery"
                />
                <p>jQuery</p>
              </div> */}

              <div>
                <img
                  className="skill-icons"
                  src="/images/icon-bootstrap.png"
                  alt="icon-bootstrap"
                />
                <p>Bootstrap</p>
              </div>

              <div>
                <img
                  className="skill-icons"
                  src="/images/icon-sass.png"
                  alt="icon-sass"
                />
                <p>Sass</p>
              </div>

              <div>
                <img
                  className="skill-icons"
                  src="/images/icon-react.png"
                  alt="icon-react"
                />
                <p>React</p>
              </div>
            </div>
          </div>

          <div className="backend-container">
            <h4>Back-end</h4>
            <div className="backend-content">
              <div>
                <img
                  className="skill-icons"
                  src="/images/icon-php.png"
                  alt="icon-php"
                />
                <p>PHP</p>
              </div>

              <div>
                <img
                  className="skill-icons"
                  src="/images/icon-laravel.png"
                  alt="icon-laravel"
                />
                <p>Laravel</p>
              </div>

              <div>
                <img
                  className="skill-icons"
                  src="/images/icon-mysql.png"
                  alt="icon-mysql"
                />
                <p>MySQL</p>
              </div>

              <div>
                <img
                  className="skill-icons"
                  src="/images/icon-mongodb.png"
                  alt="icon-mongodb"
                />
                <p>MongoDB</p>
              </div>

              <div>
                <img
                  className="skill-icons"
                  src="/images/icon-node.png"
                  alt="icon-node"
                />
                <p>Nodejs</p>
              </div>

              <div>
                <img
                  className="skill-icons"
                  src="/images/icon-graphql.png"
                  alt="icon-graphql"
                />
                <p>GraphQL</p>
              </div>
            </div>
          </div>

          <div className="tools-container">
            <h4>Other Tools</h4>
            <div className="tools-content">
              <div>
                <img
                  className="skill-icons"
                  src="/images/icon-git.png"
                  alt="icon-git"
                />
                <p>Git</p>
              </div>

              <div>
                <img
                  className="skill-icons"
                  src="/images/icon-github.png"
                  alt="icon-github"
                />
                <p>GitHub</p>
              </div>

              <div>
                <img
                  className="skill-icons"
                  src="/images/icon-gitlab.png"
                  alt="icon-gitlab"
                />
                <p>GitLab</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 skill-img-container">
        <img
          className="skill-img img-fluid"
          src="/images/skills-img.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Skills;
