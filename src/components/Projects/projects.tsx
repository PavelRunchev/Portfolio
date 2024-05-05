import React from 'react';
import './projects.scss';

import TitleWrapper from '../../HOC/title';

import projectData from '../../services/projects.data';
import ProjectModel from './project-model';

import projectMobileData from '../../services/project-mobile-data';
import ProjectMobileModel from './project-mobile-model';

export default function Projects() {
    return (
        <div className='projects-container'>
            <TitleWrapper title={"PROJECTS"} hrID={"projects"}/>

            <div className='projects-side-container'>
                {projectData.map((el, i) => <ProjectModel key={i} data={el}/>)}
            </div>

            <div className='projects-side-container'>
                {projectMobileData.map((el, i) => <ProjectMobileModel key={i} data={el}/>)}
            </div>
        </div>
    )
}