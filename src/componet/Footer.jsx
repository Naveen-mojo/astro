import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row" style={{ fontSize: '12px !important' }}>
              <div className="col-lg-3 col-md-12 footer-about wow fadeInUp animated fade_class_up">
                <h3>About Astrotalk</h3>
                <p style={{ textAlign: 'justify' }}>
                  AstroTalk is the best astrology website for online Astrology predictions. Talk to
                  Astrologer on call and get answers to all your worries by seeing the future life
                  through Astrology Kundli Predictions
                  from the best Astrologers from India. Get best future predictions related to
                  Marriage, love life, Career or Health over call, chat, query or report.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 padding_left_side footer-contact wow fadeInDown animated fade_class_down">
                <h3>Contact us</h3>
                <p><i className="fa fa-phone" /> Phone: +91 960
                  604 7081</p>
                <div className="row">
                  <div className="col footer-social">
                    <a target="_blank" href="#"><i className="fa fa-facebook-f" /></a>
                    <a target="_blank" href="#"><i className="fa fa-twitter" /></a>
                    <a target="_blank" href="#"><i className="fa fa-instagram" /></a>
                    <a target="_blank" href="#"><i className="fa fa-linkedin" /></a>
                    <a target="_blank" href="#"><i className="fa fa-youtube" /></a>
                  </div>
                </div>
                <div className="row btns_app_mr_btm">
                  <div className="play_store col-4 col-sm-4 col-md-4 col-lg-6">
                    <a href="https://play.google.com/store/apps/details?id=com.astrotalk" target="_blank" rel="noopener noreferrer">
                      <span className="icons_saprate_image google_play_store_icon" />
                    </a>
                  </div>
                  <div className="play_store col-4 col-sm-4 col-md-4 col-lg-6 minus_left_mrgn">
                    <a href="https://itunes.apple.com/in/app/theastrotalk/id1208433822?mt=8" target="_blank" rel="noopener noreferrer">
                      <span className="icons_saprate_image app_store_icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 footer-links wow fadeInUp animated fade_class_up">
                <div className="row">
                  <div className="col">
                    <h3>Links</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p><a target="_blank" href="https://www.mobilegamingarcade.com/astrotalk.com/horoscope/daily-horoscope">Daily
                      Horoscope</a></p>
                    <p><a target="_blank" href="https://www.mobilegamingarcade.com/astrotalk.com/horoscope-2022">Horoscope
                      2022</a></p>
                    <p><a target="_blank" href="https://www.mobilegamingarcade.com/astrotalk.com//shubh-muhurat-2022">Shubh
                      Muhurat 2022</a></p>
                    <p><a target="_blank" href="https://www.mobilegamingarcade.com/astrotalk.com//indian-calendar-festivals-2022">Festival
                      2022</a></p>
                  </div>
                  <div className="col-6">
                    <p><a target="_blank" href="#">Terms
                      &amp; Conditions</a></p>
                    <p><a target="_blank" href="https://www.mobilegamingarcade.com/astrotalk.com/info-page">Privacy
                      Policy</a></p>
                    <p><Link target='_blank' to="/astro/login">Astrologer
                      Login</Link></p>
                    <p><Link to="/astro/signup">Astrologer
                      Registration</Link></p>
                    <p><a target="_blank" href="#">Disclaimer</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy-cntr">
        <div className="container text-center">
          <p>Copyright
            <i aria-hidden="true" className="fa fa-copyright" />
            www.mobilegamingarcade.com</p>
        </div>
      </div>
    </>
  )
}

export default Footer