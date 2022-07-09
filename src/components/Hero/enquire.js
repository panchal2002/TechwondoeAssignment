import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function Enquire({ enquireSide }) {
    return (
        <div className='enquire'>
            <Link className="text-link" to="/contactus">
                {enquireSide.enquire}
            </Link>
        </div>
    )
}

export default Enquire