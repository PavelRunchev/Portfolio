import React from "react";
import { MDBCardImage } from "mdb-react-ui-kit";
import loading from '../../public/images/loading.gif';

import './loading.scss';

const Loading = () => {
    return (
        <div className="container-loading">
            <MDBCardImage className='ml-m-4 ml-lg-0' src={loading} fluid alt='loading' />
        </div>
    )
}


export default Loading;