import React from 'react'
import Slider from "react-slick";
import carsousel1 from '../assest/images/b41b9d71-c63a-4110-8e72-72a6b72ea8a5.jpg'
import carsousel2 from '../assest/images/090608ed-b344-4aa1-bced-d32d72917b4d.png'
import carsousel3 from '../assest/images/305e75fc-7855-4056-b65d-c8b02dba6df0.jpg'
import carsousel4 from '../assest/images/4c52134c-821d-430a-8040-29fdd4c95a4f.jpg'
import carsousel5 from '../assest/images/1edb4db8-ec70-42b4-baa0-b666e9bc8aee.jpg'
import carsousel6 from '../assest/images/1c212554-6c88-44d8-ab8e-1bc93ba5a098.jpg'
import carsousel7 from '../assest/images/1d125c9d-6b9c-4b8a-9b42-fec23012375a.jpg'

function Home() {
    var settings = {
        dots: false,
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

    var topSettings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
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

    const profile_detail = (id) => {

    }

    return (
        <>
            <app-home-page>
                <section>
                    <div className="position_absolute">
                        <div className="container">
                            <div className="landing_section">
                                <div className="main_heading">
                                    <h1 >astrology prediction by the best astrologers</h1>
                                </div>
                                <Slider {...topSettings} className="carousel-inner carousel_min_height_set">
                                    <div className="carousel-item active">
                                        <a target="_blank" href="https://www.mobilegamingarcade.com/astrotalk.com/live">
                                            <img width={1120} height={460} loading="lazy" className="d-block w-100" alt="Free Live Session " title="Free Live Session " src={carsousel1} />
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a target="_blank" href="https://www.mobilegamingarcade.com/astrotalk.com/chat-with-astrologer">
                                            <img width={1120} height={460} loading="lazy" className="d-block w-100" alt="Happy Days" title="Happy Days" src={carsousel2} />
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a target="_blank" href="https://www.mobilegamingarcade.com/astrotalk.com/chat-with-astrologer">
                                            <img width={1120} height={460} loading="lazy" className="d-block w-100" alt="Chat Now & Find Your Kick" title="Chat Now & Find Your Kick" src={carsousel3} />
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a target="_blank" href="https://www.mobilegamingarcade.com/astrotalk.com/chat-with-astrologer">
                                            <img width={1120} height={460} loading="lazy" className="d-block w-100" alt="Chat Now" title="Chat Now" src={carsousel4} />
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a target="_blank" href="https://www.mobilegamingarcade.com/astrotalk.com/talk-to-astrologer">
                                            <img width={1120} height={460} loading="lazy" className="d-block w-100" alt="Talk to Astrologer" title="Talk to Astrologer" src={carsousel5} />
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a target="_blank" href="https://www.mobilegamingarcade.com/astrotalk.com/shop/online-puja/Laghu-Group-Rudrabhishek-Puja-sBmH?token=eyJjYXRlZ29yeU5hbWUiOiJPbmxpbmUgUHVqYSIsInByb2R1Y3ROYW1lIjoiR3JvdXAgUnVkcmFiaGlzaGVrIFB1amEgIn0%3D">
                                            <img width={1120} height={460} loading="lazy" className="d-block w-100" alt="Rudrabhishek Pooja" title="Rudrabhishek Pooja" src={carsousel6} />
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a target="_blank" href="https://www.mobilegamingarcade.com/astrotalk.com/shop/online-puja/Group-Mangal-and-Ketu-Puja-xKED">
                                            <img width={1120} height={460} loading="lazy" className="d-block w-100" alt="Group-Mangal-and-Ketu-Puja" title="Group-Mangal-and-Ketu-Puja" src={carsousel7} />
                                        </a>
                                    </div>
                                </Slider>
                                <div className="astrolger_services">
                                    <div className="row">
                                        <div className="col-6 col-sm-3 mbile_vrsn">
                                            <a className="box_item" href="chat-with-astrologer">
                                                <div className="icon"><span className="icons_saprate_image chat_with_astrologer_icon"></span></div>
                                                <div className="text"><span>Chat with Astrologer</span></div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-sm-3 mbile_vrsn">
                                            <a className="box_item" href="talk-with-astrologer">
                                                <div className="icon">
                                                    <span className="icons_saprate_image talk_with_astrologer_icon" />
                                                </div>
                                                <div className="text">
                                                    <span >Talk to Astrologer</span></div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-sm-3 mbile_vrsn">
                                            <a className="box_item" href="chat-with-astrologer">
                                                <div className="
											icon"><span className="icons_saprate_image live_on_astrotv_icon"></span>
                                                </div>
                                                <div className="text">
                                                    <span >Chat with Astrologer</span></div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-sm-3 mbile_vrsn">
                                            <a className="box_item" href="chat-with-astrologer">
                                                <div className="
											icon"><span className="icons_saprate_image live_on_astrotv_icon"></span>
                                                </div>
                                                <div className="text">
                                                    <span >Astrotalk Blog</span></div>
                                            </a>
                                        </div>
                                        {/* <div ="" className="col-6 col-sm-3 mbile_vrsn">
                                            <a ="" className="box_item" href="/shop">
                                                <div ="" className="icon"><span ="" className="icons_saprate_image shop_at_astromall_icon"></span></div>
                                                <div ="" className="text"><span ="">Shop at Astromall</span></div>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </app-home-page>
            <app-free-service _nghost-sc163>
                <section className="free_services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 section-headings">
                                <h2 className="kundli_heading">Free Services</h2>
                                <h4 className="kundli_subheading">Complimentary astrology services</h4>
                            </div>
                        </div>
                        <div className="diff_font_family">
                            <div className="slider server-crosal">
                                <Slider {...settings} className="carousel d-flex">
                                    <div className="slide pr-4 col-md-3 col-4">
                                        <a className="box_section free_service" href="https://www.mobilegamingarcade.com/astrotalk.com/horoscope/daily-horoscope">
                                            <div className="icon">
                                                <span className="icons_saprate_image compatibility_icon" />
                                            </div>
                                            <div className="title">Horoscope</div>
                                            <div className="discription">Love could be confusing, but
                                                only until you haven’t found how compatible you two are for each other.
                                            </div>
                                            <div className="readmore_icon">
                                                <i className="fa fa-arrow-right" /></div>
                                        </a>
                                    </div>
                                    <div className="slide pr-4 col-md-3 col-4">
                                        <a className="box_section free_service" href="http://localhost/astrotalk.com/indian-calendar-festivals-2022">
                                            <div className="icon">
                                                <span className="icons_saprate_image fastival_icon" />
                                            </div>
                                            <div className="title">Festival</div>
                                            <div className="discription">Festival -- "Its Nothing but an
                                                Uncountable forms of celebrations". Check Out for more</div>
                                            <div className="readmore_icon">
                                                <i className="fa fa-arrow-right" /></div>
                                        </a>
                                    </div>
                                    <div className="slide pr-4 col-md-3 col-4">
                                        <a className="box_section free_service" href="http://localhost/astrotalk.com/matchmaking">
                                            <div className="icon">
                                                <span className="icons_saprate_image match_making_icon" />
                                            </div>
                                            <div className="title">Match Making</div>
                                            <div className="discription">Check Love Compatibility and
                                                Marriage Prediction online at AstroTalk.Get the best Horoscope and
                                                kundli matching predictions today!</div>
                                            <div className="readmore_icon">
                                                <i className="fa fa-arrow-right" /></div>
                                        </a>
                                    </div>
                                    <div className="slide pr-4 col-md-3 col-4">
                                        <a className="box_section free_service" href="http://localhost/astrotalk.com/freekundli">
                                            <div className="icon">
                                                <span className="icons_saprate_image chinese_horoscope_icon" />
                                            </div>
                                            <div className="title">Free Kundli</div>
                                            <div className="discription">Online Kundli For Future
                                                Predictions,Get instant &amp; accurate Janam kundli... Check your's now
                                            </div>
                                            <div className="readmore_icon">
                                                <i className="fa fa-arrow-right" /></div>
                                        </a>
                                    </div>
                                    <div className="slide pr-4 col-md-3 col-4">
                                        <a className="box_section free_service" href="/horoscope/daily-horoscope">
                                            <div className="icon">
                                                <span className="icons_saprate_image daily_horoscope_icon" />
                                            </div>
                                            <div className="title">Daily Horoscope</div>
                                            <div className="discription">Get free Aries daily horoscope
                                                prediction today online from the best astrologer. Read your Aries Zodiac
                                                Sign horoscope today!</div>
                                            <div className="readmore_icon">
                                                <i className="fa fa-arrow-right" /></div>
                                        </a>
                                    </div>
                                    <div className="slide pr-4 col-md-3 col-4">
                                        <a className="box_section free_service" href="/freekundli">
                                            <div className="icon">
                                                <span className="icons_saprate_image free_kundli_icon" />
                                            </div>
                                            <div className="title">Free Kundli</div>
                                            <div className="discription">
                                                Generate your free online kundli report from Astrotalk. Our Kundli
                                                software can help you predict the future for yourself by reading the
                                                birth chart.
                                            </div>
                                            <div className="readmore_icon">
                                                <i className="fa fa-arrow-right" /></div>
                                        </a>
                                    </div>
                                    <div className="slide pr-4 col-md-3 col-4">
                                        <a title="Coming Soon" target="_blank" className="box_section free_service" href="/coming-soon">
                                            <div className="icon">
                                                <span className="icons_saprate_image numerology_icon" />
                                            </div>
                                            <div className="title">Numerology</div>
                                            <div className="discription">Numerology is perhaps the
                                                easiest of the occult arts where numbers reveal the will of God for you.
                                            </div>
                                            <div className="readmore_icon">
                                                <i className="fa fa-arrow-right" /></div>
                                        </a>
                                    </div>
                                    <div className="slide pr-4 col-md-3 col-4">
                                        <a title="Coming Soon" target="_blank" className="box_section free_service" href="/coming-soon">
                                            <div className="icon">
                                                <span className="icons_saprate_image panchang_icon" />
                                            </div>
                                            <div className="title">Panchang</div>
                                            <div className="discription">Get information about Tithi,
                                                Rashi, Nakshatra, Yoga &amp; Karan for any day with sheer accuracy.
                                            </div>
                                            <div className="readmore_icon">
                                                <i className="fa fa-arrow-right" /></div>
                                        </a>
                                    </div>
                                    <div className="slide pr-4 col-md-3 col-4">
                                        <a title="Coming Soon" target="_blank" className="box_section free_service" href="/coming-soon">
                                            <div className="icon">
                                                <span className="icons_saprate_image vastu_icon" />
                                            </div>
                                            <div className="title">Vastu</div>
                                            <div className="discription">Let only the right energies
                                                enter your space.Find the best Vastu tips for your home, office and
                                                more.</div>
                                            <div className="readmore_icon">
                                                <i className="fa fa-arrow-right" /></div>
                                        </a>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>

                </section>
            </app-free-service>
            <section className="trust_score">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="title_score">1,593</div>
                            <div className="discription_score">Total Astrologers onboarded</div>
                        </div>
                        <div className="col-md-4">
                            <div className="title_score">37
                                <span > Million Minutes</span></div>
                            <div className="discription_score">Total Consultation Duration</div>
                        </div>
                        <div className="col-md-4">
                            <div className="title_score">23,541,102</div>
                            <div className="discription_score">Total Customers Acquired</div>
                        </div>
                    </div>
                </div>
            </section>
            <app-our-astrologers _nghost-sc164>
                <section id="problem-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-headings">
                                    <div data-wow-delay=".6s" data-wow-duration="1s" className="wow fadeInUp pboldh mobttle">
                                        <h2 >Our Astrologers</h2>
                                    </div>
                                    <h4 data-wow-delay=".2s" data-wow-duration="1s" className="wow fadeInUp">500 + Best Astrologers from India for Online Consultation
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="diff_font_family">
                            <div className="slider server-crosal">
                                <Slider {...settings} className="carousel paddingForBottomShadow d-flex">
                                    <div className="slide mx-2 col-md-2 col-6">
                                        <a target="_blank" className="ast_team_box" onClick={profile_detail('pinnkyy-agarrwal')}>
                                            <img loading="lazy" alt="Bhushhan" src="https://aws.astrotalk.com/consultant_pic/395.jpg" />
                                            <h4 >pinnky agarrwal</h4>
                                            <p >Western Astrology</p>
                                        </a>
                                    </div>
                                    <div className="slide mx-2 col-md-2 col-6">
                                        <a target="_blank" className="ast_team_box" onClick={profile_detail('rajkumar-sharma')}>
                                            <img loading="lazy" alt="Bhushhan" src="https://aws.astrotalk.com/consultant_pic/p-3460.jpg" />
                                            <h4 >Rajkumar Sharma</h4>
                                            <p >Tarot Astrology</p>
                                        </a>
                                    </div>
                                    <div className="slide mx-2 col-md-2 col-6">
                                        <a target="_blank" className="ast_team_box" href="/best-astrologer/praveen">
                                            <img loading="lazy" alt="Praveen" src="https://aws.astrotalk.com/consultant_pic/p-2228.jpg" />
                                            <h4 >Praveen</h4>
                                            <p >Vedic Astrology</p>
                                        </a>
                                    </div>
                                    <div className="slide mx-2 col-md-2 col-6">
                                        <a target="_blank" className="ast_team_box" href="/best-astrologer/sushil">
                                            <img loading="lazy" alt="Sushil" src="https://aws.astrotalk.com/consultant_pic/p-2427.jpg" />
                                            <h4 >Sushil</h4>
                                            <p >Vedic Astrology</p>
                                        </a>
                                    </div>
                                    <div className="slide mx-2 col-md-2 col-6">
                                        <a target="_blank" className="ast_team_box" href="/best-astrologer/anand">
                                            <img loading="lazy" alt="Anand" src="https://aws.astrotalk.com/consultant_pic/p-3657.jpg" />
                                            <h4 >Anand</h4>
                                            <p >Vedic Astrology</p>
                                        </a>
                                    </div>
                                    <div className="slide mx-2 col-md-2 col-6">
                                        <a target="_blank" className="ast_team_box" href="/best-astrologer/vineett">
                                            <img loading="lazy" alt="Vineett" src="https://aws.astrotalk.com/consultant_pic/p-3460.jpg" />
                                            <h4 >Vineett</h4>
                                            <p >Vedic Astrology</p>
                                        </a>
                                    </div>
                                    <div className="slide mx-2 col-md-2 col-6">
                                        <a target="_blank" className="ast_team_box" href="/best-astrologer/mukessh">
                                            <img loading="lazy" alt="Mukessh" src="https://aws.astrotalk.com/consultant_pic/p-3487.jpg" />
                                            <h4 >Mukessh</h4>
                                            <p >Vedic Astrology</p>
                                        </a>
                                    </div>
                                    <div className="slide mx-2 col-md-2 col-6">
                                        <a target="_blank" className="ast_team_box" href="/best-astrologer/meha">
                                            <img loading="lazy" alt="Meha" src="https://aws.astrotalk.com/consultant_pic/p-4130.jpg" />
                                            <h4 >Meha</h4>
                                            <p >Vedic Astrology</p>
                                        </a>
                                    </div>
                                    <div className="slide mx-2 col-md-2 col-6">
                                        <a target="_blank" className="ast_team_box" href="/best-astrologer/anandg">
                                            <img loading="lazy" alt="AnandG" src="https://aws.astrotalk.com/consultant_pic/1865.jpg" />
                                            <h4 >AnandG</h4>
                                            <p >Vedic Astrology</p>
                                        </a>
                                    </div>
                                    <div className="slide mx-2 col-md-2 col-6">
                                        <a target="_blank" className="ast_team_box" href="/best-astrologer/shivaam">
                                            <img loading="lazy" alt="Shivaam" src="https://aws.astrotalk.com/consultant_pic/p-2762.jpg" />
                                            <h4 >Shivaam</h4>
                                            <p >KP Astrology</p>
                                        </a>
                                    </div>
                                    <div className="slide mx-2 col-md-2 col-6">
                                        <a target="_blank" className="ast_team_box" href="/best-astrologer/awadhesh">
                                            <img loading="lazy" alt="Awadhesh" src="https://aws.astrotalk.com/consultant_pic/395.jpg" />
                                            <h4 >Awadhesh</h4>
                                            <p >Vedic Astrology</p>
                                        </a>
                                    </div>
                                    <div className="slide mx-2 col-md-2 col-6">
                                        <a target="_blank" className="ast_team_box" href="/best-astrologer/ajayk">
                                            <img loading="lazy" alt="AjayK" src="https://aws.astrotalk.com/consultant_pic/p-2002.jpg" />
                                            <h4 >AjayK</h4>
                                            <p >Vedic Astrology</p>
                                        </a>
                                    </div>
                                    <div className="slide mx-2 col-md-2 col-6">
                                        <a target="_blank" className="ast_team_box" href="/best-astrologer/assign-astrologer">
                                            <img loading="lazy" alt="Assign Astrologer" src="https://aws.astrotalk.com/consultant_pic/2.jpg" />
                                            <h4 >Assign Astrologer</h4>
                                            <p >Vedic</p>
                                        </a>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

            </app-our-astrologers>
            <app-our-customers>
                <section className="our_cust">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 section-headings">
                                <h2 className="our_customer_heading">HEAR FROM OUR CUSTOMERS</h2>
                                <h4 className="our_customer_subheading">Top Astrologers. 24 * 7 customer
                                    support. Happy to help</h4>
                            </div>
                        </div>
                        <div className="testimonial">
                            <div className="slider server-crosal">
                                <Slider {...settings} className="carousel d-flex">
                                    <div className="slide pr-4 col-md-4 col-12">
                                        <div className="card d-flex margin_left_right">
                                            <div className="card-image">
                                                <img alt="Reetika_Verma" height={150} width={150} src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/photos/webp/Reetikaverma.webp" loading="lazy" className="img-fluid d-flex mx-auto" />
                                            </div>
                                            <div className="text_area">
                                                <div className="card-title">Reetika Verma</div>
                                                <div className="card_sub_title">Delhi, India</div>
                                                <div className="card-text">
                                                    Thanks AstroTalk for being available at my difficult time and
                                                    motivating me to get through that phase. I am finally doing good
                                                    now after Navgrah Pooja performed by them. The complete
                                                    process was very smooth. I'll recommend it to my friends.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide pr-4 col-md-4 col-12">
                                        <div className="card d-flex margin_left_right">
                                            <div className="card-image">
                                                <img alt="Dale_Stricklin" height={150} width={150} src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/photos/webp/deependerdeol.webp" loading="lazy" className="img-fluid d-flex mx-auto" />
                                            </div>
                                            <div className="text_area">
                                                <div className="card-title">Dale Stricklin</div>
                                                <div className="card_sub_title">Sydney,
                                                    Australia</div>
                                                <div className="card-text">
                                                    There is no comparison of AstroTalk when it comes to getting
                                                    a free horoscope and checking horoscope online in the
                                                    Astrology industry. They have revolutionized everything with
                                                    excellent customer service by having a controlled
                                                    marketplace for best astrologers from India.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide pr-4 col-md-4 col-12">
                                        <div className="card d-flex margin_left_right">
                                            <div className="card-image">
                                                <img alt="Gurdeep_Chawla" height={150} width={150} src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/photos/webp/gurdeepchawla.webp" loading="lazy" className="img-fluid d-flex mx-auto" />
                                            </div>
                                            <div className="text_area">
                                                <div className="card-title">Gurdeep Chawla
                                                </div>
                                                <div className="card_sub_title">Muscat, Oman
                                                </div>
                                                <div className="card-text">
                                                    I really love the service of AstroTalk.Astrologers are
                                                    really skilled and co - operative. Customer support team
                                                    is very active and friendly. I get all answers and have
                                                    a good
                                                    conversation with astrologers at a decent price. And the
                                                    predictions are also very accurate.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide pr-4 col-md-4 col-12">
                                        <div className="card d-flex margin_left_right">
                                            <div className="card-image">
                                                <img alt="Abhiuday_Chandra" height={150} width={150} src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/photos/webp/abhiudaychandra.webp" loading="lazy" className="img-fluid d-flex mx-auto" />
                                            </div>
                                            <div className="text_area">
                                                <div className="card-title">Abhiuday
                                                    Chandra</div>
                                                <div className="card_sub_title">Germany
                                                </div>
                                                <div className="card-text">
                                                    Have been using this for 6 months now. I am an
                                                    ardent follower of Astrology and getting such a user
                                                    friendly application in Astrotalk has just made it
                                                    very easy for me to contact any
                                                    good astrologer at anytime and release my stress.
                                                    Astrologers do counsel very well.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide pr-4 col-md-4 col-12">
                                        <div className="card d-flex margin_left_right">
                                            <div className="card-image">
                                                <img alt="Juilee_Patankar" height={150} width={150} src="../../../assets/images/photos/webp/julieepatankar.webp" loading="lazy" className="img-fluid d-flex mx-auto" />
                                            </div>
                                            <div className="text_area">
                                                <div className="card-title">Juilee
                                                    Patankar</div>
                                                <div className="card_sub_title">New
                                                    Jersey, USA</div>
                                                <div className="card-text">
                                                    Brilliant app. Asked queries from 5 experts, got
                                                    answer within 4 - 5 hours every time and the
                                                    answer were detailed which no other app provides
                                                    in this cost. Predictions were quite
                                                    accurate. And they were available to clear any
                                                    follow up doubts also.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide pr-4 col-md-4 col-12">
                                        <div className="card d-flex margin_left_right">
                                            <div className="card-image">
                                                <img alt="Kirti_Patil" height={150} width={150} src="../../../assets/images/photos/webp/kirti.webp" loading="lazy" className="img-fluid d-flex mx-auto" />
                                            </div>
                                            <div className="text_area">
                                                <div className="card-title">
                                                    Kirti Patil</div>
                                                <div className="card_sub_title">
                                                    Kolkata, India</div>
                                                <div className="card-text">
                                                    Astrology reports are very detailed and
                                                    accurate. Had ordered an annual report from
                                                    3 different astrologers and the insights I
                                                    got were really good. AstroTalk has the best
                                                    astrologers
                                                    from India and they provide best astrology
                                                    predictions. Totally worth the money.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide pr-4 col-md-4 col-12">
                                        <div className="card d-flex margin_left_right">
                                            <div className="card-image">
                                                <img alt="Nisha_Koranga" height={150} width={150} src="../../../assets/images/photos/webp/nisha.webp" loading="lazy" className="img-fluid d-flex mx-auto" />
                                            </div>
                                            <div className="text_area">
                                                <div className="card-title">
                                                    Nisha Koranga</div>
                                                <div className="card_sub_title">Bangalore, India
                                                </div>
                                                <div className="card-text">
                                                    Had a wonderful session with couple of
                                                    astrologers and it was quite satisfying.
                                                    They listened to me carefully and
                                                    answered very patiently. Customer
                                                    support makes life very comfortable
                                                    as they are always there to support.
                                                    Best experience on any service app from
                                                    India till date.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide pr-4 col-md-4 col-12">
                                        <div className="card d-flex margin_left_right">
                                            <div className="card-image">
                                                <img alt="Pinki_Agarwalla" height={150} width={150} src="../../../assets/images/photos/webp/Pinkiagarwalla.webp" loading="lazy" className="img-fluid d-flex mx-auto" />
                                            </div>
                                            <div className="text_area">
                                                <div className="card-title">Pinnkyy Agarrwal
                                                </div>
                                                <div className="card_sub_title">Mumbai, India
                                                </div>
                                                <div className="card-text">
                                                    Tried it out of desperation during
                                                    bad phase of my life and it really
                                                    helped as the astrologer listened to
                                                    my problem like a friend and then
                                                    assured me that everything will be
                                                    fine and
                                                    gave remedies. And when the things
                                                    are good now, I use it regularly as
                                                    they made me a believer.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide pr-4 col-md-4 col-12">
                                        <div className="card d-flex margin_left_right">
                                            <div className="card-image">
                                                <img alt="" height={150} width={150} src="../../../assets/images/photos/webp/poojatiwari.webp" loading="lazy" className="img-fluid d-flex mx-auto" />
                                            </div>
                                            <div className="text_area">
                                                <div className="card-title">Pooja Tiwari
                                                </div>
                                                <div className="card_sub_title">Pune,
                                                    India</div>
                                                <div className="card-text">
                                                    Brilliant user experience.From
                                                    the interface to app to ease of
                                                    asking a query to speaking to
                                                    well spoken and experience
                                                    astrologers. It was a delight.
                                                    Have used many astrology apps
                                                    but
                                                    this is something like Uber
                                                    experience. Great work
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide pr-4 col-md-4 col-12">
                                        <div className="card d-flex margin_left_right">
                                            <div className="card-image">
                                                <img alt="Prabha Rani" height={150} width={150} src="../../../assets/images/photos/webp/prabharani.webp" loading="lazy" className="img-fluid d-flex mx-auto" />
                                            </div>
                                            <div className="text_area">
                                                <div className="card-title">Prabha
                                                    Rani</div>
                                                <div className="card_sub_title">
                                                    London, UK</div>
                                                <div className="card-text">
                                                    AstroTalk is really helpful
                                                    for me in seeking astrology
                                                    advice from England at any
                                                    time. Thanks Guys, I am
                                                    really happy with the
                                                    service and support I get
                                                    from customer support and
                                                    Astrologers. Everyone is so
                                                    friendly and helpful.Very
                                                    good experience with the app
                                                    so far.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </app-our-customers>
            <app-blog>
                <section className="latest_from_blog_chinese ng-star-inserted">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 section-headings">
                                <h2 className="heading_seo_content_headline_chinese_horoscope">LATEST FROM
                                    BLOG</h2>
                                <h4 className="subheading_seo_content_headline_chinese_horoscope">Top
                                    Astrologers. 24 * 7 customer support. Happy to help</h4>
                            </div>
                        </div>
                        <Slider {...settings}>

                            <div>
                                <a target="_blank" className="blog_box_content" href="https://www.mobilegamingarcade.com/astrotalk.com/astrology-blog/know-your-lucky" title="Know Your Lucky ">
                                    <div className="blog_img_content">
                                        <img loading="lazy" alt="Know Your Lucky Numbers For 2022 As Per Numerology" src="https://www.mobilegamingarcade.com/astrotalk.com/uploads/BlogImage/2021/10/1634207717.jpg" />
                                    </div>
                                    {/* <div ="" className="views_blog_box"><i ="" className="fa fa-eye"></i><span ="">2050</span></div> */}
                                    <div className="description_blog">
                                        <div className="title_blog"> Know
                                            Your Lucky </div>
                                    </div>
                                    <div className="row_view_and_date">
                                        <div className="author_name_home_page">Pinnkyy Agarrwal</div>
                                        <div className="date_description_blog">2021-10-14</div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" className="blog_box_content" href="https://www.mobilegamingarcade.com/astrotalk.com/astrology-blog/navratri-2021-9-days-and-9-colours" title="Navratri 2021: 9 Days & 9 Colours">
                                    <div className="blog_img_content">
                                        <img loading="lazy" alt="Know Your Lucky Numbers For 2022 As Per Numerology" src="https://www.mobilegamingarcade.com/astrotalk.com/uploads/BlogImage/2021/10/1634211174.jpg" />
                                    </div>
                                    {/* <div className="views_blog_box"><i className="fa fa-eye"></i><span>2050</span></div> */}
                                    <div className="description_blog">
                                        <div className="title_blog">
                                            Navratri 2021: 9 Days &amp; 9 Colours</div>
                                    </div>
                                    <div className="row_view_and_date">
                                        <div className="author_name_home_page">Pinnkyy Agarrwal</div>
                                        <div className="date_description_blog">2021-10-14</div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" className="blog_box_content" href="https://www.mobilegamingarcade.com/astrotalk.com/astrology-blog/navratri-2021-9-days-and-9-colours-you-must-wear-to-please-devi-durga" title="10 Modern Lessons That You Can Learn From Maa Durga This Navratri">
                                    <div className="blog_img_content">
                                        <img loading="lazy" alt="Know Your Lucky Numbers For 2022 As Per Numerology" src="https://www.mobilegamingarcade.com/astrotalk.com/uploads/BlogImage/2021/10/1634207813.jpg" />
                                    </div>
                                    {/* <div ="" className="views_blog_box"><i ="" className="fa fa-eye"></i><span ="">2050</span></div> */}
                                    <div className="description_blog">
                                        <div className="title_blog"> 10
                                            Modern Lessons That You Can Learn From Maa Durga This
                                            Navratri</div>
                                    </div>
                                    <div className="row_view_and_date">
                                        <div className="author_name_home_page">Pinnkyy Agarrwal</div>
                                        <div className="date_description_blog">2021-10-14</div>
                                    </div>
                                </a>
                            </div>
                        </Slider>
                    </div>
                </section>

            </app-blog>
            <section className="faqs_about_astrology">
                <div className="container">
                    <h2 className="heading_faqs_about_astrology">
                        FAQ'S ABOUT ASTROLOGY
                        <span className="icons_saprate_image down_arrow_icon" />

                    </h2>
                    <h3 className="subheading_faqs_about_astrology">Why Is Astrology So Accurate?</h3>
                    <br />
                    <a href="mailto:mojoinnovative9@gmail.com" target="_blank">mojoinnovative9@gmail.com</a>

                    <div className="content_faqs_about_astrology hide">
                        <a href="mailto:mojoinnovative9@gmail.com" target="_blank">mojoinnovative9@gmail.com</a>
                        <p>
                            First of all, the credit for astrology and the predictions we make here being so accurate
                            goes to the 100s of learned and astrologically-versed astrologers we have on board. And to
                            answer what makes astrology
                            so accurate, then it is the pure knowledge of our astrologers about the planets, planetary
                            configurations, constellations and learning of how they influence human life and behaviour
                            as they move, shift or
                            even stay still. Astrology is not some random guesswork but science that entails scientific
                            principles that were sketched by learned Gurus 1000s of years ago and have not changed to
                            date. These gurus studied
                            the movement of planets and how their aura influences the life of people on earth. The
                            antiquity of astrology is revealed from the fact that millions of people continue to stay
                            connected with it due to the
                            accuracy it has to offer. Astrology has changed the lives of millions of people through us
                            and many other astrologers who continue to share their knowledge of astrology one prediction
                            at a time.
                        </p>
                        <p><strong>Why Should You Choose AstroTalk For An Astrology Horoscope?</strong></p>
                        <p>
                            From 4.8/5 Google Rating, 5/5 Facebook Rating to appreciation across various other
                            platforms, AstroTalk, over the years, has garnered a wide user base that is nothing but
                            satisfied with all the astrology
                            related material we have to offer. The process of recruiting the astrologers on the
                            AstroTalk platform is really stringent and only the best astrologers can make it to the
                            platform only to ensure you're
                            getting the best service each and every time you get along with us.
                        </p>
                        <p>The services we are talking about range across online Kundli matching, horoscope predictions,
                            daily horoscope, weekly horoscope, numerology, tarot reading, shopping, free blogs, and many
                            more services.</p>
                        <p>
                            Moreover, in case you bump into any sort of problem, you can directly connect with the CEO
                            to register the same with us. Providing exceptional service is our main motto and we ensure
                            that is achieved
                            whatsoever.
                        </p>
                        <p><strong>Is Astrology Prediction True?</strong></p>
                        <p>
                            Many people have misconceptions that an astrologer can tell them what exactly is going to
                            happen with them in the future or next moment, which is a wrong way to think about
                            astrology. Astrology predictions
                            are based on planetary movements. A planet moves from one house to another, one zodiac sign
                            to another, etc. These moments by plantes can either be good or unfavourable for the native.
                            For example, if say the
                            planet Mercury is camping in a friendly zodiac sign, the outcomes are to be good for the
                            native. Meanwhile, if the mercury is camping in an unfriendly zodiac sign, the outcome can
                            be critical. An astrologer,
                            based on calculations, notes down such shifts and traits and based on the same share with
                            you if your upcoming time would be good or tough. If you think this way, astrology
                            predictions ought to be true.
                            Accurate predictions are possible when you seek to know about things like upcoming shubh
                            muhurats, whether you are manglik or not?, etc.
                        </p>
                        <p><strong>How Can Online Astrology Help Me In Predicting The Future?</strong></p>
                        <p>
                            Online astrology can be of two types. One, you can visit a website and find astrology tools
                            available on the same. Then all you need to do is enter some details like your date of
                            birth, time of your birth,
                            place of birth, etc. and you will have for yourself a contentful report describing you
                            better than anyone else ever would. Meanwhile, the other way around is to directly get in
                            touch with the astrologers
                            (over a call or chat) we have on board to get the same information in a much detailed
                            manner. Online astrology may look modern but when it comes to making predictions about your
                            future, the old school way of
                            calculating the position of the stars and planets is used to provide you the most accurate
                            results. Simply say, online astrology is just a change of mode of communication between an
                            astrologer and the one who
                            seeks to know about their past, present and future. However, the ways to come to these
                            answers is still old school and one one of the most authentic one.
                        </p>
                        <p><strong>What Kind Of Questions Can I Ask To Online Astrologers?</strong></p>
                        <p>
                            Until you are being respectful and authentic about your queries, there isn't a limit to what
                            you can chat with an astrologer and what you can’t. Astrology has an answer for literally
                            anything and everything.
                            Starting right from your career to your love life or health, astrology can predict endless
                            queries. You can trust us when we say our astrologers have been inundated with some of the
                            most difficult questions,
                            which they have answered with ease.
                        </p>
                        <p>
                            Are you a manglik? An astrologer can help you find that. Or what the shubh muhurat for
                            getting married? Or what are the chances of you improving your financial position in the
                            years to come? Our astrologers
                            can answer all such questions by simply calculating the position of the planets and
                            combining them with numerous factors like your nakshatra, zodiac signs, houses in astrology
                            and more.
                        </p>
                        <p><strong>What Is The Duration For Online Astrology Consultation?</strong></p>
                        <p>Astrology has no limits and nor do we. We have so many astrologers on board with whom you can
                            connect and ask questions to. They would help you with all your queries without any time
                            limit intact.</p>
                        <p><strong>Can Astrology Predictions Be Changed?</strong></p>
                        <p>Astrological predictions may change in several cases:</p>
                        <p>The first is when an astrologer unintentionally makes a mistake in locating the position of
                            the planets. In such a case, the predictions can go wrong.</p>
                        <p>Secondly, if you have provided the wrong information, especially the date and time of your
                            birth, then astrology predictions are subject to change.</p>
                        <p>
                            The third situation when astrology predictions can go wrong is when you try to change
                            yourself for good or bad. Many of you must be thinking that how an astrological prediction
                            can change when it is mostly
                            based on the movement of planets (which does not change)? Well, there is more to it. Every
                            planet rules some good traits and bad traits. And it’s your deeds that decides which traits
                            of the planet will become
                            powerful. So for example, if you are a careless person as of now with Mercury as your ruling
                            planet, you are unable to gain the good effects of Mercury. However, if you try to change
                            yourself with time, the
                            good traits of Mercury will eventually reflect in your chart and personality thus changing
                            the astrology prediction.
                        </p>
                        <p><strong>Can Astrology Predict About Lottery Winning?</strong></p>
                        <p>
                            Astrology can’t predict if you will win a lottery today or not but it can surely help you
                            predict what are your chances to win a lottery. Also, numerology is another form of
                            prediction that can help you with
                            lucky numbers prospects, which can eventually help you decide what number you can go with to
                            get lucky with winning a lottery.
                        </p>
                        <p><strong>What Benefits Can I Expect If I Avail Astrology Services?</strong></p>
                        <p>
                            First of all, if you are new to our platforms, you get a flat 50% discount on your first
                            prediction. So that’s some savings. Secondly, using the insights provided by our astrologers
                            about your future or the
                            present self, you can be careful in terms that will help you deal with major problems, which
                            could be finance-related, career-related, love related etc.
                        </p>
                        <p>
                            By seeing your astrological chart, an astrologer can not only predict about you but also
                            about your behaviour towards your family, your relatives, your colleagues and more. Learning
                            about these behaviours can
                            help you better present yourself in front of people that matter. This way, astrology can
                            positively help you improve your personality among uncountable goods it can do to you. For
                            more details about astrology
                            and future predictions, you can talk to astrologer.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home