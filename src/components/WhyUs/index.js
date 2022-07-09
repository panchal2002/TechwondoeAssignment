import React from 'react'
import './style.css'
function WhyUs({ whyUsCont }) {
    return (
        <div className='why-us'>
            <h4 className='h1'>{whyUsCont.whyUsTitle} </h4>
            <div className='grid-why-us'>
                <h3 className='display-2'>{whyUsCont.heading1}
                    <span className='text-gradient'>{whyUsCont.heading2}</span>
                </h3>
                <ul className='list'>
                    <li>{whyUsCont.heading3}</li>
                </ul>
                <h3 className='display-2'>{whyUsCont.heading4}
                    <span className='text-gradient'>{whyUsCont.heading5}</span>
                </h3>
                <ul className='list'>
                    <li>{whyUsCont.heading6}</li>
                    <li>{whyUsCont.heading7}</li>
                </ul>
                <h3 className='display-2'>{whyUsCont.heading8}
                    <span className='text-gradient'>{whyUsCont.heading9}</span>
                </h3>
                <ul className='list'>
                    <li>{whyUsCont.heading10}</li>
                    <li>{whyUsCont.heading11}</li>
                    <li>{whyUsCont.heading12}</li>
                </ul>
            </div>
        </div>
    )
}

export default WhyUs