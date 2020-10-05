import React from "react";
import "./social.css";

const Social = () => {
  return (
    <>
      <div id="social" className="row bg">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h3 className="pt-3 text-center astro-h">Follow Social Media</h3>
          <div className=" pt-5 pb-3 social-logo">
            <a
              className="social-media"
              href="https://www.facebook.com/The-Brainyoga-2547497705321178"
              target="blank"
              data-toggle="tooltip"
              title="facebook"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              className="social-media"
              href="https://twitter.com/sureshprabhu2"
              data-toggle="tooltip"
              target="blank"
              title="twitter"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              className="social-media"
              href="https://www.youtube.com/channel/UCFPrxH04R4MUa6bSukx67_Q"
              data-toggle="tooltip"
              target="blank"
              title="youtube"
            >
              <i className="fab fa-youtube" aria-hidden="true"></i>
            </a>
            <a
              className="social-media"
              href="https://vk.com/id428541601"
              target="blank"
              data-toggle="tooltip"
              title="VK"
            >
              <i className="fab fa-vk" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
