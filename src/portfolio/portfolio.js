import './portfolio.scss'
import {projects} from './projects.js'
import React, {useState} from 'react';

function Portfolio() {

    const [curProject, setCurProject] = useState(projects[0]);
    const [active, setActive] = useState(0);
    let [curIdx, setCurIdx] = useState(0);
    const [slides, setSlides] = useState(curProject['slides']);
    let [curSlide, setCurSlide] = useState(curProject['slides'][0]);
    let [disableLeft, setDisableLeft] = useState(true);
    let [disableRight, setDisableRight] = useState(false);

    let makeDots = ()=> {
        let dots = [];
        for(let i=0; i<slides.length; i++){
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
        makeDots();
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

    return (
        <div className='portfolio'>
            <div className='header'>
                <span className='title'>portfolio</span>
                <div className='line_h'></div>
            </div>
            <div className='buttons'>
                <button  onClick={()=> Switch(projects[0], 0)} className={active === 0? "activeBtn" : ''}>
                    <div style={{backgroundImage: `url(${projects[0].logo})`}}/>
                    <span>{projects[0].name}</span>
                </button>
                <button onClick={()=> Switch(projects[1], 1)} className={active === 1? "activeBtn" : ''}>
                    <div  style={{backgroundImage: `url(${projects[1].logo})`}}/>
                    <span>{projects[1].name}</span>
                </button>
                <button onClick={()=> Switch(projects[2], 2)} className={active === 2? "activeBtn" : ''}>
                <div style={{backgroundImage: `url(${projects[2].logo})`}}/>
                <span>{projects[2].name}</span>
            </button>

            </div>
            <div className='window'>
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
                        {/*<div className='proj_logo' style={{ backgroundImage: `url(${curProject.logo})`}}></div>*/}
                        <div className='proj_naming'>
                            <span className='proj_name'>{curProject.name}</span>
                            <a className='proj_link'>{curProject.link}</a>
                        </div>
                    </div>
                    <div className='proj_title'>{curProject.desc}</div>
                    <ul className='proj_desc'>
                        {makeDescription(curProject)}


                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
