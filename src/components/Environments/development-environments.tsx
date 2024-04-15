import React from 'react';
import './development-environments.scss';

import { MDBCardImage, MDBTooltip } from 'mdb-react-ui-kit';
import TitleWrapper from '../../HOC/title';

import VSCode from '../../public/tools image/vscode.jpg';
import WebStorm from '../../public/tools image/webstorm-image.jpg';
import MongoDB from '../../public/tools image/mongodb.png';

import VS from '../../public/tools image/visual-studio.png';
import SQLServerManagementStudio from '../../public/tools image/SQL Server Management Studio.png';

import IntelliJ from '../../public/tools image/intellij-idea.jpg';
import Eclipse from '../../public/tools image/eclipse-development-environment-netbeans-.png';
import ApacheNetBeans from '../../public/tools image/apache-netbeans.png';
import MySQL from '../../public/tools image/MySQL.png';

import PHPStorm from '../../public/tools image/phpstorm.png';
import WarmServer from '../../public/tools image/wamp-server.jpg';

export default function DevelopmentEnvironments() {
    return (
        <div className='development-environments-container mb-5'>
            <TitleWrapper title={"DEVELOPMENT ENVIRONMENTS"} hrID={"environments"}/>
             
            <div className='development-environments-side-container'>
                <div className='development-environments-inner-container'>
                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="VS Code">
                        <MDBCardImage className='development-environments-tools-image' src={VSCode} fluid alt='tools' />
                    </MDBTooltip>
                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Web Storm">
                        <MDBCardImage className='development-environments-tools-image' src={WebStorm} fluid alt='tools' />
                    </MDBTooltip>
                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="MongoDB">
                        <MDBCardImage className='development-environments-tools-image' src={MongoDB} fluid alt='tools' />
                    </MDBTooltip>
                </div>

                <div className='development-environments-inner-container'>
                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Visual Studio">
                        <MDBCardImage className='development-environments-tools-image' src={VS} fluid alt='tools' />
                    </MDBTooltip>
                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="SQL Server">
                        <MDBCardImage className='development-environments-tools-image' src={SQLServerManagementStudio} fluid alt='tools' />
                    </MDBTooltip>
                </div>

                <div className='development-environments-inner-container'>
                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="IntelliJ IDEA">
                        <MDBCardImage className='development-environments-tools-image' src={IntelliJ} fluid alt='tools' />
                    </MDBTooltip>
                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Eclipse NetBeans">
                        <MDBCardImage className='development-environments-tools-image' src={Eclipse} fluid alt='tools' />
                    </MDBTooltip>
                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Apache NetBeans">
                        <MDBCardImage className='development-environments-tools-image' src={ApacheNetBeans} fluid alt='tools' />
                    </MDBTooltip>
                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="MySQL">
                        <MDBCardImage className='development-environments-tools-image' src={MySQL} fluid alt='tools' />
                    </MDBTooltip>
                </div>

                <div className='development-environments-inner-container'>
                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="PHP Storm">
                        <MDBCardImage className='development-environments-tools-image' src={PHPStorm} fluid alt='tools' />
                    </MDBTooltip>
                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="WarmServer">
                        <MDBCardImage className='development-environments-tools-image' src={WarmServer} fluid alt='tools' />
                    </MDBTooltip>
                </div>
            </div>
        </div>
    )
}