import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import logo from "../assest/images/logo.png";

function Header() {
    const { user, logoutUser } = useContext(AuthContext);

    return (
        <>
            <header>
                <section
                    id="desktop_view_header"
                    className="head_section head_section_normal"
                >
                    <div className="nav_head">
                        <div className="container">
                            <div className="buttons">
                                <div className="ml-auto d-flex justify_content">
                                    <div className="navLinks">
                                        <Link className="nav-link" to="free-kundli">
                                            Free Kundli
                                        </Link>
                                    </div>
                                    <div className="navLinks">
                                        <Link className="nav-link" to="match-making">
                                            Match Making
                                        </Link>
                                    </div>
                                    <div className="navLinks">
                                        <Link className="nav-link" to="shubh-muhurat">
                                            Shubh Muhurat
                                        </Link>
                                    </div>
                                    {user ? (
                                        <nav className="navbar navbar-light navbar-glass fs--1 font-weight-semi-bold row navbar-top sticky-kit navbar-expand">
                                            <div className="collapse navbar-collapse" id="navbarNavDropdown1">
                                                <ul className="navbar-nav align-items-center ml-auto">
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link pr-0" id="navbarDropdownUser" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <div className="avatar avatar-xl" style={{ fontSize: '34px', marginTop: '-20px' }}>
                                                                <i className="fa fa-user-circle" />
                                                            </div>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right py-0 nav-user-dropdown" aria-labelledby="navbarDropdownUser">
                                                            <div className="bg-white rounded-soft py-2">
                                                                <div className="dropdown-item">{user.number}</div>
                                                                <button className="dropdown-item" type="button" data-toggle="modal" data-target="#profileModal">Profile &amp; account</button>
                                                                <div className="dropdown-divider" />
                                                                <div onClick={logoutUser} className="dropdown-item cursor-pointer">Logout</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    ) : (
                                        <div className="contact_btn btnn btn">
                                            <button
                                                type="button"
                                                className="pop-login"
                                                data-toggle="modal"
                                                data-target="#exampleModalCenter"
                                            >
                                                <a id="loginButton">
                                                    <i className="fa fa-user" />
                                                    login{" "}
                                                </a>
                                            </button>
                                        </div>
                                    )}

                                    {/* <div className="section_language">
                                        <div className="dropdown">
                                            <button type="button" id="dropdownMenuButton2" aria-expanded="false" className="btn">Eng</button>
                                        </div>
                                        <div className="blank_bg">
                                            <ul className="dropdown-menu dropdown-menu-dark language_drpdown">
                                                <li ><a className="dropdown-item active" href="/">Eng</a></li>
                                                <li ><a className="dropdown-item" href="/hi">हिंदी</a></li>
                                            </ul>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand custom_brand" to="/">
                                    <div className="logo_img">
                                        <img height={50} width={50} src={logo} alt="logo" />
                                    </div>
                                    <div className="logo_text">
                                        <span className="bold_text">AstroTalk</span>
                                        <span className="light_text"> online astrology</span>
                                    </div>
                                </Link>
                                <div
                                    id="navbarSupportedContent"
                                    className="collapse navbar-collapse"
                                >
                                    <ul className="navbar-nav custom_nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="chat-with-astrologer">
                                                Chat with Astrologer
                                            </Link>
                                        </li>
                                        {/* <li className="nav-item"><Link className="nav-link" to="test">Test
                                            </Link></li> */}
                                        <li className="nav-item">
                                            <Link className="nav-link" to="talk-with-astrologer">
                                                Talk to Astrologer
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="blog" target="_blank" rel="noreferrer" className="nav-link">
                                                Blog
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </section>
                <section id="mobile_view_header" className="header_section_mobile_view">
                    <div className="container-work">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="header_top_baar">
                                <Link className="navbar-brand custom_brand" to="/">
                                    <div className="logo_img">
                                        <img height={50} width={50} src={logo} alt="logo" />
                                    </div>
                                    <div className="logo_text">
                                        <span className="bold_text">AstroTalk</span>
                                        <span className="light_text"> online astrology</span>
                                    </div>
                                </Link>
                                <div className="buttons login-btn-mobile"></div>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarTogglerDemo02"
                                    aria-controls="navbarTogglerDemo02"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarTogglerDemo02"
                            >
                                <ul className="navbar-nav me-auto mt-1 mb-lg-0 mobile-scroll">
                                    <li>
                                        <a className="nav-link" href="chat-with-astrologer">
                                            Chat with Astrologer
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="talk-with-astrologer">
                                            {" "}
                                            Talk to Astrologer
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="/">
                                            Daily Horoscope
                                        </a>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="free-kundli">
                                            Free Kundli
                                        </Link>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="match-making">
                                            Match Making
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog" target="_blank" rel="noreferrer" className="nav-link">
                                            Blog
                                        </a>
                                    </li>

                                    {user ? (
                                        <nav className="navbar navbar-light navbar-glass fs--1 font-weight-semi-bold row navbar-top sticky-kit navbar-expand">
                                            <div className="collapse navbar-collapse" id="navbarNavDropdown1">
                                                <ul className="navbar-nav align-items-center ml-auto">
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link pr-0" id="navbarDropdownUser" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <div className="avatar avatar-xl" style={{ fontSize: '34px', marginTop: '-20px' }}>
                                                                <i className="fa fa-user-circle" />
                                                            </div>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right py-0 nav-user-dropdown" aria-labelledby="navbarDropdownUser">
                                                            <div className="bg-white rounded-soft py-2">
                                                                <div className="dropdown-item">{user.number}</div>
                                                                <div className="dropdown-item" data-toggle="modal" data-target="#profileModal">Profile &amp; account</div>
                                                                <div className="dropdown-divider" />
                                                                <div onClick={logoutUser} className="dropdown-item cursor-pointer">Logout</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    ) : (
                                        <div className="contact_btn btnn btn">
                                            <button
                                                type="button"
                                                className="pop-login"
                                                data-toggle="modal"
                                                data-target="#exampleModalCenter"
                                            >
                                                <a id="loginButton">
                                                    <i className="fa fa-user" />
                                                    login{" "}
                                                </a>
                                            </button>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </section>
            </header>
        </>
    );
}

export default Header;
