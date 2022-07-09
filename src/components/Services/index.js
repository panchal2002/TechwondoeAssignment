import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function Services({ homeServCont }) {
    // console.log(homeServCont)
    return (
        <div className='our-services wf-section'>
            <div className='servicesContainer row'>
                <div id='inner column left'>
                    <div className='home-our-services'>
                        <h4 className="services">
                            {homeServCont.servicesTitle}
                        </h4>
                        <h2 className='display-2 text-align-cenre-mobile'>
                            {homeServCont.servicesHeading1} <br />{homeServCont.servicesHeading2}
                            <span className='text-gradient'>{homeServCont.servicesHeading3}</span>
                        </h2>

                        <div className='services-list'>
                            <ul role='list' className='list'>
                                <li className='l1'>{homeServCont.servicesList1}</li>
                                <li className='l1'>{homeServCont.servicesList2}</li>
                                <li className='l1'>{homeServCont.servicesList3}</li>
                                <li className='l1'>{homeServCont.servicesList4} </li>
                                <li className='l1'>{homeServCont.servicesList5}</li>
                            </ul>
                            <Link className="button button-line margin-20px w-button" to="/aboutus">
                                {homeServCont.servicesLearnMore}
                            </Link>
                        </div>
                        <div className='margin-60px'>
                            <div className='featrues-flex'></div>
                        </div>
                    </div>
                </div>
                <img src={homeServCont.servicesImage.fields.file.url}
                    loading='lazy' id='w-node-_1fa41dc1-9865-90aa-e0f7-538e937b1879-059e42a0' alt='' className='column right'></img>
            </div>
        </div>
    )
}

export default Services