import React from "react";

import { Link } from "react-router-dom";
import "../Brain/cardsbrain.css";

const CardsBrain = (cardname) => {
  return (
    <>
      <div className="col-md-3 col-xl-3 col-lg-3 col-sm-12 col-9 mx-auto pb-5 card-font ">
        <div className="card">
          <img src={cardname.imgsrc} class="card-img-top" alt="Image" />
          <div className="card-body">
            <h5 className="card-title text-center">{cardname.title}</h5>
            <p className="card-text text-primary text-body">{cardname.text}</p>
            <div className="text-center">
              <Link
                to={cardname.visit}
                data-toggle="tooltip"
                title="More Info"
                className="btn btn-outline-info text-center"
              >
                More Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsBrain;
