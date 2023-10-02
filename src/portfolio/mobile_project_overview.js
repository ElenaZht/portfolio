import React from 'react';
import './portfolio.scss'

const MobileProjectOverview = ({project}) => {



    let makeDescription = (curProject) => {
        let list = [];
        curProject['overview'].map(p => {
            list.push(
                <li key={p}><div></div><span>{p}</span></li>
            )
        });
        return list
    };

    const getShortStack = (project) => {
        let myStack = [];
        for(let i=0; i<project.short_stack.length; i++){
            myStack.push(
                <li key={i} className='item'>
                    <div className='img' style={{backgroundImage: `url(${project.short_stack[i].img})`}}/>
                </li>
            )
        }
        return myStack
    };



    return (
        <div className='mobile_overview'>
            <div className='project_mobile_container'>
                <span className='proj_name proj_name_mobile'>{project.name}</span>
                <a className='proj_link proj_link_mobile' href={project.link}>Link to GitHub repo</a>
                <a className='proj_link proj_link_mobile' href={project.live_link}>Link to live project</a>
                <ul className='proj_stack'>
                    {getShortStack(project)}
                </ul>

                <ul className='mob_proj_desc'>
                    {makeDescription(project)}
                </ul>
                <div className='mobileSlideButton'  style={{backgroundImage: `url(${project['slides'][0]})`, height: '30vh', width: '100%'}}>
                </div>

            </div>

        </div>
    );
};

export default MobileProjectOverview;
