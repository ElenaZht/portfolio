import React, {useEffect, useRef, useState} from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard/src/Component";
import './navbar.scss';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

const Navbar = ({mobile, scrolled, handler, current, switcher}) => {
    const [barVisible, setBarVisible] = useState(true);
    const [active, setActive] = useState(current);
    const [navCollapse, setNavCollaps] = useState(false);
    const myLink = {title: 'Share this site',
        content:
            <div className="link_container">
                <CopyToClipboard text='www.myportfolio.com'><button className='copy'><div className='link_img link_button'></div></button></CopyToClipboard>
                <WhatsappShareButton className='link_button'  url='www.myportfolio.com'>
                    <WhatsappIcon round={true} size={32}/>
                </WhatsappShareButton>
                <LinkedinShareButton className='link_button'  url='www.myportfolio.com'>
                    <LinkedinIcon round={true} size={32}/>
                </LinkedinShareButton>
                <FacebookShareButton  className='link_button'  url='www.myportfolio.com'>
                    <FacebookIcon round={true} size={32}/>
                </FacebookShareButton>
                <TwitterShareButton  className='link_button'  url='www.myportfolio.com'>
                    <TwitterIcon round={true} size={32}/>
                </TwitterShareButton>
                <EmailShareButton  className='link_button'  url='www.myportfolio.com'>
                    <EmailIcon round={true} size={32}/>
                </EmailShareButton>
                <TelegramShareButton  className='link_button'  url='www.myportfolio.com'>
                    <TelegramIcon round={true} size={32}/>
                </TelegramShareButton>

            </div>
    };

    useEffect(()=>{
        setActive(current);
        // console.log('effect current: ', current)
    }, [current]);
    let openSideBar = () => {
        setBarVisible(true);
    };
    let closeSideBar = () => {
        setBarVisible(false);
    };
    let activate = (id) => {
        setActive(id);
        handler(id);
        if(id === 'link'){
            switcher(myLink);
            setActive(null)
        }
        setNavCollaps(false)
    };



    return (
        <div className='navbar'>

            <div className='logo'>{'<EZ/>'}</div>
            {!mobile&&<div className='nav'>

                {/*regular top bar*/}
                <div type={active === 'home'? "active" : ""} className='navHome' onClick={()=> activate('home')}>Home</div>
                <div className='line'></div>
                <div type={active === 'skills'? "active" : ""} className='navSkills' onClick={()=> activate('skills')}>Skills</div>
                <div className='line'></div>
                <div type={active === 'about'? "active" : ""} className='navAbout' onClick={()=> activate('about')}>About me</div>
                <div className='line'></div>
                <div  type={active === 'portfolio'? "active" : ""} className='navPortfolio' onClick={()=> activate('portfolio')}>Portfolio</div>
                <div className='line'></div>
                <div type={active === 'contacts'? "active" : ""} className='navContacts' onClick={()=> activate('contacts')}>Contacts</div>
                <div className='line'></div>
                <div onClick={()=> activate('link')} type={active === 'link'? "active" : ""} className='navLink'></div>



            </div>}
            {/*side bar */}

            {!mobile&&<div className={scrolled? 'nav sideNav' : 'nav sideNav disaperedBar'}>
                {/*bar opened*/}
                {barVisible&&<div className="wrap" onClick={()=> closeSideBar()}>
                    <div className="hideSideBar"></div>
                </div>}
                {/*bar hidden*/}
                {!barVisible&&<div className="wrap" onClick={()=> openSideBar()}>
                    <div className="showSideBar"></div>
                </div>}
                <div className={barVisible? "foldable" : 'invisible'}>
                    <div  type={active === 'home'? "active" : ""} className='navHome' onClick={()=> activate('home')}></div>
                    <div type={active === 'skills'? "active" : ""} className='navSkills' onClick={()=> activate('skills')}></div>
                    <div type={active === 'about'? "active" : ""} className='navAbout' onClick={()=> activate('about')}></div>
                    <div type={active === 'portfolio'? "active" : ""} className='navPortfolio' onClick={()=> activate('portfolio')}></div>
                    <div type={active === 'contacts'? "active" : ""} className='navContacts'onClick={()=> activate('contacts')}></div>
                    <div type={active === 'link'? "active" : ""} className='navLink' onClick={()=> activate('link')}></div>
                </div>
            </div>}
            {mobile&&<div className='navCollapse_wrap'>
                {!navCollapse&&<button className='navCollapse' onClick={()=> setNavCollaps(true)}></button>}
                {navCollapse&&<div className='navCollapse_body'>
                    <div type={active === 'home'? "active" : ""} className='navHome' onClick={()=> activate('home')}>Home</div>
                    <div type={active === 'skills'? "active" : ""} className='navSkills' onClick={()=> activate('skills')}>Skills</div>
                    <div type={active === 'about'? "active" : ""} className='navAbout' onClick={()=> activate('about')}>About me</div>
                    <div  type={active === 'portfolio'? "active" : ""} className='navPortfolio' onClick={()=> activate('portfolio')}>Portfolio</div>
                    <div type={active === 'contacts'? "active" : ""} className='navContacts' onClick={()=> activate('contacts')}>Contacts</div>
                    <div onClick={()=> activate('link')} type={active === 'link'? "active" : ""} className='navLink'></div>
                    <button className="closeNavCollapse" onClick={()=> setNavCollaps(false)}>close</button>
                </div>}

            </div>}
        </div>
    );
};

export default Navbar;
