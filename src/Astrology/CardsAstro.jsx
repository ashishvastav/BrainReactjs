import React from "react";

const CardsAstro = () => {
  return (
    <>
      <div>
        <div className="col-md-3 col-lg-3 col-sm-12 col-10 mx-auto pb-3">
          <div className="card">
            <img src={cardname.imgsrc} class="card-img-top" alt="Image" />
            <div className="card-body">
              <h5 className="card-title">{cardname.title}</h5>
              <p className="card-text text-primary">{cardname.text}</p>
              <Link to={cardname.visit} className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default CardsAstro;
