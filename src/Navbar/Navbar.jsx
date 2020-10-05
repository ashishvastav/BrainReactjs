import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import MenuItems from "./MenuItems";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";
import "../Navbar/Navbar.css";
import Logo from "../img/Logo.png";

const NavbarB = () => {
  let Link = Scroll.Link;
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();

  const [digtalTime, setdigtalTime] = useState(time);
  const [digtalDate, setdigtalDate] = useState(date);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setdigtalTime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top nav-bg">
          <div className="container">
            <NavLink className="navbar-brand" to="/home">
              Navbar
              <img
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top ml-1"
                alt=""
                loading="lazy"
              />
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse text-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                {MenuItems.map((item, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      {/* <NavLink className={item.cName} to={item.url}>
                        {item.title}
                      </NavLink> */}
                      <Link
                        activeClassName="active"
                        className={item.cName}
                        to={item.url}
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={500}
                        delay={50}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
                <li className="nav-item dropdown navbg-color">
                  <Link
                    className="nav-link dropdown-toggle active"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    More Info
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      activeClassName="active"
                      to="gem"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={0}
                      duration={500}
                      delay={50}
                      className="dropdown-item"
                    >
                      Gems
                    </Link>
                    <div class="dropdown-divider"></div>
                    <Link
                      activeClassName="active"
                      to="gallary"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={0}
                      duration={500}
                      delay={50}
                      className="dropdown-item"
                    >
                      Gallary
                    </Link>
                    <div class="dropdown-divider"></div>

                    <Link
                      activeClassName="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={0}
                      duration={500}
                      delay={50}
                      className="dropdown-item"
                    >
                      Contact
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <p className="time">
            Time:{time} IST, Date:{date}
          </p>
        </nav>
      </div>
    </>
  );
};

export default NavbarB;
