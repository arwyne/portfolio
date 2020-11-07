import React, { useState } from "react"
import Footer from "./footer"
import "./contact.css"
import swal from "sweetalert"
import emailjs from "emailjs-com"

const Contact = () => {
  // document.cookie = "same-site-cookie=foo; SameSite=Lax";
  // document.cookie = "cross-site-cookie=bar; SameSite=None; Secure";
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()
    if (name !== "" && email !== "" && message !== "") {
      emailjs
        .sendForm(
          "gmail",
          "template_1sgpDBoN",
          e.target,
          "user_bApAsXHS9cJXljRC0oCKU"
        )
        .then(
          (result) => {
            swal({
              title: "Your message has been sent!",
              text: "Thanks, " + name,
              icon: "success",
            })
            console.log(result.text)
          },
          (error) => {
            swal({
              title: "Message not sent!",
              text:
                "Something went wrong, please try again or directly contact me at arwynedeguzman@gmail.com",
              icon: "error",
            })
            console.log(error.text)
          }
        )
        .then(e.target.reset())
    } else {
      swal({
        title: "Message not sent!",
        text:
          "Something went wrong, please try again or directly contact me at arwynedeguzman@gmail.com",
        icon: "error",
      })
    }
  }

  return (
    <section className="fluid-container" id="contact">
      <div className="contact-header">
        <h2 className="main-heading">Contact</h2>
      </div>
      <div className="contact-container">
        <div className="row contact-row-container">
          <div
            className="col-lg-4 offset-lg-2 col-md-12"
            data-aos="fade"
            data-aos-delay="100"
            data-aos-anchor-placement="top-center"
          >
            <h5 className="text-center">
              Have a question or want to work together?
            </h5>
            <form action="" onSubmit={(e) => sendEmail(e)}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="form-control"
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <textarea
                className="form-control"
                name="message_html"
                id="message"
                rows="8"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </div>

          <div
            className="col-lg-4 offset-lg-0 col-md-8 offset-md-2 location-container"
            data-aos="fade"
            data-aos-delay="200"
            data-aos-anchor-placement="top-center"
          >
            <h5 className="text-center">Location</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30894.231055404438!2d121.01568025544793!3d14.554633587667663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90264a0ed01%3A0x2b066ed57830cace!2sMakati%2C%20Kalakhang%20Maynila!5e0!3m2!1sfil!2sph!4v1592594456474!5m2!1sfil!2sph"
              style={{
                // frameborder: "0",
                border: "none",
                width: "100%",
                minHeight: "470px",
              }}
              title="location"
              className="img-fluid"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Contact
