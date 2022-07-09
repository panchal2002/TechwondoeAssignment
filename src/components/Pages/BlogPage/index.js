import React from 'react'
import Header from '../../Header/Header';
import Footer from '../../Footer';
import './style.css'
function BlogPage({ blogPageContent }) {
    return (
        <div className='blog-page'>
            <Header headerCont={blogPageContent[2].fields} />
            <div className='blog-page-container'>Blog Page</div>
            <Footer footerCont={blogPageContent[1].fields} />
        </div>
    )
}
export default BlogPage