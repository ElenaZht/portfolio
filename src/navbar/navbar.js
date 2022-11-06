import React from 'react';
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>{'<EZ/>'}</div>
            <div className='nav'>
                <div  type="active">Home</div>
                <div className='line'></div>
                <div>Skills</div>
                <div className='line'></div>
                <div>About me</div>
                <div className='line'></div>
                <div>Portfolio</div>
                <div className='line'></div>
                <div>Contacts</div>
            </div>
        </div>
    );
};

export default Navbar;
