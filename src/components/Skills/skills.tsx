import React from 'react';
import './skills.scss';

import TitleWrapper from '../../HOC/title';
import SkillComponent from './skills-model';

import { frontEndData } from '../../services/skills-data';
import { backEndData } from '../../services/skills-data';
import { packageManagerData } from '../../services/skills-data';
import { databaseData } from '../../services/skills-data';

export default function Skills() {

    return (
        <div className='skills-container'>
            <TitleWrapper title={"SKILLS"} hrID={"skills"}/>

            <div className='skills-side-container'>
                <h3 className='mb-5'>Programming Language and <span className='text-color'>Tools</span></h3>

                <div className='skills-programming-language-container'>
                    <div className='skills-inner-container'>
                        <h4 className='mt-3'><span className='text-color'>Front-End</span> Technologies</h4>
                        {frontEndData.map(el => <SkillComponent key={el.id} data={el}/>)}
                    </div>
                  
                    <div className='skills-inner-container'>
                        <h4 className='mt-3'><span className='text-color'>Back-End</span> Technologies</h4>
                        {backEndData.map(el => <SkillComponent key={el.id} data={el}/>)}
                    </div>
                  
                    <div className='skills-inner-container'>
                        <h4 className='mt-3'><span className='text-color'>Package</span> Manager</h4>
                        {packageManagerData.map(el => <SkillComponent key={el.id} data={el}/>)}
                    </div>

                    <div className='skills-inner-container'>
                        <h4 className='mt-3'><span className='text-color'>Typese</span> Database</h4>
                        {databaseData.map(el => <SkillComponent key={el.id} data={el}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}