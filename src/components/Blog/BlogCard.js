import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function BlogCard({ cardDetail }) {
    return (
        <div className='blog-card'>
            <Link className="blog-image" to="/contact">
                <img src={cardDetail.image} art='Blog-image' alt='' />
            </Link>
            <div className='card-date-details'>
                <Link className="blog-category" to="/blog-category/Culture">
                    {cardDetail.blogCategory}
                </Link>
                <div className='blog-date'>{cardDetail.date}</div>
            </div>
            <Link className="blog-heading" to="/blog/kindness-driven-development">
                <h3>{cardDetail.cardHeading}</h3>
            </Link>
            <p>{cardDetail.desc}</p>
            <Link className="blog-readmore" to="/blog/kindness-driven-development">
                <h3>{cardDetail.readMore}</h3>
            </Link>
        </div>
    )
}

export default BlogCard