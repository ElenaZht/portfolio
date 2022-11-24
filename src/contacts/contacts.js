import React from 'react';
import './contacts.scss';

function Contacts({mobile}) {
    return (
        <div className={mobile? 'contacts contacts_mobile':'contacts'}>
            <div className='title'>contacts</div>
            <div className='line'></div>
            <div className='wrapper'>
                <div className='icons'>
                    <div className='iconCard'>
                        <div className='icon linkedin'></div>
                        <span>My LinkedIn</span>
                    </div><div className='iconCard'>
                        <div className='icon git'></div>
                        <span>My GitHub</span>
                    </div><div className='iconCard'>
                        <div className='icon mail'></div>
                        <span>My email</span>
                    </div><div className='iconCard'>
                        <div className='icon phone'></div>
                        <span>My phone</span>
                    </div>


                </div>
                {mobile&&<div className='line' style={{backgroundColor: 'white'}}></div>}
                <div className='footer'>
                    {!mobile&&<div className='footerText'>
                        <p>Designed by me. Created by me. Debugged by me.</p>
                        <p>Tap to links above to contact. </p>
                    </div>}
                    <div className='footerLogo'>{'<EZ/>'}</div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
