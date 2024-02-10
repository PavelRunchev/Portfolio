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

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false);
  
  const [aboutShow, setAbout] = useState(false);
  const [educationShow, setEducation] = useState(false);
  const [skillsShow, setSkills] = useState(false);
  const [qualificationShow, setQualification] = useState(false);
  const [projectsShow, setProjects] = useState(false);
  const [EnvironmentsShow, setEnvironments] = useState(false);

  function setAllUnderLines(targetLine: boolean, targetLink: string): void {
      setAbout(targetLink === "about" ? !targetLine : false);
      setEducation(targetLink === "education" ? !targetLine : false);
      setSkills(targetLink === "skills" ? !targetLine : false);
      setQualification(targetLink === "qualification" ? !targetLine : false);
      setProjects(targetLink === "projects" ? !targetLine : false);
      setEnvironments(targetLink === "environments" ? !targetLine : false);
  }

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
              <a onClick={() => setAllUnderLines(aboutShow, 'about')} className='nav-about-link' href='/#'>About</a>
              {aboutShow ? <span className='about-under-line'></span> : null}
            </MDBNavbarItem>

            <MDBNavbarItem>
              <a onClick={() => setAllUnderLines(educationShow, 'education')} className='nav-education-link' href='/#education'>Education</a>
              {educationShow ? <span className='education-under-line'></span> : null}
            </MDBNavbarItem>

            <MDBNavbarItem>
              <a onClick={() => setAllUnderLines(skillsShow, 'skills')} className='nav-skills-link' href='/#'>Skills</a>
              {skillsShow ? <span className='skills-under-line'></span> : null}
            </MDBNavbarItem>

            <MDBNavbarItem>
              <a onClick={() => setAllUnderLines(qualificationShow, 'qualification')} className='nav-qualification-link' href='/#'>Qualification</a>
              {qualificationShow ? <span className='qualification-under-line'></span> : null}
            </MDBNavbarItem>

            <MDBNavbarItem>
              <a onClick={() => setAllUnderLines(projectsShow, 'projects')} className='nav-projects-link' href='/#'>Projects</a>
              {projectsShow ? <span className='projects-under-line'></span> : null}
            </MDBNavbarItem>

            <MDBNavbarItem>
              <a onClick={() => setAllUnderLines(EnvironmentsShow, 'environments')} className='nav-environments-link' href='/#'>Environments</a>
              {EnvironmentsShow ? <span className='environments-under-line'></span> : null}
            </MDBNavbarItem>
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </nav>
  );
}