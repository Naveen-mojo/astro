import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { apiEndPoint } from "../../enviroment";
import Message from "./Message";
import { io } from "socket.io-client";
import { useLocation } from "react-router-dom";
import VideoCall from "./videocall/VideoCall";
import Swal from "sweetalert2";
import FeedBackForm from "./FeedBackForm";
import { WalletContext } from "../../context/WalletContext";
import Rating from "@mui/material/Rating";
import RechargeDialog from '../componet/Dialog'
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";

export default function AstroProfile() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [profiledata, setprofiledata] = useState("");
    const socket = useRef();
    const { user } = useContext(AuthContext);
    const { wallet } = useContext(WalletContext);
    const scrollRef = useRef();
    const [openDialog, setOpenDialog] = React.useState(false);
    const [comments, setComments] = React.useState([]);
    const [rating, setRating] = React.useState([]);
    const [lodingComments, setLodingComments] = React.useState(false);
    const [page, setpage] = useState(1);
    const [items, setItems] = useState([]);
    const [hasMore, sethasMore] = useState(true);

    // Feedback usestate
    const [open, setOpen] = React.useState(false);

    // chat usestate

    const [startChat, setStartChat] = useState("");
    const [endChat, setEndChat] = useState("");

    const getId = useLocation();
    const astroId = getId.pathname.split("/")[2];

    useEffect(() => {
        var config = {
            method: "get",
            url: `${apiEndPoint}astro/user/${astroId}`,
        };

        axios(config)
            .then(function (response) {
                setprofiledata(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [astroId]);

    useEffect(() => {
        socket.current = io("http://localhost:8900");
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
                const res = await axios.get(`${apiEndPoint}conversation/` + user?.id);
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
                const res = await axios.get(
                    `${apiEndPoint}message/` + currentChat?._id
                );
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
            const res = await axios.post(`${apiEndPoint}message/add/`, message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    };

    const addConversations = () => {
        var data = JSON.stringify({
            senderId: astroId,
            receiverId: user.id,
        });
        var config = {
            method: "post",
            url: `${apiEndPoint}conversation/add`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                // console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // useEffect(() => {
    //     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    // }, [messages]);


    function ChatTimeCalculate() {
        const available_chat_minutes = Math.floor(wallet.total / profiledata.chatRate);
        const minutes = available_chat_minutes * 57 * 1000
        const warning_minutes = available_chat_minutes * 27 * 1000

        setTimeout(() => {
            document.getElementById("chat-blink").style.display = "flex !important"
        }, warning_minutes)

        setTimeout(() => {
            document.getElementById("close-chat").click()
        }, minutes)
    }

    const openChat = () => {
        document.getElementById("open-chat").style.display = "flex";
        document.getElementById("close-chat").style.display = "flex";
        setStartChat(new Date());
        ChatTimeCalculate()
    };

    const closeChat = () => {
        document.getElementById("open-chat").style.display = "none";
        document.getElementById("close-chat").style.display = "none";
        chatDeduction();
        setOpen(true);
        setEndChat(new Date());
    };

    const chatTimeDifferceMs = (endChat - startChat) / 1000;
    const chatDiffrence = chatTimeDifferceMs / 60;

    const chatRs = Math.ceil(chatDiffrence) * profiledata.chatRate;

    const chatDeductMoney = () => {
        let data = JSON.stringify({
            userId: user.id,
            amount: chatRs,
            action: false,
            walletUpdated_at: new Date(),
            particular: "chat",
            total: chatRs,
        });

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${apiEndPoint}userwallet/${user.id}`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                // console.log("data saved Successfully", response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (chatRs > 0) {
        chatDeductMoney();
    }

    const getChat = () => {
        conversations.map((c, index) =>
            c.members.includes(astroId) ? setCurrentChat(conversations[index]) : ""
        );
    };

    const chatDeduction = () => {
        var data = JSON.stringify({
            userId: user.id,
            astrologerId: astroId,
            startTime: startChat,
            endTime: endChat,
        });

        var config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${apiEndPoint}chat/add`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                // console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const confirmButton = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn-success p-2 confirm-btn",
                cancelButton: "btn-danger p-2 confirm-btn",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Are you sure?",
                text: "you want to talk this astrologer",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Confirm",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
                allowOutsideClick: false,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        "success",
                        addConversations(),
                        setTimeout(() => {
                            openChat();
                        }, 3000)
                    );
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Your imaginary file is safe :)",
                        "error"
                    );
                }
            });
    };

    const getComments = () => {
        setLodingComments(true)
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${apiEndPoint}feedbackform/${astroId}`,
        };

        axios.request(config)
            .then((response) => {
                setComments(response.data.feedback);
                setRating(response.data.rating);
                setLodingComments(false)
            })
            .catch((error) => {
                console.log(error);
                setLodingComments(false)
            });
    }

    useEffect(() => {
        getComments()
        // eslint-disable-next-line
    }, [])


    if (openDialog) {
        setTimeout(() => {
            setOpenDialog(false)
        }, 5000);
    }


    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `${apiEndPoint}feedbackform?page=1&size=3`
            );
            const data = await res.json();
            setItems(data.data);
        };

        getComments();
    }, []);

    const fetchComments = async () => {
        const res = await fetch(
            `${apiEndPoint}feedbackform?page=${page}&size=3`
        );
        const data = await res.json();
        return data.data;
    };

    const fetchData = async () => {
        const commentsFormServer = await fetchComments();

        setItems([...items, ...commentsFormServer]);
        if (commentsFormServer.length === 0 || commentsFormServer.length < 3) {
            sethasMore(false);
        }
        setpage(page + 1);
    };

    const description_modal = 'Please Recharge your wallet! wallet amount is less than astrologer per minutes charge so topup your wallet then talk to astrologer.'
    const title_modal = 'Recharge Your Wallet'

    const description_modal_login = 'Please Login to open more option and you can also chat and videocall options are enabled after login.'
    const title_modal_login = 'Please Login'

    const description_modal_busy = 'Astrologer busy with someone else you can wait or chat with other astrologer.'
    const title_modal_busy = 'Astrologer Busy'

    return (
        <>
            {user && (profiledata.status === 0 && profiledata.status !== null) ?
                <RechargeDialog openDialog={openDialog} description_modal={description_modal} title_modal={title_modal} />
                :
                ''
            }
            {
                user ? '' : <RechargeDialog openDialog={openDialog} description_modal={description_modal_login} title_modal={title_modal_login} />
            }
            {
                user && (profiledata.status === 1 || profiledata.status === null) ? <RechargeDialog openDialog={openDialog} description_modal={description_modal_busy} title_modal={title_modal_busy} /> : ''
            }
            <section className="astrologer_profile_Section desktop_view_astrologer_profile">
                <div className="container">
                    <ul id="breadcrumbs-two">
                        <li>
                            <a href="/">
                                <i className="fa fa-home" />
                            </a>
                        </li>
                        <li>
                            <div className="current active text-capitalize">
                                {profiledata.astrologerName} Profile
                            </div>
                        </li>
                    </ul>
                    <div className="border_outline">
                        <div className="row align_item_center">
                            <div className="col-md-3">
                                <div className="astrloger_profile_picture">
                                    <div className="astrolger_profile_background">
                                        <img
                                            alt="Astrologer"
                                            className="profile_img"
                                            src={profiledata.profileImage}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <h1 className="name_of_astrologer">
                                    {profiledata.astrologerName}{" "}
                                    <span className="famous_icon">
                                        <img
                                            alt="verified"
                                            src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/Chat_with_astrologers.jpeg"
                                        />
                                    </span>
                                </h1>
                                <div className="details_of_conversation">
                                    <div className="chat_details">
                                        <span className="icon_details">
                                            <img
                                                src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/chatoffline.png"
                                                alt="chat_offline"
                                            />
                                        </span>
                                        <b>{profiledata.chatRate}</b> mins
                                    </div>
                                    <div className="call_details">
                                        <span className="icon_details">
                                            <img
                                                src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/calloffline.png"
                                                alt="call_offline"
                                            />
                                        </span>
                                        <b>{profiledata.callRate}</b> mins
                                    </div>
                                    <div className="report_details">
                                        <span className="icon_details">
                                            <img
                                                src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/reports.png"
                                                alt="reports"
                                            />
                                        </span>
                                        <b>0</b> reports
                                    </div>
                                </div>
                                <div className="language_astrolger">
                                    <span>{profiledata.language}</span>
                                </div>
                                <div className="experience_astrologer">
                                    <i className="fa fa-graduation-cap" />
                                    <b className="bold_text_digit">{profiledata.exp}</b> Years
                                </div>
                                <div className="profession_astrologer">
                                    <div className="skills_astrologers">{profiledata.skill}</div>
                                </div>

                                <div className="row btns_chat_call">
                                    <div className="col-md-5 mb-2">
                                        <button className="btns_astrolgers_contact online-status">
                                            <div className="width_icon">
                                                <img
                                                    src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/online-status-chat.png"
                                                    alt="calling"
                                                />
                                            </div>

                                            {user === null ? (
                                                <div
                                                    onClick={() => {
                                                        setOpenDialog(true);
                                                    }}
                                                    className="start_btn"
                                                >
                                                    <div className="strt">Start Chat</div>
                                                    <div className="avialable_comming text-danger">
                                                        {/* <div>Wait time ~ 56m</div> */}
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    {wallet.total >= profiledata.chatRate ? (
                                                        <>
                                                            {profiledata.status === 0 ? (
                                                                <div
                                                                    className="chatbox-open"
                                                                    onClick={confirmButton}
                                                                >
                                                                    {<span onClick={getChat}>Start Chat</span>}
                                                                </div>
                                                            ) : (
                                                                <div
                                                                    onClick={() => {
                                                                        setOpenDialog(true);
                                                                    }}
                                                                    className="start_btn"
                                                                >
                                                                    <div className="strt">Start Chat</div>
                                                                    <div className="avialable_comming text-danger">
                                                                        <div>Busy</div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <div
                                                            onClick={() => {
                                                                setOpenDialog(true)
                                                            }}
                                                            className="start_btn"
                                                        >
                                                            <div className="strt">Start Chat</div>
                                                            <div className="avialable_comming text-danger">
                                                                {/* <div>Wait time ~ 56m</div> */}
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            )}

                                            <div className="fees_astrologers">
                                                <div className="fess_amnt">
                                                    <span>₹ </span>

                                                    <span
                                                        id="ChatRate"
                                                        data-balance={profiledata.chatRate}
                                                    >
                                                        {profiledata.chatRate}
                                                        <span></span>
                                                    </span>
                                                </div>

                                                <div className="permin">per min</div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="col-md-5 mb-2">
                                        <button className="btns_astrolgers_contact online-status">
                                            <div
                                                className="width_icon vroomid"
                                                id="v-room-id"
                                                data-login="5e414052-553f-4eac-bfa4-37c9b9a183c8"
                                            >
                                                <img
                                                    src="https://www.mobilegamingarcade.com/astrotalk.com/assets/images/online-status-call.png"
                                                    alt="Busy"
                                                />
                                            </div>
                                            {user === null ? (
                                                <div
                                                    className="start_btn"
                                                    id="button-call"
                                                    onClick={() => setOpenDialog(true)}
                                                >
                                                    {/* <button="" className="strt" id="button-call">Start Call</button=> */}
                                                    <div className="strt">Start Call</div>
                                                    <div className="avialable_comming text-danger">
                                                        {/* <div>Busy</div> */}
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    {wallet.total >= profiledata.callRate ? (
                                                        <>
                                                            {profiledata.status === 0 ? (
                                                                <div className="start_btn">
                                                                    <div className="strt">
                                                                        <div
                                                                            style={{ color: "green" }}
                                                                            data-toggle="modal"
                                                                            data-target="#videoCall"
                                                                            data-backdrop="static"
                                                                            data-keyboard="false"
                                                                        >
                                                                            Start Call
                                                                        </div>
                                                                    </div>
                                                                    <div className="avialable_comming text-danger">
                                                                        {/* <div>Busy</div> */}
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div
                                                                    onClick={() => {
                                                                        setOpenDialog(true);
                                                                    }}
                                                                    className="start_btn"
                                                                >
                                                                    <div className="strt">Start Call</div>
                                                                    <div className="avialable_comming text-danger">
                                                                        <div>Busy</div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <div
                                                            onClick={() => {
                                                                setOpenDialog(true)
                                                            }}
                                                            className="start_btn"
                                                        >
                                                            <div className="strt">Start Call</div>
                                                            <div className="avialable_comming text-danger">
                                                                {/* <div>Wait time ~ 56m</div> */}
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                            <div className="fees_astrologers">
                                                <div className="fess_amnt">
                                                    <span>₹ </span>

                                                    <span id="CallRate" data-balance={0}>
                                                        {" "}
                                                        {profiledata.callRate}
                                                    </span>
                                                </div>
                                                <div className="permin">per min</div>
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
                                        <div
                                            className="slick-track"
                                            style={{
                                                opacity: 1,
                                                width: "1088px",
                                                transform: "translate3d(0px, 0px, 0px)",
                                            }}
                                        >
                                            <div
                                                className="box_reiki_headling slick-slide slick-active"
                                                style={{ width: "262px" }}
                                                data-slick-index={3}
                                                aria-hidden="false"
                                                tabIndex={0}
                                            >
                                                <div tabIndex={0}>
                                                    <div className="img_reiki_healing">
                                                        <img
                                                            alt="_img"
                                                            src="https://www.mobilegamingarcade.com/astrotalk.com/uploads/AstrologerImage/rajkumar-sharma/GalleryImage/61ada4d59c244.jpg"
                                                            className="ng-lazyloaded"
                                                        />
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
                                    <p className="about_me_parah">{profiledata.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                lodingComments ? "Loading" :
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
                                                <h2 className="ratting_number">{rating.star_rating}</h2>
                                                <div className="ratting_star">
                                                    <Rating
                                                        name="half-rating"
                                                        value={parseInt(rating.star_rating)}
                                                        precision={0.5}
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="total_view">
                                                    <i className="fa fa-user" />

                                                    <span className="value_toal_new">NEW!</span>
                                                </div>
                                            </div>
                                            <div className="col-7">
                                                <div className="status_bar_ratting">
                                                    <div className="number_progress_bar">5</div>
                                                    <div className="progress width_custom">
                                                        <div
                                                            role="progressbar"
                                                            aria-valuenow={75}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                            className="progress-bar bg_green"
                                                            style={{ width: `${rating?.indivisualRating?.star5}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div className="status_bar_ratting">
                                                    <div className="number_progress_bar">4</div>
                                                    <div className="progress width_custom">
                                                        <div
                                                            role="progressbar"
                                                            aria-valuenow={75}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                            className="progress-bar bg_blue"
                                                            style={{ width: `${rating?.indivisualRating?.star4}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div className="status_bar_ratting">
                                                    <div className="number_progress_bar">3</div>
                                                    <div className="progress width_custom">
                                                        <div
                                                            role="progressbar"
                                                            aria-valuenow={75}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                            className="progress-bar bg_light_green"
                                                            style={{ width: `${rating?.indivisualRating?.star3}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div className="status_bar_ratting">
                                                    <div className="number_progress_bar">2</div>
                                                    <div className="progress width_custom">
                                                        <div
                                                            role="progressbar"
                                                            aria-valuenow={75}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                            className="progress-bar bg_brown"
                                                            style={{ width: `${rating?.indivisualRating?.star2}%` }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="status_bar_ratting">
                                                    <div className="number_progress_bar">1</div>
                                                    <div className="progress width_custom">
                                                        <div
                                                            role="progressbar"
                                                            aria-valuenow={75}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                            className="progress-bar bg_voilet"
                                                            style={{ width: `${rating?.indivisualRating?.star1}%` }}
                                                        ></div>
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
                                                <input
                                                    type="radio"
                                                    name="sort"
                                                    id="label_helpful"
                                                    autoComplete="off"
                                                    className="form-check-input ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="label_helpful" className="labelSort">
                                                    Most helpful
                                                </label>
                                                <input
                                                    type="radio"
                                                    name="sort"
                                                    id="label_recent"
                                                    autoComplete="off"
                                                    className="form-check-input ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="label_recent" className="labelSort">
                                                    Most recent
                                                </label>
                                            </div>
                                        </div>
                                        <link
                                            rel="stylesheet"
                                            type="text/css"
                                            href="https://www.mobilegamingarcade.com/astrotalk.com/assets/css/star-rating-svg.css "
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 hide_mobile_view">
                                    <div className="reply_review_customer review_border_radius">
                                        <div className="d-flex">
                                            <aside>
                                                <h2 className="ratting_heading text-left ">User Reviews</h2>
                                            </aside>
                                            <aside style={{ flex: 2 }}>
                                                <div className="text-sm text-right">Total Reviews: <b> {comments.length} </b> </div>
                                            </aside>
                                        </div>
                                        {/* <InfiniteScroll
                                            dataLength={items.length} //This is important field to render the next data
                                            next={fetchData}
                                            hasMore={hasMore}
                                            loader={<h4>Loading...</h4>}
                                            endMessage={<p style={{ textAlign: 'center' }}>
                                                <b>Yay! You have seen it all</b>
                                            </p>}
                                        > */}
                                            {comments?.map((value, index) => {
                                                const { rating, description, createdAt } = value
                                                return (
                                                    <div key={index} className="box_reply_review">
                                                        <div className="picture_profile bg_dark_green_name"> N</div>
                                                        <div className="rate_reply">
                                                            <Rating
                                                                name="half-rating"
                                                                defaultValue={rating}
                                                                precision={0.5}
                                                                readOnly
                                                            />
                                                            <div className="date_rate_reply">{moment(createdAt).format('Do MMMM YYYY')}</div>
                                                            <div className="comment_rate_reply">
                                                                {description}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                        {/* </InfiniteScroll> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            }

            {/* Chat Box  */}

            {/* <button className="chatbox-open">
                <i className="fa fa-comment fa-2x" aria-hidden="true" />
            </button> */}
            <button className="chatbox-close" onClick={closeChat} id="close-chat">
                <i
                    className="fa fa-close fa-2x"
                    style={{ width: "100px", marginTop: "10px" }}
                    aria-hidden="true"
                />
            </button>
            <section className="chatbox-popup" id="open-chat">
                <header className="chatbox-popup__header">
                    <aside style={{ flex: 2 }}>
                        <i
                            className="fa fa-user-circle fa-4x chatbox-popup__avatar"
                            aria-hidden="true"
                        />
                    </aside>
                    <aside style={{ flex: 4 }}>
                        <h1>{profiledata.astrologerName}</h1> Agent (Online)
                    </aside>
                    <aside style={{ flex: 6 }}>
                        <blink id="chat-blink" className="text-warning text-sm d-none">Chat is Close within 30sec. you wallet is empty.</blink>
                    </aside>
                </header>
                <main className="chatbox-popup__main">
                    People to talk to each other.
                    <br /> Ask us anything.
                    {currentChat ? (
                        <div className="chatBoxTop">
                            {messages.map((m, index) => (
                                <div key={index} ref={scrollRef}>
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
                    <aside style={{ flex: 1, color: "#888", textAlign: "center" }}>
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
                    <aside style={{ flex: 1, color: "#888", textAlign: "center" }}>
                        <button className="chatSubmitButton" onClick={handleSubmit}>
                            Send
                        </button>
                    </aside>
                </footer>
            </section>

            <div
                className="modal fade vmWidth"
                id="videoCall"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="videoCallTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                Astrologer Name:
                                <span className="text-success">
                                    {" "}
                                    {profiledata.astrologerName}
                                </span>
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <VideoCall astroId={astroId} userId={user?.id} />
                        </div>
                    </div>
                </div>
            </div>

            <section style={{ display: "none" }}>
                <FeedBackForm feedbackFormOpen={open} />
            </section>
        </>
    );
}
