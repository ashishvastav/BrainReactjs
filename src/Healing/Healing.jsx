import React, { useState } from "react";
import "../Brain/brain.css";
import PranikHealing from "../img/65.png";
import Modal from "react-modal";

const Healing = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Modal isOpen={modalIsOpen}>
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
        <button
          className="btn btn-outline-info"
          onClick={() => setModalIsOpen(false)}
        >
          Close
        </button>
      </Modal>

      <div>
        <div id="healing" class="text-center bg pt-3">
          <h3 class="astro-h">PRANIC HEALING / प्राण ऊर्जा उपचार</h3>

          <div class="container">
            <div class="text-center pb-3">
              <img
                className="img-style text-center"
                src={PranikHealing}
                alt="Pranik Healing"
              />
            </div>
            <p class="text-justify pb-3">
              प्राण ऊर्जा उपचार प्राचीन विज्ञान है जो मनुष्यों के शारिरीक,
              मानसिक और भावनात्मक रोगो को बिना औषधि के ठीक करता है प्राण ऊर्जा
              चिकित्सक व्यक्ति के समस्त चक्रों को व्यवस्थित करके उनमे ऊर्जा के
              प्रवाह को सुव्यवस्थित करके उन्हें स्वस्थ्य, ऊर्जावान और शक्तिशाली
              कर देता है, जिससे व्यक्ति की नाडियों और ओरा मे सकारात्मक ऊर्जा बढ
              जाती हैं और व्यक्ति की शारिरीक, मानसिक, भावनात्मक रुप से स्वस्थ्य
              होकर उच्च सफलता प्राप्त करता है, प्राण ऊर्जा चिकित्सा व्यक्ति को
              उच्च ऊर्जा के साथ जुडकर अपनी ऊर्जा को उच्चतम स्तर तक ले जाने का
              तरीका बताता है|
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

export default Healing;
