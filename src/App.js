import './App.scss';
import React from "react";
import Navbar from "./navbar/navbar.js";
import Home from "./home/home.js";
import classes from './App.scss'
import Skills from "./skills/skills";
import Aboutme from "./aboutme/aboutme";

function App() {

  return (
    <div className={classes.App}>
      <Navbar/>
      <Home/>
      <Skills/>
      <Aboutme/>
    </div>
  );
}

export default App;
