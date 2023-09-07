import React, {useState} from 'react';
import './App.scss';

const Dialog = ({prop, switcher}) => {
    const [content, setContent] = useState(prop);
    return (
        <div className='dialog_container'>
            <div className='dialog_body'>
                <div className='header'>
                    <div className='dialog_title'>{content.title}</div>
                    <button className='x' onClick={switcher}>&#10005;</button>
                </div>


                <hr/>
                <div className='dialog_content'>{content.content}</div>
            </div>

        </div>
    );
};

export default Dialog;
