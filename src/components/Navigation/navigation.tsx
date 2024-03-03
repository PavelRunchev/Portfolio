import React, { useState } from 'react';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';

import './navigation.scss';

export default function Navigation(props: any) {
  const [openNav, setOpenNav] = useState(false);
  
  //boolean values
  const { aboutShow, educationShow, skillsShow, qualificationShow, projectsShow, environmentsShow } = props.allNavBarLinks;
  //click nav functions
  const { about, education, skills, qualification, projects, environments } = props.navFunctions;

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
              <a onClick={(e) => about(e)} className='nav-about-link' href='/#'>About</a>
              {aboutShow ? <span className='about-under-line'></span> : null}
            </MDBNavbarItem>

            <MDBNavbarItem>
              <a onClick={(e) => education(e)} className='nav-education-link' href='/#education'>Education</a>
              {educationShow ? <span className='education-under-line'></span> : null}
            </MDBNavbarItem>

            <MDBNavbarItem>
              <a onClick={(e) => skills(e)} className='nav-skills-link' href='/#skills'>Skills</a>
              {skillsShow ? <span className='skills-under-line'></span> : null}
            </MDBNavbarItem>

            <MDBNavbarItem>
              <a onClick={(e) => qualification(e)} className='nav-skills-link' href='/#qualification'>Qualification</a>
              {qualificationShow ? <span className='skills-under-line'></span> : null}
            </MDBNavbarItem>

            <MDBNavbarItem>
              <a onClick={(e) => projects(e)} className='nav-skills-link' href='/#projects'>Projects</a>
              {projectsShow ? <span className='skills-under-line'></span> : null}
            </MDBNavbarItem>

            <MDBNavbarItem>
              <a onClick={(e) => environments(e)} className='nav-skills-link' href='/#environments'>Environments</a>
              {environmentsShow ? <span className='skills-under-line'></span> : null}
            </MDBNavbarItem>
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </nav>
  );
}