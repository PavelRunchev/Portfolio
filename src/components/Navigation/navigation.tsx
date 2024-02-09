import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';

import './navigation.scss';

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false);
  console.log(openNav);

  return (
    <nav className='navigation-container'>
    <MDBNavbar expand='lg'>
      <MDBContainer fluid>
        <MDBNavbarBrand className='logo-portfolio'>Portfolio</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon='bars' fas className='icon-bars'/>
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <NavLink className='nav-about-link' to='/about'>About</NavLink>
              <span className='about-under-line'></span>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink className='nav-education-link' to='/education'>Education</NavLink>
              <span className='education-under-line'></span>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink className='nav-skills-link' to='#'>Skills</NavLink>
              <span className='skills-under-line'></span>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink className='nav-qualification-link' to='#'>Qualification</NavLink>
              <span className='qualification-under-line'></span>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink className='nav-projects-link' to='#'>Projects</NavLink>
              <span className='projects-under-line'></span>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink className='nav-environments-link' to='#'>Environments</NavLink>
              <span className='environments-under-line'></span>
            </MDBNavbarItem>
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </nav>
  );
}