import './App.scss';
import React, {useEffect, useState} from "react";
import Navbar from "./navbar/navbar.js";
import Home from "./home/home.js";
import classes from './App.scss'
import Skills from "./skills/skills";
import Aboutme from "./aboutme/aboutme";
import Contacts from "./contacts/contacts";
import Portfolio from "./portfolio/portfolio";

function App() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if(window.matchMedia("(max-width: 800px)").matches){
            setIsMobile(true);
            console.log('MOBILE MOD')
        }
    },[]);
  return (
    <div className={isMobile? 'mobile_app':classes.App}>
      <Navbar mobile={isMobile}/>
      <Home mobile={isMobile}/>
      <Skills mobile={isMobile}/>
      <Aboutme mobile={isMobile}/>
      <Portfolio mobile={isMobile}/>
      <Contacts mobile={isMobile}/>
    </div>
  );
}

export default App;
