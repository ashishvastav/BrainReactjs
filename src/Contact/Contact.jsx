import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <div id="contact" className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1 className="astro-h text-center pt-3">Contact Us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 pb-3">
            <p className="contact-fill  pt-3">
              <i className="fas fa-address-card"></i> Fill Your Details
            </p>
            <form action="sendEmail.php" method="post" className="form-signin">
              <div className="form-label-group">
                <label for="inputEmail">
                  From <span className="label-style">*</span>
                </label>
                <input
                  type="text"
                  name="fromEmail"
                  id="fromEmail"
                  className="form-control"
                  placeholder="From Email "
                  required
                />
              </div>
              <br />
              <div className="form-label-group">
                <label for="inputEmail">
                  To <span className="label-style">*</span>
                </label>
                <input
                  type="text"
                  name="toEmail"
                  id="toEmail"
                  className="form-control"
                  value="jyotish.ratna@gmail.com"
                  readonly
                  required
                />
              </div>
              <br />
              <label for="inputPassword">
                Subject <span className="label-style">*</span>
              </label>
              <div className="form-label-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>
              <br />
              <label for="inputPassword">
                Message <span className="label-style">*</span>
              </label>
              <div className="form-label-group">
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <br />
              <button
                type="submit"
                name="sendMailBtn"
                className="btn btn-lg btn-danger btn-block text-uppercase"
              >
                Send Email
              </button>
            </form>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 contact-style pt-3 pl-3 ">
            <h3>Suresh Prabhu</h3>
            <h5>
              <i class="fas fa-map-marker-alt"></i>
              <span className="text-danger"> ADDRESS:</span> Ratna Kendra,Shiv
              Shankar Complex,Town Hall Road, Ballia-277001
            </h5>
            <h5>
              <i class="fas fa-envelope-open-text"></i>
              <span className="text-danger"> EMAIL ID:</span>
              jyotish.ratna@gmail.com
            </h5>
            <div className>
              <iframe
                className="api-map embed-responsive embed-responsive-16by9"
                width="350"
                height="300"
                frameborder="0"
                src="https://www.google.com/maps/embed/v1/view?zoom=17&center=25.7568%2C84.1489&key=AIzaSyDa9Gy0njauDw_LRA0TdzvbWCMKvGinlBc"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
