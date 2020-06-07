import React from "react";

const Nav = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-md">
      <a className="navbar-brand" href="#home">
        <img className="logo" src="/images/logo.png" alt="logo" />
        <span>&lt;Arwyne/&gt;</span>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navCollapse"
      >
        <span>
          <i className="fas fa-angle-double-down toggler-icon"></i>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
