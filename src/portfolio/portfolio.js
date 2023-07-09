import './portfolio.scss'
import {projects} from './projects.js'
import React, {forwardRef, useEffect, useState} from 'react';
import MobileProjectButton from "./mobile_project_button";
import BeatLoader from "react-spinners/BeatLoader";



function Portfolio({mobile, switcher}, goToPortfolioRef) {

    const [curProject, setCurProject] = useState(projects[0]);
    const [active, setActive] = useState('1');
    let [curIdx, setCurIdx] = useState(0);
    const [slides, setSlides] = useState(curProject['slides']);
    let [curSlide, setCurSlide] = useState(curProject['slides'][0]);
    let [disableLeft, setDisableLeft] = useState(true);
    let [disableRight, setDisableRight] = useState(false);
    const [loading, setLoading] = useState(false);
    const [seeStack, setSeeStack] = useState(false);

    useEffect(
        ()=>{
            setLoading(true);
            setTimeout(()=>{
                setLoading(false);
            }, 5000)
        }, []
    );



    let makeDots = (length)=> {
        let dots = [];
        for(let i=0; i<length; i++){
            dots.push(
                <div key={i} className={curIdx === i? 'activeDot' : ''} onClick={()=> dotSlideSwitch(i)}></div>
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
            // console.log('arrows', step);

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
    let dotSlideSwitch = (id) => {
        console.log(id)
            setCurIdx(id);
        if(id === 0){
            setDisableLeft(true);
            setDisableRight(false);
            console.log('first')
        } else if(id > 0){
                setDisableRight(false);
            }
        if(id < slides.length-1){
            if(id > 0){
                setDisableLeft(false);
            }
            if(id === slides.length-1){
                setDisableRight(true);
            }
        } else {
            setDisableRight(true);
            setDisableLeft(false)
        }

            setCurSlide(slides[id]);
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
                                    <MobileProjectButton switcher={switcher} project={projects[i]}/>
                                </div>
                            </div>}
                            {!mobile&&<span>{projects[i].name}</span>}

                        </div>
                    </div>
            )
        }
        return myProjects
    };
    const getStack = (project) => {
        let myStack = [];
        for(let i=0; i<project.stack.length; i++){
            myStack.push(
                <li key={i} className='item'>
                    <div className='img' style={{backgroundImage: `url(${project.stack[i].img})`}}/>
                </li>
            )
        }
        return myStack
    };

    return (
        <div data-sectionname="portfolio"  ref={goToPortfolioRef} className='portfolio fade-in' style={{height: mobile? '100%' : '90vh'}}>
            <div className={mobile?'header header_mobile':'header'}>
                <span className='title'>portfolio</span>
                <div className='line_h'  style={{margin: mobile? '10% auto' : '4% auto 4% auto'}}></div>
            </div>
            <div className={mobile?'buttons buttons_mobile':'buttons'}>
                {makeButtons()}
            </div>
            {!mobile&&<div className='window'>
                <div className='carousel'>
                    {loading?
                        <div className='spinner_wrap'>
                            <BeatLoader className='spinner' color="#2A46FF" size='3vmax' />
                        </div>
                        :
                        <>
                            <div className='slide' style={{backgroundImage: `url(${curSlide})`}}>
                                <div className={disableLeft? 'disable shevronLeft' : 'shevronLeft'} onClick={() => slideSwitch(-1)}></div>
                                <div className={disableRight? 'disable shevronRight' : 'shevronRight'} onClick={() => slideSwitch(1)}></div>
                            </div>
                            <ul className='dots'>
                                {makeDots(slides.length)}
                            </ul>
                        </>

                    }



                </div>
                <div className='review'>
                    <div className='proj_header'>
                        <div className='proj_naming'>
                            <span className='proj_name'>{curProject.name}
                            </span>
                            <a className='proj_link' href={curProject.link} target='_blank'>Link to repo in GitHub</a>
                            <a className='proj_link' href={curProject.live_link} target='_blank'>Link to live project</a>
                            <div className="switch_wrap">
                                <p className="switch_title">see the stack</p>
                                <label className='switch'>
                                    <input  type="checkbox"/>
                                    <span className='slider round' onClick={()=> setSeeStack(!seeStack)}></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    {seeStack&&<ul className='proj_stack'>
                        {getStack(curProject)}
                    </ul>}
                    <div className='proj_title'>{curProject.desc}</div>
                    <ul className='proj_desc'>
                        {makeDescription(curProject, curProject.id)}


                    </ul>
                 </div>
            </div>}
        </div>
    );
}

export default forwardRef(Portfolio);
