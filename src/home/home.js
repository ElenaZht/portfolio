import React, {useState} from 'react';
import "./home.scss"

const Home = ({mobile}) => {
    const [showScroll, setShowScroll] = useState(true);
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
           setShowScroll(false)
        } else {
            setShowScroll(true)
        }
    };
    return (
        <div className={mobile? 'home home_mobile':'home'}>
            <div className={mobile? 'leftside_mobile leftside' : 'leftside'}>
                {!mobile&&<p>2022</p>}
            </div>
            {!mobile&&<div className='line'></div>}
            <div className={mobile? 'rightside rightside_mobile':'rightside'}>
                {!mobile&&<div className='mainTitle'>{'{Front-end developer}'}</div>}
                {mobile&&<div className='mainTitle mainTitle_mobile'><p>{'{Front-end'}</p><p>{'developer}'}</p></div>}
                <div className={mobile? 'secondTitle secondTitle_mobile':'secondTitle'}>Hello! My name is <span>elena zhytomirskaya</span></div>
                <button className={mobile? 'button_mobile':''}><p>My works</p></button>
                <div className={mobile? 'icons icons_mobile':'icons'}>
                    <i className='linkedIn'></i>
                    <i className='gitHub'></i>
                    <i className='email'></i>
                    <i className='phone'></i>
                </div>
                {!mobile&&<p className={showScroll? '':'disappeared'}>Skroll down &#8594;</p>}
            </div>
        </div>
    );
};

export default Home;
