import './App.scss';
import React, {useEffect, useState} from "react";
import Navbar from "./navbar/navbar.js";
import Home from "./home/home.js";
import Skills from "./skills/skills";
import Aboutme from "./aboutme/aboutme";
import Contacts from "./contacts/contacts";
import Portfolio from "./portfolio/portfolio";
import Dialog from "./dialog";
import BeatLoader from "react-spinners/BeatLoader";

function App() {
    const [isMobile, setIsMobile] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [curSection, setCurSection] = useState('home');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [prop, setProp] = useState({});

    const [loading, setLoading] = useState(false);

    const goToHomeRef =  React.createRef();
    const goToSkillsRef =  React.createRef();
    const goToAboutRef =  React.createRef();
    const goToPortfolioRef =  React.createRef();
    const goToContactsRef =  React.createRef();

    const els = document.querySelectorAll('.fade-in');
    const options = {
        root: null,
        threshold: 0.2,
    };
    useEffect(
        ()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 1000)
        }, []
    );

    const cb = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('activeSection');
                if(entry.target.dataset.sectionname){
                    setCurSection(entry.target.dataset.sectionname);
                }
            }
        })
    };
    let observer = new IntersectionObserver(cb, options);
    els.forEach(el => {
        observer.observe(el);
    });


    const handler = (id) => {
        if(id === 'home'){
            goToHomeRef.current.scrollIntoView({behavior: 'smooth', block: "center"});
            console.log('go home')
        } else if(id === 'skills'){
            goToSkillsRef.current.scrollIntoView({behavior: "smooth", block: "center"});
            console.log('go skills')
        } else if(id === 'about'){
            goToAboutRef.current.scrollIntoView({behavior: "smooth", block: "center"})
        } else if(id === 'portfolio'){
            goToPortfolioRef.current.scrollIntoView({behavior: "smooth", block: "center"})
        } else if(id === 'contacts'){
            goToContactsRef.current.scrollIntoView({behavior: "smooth", block: "end"})
        }
    };
    const goToWorks = () => {
        goToPortfolioRef.current.scrollIntoView({behavior: "smooth", block: "center"})
    };
    const goToAbout = () => {
        goToAboutRef.current.scrollIntoView({behavior: "smooth", block: "center"})
    };
    const goScrollDown = () => {
        goToSkillsRef.current.scrollIntoView({behavior: "smooth", block: "center"});

    };


    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
            if(window.pageYOffset !== 0){
                setScrolled(true);
            } else {
                setScrolled(false);
            }

        };
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);


    useEffect(() => {
        if(window.matchMedia("(max-width: 800px)").matches){
            setIsMobile(true);
            console.log('MOBILE MOD')
        }
    },[]);
    const makeDialog = () => {
       return(
           <>
               {dialogOpen&&<Dialog switcher={dialogHandler} prop={prop}/>}

           </>
       )
    };
    const dialogHandler = (obj) =>{
        setDialogOpen(!dialogOpen);
        setProp(obj)
    };

  return (
          <div className={isMobile? 'mobile_app': 'App'}>
              {loading?

                  <div className='spinner_wrap'>
                      <BeatLoader className='spinner' color="#2A46FF" size='3vmax' />
                  </div>

                  :
                  <>
                      {makeDialog()}
                      <Navbar switcher={dialogHandler} handler={handler} mobile={isMobile} scrolled={scrolled} current={curSection}/>
                      <Home  switcher={dialogHandler} ref={goToHomeRef} mobile={isMobile} scrolled={scrolled} goWorks={goToWorks} goAbout={goToAbout} goDown={goScrollDown}/>
                      <Skills ref={goToSkillsRef} mobile={isMobile}/>
                      <Aboutme ref={goToAboutRef} mobile={isMobile}/>
                      <Portfolio  switcher={dialogHandler} ref={goToPortfolioRef} mobile={isMobile}/>
                      <Contacts  switcher={dialogHandler} ref={goToContactsRef} mobile={isMobile}/>
                  </>
              }
          </div>

  );
}

export default App;
