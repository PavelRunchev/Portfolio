import React, { useState } from 'react';
import './project-mobile-model.scss';
import { Link } from 'react-router-dom';

import { 
    MDBListGroup, 
    MDBListGroupItem, 
    MDBCollapse, 
    MDBIcon
} from 'mdb-react-ui-kit';

export default function ProjectMobileModel(props: any) {
    const [show, set] = useState(false);
    const [showIcon, setIcon] = useState(false);

    const { typeIcon, iconName, title, discipline, assignment, description, technologies, environment, 
        projectName, platforms, download, toGithub, grade } = props.data;
    const renderingTechnologies = technologies.join(', ');

    function click(e: any): void {
        set(!show);
        setIcon(!showIcon);
    }

    function linkToGithub(e: any) {
        e.preventDefault();
        window.open(toGithub, '_blank', '');
    }

    return (
        <div className='project-mobile-model-container'>
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
                        <MDBListGroupItem className='main-background'>Assignment - <span className='text-color font-weight-bold'>{assignment}</span></MDBListGroupItem>

                        <MDBListGroupItem className='main-background'>{description} - <span className='text-color font-weight-bold'>{renderingTechnologies}</span>!</MDBListGroupItem>
                        <MDBListGroupItem className='main-background'>Build environment - <span className='text-color font-weight-bold'>{environment}</span>!</MDBListGroupItem>
                        <MDBListGroupItem className='main-background'>Project name - <span className='text-color font-weight-bold'>{projectName}</span>!</MDBListGroupItem>
                        <MDBListGroupItem className='main-background'>Platforms - <span className='text-color font-weight-bold'>{platforms}</span>!</MDBListGroupItem>

                        <MDBListGroupItem className='main-background '>Download in apk (zip) file - 
                            <Link to={download} 
                                className='text-color font-weight-bold align-middle'
                                target='_blank'
                                download
                            >
                                <MDBIcon fas icon='cloud-download-alt' size='2x' className='text-color pl-1'/>
                            </Link>
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
                    </MDBListGroup>
                </MDBCollapse>
        </div>
    )
}