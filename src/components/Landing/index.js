import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function Landing({ landingContent }) {
    // console.log(landingContent)
    return (
        <div id='home' className='hero-home'>
            <div className='container'>
                <div className='hero-text hero-text-home'>
                    <h4 className='sub-small-title btn-992'>{landingContent.landingTitle}</h4>
                    <div>
                        <h1 className='display-1 landing-heading'>
                            {landingContent.landingHeading}<br /> {landingContent.landingHeading2}
                            <span className='text-gradient'>{landingContent.landingHeading3}</span>
                        </h1>
                    </div>
                    <div className='buttons landing-buttons'>
                        <div className='btn-container'>
                            <Link className="enquire-btn btn" to="/contactus">
                                {landingContent.landingEnquire}
                            </Link>
                            <div className='horizontal-divider'></div>
                            <Link className="case-btn btn" to="/casestudies">
                                {landingContent.landingCaseStudies}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing