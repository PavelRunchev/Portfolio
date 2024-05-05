import React, { useState } from 'react';
import './project-model.scss';
import { Link } from 'react-router-dom';

import { 
    MDBListGroup, 
    MDBListGroupItem, 
    MDBCollapse, 
    MDBIcon
} from 'mdb-react-ui-kit';

export default function ProjectModel(props: any) {
    const [show, set] = useState(false);
    const [showIcon, setIcon] = useState(false);

    const { typeIcon, iconName, title, discipline, description, technologies, environment, 
        projectName, deployLink, toGithub, grade, sertificate } = props.data;
    const renderingTechnologies = technologies.join(', ');

    function click(e: any): void {
        set(!show);
        setIcon(!showIcon);
    }

    function showSertificate(e: any): void {
        if(sertificate === 'has not been sertificate!') {
            e.target.textContent = ' ' + sertificate;
        } else {
            let newWindow = window.open(sertificate, '_blank', 'width=455,height=648');
            if (newWindow) { newWindow.opener = null }
        }
    }

    function linkToGithub(e: any) {
        e.preventDefault();
        window.open(toGithub, '_blank', '');
    }

    function projectLink(e: any) {
        e.preventDefault();
        window.open(deployLink, '_blank', '');
    }

    return (
        <div className='project-model-container'>
                <Link to='/' className='link link-title' onClick={(e) => click(e)}>
                    <h5>
                        {typeIcon === 'fab' ? <MDBIcon fab icon={iconName} className='text-color'/> : <MDBIcon fas icon={iconName} className='text-color'/>} 
                        &nbsp;{title} 
                        {showIcon ? <MDBIcon fas icon='chevron-up' className='text-color pl-3'/> : <MDBIcon fas icon='chevron-down' className='text-color pl-3'/>}
                    </h5>
                </Link>
                <MDBCollapse open={show}>
                    <MDBListGroup  style={{ minWidth: '22rem' }} light>
                        <MDBListGroupItem className='main-background'>Discipline - <span className='text-color font-weight-bold'>{discipline}</span></MDBListGroupItem>
                        <MDBListGroupItem className='main-background'>{description} - <span className='text-color font-weight-bold'>{renderingTechnologies}</span>!</MDBListGroupItem>
                        <MDBListGroupItem className='main-background'>Build environment - <span className='text-color font-weight-bold'>{environment}</span>!</MDBListGroupItem>
                        <MDBListGroupItem className='main-background'>Project name - <span className='text-color font-weight-bold'>{projectName}</span>!</MDBListGroupItem>
                        <MDBListGroupItem className='main-background'>Project link - 
                            <span className='text-color font-weight-bold align-middle'>
                                <Link to='/' 
                                    className='text-color font-weight-bold align-middle' 
                                    onClick={(e) => projectLink(e)}
                                >
                                    <MDBIcon fab icon='telegram-plane' size='2x' className='text-color pl-1'/>
                                </Link>
                            </span>
                        </MDBListGroupItem>
                       
                        <MDBListGroupItem className='main-background '>View code to GitHub - 
                            <Link to={toGithub} 
                                className='text-color font-weight-bold align-middle' 
                                onClick={(e) => linkToGithub(e)}
                            >
                                <MDBIcon fab icon='github-square' size='2x' className='text-color pl-1'/>
                            </Link>
                        </MDBListGroupItem> 

                        <MDBListGroupItem className='main-background'>Practical Exam - grade: <span className='text-color font-weight-bold'>{grade}</span></MDBListGroupItem>
                        
                        <MDBListGroupItem className='main-background'>Sertificate - 
                            <Link to="/" className='text-color font-weight-bold' onClick={(e) => showSertificate(e)}> {sertificate === 'has not been sertificate!' ? sertificate : 'Yes'}</Link>
                        </MDBListGroupItem>
                    </MDBListGroup>
                </MDBCollapse>
        </div>
    )
}