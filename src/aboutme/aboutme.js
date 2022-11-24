import React, {useState} from 'react';
import './aboutme.scss'

function Aboutme({mobile}) {
    const [dropDown, setDropDown] = useState(false);
    return (
        <div className={mobile? 'aboutme aboutme_mobile':'aboutme'}>
            {mobile&&<div className='head'>
                <div className='title'>about me</div>
                {mobile&&<div className='dropLine'></div>}
                {!dropDown&&mobile&&<button onClick={()=> setDropDown(true)}></button>}
                {dropDown&&mobile&&<button onClick={()=> setDropDown(false)} style={{transform: 'rotate(180deg)'}}></button>}
            </div>}
            {!mobile&&<div className='title'>about me</div>}
            {!mobile&&<div className='line'></div>}

            {dropDown&&mobile&&<div className='text'>
                <span>Nice to meet you!</span>

                <span>My name is <a className='highlight'>Elena</a>, and I’m a <a className='highlight'>junior front-end developer</a> with
                art tends from Holon. I’m excited about the implementation
                    of beautiful things and life-like designs. I also enjoy creating designs on my own.</span>

                <span>It's so amazing to develop a product from the ground to a living working app!
                    I have an <a className='highlight'>engineer degree</a> in industry so I see <a className='highlight'>coding</a> very similar to enterprise
                creating that helps me understand processes and appreciate documentation.
                I’m fond of anthropology and  archeology, vocal, and obsessed with cats.I also
                    can’t live without music.</span>
                <span>My soul-mate is also a high-level backend developer
                    who inspires me in my profession.</span>

                <span><a className='highlight'>I’m looking forward to being part of creating and developing useful things together!</a></span>
            </div>}
            {!mobile&&<div className='text'>
                <span>Nice to meet you!</span>

                <span>My name is <a className='highlight'>Elena</a>, and I’m a <a className='highlight'>junior front-end developer</a> with
                art tends from Holon. I’m excited about the implementation
                    of beautiful things and life-like designs. I also enjoy creating designs on my own.</span>

                <span>It's so amazing to develop a product from the ground to a living working app!
                    I have an <a className='highlight'>engineer degree</a> in industry so I see <a className='highlight'>coding</a> very similar to enterprise
                creating that helps me understand processes and appreciate documentation.
                I’m fond of anthropology and  archeology, vocal, and obsessed with cats.I also
                    can’t live without music.</span>
                <span>My soul-mate is also a high-level backend developer
                    who inspires me in my profession.</span>

                <span><a className='highlight'>I’m looking forward to being part of creating and developing useful things together!</a></span>
            </div>}
            {!mobile&&<div className='line'></div>}
            {dropDown&&mobile&&<div className='photo'></div>}
            {!mobile&&<div className='photo'></div>}
        </div>
    );
}

export default Aboutme;
