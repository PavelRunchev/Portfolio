import React,  { useState } from 'react';

import './about.scss';

import { MDBCollapse, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function About() {
    const [isOpen, setIsOpen] = useState(false);

    

    return (
        <div className='about-container'>
            <h1 className='about-firstname'>PAVEL <span className='about-family'>RUNCHEV</span></h1>
            <h3><MDBIcon fas icon='globe-europe' className='about-icons'/> BULGARIA</h3>
            <h3><MDBIcon fas icon='map-marker-alt' className='about-icons ml-1'/> GABROVO</h3>
            <h3><MDBIcon fas icon='mobile-alt' className='about-icons ml-1'/> 0879 999436</h3>
            <h3><MDBIcon fas icon='envelope' className='about-icons'/> pavel.runchev@gmail.com</h3>
            <h3><MDBIcon fab icon='github' className='about-icons'/> PavelRunchev</h3>
            <h3><MDBIcon fab icon='linkedin' className='about-icons'/> Pavel Runchev</h3>
            <h3><MDBIcon fab icon='facebook' className='about-icons'/> Pavel Runchev</h3>
            <h3><MDBIcon fab icon='skype' className='about-icons'/> raidersgb</h3>
            <h3 className='font-weight-bold'><MDBIcon fas icon='desktop' className='about-icons'/> Full Stack Developer</h3>
            
            <hr id="hr-about"></hr>

            <div className='about-title-container mb-5'>
                <h2 className='about-title mt-5'>ABOUT</h2>
            </div>
           
            <p>I’m a passionate developer who tends to be mindful for the entire product lifetime. I really enjoy being part of a team which creates a friendly and helpful environment. I truly believe our software can make a profound impact for the end users.</p>
            <div className='more-info-container'>
                <MDBBtn noRipple className='more-info-btn mb-3' onClick={() => setIsOpen(!isOpen)}>More info</MDBBtn>
                <MDBCollapse open={isOpen}>
                    <h3>Hobbies and Interests:</h3>
                    <p>Apart from being a Web JS Developer, I enjoy most of my time being outdoors. In the cold and dark days i love watch fantasy genre movies and astronomy or playing video games with adventure and logically styles. During the warmer months I enjoy the fresh mountain air exploring strange places related to interesting historical events.</p>
                    <p>During my free time i exploring the latest technology advancements in the front-end web development world.</p>
                </MDBCollapse>
            </div>
          
            <h3 className='mt-3'>Knowledge of languages</h3>
            <p className='font-weight-bold'><span className='about-knowledge-of-language'>B1</span> (Intermediate English)</p>
        </div>
    )
}