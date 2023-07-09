import React, {forwardRef, useState} from 'react';
import './aboutme.scss'

function Aboutme({mobile}, goToAboutRef) {
    const [dropDown, setDropDown] = useState(false);
    return (
        <div  data-sectionname="about" ref={goToAboutRef} className={mobile? 'aboutme aboutme_mobile fade-in':'aboutme fade-in'}>
            {mobile&&<div className='head'>
                <div className='title'>about me</div>
                {mobile&&<div className='dropLine'></div>}
                {!dropDown&&mobile&&<button onClick={()=> setDropDown(true)}></button>}
                {dropDown&&mobile&&<button onClick={()=> setDropDown(false)} style={{transform: 'rotate(180deg)'}}></button>}
            </div>}
            {!mobile&&<div className='title'>about me</div>}
            {!mobile&&<div className='line'></div>}

            {dropDown&&mobile&&<div className='text'>
                {/* MOBILE */}

                <span>Nice to meet you!</span>

                <span>My name is <a className='highlight'>Elena</a>, and I’m a creative and mission-oriented  <a className='highlight'>junior front-end developer </a>
                    with experience in React, Angular 2+, HTML, CSS, and JavaScript from Holon. </span>

                <span>
                    I am passionate about designing intuitive and responsive user interfaces that not only look great, but also align with client's values and goals.
                    I am excited to explore new opportunities that allow me to use my creativity and technical skills.
                </span>
            </div>}
            {!mobile&&<div className='text'>
                {/* LAPTOP */}
                <span>Nice to meet you!</span>

                <span>My name is <a className='highlight'>Elena</a>, and I’m a creative and mission-oriented  <a className='highlight'>junior front-end developer</a>
                    with experience in React, Angular 2+, HTML, CSS, and JavaScript from Holon. </span>

                <span> I am passionate about designing intuitive and responsive user interfaces that not only look great, but also align with client's values and goals.
                    I am excited to explore new opportunities that allow me to use my creativity and technical skills.</span>
                <span>I believe in using technology for good, and I will be dedicated to working with organizations that share this mission. Whether it's improving access
                    to education or advancing sustainability initiatives, I am committed to using my skills to make a positive impact.</span>


            </div>}
            {!mobile&&<div className='line'></div>}
            {dropDown&&mobile&&<div className='photo'></div>}
            {!mobile&&<div className='photo'></div>}
        </div>
    );
}

export default forwardRef(Aboutme);
