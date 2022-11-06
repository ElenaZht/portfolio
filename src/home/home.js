import React, {useState} from 'react';
import "./home.scss"

const Home = () => {
    const [showScroll, setShowScroll] = useState(true);
    return (
        <div className='home'>
            <div className='leftside'>
                <p>2022</p>
            </div>
            <div className='line'></div>
            <div className='rightside'>
                <div className='mainTitle'>{'{Front-end developer}'}</div>
                <div className='secondTitle'>Hello! My name is <span>elena zhytomirskaya</span></div>
                <button><p>My works</p></button>
                <div className='icons'>
                    <i className='linkedIn'></i>
                    <i className='gitHub'></i>
                    <i className='email'></i>
                    <i className='phone'></i>
                </div>
                {showScroll &&<p>Skroll down &#8594;</p>}
            </div>
        </div>
    );
};

export default Home;
