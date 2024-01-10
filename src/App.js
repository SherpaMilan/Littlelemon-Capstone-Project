import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menus from "./components/Menus";

import HeroSection from "./components/Hero-Section";
import "./App.css";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Header from "./components/Header";
import Reservations from "./components/Reservations";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/menus" component={Menus} />
          <Route path="/aboutus" component={About} />
          <Route path="/reservations" component={Reservations} />
        </Switch>
      </Router>

      <HeroSection />
      <About />
      <Highlights />

      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
