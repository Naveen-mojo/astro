import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Notification from '../component/Notification'
import logo from '../assest/images/logo.png'
import { AuthContext } from '../context/AuthContext';
import VideoCall from '../pages/videocall/VideoCall';
import { apiEndPoint } from '../../enviroment';
var axios = require('axios');


function Layout(props) {
    const { user, logoutUser } = useContext(AuthContext)

    const videoCall = (startTime, endTime, callFrom) => {
        var data = JSON.stringify({
            "roomId": "",
            "endTime": startTime,
            "startTime": endTime,
            "userID": callFrom,
            "astroId": user.id,
            "status": 1
        });

        var config = {
            method: 'post',
            url: `${apiEndPoint}videocall/add`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            {
                user?.isActive === 0 ?
                    <div className="announcement-bar view announcement-bar--open" data-controller="announcement-bar" data-announcement-id="header_promo_mar23" data-background-image="https://cms-assets.tutsplus.com/uploads/users/16/topics/12/announcement_background_image/blue.jpg" data-fallback-background-color="#273ab2" data-text-color="#FFFFFF" data-link-color style={{ backgroundImage: 'linear-gradient(to left, rgb(52, 76, 172), rgb(46, 87, 175), rgb(44, 96, 176), rgb(48, 105, 176), rgb(57, 114, 175), rgb(54, 113, 176), rgb(51, 112, 176), rgb(47, 111, 177), rgb(30, 100, 179), rgb(23, 87, 178), rgb(30, 74, 176), rgb(45, 58, 172))', backgroundSize: 'inherit', backgroundColor: 'rgb(39, 58, 178)', color: 'rgb(255, 255, 255)' }}>
                        <div className="announcement-bar__content">
                            <div className="announcement-bar__primary">
                                <div className="announcement-bar__title">
                                    <div className='py-3' align="center">
                                        <b>Your profile is under verification process please try after it's activated.</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ""
            }
            <header className='admin-header'>
                <section id="desktop_view_header" className="head_section head_section_normal">
                    <div className="nav_head">
                        <div className="container">
                            <div className="buttons">
                                <div className="ml-auto d-flex justify_content">
                                    {/* <div className="navLinks"><Link className="nav-link" to="free-kundli">Free
                                        Kundli</Link></div>
                                    <div className="navLinks"><Link className="nav-link" to="match-making">Match
                                        Making</Link></div> */}

                                    <Notification arrivalMessage={props.arrivalMessage} status={props.status} />

                                    {
                                        user ? <h4 className="contact_btn btnn btn">{user.username}</h4> : <div className="contact_btn btnn btn">
                                            <Link to='login' className="">
                                                <span><i className="fa fa-user" />login </span></Link>
                                        </div>
                                    }

                                    {
                                        user ? '' :

                                            <div className="contact_btn btnn btn">
                                                <Link to='signup' className="">
                                                    <span><i className="fa fa-user" />Register </span></Link>
                                            </div>
                                    }

                                    {
                                        user ? <h4 className="contact_btn btnn btn" onClick={logoutUser}>Logout</h4> : ''
                                    }

                                </div>
                            </div>
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand custom_brand" to="/">
                                    <div className="logo_img">
                                        <img height={50} width={50} src={logo} alt="logo" /></div>
                                    <div className="logo_text">
                                        <span className="bold_text">AstroTalk</span><span className="light_text"> online astrology</span>
                                    </div>
                                </Link>
                                <div id="navbarSupportedContent" className="collapse navbar-collapse">
                                    <div className="ml-auto d-flex justify_content">
                                        <div className="navLinks"><Link className="nav-link" to="chat">Chat
                                        </Link></div>
                                        <div className="navLinks"><Link className="nav-link" to="profile">Profile
                                        </Link></div>
                                        <div className="navLinks"><Link className="nav-link" to="dashboard">Dashboard
                                        </Link></div>
                                        {/* <div className="navLinks" data-toggle="modal" id='btn-vc' data-target="#videoCall" data-backdrop="static" data-keyboard="false">Video Call</div> */}
                                    </div>
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
                                        <img height={50} width={50} src={logo} alt="logo" /></div>
                                    <div className="logo_text">
                                        <span className="bold_text">AstroTalk</span><span className="light_text"> online astrology</span>
                                    </div>
                                </Link>
                                <div className="buttons login-btn-mobile">
                                    <div className="ml-auto d-flex justify_content">

                                        {/* <div className="section_language">
                                            <div className="dropdown">
                                                <button type="button" id="dropdownMenuButton2" aria-expanded="false" className="btn">Eng</button>
                                            </div>
                                        </div> */}

                                    </div>
                                </div>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav me-auto mt-1 mb-lg-0 mobile-scroll">
                                    <div className="navLinks"><li ><Link className="nav-link" to="chat">Chat
                                    </Link></li></div>
                                    <div className="navLinks"><li ><Link className="nav-link" to="profile">Profile
                                    </Link></li></div>
                                    <div className="navLinks"><Link className="nav-link" to="dashboard">Dashboard
                                    </Link></div>
                                    {/* <div className="navLinks" data-toggle="modal" data-target="#videoCall" data-backdrop="static" data-keyboard="false">Video Call</div> */}

                                    <h4 className='fw-bold h6 ms-3 mt-3 border-bottom'>Profile Details</h4>

                                    {
                                        user ? <li className='ms-3 my-3'> <h4 className="h5 text-success">{user.username}</h4> </li> : <li> <div className="contact_btn btnn btn">
                                            <Link to='login' className="">
                                                <span><i className="fa fa-user" />login </span></Link>
                                        </div> </li>
                                    }

                                    {
                                        user ? <li> <h4 className="btn btn-danger ms-3" onClick={logoutUser}>Logout</h4> </li> : ''
                                    }
                                </ul>
                            </div>
                        </nav>
                    </div>
                </section>
            </header>

            <VideoCall id={user?.id} videoCallFunc={videoCall} />

            <Outlet />
        </>
    )
}

export default Layout;