import React from 'react';
import './skills.scss'

function Skills() {
    const stack = [{image: '', link: 'Technology'}];
    const getStack = stack.map(
        s =>
            <li key={s} className='item'>
                <div className='img'></div>
                <a className='link'>{s.link}</a>
            </li>
    )
    return (
        <div className='skills'>
            <div className='title'>skills</div>
            <div className='line'></div>
            <ul className='stack'>{getStack}</ul>
        </div>
    );
}

export default Skills;
