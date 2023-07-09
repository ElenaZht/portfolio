import React, {forwardRef} from 'react';
import './contacts.scss';
import {Link} from "@react-email/link";

function Contacts({mobile, switcher}, goToContactsRef) {
    const myEmail = {title: ' my email',
        content:
            <form action="https://formsubmit.co/elenazht@gmail.com" method="POST">
                <textarea name="fullname" required placeholder='your name and company'/>
                <textarea name="email" required placeholder='your email'/>
                <textarea  name="name" required placeholder='your message for me'/>
                <button type="submit">Send</button>
            </form>
    };
    const myPhone = {title: <div>my phone number <div>+972-**-***-8115</div></div>, content:
        <a className='call_me_btn' href="tel: +972542878115">Call me</a>
    };
    return (
        <div  data-sectionname="contacts" ref={goToContactsRef} className={mobile? 'contacts contacts_mobile fade-in':'contacts fade-in'}>
            <div className='title'>contacts</div>
            <div className='line'></div>
            <div className='wrapper'>
                <div className='icons'>
                    <a className='iconCard' href='https://www.linkedin.com/in/elena-zhytomirski/' target='_target'>
                        <div className='icon linkedin'></div>
                        <span>My LinkedIn</span>
                    </a>
                    <a className='iconCard' href='https://github.com/ElenaZht' target='_blank'>
                        <div className='icon git'></div>
                        <span>My GitHub</span>
                    </a>
                    <div className='iconCard'>
                        <Link className='icon mail' href="mailto:elenazht@gmail.com"></Link>
                        <span>My email</span>
                    </div>
                    <div className='iconCard'  onClick={()=> switcher(myPhone)}>
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

export default forwardRef(Contacts);
