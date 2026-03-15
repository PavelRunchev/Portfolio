import React, { useState } from 'react';
import './diploma-flip-book.scss';

import HTMLFlipBook from 'react-pageflip';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function Demo() {
    const [fullscreenXlModal, setFullscreenXlModal] = useState(false);
    const images: string[] = [
        "IMG_20260210_123844",
        "IMG_20260210_124105",
        "IMG_20260210_124130",
        "IMG_20260210_124152",
        "IMG_20260210_124210",
        "IMG_20260210_124231",
        
       
        "IMG_20260210_124248",
        "IMG_20260210_123912",
        "IMG_20260210_124032",
        "IMG_20260211_105803"
    ];

    const modalPadding = 140;
    const maxHeight = window.innerHeight - modalPadding;
    const pageHeight = Math.min(600, maxHeight);
    const pageWidth = pageHeight * 0.6;

    const toggleOpen = () => setFullscreenXlModal(!fullscreenXlModal);

    return (
        <>
            <MDBBtn noRipple onClick={toggleOpen} className='more-info-btn btn'>Show Diploma</MDBBtn>
            <MDBModal tabIndex='-1' open={fullscreenXlModal} onClose={() => setFullscreenXlModal(false)}>
                <MDBModalDialog size='fullscreen'>
                <MDBModalContent>
                    <MDBModalHeader>
                    <MDBModalTitle><div className='text-md-end'>Diploma <span className='text-color'> Bechelors </span></div></MDBModalTitle>
                    <MDBBtn noRipple type='button' className='more-info-btn btn' onClick={toggleOpen}>Close</MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <div style={{ position: "relative" }} className='demo-flip-book'>                    
                                <HTMLFlipBook key={Date.now()}
                                    {...({
                                        width: pageWidth,
                                        height: pageHeight,
                                        size: "fixed",
                                        minWidth: 200,
                                        maxWidth: pageWidth,
                                        minHeight: 200,
                                        maxHeight: pageHeight,
                                        drawShadow: true,
                                        maxShadowOpacity: 0.5,
                                        showCover: true,
                                        flippingTime: 700,
                                        usePortrait: window.innerWidth < 768,
                                        mobileScrollSupport: false,
                                        className: "demo-flip-book"
                                    } as any)}
                                    >
                                    {images.map((src, index) => (
                                        <div key={index} className="page">
                                        <img src={`/diploma_bachelors_degree/${src}.jpg`} alt={`page-${index}`} />
                                        </div>
                                    ))}
                                </HTMLFlipBook>
                        </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                        To flip through the pages of the diploma, click on it (double touch for mobile device)!
                        <MDBBtn noRipple type='button' className='more-info-btn btn' onClick={toggleOpen}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}