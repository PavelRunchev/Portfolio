import React, { Component } from 'react';
import './main.scss';

//import { Routes, Route } from 'react-router-dom';

import About from '../About/about';
import Education from '../Education/education';
import Qualification from '../Qualification/qualification';

export default class Main extends Component {
    render() {
        return (
            <div className='main-container'>
                <About />
                <Education />

                <Qualification />
                {/* <Routes>
                    <Route path='/' element={<About />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/education' element={<Education />}/>
                </Routes> */}
            </div>
        )
    }
}