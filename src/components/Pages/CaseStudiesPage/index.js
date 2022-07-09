import React from 'react'
import Header from '../../Header/Header';
import Footer from '../../Footer';
import './style.css'
function CaseStudies({ caseStudiesContent }) {
    return (
        <div className='caseStudiesPage'>
            <Header headerCont={caseStudiesContent[2].fields} />
            <div className='case-studies-page-container'>Case Studies Page</div>
            <Footer footerCont={caseStudiesContent[1].fields} />
        </div>
    )
}
export default CaseStudies