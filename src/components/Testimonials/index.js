import React from 'react'
import TestimonialCarousel from '../TestimonialCarousel'
import './style.css'
function Testimonials({ testiCont }) {
    return (
        <div className='testimonials'>
            <div className='testimonials-grid'>
                <div className='testimonials-head'>
                    <h4>{testiCont.testimonialTitle}</h4>
                    <h3 className='display-2 heading-test'>
                        {testiCont.heading1}
                        <span className='text-gradient'>{testiCont.heading2}</span>
                    </h3>
                </div>
                <div className='testimonials-wrapper'>
                    <TestimonialCarousel testiCont={testiCont} />
                </div>
            </div>
        </div>
    )
}

export default Testimonials