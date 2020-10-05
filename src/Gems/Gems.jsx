import React from "react";

import "../Astrology/cardsAstro.css";
import GemsImage from "../img/Gems.png";

const Gems = () => {
  return (
    <>
      <div id="gem">
        <div className="text-center bg-cover pt-3">
          <h3 className="astro-h">Gems / रत्न</h3>

          <div className="container">
            <div>
              <img
                className="img-style-gems img-fluid"
                src={GemsImage}
                alt="Gems"
              />
            </div>
            <p className="text-justify">
              रत्नों का मानव जीवन पर बहुत बडा प्रभाव है, रत्नों का प्रयोग मानव
              अपनी उन्नति , स्वास्थ्य,संमृद्धि, मान - सम्मान और सुंदरता को बढाने
              के लिए सदीयों से करता रहा है।
              <a
                className="text-primary"
                data-toggle="modal"
                data-target="#myContact"
              >
                more
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gems;
