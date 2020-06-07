import React from "react";
import "./App.css";
import Landing from "./components/landing/landing.jsx";
import About from "./components/about/about.jsx";
import Projects from "./components/projects/projects.jsx";
import Contact from "./components/contact/contact.jsx";

function App() {
  return (
    <React.Fragment>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default App;
