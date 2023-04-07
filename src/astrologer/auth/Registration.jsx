import React, { useState } from 'react';
import ReactIntlTelInput from 'react-intl-tel-input-v2';
import { Link } from 'react-router-dom';
import { apiEndPoint } from '../../enviroment';
import moment from 'moment'
import Select from 'react-select';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

const steps = ['Basic Details', 'Personal Details', 'Other Details'];

export default function Registration() {
    const [state, setstate] = useState({
        name: '',
        email: '',
        otp: '',
        gender: '',
        birthdate: '',
        experience: '',
        dailyhours: 0,
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
    const [termscondition, settermscondition] = useState('')
    const [result, setresult] = useState('')

    // set value for default selection
    const [primarySkill, setPrimarySkill] = useState([]);
    const [skill, setSkill] = useState([]);
    const [lang, setLang] = useState([]);

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
        formdata.append("primarySkills", JSON.stringify(primarySkill));
        formdata.append("hours", state.dailyhours);
        formdata.append("isPlatform", state.platform);
        formdata.append("monthlyEarning", state.monthlyEarning);
        formdata.append("nameOfPlatform", state.platformName);
        formdata.append("skill", JSON.stringify(skill));
        formdata.append("description", state.about);
        formdata.append("cityName", state.city);
        formdata.append("onBoard", state.onboard);
        formdata.append("exp", state.experience);
        formdata.append("language", JSON.stringify(lang));
        formdata.append("chatRate", 0);
        formdata.append("callRate", 0);
        formdata.append("contactNumber", number);
        formdata.append("galleryImage", "");
        formdata.append("isActive", "0");
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

    const skills = [
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

    const language = [
        {
            value: 1,
            label: "Hindi"
        },
        {
            value: 2,
            label: "English"
        }
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

    // handle onChange event of the dropdown 
    const handleChangePS = (e) => {
        setPrimarySkill(Array.isArray(e) ? e.map(x => x.label) : []);
    }
    const handleChangeSkills = (e) => {
        setSkill(Array.isArray(e) ? e.map(x => x.label) : []);
    }
    const handleChangeLang = (e) => {
        setLang(Array.isArray(e) ? e.map(x => x.label) : []);
    }


    const [activeStep, setActiveStep] = React.useState(1);

    const isStepOptional = (step) => {
        return step === 1;
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Card sx={{ maxWidth: 1345, margin: "30px auto" }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Registration
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};
                                    if (isStepOptional(index)) {
                                        labelProps.optional = (
                                            <Typography variant="caption"></Typography>
                                        );
                                    }
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            {activeStep !== steps.length ? (
                                <React.Fragment>
                                    {
                                        activeStep === 1 ? <Typography sx={{ mt: 2, mb: 1 }}>

                                            <div className="form-group">
                                                <label htmlFor="name">Name <span className='text-danger'>*</span>  </label>
                                                <input type="text" id="name" name="name" onChange={getValue} placeholder='Name' />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email <span className='text-danger'>*</span> </label>
                                                <input type="text" id="email" name="email" onChange={getValue} placeholder='Email' />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="number">Mobile Number <span className='text-danger'>*</span> </label>
                                                <ReactIntlTelInput
                                                    inputProps={inputProps}
                                                    intlTelOpts={intlTelOpts}
                                                    // value={value}
                                                    onChange={onChange}
                                                // onReady={onReady}
                                                />

                                                <div className='text-sm text-primary text-right cursor-pointer' style={{ width: "21%" }}>Verify Number</div>

                                                <div className="form-group">
                                                    <label htmlFor="otp">OTP <span className='text-danger'>*</span> </label>
                                                    <input type="text" id="otp" name="otp" onChange={getValue} placeholder='Enter OTP' />
                                                </div>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" name='termcondition' onChange={(event) => settermscondition(event.target.checked)} className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">I Agree To The
                                                    <Link to=''> Term And Conditions</Link>
                                                </label>
                                            </div>

                                        </Typography> : ''
                                    }
                                    {
                                        activeStep === 2 ? <Typography sx={{ mt: 2, mb: 1 }}>

                                            <div className="form-group">
                                                <label htmlFor="profileimg">Profile</label>
                                                <input type="file" id="profileimg" onChange={(event) => setprofileimg(event.target.files[0])} name="profileimg" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="gender">Gender</label>
                                                <select name='gender' onChange={getValue} className='form-control form-control-sm'>
                                                    <option defaultChecked>Select Gender</option>
                                                    <option value='male'>Male</option>
                                                    <option value='female'>Female</option>
                                                    <option value='custom'>Custom</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>DOB</label>
                                                <input type="date" onChange={getValue} name='birthdate' max={moment(new Date()).format("YYYY-MM-DD")} className='form-control' />
                                            </div>

                                            <label className='my-2'>Primary Skills</label>
                                            <Select
                                                className="dropdown"
                                                placeholder="Select Option"
                                                value={primaryskills.filter(obj => primarySkill.includes(obj.label))} // set selected values
                                                options={primaryskills} // set list of the data
                                                onChange={handleChangePS} // assign onChange function
                                                isMulti
                                                isClearable
                                            />

                                            <label className='my-2'>Skills</label>
                                            <Select
                                                className="dropdown"
                                                placeholder="Select Option"
                                                value={skills.filter(obj => skill.includes(obj.label))} // set selected values
                                                options={skills} // set list of the data
                                                onChange={handleChangeSkills} // assign onChange function
                                                isMulti
                                                isClearable
                                            />

                                            <label className='my-2'>Language</label>
                                            <Select
                                                className="dropdown"
                                                placeholder="Select Option"
                                                value={language.filter(obj => lang.includes(obj.label))} // set selected values
                                                options={language} // set list of the data
                                                onChange={handleChangeLang} // assign onChange function
                                                isMulti
                                                isClearable
                                            />

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

                                        </Typography> : ''
                                    }

                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button
                                            color="inherit"
                                            disabled={activeStep === 1}
                                            onClick={handleBack}
                                            sx={{ mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto' }} />

                                        <Button onClick={handleNext}>
                                            {activeStep === steps.length ? 'Finish' : 'Next'}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            ) : (

                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
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
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button
                                            color="inherit"
                                            disabled={activeStep === 1}
                                            onClick={handleBack}
                                            sx={{ mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={formSubmit}>Save</Button>
                                    </Box>
                                </React.Fragment>
                            )}
                        </Box>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

