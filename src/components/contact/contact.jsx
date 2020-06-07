import React, { Component } from "react";
import Footer from "./footer";
import "./contact.css";
import swal from "sweetalert";
import Fade from "react-reveal/Fade";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.sweetalertfunction = this.sweetalertfunction.bind(this);
  }

  sweetalertfunction(e) {
    swal("Success!", "Your message has been sent!", "success");
    e.preventDefault();
  }

  render() {
    return (
      <section className="fluid-container" id="contact">
        <div className="contact-header">
          <h2 className="main-heading">Contact</h2>
          <h5 className="text-center">
            Have a question or want to work together?
          </h5>
        </div>
        <Fade bottom>
          <div className="contact-container">
            <div className="col-lg-4 offset-lg-4">
              <form action="">
                <div class="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter email"
                    required
                  />
                </div>

                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  rows="8"
                  placeholder="Message"
                ></textarea>

                <button
                  className="btn"
                  type="submit"
                  onClick={this.sweetalertfunction}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </Fade>
        <Footer />
      </section>
    );
  }
}

export default Contact;
