import React from 'react'
import matchMakingImg from '../assest/images/matchmaking.png'

export default function MatchMaking() {
  const myFunction = () => {

  }
  return (
    <div className="ng-star-inserted">
      <section className="chinese_horoscope_section desktop_view_chinese_horoscope">
        <div className="header_chinese_horoscope">
          <div className="container">
            <div className="header_contant_chinese">
              <div className="left_side_text_chinese">
                <h1 >Match Making</h1>
                <h2 >Find your right one,</h2>
                <h2 >through matchmaking</h2>
              </div>
              <div className="right_side_image_chinese">
                <img src={matchMakingImg} alt="matchMaking-icon" /></div>
            </div>
          </div>
        </div>
        <div className="bread">
          <div className="container">
            <ul id="breadcrumbs-two" className="ng-star-inserted">
              <li >
                <a href="https://www.mobilegamingarcade.com/astrotalk.com/matchmaking"><i className="fa fa-home" /></a>
              </li>
              <li ><a className="current active text-capitalize">Match Making</a></li>
            </ul>

          </div>
        </div>
      </section>
      <section className="free_kundli_section desktop_view_horoscope_matching">
        <div className="container">
          <div className="justify_content_center_kundli">
            <form className="ng-untouched ng-pristine ng-invalid" action="matchmaking/match-making-details" method="POST">
              <div className="row">
                <div className="col-md-8">
                  <h2 className="sub_heading_horoscope_matching">Fill
                    Up Partner's Detail</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="open_kundli_section">
                        <div className="background_open_kundli matching">
                          <div className="col-md-12">
                            <div className="lable_form">
                              <label htmlFor="user_name">Name</label>
                            </div>
                            <div className="input_form">
                              <input type="text" name="m_name" id="user_name" required placeholder="Enter name" className="ng-untouched ng-pristine ng-invalid" />
                            </div>
                          </div>
                          <div className="col-md-12 form-group">
                            <div className="lable_form">
                              <label htmlFor="gender_boy">Gender</label>
                            </div>
                            <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="gender_boy" id="gender_boy" required className="mat-select form-control ng-tns-c74-43 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-85" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

                              <option className="mat-select-min-line ng-tns-c74-43 ng-star-inserted" value="Male">Male</option>



                            </select>
                          </div>
                          <div className="row">
                            <div className="col-md-4 form-group">
                              <div className="lable_form">
                                <label htmlFor="day_boy">Birth Day</label>
                              </div>
                              <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="m_day" id="day_boy" required className="mat-select form-control ng-tns-c74-44 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-87" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" disabled="disabled">Day</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={1}>1</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={2}>2</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={3}>3</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={4}>4</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={5}>5</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={6}>6</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={7}>7</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={8}>8</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={9}>9</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={10}>10</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={11}>11</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={12}>12</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={13}>13</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={14}>14</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={15}>15</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={16}>16</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={17}>17</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={18}>18</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={19}>19</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={20}>20</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={21}>21</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={22}>22</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={23}>23</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={24}>24</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={25}>25</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={26}>26</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={27}>27</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={28}>28</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={29}>29</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={30}>30</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={31}>31</option>



                              </select>
                            </div>
                            <div className="col-md-4 form-group">
                              <div className="lable_form">
                                <label htmlFor="month_boy">Birth Month</label>
                              </div>
                              <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="m_month" id="month_boy" required className="mat-select form-control ng-tns-c74-45 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-89" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" disabled="disabled">Month</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={1}>Jan</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={2}>Feb</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={3}>Mar</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={4}>Apr</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={5}>May</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={6}>June</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={7}>July</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={8}>Aug</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={9}>Sep</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={10}>Oct</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={11}>Nov</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={12}>Dec</option>



                              </select>
                            </div>
                            <div className="col-md-4 form-group">
                              <div className="lable_form">
                                <label htmlFor="year_boy">Birth Year</label>
                              </div>
                              <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="m_year" id="year_boy" required className="mat-select form-control ng-tns-c74-46 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-91" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" disabled="disabled">Year</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1928}>1928</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1929}>1929</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1930}>1930</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1931}>1931</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1932}>1932</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1933}>1933</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1934}>1934</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1935}>1935</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1936}>1936</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1937}>1937</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1938}>1938</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1939}>1939</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1940}>1940</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1941}>1941</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1942}>1942</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1943}>1943</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1944}>1944</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1945}>1945</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1946}>1946</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1947}>1947</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1948}>1948</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1949}>1949</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1950}>1950</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1951}>1951</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1952}>1952</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1953}>1953</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1954}>1954</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1955}>1955</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1956}>1956</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1957}>1957</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1958}>1958</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1959}>1959</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1960}>1960</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1961}>1961</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1962}>1962</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1963}>1963</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1964}>1964</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1965}>1965</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1966}>1966</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1967}>1967</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1968}>1968</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1969}>1969</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1970}>1970</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1971}>1971</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1972}>1972</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1973}>1973</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1974}>1974</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1975}>1975</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1976}>1976</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1977}>1977</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1978}>1978</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1979}>1979</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1980}>1980</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1981}>1981</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1982}>1982</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1983}>1983</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1984}>1984</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1985}>1985</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1986}>1986</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1987}>1987</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1988}>1988</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1989}>1989</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1990}>1990</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1991}>1991</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1992}>1992</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1993}>1993</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1994}>1994</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1995} selected>1995</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1996}>1996</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1997}>1997</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1998}>1998</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1999}>1999</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2000}>2000</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2001}>2001</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2002}>2002</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2003}>2003</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2004}>2004</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2005}>2005</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2006}>2006</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2007}>2007</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2008}>2008</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2009}>2009</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2010}>2010</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2011}>2011</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2012}>2012</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2013}>2013</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2014}>2014</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2015}>2015</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2016}>2016</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2017}>2017</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2018}>2018</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2019}>2019</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2020}>2020</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2021}>2021</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2022}>2022</option>



                              </select>
                            </div>
                            <div className="col-md-4 form-group">
                              <div className="lable_form">
                                <label htmlFor="hour_boy">Birth Hour</label>
                              </div>
                              <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="m_hour" id="hour_boy" required className="mat-select form-control ng-tns-c74-47 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-93" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" disabled="disabled">Hour</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={0}>0</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={1} selected>1</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={2}>2</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={3}>3</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={4}>4</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={5}>5</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={6}>6</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={7}>7</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={8}>8</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={9}>9</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={10}>10</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={11}>11</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={12}>12</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={13}>13</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={14}>14</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={15}>15</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={16}>16</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={17}>17</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={18}>18</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={19}>19</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={20}>20</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={21}>21</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={22}>22</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={23}>23</option>


                              </select>
                            </div>
                            <div className="col-md-4 form-group">
                              <div className="lable_form">
                                <label htmlFor="min_boy">Birth Minute</label>
                              </div>
                              <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="m_min" id="min_boy" required className="mat-select form-control ng-tns-c74-48 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-95" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" disabled="disabled">Minute</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={0}>0</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={1} selected>1</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={2}>2</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={3}>3</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={4}>4</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={5}>5</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={6}>6</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={7}>7</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={8}>8</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={9}>9</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={10}>10</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={11}>11</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={12}>12</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={13}>13</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={14}>14</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={15}>15</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={16}>16</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={17}>17</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={18}>18</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={19}>19</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={20}>20</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={21}>21</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={22}>22</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={23}>23</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={24}>24</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={25}>25</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={26}>26</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={27}>27</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={28}>28</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={29}>29</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={30}>30</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={31}>31</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={32}>32</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={33}>33</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={34}>34</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={35}>35</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={36}>36</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={37}>37</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={38}>38</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={39}>39</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={40}>40</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={41}>41</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={42}>42</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={43}>43</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={44}>44</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={45}>45</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={46}>46</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={47}>47</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={48}>48</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={49}>49</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={50}>50</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={51}>51</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={52}>52</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={53}>53</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={54}>54</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={55}>55</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={56}>56</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={57}>57</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={58}>58</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={59}>59</option>



                              </select>
                            </div>
                            <div className="col-md-4 form-group">
                              <div className="lable_form">
                                <label htmlFor="sec_boy">Birth Second</label>
                              </div>
                              <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="m_sec" id="sec_boy" required className="mat-select form-control ng-tns-c74-49 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-97" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" disabled="disabled">Second</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={0}>0</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={1} selected>1</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={2}>2</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={3}>3</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={4}>4</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={5}>5</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={6}>6</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={7}>7</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={8}>8</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={9}>9</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={10}>10</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={11}>11</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={12}>12</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={13}>13</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={14}>14</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={15}>15</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={16}>16</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={17}>17</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={18}>18</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={19}>19</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={20}>20</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={21}>21</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={22}>22</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={23}>23</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={24}>24</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={25}>25</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={26}>26</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={27}>27</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={28}>28</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={29}>29</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={30}>30</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={31}>31</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={32}>32</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={33}>33</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={34}>34</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={35}>35</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={36}>36</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={37}>37</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={38}>38</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={39}>39</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={40}>40</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={41}>41</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={42}>42</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={43}>43</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={44}>44</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={45}>45</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={46}>46</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={47}>47</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={48}>48</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={49}>49</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={50}>50</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={51}>51</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={52}>52</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={53}>53</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={54}>54</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={55}>55</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={56}>56</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={57}>57</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={58}>58</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={59}>59</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="lable_form">
                              <label htmlFor="place_boy">Birth Place</label>
                            </div>
                            <div className="input_form">
                              <input type="search" name="place_boy" id="place_m_id" required className="mat-autocomplete-trigger ng-untouched ng-pristine ng-valid" placeholder="Enter your birth place" autoComplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" list="citylisting_male" onKeyUp={myFunction('place_m_id', 'citylisting_male')} />
                              <input type="hidden" id="m_lat" name="m_lat" />
                              <input type="hidden" id="m_lon" name="m_lon" />
                              <input type="hidden" id="m_tzone" name="m_tzone" />

                              <datalist id="citylisting_male">
                              </datalist>
                              <mat-autocomplete className="mat-autocomplete">

                              </mat-autocomplete>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="open_kundli_section">
                        <div className="background_open_kundli matching">
                          <div className="col-md-12">
                            <div className="lable_form">
                              <label htmlFor="girl_name">Name</label>
                            </div>
                            <div className="input_form">
                              <input type="text" name="f_name" id="girl_name" required placeholder="Enter name" className="ng-untouched ng-pristine ng-invalid" />
                            </div>
                          </div>
                          <div className="col-md-12 form-group">
                            <div className="lable_form">
                              <label htmlFor="gender_girl">Gender</label>
                            </div>
                            <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="gender_girl" id="gender_girl" required className="mat-select form-control ng-tns-c74-50 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-99" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

                              <option className="mat-select-min-line ng-tns-c74-50 ng-star-inserted">Female</option>



                            </select>
                          </div>
                          <div className="row">
                            <div className="col-md-4 form-group">
                              <div className="lable_form">
                                <label htmlFor="girl_day">Birth Day</label>
                              </div>
                              <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="f_day" id="girl_day" required className="mat-select form-control ng-tns-c74-51 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-101" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" disabled="disabled">Day</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={1}>1</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={2}>2</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={3}>3</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={4}>4</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={5}>5</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={6}>6</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={7}>7</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={8}>8</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={9}>9</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={10}>10</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={11}>11</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={12}>12</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={13}>13</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={14}>14</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={15}>15</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={16}>16</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={17}>17</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={18}>18</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={19}>19</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={20}>20</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={21}>21</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={22}>22</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={23}>23</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={24}>24</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={25}>25</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={26}>26</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={27}>27</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={28}>28</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={29}>29</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={30}>30</option>
                                <option className="mat-select-min-line ng-tns-c74-44 ng-star-inserted" value={31}>31</option>



                              </select>
                            </div>
                            <div className="col-md-4 form-group">
                              <div className="lable_form">
                                <label htmlFor="month_girl">Birth Month</label>
                              </div>
                              <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="f_month" id="month_girl" required className="mat-select form-control ng-tns-c74-52 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-103" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" disabled="disabled">Month</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={1}>Jan</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={2}>Feb</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={3}>Mar</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={4}>Apr</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={5}>May</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={6}>June</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={7}>July</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={8}>Aug</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={9}>Sep</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={10}>Oct</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={11}>Nov</option>
                                <option className="mat-select-min-line ng-tns-c74-45 ng-star-inserted" value={12}>Dec</option>



                              </select>
                            </div>
                            <div className="col-md-4 form-group">
                              <div className="lable_form">
                                <label htmlFor="year_girl">Birth Year</label>
                              </div>
                              <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="f_year" id="year_girl" required className="mat-select form-control ng-tns-c74-53 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-105" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" disabled="disabled">Year</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1928}>1928</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1929}>1929</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1930}>1930</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1931}>1931</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1932}>1932</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1933}>1933</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1934}>1934</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1935}>1935</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1936}>1936</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1937}>1937</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1938}>1938</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1939}>1939</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1940}>1940</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1941}>1941</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1942}>1942</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1943}>1943</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1944}>1944</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1945}>1945</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1946}>1946</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1947}>1947</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1948}>1948</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1949}>1949</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1950}>1950</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1951}>1951</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1952}>1952</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1953}>1953</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1954}>1954</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1955}>1955</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1956}>1956</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1957}>1957</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1958}>1958</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1959}>1959</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1960}>1960</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1961}>1961</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1962}>1962</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1963}>1963</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1964}>1964</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1965}>1965</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1966}>1966</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1967}>1967</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1968}>1968</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1969}>1969</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1970}>1970</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1971}>1971</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1972}>1972</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1973}>1973</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1974}>1974</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1975}>1975</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1976}>1976</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1977}>1977</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1978}>1978</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1979}>1979</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1980}>1980</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1981}>1981</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1982}>1982</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1983}>1983</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1984}>1984</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1985}>1985</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1986}>1986</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1987}>1987</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1988}>1988</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1989}>1989</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1990}>1990</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1991}>1991</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1992}>1992</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1993}>1993</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1994}>1994</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1995} selected>1995</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1996}>1996</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1997}>1997</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1998}>1998</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={1999}>1999</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2000}>2000</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2001}>2001</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2002}>2002</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2003}>2003</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2004}>2004</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2005}>2005</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2006}>2006</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2007}>2007</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2008}>2008</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2009}>2009</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2010}>2010</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2011}>2011</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2012}>2012</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2013}>2013</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2014}>2014</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2015}>2015</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2016}>2016</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2017}>2017</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2018}>2018</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2019}>2019</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2020}>2020</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2021}>2021</option>
                                <option className="mat-select-min-line ng-tns-c74-46 ng-star-inserted" value={2022}>2022</option>



                              </select>
                            </div>
                            <div className="col-md-4 form-group">
                              <div className="lable_form">
                                <label htmlFor="hour_girl">Birth Hour</label>
                              </div>
                              <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="f_hour" id="hour_girl" required className="mat-select form-control ng-tns-c74-54 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-107" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" disabled="disabled">Hour</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={0}>0</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={1} selected>1</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={2}>2</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={3}>3</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={4}>4</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={5}>5</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={6}>6</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={7}>7</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={8}>8</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={9}>9</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={10}>10</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={11}>11</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={12}>12</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={13}>13</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={14}>14</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={15}>15</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={16}>16</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={17}>17</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={18}>18</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={19}>19</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={20}>20</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={21}>21</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={22}>22</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={23}>23</option>



                              </select>
                            </div>
                            <div className="col-md-4 form-group">
                              <div className="lable_form">
                                <label htmlFor="min_girl">Birth Minute</label>
                              </div>
                              <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="f_min" id="min_girl" required className="mat-select form-control ng-tns-c74-55 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-109" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" disabled="disabled">Minute</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={0}>0</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={1} selected>1</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={2}>2</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={3}>3</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={4}>4</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={5}>5</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={6}>6</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={7}>7</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={8}>8</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={9}>9</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={10}>10</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={11}>11</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={12}>12</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={13}>13</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={14}>14</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={15}>15</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={16}>16</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={17}>17</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={18}>18</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={19}>19</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={20}>20</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={21}>21</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={22}>22</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={23}>23</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={24}>24</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={25}>25</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={26}>26</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={27}>27</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={28}>28</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={29}>29</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={30}>30</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={31}>31</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={32}>32</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={33}>33</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={34}>34</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={35}>35</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={36}>36</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={37}>37</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={38}>38</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={39}>39</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={40}>40</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={41}>41</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={42}>42</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={43}>43</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={44}>44</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={45}>45</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={46}>46</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={47}>47</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={48}>48</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={49}>49</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={50}>50</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={51}>51</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={52}>52</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={53}>53</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={54}>54</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={55}>55</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={56}>56</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={57}>57</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={58}>58</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={59}>59</option>



                              </select>
                            </div>
                            <div className="col-md-4 form-group">
                              <div className="lable_form">
                                <label htmlFor="sec_girl">Birth Second</label>
                              </div>
                              <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="f_sec" id="sec_girl" required className="mat-select form-control ng-tns-c74-56 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-111" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" disabled="disabled">Second</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={0}>0</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={1} selected>1</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={2}>2</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={3}>3</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={4}>4</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={5}>5</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={6}>6</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={7}>7</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={8}>8</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={9}>9</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={10}>10</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={11}>11</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={12}>12</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={13}>13</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={14}>14</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={15}>15</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={16}>16</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={17}>17</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={18}>18</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={19}>19</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={20}>20</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={21}>21</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={22}>22</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={23}>23</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={24}>24</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={25}>25</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={26}>26</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={27}>27</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={28}>28</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={29}>29</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={30}>30</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={31}>31</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={32}>32</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={33}>33</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={34}>34</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={35}>35</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={36}>36</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={37}>37</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={38}>38</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={39}>39</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={40}>40</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={41}>41</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={42}>42</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={43}>43</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={44}>44</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={45}>45</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={46}>46</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={47}>47</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={48}>48</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={49}>49</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={50}>50</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={51}>51</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={52}>52</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={53}>53</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={54}>54</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={55}>55</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={56}>56</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={57}>57</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={58}>58</option>
                                <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" value={59}>59</option>



                              </select>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="lable_form">
                              <label htmlFor="place_girl">Birth Place</label>
                            </div>
                            <div className="input_form">
                              <input type="search" name="place_girl" id="place_f_id" required className="mat-autocomplete-trigger ng-untouched ng-pristine ng-valid" placeholder="Enter your birth place" autoComplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" list="citylisting_female" onKeyUp={myFunction('place_f_id', 'citylisting_female')} />
                              <datalist id="citylisting_female">
                              </datalist>
                              <input type="hidden" id="f_lat" name="f_lat" />
                              <input type="hidden" id="f_lon" name="f_lon" />
                              <input type="hidden" id="f_tzone" name="f_tzone" />

                              <mat-autocomplete className="mat-autocomplete">

                              </mat-autocomplete>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="generate_horoscope_btn adjust_margin_btn">Match Horoscope</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <h2 className="sub_heading_horoscope_matching">Saved Matches</h2>
                  <div className="open_kundli_section">
                    <div className="background_open_kundli savedMatching">



                      <div className="height_set_kundli_please_login ng-star-inserted">
                        <div className="centered mt-0">
                          <div className="no-data-found d-inline-block">
                            <p >Please login to
                              check your saved horoscope!</p>
                            <div className="buttons">
                              <div className="contact_btn btnn btn d-inline-block pt-1">
                                <a id="loginButton" className="text-center ng-tns-c149-0" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-user ng-tns-c149-0" />
                                  login</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="mobile_view_chinese_horoscope">
        <div className="header_chinese_horoscope_mbl_view">
          <div className="container">
            <div className="header_contant_chinese_mbl_view">
              <div className="left_side_text_chinese_mbl_view">
                <h1 >Match Making</h1>
                <h2 >Find Your Right One,</h2>
                <h2 >Through Matchmaking</h2>
              </div>
              <div className="right_side_text_chinese_mbl_view">
                <img src="./assets/images/kundli_section/match making.png" alt="matchMaking-icon" /></div>
            </div>
          </div>
        </div>
      </section>
      <section className="free_kundli_section mobile_view_horoscope_matching">
        <div className="container">
          <div className="justify_content_center_kundli">
            <div className="row">
              <div className="col-md-12">
                <nav >
                  <div id="nav-tab" role="tablist" className="nav nav-tabs row_tabs_kundli">
                    <button id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" className="custom_tabs_kundli active font_size_increase">
                      New Match
                    </button>
                    <button id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" className="custom_tabs_kundli font_size_increase">
                      Saved Matches
                    </button>
                  </div>
                </nav>
                <div id="nav-tabContent" className="tab-content">
                  <div id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" className="tab-pane fade show active">
                    <div className="row">
                      <form className="ng-untouched ng-pristine ng-invalid">
                        <div className="col-md-6 free_kundli_form margin_from_set">
                          <div className="new_kundli_section">
                            <div className="row">
                              <div className="col-md-12">
                                <h2 className="gender_details_heading">Partner's
                                  Details</h2>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="name_boy_m">Name</label>
                                </div>
                                <div className="input_form">
                                  <input type="text" id="name_boy_m" name="name_boy_m" placeholder="Enter name" className="ng-untouched ng-pristine ng-valid" />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="gender_boy_m">Gender</label>
                                </div>
                                <mat-select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="gender_boy_m" id="gender_boy_m" required className="mat-select form-control ng-tns-c74-57 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-113" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                                  <div className="mat-select-trigger ng-tns-c74-57">
                                    <div className="mat-select-value ng-tns-c74-57" id="mat-select-value-113">

                                      <span className="mat-select-value-text ng-tns-c74-57 ng-star-inserted">
                                        <span className="mat-select-min-line ng-tns-c74-57 ng-star-inserted">Male</span>


                                      </span>

                                    </div>
                                    <div className="mat-select-arrow-wrapper ng-tns-c74-57">
                                      <div className="mat-select-arrow ng-tns-c74-57">
                                      </div>
                                    </div>
                                  </div>

                                </mat-select>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="boy_date_m">Birth Date</label>
                                </div>
                                <div className="input_form">
                                  <mat-select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="boy_date_m" id="boy_date_m" required className="mat-select form-control ng-tns-c74-58 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-115" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                                    <div className="mat-select-trigger ng-tns-c74-58">
                                      <div className="mat-select-value ng-tns-c74-58" id="mat-select-value-115">

                                        <span className="mat-select-value-text ng-tns-c74-58 ng-star-inserted">
                                          <span className="mat-select-min-line ng-tns-c74-58 ng-star-inserted">1</span>


                                        </span>

                                      </div>
                                      <div className="mat-select-arrow-wrapper ng-tns-c74-58">
                                        <div className="mat-select-arrow ng-tns-c74-58">
                                        </div>
                                      </div>
                                    </div>

                                  </mat-select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="boy_month_m">Birth Month</label>
                                </div>
                                <div className="input_form">
                                  <mat-select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="boy_month_m" id="boy_month_m" required className="mat-select form-control ng-tns-c74-59 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-117" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                                    <div className="mat-select-trigger ng-tns-c74-59">
                                      <div className="mat-select-value ng-tns-c74-59" id="mat-select-value-117">

                                        <span className="mat-select-value-text ng-tns-c74-59 ng-star-inserted">
                                          <span className="mat-select-min-line ng-tns-c74-59 ng-star-inserted">Jan</span>


                                        </span>

                                      </div>
                                      <div className="mat-select-arrow-wrapper ng-tns-c74-59">
                                        <div className="mat-select-arrow ng-tns-c74-59">
                                        </div>
                                      </div>
                                    </div>

                                  </mat-select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="year_boy_m">Birth Year</label>
                                </div>
                                <div className="input_form">
                                  <mat-select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="year_boy_m" id="year_boy_m" required className="mat-select form-control ng-tns-c74-60 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-119" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                                    <div className="mat-select-trigger ng-tns-c74-60">
                                      <div className="mat-select-value ng-tns-c74-60" id="mat-select-value-119">

                                        <span className="mat-select-value-text ng-tns-c74-60 ng-star-inserted">
                                          <span className="mat-select-min-line ng-tns-c74-60 ng-star-inserted">1990</span>


                                        </span>

                                      </div>
                                      <div className="mat-select-arrow-wrapper ng-tns-c74-60">
                                        <div className="mat-select-arrow ng-tns-c74-60">
                                        </div>
                                      </div>
                                    </div>

                                  </mat-select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="hour_boy_m">Birth Hour</label>
                                </div>
                                <div className="input_form">
                                  <mat-select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="hour_boy_m" id="hour_boy_m" required className="mat-select form-control ng-tns-c74-61 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-121" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                                    <div className="mat-select-trigger ng-tns-c74-61">
                                      <div className="mat-select-value ng-tns-c74-61" id="mat-select-value-121">

                                        <span className="mat-select-value-text ng-tns-c74-61 ng-star-inserted">
                                          <span className="mat-select-min-line ng-tns-c74-61 ng-star-inserted">1</span>


                                        </span>

                                      </div>
                                      <div className="mat-select-arrow-wrapper ng-tns-c74-61">
                                        <div className="mat-select-arrow ng-tns-c74-61">
                                        </div>
                                      </div>
                                    </div>

                                  </mat-select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="minute_boy_m">Birth Minute</label>
                                </div>
                                <div className="input_form">
                                  <mat-select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="minute_boy_m" id="minute_boy_m" required className="mat-select form-control ng-tns-c74-62 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-123" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                                    <div className="mat-select-trigger ng-tns-c74-62">
                                      <div className="mat-select-value ng-tns-c74-62" id="mat-select-value-123">

                                        <span className="mat-select-value-text ng-tns-c74-62 ng-star-inserted">
                                          <span className="mat-select-min-line ng-tns-c74-62 ng-star-inserted">1</span>


                                        </span>

                                      </div>
                                      <div className="mat-select-arrow-wrapper ng-tns-c74-62">
                                        <div className="mat-select-arrow ng-tns-c74-62">
                                        </div>
                                      </div>
                                    </div>

                                  </mat-select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="sec_boy_m">Birth Second</label>
                                </div>
                                <div className="input_form">
                                  <mat-select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="sec_boy_m" id="sec_boy_m" required className="mat-select form-control ng-tns-c74-63 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-125" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                                    <div className="mat-select-trigger ng-tns-c74-63">
                                      <div className="mat-select-value ng-tns-c74-63" id="mat-select-value-125">

                                        <span className="mat-select-value-text ng-tns-c74-63 ng-star-inserted">
                                          <span className="mat-select-min-line ng-tns-c74-63 ng-star-inserted">1</span>


                                        </span>

                                      </div>
                                      <div className="mat-select-arrow-wrapper ng-tns-c74-63">
                                        <div className="mat-select-arrow ng-tns-c74-63">
                                        </div>
                                      </div>
                                    </div>

                                  </mat-select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="place_boy_m">Birth Place</label>
                                </div>
                                <div className="input_form">
                                  <input type="search" name="place_boy_m" id="place_boy_m" required className="mat-autocomplete-trigger ng-untouched ng-pristine ng-valid" placeholder="Enter your birth place" autoComplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" />

                                  <mat-autocomplete className="mat-autocomplete">

                                  </mat-autocomplete>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 free_kundli_form margin_from_set">
                          <div className="new_kundli_section">
                            <div className="row">
                              <div className="col-12">
                                <h2 className="gender_details_heading">Match
                                  With?</h2>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="girl_name_m">Name</label>
                                </div>
                                <div className="input_form">
                                  <input type="text" name="girl_name_m" id="girl_name_m" required placeholder="Enter name" className="ng-untouched ng-pristine ng-invalid" />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="gender_girl_m">Gender</label>
                                </div>
                                <mat-select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="gender_girl_m" id="gender_girl_m" required className="mat-select form-control ng-tns-c74-64 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-127" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                                  <div className="mat-select-trigger ng-tns-c74-64">
                                    <div className="mat-select-value ng-tns-c74-64" id="mat-select-value-127">

                                      <span className="mat-select-value-text ng-tns-c74-64 ng-star-inserted">
                                        <span className="mat-select-min-line ng-tns-c74-64 ng-star-inserted">Female</span>


                                      </span>

                                    </div>
                                    <div className="mat-select-arrow-wrapper ng-tns-c74-64">
                                      <div className="mat-select-arrow ng-tns-c74-64">
                                      </div>
                                    </div>
                                  </div>

                                </mat-select>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="girl_date_m">Birth Date</label>
                                </div>
                                <div className="input_form">
                                  <mat-select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="day_girl_m" id="girl_date_m" required className="mat-select form-control ng-tns-c74-65 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-129" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                                    <div className="mat-select-trigger ng-tns-c74-65">
                                      <div className="mat-select-value ng-tns-c74-65" id="mat-select-value-129">

                                        <span className="mat-select-value-text ng-tns-c74-65 ng-star-inserted">
                                          <span className="mat-select-min-line ng-tns-c74-65 ng-star-inserted">1</span>


                                        </span>

                                      </div>
                                      <div className="mat-select-arrow-wrapper ng-tns-c74-65">
                                        <div className="mat-select-arrow ng-tns-c74-65">
                                        </div>
                                      </div>
                                    </div>

                                  </mat-select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="girl_month_m">Birth Month</label>
                                </div>
                                <div className="input_form">
                                  <mat-select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="girl_month_m" id="girl_month_m" required className="mat-select form-control ng-tns-c74-66 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-131" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                                    <div className="mat-select-trigger ng-tns-c74-66">
                                      <div className="mat-select-value ng-tns-c74-66" id="mat-select-value-131">

                                        <span className="mat-select-value-text ng-tns-c74-66 ng-star-inserted">
                                          <span className="mat-select-min-line ng-tns-c74-66 ng-star-inserted">Jan</span>


                                        </span>

                                      </div>
                                      <div className="mat-select-arrow-wrapper ng-tns-c74-66">
                                        <div className="mat-select-arrow ng-tns-c74-66">
                                        </div>
                                      </div>
                                    </div>

                                  </mat-select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="year_girl_m">Birth Year</label>
                                </div>
                                <div className="input_form">
                                  <mat-select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="year_girl_m" id="year_girl_m" required className="mat-select form-control ng-tns-c74-67 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-133" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                                    <div className="mat-select-trigger ng-tns-c74-67">
                                      <div className="mat-select-value ng-tns-c74-67" id="mat-select-value-133">

                                        <span className="mat-select-value-text ng-tns-c74-67 ng-star-inserted">
                                          <span className="mat-select-min-line ng-tns-c74-67 ng-star-inserted">1992</span>


                                        </span>

                                      </div>
                                      <div className="mat-select-arrow-wrapper ng-tns-c74-67">
                                        <div className="mat-select-arrow ng-tns-c74-67">
                                        </div>
                                      </div>
                                    </div>

                                  </mat-select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="hour_girl_m">Birth Hour</label>
                                </div>
                                <div className="input_form">
                                  <mat-select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="hour_girl_m" id="hour_girl_m" required className="mat-select form-control ng-tns-c74-68 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-135" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                                    <div className="mat-select-trigger ng-tns-c74-68">
                                      <div className="mat-select-value ng-tns-c74-68" id="mat-select-value-135">

                                        <span className="mat-select-value-text ng-tns-c74-68 ng-star-inserted">
                                          <span className="mat-select-min-line ng-tns-c74-68 ng-star-inserted">1</span>


                                        </span>

                                      </div>
                                      <div className="mat-select-arrow-wrapper ng-tns-c74-68">
                                        <div className="mat-select-arrow ng-tns-c74-68">
                                        </div>
                                      </div>
                                    </div>

                                  </mat-select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="minute_girl_m">Birth Minute</label>
                                </div>
                                <div className="input_form">
                                  <mat-select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="minute_girl_m" id="minute_girl_m" required className="mat-select form-control ng-tns-c74-69 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-137" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                                    <div className="mat-select-trigger ng-tns-c74-69">
                                      <div className="mat-select-value ng-tns-c74-69" id="mat-select-value-137">

                                        <span className="mat-select-value-text ng-tns-c74-69 ng-star-inserted">
                                          <span className="mat-select-min-line ng-tns-c74-69 ng-star-inserted">1</span>


                                        </span>

                                      </div>
                                      <div className="mat-select-arrow-wrapper ng-tns-c74-69">
                                        <div className="mat-select-arrow ng-tns-c74-69">
                                        </div>
                                      </div>
                                    </div>

                                  </mat-select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="sec_girl_m">Birth Second</label>
                                </div>
                                <div className="input_form">
                                  <mat-select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="sec_girl_m" id="sec_girl_m" required className="mat-select form-control ng-tns-c74-70 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-139" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                                    <div className="mat-select-trigger ng-tns-c74-70">
                                      <div className="mat-select-value ng-tns-c74-70" id="mat-select-value-139">

                                        <span className="mat-select-value-text ng-tns-c74-70 ng-star-inserted">
                                          <span className="mat-select-min-line ng-tns-c74-70 ng-star-inserted">1</span>


                                        </span>

                                      </div>
                                      <div className="mat-select-arrow-wrapper ng-tns-c74-70">
                                        <div className="mat-select-arrow ng-tns-c74-70">
                                        </div>
                                      </div>
                                    </div>

                                  </mat-select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="lable_form">
                                  <label htmlFor="place_girl_m">Birth Place</label>
                                </div>
                                <div className="input_form">
                                  <input type="search" name="place_girl_m" id="place_girl_m" required className="mat-autocomplete-trigger ng-untouched ng-pristine ng-valid" placeholder="Enter your birth place" autoComplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" />

                                  <mat-autocomplete className="mat-autocomplete">

                                  </mat-autocomplete>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <button type="submit" className="generate_horoscope_btn adjust_margin_btn">Match Horoscope</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" className="tab-pane fade">
                    <div className="open_kundli_section">
                      <div className="background_open_kundli savedMatching">



                        <div className="centered mt-0 ng-star-inserted">
                          <div className="no-data-found d-inline-block">
                            <p >Please login to check
                              your saved matches!</p>
                            <div className="buttons">
                              <div className="contact_btn btnn btn d-inline-block pt-1">
                                <a id="loginButton" className="text-center ng-tns-c149-0" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-user ng-tns-c149-0" />
                                  login</a>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why_astrology ng-star-inserted">
        <div className="container">
          <h2 className="heading_seo_content_headline_chinese_horoscope">
            Match Making <img alt="down" src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/down.png" className="arrowPos ng-star-inserted" />

          </h2>
          <h3 className="subheading_why_astrology ng-star-inserted">A friend
            or a foe?</h3>


        </div>
      </section>
    </div>
  )
}
