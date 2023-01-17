import React, {useState} from 'react';
import './portfolio.scss'
import MobileProjectOverview from "./mobile_project_overview";

const MobileProjectButton = ({project, switcher}) => {
    const [dropDown, setDropDown] = useState(false);

    return (
        <div className='mobile_proj_button'>
            <div className='btn_header'>
                <div style={{backgroundImage: `url(${project.logo})`}}/>
                <div className='line'></div>
                {!dropDown&&<button className='arrow' onClick={()=> setDropDown(true)}></button>}
                {dropDown&&<button className='arrow' onClick={()=> setDropDown(false)} style={{transform: 'rotate(180deg)'}}></button>}
            </div>
            {dropDown&&<div className='btn_body'>
                <MobileProjectOverview  switcher={switcher} project={project}/>
            </div>}

        </div>
    );
};

export default MobileProjectButton;
