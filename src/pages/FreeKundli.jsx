import React from 'react'
import freeKundliImg from '../assest/images/kundali.png'

export default function FreeKundli() {
  const myFunction = (a, b) => {

  }
  return (
    <div className="ng-tns-c149-0 ng-star-inserted">
      <section className="chinese_horoscope_section desktop_view_chinese_horoscope ng-tns-c149-0">
        <div className="header_chinese_horoscope ng-tns-c149-0">
          <div className="container ng-tns-c149-0">
            <div className="header_contant_chinese ng-tns-c149-0">
              <div className="left_side_text_chinese ng-tns-c149-0">
                <h1 className="ng-tns-c149-0">Free Kundli</h1>
                <h2 className="ng-tns-c149-0">Get instant &amp;
                  accurate,</h2>
                <h2 className="ng-tns-c149-0">Janam Kundli</h2>
              </div>
              <div className="right_side_image_chinese ng-tns-c149-0">
                <img width="350px" height="350px" src={freeKundliImg} alt="kundli-icon" className="ng-tns-c117-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="bread ng-tns-c149-0">
          <div className="container ng-tns-c149-0">
            <ul id="breadcrumbs-two" className="ng-tns-c149-0 ng-star-inserted">
              <li className="ng-tns-c149-0">
                <a className="ng-tns-c149-0" href="https://www.mobilegamingarcade.com/astrotalk.com/"><i className="fa fa-home ng-tns-c149-0" /></a>
              </li>
              <li className="ng-tns-c149-0"><a className="current active text-capitalize ng-tns-c149-0">Free Kundli</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="free_kundli_section desktop_view_free_kundli ng-tns-c149-0">
        <div className="container ng-tns-c149-0">
          <div className="row ng-tns-c149-0">
            <div className="col-md-6 col-lg-7 ng-tns-c149-0">
              <h2 className="sub_heading_horoscope_matching ng-tns-c149-0">New Kundli</h2>
              <div className="new_kundli_section ng-tns-c149-0">
                <form className="free_kundli_form ng-tns-c149-0 ng-untouched ng-pristine ng-invalid" action="https://www.mobilegamingarcade.com/astrotalk.com//freekundli/basic-detail" method="POST">
                  <div className="row ng-tns-c149-0">
                    <div className="col-md-12 ng-tns-c149-0">
                      <div className="lable_form ng-tns-c149-0">
                        <label htmlFor="user_name" className="ng-tns-c149-0">Name</label>
                      </div>
                      <div className="input_form ng-tns-c149-0">
                        <input type="text" name="name" id="user_name" required className="ng-tns-c149-0 ng-untouched ng-pristine ng-invalid" placeholder="Enter Name" />
                      </div>
                    </div>
                    <div className="col-md-12 ng-tns-c149-0">
                      <div className="lable_form ng-tns-c149-0">
                        <label htmlFor="genders" className="ng-tns-c149-0">Gender</label>
                      </div>
                      <div className="input_form mb-3 ng-tns-c149-0">
                        <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="gender" id="genders" required className="mat-select form-control ng-tns-c149-0 ng-tns-c75-1 mat-select-required mat-select-empty ng-untouched ng-pristine ng-star-inserted ng-invalid" aria-labelledby="mat-select-value-1" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                          Select Gender
                          <option selected>-- Choose Gender --</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>


                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row ng-tns-c149-0">
                    <div className="col-md-4 form-group ng-tns-c149-0">
                      <div className="lable_form ng-tns-c149-0">
                        <label htmlFor="genders" className="ng-tns-c149-0">Birth Day</label>
                      </div>
                      <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="day" id="day" required className="mat-select form-control ng-tns-c149-0 ng-tns-c75-2 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-3" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

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
                    <div className="col-md-4 form-group ng-tns-c149-0">
                      <div className="lable_form ng-tns-c149-0">
                        <label htmlFor="genders" className="ng-tns-c149-0">Birth Month</label>
                      </div>
                      <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="month" id="month" required className="mat-select form-control ng-tns-c149-0 ng-tns-c75-3 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-5" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

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
                    <div className="col-md-4 form-group ng-tns-c149-0">
                      <div className="lable_form ng-tns-c149-0">
                        <label htmlFor="genders" className="ng-tns-c149-0">Birth Year</label>
                      </div>
                      <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="year" id="year" required className="mat-select form-control ng-tns-c149-0 ng-tns-c75-4 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-7" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

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
                    <div className="col-md-4 form-group ng-tns-c149-0">
                      <div className="lable_form ng-tns-c149-0">
                        <label htmlFor="genders" className="ng-tns-c149-0">Birth Hour</label>
                      </div>
                      <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="hour" id="hour" required className="mat-select form-control ng-tns-c149-0 ng-tns-c75-5 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-9" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

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
                    <div className="col-md-4 form-group ng-tns-c149-0">
                      <div className="lable_form ng-tns-c149-0">
                        <label htmlFor="genders" className="ng-tns-c149-0">Birth Minute</label>
                      </div>
                      <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="min" id="min" required className="mat-select form-control ng-tns-c149-0 ng-tns-c75-6 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-11" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

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
                    <div className="col-md-4 form-group ng-tns-c149-0">
                      <div className="lable_form ng-tns-c149-0">
                        <label htmlFor="genders" className="ng-tns-c149-0">Birth Second</label>
                      </div>
                      <select role="combobox" aria-autocomplete="none" aria-haspopup="true" name="sec" id="sec" required className="mat-select form-control ng-tns-c149-0 ng-tns-c75-7 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-13" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">

                        <option className="mat-select-min-line ng-tns-c74-47 ng-star-inserted" selected>birthday_text</option>
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
                  <div className="row ng-tns-c149-0">
                    <div className="col-md-12 ng-tns-c149-0">
                      <div className="lable_form ng-tns-c149-0">
                        <label htmlFor="plac" className="ng-tns-c149-0">Birth Place</label>
                      </div>
                      <div className="input_form ng-tns-c149-0">
                        <input type="search" name="place" id="place_id" required className="mat-autocomplete-trigger ng-tns-c149-0 ng-untouched ng-pristine ng-valid" placeholder="Enter your birth place" autoComplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" list="citylisting" onKeyUp={myFunction('place_id', 'citylisting')} />
                        <datalist id="citylisting">
                        </datalist>
                        <input type="hidden" id="lat" name="lat" />
                        <input type="hidden" id="lon" name="lon" />
                        <input type="hidden" id="tzone" name="tzone" />
                      </div>
                    </div>
                  </div>
                  <div className="row ng-tns-c149-0">
                    <div className="col-12 ng-tns-c149-0">
                      <button type="submit" className="generate_horoscope_btn ng-tns-c149-0">Generate Horoscope</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 ng-tns-c149-0">
              <h2 className="sub_heading_horoscope_matching ng-tns-c149-0">Saved Kundli</h2>
              <div className="open_kundli_section ng-tns-c149-0">
                <div className="background_open_kundli ng-tns-c149-0">
                  <div className="height_set_kundli_other_pages ng-tns-c149-0 ng-star-inserted">
                    <div className="centered mt-0 ng-tns-c149-0">
                      <div className="no-data-found d-inline-block ng-tns-c149-0">
                        <p className="ng-tns-c149-0">Please
                          login to check your saved horoscope!</p>
                        <div className="buttons ng-tns-c149-0">
                          <div className="contact_btn btnn btn d-inline-block pt-1 ng-tns-c149-0">
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
      </section>
      <section className="mobile_view_chinese_horoscope ng-tns-c149-0">
        <div className="header_chinese_horoscope_mbl_view ng-tns-c149-0">
          <div className="container ng-tns-c149-0">
            <div className="header_contant_chinese_mbl_view ng-tns-c149-0">
              <div className="left_side_text_chinese_mbl_view ng-tns-c149-0">
                <h1 className="ng-tns-c149-0">Free Kundli</h1>
                <h2 className="ng-tns-c149-0">Get instant &amp;
                  accurate,</h2>
                <h2 className="ng-tns-c149-0">Janam Kundli</h2>
              </div>
              <div className="right_side_text_chinese_mbl_view ng-tns-c149-0">
                <img src="./assets/images/kundli/kundali.png" alt="kundli-icon" className="ng-tns-c149-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="free_kundli_section mobile_view_free_kundli ng-tns-c149-0">
        <div className="container ng-tns-c149-0">
          <div className="justify_content_center_kundli ng-tns-c149-0">
            <div className="row ng-tns-c149-0">
              <div className="col-md-12 ng-tns-c149-0">
                <nav className="ng-tns-c149-0">
                  <div id="nav-tab" role="tablist" className="nav nav-tabs row_tabs_kundli ng-tns-c149-0">
                    <button id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" className="custom_tabs_kundli active ng-tns-c149-0">
                      New Kundli
                    </button>
                    <button id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" className="custom_tabs_kundli ng-tns-c149-0">
                      Saved Kundli
                    </button>
                  </div>
                </nav>
                <div id="nav-tabContent" className="tab-content ng-tns-c149-0">
                  <div id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" className="tab-pane fade show active ng-tns-c149-0">
                    <div className="new_kundli_section ng-tns-c149-0">
                      <form className="free_kundli_form ng-tns-c149-0 ng-untouched ng-pristine ng-valid">
                        <div className="row ng-tns-c149-0">
                          <div className="col-md-12 ng-tns-c149-0">
                            <div className="lable_form ng-tns-c149-0">
                              <label htmlFor="names" className="ng-tns-c149-0">Name</label>
                            </div>
                            <div className="input_form ng-tns-c149-0">
                              <input type="text" name="name" id="names" className="ng-tns-c149-0 ng-untouched ng-pristine ng-valid" placeholder="Enter name" />
                            </div>
                          </div>
                          <div className="col-md-12 form-group ng-tns-c149-0">
                            <div className="lable_form ng-tns-c149-0">
                              <label htmlFor="gender" className="ng-tns-c149-0">Gender</label>
                            </div>
                            <div className="input_form mb-3 ng-tns-c149-0">
                              <div role="combobox" aria-autocomplete="none" aria-haspopup="true" name="gender" id="gender" className="mat-select form-control ng-tns-c149-0 ng-tns-c75-8 mat-select-empty ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-15" tabIndex={0} aria-expanded="false" aria-required="false" aria-disabled="false" aria-invalid="false">
                                <div className="mat-select-trigger ng-tns-c75-8">
                                  <div className="mat-select-value ng-tns-c75-8" id="mat-select-value-15">
                                    <span className="mat-select-placeholder mat-select-min-line ng-tns-c75-8 ng-star-inserted">Select Gender</span>
                                  </div>
                                  <div className="mat-select-arrow-wrapper ng-tns-c75-8">
                                    <div className="mat-select-arrow ng-tns-c75-8">
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row ng-tns-c149-0">
                          <div className="col-md-4 form-group ng-tns-c149-0">
                            <div className="lable_form ng-tns-c149-0">
                              <label htmlFor="genders" className="ng-tns-c149-0">Birth Day</label>
                            </div>
                            <div role="combobox" aria-autocomplete="none" aria-haspopup="true" name="day" id="dayMobile" required className="mat-select form-control ng-tns-c149-0 ng-tns-c75-9 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-17" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                              <div className="mat-select-trigger ng-tns-c75-9">
                                <div className="mat-select-value ng-tns-c75-9" id="mat-select-value-17">

                                  <span className="mat-select-value-text ng-tns-c75-9 ng-star-inserted">
                                    <span className="mat-select-min-line ng-tns-c75-9 ng-star-inserted">1</span>
                                  </span>

                                </div>
                                <div className="mat-select-arrow-wrapper ng-tns-c75-9">
                                  <div className="mat-select-arrow ng-tns-c75-9">
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 form-group ng-tns-c149-0">
                            <div className="lable_form ng-tns-c149-0">
                              <label htmlFor="genders" className="ng-tns-c149-0">Birth Month</label>
                            </div>
                            <div role="combobox" aria-autocomplete="none" aria-haspopup="true" name="month" id="monthMobile" required className="mat-select form-control ng-tns-c149-0 ng-tns-c75-10 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-19" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                              <div className="mat-select-trigger ng-tns-c75-10">
                                <div className="mat-select-value ng-tns-c75-10" id="mat-select-value-19">

                                  <span className="mat-select-value-text ng-tns-c75-10 ng-star-inserted">
                                    <span className="mat-select-min-line ng-tns-c75-10 ng-star-inserted">Jan</span>
                                  </span>
                                </div>
                                <div className="mat-select-arrow-wrapper ng-tns-c75-10">
                                  <div className="mat-select-arrow ng-tns-c75-10">
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className="col-md-4 form-group ng-tns-c149-0">
                            <div className="lable_form ng-tns-c149-0">
                              <label htmlFor="genders" className="ng-tns-c149-0">Birth Year</label>
                            </div>
                            <div role="combobox" aria-autocomplete="none" aria-haspopup="true" name="year" id="yearMobile" required className="mat-select form-control ng-tns-c149-0 ng-tns-c75-11 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-21" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                              <div className="mat-select-trigger ng-tns-c75-11">
                                <div className="mat-select-value ng-tns-c75-11" id="mat-select-value-21">

                                  <span className="mat-select-value-text ng-tns-c75-11 ng-star-inserted">
                                    <span className="mat-select-min-line ng-tns-c75-11 ng-star-inserted">2021</span>
                                  </span>
                                </div>
                                <div className="mat-select-arrow-wrapper ng-tns-c75-11">
                                  <div className="mat-select-arrow ng-tns-c75-11">
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 form-group ng-tns-c149-0">
                            <div className="lable_form ng-tns-c149-0">
                              <label htmlFor="genders" className="ng-tns-c149-0">Birth Hour</label>
                            </div>
                            <div role="combobox" aria-autocomplete="none" aria-haspopup="true" name="hour" id="hourMobile" required className="mat-select form-control ng-tns-c149-0 ng-tns-c75-12 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-23" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                              <div className="mat-select-trigger ng-tns-c75-12">
                                <div className="mat-select-value ng-tns-c75-12" id="mat-select-value-23">

                                  <span className="mat-select-value-text ng-tns-c75-12 ng-star-inserted">
                                    <span className="mat-select-min-line ng-tns-c75-12 ng-star-inserted">15</span>
                                  </span>

                                </div>
                                <div className="mat-select-arrow-wrapper ng-tns-c75-12">
                                  <div className="mat-select-arrow ng-tns-c75-12">
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className="col-md-4 form-group ng-tns-c149-0">
                            <div className="lable_form ng-tns-c149-0">
                              <label htmlFor="genders" className="ng-tns-c149-0">Birth Minute</label>
                            </div>
                            <div role="combobox" aria-autocomplete="none" aria-haspopup="true" name="min" id="minMobile" required className="mat-select form-control ng-tns-c149-0 ng-tns-c75-13 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-25" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                              <div className="mat-select-trigger ng-tns-c75-13">
                                <div className="mat-select-value ng-tns-c75-13" id="mat-select-value-25">

                                  <span className="mat-select-value-text ng-tns-c75-13 ng-star-inserted">
                                    <span className="mat-select-min-line ng-tns-c75-13 ng-star-inserted">22</span>

                                  </span>

                                </div>
                                <div className="mat-select-arrow-wrapper ng-tns-c75-13">
                                  <div className="mat-select-arrow ng-tns-c75-13">
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className="col-md-4 form-group ng-tns-c149-0">
                            <div className="lable_form ng-tns-c149-0">
                              <label htmlFor="genders" className="ng-tns-c149-0">Birth Second</label>
                            </div>
                            <div role="combobox" aria-autocomplete="none" aria-haspopup="true" name="sec" id="secMobile" required className="mat-select form-control ng-tns-c149-0 ng-tns-c75-14 mat-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" aria-labelledby="mat-select-value-27" tabIndex={0} aria-expanded="false" aria-required="true" aria-disabled="false" aria-invalid="false">
                              <div className="mat-select-trigger ng-tns-c75-14">
                                <div className="mat-select-value ng-tns-c75-14" id="mat-select-value-27">

                                  <span className="mat-select-value-text ng-tns-c75-14 ng-star-inserted">
                                    <span className="mat-select-min-line ng-tns-c75-14 ng-star-inserted">10</span>


                                  </span>

                                </div>
                                <div className="mat-select-arrow-wrapper ng-tns-c75-14">
                                  <div className="mat-select-arrow ng-tns-c75-14">
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="row ng-tns-c149-0">
                          <div className="col-md-12 form-group ng-tns-c149-0">
                            <div className="lable_form ng-tns-c149-0">
                              <label htmlFor="place" className="ng-tns-c149-0">Birth Place</label>
                            </div>
                            <div className="input_form ng-tns-c149-0">
                              <input type="search" name="place" id="place" className="mat-autocomplete-trigger ng-tns-c149-0 ng-untouched ng-pristine ng-valid" placeholder="Enter your birth place" autoComplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" />

                              <mat-autocomplete className="mat-autocomplete ng-tns-c149-0">

                              </mat-autocomplete>
                            </div>
                          </div>
                        </div>
                        <div className="row ng-tns-c149-0">
                          <div className="col-12 ng-tns-c149-0">
                            <button type="submit" className="generate_horoscope_btn ng-tns-c149-0">Generate Horoscope</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" className="tab-pane fade ng-tns-c149-0">
                    <div className="open_kundli_section ng-tns-c149-0">
                      <div className="background_open_kundli ng-tns-c149-0">



                        <div className="height_set_kundli ng-tns-c149-0 ng-star-inserted">
                          <div className="centered mt-0 ng-tns-c149-0">
                            <div className="no-data-found d-inline-block ng-tns-c149-0">
                              <p className="ng-tns-c149-0">Please login to check your
                                saved horoscope!</p>
                              <div className="buttons ng-tns-c149-0">
                                <div className="contact_btn btnn btn d-inline-block pt-1 ng-tns-c149-0">
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
        </div>
      </section>
      <section className="why_astrology ng-tns-c149-0 ng-star-inserted">
        <div className="container ng-tns-c149-0">
          <h2 className="heading_seo_content_headline_chinese_horoscope ng-tns-c149-0">
            Online Kundli For Future Predictions <img alt="down" src="https://www.mobilegamingarcade.com/astrotalk.com//assets/images/down.png" className="arrowPos ng-tns-c149-0 ng-star-inserted" />

          </h2>
          <h3 className="subheading_why_astrology ng-tns-c149-0 ng-star-inserted">Get Your Kundli by Date
            of Birth </h3>

          <a href="mailto:mojoinnovative9@gmail.com" target="_blank"> mojoinnovative9@gmail.com</a>

        </div>
      </section>
    </div>
  )
}
