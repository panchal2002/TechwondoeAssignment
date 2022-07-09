import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function Footer({ footerCont }) {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <img src={footerCont.logo.fields.file.url} alt='' loading='lazy' width='200'></img>
                </div>
                <div className='footer-links-container'>
                    <div className='footer-links'>
                        <Link className="text-link social-link" to="/aboutus">
                            {footerCont.aboutUs}
                        </Link>
                        <Link className="text-link social-link" to="/casestudies">
                            {footerCont.caseStudies}
                        </Link>
                        <Link className="text-link social-link" to="/blogs">
                            {footerCont.blog}
                        </Link>
                        <Link className="text-link social-link" to="/contactus">
                            {footerCont.contactUs}
                        </Link>
                    </div>
                    <div className='footer-social'>
                        <a className="text-link social-link" href={footerCont.linkedInLink}>
                            {footerCont.linkedIn}
                        </a>
                        <a href="mailto:hello@techwondoe.com" className="text-link social-link">
                            {footerCont.email}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer