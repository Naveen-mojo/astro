import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { apiEndPoint } from '../enviroment';
import Message from './Message';
import { io } from "socket.io-client";
import { useLocation } from "react-router-dom";
// import Conversation from "../../component/conversation/Conversation";
import VideoCall from './videocall/VideoCall'


export default function AstroProfile() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [profiledata, setprofiledata] = useState('')
    const socket = useRef();
    const { user } = useContext(AuthContext);
    const scrollRef = useRef();

    const getId = useLocation()
    const astroId = getId.pathname.split('/')[2]

    useEffect(() => {
        var config = {
            method: 'get',
            url: `${apiEndPoint}astro/user/${astroId}`,
        };

        axios(config)
            .then(function (response) {
                console.log(response.data)
                setprofiledata(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [astroId])


    useEffect(() => {
        socket.current = io("wss://astro-socket.onrender.com/");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage &&
            currentChat.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user?.id);
        socket.current.on("getUsers", (users) => {
            // setOnlineUsers(
            //     user.followings.filter((f) => users.some((u) => u.userId === f))
            // );
        });
    }, [user]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get(`${apiEndPoint}conversation` + user?.id);
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [user?.id]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get(`${apiEndPoint}message` + currentChat?._id);
                setMessages(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user.id,
            text: newMessage,
            conversationId: currentChat._id,
        };

        const receiverId = currentChat.members.find(
            (member) => member !== user?.id
        );

        socket.current.emit("sendMessage", {
            senderId: user.id,
            receiverId,
            text: newMessage,
        });

        try {
            const res = await axios.post(`${apiEndPoint}message/add`, message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    };


    // const addConversations = () => {
    //     var data = JSON.stringify({
    //         "senderId": astroId,
    //         "receiverId": user.id
    //     });
    //     var config = {
    //         method: 'post',
    //         url: `${apiEnviroment.conversationEnviroment}add`,
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         data: data
    //     };

    //     axios(config)
    //         .then(function (response) {
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };

    // useEffect(() => {
    //     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    // }, [messages]);

    const openChat = () => {
        document.getElementById('open-chat').style.display = 'flex';
        document.getElementById('close-chat').style.display = 'flex';
    }

    const closeChat = () => {
        document.getElementById('open-chat').style.display = 'none';
        document.getElementById('close-chat').style.display = 'none';
    }

    const getChat = () => {

        conversations.map((c, index) => (
            c.members.includes(astroId) ?
                setCurrentChat(conversations[index]) : ''
        ))
    }


    return (
        <>
            <section className="astrologer_profile_Section desktop_view_astrologer_profile">
                <div className="container">
                    <ul id="breadcrumbs-two">
                        <li>
                            <a href="/"><i className="fa fa-home" /></a>
                        </li>
                        <li><div className="current active text-capitalize">
                            {profiledata.astrologerName} Profile</div></li>
                    </ul>
                    <div className="border_outline">
                        <div className="row align_item_center">
                            <div className="col-md-3">
                                <div className="astrloger_profile_picture">
                                    <div className="astrolger_profile_background">
                                        <img alt="Astrologer" className="profile_img" src={profiledata.profileImage} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <h1 className="name_of_astrologer">
                                    {profiledata.astrologerName} <span className="famous_icon">
                                        <img alt="verified" src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/Chat_with_astrologers.jpeg" />

                                    </span>
                                </h1>
                                <div className="details_of_conversation">
                                    <div className="chat_details">
                                        <span className="icon_details"><img src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/chatoffline.png" alt="chat_offline" /></span>
                                        <b>{profiledata.chatRate}</b> mins
                                    </div>
                                    <div className="call_details">
                                        <span className="icon_details"><img src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/calloffline.png" alt="call_offline" /></span>
                                        <b>{profiledata.callRate}</b> mins
                                    </div>
                                    <div className="report_details">
                                        <span className="icon_details"><img src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/reports.png" alt="reports" /></span>
                                        <b>0</b> reports
                                    </div>
                                </div>
                                <div className="language_astrolger">
                                    <span>{profiledata.language}</span>
                                </div>
                                <div className="experience_astrologer">
                                    <i className="fa fa-graduation-cap" /><b className="bold_text_digit">{profiledata.exp}</b> Years
                                </div>
                                <div className="profession_astrologer">
                                    <div className="skills_astrologers">
                                        {profiledata.skill}</div>
                                </div>

                                <div className="row btns_chat_call">
                                    <div className="col-md-5 mb-2">
                                        <button className="btns_astrolgers_contact online-status">
                                            <div className="width_icon">

                                                <img src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/online-status-chat.png" alt="calling" />


                                            </div>

                                            {
                                                user === null ? <div onClick={() => { alert('Please Login!') }} className="start_btn">
                                                    <div className="strt">Start Chat
                                                    </div>
                                                    <div className="avialable_comming text-danger">
                                                        {/* <div>Wait time ~ 56m</div> */}
                                                    </div>

                                                </div> :
                                                    <>
                                                        {
                                                            user.wallet >= profiledata.chatRate ?

                                                                <>
                                                                    {
                                                                        profiledata.status === 1 ?

                                                                            <div className="chatbox-open" onClick={openChat}>
                                                                                {
                                                                                    <span onClick={getChat}>Start Chat</span>
                                                                                }
                                                                            </div>

                                                                            :
                                                                            <div onClick={() => { alert('Astrologer is Busy With Someone') }} className="start_btn">
                                                                                <div className="strt">Start Chat
                                                                                </div>
                                                                                <div className="avialable_comming text-danger">
                                                                                    <div>Busy</div>
                                                                                </div>
                                                                            </div>
                                                                    }
                                                                </>

                                                                :

                                                                <div onClick={() => { alert('Please Recharge your wallet!') }} className="start_btn">
                                                                    <div className="strt">Start Chat
                                                                    </div>
                                                                    <div className="avialable_comming text-danger">
                                                                        {/* <div>Wait time ~ 56m</div> */}
                                                                    </div>
                                                                </div>
                                                        }
                                                    </>
                                            }

                                            <div className="fees_astrologers">
                                                <div className="fess_amnt">
                                                    <span>₹ </span>

                                                    <span id="ChatRate" data-balance={profiledata.chatRate}>{profiledata.chatRate}<span>
                                                    </span></span></div>

                                                <div className="permin">per min
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="col-md-5 mb-2">
                                        <button className="btns_astrolgers_contact online-status">
                                            <div className="width_icon vroomid" id="v-room-id" data-login="5e414052-553f-4eac-bfa4-37c9b9a183c8">

                                                <img src="https://www.mobilegamingarcade.com/astrotalk.com/assets/images/online-status-call.png" alt="Busy" />

                                            </div>
                                            {
                                                user === null ? <div className="start_btn" id="button-call" onClick={() => alert('Please login!')}>
                                                    {/* <button="" className="strt" id="button-call">Start Call</button=> */}
                                                    <div className="strt">Start Call
                                                    </div>
                                                    <div className="avialable_comming text-danger">
                                                        {/* <div>Busy</div> */}


                                                    </div>

                                                </div> :
                                                    <>

                                                        {
                                                            user.wallet >= profiledata.callRate ?
                                                                <>
                                                                    {
                                                                        profiledata.status === 1 ?

                                                                            <div className="start_btn" >

                                                                                <div className="strt">
                                                                                    <div style={{ color: "green" }} data-toggle="modal" data-target="#videoCall" data-backdrop="static" data-keyboard="false">Start Call</div>
                                                                                </div>
                                                                                <div className="avialable_comming text-danger">
                                                                                    {/* <div>Busy</div> */}

                                                                                </div>
                                                                            </div>

                                                                            :

                                                                            <div onClick={() => { alert('Astrologer is Busy With Someone') }} className="start_btn">
                                                                                <div className="strt">Start Call
                                                                                </div>
                                                                                <div className="avialable_comming text-danger">
                                                                                    <div>Busy</div>
                                                                                </div>
                                                                            </div>

                                                                    }
                                                                </>
                                                                :
                                                                <div onClick={() => { alert('Please Recharge your wallet!') }} className="start_btn">
                                                                    <div className="strt">Start Call
                                                                    </div>
                                                                    <div className="avialable_comming text-danger">
                                                                        {/* <div>Wait time ~ 56m</div> */}
                                                                    </div>
                                                                </div>
                                                        }
                                                    </>


                                            }
                                            <div className="fees_astrologers">
                                                <div className="fess_amnt">
                                                    <span>₹ </span>


                                                    <span id="CallRate" data-balance={0}> {profiledata.callRate}</span>
                                                </div>
                                                <div className="permin">per min
                                                </div>

                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="img_slider">
                            <div className="slider">
                                <ngx-slick-carousel className="carousel slick-initialized slick-slider">

                                    <div className="slick-list draggable">
                                        <div className="slick-track" style={{ opacity: 1, width: '1088px', transform: 'translate3d(0px, 0px, 0px)' }}>
                                            <div className="box_reiki_headling slick-slide slick-active" style={{ width: '262px' }} data-slick-index={3} aria-hidden="false" tabIndex={0}>
                                                <div tabIndex={0}>
                                                    <div className="img_reiki_healing">
                                                        <img alt="_img" src="https://www.mobilegamingarcade.com/astrotalk.com/uploads/AstrologerImage/rajkumar-sharma/GalleryImage/61ada4d59c244.jpg" className="ng-lazyloaded" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ngx-slick-carousel>
                            </div>
                        </div>
                        {/* img_slider End */}
                        <div className="row">
                            <div className="col-12">
                                <div className="aboutme_left">
                                    <h2 className="about_me_heading">About me</h2>
                                    <p className="about_me_parah">
                                        {profiledata.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="rating_review">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="border_outline">
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="ratting_heading">Rating</h2>
                                    </div>
                                </div>
                                <div className="row row_review">
                                    <div className="col-5">
                                        <h2 className="ratting_number">4.97</h2>
                                        <div className="ratting_star">

                                            <ngb-rating role="slider" aria-valuemin={0} className="d-inline-flex ratting" tabIndex={0} aria-valuemax={5} aria-valuenow="4.97" aria-valuetext="4.97 out of 5" aria-disabled="true">

                                                <span className="sr-only">(*)</span>
                                                <span style={{ cursor: 'default' }}>
                                                    <span className="star full"><span className="half" style={{ width: '100%' }}>★</span>★
                                                    </span>

                                                </span>
                                                <span className="sr-only">(*)</span>
                                                <span style={{ cursor: 'default' }}>
                                                    <span className="star full"><span className="half" style={{ width: '100%' }}>★</span>★
                                                    </span>

                                                </span>
                                                <span className="sr-only">(*)</span>
                                                <span style={{ cursor: 'default' }}>
                                                    <span className="star full"><span className="half" style={{ width: '100%' }}>★</span>★
                                                    </span>

                                                </span>
                                                <span className="sr-only">(*)</span>
                                                <span style={{ cursor: 'default' }}>
                                                    <span className="star full"><span className="half" style={{ width: '100%' }}>★</span>★
                                                    </span>

                                                </span>
                                                <span className="sr-only">(*)</span>
                                                <span style={{ cursor: 'default' }}>
                                                    <span className="star"><span className="half" style={{ width: '97%' }}>★</span>★ </span>

                                                </span>

                                            </ngb-rating>

                                        </div>
                                        <div className="total_view">
                                            <i className="fa fa-user" />

                                            <span className="value_toal_new">
                                                NEW!</span>

                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className="status_bar_ratting">
                                            <div className="number_progress_bar">5
                                            </div>
                                            <div className="progress width_custom">
                                                <div role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg_green" style={{ width: '97.09%' }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="status_bar_ratting">
                                            <div className="number_progress_bar">4
                                            </div>
                                            <div className="progress width_custom">
                                                <div role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg_blue" style={{ width: '2.53%' }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="status_bar_ratting">
                                            <div className="number_progress_bar">3
                                            </div>
                                            <div className="progress width_custom">
                                                <div role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg_light_green" style={{ width: '0.28%' }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="status_bar_ratting">
                                            <div className="number_progress_bar">2
                                            </div>
                                            <div className="progress width_custom">
                                                <div role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg_brown" style={{ width: '0%' }} />
                                            </div>
                                        </div>
                                        <div className="status_bar_ratting">
                                            <div className="number_progress_bar">1
                                            </div>
                                            <div className="progress width_custom">
                                                <div role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg_voilet" style={{ width: '0.09%' }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="reply_review_customer">
                                <div className="sortFilterRating">
                                    <div className="sortLeft">
                                        <h6>Sort By</h6>
                                    </div>
                                    <div className="sortRight">
                                        <input type="radio" name="sort" id="label_helpful" autoComplete="off" className="form-check-input ng-untouched ng-pristine ng-valid" />
                                        <label htmlFor="label_helpful" className="labelSort">Most helpful</label>
                                        <input type="radio" name="sort" id="label_recent" autoComplete="off" className="form-check-input ng-untouched ng-pristine ng-valid" />
                                        <label htmlFor="label_recent" className="labelSort">Most recent</label>
                                    </div>
                                </div>
                                <link rel="stylesheet" type="text/css" href="https://www.mobilegamingarcade.com/astrotalk.com/assets/css/star-rating-svg.css " />
                            </div>
                        </div>
                        <div className="col-md-6 hide_mobile_view">
                        </div>
                    </div>
                </div>
            </section>


            {/* Chat Box  */}

            {/* <button className="chatbox-open">
                <i className="fa fa-comment fa-2x" aria-hidden="true" />
            </button> */}
            <button className="chatbox-close" onClick={closeChat} id="close-chat">
                <i className="fa fa-close fa-2x" style={{ width: "100px", marginTop: "10px" }} aria-hidden="true" />
            </button>
            <section className="chatbox-popup" id="open-chat">
                <header className="chatbox-popup__header">
                    <aside style={{ flex: 3 }}>
                        <i className="fa fa-user-circle fa-4x chatbox-popup__avatar" aria-hidden="true" />
                    </aside>
                    <aside style={{ flex: 8 }}>
                        <h1>{profiledata.astrologerName}</h1> Agent (Online)
                    </aside>
                </header>
                <main className="chatbox-popup__main">
                    People to talk to each other.<br /> Ask us anything.
                    {currentChat ? (

                        <div className="chatBoxTop">
                            {messages.map((m, index) => (
                                <div key={index} ref={scrollRef} >
                                    <Message message={m} own={m.sender === user.id} />
                                </div>
                            ))}
                        </div>

                    ) : (
                        <span className="text-center h5">
                            Open a conversation to start a chat.
                        </span>
                    )}
                </main>
                <footer className="chatbox-popup__footer">
                    <aside style={{ flex: 1, color: '#888', textAlign: 'center' }}>
                        <i className="fa fa-camera" aria-hidden="true" />
                    </aside>
                    <aside style={{ flex: 10 }}>
                        <textarea
                            className="chatMessageInput"
                            placeholder="write something..."
                            onChange={(e) => setNewMessage(e.target.value)}
                            value={newMessage}
                        ></textarea>
                    </aside>
                    <aside style={{ flex: 1, color: '#888', textAlign: 'center' }}>
                        <button className="chatSubmitButton" onClick={handleSubmit}>
                            Send
                        </button>
                    </aside>
                </footer>
            </section>

            <div className="modal fade vmWidth" id="videoCall" tabIndex={-1} role="dialog" aria-labelledby="videoCallTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Astrologer Name:
                                <span className="text-success"> {profiledata.astrologerName}</span>
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <VideoCall astroId={astroId} userId={user?.id} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
