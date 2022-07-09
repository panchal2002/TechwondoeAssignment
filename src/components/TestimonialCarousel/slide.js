import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
function Slide({ clientDetail, testiCS }) {
    // console.log(clientDetail.clientImage)
    return (
        <div id='slides'>
            <div style={{ backgroundImage: `url(${clientDetail.clientImage})` }} className='client-pic'></div>
            <div className='client-testimonial-content'>
                <div className='client-testi-heading'>
                    <h2 className='testi-client-name'>{clientDetail.clientName}</h2>
                    <h3 className='testi-company-name'>{clientDetail.clientCompany}</h3>
                </div>
                <div className='client-testi-desc'>
                    {clientDetail.clientDesc}
                </div>
                <Link className="enquire-btn btn" to="/casestudies">
                    {testiCS}
                </Link>
            </div>
        </div>
    )
}

export default Slide;