import React from 'react';
import './aboutme.scss'

function Aboutme() {
    return (
        <div className='aboutme'>
            <div className='title'>about me</div>
            <div className='line'></div>
            <div className='text'>
                <span>Nice to meet you!</span>

                <span>My name is <a className='highlight'>Elena</a>, and I’m a <a className='highlight'>junior front-end developer</a> with
                art tends from Holon. I’m excited about the implementation
                    of beautiful things and life-like designs. I also enjoy creating designs on my own.</span>

                <span>It's so amazing to develop a product from the ground to a living working app!
                    I have an <a className='highlight'>engineer degree</a> in industry so I see <a className='highlight'>coding</a> very similar to enterprise
                creating that helps me understand processes and appreciate documentation.
                I’m fond of anthropology and  archeology, vocal, and obsessed with cats.I also
                    can’t live without music.</span>span>
                <span>My soul-mate is also a high-level backend developer
                    who inspires me in my profession.</span>

                <span><a className='highlight'>I’m looking forward to being part of creating and developing useful things together!</a></span>
            </div>
            <div className='line'></div>
            <div className='photo'></div>
        </div>
    );
}

export default Aboutme;
