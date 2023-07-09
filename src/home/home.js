import React, {forwardRef, useState} from 'react';
import "./home.scss";
import { Link } from '@react-email/link';


const Home = ({mobile, scrolled, goWorks, goAbout, goDown, switcher}, goToHomeRef) => {

    const myEmail = {title: ' my email',
        content:
            <form action="https://formsubmit.co/elenazht@gmail.com" method="POST">
                <textarea rows="4" cols="10" wrap="soft" name="fullname" required placeholder='your name and company'/>
                <textarea name="email" required placeholder='your email'/>
                <textarea name="name" required placeholder='your message for me'/>
                <button  type="submit">Send</button>
            </form>
    };
    const myPhone = {title: <div>my phone number <div>+972-**-***-8115</div></div>,
        content:
            <a className='call_me_btn' href="tel: +972542878115">Call me</a>
    };
    return (
        <div  data-sectionname="home" ref={goToHomeRef} className={mobile? 'home home_mobile fade-in':'home fade-in'}>
            <div className={mobile? 'leftside_mobile leftside' : 'leftside'}>
                {!mobile&&<p>2022</p>}
            </div>
            {!mobile&&<div className='line'></div>}
            <div className={mobile? 'rightside rightside_mobile':'rightside'}>
                {!mobile&&<div className='mainTitle'>{'{Front-end developer}'}</div>}
                {mobile&&<div className='mainTitle mainTitle_mobile'><p>{'{Front-end'}</p><p>{'developer}'}</p></div>}
                <div className={mobile? 'secondTitle secondTitle_mobile':'secondTitle'}>Hello! My name is <span onClick={()=> goAbout()}>elena zhytomirskaya</span></div>
                <button onClick={()=>goWorks()} className={mobile? 'button_mobile':''}><p>My works</p></button>
                <div className={mobile? 'icons icons_mobile':'icons'}>
                    <a href='https://www.linkedin.com/in/elena-zhytomirski/' target='_blank' className='linkedIn'></a>
                    <a href='https://github.com/ElenaZht' target='_blank' className='gitHub'></a>
                    <Link className='email' href="mailto:elenazht@gmail.com"></Link>
                    <i className='phone' onClick={()=> switcher(myPhone)}></i>
                </div>
                {!mobile&&<p className={scrolled? 'disappeared':''} onClick={()=> goDown()} style={{cursor: 'pointer'}}>Skroll down &#8594;</p>}
            </div>
        </div>
    );
};

export default forwardRef(Home);
