import React, {useState} from 'react';
import './portfolio.scss'


const MobileProjectOverview = ({project, switcher}) => {
    let [curSlide, setCurSlide] = useState(project['slides'][0]);
    let [disableLeft, setDisableLeft] = useState(true);
    let [disableRight, setDisableRight] = useState(false);
    let [curIdx, setCurIdx] = useState(0);
    let [imgDialog, setImgDialog] = useState(false);



    let makeDescription = (curProject) => {
        let list = [];
        curProject['overview'].map(p => {
            list.push(
                <li key={p}><div></div><span>{p}</span></li>
            )
        });
        return list
    };

    let slideSwitch = (step) => {
        if(step < 0){
            if(curIdx > 0){
                setCurIdx(--curIdx);
                setDisableRight(false);
                if(curIdx === 0){
                    setDisableLeft(true);
                }
            } else if(curIdx === 0) {
                setDisableLeft(true);
                setDisableRight(false)

            }
        } else {
            if(curIdx < project['slides'].length-1){
                setCurIdx(++curIdx);
                setDisableLeft(false);
                if(curIdx === project['slides'].length-1){
                    setDisableRight(true);
                }
            } else {
                setDisableRight(true);
                setDisableLeft(false)
            }
        }
        setCurSlide(project['slides'][curIdx]);
    };

    return (
        <div className='mobile_overview'>
            <div className='project_mobile_container'>
                <span className='proj_name proj_name_mobile'>{project.name}</span>
                <a className='proj_link proj_link_mobile' href={project.link}>Link to GitHub repo</a>
                <a className='proj_link proj_link_mobile' href={project.live_link}>Link to live project</a>
                <ul className='mob_proj_desc'>
                    {makeDescription(project)}
                </ul>
                <div className='mobileSlideButton' style={{backgroundImage: `url(${project['slides'][0]})`, height: '30vh', width: '100%'}}>
                </div>

            </div>
        </div>
    );
};

export default MobileProjectOverview;
