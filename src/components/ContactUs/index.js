import React from 'react'
import Form from './Form'
import './style.css'
function ContactUs({ contactCont }) {
    return (
        <div className='contact-us-container'>
            <div className='contact-us-title'>
                <h4>{contactCont.contactUsTitle}</h4>
                <h3 className='display-2 contact-us-heading'>
                    {contactCont.heading1}<br />{contactCont.heading2}
                    <span className='text-gradient'>{contactCont.heading3}</span>
                </h3>
            </div>
            <div className='form-container'>
                <div></div>
                <Form formDetail={contactCont} />
            </div>
        </div>
    )
}

export default ContactUs