import React from 'react'
import Header from '../../Header/Header';
import Footer from '../../Footer';
import './style.css'
function ContactUs({ contactContent }) {
    return (
        <div className='contact-us-page'>
            <Header headerCont={contactContent[2].fields} />
            <div className='contact-us-page-container'> Contact Us Page </div>
            <Footer footerCont={contactContent[1].fields} />
        </div>
    )
}
export default ContactUs