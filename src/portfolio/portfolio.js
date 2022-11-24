import './portfolio.scss'
import {projects} from './projects.js'
import React, {useState} from 'react';
import MobileProjectOverview from "./mobile_project_overview";
import MobileProjectButton from "./mobile_project_button";

function Portfolio({mobile}) {

    const [curProject, setCurProject] = useState(projects[0]);
    const [active, setActive] = useState('1');
    let [curIdx, setCurIdx] = useState(0);
    const [slides, setSlides] = useState(curProject['slides']);
    const [slides1, setSlides1] = useState(projects[0]['slides']);
    const [slides2, setSlides2] = useState(projects[1]['slides']);
    const [slides3, setSlides3] = useState(projects[2]['slides']);
    let [curSlide, setCurSlide] = useState(curProject['slides'][0]);
    let [curSlide1, setCurSlide1] = useState(projects[0]['slides'][0]);
    let [curSlide2, setCurSlide2] = useState(projects[1]['slides'][0]);
    let [curSlide3, setCurSlide3] = useState(projects[2]['slides'][0]);
    let [disableLeft, setDisableLeft] = useState(true);
    let [disableRight, setDisableRight] = useState(false);
    const [dropDown1, setDropDown1] = useState(false);
    const [dropDown2, setDropDown2] = useState(false);
    const [dropDown3, setDropDown3] = useState(false);
    const [dropScreenshots1, setDropScreenshots1] = useState(false);
    const [dropScreenshots2, setDropScreenshots2] = useState(false);
    const [dropScreenshots3, setDropScreenshots3] = useState(false);


    let makeDots = (length)=> {
        let dots = [];
        for(let i=0; i<length; i++){
            dots.push(
                <div key={i} className={curIdx === i? 'activeDot' : ''}></div>
            )
        }
        return dots
    };

    let Switch = (project, idx) => {
        setCurProject(project);
        setActive(idx);
        setSlides(project['slides']);
        setCurSlide(project['slides'][0]);
        setCurIdx(0);
        setDisableRight(false);
        setDisableLeft(true);
        makeDots(project['slides'].length);
    };
    let slideSwitch = (step) => {
        if(step < 0){
            if(curIdx > 0){
                setCurIdx(--curIdx);
                setDisableRight(false);
                if(curIdx === 0){
                    setDisableLeft(true);
                }
            } else if(curIdx === 0) {
                setDisableLeft(true);
                setDisableRight(false)

            }
        } else {
            if(curIdx < slides.length-1){
                setCurIdx(++curIdx);
                setDisableLeft(false);
                if(curIdx === slides.length-1){
                    setDisableRight(true);
                }
            } else {
                setDisableRight(true);
                setDisableLeft(false)
            }
        }
        setCurSlide(slides[curIdx]);
    };


    let makeDescription = (curProject) => {
        let list = [];
        curProject['overview'].map(p => {
            list.push(
                <li key={p}><div></div><span>{p}</span></li>
            )
        });
        return list
    };


    let makeButtons = () => {
        let myProjects = [];
        for(let i=0; i<projects.length; i++){
            myProjects.push(
                    <div key={i} onClick={()=> Switch(projects[i], projects[i].id)} className={(active === projects[i].id && !mobile)? "button activeBtn" : 'button'}>
                        <div className='button_wrap'>
                            {mobile&&<div className='btn_mob'>
                                <div className='btn_head'>
                                    <MobileProjectButton project={projects[i]}/>
                                </div>
                            </div>}
                            {!mobile&&<span>{projects[i].name}</span>}

                        </div>
                    </div>
            )
        }
        return myProjects
    };

    return (
        <div className='portfolio' style={{height: mobile? '100%' : '90vh'}}>
            <div className={mobile?'header header_mobile':'header'}>
                <span className='title'>portfolio</span>
                <div className='line_h'  style={{margin: mobile? '10% auto' : '4% auto 4% auto'}}></div>
            </div>
            <div className={mobile?'buttons buttons_mobile':'buttons'}>
                {makeButtons()}
            </div>
            {!mobile&&<div className='window'>
                <div className='carousel'>
                    <div className='slide' style={{backgroundImage: `url(${curSlide})`}}>
                        <div className={disableLeft? 'disable shevronLeft' : 'shevronLeft'} onClick={() => slideSwitch(-1)}></div>
                        <div className={disableRight? 'disable shevronRight' : 'shevronRight'} onClick={() => slideSwitch(1)}></div>
                    </div>
                    <ul className='dots'>
                        {makeDots(slides.length)}
                    </ul>

                </div>
                <div className='review'>
                    <div className='proj_header'>
                        <div className='proj_naming'>
                            <span className='proj_name'>{curProject.name}</span>
                            <a className='proj_link'>{curProject.link}</a>
                        </div>
                    </div>
                    <div className='proj_title'>{curProject.desc}</div>
                    <ul className='proj_desc'>
                        {makeDescription(curProject, curProject.id)}


                    </ul>
                 </div>
            </div>}
        </div>
    );
}

export default Portfolio;
