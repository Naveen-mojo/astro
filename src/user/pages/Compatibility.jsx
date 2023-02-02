import React, { useEffect, useState } from 'react';
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import { apiEndPoint, imgUrl } from '../../enviroment';
import { CompatiblePair } from './CompatibilityChild';
import axios from 'axios';

export default function Compatibility() {

  const params = useParams();
  const [loading, setLoading] = useState(true)
  const [zodiac, setZodaic] = useState([]);
  const [selfSign, SetSelfSign] = useState(1);
  const [partnerSign, SetPartnerSign] = useState(1);

  // Fetch all zodaics
  useEffect(() => {
    const config = {
      method: 'get',
      url: `${apiEndPoint}zodiac/all`,
    }
    axios(config)
      .then((resp) => {
        console.log("Response:", resp.data)
        setZodaic(resp.data)

        resp.data.map(row => {
          if (row.signSlug == params.fromId) {
            SetSelfSign(row.c_id);
          } else if (row.signSlug == params.toId) {
            SetPartnerSign(row.c_id);
          } else {
            return false;
          }

        })

        console.log(params)

        setLoading(false);
      }).catch(error => { console.log(error) })
  }, []);





  const [zodiacData, setZodaicData] = useState({
    selfId: selfSign,
    partnerId: partnerSign,
    description: '',
    slug: '',
    selfImage: `${imgUrl}horoscope/horoscope-01.webp`,
    partnerImage: `${imgUrl}horoscope/horoscope-01.webp`
  });
  const fetchZodiacPair = (pairUrl = `${apiEndPoint}zodiacpair/id/${selfSign}/partner/${partnerSign}`) => {

    const pairConfig = {
      method: "get",
      url: pairUrl
    }
    axios(pairConfig)
      .then((res) => {
        let ImageY = zodiac[res.data.yourSign - 1] ? `${imgUrl}horoscope/${zodiac[res.data.yourSign - 1].zodiacImage}` : zodiacData.selfImage
        let ImageP = zodiac[res.data.partnerSign - 1] ? `${imgUrl}horoscope/${zodiac[res.data.partnerSign - 1].zodiacImage}` : zodiacData.partnerImage
        setZodaicData({
          selfId: res.data.yourSign,
          partnerId: res.data.partnerSign,
          description: res.data.description,
          slug: res.data.slug,
          selfImage: ImageY,
          partnerImage: ImageP,
        })
      })

  }


  const changeZodiac = (slug) => {
    try {
      // simulate api call
      setTimeout(() => fetchZodiacPair(slug), 100)
    } catch (e) {
      console.log(e);
    }
  }

  const SelfSignHandler = (sign) => {
    if (sign.target.name == 'zodiacSignX') {
      // const { name, value } = sign.target;
      // SetSelfSign({ [name]: value })
      SetSelfSign(sign.target.value);

    } else if (sign.target.name == 'zodiacSignY') {
      SetPartnerSign(sign.target.value);
    }
  }

  const navigate = useNavigate();
  const submitPairHandler = (e) => {
    e.preventDefault();
    console.log(zodiac[selfSign - 1].signSlug)
    changeZodiac(`${apiEndPoint}zodiacpair/id/${selfSign}/partner/${partnerSign}`)
    navigate(`/compatibility/${zodiac[selfSign - 1].signSlug}/${zodiac[partnerSign - 1].signSlug}`);
  }

  const childHandler = (e) => {
    SetSelfSign(e.target.getAttribute('data-x'));
    SetPartnerSign(e.target.getAttribute('data-y'));
    // `${apiEndPoint}zodiacpair/id/${e.target.getAttribute('data-x')}/partner/${e.target.getAttribute('data-y')}`
    changeZodiac(`${apiEndPoint}zodiacpair/id/${e.target.getAttribute('data-x')}/partner/${e.target.getAttribute('data-y')}`);
    navigate(`/compatibility/${e.target.getAttribute('data-slug')}`)
  }
  useEffect(() => {
    fetchZodiacPair();
  }, [loading]);

  if (loading) return '<h1>Data Loading.....</h1>';

  return (<>
    <app-compatibility-detail _nghost-sc170>
      <div _ngcontent-sc170 className="header_chinese_horoscope">
        <div _ngcontent-sc170 className="container">
          <div _ngcontent-sc170 className="flex_use_compatibility">
            <div _ngcontent-sc170 className="left_side_text_chinese">
              <h1 _ngcontent-sc170 className="heading_font_small">Zodiac Compatibility</h1>
              <h2 _ngcontent-sc170>Love, sex, friendship &amp; more</h2>
            </div>
            <div _ngcontent-sc170 className="right_side_compatibility">
              <div _ngcontent-sc170 className="header_images_two_cross">
                <img _ngcontent-sc170 alt="zodiac" src={zodiacData.selfImage} width={196} height={196} /><img _ngcontent-sc170 width={68} height={68} alt="zodiac" src={zodiacData.partnerImage} />
              </div>
              <div _ngcontent-sc170 className="compatibility_link mb-0"> {zodiac[zodiacData.selfId - 1] ? zodiac[zodiacData.selfId - 1].zodiacSign : ''} &amp; {zodiac[zodiacData.partnerId - 1] ? zodiac[zodiacData.partnerId - 1].zodiacSign : ''} </div>
            </div>
          </div>
        </div>
      </div>
      <section _ngcontent-sc170 className="text-center">
        <div _ngcontent-sc170 className="bread">
          <div _ngcontent-sc170 className="container">
            {/**/}
          </div>
        </div>
        <div _ngcontent-sc170 className="four_different_percent_compatibility">
          <div _ngcontent-sc170 className="container">
            <div _ngcontent-sc170 className="row">
              <div _ngcontent-sc170 className="col-12 col-sm-12 col-md-7 col-lg-8 col-xl-8">
                {/**/}
                <div >
                  {zodiacData.description ? <div dangerouslySetInnerHTML={{ __html: zodiacData.description }} /> : ''}
                </div>
                {/**/}
              </div>
              <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4">
                <form onSubmit={submitPairHandler} data-slug={zodiacData.slug}>
                  <div className="col-12">
                    <div className="filter_compatiable">
                      <h2>are you compatible ?</h2>
                      <p>Choose your and your partner's zodiac sign to check
                        compatibility</p>
                      <div className="two_filter_compatiable">
                        <div className="your_sign_filter">
                          <h6>your sign</h6>
                          <select name="zodiacSignX" id="zodiacSignX" onChange={SelfSignHandler} selectedindex={-1} value={selfSign} className="ng-untouched ng-pristine ng-valid">
                            {zodiac.length ? zodiac.map((option, index) => <option key={index} value={option.c_id}>{option.zodiacSign}</option>) : ''}


                          </select>
                        </div>
                        <div className="your_sign_filter">
                          <h6>partner's sign</h6>
                          <select name="zodiacSignY" id="zodiacSignY" onChange={SelfSignHandler} selectedindex={-1} value={partnerSign} className="ng-untouched ng-pristine ng-valid">
                            {zodiac.length ? zodiac.map((option, index) => <option key={index} value={option.c_id}>{option.zodiacSign}</option>) : ''}
                          </select>
                        </div>
                      </div>
                      <button className="submit_btn_compatible">Submit
                      </button>
                    </div>
                  </div>
                </form>
                <div className="col-12"><a className="adjust-link" href="/talk-to-astrologer"><img loading="lazy" height={500} width={356} alt="Add" /></a>
                </div>
                {/**/}
              </div>
            </div>
          </div>
        </div>
        <div _ngcontent-sc170 className="free_aries_horoscope_section">
          <div _ngcontent-sc170 className="container">
            <h3 _ngcontent-sc170 className="heading_want_know_aries_virgo_match"> Want to know more about
              Aries and Aries Compatibility? </h3>
            {/**/}
            {/**/}
            <div _ngcontent-sc170 className="btns_contact_astrologer"><a _ngcontent-sc170 href="/talk-to-astrologer"><button _ngcontent-sc170 type="button" className="bnt_astrologer_contact"><i _ngcontent-sc170 className="fa fa-phone" /><span _ngcontent-sc170>Talk to Astrologer</span></button></a><a _ngcontent-sc170 href="/chat-with-astrologer"><button _ngcontent-sc170 type="button" className="bnt_astrologer_contact"><i _ngcontent-sc170 className="fa fa-comment-o" /><span _ngcontent-sc170>Chat with
              Astrologer</span></button></a>
            </div>
          </div>
        </div>
        <div _ngcontent-sc170 className="check_compatibility_with_other_signs">
          <div _ngcontent-sc170 className="container">
            <h2 _ngcontent-sc170>ARIES COMPATIBILITY WITH OTHER SIGNS</h2>
            <h4 _ngcontent-sc170>Check your relationship compatibility</h4>
            <div _ngcontent-sc170 className="row">

              <CompatiblePair allZodiac={zodiac} img={imgUrl} yourSign={zodiacData.selfId} childClick={childHandler} />



            </div>

          </div>
        </div>
        {/*   <app-main-blog _ngcontent-sc170 _nghost-sc162>
            <app-desktop-blog _ngcontent-sc162 _nghost-sc160>
              <section _ngcontent-sc160 className="latest_from_blog_chinese">
                <div _ngcontent-sc160 className="container">
                  <h2 _ngcontent-sc160 className="heading_seo_content_headline_chinese_horoscope">
                    LATEST FROM BLOG</h2>
                  <h3 _ngcontent-sc160 className="subheading_seo_content_headline_chinese_horoscope">
                    Top Astrologers. 24 * 7 customer support. Happy to help </h3>
                  <div _ngcontent-sc160 className="diff_font_family">
                    <div _ngcontent-sc160 className="slider">
                      <ngx-slick-carousel _ngcontent-sc160 className="carousel">
                        <div _ngcontent-sc160 ngxslickitem className="slide row_blog_box_content">
                          <a _ngcontent-sc160 className="blog_box_content" href="https://astrotalk.com/astrology-blog/6-zodiac-signs-that-stalk-their-ex-the-most"><img _ngcontent-sc160 loading="lazy" className="blog_img_content" alt="6 Zodiac Signs That Stalk Their Ex The Most" />
                            <div _ngcontent-sc160 className="views_blog_box">
                              <i _ngcontent-sc160 className="fa fa-eye" /><span _ngcontent-sc160>5532</span>
                            </div>
                            <div _ngcontent-sc160 className="description_blog">
                              <div _ngcontent-sc160 className="title_blog">6 Zodiac Signs
                                That Stalk Their Ex The Most</div>
                            </div>
                            <div _ngcontent-sc160 className="row_view_and_date">
                              <div _ngcontent-sc160 className="author_name_home_page">Tanvi
                                Sharma</div>
                              <div _ngcontent-sc160 className="date_description_blog">
                                January 27, 2023 </div>
                            </div>
                          </a></div>
                        <div _ngcontent-sc160 ngxslickitem className="slide row_blog_box_content">
                          <a _ngcontent-sc160 className="blog_box_content" href="https://astrotalk.com/astrology-blog/will-shehnaaz-gill-find-her-big-breakthrough-in-career-in-2023-astrologers-predict-on-her-birthday"><img _ngcontent-sc160 loading="lazy" className="blog_img_content" alt="Will Shehnaaz Gill Find Her Big Breakthrough in Career in 2023? Astrologers Predict on Her Birthday" />
                            <div _ngcontent-sc160 className="views_blog_box">
                              <i _ngcontent-sc160 className="fa fa-eye" /><span _ngcontent-sc160>13284</span>
                            </div>
                            <div _ngcontent-sc160 className="description_blog">
                              <div _ngcontent-sc160 className="title_blog">Will Shehnaaz
                                Gill Find Her Big Breakthrough in Career in 2023?
                                Astrologers Predict on Her Birthday</div>
                            </div>
                            <div _ngcontent-sc160 className="row_view_and_date">
                              <div _ngcontent-sc160 className="author_name_home_page">
                                Kasturi Chaudhari</div>
                              <div _ngcontent-sc160 className="date_description_blog">
                                January 26, 2023 </div>
                            </div>
                          </a></div>
                        <div _ngcontent-sc160 ngxslickitem className="slide row_blog_box_content">
                          <a _ngcontent-sc160 className="blog_box_content" href="https://astrotalk.com/astrology-blog/monthly-tarot-reading-horoscope-for-february-2023-for-each-zodiac-sign"><img _ngcontent-sc160 loading="lazy" className="blog_img_content" alt="Monthly Tarot Reading Horoscope for February 2023 for Each Zodiac Sign" />
                            <div _ngcontent-sc160 className="views_blog_box">
                              <i _ngcontent-sc160 className="fa fa-eye" /><span _ngcontent-sc160>16284</span>
                            </div>
                            <div _ngcontent-sc160 className="description_blog">
                              <div _ngcontent-sc160 className="title_blog">Monthly Tarot
                                Reading Horoscope for February 2023 for Each Zodiac Sign
                              </div>
                            </div>
                            <div _ngcontent-sc160 className="row_view_and_date">
                              <div _ngcontent-sc160 className="author_name_home_page">
                                Kasturi Chaudhari</div>
                              <div _ngcontent-sc160 className="date_description_blog">
                                January 25, 2023 </div>
                            </div>
                          </a></div>
                        <div _ngcontent-sc160 ngxslickitem className="slide row_blog_box_content">
                          <a _ngcontent-sc160 className="blog_box_content" href="https://astrotalk.com/astrology-blog/monthly-numerology-predictions-for-february-2023"><img _ngcontent-sc160 loading="lazy" className="blog_img_content" alt="Monthly Numerology Predictions for February 2023" />
                            <div _ngcontent-sc160 className="views_blog_box">
                              <i _ngcontent-sc160 className="fa fa-eye" /><span _ngcontent-sc160>6496</span>
                            </div>
                            <div _ngcontent-sc160 className="description_blog">
                              <div _ngcontent-sc160 className="title_blog">Monthly
                                Numerology Predictions for February 2023</div>
                            </div>
                            <div _ngcontent-sc160 className="row_view_and_date">
                              <div _ngcontent-sc160 className="author_name_home_page">
                                Kasturi Chaudhari</div>
                              <div _ngcontent-sc160 className="date_description_blog">
                                January 24, 2023 </div>
                            </div>
                          </a></div>
                        <div _ngcontent-sc160 ngxslickitem className="slide row_blog_box_content">
                          <a _ngcontent-sc160 className="blog_box_content" href="https://astrotalk.com/astrology-blog/5-most-codependent-zodiac-signs"><img _ngcontent-sc160 loading="lazy" className="blog_img_content" alt="5 Most Codependent Zodiac Signs" />
                            <div _ngcontent-sc160 className="views_blog_box">
                              <i _ngcontent-sc160 className="fa fa-eye" /><span _ngcontent-sc160>5136</span>
                            </div>
                            <div _ngcontent-sc160 className="description_blog">
                              <div _ngcontent-sc160 className="title_blog">5 Most
                                Codependent Zodiac Signs</div>
                            </div>
                            <div _ngcontent-sc160 className="row_view_and_date">
                              <div _ngcontent-sc160 className="author_name_home_page">
                                Kasturi Chaudhari</div>
                              <div _ngcontent-sc160 className="date_description_blog">
                                January 23, 2023 </div>
                            </div>
                          </a></div>
                        <div _ngcontent-sc160 ngxslickitem className="slide row_blog_box_content">
                          <a _ngcontent-sc160 className="blog_box_content" href="https://astrotalk.com/astrology-blog/8-things-to-look-for-in-your-partners-birth-chart-before-marriage"><img _ngcontent-sc160 loading="lazy" className="blog_img_content" alt="8 Things To Look For In Your Partner's Birth Chart Before Marriage" />
                            <div _ngcontent-sc160 className="views_blog_box">
                              <i _ngcontent-sc160 className="fa fa-eye" /><span _ngcontent-sc160>5028</span>
                            </div>
                            <div _ngcontent-sc160 className="description_blog">
                              <div _ngcontent-sc160 className="title_blog">8 Things To Look
                                For In Your Partner's Birth Chart Before Marriage</div>
                            </div>
                            <div _ngcontent-sc160 className="row_view_and_date">
                              <div _ngcontent-sc160 className="author_name_home_page">
                                Shimona Jain</div>
                              <div _ngcontent-sc160 className="date_description_blog">
                                January 23, 2023 </div>
                            </div>
                          </a></div>
                        <div _ngcontent-sc160 ngxslickitem className="slide row_blog_box_content">
                          <a _ngcontent-sc160 className="blog_box_content" href="https://astrotalk.com/astrology-blog/spouse-prediction-know-about-your-future-life-partner-in-vedic-astrology"><img _ngcontent-sc160 loading="lazy" className="blog_img_content" alt="Spouse Prediction: Know About Your Future Life Partner In Vedic Astrology" />
                            <div _ngcontent-sc160 className="views_blog_box">
                              <i _ngcontent-sc160 className="fa fa-eye" /><span _ngcontent-sc160>18008</span>
                            </div>
                            <div _ngcontent-sc160 className="description_blog">
                              <div _ngcontent-sc160 className="title_blog">Spouse
                                Prediction: Know About Your Future Life Partner In Vedic
                                Astrology</div>
                            </div>
                            <div _ngcontent-sc160 className="row_view_and_date">
                              <div _ngcontent-sc160 className="author_name_home_page">
                                Kasturi Chaudhari</div>
                              <div _ngcontent-sc160 className="date_description_blog">
                                January 20, 2023 </div>
                            </div>
                          </a></div>
                        <div _ngcontent-sc160 ngxslickitem className="slide row_blog_box_content">
                          <a _ngcontent-sc160 className="blog_box_content" href="https://astrotalk.com/astrology-blog/know-the-date-time-effects-of-rahu-and-mercury-conjunction-2023-in-aries"><img _ngcontent-sc160 loading="lazy" className="blog_img_content" alt="Know The Date, Time & Effects of Rahu and Mercury Conjunction 2023 in Aries" />
                            <div _ngcontent-sc160 className="views_blog_box">
                              <i _ngcontent-sc160 className="fa fa-eye" /><span _ngcontent-sc160>4851</span>
                            </div>
                            <div _ngcontent-sc160 className="description_blog">
                              <div _ngcontent-sc160 className="title_blog">Know The Date,
                                Time &amp; Effects of Rahu and Mercury Conjunction 2023
                                in Aries</div>
                            </div>
                            <div _ngcontent-sc160 className="row_view_and_date">
                              <div _ngcontent-sc160 className="author_name_home_page">
                                Kasturi Chaudhari</div>
                              <div _ngcontent-sc160 className="date_description_blog">
                                January 19, 2023 </div>
                            </div>
                          </a></div>
                        <div _ngcontent-sc160 ngxslickitem className="slide row_blog_box_content">
                          <a _ngcontent-sc160 className="blog_box_content" href="https://astrotalk.com/astrology-blog/know-how-borrowing-on-tuesday-can-be-harmful-to-your-life"><img _ngcontent-sc160 loading="lazy" className="blog_img_content" alt="Know How Borrowing On Tuesday Can Be Harmful To Your Life" />
                            <div _ngcontent-sc160 className="views_blog_box">
                              <i _ngcontent-sc160 className="fa fa-eye" /><span _ngcontent-sc160>2975</span>
                            </div>
                            <div _ngcontent-sc160 className="description_blog">
                              <div _ngcontent-sc160 className="title_blog">Know How
                                Borrowing On Tuesday Can Be Harmful To Your Life</div>
                            </div>
                            <div _ngcontent-sc160 className="row_view_and_date">
                              <div _ngcontent-sc160 className="author_name_home_page">Tanvi
                                Sharma</div>
                              <div _ngcontent-sc160 className="date_description_blog">
                                January 18, 2023 </div>
                            </div>
                          </a></div>
                        <div _ngcontent-sc160 ngxslickitem className="slide row_blog_box_content">
                          <a _ngcontent-sc160 className="blog_box_content" href="https://astrotalk.com/astrology-blog/valentines-day-2023-history-valentine-week-dates-predictions-for-each-zodiac-sign"><img _ngcontent-sc160 loading="lazy" className="blog_img_content" alt="Valentine's Day 2023: History, Valentine Week Dates & Predictions for Each Zodiac Sign" />
                            <div _ngcontent-sc160 className="views_blog_box">
                              <i _ngcontent-sc160 className="fa fa-eye" /><span _ngcontent-sc160>5297</span>
                            </div>
                            <div _ngcontent-sc160 className="description_blog">
                              <div _ngcontent-sc160 className="title_blog">Valentine's Day
                                2023: History, Valentine Week Dates &amp; Predictions
                                for Each Zodiac Sign</div>
                            </div>
                            <div _ngcontent-sc160 className="row_view_and_date">
                              <div _ngcontent-sc160 className="author_name_home_page">Tanvi
                                Sharma</div>
                              <div _ngcontent-sc160 className="date_description_blog">
                                January 17, 2023 </div>
                            </div>
                          </a></div>
                     
                      </ngx-slick-carousel>
                    </div>
                  </div>
                </div>
              </section>
     
            </app-desktop-blog>
           
          </app-main-blog> */}
        {/*      <app-main-free-service _ngcontent-sc170 _nghost-sc165>
            <app-desktop-free-service _ngcontent-sc165 _nghost-sc163>
              <section _ngcontent-sc163 className="free_services">
                <div _ngcontent-sc163 className="container">
                  <div _ngcontent-sc163 className="row">
                    <div _ngcontent-sc163 className="col-md-12 section-headings">
                      <h2 _ngcontent-sc163 className="kundli_heading"> Complimentary astrology
                        services</h2>
                    </div>
                  </div>
                  <div _ngcontent-sc163 className="diff_font_family">
                    <div _ngcontent-sc163 className="slider">
                      <ngx-slick-carousel _ngcontent-sc163 className="carousel">
                        <div _ngcontent-sc163 ngxslickitem className="slide"><a _ngcontent-sc163 className="box_section free_service" href="/horoscope/todays-horoscope">
                            <div _ngcontent-sc163 className="free-services-icon">
                              <img _ngcontent-sc163 loading="lazy" height={110} width={110} alt="Today's Horoscope" />
                            </div>
                            <div _ngcontent-sc163 className="title">Today's Horoscope
                            </div>
                            <div _ngcontent-sc163 className="description"> Get free Aries
                              daily horoscope prediction today online from the best
                              astrologer. Read your Aries Zodiac Sign horoscope today!
                            </div>
                          </a>
                        
                        </div>
                        <div _ngcontent-sc163 ngxslickitem className="slide"><a _ngcontent-sc163 className="box_section free_service" href="/freekundli">
                            <div _ngcontent-sc163 className="free-services-icon">
                              <img _ngcontent-sc163 loading="lazy" height={110} width={110} alt="Free Kundli" />
                            </div>
                            <div _ngcontent-sc163 className="title">Free Kundli</div>
                            <div _ngcontent-sc163 className="description"> Generate your
                              free online kundli report from Astrotalk. Our Kundli
                              software can help you predict the future for yourself by
                              reading the birth chart. </div>
                          </a></div>
                        <div _ngcontent-sc163 ngxslickitem className="slide"><a _ngcontent-sc163 className="box_section free_service" href="/compatibility">
                            <div _ngcontent-sc163 className="free-services-icon">
                              <img _ngcontent-sc163 loading="lazy" height={110} width={110} alt="Compatibility" />
                            </div>
                            <div _ngcontent-sc163 className="title">Compatibility</div>
                            <div _ngcontent-sc163 className="description"> Love could be
                              confusing, but only until you haven’t found how
                              compatible you two are for each other. </div>
                          </a></div>
                        <div _ngcontent-sc163 ngxslickitem className="slide"><a _ngcontent-sc163 className="box_section free_service" href="/indian-calendar-festivals-2023">
                            <div _ngcontent-sc163 className="free-services-icon">
                              <img _ngcontent-sc163 loading="lazy" height={110} width={110} alt="Festivals 2023" />
                            </div>
                            <div _ngcontent-sc163 className="title">Festival 2023</div>
                            <div _ngcontent-sc163 className="description"> Festival --
                              "Its Nothing but an Uncountable forms of celebrations".
                              Check Out for more </div>
                          </a></div>
                       
                        <div _ngcontent-sc163 ngxslickitem className="slide"><a _ngcontent-sc163 className="box_section free_service" href="/matchmaking">
                            <div _ngcontent-sc163 className="free-services-icon">
                              <img _ngcontent-sc163 loading="lazy" height={110} width={110} alt="Horoscope Matching" />
                            </div>
                            <div _ngcontent-sc163 className="title">Kundli Matching</div>
                            <div _ngcontent-sc163 className="description"> Check Love
                              Compatibility and Marriage Prediction online at
                              Astrotalk. Get the best Horoscope and kundli matching
                              predictions today! </div>
                          </a></div>
                        <div _ngcontent-sc163 ngxslickitem className="slide"><a _ngcontent-sc163 className="box_section free_service" href="/chinese-astrology">
                            <div _ngcontent-sc163 className="free-services-icon">
                              <img _ngcontent-sc163 loading="lazy" height={110} width={110} alt="Chinese Horoscope" />
                            </div>
                            <div _ngcontent-sc163 className="title">Chinese Horoscope
                            </div>
                            <div _ngcontent-sc163 className="description"> Are you a Cat?
                              A Mouse? Or the roaring Lion? Let the Chinese astrology
                              reveal it for you. Check your's now </div>
                          </a>
                       
                        </div>
                        <div _ngcontent-sc163 ngxslickitem className="slide"><a _ngcontent-sc163 className="box_section free_service" href="/today-panchang">
                            <div _ngcontent-sc163 className="free-services-icon">
                              <img _ngcontent-sc163 loading="lazy" height={110} width={110} alt="Todays's Panchang" />
                            </div>
                            <div _ngcontent-sc163 className="title">Today Panchang</div>
                            <div _ngcontent-sc163 className="description"> Panchang
                              enlists a record of auspicious dates and times for any
                              auspicious task such as marriage, celebration, puja,
                              starting any business etc. </div>
                          </a>
                         
                        </div>
                      </ngx-slick-carousel>
                    </div>
                  </div>
                </div>
              </section>
            </app-desktop-free-service>
          
          </app-main-free-service> */}
        {/*  <app-main-our-astrologer _ngcontent-sc170 _nghost-sc168>
            <app-desktop-our-astrologer _ngcontent-sc168 _nghost-sc166>
              <section _ngcontent-sc166 className="problem-area">
                <div _ngcontent-sc166 className="container">
                  <div _ngcontent-sc166 className="row">
                    <div _ngcontent-sc166 className="col-md-12">
                      <div _ngcontent-sc166 className="section-headings">
                        <div _ngcontent-sc166 data-wow-delay=".6s" data-wow-duration="1s" className="pboldh">
                          <h2 _ngcontent-sc166> Our Astrologers </h2>
                        </div>
                        <h3 _ngcontent-sc166 data-wow-delay=".2s" data-wow-duration="1s">
                          5000+ Best Astrologers from India for Online Consultation </h3>
                      </div>
                    </div>
                  </div>
                  <div _ngcontent-sc166 className="diff_font_family">
                    <div _ngcontent-sc166 className="slider">
                      <ngx-slick-carousel _ngcontent-sc166 className="carousel paddingForBottomShadow">
                        <div _ngcontent-sc166 ngxslickitem className="slide"><a _ngcontent-sc166 className="ast_team_box" href="/best-astrologer/Pooja">
                            <div _ngcontent-sc166 className="parent_image_our_Astrologer">
                              <img _ngcontent-sc166 loading="lazy" height={130} width={130} alt="Pooja" />
                            </div>
                            <h4 _ngcontent-sc166>Pooja</h4>
                            <p _ngcontent-sc166>Vedic Astrology </p>
                          </a></div>
                        <div _ngcontent-sc166 ngxslickitem className="slide"><a _ngcontent-sc166 className="ast_team_box" href="/best-astrologer/Sathyamurthy">
                            <div _ngcontent-sc166 className="parent_image_our_Astrologer">
                              <img _ngcontent-sc166 loading="lazy" height={130} width={130} alt="Sathyamurthy" />
                            </div>
                            <h4 _ngcontent-sc166>Sathyamurthy</h4>
                            <p _ngcontent-sc166>Vedic Astrology </p>
                          </a></div>
                        <div _ngcontent-sc166 ngxslickitem className="slide"><a _ngcontent-sc166 className="ast_team_box" href="/best-astrologer/BhartiP">
                            <div _ngcontent-sc166 className="parent_image_our_Astrologer">
                              <img _ngcontent-sc166 loading="lazy" height={130} width={130} alt="BhartiP" />
                            </div>
                            <h4 _ngcontent-sc166>BhartiP</h4>
                            <p _ngcontent-sc166>Vedic Astrology </p>
                          </a></div>
                        <div _ngcontent-sc166 ngxslickitem className="slide"><a _ngcontent-sc166 className="ast_team_box" href="/best-astrologer/Satyesh">
                            <div _ngcontent-sc166 className="parent_image_our_Astrologer">
                              <img _ngcontent-sc166 loading="lazy" height={130} width={130} alt="Satyesh" />
                            </div>
                            <h4 _ngcontent-sc166>Satyesh</h4>
                            <p _ngcontent-sc166>Vedic Astrology </p>
                          </a></div>
                        <div _ngcontent-sc166 ngxslickitem className="slide"><a _ngcontent-sc166 className="ast_team_box" href="/best-astrologer/Sanjeev">
                            <div _ngcontent-sc166 className="parent_image_our_Astrologer">
                              <img _ngcontent-sc166 loading="lazy" height={130} width={130} alt="Sanjeev" />
                            </div>
                            <h4 _ngcontent-sc166>Sanjeev</h4>
                            <p _ngcontent-sc166>Vedic Astrology </p>
                          </a></div>
                        <div _ngcontent-sc166 ngxslickitem className="slide"><a _ngcontent-sc166 className="ast_team_box" href="/best-astrologer/Ovais">
                            <div _ngcontent-sc166 className="parent_image_our_Astrologer">
                              <img _ngcontent-sc166 loading="lazy" height={130} width={130} alt="Ovais" />
                            </div>
                            <h4 _ngcontent-sc166>Ovais</h4>
                            <p _ngcontent-sc166>KP Astrology </p>
                          </a></div>
                        <div _ngcontent-sc166 ngxslickitem className="slide"><a _ngcontent-sc166 className="ast_team_box" href="/best-astrologer/Choudhary">
                            <div _ngcontent-sc166 className="parent_image_our_Astrologer">
                              <img _ngcontent-sc166 loading="lazy" height={130} width={130} alt="Choudhary" />
                            </div>
                            <h4 _ngcontent-sc166>Choudhary</h4>
                            <p _ngcontent-sc166>Vedic Astrology </p>
                          </a></div>
                        <div _ngcontent-sc166 ngxslickitem className="slide"><a _ngcontent-sc166 className="ast_team_box" href="/best-astrologer/LakshmiSh">
                            <div _ngcontent-sc166 className="parent_image_our_Astrologer">
                              <img _ngcontent-sc166 loading="lazy" height={130} width={130} alt="LakshmiSh" />
                            </div>
                            <h4 _ngcontent-sc166>LakshmiSh</h4>
                            <p _ngcontent-sc166>Vedic Astrology </p>
                          </a></div>
                        <div _ngcontent-sc166 ngxslickitem className="slide"><a _ngcontent-sc166 className="ast_team_box" href="/best-astrologer/Nnishha">
                            <div _ngcontent-sc166 className="parent_image_our_Astrologer">
                              <img _ngcontent-sc166 loading="lazy" height={130} width={130} alt="Nnishha" />
                            </div>
                            <h4 _ngcontent-sc166>Nnishha</h4>
                            <p _ngcontent-sc166>Vasthu </p>
                          </a></div>
                        <div _ngcontent-sc166 ngxslickitem className="slide"><a _ngcontent-sc166 className="ast_team_box" href="/best-astrologer/Aakanksha">
                            <div _ngcontent-sc166 className="parent_image_our_Astrologer">
                              <img _ngcontent-sc166 loading="lazy" height={130} width={130} alt="Aakanksha" />
                            </div>
                            <h4 _ngcontent-sc166>Aakanksha</h4>
                            <p _ngcontent-sc166>Vedic Astrology </p>
                          </a></div>
                        <div _ngcontent-sc166 ngxslickitem className="slide"><a _ngcontent-sc166 className="ast_team_box" href="/best-astrologer/Kannan">
                            <div _ngcontent-sc166 className="parent_image_our_Astrologer">
                              <img _ngcontent-sc166 loading="lazy" height={130} width={130} alt="Kannan" />
                            </div>
                            <h4 _ngcontent-sc166>Kannan</h4>
                            <p _ngcontent-sc166>Vedic Astrology </p>
                          </a></div>
                        <div _ngcontent-sc166 ngxslickitem className="slide"><a _ngcontent-sc166 className="ast_team_box" href="/best-astrologer/Shriganesh">
                            <div _ngcontent-sc166 className="parent_image_our_Astrologer">
                              <img _ngcontent-sc166 loading="lazy" height={130} width={130} alt="Shriganesh" />
                            </div>
                            <h4 _ngcontent-sc166>Shriganesh</h4>
                            <p _ngcontent-sc166>Vedic Astrology </p>
                          </a></div>
                       
                      </ngx-slick-carousel>
                    </div>
                  </div>
                </div>
              </section>
            
            </app-desktop-our-astrologer>
           
          </app-main-our-astrologer> */}
      </section>

    </app-compatibility-detail>

  </>)
}