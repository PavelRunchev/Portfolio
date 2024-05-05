import React from 'react';

export default function TitleWrapper(props: any): React.JSX.Element {
    return (
        <>
            {props.hrID === "about" ? null : <hr id={props.hrID} className='hr'></hr>}

            <div className='title-container mb-5'>
                <h2 className='title mt-5'>{props.title}</h2>
            </div>
        </>
    )
}