import React from "react";
import CardsAbout from "./CardsAbout";
import CardsBrain from "./CardsBrain";
import "./brain.css";

const Brain = () => {
  return (
    <>
      <div id="brain" className="bg">
        <div className="container text-center pt-3">
          <h2 class="astro-h">BRAIN YOGA ब्रेन योगा</h2>

          <div class="text-center">
            <p class="text-justify">
              जैसे जैसे मानव का विकास होता गया मानव अपने आप को और विकसित करने के
              लिए खोज करने लगा,इसी खोज का नतीजा है ब्रेन योगा। / The journey to
              becom a genius and super human.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-9 mx-auto">
            <div className="row gy-2 pt-2">
              {CardsAbout.map((val, ind) => {
                return (
                  <CardsBrain
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    visit={val.visit}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brain;
