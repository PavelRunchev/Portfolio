import React, { useState } from 'react';
import './qualification.scss';

import { MDBBtn, MDBCollapse } from 'mdb-react-ui-kit';
import DisciplineTable from './disciplineTable';

export default function Qualification() {
    const [showTableBtn, setTableBtn] = useState(false);

    return (
        <div className='qualification-container'>
             <hr id="qualification" className='hr'></hr>

            <div className='title-container mb-5'>
                <h2 className='title mt-5'>Qualification</h2>
            </div>


            <div>
                <MDBBtn noRipple className='more-info-btn btn mb-3' onClick={() => setTableBtn(!showTableBtn)}>descipline info</MDBBtn>
                   
                <MDBCollapse open={showTableBtn}>
                    <DisciplineTable />
                </MDBCollapse>
            </div>
           
        </div>
    )
}