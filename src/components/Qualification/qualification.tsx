import React, { useState } from 'react';
import './qualification.scss';

import { Link } from 'react-router-dom';
import { MDBBtn, MDBCollapse,  MDBIcon } from 'mdb-react-ui-kit';

import DisciplineTableBachelors from './disciplineTableBachelors';
import DisciplineTableMasters from './disciplineTableMasters';
import TitleWrapper from '../../HOC/title';
import QualificationModel from './qualification-model';
import qualificationArray from '../../services/qualification.data';


export default function Qualification() {
    //Tu Gabrovo table
    const [showTableBtn1, setTableBtn1] = useState(false);
     const [showTableBtn2, setTableBtn2] = useState(false);

    function linkToGithub(e: any) {
        e.preventDefault();
        window.open('https://github.com/PavelRunchev/The-best-recipes/tree/master', '_blank', '');
    }

    return (
        <div className='qualification-container'>
            <TitleWrapper title={"QUALIFICATION"} hrID={"qualification"}/>

            <div className='qualification-side-container'>
                <h3 className='mb-5'>Courses and <span className='text-color'>Sertificates</span></h3>

                <h3 className='mb-2'>Software <span className='text-color'>University</span></h3>
                <div className='qualification-inner-container'>
                    {qualificationArray.map((el, index) => <QualificationModel key={index} data={el}/>)}
                </div>
            </div>

             <hr></hr>

            <div className='mt-5'>
                <h3 className='mb-2'>Technical University - <span className='text-color'>Gabrovo</span></h3>
                <MDBBtn noRipple className='more-info-btn btn mb-3' onClick={() => setTableBtn1(!showTableBtn1)}>Bachelor's Degree info</MDBBtn>
                   
                <MDBCollapse open={showTableBtn1}>
                    <DisciplineTableBachelors />
                    <h3 className='font-weight-bold'>Diploma - Bachelor's Degree</h3>
                    <h4>Thesis: 
                        <span className='text-color'> Development of a mobile application for sharing 
                            <span className='font-weight-bold'> recipes</span> with categories, rating and photos.
                        </span>
                    </h4>
                    <h4>Technologies used: <span className='text-color'>Framework7 with React</span></h4>
                    <h4>Database: <span className='text-color'>Firebase Realtime DB and Storage</span></h4>
                    <h4>Environment: <span className='text-color'>VS Code</span></h4>
                    <h4>Platform: <span className='text-color'>Android, Web</span></h4>

                    <h4>Development - grade: <span className='text-color'>6</span></h4>
                    <h4>Defense - grade: <span className='text-color'>6</span></h4>
                    <h4>View code to GitHub: 
                        <Link to='' className='text-color font-weight-bold align-middle' onClick={(e) => linkToGithub(e)}>
                            <MDBIcon fab icon='github' size='1x' className='text-color pl-2'/>
                        </Link>
                    </h4>
                    <h4>Download in apk file: 
                         <Link to='/the-best-recipes-2-0-4.zip' target='_blank' className='text-color font-weight-bold align-middle'  download>
                            <MDBIcon fas icon='cloud-download-alt' size='1x' className='text-color pl-2'/>
                        </Link>
                    </h4>
                </MDBCollapse>

                <hr></hr>

                <div className='mt-5'>
                    <MDBBtn noRipple className='more-info-btn btn mb-3' onClick={() => setTableBtn2(!showTableBtn2)}>Master's Degree info</MDBBtn>
                    <MDBCollapse open={showTableBtn2}>
                        <DisciplineTableMasters />
                        <h3 className='font-weight-bold'>Diploma - Master's Degree</h3>
                        <h4>in progress...</h4>
                    </MDBCollapse>
                </div>
            </div>
           
        </div>
    )
}