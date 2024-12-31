import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Signin from "../Screens/Signin";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
const Stackss = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Stackss;
