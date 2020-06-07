import React from "react";
import "./about.css";
import Profile from "./profile";
import Skills from "./skills";
import Standards from "./standards";

const About = () => {
  return (
    <section className="container-fluid" id="about">
      <h2 className="main-heading">About</h2>

      <Profile />
      <Skills />
      <Standards />
    </section>
  );
};

export default About;
