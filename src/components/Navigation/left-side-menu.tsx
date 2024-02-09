import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {
    MDBCardImage,
    MDBIcon
} from 'mdb-react-ui-kit';

import './left-side-menu.scss';
import image from '../../public/images/DSCF0009.png';

export default class LeftSideMenu extends Component {
    render() {
        return (
            <div className='Left-Side-Menu-Container'>
                <div className='image-container'>
                     <MDBCardImage className='nav-logo ml-4 ml-lg-0' src={image} fluid alt='logo' />
                </div>
                <div className='nav-link-container'>
                    <div className='link-container'>
                        <NavLink className='about-link'  to='/about'>About</NavLink>
                        <MDBIcon fas icon="caret-right" className='about-caret-right'/>
                    </div>

                    <div className='link-container'>
                        <NavLink className='education-link'  to='/education'>Education</NavLink>
                        <MDBIcon fas icon="caret-right" className='education-caret-right' />
                    </div>
                    
                    <div className='link-container'>
                        <NavLink className='skills-link' to='#hr-about'>Skills</NavLink>
                        <MDBIcon fas icon="caret-right" className='skills-caret-right'/>
                    </div>

                    <div className='link-container'>
                        <NavLink className='qualification-link' to='#hr-about'>Qualification</NavLink>
                        <MDBIcon fas icon="caret-right" className='qualification-caret-right'/>
                    </div>
                   
                    <div className='link-container'>
                        <NavLink className='projects-link' to='#hr-about'>Projects</NavLink>
                        <MDBIcon fas icon="caret-right" className='projects-caret-right'/>
                    </div>

                    <div className='link-container'>
                        <NavLink className='environments-link' to='#hr-about'>Environments</NavLink>
                        <MDBIcon fas icon="caret-right" className='environments-caret-right'/>
                    </div>
                </div>

                <div className='author-container'>
                    <p>Powered by Pavel Runchev</p>
                    <p>Used technologies: <MDBIcon fab icon="react" /> <MDBIcon fab icon="bootstrap" /> <MDBIcon fab icon="sass" /></p>
                    <p>© 2019-2024</p>
                    <p>All right reserved!</p>
                </div>
            </div>
           
        )
    }
}