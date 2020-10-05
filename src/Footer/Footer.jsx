import React from "react";

const Footer = () => {
  return (
    <>
      <div id="footer" className="bg-dark">
        <div class="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
              <p className="text-white">
                &copy; 2020 Brain Yoga <br /> Brain Yoga Co-operation with
                Russian Yoga and Technologies <br />
                Website Developed by
                <a
                  href="https://ashishsri.com"
                  target="blank"
                  data-toggle="tooltip"
                  title="Ashish Website"
                >
                  <span class="text-primary"> Ashish Srivastava</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
