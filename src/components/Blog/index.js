import React from 'react'
import BlogCard from './BlogCard'
import './style.css'
function Blog({ blogCont }) {
    // console.log(blogCont.image1.fields.file.url)
    const card1detail = {
        blogCategory: blogCont.blogCategory1,
        cardHeading: blogCont.cardHeading1,
        date: blogCont.date1,
        image: blogCont.image1.fields.file.url,
        desc: blogCont.cardDesc1,
        readMore: blogCont.readMore
    }
    const card2detail = {
        blogCategory: blogCont.blogCategory2,
        cardHeading: blogCont.cardHeading2,
        date: blogCont.date2,
        image: blogCont.image2.fields.file.url,
        desc: blogCont.cardDesc2,
        readMore: blogCont.readMore
    }
    return (
        <div className='blog'>
            <div className='blog-head'>
                <h4>{blogCont.title}</h4>
                <h3 className='display-2 blog-title'>
                    {blogCont.heading1}
                    <span className='text-gradient'>{blogCont.heading2}</span>
                </h3>
            </div>
            <div className='blog-container'>
                <BlogCard cardDetail={card1detail} />
                <BlogCard cardDetail={card2detail} />
            </div>
        </div>
    )
}

export default Blog