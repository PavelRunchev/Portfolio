import React, { useState } from 'react';
import './education.scss';

import { MDBCarousel, MDBCarouselItem, MDBCollapse, MDBBtn, MDBIcon, MDBCardImage } from 'mdb-react-ui-kit';

import Image1 from '../../public/images/softuni/softuni-logo.jpg';
import Image2 from '../../public/images/softuni/softuni-image.jpg';
import Image3 from '../../public/images/softuni/leason.jpg';
import Image4 from '../../public/images/softuni/softuni-nakov-inspiration-lab_16057863.jpg';

import GraduationCertificate from '../../public/images/certificates/Diploma.jpg';

export default function Education() {
    const [showGraduation, setGraduation] = useState(false);
    return (
        <div className='education-container'>
            <hr id="education"></hr>

            <div className='education-title-container mb-5'>
                <h2 className='education-title mt-5'>EDUCATION</h2>
            </div>

            <div className='education-softuni-container'>
                <h3>Software Engineering - <span className='text-color'>Software University</span></h3>
                <div className='education-softuni-image-container my-4'>
                    <MDBCarousel className='education-softuni-image-carousel'>
                        <MDBCarouselItem itemId={1}>
                            <MDBCardImage className='education-softuni-image img-fluid rounded' src={Image1} fluid alt='image' />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={2}>
                            <MDBCardImage className='education-softuni-image img-fluid rounded' src={Image2} fluid alt='image' />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={3}>
                            <MDBCardImage className='education-softuni-image img-fluid rounded' src={Image3} fluid alt='image' />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={4}>
                            <MDBCardImage className='education-softuni-image img-fluid rounded' src={Image4} fluid alt='image' />
                        </MDBCarouselItem>
                    </MDBCarousel>
                </div>

                <p>Software University (SoftUni) is an organization that provides high quality software development education, profession and a career start for thousands of young people in Bulgaria. SoftUni teaches its students how to be skillful software engineers, using the latest technologies, tools and platforms.</p>

                <div className='education-softuni-graduation-certificate-container mt-3 mb-5'>
                    <MDBBtn noRipple className='more-info-btn btn mb-3' onClick={() => setGraduation(!showGraduation)}>
                        <MDBIcon fas icon='graduation-cap' className='mr-2'/>
                        graduation certificate
                    </MDBBtn>
                   
                    <MDBCollapse open={showGraduation}>
                        <MDBCardImage className='img-fluid rounded' src={GraduationCertificate} fluid alt='certificate' />
                    </MDBCollapse>
                </div>
            </div>

            <hr></hr>

            <div className='education-tu-gabrovo-container'>
                <h3>Technical University - <span className='text-color'>Gabrovo</span></h3>
                <h3><span className='text-color'>Speciality</span> - Software and Computer Engineering</h3>
            </div>
        
        </div>
    )
}
