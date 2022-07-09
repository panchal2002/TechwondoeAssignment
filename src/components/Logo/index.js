import React from 'react'
import './style.css'
function Logo({ logo }) {
    return (
        <div className='logo'>
            <img src={logo} alt='Logo'></img>
        </div>
    )
}
export default Logo;