import React from 'react';
import './development-environments.scss';

import { MDBTypography } from 'mdb-react-ui-kit';
import TitleWrapper from '../../HOC/title';

export default function DevelopmentEnvironments() {
    return (
        <div className='development-environments-container mb-5'>
            <TitleWrapper title={"DEVELOPMENT ENVIRONMENTS"} hrID={"environments"}/>
             
            <div className='development-environments-side-container'>
                <div className='development-environments-inner-container'>
                    <MDBTypography tag='h3' className='title-environments title-js'>Java Script</MDBTypography>
                    <MDBTypography tag='h4'>VS <span className='text-color'>Code</span></MDBTypography>
                    <MDBTypography tag='h4'>Web <span className='text-color'>Storm</span></MDBTypography>
                    <MDBTypography tag='h4'>MongoDB <span className='text-color'>Compass</span></MDBTypography>
                </div>

                <div className='development-environments-inner-container'>
                    <MDBTypography tag='h3' className='title-environments title-csharp'>C#</MDBTypography>
                    <MDBTypography tag='h4'>Visual <span className='text-color'>Studio</span></MDBTypography>
                    <MDBTypography tag='h4'>SQL <span className='text-color'>Server</span></MDBTypography>
                </div>

                <div className='development-environments-inner-container'>
                    <MDBTypography tag='h3' className='title-environments title-java'>Java</MDBTypography>
                    <MDBTypography tag='h4'>IntelliJ <span className='text-color'>IDEA</span></MDBTypography>
                    <MDBTypography tag='h4'>Eclipse <span className='text-color'>NetBeans</span></MDBTypography>
                    <MDBTypography tag='h4'>Apache <span className='text-color'>NetBeans</span></MDBTypography>
                    <MDBTypography tag='h4'>MySQL</MDBTypography>
                </div>

                <div className='development-environments-inner-container'>
                    <MDBTypography tag='h3' className='title-environments title-php'>PHP Script</MDBTypography>
                    <MDBTypography tag='h4'>PHP <span className='text-color'>Storm</span></MDBTypography>
                    <MDBTypography tag='h4'>Warm <span className='text-color'>Server</span></MDBTypography>
                </div>

                <div className='development-environments-inner-container'>
                    <MDBTypography tag='h3' className='title-environments title-python'>Python</MDBTypography>
                    <MDBTypography tag='h4'>PyCharm <span className='text-color'>JetBrains</span></MDBTypography>
                </div>

                <div className='development-environments-inner-container'>
                    <MDBTypography tag='h3' className='title-environments title-js'>CNC Environment</MDBTypography>
                    <MDBTypography tag='h4'>Bricks <span className='text-color'>CAD</span></MDBTypography>
                    <MDBTypography tag='h4'>NX <span className='text-color'>Siemens</span> CAD/CAM</MDBTypography>
                    <MDBTypography tag='h4'>Win<span className='text-color'>Tool</span></MDBTypography>
                    <MDBTypography tag='h4'>SAP <span className='text-color'>Software</span> Solutions</MDBTypography>
                </div>
            </div>
        </div>
    )
}