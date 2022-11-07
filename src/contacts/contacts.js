import React from 'react';
import './contacts.scss';

function Contacts() {
    return (
        <div className='contacts'>
            <div className='title'>contacts</div>
            <div className='line'></div>
            <div className='wrapper'>
                <div className='icons'>
                    <div className='iconCard'>
                        <div className='icon linkedin'></div>
                        <span>Text</span>
                    </div><div className='iconCard'>
                        <div className='icon git'></div>
                        <span>Text</span>
                    </div><div className='iconCard'>
                        <div className='icon mail'></div>
                        <span>Text</span>
                    </div><div className='iconCard'>
                        <div className='icon phone'></div>
                        <span>Text</span>
                    </div>


                </div>
                <div className='footer'>
                    <div className='footerText'>
                        It is a long established fact that a reader will be distracted by the readable content of
                        a page when looking at its layout. The point of using Lorem Ipsum It is a long established
                        fact that a reader will be distracted by the readable content of a page when looking at
                        its layout. The point of using Lorem Ipsum
                    </div>
                    <div className='footerLogo'>{'<EZ/>'}</div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
