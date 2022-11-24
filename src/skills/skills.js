import React, {useState} from 'react';
import './skills.scss';
import {stack} from "./stack.js";

function Skills({mobile}) {

    const [dropDown, setDropDown] = useState(false);
    const getStack = () => {
        let myStack = [];
        for(let i=0; i<stack.length; i++){
            myStack.push(
                        <li key={i} className='item'>
                            <div className='img' style={{backgroundImage: `url(${stack[i].img})`}}/>
                            <a className='link'>{stack[i].name}</a>
                        </li>
            )
        }
        return myStack
    };
    return (
        <div className={mobile? 'skills skills_mobile':'skills'}>
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

export default Skills;
