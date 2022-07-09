import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header/Header'
import './style.css'
function AboutUs({ aboutContent }) {
    return (
        <div className='about-us-page'>
            <Header headerCont={aboutContent[2].fields} />
            <div className='about-us-page-container'>About Us Page</div>
            <Footer footerCont={aboutContent[1].fields} />
        </div>
    )
}
export default AboutUs