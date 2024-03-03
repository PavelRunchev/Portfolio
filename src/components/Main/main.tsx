import React, { Component } from 'react';
import './main.scss';

//import { Routes, Route } from 'react-router-dom';

import About from '../About/about';
import Education from '../Education/education';
import Skills from '../Skills/skills';
import Qualification from '../Qualification/qualification';
import Projects from '../Projects/projects';
import DevelopmentEnvironments from '../Environments/development-environments';

export default class Main extends Component {
    render() {
        return (
            <div className='main-container'>
                <About />
                <Education />
                <Skills />
                <Qualification />
                <Projects />
                <DevelopmentEnvironments />
            </div>
        )
    }
}