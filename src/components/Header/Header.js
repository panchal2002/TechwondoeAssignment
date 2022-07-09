import React, { useState } from 'react'
import Logo from '../Logo'
import Menu from '../Menu'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import './style.css'
function Header({ headerCont }) {
    const [toggle, setToggle] = new useState(true);
    return (
        <div className='headerContainer'>
            <div className='navigation' onClick={() => setToggle(!toggle)}>
                <Menu toggle={toggle} headerCont={headerCont} />
                <Logo logo={headerCont.logo.fields.file.url} />
            </div>
            <div className={toggle ? 'menu-wrapper' : 'menu-wrapper menu-wrapper-toggled'}>
                <div className='container'>
                    <div className='menu-grid'>
                        <div className={toggle ? 'menu-part' : 'menu-part menu-part-toggled'}>
                            <Link className="nav_link" to="/home">
                                {headerCont.home}
                            </Link>
                            <Link className="nav_link" to="/aboutus">
                                {headerCont.aboutUs}
                            </Link>

                            <Link className="nav_link" to="/casestudies">
                                {headerCont.caseStudies}
                            </Link>

                            <Link className="nav_link" to="/blogs">
                                {headerCont.blog}
                            </Link>
                            <Link className="nav_link" to="/contactus">
                                {headerCont.contactUs}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='contact-wrapper'>
                    <div className={toggle ? 'social-column' : 'social-column social-column-toggled'} >
                        <div className='contact-title'>{headerCont.followUs}</div>
                        <div className='social-wrapper social-footer'>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                className='social-icon'
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                className='social-icon'
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                className='social-icon'
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;