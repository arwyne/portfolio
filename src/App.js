import React from "react"
import "./App.css"

// Sections
import Landing from "./components/landing/landing.jsx"
import About from "./components/about/about.jsx"
import Projects from "./components/projects/projects.jsx"
import Contact from "./components/contact/contact.jsx"

// AOS
import "aos/dist/aos.css"
import AOS from "aos"

function App() {
  AOS.init({
    easing: "ease-in",
    duration: 700,
  })
  return (
    <React.Fragment>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </React.Fragment>
  )
}

export default App
