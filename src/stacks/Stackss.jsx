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
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Stackss;
