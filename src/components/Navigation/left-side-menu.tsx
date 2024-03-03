import React, { useState, useEffect } from 'react';

import {
    MDBCardImage,
    MDBIcon
} from 'mdb-react-ui-kit';

import './left-side-menu.scss';
import image from '../../public/images/DSCF0009.png';
import Loading from '../Loading/loading';

export default function LeftSideMenu(props: any) {
    const [loadingHide, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 500);
    }, []);

    const {aboutShowCaretRight, educationShowCaretRight, skillsShowCaretRight, 
        qualificationShowCaretRight, projectsShowCaretRight, environmentsShowCaretRight } = props.allLinks;
    const { about, education, skills, qualification, projects, environments } = props.navFunctions;

        return (
            <div className='Left-Side-Menu-Container'>
                <div className='image-container'>
                    {loadingHide === false 
                        ? <MDBCardImage className='nav-logo ml-4 ml-lg-0' src={image} fluid alt='logo' />
                        : <Loading />}
                </div>

                <div className='nav-link-container'>
                    <div className='link-container'>
                        <a onClick={(e) => about(e)} className='about-link'  href='/#'>About</a>
                        {aboutShowCaretRight 
                            ? <MDBIcon fas icon="caret-right" className='about-caret-right'/>
                            : null
                        }
                    </div>

                    <div className='link-container'>
                        <a onClick={(e) => education(e)} className='about-link'  href='/#education'>Education</a>
                        {educationShowCaretRight 
                            ? <MDBIcon fas icon="caret-right" className='about-caret-right'/>
                            : null
                        }
                    </div>

                    <div className='link-container'>
                        <a onClick={(e) => skills(e)} className='about-link'  href='/#skills'>Skills</a>
                        {skillsShowCaretRight 
                            ? <MDBIcon fas icon="caret-right" className='about-caret-right'/>
                            : null
                        }
                    </div>
                    
                    <div className='link-container'>
                        <a onClick={(e) => qualification(e)} className='about-link'  href='/#qualification'>Qualification</a>
                        {qualificationShowCaretRight 
                            ? <MDBIcon fas icon="caret-right" className='about-caret-right'/>
                            : null
                        }
                    </div>

                    <div className='link-container'>
                        <a onClick={(e) => projects(e)} className='about-link'  href='/#projects'>Projects</a>
                        {projectsShowCaretRight 
                            ? <MDBIcon fas icon="caret-right" className='about-caret-right'/>
                            : null
                        }
                    </div>

                    <div className='link-container'>
                        <a onClick={(e) => environments(e)} className='about-link'  href='/#environments'>Environments</a>
                        {environmentsShowCaretRight 
                            ? <MDBIcon fas icon="caret-right" className='about-caret-right'/>
                            : null
                        }
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