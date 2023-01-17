import React, {forwardRef, useState} from 'react';
import './skills.scss';
import {stack} from "./stack.js";

function Skills({mobile}, goToSkillsRef) {


    const [dropDown, setDropDown] = useState(false);
    const getStack = () => {
        let myStack = [];
        for(let i=0; i<stack.length; i++){
            myStack.push(
                        <a key={i} className='item' href={stack[i]['link']} target='_blank'>
                            <div className='img' style={{backgroundImage: `url(${stack[i].img})`}}/>
                            <span className='link'>{stack[i].name}</span>
                        </a>
            )
        }
        return myStack
    };

    return (
        <div data-sectionname="skills" ref={goToSkillsRef}  className={mobile? 'skills skills_mobile fade-in':'skills fade-in'}>
                {mobile&&<div className='wrap_mobile'>
                    {mobile&&<div className='head'>
                        <div className='title'>skills</div>
                        <div className='line'></div>
                        {!dropDown&&<button onClick={()=> setDropDown(true)}></button>}
                        {dropDown&&<button onClick={()=> setDropDown(false)} style={{transform: 'rotate(180deg)'}}></button>}
                    </div>}
                    {dropDown&&<ul className='stack stack_mobile'>{getStack()}</ul>}
            </div>}
            {!mobile&&<div className='title'>skills</div>}
            {!mobile&&<div className='line'></div>}
            {!mobile&&<ul className='stack'>{getStack()}</ul>}
        </div>
    );
}

export default forwardRef(Skills);
