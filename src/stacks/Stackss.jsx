import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home"
import Signin from '../Screens/Signin';
import About from "../Screens/About"
import Contact from "../Screens/Contact"
const Stackss = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/signin' Component={Signin}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Stackss
