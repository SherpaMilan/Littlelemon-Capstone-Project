import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menus from "./components/Menus";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "./App.css";

import Reservations from "./components/Reservations";

import About from "./components/About.js";
import SignIn from "./components/SignIn.js";
import Layout from "./components/Layout.js";
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";
import Signup from "./components/Signup.js";

import Confirm from "./components/Confirm.js";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route path="/menus" component={Menus} />
            <Route path="/about" component={About} />
            <Route path="/reservations" component={Reservations} />
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={Signup} />
            <Route path="/confirmation" component={Confirm} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
