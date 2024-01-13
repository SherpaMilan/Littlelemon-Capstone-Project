import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menus from "./components/Menus";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "./App.css";

import Reservations from "./components/Reservations";

import About from "./components/About.js";

import Layout from "./components/Layout.js";
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route path="/menus" component={Menus} />
            <Route path="/about" component={About} />
            <Route path="/reservations" component={Reservations} />
            <Route path="/profile" component={Profile} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
