import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import "../assest/css/Profile.css";
import { AuthContext } from "../context/AuthContext";
import moment from "moment";
import { apiEndPoint } from "../../enviroment";
import Select from 'react-select';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import SimpleSnackbar from '../component/Snackbar'

export default function Profile() {
    const [profileData, setProfileData] = useState("");

    const { user } = useContext(AuthContext);
    const id = user.id;

    useEffect(() => {
        var config = {
            method: "GET",
            url: `${apiEndPoint}astro/user/${id}`,
        };
        axios(config)
            .then((result) => {
                setProfileData(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
        // eslint-disable-next-line
    }, []);

    const {
        profileImage,
        astrologerName,
        email,
        contactNumber,
        gender,
        DOB,
        primarySkills,
        skill,
        language,
        exp,
        hours,
        isPlatform,
        monthlyEarning,
        nameOfPlatform,
        onBoard,
        interviewTime,
        cityName,
        password,
        incomeSource,
        chatRate,
        callRate,
        description,
    } = profileData;

    const [state, setstate] = useState({
        name: '',
        email: '',
        gender: '',
        birthdate: '',
        primaryskills: [],
        skills: [],
        language: [],
        experience: '',
        dailyhours: 0,
        platform: '',
        monthlyEarning: '',
        platformName: '',
        onboard: '',
        interview: '',
        city: '',
        income: '',
        chatrate: 0,
        callrate: 0,
        password: "",
        about: '',
    })
    const [profileImg, setProfileImg] = useState('')
    const [number, setNumber] = useState('')
    // eslint-disable-next-line
    const [code, setcode] = useState('')
    const [uploadImage, setUploadImage] = useState('')
    const [fileInfo, setFileInfo] = useState('')
    const [response, setresponse] = useState([])
    // eslint-disable-next-line
    const [error, seterror] = useState('')

    // set value for default selection
    const [pSkill, setPSkill] = useState([]);
    const [skll, setSkll] = useState([]);
    const [lang, setLang] = useState([]);

    useEffect(() => {
        if (profileData) {
            setstate({
                name: astrologerName,
                email,
                gender,
                birthdate: DOB,
                primaryskills: primarySkills,
                skills: skill,
                language: language,
                experience: exp,
                dailyhours: hours,
                platform: isPlatform,
                monthlyEarning: monthlyEarning,
                platformName: nameOfPlatform,
                onboard: onBoard,
                interview: interviewTime,
                city: cityName,
                income: incomeSource,
                chatrate: chatRate,
                callrate: callRate,
                about: description,
                password: password
            })
            setProfileImg(profileImage)
            setNumber(contactNumber)
        }
        // eslint-disable-next-line
    }, [profileData])

    const updateValue = (event) => {
        const { name, value } = event.target;
        setstate((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const getImage = (e) => {
        setUploadImage(URL.createObjectURL(e.target.files[0]));
        setFileInfo(e.target.files[0]);
    };

    const updateProfile = (event) => {
        event.preventDefault();

        var formdata = new FormData();

        formdata.append("profileImage", fileInfo);
        formdata.append("astrologerName", state.name);
        formdata.append("email", state.email);
        formdata.append("shortName", '');
        formdata.append("gender", state.gender);
        formdata.append("DOB", state.birthdate);
        formdata.append("primarySkills", JSON.stringify(pSkill.length > 0 ? pSkill : state.primaryskills));
        formdata.append("hours", state.dailyhours);
        formdata.append("isPlatform", state.platform);
        formdata.append("monthlyEarning", state.monthlyEarning);
        formdata.append("nameOfPlatform", state.platformName);
        formdata.append("skill", JSON.stringify(skll.length > 0 ? skll : state.skills));
        formdata.append("description", state.about);
        formdata.append("cityName", state.city);
        formdata.append("onBoard", state.onboard);
        formdata.append("exp", state.experience);
        formdata.append("language", JSON.stringify(lang.length > 0 ? lang : state.language));
        formdata.append("chatRate", state.chatrate);
        formdata.append("callRate", state.callrate);
        formdata.append("contactExt", code);
        formdata.append("contactNumber", number);
        formdata.append("galleryImage", "");
        formdata.append("isActive", "1");
        formdata.append("interviewTime", state.interview);
        formdata.append("incomeSource", state.income);
        formdata.append("isLoggedin", "1");
        formdata.append("password", state.password ? state.password : "");

        const config = {
            method: 'PATCH',
            url: `${apiEndPoint}astro/update/${id}`,
            headers: {
                'Content-Type': 'multipart/form-date'
            },
            data: formdata
        }

        axios(config).then((res) => {
            setresponse(res.data)
        }).catch((error) => {
            seterror(error)
        })
    }


    const ps = [
        {
            value: 1,
            label: "Vastu"
        },
        {
            value: 2,
            label: "KP"
        },
        {
            value: 3,
            label: "Nandi"
        },
    ];

    const sk = [
        {
            value: 1,
            label: "Vastu"
        },
        {
            value: 2,
            label: "KP"
        },
        {
            value: 3,
            label: "Nandi"
        },
    ];

    const lan = [
        {
            value: 1,
            label: "English"
        },
        {
            value: 2,
            label: "Hindi"
        }
    ];

    // handle onChange event of the dropdown 
    const handleChangePS = (e) => {
        setPSkill(Array.isArray(e) ? e.map(x => x.label) : []);
    }
    const handleChangeSkills = (e) => {
        setSkll(Array.isArray(e) ? e.map(x => x.label) : []);
    }
    const handleChangeLang = (e) => {
        setLang(Array.isArray(e) ? e.map(x => x.label) : []);
    }

    const dpss = state.primaryskills.map((val, i) => {
        return { value: i + 1, label: val }
    })

    const dss = state.skills.map((val, i) => {
        return { value: i + 1, label: val }
    })

    const dlang = state.language.map((val, i) => {
        return { value: i + 1, label: val }
    })

    return (
        <>
            <SimpleSnackbar res={response.message} />
            {
                dpss.length && dss.length && dlang.length ?
                    <div className="container rounded bg-white mt-5 mb-5">
                        <form onSubmit={updateProfile}>
                            <div className="row">
                                <div className="col-md-3 border-right">
                                    {profileImg ? (
                                        <div className="avatar-upload">
                                            <div className="avatar-edit">
                                                <input
                                                    onChange={getImage}
                                                    type="file"
                                                    id="imageUpload"
                                                    accept=".png, .jpg, .jpeg"
                                                />
                                                <label htmlFor="imageUpload"></label>
                                            </div>
                                            <div className="avatar-preview">
                                                <div
                                                    id="imagePreview"
                                                    style={{ backgroundImage: `url(${uploadImage ? uploadImage : profileImg})` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="avatar-upload">
                                            <div className="avatar-edit">
                                                <input
                                                    type="file"
                                                    id="imageUpload"
                                                    onChange={getImage}
                                                    accept=".png, .jpg, .jpeg"
                                                />
                                                <label htmlFor="imageUpload"></label>
                                            </div>
                                            <div className="avatar-preview">
                                                <div
                                                    id="imagePreview"
                                                    style={{
                                                        backgroundImage: `url('https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg')`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-5 border-right">
                                    <div className="p-3 py-5">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4 className="text-right">Profile Settings</h4>
                                        </div>
                                        <h5 className="my-4">Basic Details</h5>

                                        <div className="row mt-2">
                                            <div className="col-md-12">
                                                <label className="labels">Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    defaultValue={astrologerName}
                                                    onChange={updateValue}
                                                    name='name'
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <label className="labels">Email</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    defaultValue={email}
                                                    onChange={updateValue}
                                                    name='email'
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            {/* <div className="form-group">
                                        <label htmlFor="number">Mobile Number</label>
                                        <div>
                                            <ReactIntlTelInput
                                                inputProps={inputProps}
                                                intlTelOpts={intlTelOpts}
                                                // value={value}
                                                onChange={onChange}
                                                // onReady={onReady}
                                                defaultValue={contactNumber}
                                            />
                                        </div>
                                    </div> */}
                                            <h5 className="my-4">Personal Details</h5>

                                            <div className="form-group">
                                                <label htmlFor="gender">Gender</label>
                                                <select
                                                    name="gender"
                                                    value={state.gender}
                                                    onChange={updateValue}
                                                    className="form-control form-control-sm"
                                                >
                                                    <option value="female">Female</option>
                                                    <option value="male">Male</option>
                                                    <option value="custom">Custom</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>DOB</label>
                                                <input
                                                    type="date"
                                                    value={moment(state.birthdate).format("YYYY-MM-DD")}
                                                    name="birthdate"
                                                    id="birthdate"
                                                    min="1850-01-01"
                                                    max={moment(new Date()).format("YYYY-MM-DD")}
                                                    className="form-control"
                                                    onChange={updateValue}
                                                />
                                            </div>

                                            <label>Primary Skills</label>

                                            <Select
                                                className="dropdown"
                                                placeholder="Select Option"
                                                // value={ps.filter(obj => pSkill.includes(obj.label))} // set selected values
                                                options={ps} // set list of the data
                                                onChange={handleChangePS} // assign onChange function
                                                isMulti
                                                isClearable
                                                defaultValue={dpss}
                                            />

                                            <label className='my-2'>Skills</label>
                                            <Select
                                                className="dropdown"
                                                placeholder="Select Option"
                                                // value={sk.filter(obj => skll.includes(obj.label))} // set selected values
                                                options={sk} // set list of the data
                                                onChange={handleChangeSkills} // assign onChange function
                                                isMulti
                                                isClearable
                                                defaultValue={dss}
                                            />

                                            <label className='my-2'>Language</label>
                                            <Select
                                                className="dropdown"
                                                placeholder="Select Option"
                                                // value={lan.filter(obj => lang.includes(obj.label))} // set selected values
                                                options={lan} // set list of the data
                                                onChange={handleChangeLang} // assign onChange function
                                                isMulti
                                                isClearable
                                                defaultValue={dlang}
                                            />

                                            <div className="form-group">
                                                <label htmlFor="experience">Experience </label>
                                                <input
                                                    type="text"
                                                    id="experience"
                                                    defaultValue={exp}
                                                    name="experience"
                                                    placeholder="Exmaple: 3"
                                                    onChange={updateValue}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="dailyhours">
                                                    How many hours you can contribute daily?{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    id="dailyhours"
                                                    defaultValue={hours}
                                                    name="dailyhours"
                                                    placeholder="Exmaple: 5"
                                                    onChange={updateValue}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Are you working on any other online platform? *</label>
                                                <select
                                                    name="platform"
                                                    value={state.platform}
                                                    className="form-control"
                                                    onChange={updateValue}
                                                >
                                                    <option value="no">NO</option>
                                                    <option value="yes">YES</option>
                                                </select>
                                            </div>
                                            {state.platform === "yes" ? (
                                                <div>
                                                    <div className="form-group">
                                                        <label htmlFor="monthlyEarning">Monthly Earning</label>
                                                        <input
                                                            type="text"
                                                            id="monthlyEarning"
                                                            value={state.monthlyEarning}
                                                            onChange={updateValue}
                                                            name="monthlyEarning"
                                                            placeholder="Monthly Earning"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="platformName">Name Of Platform</label>
                                                        <input
                                                            type="text"
                                                            id="platformName"
                                                            value={state.platformName}
                                                            onChange={updateValue}
                                                            name="platformName"
                                                            placeholder="Name Of Platform"
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </div>

                                        <div className="mt-5 text-center">
                                            <button
                                                className="p-2 btn-primary profile-button"
                                                type="submit"
                                            >
                                                Update Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="p-3 py-5">
                                        <h5 className="mt-5 mb-4">Other Details</h5>
                                        <div className="form-group">
                                            <label htmlFor="onboard">
                                                Why do you think we should onboard you?{" "}
                                            </label>
                                            <input
                                                type="text"
                                                id="onboard"
                                                name="onboard"
                                                defaultValue={onBoard}
                                                placeholder="do you think we should onboard you"
                                                onChange={updateValue}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="interview">
                                                What is a suitable time for interview?{" "}
                                            </label>
                                            <input
                                                type="text"
                                                id="interview"
                                                name="interview"
                                                defaultValue={interviewTime}
                                                placeholder="suitable time for interview"
                                                onChange={updateValue}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="city">
                                                Which city do you currently live in?
                                            </label>
                                            <input
                                                type="text"
                                                id="city"
                                                name="city"
                                                defaultValue={cityName}
                                                placeholder="City"
                                                onChange={updateValue}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="income">
                                                Main source of business ( other than astrology)?
                                            </label>
                                            <input
                                                type="text"
                                                id="income"
                                                name="income"
                                                defaultValue={incomeSource}
                                                placeholder="Income"
                                                onChange={updateValue}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="chatrate">
                                                Chat Rate
                                            </label>
                                            <input
                                                type="text"
                                                id="chatrate"
                                                name="chatrate"
                                                defaultValue={chatRate}
                                                placeholder="Chat Rate"
                                                onChange={updateValue}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="callrate">
                                                Call Rate
                                            </label>
                                            <input
                                                type="text"
                                                id="callrate"
                                                name="callrate"
                                                defaultValue={callRate}
                                                placeholder="Call Rate"
                                                onChange={updateValue}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">
                                                Change Password
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                defaultValue={password}
                                                placeholder="Change Password"
                                                onChange={updateValue}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="about">About</label>
                                            <textarea
                                                className="form-control"
                                                name="about"
                                                id="about"
                                                defaultValue={description}
                                                style={{ height: "300px", overflowY: "scroll" }}
                                                onChange={updateValue}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    :
                    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                        <div className="container rounded bg-white mt-5 mb-5 text-center">
                            <CircularProgress color="success" />
                        </div>
                    </Stack >
            }
        </>
    );
}
