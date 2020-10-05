import React, { useState } from "react";
import "./cardsAstro.css";
import Astrologyy from "../img/astrology.jpg";
import Modal from "react-modal";

const Astrology = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Modal isOpen={modalIsOpen}>
        <div>
          <h2 className="pt-4">Modal Title</h2>

          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <button
          className="btn btn-outline-info"
          onClick={() => setModalIsOpen(false)}
        >
          Close
        </button>
      </Modal>

      <div id="astrology" className="bg-cover">
        <div class="text-center pt-3">
          <h3 class="astro-h">ASTROLOGY ज्योतिष</h3>

          <div class="container pb-3">
            <div>
              <img className="img-style" src={Astrologyy} alt="" />
            </div>
            <p class="text-justify">
              ज्योतिष शास्त्र मे मानव पर ग्रहों,सूर्य,तारो,नक्षत्रोंऔर पृथ्वी का
              शुभ अशुभ प्रभाव का अध्ययन किया जाता है,इसके द्वारा मानव के लिए कब
              क्या करना लाभदायक है या कौन सा कार्य करने से हानि हो सकती है,
              स्वास्थ्य की स्थिति कैसी रहेगी, किस प्रकार और किस बिषय की शिक्षा
              उन्नति प्रदत्त होगी, किस प्रकार का व्यवसाय, या सेवा लाभदायक होगी।
              इसके लिए कुंडली, हस्तरेखा, सामुद्रिक, अंकविज्ञान, मस्तक
              विज्ञान,टैरोकार्ड,रमल विज्ञान इत्यादि का सहयोग लिया जाता है।जो
              आपको सही दिशानिर्देश कर सकें।
              <a className="text-primary" onClick={() => setModalIsOpen(true)}>
                more info
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Astrology;
