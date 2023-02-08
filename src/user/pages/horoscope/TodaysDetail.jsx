import style from "./horoscope.module.css";
import React, { useState, useContext, useEffect } from "react";

import { useParams, Link, useNavigate } from 'react-router-dom'
import { ZodiacContext } from '../../../context/ZodiacContext';
import { HoroscopeCategory } from '../../../context/HoroscopeTypeContext'
import { apiEndPoint, imgUrl } from "../../../enviroment";
import { CompatiblePair } from '../CompatibilityChild';
import axios from "axios";

export default function TodaysDetail() {
    const { zodiac } = useContext(ZodiacContext);
    const { tp } = useContext(HoroscopeCategory);
    const [loading, setLoading] = useState(true)
    const [currentSign, setCurrentSign] = useState();
    const [currentCategory, setCurrentCategory] = useState({
        id: '',
        slug: '',
        name: ''

    });


    const params = useParams();
    const navigate = useNavigate();
    const [horoscopeData, setHoroscopeData] = useState({
        horoscopeID: '',
        zodiacID: '',
        description: ''
    });




    const zodiacHoroscope = (endUrl = `${apiEndPoint}horoscope/${currentCategory.id}/${currentSign}`) => {
        console.log(currentCategory)
        const config = {
            method: 'get',
            url: endUrl
        }
        axios(config)
            .then(res => {
                setHoroscopeData({
                    horoscopeID: res.data.horoscopeID,
                    zodiacID: res.data.zodiacID,
                    description: res.data.description
                })

            })
    };

    useEffect(() => {

        if (currentSign) {
            zodiacHoroscope();
        }
    }, [loading])
    console.log("horoscopeData", horoscopeData);
    useEffect(() => {
        tp.map((category) => {

            if (category.horoSlug == params.zodiacType) {
                setCurrentCategory({
                    id: category.id,
                    slug: category.horoSlug,
                    name: category.horoscope
                });
            } else {
                return false;
            }
        })
        zodiac.map((row, i) => {
            if (row.signSlug == params.zodiacSign) {

                setCurrentSign(row.c_id);
                setLoading(false);
            } else {
                return false;
            }
        });

    }, [zodiac]);
    const horoscopeHandler = (e) => {
        // console.log("horoscopeHandler:", e)
        setCurrentCategory({
            id: e.id,
            slug: e.horoSlug,
            name: e.horoscope
        });
        zodiacHoroscope(`${apiEndPoint}horoscope/${e.id}/${currentSign}`);
    }
    const zodiacSignHandler = (e) => {
        setCurrentSign(e.target.value)
        zodiacHoroscope(`${apiEndPoint}horoscope/${currentCategory.id}/${e.target.value}`);
        navigate(`/horoscope/${currentCategory.slug}/${zodiac[e.target.value - 1].signSlug}`);
    }
    const clickSignHandler = (e) => {
        setCurrentSign(e)
        zodiacHoroscope(`${apiEndPoint}horoscope/${currentCategory.id}/${e}`);
    }
    const childHandler = (e) => {
        setCurrentSign(e.target.getAttribute('data-x'));
        // SetPartnerSign(e.target.getAttribute('data-y'));
        zodiacHoroscope(`${apiEndPoint}horoscope/${currentCategory.id}/${e.target.getAttribute('data-x')}`);
        navigate(`/horoscope/${e.target.getAttribute('data-slug')}`)
    }

    if (!currentSign) return 'Data Loading.....';
    return (
        <>
            <app-horoscope-detail>
                <div className="header_chinese_horoscope">
                    <div className="container">
                        <div className={style.header_contant_chinese}>
                            <div className="left_side_text_chinese">
                                <h1 >{zodiac[currentSign - 1].zodiacSign} {currentCategory.name}</h1>
                                <h2 > 03 February 2023 </h2>
                            </div>
                            <div className={style.right_side_image_chinese}><img alt="banner" src={`${imgUrl}horoscope/${zodiac[currentSign - 1].zodiacImage}`} height={198} width={198} /></div>
                        </div>
                    </div>
                </div>
                <div className={style.bread}>
                    <div className="container">
                        <ul id="breadcrumbs-two" className="ng-star-inserted">

                            <li><a aria-label="home" href="/"><i className="fa fa-home" /></a></li>
                            <li><a href="/horoscope/todays-horoscope" className="ng-star-inserted">{currentCategory.name}</a></li>
                            <li><a className="current active text-capitalize ng-star-inserted">{zodiac[currentSign - 1].zodiacSign} {currentCategory.name}</a></li>
                        </ul>
                    </div>
                </div>
                <section className="mainSection">
                    <div className={style.horoscope_internal_weekly_section}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className={style.select_your_sign}>
                                        <form noValidate action="select.php" className="ng-untouched ng-pristine ng-valid">
                                            <label htmlFor="selectEnSign">Select Other Sign</label><br /><select name="horoscope" id="selectEnSign" selectedindex={-1} value={currentSign} onChange={zodiacSignHandler} className="ng-untouched ng-pristine ng-valid">
                                                {zodiac.length ? zodiac.map((option, index) => <option key={index} value={option.c_id}>{option.zodiacSign}</option>) : ''}

                                            </select>
                                        </form>
                                    </div>

                                    <div className={style.horoscope_items_aries}>
                                        <h2 className="main_heading_horocope_list">Horoscopes:</h2>
                                        {tp.map((category, i) => {
                                            return (
                                                <>
                                                    <Link key={i} to={`/horoscope/${category.horoSlug}/${params.zodiacSign}`} onClick={() => horoscopeHandler(category)}><span > {category.horoscope}</span> </Link>

                                                </>
                                            );
                                        })}


                                    </div>

                                </div>
                                <div className="col-md-8">

                                    <div >

                                        <h2 className="font_size_set"> {zodiac[currentSign - 1].zodiacSign} {currentCategory.name}</h2>



                                        <div className={style.parah_aries_horocope}>
                                            {horoscopeData.description}
                                        </div>
                                    </div>


                                    <div className={style.free_aries_horoscope_section_add}>
                                        <h3 className={style.heading_want_know_aries_virgo_match}> Connect with an Astrologer on
                                            Call or Chat for more personalised detailed predictions. </h3>
                                        <div className={style.btns_contact_astrologer}><a href="https://app.adjust.net.in/7hvgf6q?fallback=https%3A%2F%2Fastrotalk.com%2Ftalk-to-astrologer"><button type="button" className="bnt_astrologer_contact"><i className="fa fa-phone" /><span >Talk to Astrologer</span></button></a><a href="https://app.adjust.net.in/stj9erh?fallback=https%3A%2F%2Fastrotalk.com%2Fchat-with-astrologer"><button type="button" className="bnt_astrologer_contact"><i className="fa fa-comment-o" /><span >Chat with Astrologer</span></button></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.free_aries_horoscope_section}>
                        <div className="container">
                            <h2 className={style.heading_know_your_chinese_horoscope}>READ FOR OTHER SIGNS</h2>
                            <div className="row">
                                {zodiac.map((sign, index) => {
                                    // console.log(sign)
                                    return (
                                        <div key={index} className="col-md-3 col-4 col-sm-4"><Link className={style.cursor} onClick={() => clickSignHandler(sign.c_id)} to={`/horoscope/${params.zodiacType}/${sign.signSlug}`}><img src={`${imgUrl}/horoscope/${sign.zodiacImage}`} alt="horoscope" loading="lazy" height={200} width={200} className={style.image_weekly_horoscope} />
                                            <h2 className={style.heading_title_weekly_horoscope}>{sign.zodiacSign}</h2>
                                        </Link></div>
                                    );
                                })}

                                {/**/}
                            </div>
                            {/**/}
                            {/**/}
                            {/**/}
                        </div>
                    </div>
                    {/**/}
                    <div className={style.aries_compatibility_with_other_signs}>
                        <div className="container">
                            <h2 >ARIES COMPATIBILITY WITH OTHER SIGNS</h2>
                            <h4 >Check your relationship compatibility</h4>
                            <div className="row">
                                <CompatiblePair allZodiac={zodiac} img={imgUrl} yourSign={currentSign} childClick={childHandler} />
                            </div>

                        </div>
                    </div>

                </section>



            </app-horoscope-detail>

        </>
    )
}