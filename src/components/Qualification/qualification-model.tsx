import React, { useState } from 'react';
import './qualification-model.scss';
import { Link } from 'react-router-dom';

import { 
    MDBListGroup, 
    MDBListGroupItem, 
    MDBCollapse, 
    MDBIcon
} from 'mdb-react-ui-kit';

export default function QualificationModel(props: any): React.JSX.Element {
        const [show, set] = useState(false);
        const [showIcon, setIcon] = useState(false);

        let { titleIcon, title1, title2, grade, github, githubName, context, sertificate } = props.data;
    
        function click(e: any): void {
            set(!show);
            setIcon(!showIcon);
        }

        function showSertificate(e: any): void {
            let newWindow = window.open(sertificate, '_blank', 'width=455,height=648');
            if (newWindow) { newWindow.opener = null }
        }

        function linkToGithub(e: any) {
            e.preventDefault();
            window.open(github, '_blank', '');
        }

        return (
            <div className='my-4 qualification-model-container'>
                <Link to='/' className='link link-title' onClick={(e) => click(e)}>
                    <h5>{titleIcon === "C#" ? <span className='text-color'>C# </span> : <MDBIcon fab icon={titleIcon} className='text-color'/>} {title1} <span className='text-color'>{title2}</span> 
                    {showIcon ? <MDBIcon fas icon='chevron-up' className='text-color pl-3'/> : <MDBIcon fas icon='chevron-down' className='text-color pl-3'/>}</h5>
                </Link>
                <MDBCollapse open={show}>
                    <MDBListGroup  style={{ minWidth: '22rem' }} light>
                        {context.map((el: string, index: number) => {
                            return <MDBListGroupItem className='main-background' key={index}>{index + 1}. {el}</MDBListGroupItem>
                        })}
                        <MDBListGroupItem className='main-background'>4. Practical Exam - grade <span className='text-color font-weight-bold'>{grade}</span></MDBListGroupItem>
                        {github 
                            ?  <MDBListGroupItem className='main-background'>
                                    Link to Github - 
                                    <Link to={github} 
                                        className='text-color font-weight-bold' 
                                        onClick={(e) => linkToGithub(e)}
                                    > {githubName}</Link>
                                </MDBListGroupItem> 
                            : null
                        }
                        <MDBListGroupItem className='main-background'>Sertificate - 

                            <Link to="/" className='text-color font-weight-bold' onClick={(e) => showSertificate(e)}> Yes</Link>

                        </MDBListGroupItem>
                    </MDBListGroup>
                </MDBCollapse>
            </div>
        )
}