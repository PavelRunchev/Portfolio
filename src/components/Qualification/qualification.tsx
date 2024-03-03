import React, { useState } from 'react';
import './qualification.scss';

import { MDBBtn, MDBCollapse } from 'mdb-react-ui-kit';

import SoftwareTechnologies from './Inner-components/softwareTechnologies';
import JSFundamentals from './Inner-components/js-fundamentals';
import JSAdvanced from './Inner-components/js-advanced';
import JSApplication from './Inner-components/js-application';
import ExpressJS from './Inner-components/express-js';
import ReactJS from './Inner-components/react-js';
import Angular from './Inner-components/angular';

import ProgrammingFundamentals from './Inner-components/programming-fundamentals';
import CSharpAdvanced from './Inner-components/csharp-advanced';
import Java from './Inner-components/java';

import DisciplineTable from './Inner-components/disciplineTable';
import TitleWrapper from '../../HOC/Title-Component/title';

export default function Qualification() {
   
    //Tu Gabrovo table
    const [showTableBtn, setTableBtn] = useState(false);

    return (
        <div className='qualification-container'>
            <TitleWrapper title={"QUALIFICATION"} hrID={"qualification"}/>

            <div className='qualification-side-container mb-5'>
                <h3 className='mb-5'>Courses and <span className='text-color'>Sertificates</span></h3>

                <h3 className='mb-2'>Software <span className='text-color'>University</span></h3>
                <div className='qualification-inner-container'>
                    <SoftwareTechnologies />
                    <JSFundamentals />
                    <JSAdvanced />
                    <JSApplication />
                    <ExpressJS />
                    <ReactJS />
                    <Angular />

                    <ProgrammingFundamentals />
                    <CSharpAdvanced />
                    <Java />
                </div>
            </div>


            <div>
            <h3 className='mb-2'>Technival University - <span className='text-color'>Gabrovo</span></h3>
                <MDBBtn noRipple className='more-info-btn btn mb-3' onClick={() => setTableBtn(!showTableBtn)}>descipline info</MDBBtn>
                   
                <MDBCollapse open={showTableBtn}>
                    <DisciplineTable />
                </MDBCollapse>
            </div>
           
        </div>
    )
}