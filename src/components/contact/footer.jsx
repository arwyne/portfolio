import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="icons-container">
        <a className="navbar-brand" href="#home">
          <img className="logo" src="/images/logo.png" alt="logo" />
          <span>&lt;Arwyne/&gt;</span>
        </a>
        <a
          href="https://www.facebook.com/arwyne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-square socialmedia-icons"></i>
        </a>

        <a
          href="https://www.instagram.com/arwinsurewin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram socialmedia-icons"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/arwynedeguzman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin socialmedia-icons"></i>
        </a>

        <a
          href="https://github.com/arwyne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github socialmedia-icons"></i>
        </a>
      </div>

      <div>&copy; 2020 Arwyne De Guzman. All Rights Reserved.</div>
    </footer>
  )
}

export default Footer
