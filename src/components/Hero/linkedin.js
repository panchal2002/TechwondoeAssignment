import React from 'react'
import './style.css'
function Linkedin({ linkedinSide }) {
    return (
        <div className='linkedin'>
            <a href={linkedinSide.url} className='text-link'>{linkedinSide.linkedIn}</a>
        </div>
    )
}

export default Linkedin