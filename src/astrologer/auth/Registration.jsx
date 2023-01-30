import React, { useEffect, useState } from 'react';
import ReactIntlTelInput from 'react-intl-tel-input-v2';
import { Link } from 'react-router-dom';
// import Multiselect from 'multiselect-react-dropdown';
import {apiEndPoint} from '../../enviroment';


export default function Registration() {
    useEffect(() => {
        const steps = Array.from(document.querySelectorAll("form .step"));
        const nextBtn = document.querySelectorAll("form .next-btn");
        const prevBtn = document.querySelectorAll("form .previous-btn");

        nextBtn.forEach((button) => {
            button.addEventListener("click", () => {
                changeStep("next");
            });
        });
        prevBtn.forEach((button) => {
            button.addEventListener("click", () => {
                changeStep("prev");
            });
        });
        function changeStep(btn) {
            let index = 0;
            let active = document.querySelector(".active");
            index = steps.indexOf(active);
            steps[index].classList.remove("active");
            if (btn === "next") {
                index++;
            } else if (btn === "prev") {
                index--;
            }
            steps[index].classList.add("active");
        }
    }, [])

    const [state, setstate] = useState({
        name: '',
        email: '',
        otp: '',
        gender: '',
        birthdate: '',
        primaryskills: [],
        skills: [],
        language: [],
        experience: '',
        dailyhours: '',
        platform: '',
        monthlyEarning: '',
        platformName: '',
        onboard: '',
        interview: '',
        city: '',
        income: '',
        about: ''
    })

    const [profileimg, setprofileimg] = useState('')
    const [number, setNumber] = useState('')
    const [code, setcode] = useState('')
    const [termscondition, settermscondition] = useState('')
    const [result, setresult] = useState('')

    const getValue = (event) => {
        const { name, value } = event.target;
        setstate((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const formSubmit = event => {
        event.preventDefault();

        var formdata = new FormData();

        formdata.append("profileImage", profileimg);
        formdata.append("astrologerName", state.name);
        formdata.append("email", state.email);
        formdata.append("shortName", '');
        formdata.append("gender", state.gender);
        formdata.append("DOB", state.birthdate);
        formdata.append("primarySkills", JSON.stringify(state.primaryskills));
        formdata.append("hours", state.dailyhours);
        formdata.append("isPlatform", state.platform);
        formdata.append("monthlyEarning", state.monthlyEarning);
        formdata.append("nameOfPlatform", state.platformName);
        formdata.append("skill", JSON.stringify(state.skills));
        formdata.append("description", state.about);
        formdata.append("cityName", state.city);
        formdata.append("onBoard", state.onboard);
        formdata.append("exp", state.experience);
        formdata.append("language", JSON.stringify(state.language));
        formdata.append("chatRate", '');
        formdata.append("callRate", "");
        formdata.append("contactExt", code);
        formdata.append("contactNumber", number);
        formdata.append("galleryImage", "");
        formdata.append("isActive", "1");
        formdata.append("isValid", termscondition);
        formdata.append("verifyCode", state.otp);
        formdata.append("interviewTime", state.interview);
        formdata.append("incomeSource", state.income);
        formdata.append("isLoggedin", "1");
        formdata.append("password", "");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}astro/add`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setresult(result)
            })
            .catch(error => console.log('error', error));
    }

    const primaryskills = [
        "Vastu",
        "KP",
        "Nandi"
    ];

    const language = [
        "Hindi",
        "English"
    ];

    const inputProps = {
        placeholder: 'Enter Number',
    };

    const intlTelOpts = {
        preferredCountries: ['IN'],
    };

    const onChange = (event) => {
        const number = event.dialCode + " " + event.phone
        setNumber(number);
    };

    return (
        <>
            <section className='registration-sec'>
                <div className="container resgi-container">
                    <h4 className='text-center my-4'>Registration Page</h4>
                    <form onSubmit={formSubmit}>
                        <div className="step step-1 active">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" onChange={getValue} placeholder='Name' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email" onChange={getValue} placeholder='Email' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="number">Mobile Number</label>
                                <div>
                                    <ReactIntlTelInput
                                        inputProps={inputProps}
                                        intlTelOpts={intlTelOpts}
                                        // value={value}
                                        onChange={onChange}
                                    // onReady={onReady}
                                    />
                                </div>

                                <div className='text-sm text-primary text-right cursor-pointer' style={{ width: "55%" }}>Verify Number</div>

                                <div className="form-group">
                                    <label htmlFor="otp">OTP</label>
                                    <input type="text" id="otp" name="otp" onChange={getValue} placeholder='Enter OTP' />
                                </div>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" name='termcondition' onChange={(event) => settermscondition(event.target.checked)} className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">I Agree To The
                                    <Link to=''> Term And Conditions</Link>
                                </label>
                            </div>
                            <Link to='/astro/login' className="btn btn-primary mt-4">Already have an account? login</Link>
                            <button type="button" className="next-btn">Next</button>
                        </div>
                        <div className="step step-2">
                            <div className="form-group">
                                <label htmlFor="profileimg">Profile</label>
                                <input type="file" id="profileimg" onChange={(event) => setprofileimg(event.target.files[0])} name="profileimg" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <select name='gender' onChange={getValue} className='form-control form-control-sm'>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                    <option value='custom'>Custom</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>DOB</label>
                                <input type="datetime-local" onChange={getValue} name='birthdate' max="2022-10-28T00:00" className='form-control' />
                            </div>

                            {/* <label className='my-2'>Primary Skills</label>
                            <Multiselect isObject={false} options={primaryskills} name='primaryskills' onChange={getValue} value={state.primaryskills} />


                            <label className='my-2'>Skills</label>
                            <Multiselect isObject={false} options={primaryskills} name='skills' onChange={getValue} value={state.skills} />

                            <label className='my-2'>Language</label>
                            <Multiselect isObject={false} options={language} name='language' onChange={getValue} value={state.language} /> */}

                            <div className="form-group">
                                <label htmlFor="experience">Experience </label>
                                <input onChange={getValue} type="text" id="experience" name="experience" placeholder='Exmaple: 3' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dailyhours">How many hours you can contribute daily? </label>
                                <input onChange={getValue} type="text" id="dailyhours" name="dailyhours" placeholder='Exmaple: 5' />
                            </div>
                            <div className="form-group">
                                <label>Are you working on any other online platform? *</label>
                                <select onChange={getValue} name='platform' className='form-control'>
                                    <option value='no'>NO</option>
                                    <option value='yes'>YES</option>
                                </select>
                            </div>
                            {
                                state.platform === 'yes' ?
                                    <div>
                                        <div className="form-group">
                                            <label htmlFor="monthlyEarning">Monthly Earning</label>
                                            <input type="text" id="monthlyEarning" name="monthlyEarning" onChange={getValue} placeholder='Monthly Earning' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="platformName">Name Of Platform</label>
                                            <input type="text" id="platformName" name="platformName" onChange={getValue} placeholder='Name Of Platform' />
                                        </div>
                                    </div>
                                    : ''
                            }
                            <button type="button" className="previous-btn">Prev</button>
                            <button type="button" className="next-btn">Next</button>
                        </div>
                        <div className="step step-3">
                            <div className="form-group">
                                <label htmlFor="onboard">Why do you think we should onboard you? </label>
                                <input onChange={getValue} type="text" id="onboard" name="onboard" placeholder='do you think we should onboard you' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="interview">What is a suitable time For interview? </label>
                                <input onChange={getValue} type="text" id="interview" name="interview" placeholder='suitable time For interview' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">Which city do you currently live in?</label>
                                <input onChange={getValue} type="text" id="city" name="city" placeholder='City' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="income">Main source of business ( other than astrology)?</label>
                                <input onChange={getValue} type="text" id="income" name="income" placeholder='Income' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="about">About</label>
                                <textarea onChange={getValue} className="form-control" name='about' id="about" style={{ height: "100px" }}></textarea>
                            </div>
                            <h4 className='text-danger text-sm'>{result.message}</h4>
                            <button type="button" className="previous-btn">Prev</button>
                            <button type="submit" className="submit-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

