import React from "react";
import Brain from "../Brain/Brain";
import "./home.css";
import Astrology from "../Astrology/Astrology";
import Image from "../img/IMG_3232.JPG";
import Image1 from "../img/new.JPG";
import Image2 from "../img/Sureshwith.jpeg";

import Carousel from "react-bootstrap/Carousel";
import Healing from "../Healing/Healing";
import "./home.css";
import Cooperation from "../Cooperation";
import Gems from "../Gems/Gems";
import Social from "../Social Media/Social";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <div id="home">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Image} alt="First slide" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Image1} alt="Third slide" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Image2} alt="Third slide" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Cooperation />
      <Brain />
      <Astrology />
      <Healing />
      <Gems />
      <Social />
      <Contact />
    </>
  );
};

export default Home;
