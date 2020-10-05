import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./Home/Home";
import Brain from "./Brain/Brain";
import Astrology from "./Astrology/Astrology";
import Healing from "./Healing/Healing";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/brain" component={Brain} />
        <Route exact path="/astrology" component={Astrology} />
        <Route exact path="/healing" component={Healing} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
