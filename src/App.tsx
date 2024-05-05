import React, { useState, useEffect} from 'react';

import './App.scss';

import Navigation from './components/Navigation/navigation';
import LeftSideMenu from './components/Navigation/left-side-menu';
import Main from './components/Main/main';

function App() {
  //all click menu links booleans!
  const [aboutShow, setAbout] = useState(true);
  const [educationShow, setEducation] = useState(false);
  const [skillsShow, setSkills] = useState(false);
  const [qualificationShow, setQualification] = useState(false);
  const [projectsShow, setProjects] = useState(false);
  const [environmentsShow, setEnvironments] = useState(false);
  //all click side-menu links booleans
  const [aboutShowCaretRight, setAboutShowCaretRight] = useState(true);
  const [educationShowCaretRight, setEducationShowCaretRight] = useState(false);
  const [skillsShowCaretRight, setSkillsShowCaretRight] = useState(false);
  const [qualificationShowCaretRight, setQualificationShowCaretRight] = useState(false);
  const [projectsShowCaretRight, setProjectsShowCaretRight] = useState(false);
  const [environmentsShowCaretRight, setEnvironmentsShowCaretRight] = useState(false);

  //scrolling navigation show current section
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollPercentage = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;

      if(scrollPercentage <= 10) {
        setAllUnderLinesInNavBar(aboutShow, aboutShowCaretRight, "about");
        setAbout(true);
        setAboutShowCaretRight(true);
      } else if(scrollPercentage > 10 && scrollPercentage <= 40) {
        setAllUnderLinesInNavBar(educationShow, educationShowCaretRight, "education");
        setEducation(true);
        setEducationShowCaretRight(true);
      } else if(scrollPercentage > 40 && scrollPercentage <= 60) {
        setAllUnderLinesInNavBar(skillsShow, skillsShowCaretRight, "skills");
        setSkills(true);
        setSkillsShowCaretRight(true);
      } else if(scrollPercentage > 60 && scrollPercentage <= 80) {
        setAllUnderLinesInNavBar(qualificationShow, qualificationShowCaretRight, "qualification");
        setQualification(true);
        setQualificationShowCaretRight(true);
      } else if(scrollPercentage > 80 && scrollPercentage <= 96) {
        setAllUnderLinesInNavBar(projectsShow, projectsShowCaretRight, "projects"); 
        setProjects(true);
        setProjectsShowCaretRight(true);
      } else if(scrollPercentage > 96 && scrollPercentage <= 100) {
        setAllUnderLinesInNavBar(environmentsShow, environmentsShowCaretRight, "environments");
        setEnvironments(true);
        setEnvironmentsShowCaretRight(true);
      }
    });
  }, [aboutShow, educationShow, skillsShow, qualificationShow, projectsShow, environmentsShow,
    aboutShowCaretRight, educationShowCaretRight, skillsShowCaretRight, qualificationShowCaretRight,
    projectsShowCaretRight, environmentsShowCaretRight
  ]);



  //set curent target link (nav or side-menu): true or false!
  function setAllUnderLinesInNavBar(targetMenuLink: boolean, targetSideBarLink: boolean, targetLink: string): void {
      setAbout(targetLink === "about" ? !targetMenuLink : false);
      setAboutShowCaretRight(targetLink === "about" ? !targetSideBarLink : false);

      setEducation(targetLink === "education" ? !targetMenuLink : false);
      setEducationShowCaretRight(targetLink === "education" ? !targetSideBarLink : false);

      setSkills(targetLink === "skills" ? !targetMenuLink : false);
      setSkillsShowCaretRight(targetLink === "skills" ? !targetSideBarLink : false);

      setQualification(targetLink === "qualification" ? !targetMenuLink : false);
      setQualificationShowCaretRight(targetLink === "qualification" ? !targetSideBarLink : false);

      setProjects(targetLink === "projects" ? !targetMenuLink : false);
      setProjectsShowCaretRight(targetLink === "projects" ? !targetSideBarLink : false);

      setEnvironments(targetLink === "environments" ? !targetMenuLink : false);
      setEnvironmentsShowCaretRight(targetLink === "environments" ? !targetSideBarLink : false);
  }

  //nav and side menu functions click events!
  function about(e: any) { setAllUnderLinesInNavBar(aboutShow, aboutShowCaretRight, "about"); }
  function education(e: any) { setAllUnderLinesInNavBar(educationShow, educationShowCaretRight, "education"); }
  function skills(e: any) { setAllUnderLinesInNavBar(skillsShow, skillsShowCaretRight, "skills"); }
  function qualification(e: any) { setAllUnderLinesInNavBar(qualificationShow, qualificationShowCaretRight, "qualification"); }
  function projects(e: any) { setAllUnderLinesInNavBar(projectsShow, projectsShowCaretRight, "projects"); }
  function environments(e: any) { setAllUnderLinesInNavBar(environmentsShow, environmentsShowCaretRight, "environments"); }

  let allNavBarLinks: any = { 
    aboutShow, 
    educationShow, 
    skillsShow, 
    qualificationShow, 
    projectsShow, 
    environmentsShow 
  };

  let allLinks: any = { 
    aboutShowCaretRight, 
    educationShowCaretRight, 
    skillsShowCaretRight, 
    qualificationShowCaretRight, 
    projectsShowCaretRight, 
    environmentsShowCaretRight 
  };
  
  let navFunctions = {
      about: about,
      education: education,
      skills: skills,
      qualification: qualification,
      projects: projects,
      environments: environments
  }

  return (
    <div className="App-container">
      <Navigation navFunctions={navFunctions} allNavBarLinks={allNavBarLinks}/>
      <LeftSideMenu navFunctions={navFunctions} allLinks={allLinks}/>

      <Main />
    </div>
  );
}

export default App;
