import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Slider from "react-slick";
import verifiedImg from "../assest/images/Chat_with_astrologers.jpeg";
import { Link } from "react-router-dom";
import { AstroContext } from "../../context/AstroContext";
import { WalletContext } from "../../context/WalletContext";
import Button from '@mui/material/Button';
import axios from "axios";
import { apiEndPoint } from "../../enviroment";
import RechargeDialog from '../componet/Dialog'

function ChatWithAstrologer() {
    const { user } = useContext(AuthContext);
    const { wallet } = useContext(WalletContext);
    const { astro } = useContext(AstroContext);
    const [search, setSearch] = useState("")
    const [astrologer, setAstrologer] = useState([])
    const [error, setError] = useState("")
    const [openDialog, setOpenDialog] = React.useState(false);

    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    function getSearch() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${apiEndPoint}astro/search/${search}`,
        };

        axios.request(config)
            .then((response) => {
                setAstrologer(response.data);
            })
            .catch((error) => {
                setError(error);
            });
    }

    useEffect(() => {
        getSearch()
    }, [search])

    useEffect(() => {
        setAstrologer(astro)
    }, [astro])

    if (openDialog) {
        setTimeout(() => {
            setOpenDialog(false)
        }, 5000);
    }

    const description_modal = 'Please Login to open more option and you can also chat and videocall options are enabled after login.'
    const title_modal = 'Please Login'

    return (
        <>
            <RechargeDialog openDialog={openDialog} description_modal={description_modal} title_modal={title_modal} />

            <section className="chat_with_astrologers">
                <div className="container">
                    <form className="mbl_view_padding ng-untouched ng-pristine ng-valid">
                        <div className="row astrolger_baar desktop_view_astrologer_top">
                            <div className="col-md-3 text-left">
                                <ul id="breadcrumbs-two">
                                    <li>
                                        <a href="https://www.mobilegamingarcade.com/astrotalk.com/">
                                            <i className="fa fa-home" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="current active text-capitalize">
                                            Chat With Astrologer
                                        </a>
                                    </li>
                                </ul>

                                <h1 className="cht_astrologer_head hide">
                                    Chat With Astrologer
                                </h1>
                            </div>
                            <div className="col-md-3">
                                <div className="recharge_btn">
                                    <span className="available_balance">
                                        Available balance:

                                        {
                                            wallet ? <main className="balance_avail"> ₹ {wallet?.total} </main> : <main className="balance_avail"> ₹ 0 </main>
                                        }

                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6 pd0">
                                <div className="recharge_btn">
                                    {
                                        user ? <Link to='/add-money-wallet'>Recharge</Link> : <Button variant="outlined" color="success" onClick={() => { setOpenDialog(true) }} >Recharge</Button>
                                    }
                                    <button className="filter_short_by_desktop_view">
                                        <i className="fa fa-filter" /> Filter
                                    </button>
                                    <button
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        className="filter_short_by_desktop_view"
                                    >
                                        <i className="fa fa-sort-amount-desc" /> Sort by
                                    </button>
                                    <div className="form-search classsearhMbile">
                                        <input
                                            name="searchText"
                                            type="search"
                                            autoComplete="off"
                                            onChange={(event) => setSearch(event.target.value)}
                                            id="searchAstroQuery"
                                            className="form-control postion_Rel ng-untouched ng-pristine ng-valid"
                                            placeholder="Search name..."
                                        />
                                        <i className="fa fa-search" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <h1 className="heading_chat_with_astrologer_mobile_view">
                        Chat with Astrologer
                    </h1>
                    <form className="ng-untouched ng-pristine ng-valid">
                        <div className="mobile_view_astrologer_tab">
                            <div className="form-search classsearhMbile"></div>
                        </div>
                    </form>

                    <div className="row astrolgers_list">
                        {astrologer?.map((curValue) => {
                            const { astrologerName, _id, skill, language, exp, profileImage } = curValue;
                            return (
                                <div
                                    className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3"
                                    id="best-astrologer"
                                    key={_id}
                                >
                                    <div className="astrologers_box d-flex" id="astro_profile">
                                        <div className="astrologer_details d-flex">
                                            <div className="img_astrolgers_rating">
                                                <div className="normal_border">
                                                    <div className="img_astrologer">
                                                        <img
                                                            alt="Astrologer"
                                                            src={profileImage}
                                                            className="ng-lazyloaded"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="star_rate">
                                                    <ngb-rating
                                                        role="slider"
                                                        aria-valuemin={0}
                                                        className="d-inline-flex ratting"
                                                        tabIndex={0}
                                                        aria-valuemax={5}
                                                        aria-valuenow="4.98"
                                                        aria-valuetext="4.98 out of 5"
                                                        aria-disabled="true"
                                                    >
                                                        <span className="sr-only">(*)</span>
                                                        <span style={{ cursor: "default" }}>
                                                            <span className="star full">
                                                                <span
                                                                    className="half"
                                                                    style={{ width: "100%" }}
                                                                >
                                                                    ★
                                                                </span>
                                                                ★
                                                            </span>
                                                        </span>
                                                        <span className="sr-only">(*)</span>
                                                        <span style={{ cursor: "default" }}>
                                                            <span className="star full">
                                                                <span
                                                                    className="half"
                                                                    style={{ width: "100%" }}
                                                                >
                                                                    ★
                                                                </span>
                                                                ★
                                                            </span>
                                                        </span>
                                                        <span className="sr-only">(*)</span>
                                                        <span style={{ cursor: "default" }}>
                                                            <span className="star full">
                                                                <span
                                                                    className="half"
                                                                    style={{ width: "100%" }}
                                                                >
                                                                    ★
                                                                </span>
                                                                ★
                                                            </span>
                                                        </span>
                                                        <span className="sr-only">(*)</span>
                                                        <span style={{ cursor: "default" }}>
                                                            <span className="star full">
                                                                <span
                                                                    className="half"
                                                                    style={{ width: "100%" }}
                                                                >
                                                                    ★
                                                                </span>
                                                                ★
                                                            </span>
                                                        </span>
                                                        <span className="sr-only">(*)</span>
                                                        <span style={{ cursor: "default" }}>
                                                            <span className="star">
                                                                <span
                                                                    className="half"
                                                                    style={{ width: "98%" }}
                                                                >
                                                                    ★
                                                                </span>
                                                                ★
                                                            </span>
                                                        </span>
                                                    </ngb-rating>
                                                    <span className="total_view_people">
                                                        <i className="fa fa-user" /> 3438 total
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="astrologer_bio">
                                                <Link to={`/astro-profile/${_id}`} className="astrologers_name">
                                                    {astrologerName}
                                                </Link>
                                                <div className="astrologers_designation light_clr">
                                                    <span> {skill[0]}</span>
                                                </div>
                                                <div className="astrologers_language light_clr">
                                                    <span> {language[0]} </span>
                                                </div>

                                                <div className="astrologers_experence light_clr">
                                                    {exp} Years
                                                </div>
                                                <div className="astrologers_prices_chat">
                                                    <span className="bold_class">
                                                        <span>₹ </span>
                                                        30
                                                    </span>
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat_btn_astrologer">
                                            <div className="active_tick single-tick">
                                                <span
                                                    className="mat-tooltip-trigger tick_icon"
                                                    aria-describedby="cdk-describedby-message-0"
                                                >
                                                    <img src={verifiedImg} alt="tick icon" />
                                                </span>
                                            </div>
                                            {
                                                user !== null ? <Link to={`/astro-profile/${_id}`} className="chat_button">
                                                    <div className="btn_cht busy-status cursor-pointer">
                                                        Chat
                                                    </div>

                                                    <div className="astrologer-status text-danger">
                                                        <div className="chat_status_hidden overflow_text_hidden">
                                                            Wait time ~ 55m
                                                        </div>
                                                    </div>
                                                </Link> :
                                                    <div className="chat_button" onClick={() => { setOpenDialog(true) }}>
                                                        <div className="btn_cht busy-status cursor-pointer">
                                                            Chat
                                                        </div>

                                                        <div className="astrologer-status text-danger">
                                                            <div className="chat_status_hidden overflow_text_hidden">
                                                                Wait time ~ 55m
                                                            </div>
                                                        </div>
                                                    </div>
                                            }

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <div
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                className="modal fade modal_short_filter"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div id="nav-tabContent" className="tab-content">
                            <div className="modal-header">
                                <h6>Sort by</h6>
                                <button
                                    type="button"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    className="btn-close"
                                />
                            </div>
                            <div className="modal-body">
                                <div className="short_by_object">
                                    <input
                                        type="radio"
                                        name="shorting"
                                        autoComplete="off"
                                        className="form-check-input"
                                        id="short_0"
                                        defaultValue
                                    />
                                    <label className="lable_radio selected" htmlFor="short_0">

                                        Popularity
                                    </label>
                                </div>
                                <div className="short_by_object">
                                    <input
                                        type="radio"
                                        name="shorting"
                                        autoComplete="off"
                                        className="form-check-input"
                                        id="short_1"
                                        defaultValue="sortByExperience_1"
                                    />
                                    <label className="lable_radio" htmlFor="short_1">

                                        Experience : High to Low
                                    </label>
                                </div>
                                <div className="short_by_object">
                                    <input
                                        type="radio"
                                        name="shorting"
                                        autoComplete="off"
                                        className="form-check-input"
                                        id="short_2"
                                        defaultValue="sortByExperience_0"
                                    />
                                    <label className="lable_radio" htmlFor="short_2">

                                        Experience : Low to High
                                    </label>
                                </div>
                                <div className="short_by_object">
                                    <input
                                        type="radio"
                                        name="shorting"
                                        autoComplete="off"
                                        className="form-check-input"
                                        id="short_3"
                                        defaultValue="sortByOrder_1"
                                    />
                                    <label className="lable_radio" htmlFor="short_3">

                                        Total orders : High to Low
                                    </label>
                                </div>
                                <div className="short_by_object">
                                    <input
                                        type="radio"
                                        name="shorting"
                                        autoComplete="off"
                                        className="form-check-input"
                                        id="short_4"
                                        defaultValue="sortByOrder_0"
                                    />
                                    <label className="lable_radio" htmlFor="short_4">

                                        Total orders : Low to High
                                    </label>
                                </div>
                                <div className="short_by_object">
                                    <input
                                        type="radio"
                                        name="shorting"
                                        autoComplete="off"
                                        className="form-check-input"
                                        id="short_5"
                                        defaultValue="sortByPrice_1"
                                    />
                                    <label className="lable_radio" htmlFor="short_5">

                                        Price : High to Low
                                    </label>
                                </div>
                                <div className="short_by_object">
                                    <input
                                        type="radio"
                                        name="shorting"
                                        autoComplete="off"
                                        className="form-check-input"
                                        id="short_6"
                                        defaultValue="sortByPrice_0"
                                    />
                                    <label className="lable_radio" htmlFor="short_6">

                                        Price : Low to High
                                    </label>
                                </div>
                                <div className="short_by_object">
                                    <input
                                        type="radio"
                                        name="shorting"
                                        autoComplete="off"
                                        className="form-check-input"
                                        id="short_7"
                                        defaultValue="sortByRating_1"
                                    />
                                    <label className="lable_radio" htmlFor="short_7">

                                        Rating : High to Low
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="exampleModal2"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel2"
                aria-hidden="true"
                className="modal fade modal_short_filter main_filter"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6>Filters</h6>
                            <button
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                className="btn-close"
                            />
                        </div>
                        <div className="modal-body"></div>
                        <div className="modal-footer">
                            <button className="filter_btns">Reset</button>
                            <button className="filter_btns apply_btn">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <app-best-astrologers>
                    <section className="find_best_astrologer_section">
                        <div className="container">
                            <h2 className="heading_find_best_astrologer">
                                Find Best Astrologers
                            </h2>
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-xl-3">
                                    <div className="astrologer_city_wise">
                                        <div className="city_wise_link">
                                            <span className="sprite_sign link_consult_astrologer" />
                                            Consult Astrologer
                                        </div>
                                        <div className="category_link pre-scrollable scrollable_2 category_link_first">
                                            <ul className="selectBG">
                                                <li>
                                                    <span className="sprite_sign link_category_arrow" />
                                                    <a href="https://www.mobilegamingarcade.com/astrotalk.com/talk-to-astrologer">
                                                        Talk to Astrologer
                                                    </a>
                                                </li>
                                                <li>
                                                    <span className="sprite_sign link_category_arrow" />
                                                    <a href="https://www.mobilegamingarcade.com/astrotalk.com/chat-with-astrologer">
                                                        Chat with Astrologer
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-xl-3">
                                    <div className="astrologer_city_wise">
                                        <div className="city_wise_link">
                                            <span className="sprite_sign link_indian_city" />
                                            Indian(City - wise)
                                        </div>
                                        <div className="category_link pre-scrollable scrollable_2">
                                            <ul className="selectBG">
                                                <li>
                                                    <span className="sprite_sign link_category_arrow" />
                                                    <a href="https://www.mobilegamingarcade.com/astrotalk.com/chat-with-astrologer/delhi">
                                                        Astrologers In Delhi
                                                    </a>
                                                </li>
                                                <li>
                                                    <span className="sprite_sign link_category_arrow" />
                                                    <a href="https://www.mobilegamingarcade.com/astrotalk.com/chat-with-astrologer/gurgaon">
                                                        Astrologers In Gurgaon
                                                    </a>
                                                </li>
                                                <li>
                                                    <span className="sprite_sign link_category_arrow" />
                                                    <a href="https://www.mobilegamingarcade.com/astrotalk.com/chat-with-astrologer/noida">
                                                        Astrologers In Noida
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-xl-3">
                                    <div className="astrologer_city_wise">
                                        <div className="city_wise_link">
                                            <span className="sprite_sign link_international" />
                                            International
                                        </div>
                                        <div className="category_link pre-scrollable scrollable_2">
                                            <ul className="selectBG">
                                                <li>
                                                    <span className="sprite_sign link_category_arrow" />
                                                    <a href="#">Astrologers In Usa</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-xl-3">
                                    <div className="astrologer_city_wise astrologer_city_wiseM0">
                                        <div className="city_wise_link">
                                            <span className="sprite_sign link_category_wise" />
                                            Category wise
                                        </div>
                                        <div className="category_link pre-scrollable scrollable_2">
                                            <ul className="selectBG">
                                                <li>
                                                    <span className="sprite_sign link_category_arrow" />
                                                    <a href="https://www.mobilegamingarcade.com/astrotalk.com/chat-with-astrologer/">
                                                        Astrology
                                                    </a>
                                                </li>
                                                <li>
                                                    <span className="sprite_sign link_category_arrow" />
                                                    <a href="https://www.mobilegamingarcade.com/astrotalk.com/chat-with-astrologer/vastu">
                                                        Vastu Astrology
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                    </section>
                </app-best-astrologers>

                <app-free-service _nghost-sc163>
                    <section className="free_services">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 section-headings">
                                    <h2 className="kundli_heading">Free Services</h2>
                                    <h4 className="kundli_subheading">
                                        Complimentary astrology services
                                    </h4>
                                </div>
                            </div>
                            <div className="diff_font_family">
                                <div className="slider server-crosal">
                                    <Slider {...settings} className="carousel d-flex">
                                        <div className="slide p-0 col-md-3 col-4">
                                            <a
                                                className="box_section free_service"
                                                href="https://www.mobilegamingarcade.com/astrotalk.com/horoscope/daily-horoscope"
                                            >
                                                <div className="icon">
                                                    <span className="icons_saprate_image compatibility_icon" />
                                                </div>
                                                <div className="title">Horoscope</div>
                                                <div className="discription">
                                                    Love could be confusing, but only until you haven’t
                                                    found how compatible you two are for each other.
                                                </div>
                                                <div className="readmore_icon">
                                                    <i className="fa fa-arrow-right" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="slide p-0 col-md-3 col-4">
                                            <a
                                                className="box_section free_service"
                                                href="https://www.mobilegamingarcade.com/astrotalk.com//indian-calendar-festivals-2022"
                                            >
                                                <div className="icon">
                                                    <span className="icons_saprate_image fastival_icon" />
                                                </div>
                                                <div className="title">Festival</div>
                                                <div className="discription">
                                                    Festival -- "Its Nothing but an Uncountable forms of
                                                    celebrations". Check Out for more
                                                </div>
                                                <div className="readmore_icon">
                                                    <i className="fa fa-arrow-right" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="slide p-0 col-md-3 col-4">
                                            <a
                                                className="box_section free_service"
                                                href="https://www.mobilegamingarcade.com/astrotalk.com/matchmaking"
                                            >
                                                <div className="icon">
                                                    <span className="icons_saprate_image match_making_icon" />
                                                </div>
                                                <div className="title">Match Making</div>
                                                <div className="discription">
                                                    Check Love Compatibility and Marriage Prediction
                                                    online at AstroTalk.Get the best Horoscope and kundli
                                                    matching predictions today!
                                                </div>
                                                <div className="readmore_icon">
                                                    <i className="fa fa-arrow-right" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="slide p-0 col-md-3 col-4">
                                            <a
                                                className="box_section free_service"
                                                href="https://www.mobilegamingarcade.com/astrotalk.com/freekundli"
                                            >
                                                <div className="icon">
                                                    <span className="icons_saprate_image chinese_horoscope_icon" />
                                                </div>
                                                <div className="title">Free Kundli</div>
                                                <div className="discription">
                                                    Online Kundli For Future Predictions,Get instant &amp;
                                                    accurate Janam kundli... Check your's now
                                                </div>
                                                <div className="readmore_icon">
                                                    <i className="fa fa-arrow-right" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="slide p-0 col-md-3 col-4">
                                            <a
                                                className="box_section free_service"
                                                href="/horoscope/daily-horoscope"
                                            >
                                                <div className="icon">
                                                    <span className="icons_saprate_image daily_horoscope_icon" />
                                                </div>
                                                <div className="title">Daily Horoscope</div>
                                                <div className="discription">
                                                    Get free Aries daily horoscope prediction today online
                                                    from the best astrologer. Read your Aries Zodiac Sign
                                                    horoscope today!
                                                </div>
                                                <div className="readmore_icon">
                                                    <i className="fa fa-arrow-right" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="slide p-0 col-md-3 col-4">
                                            <a
                                                className="box_section free_service"
                                                href="https://www.mobilegamingarcade.com/astrotalk.com/freekundli"
                                            >
                                                <div className="icon">
                                                    <span className="icons_saprate_image free_kundli_icon" />
                                                </div>
                                                <div className="title">Free Kundli</div>
                                                <div className="discription">
                                                    Generate your free online kundli report from
                                                    Astrotalk. Our Kundli software can help you predict
                                                    the future for yourself by reading the birth chart.
                                                </div>
                                                <div className="readmore_icon">
                                                    <i className="fa fa-arrow-right" />
                                                </div>
                                            </a>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </section>
                </app-free-service>

                <section className="why_astrology">
                    <div className="container">
                        <h2 className="heading_seo_content_headline_chinese_horoscope">
                            How Chatting with an astrologer can help you?
                            <img
                                alt="down"
                                src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/down.png"
                                className="arrowPos"
                            />
                        </h2>
                        <h3 className="subheading_why_astrology">
                            Best online astrology consultation
                        </h3>
                        <a href="mailto:mojoinnovative9@gmail.com" target="_blank">
                            mojoinnovative9@gmail.com
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ChatWithAstrologer;
