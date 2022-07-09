import React from 'react'
import './style.css'
function Menu({ toggle, headerCont }) {
    return (
        <div className='menu'>
            <div className='hamburger'>
                <div className={toggle ? 'line1' : 'line1 line1-toggled'}></div>
                <div className={toggle ? 'line2' : 'line2 line2-toggled'}></div>
            </div>
            <div className='menu-text-wrapper'>
                <div className={toggle ? 'menu-text' : 'menu-text menu-text-toggled'}>{headerCont.menu}</div>
                <div className={toggle ? 'close-text' : 'close-text close-text-toggled'}>{headerCont.close}</div>
            </div>
        </div>
    )
} export default Menu