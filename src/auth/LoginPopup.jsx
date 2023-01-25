import React, { useState, useContext, useEffect } from 'react'
import 'intl-tel-input/build/css/intlTelInput.css';
import ReactIntlTelInput from 'react-intl-tel-input-v2';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { apiEndPoint } from '../enviroment';

function LoginPopup() {
    const [loading, setLoading] = useState(null)
    const [errors, setErrors] = useState(null)
    const [responseMessage, setResponseMessage] = useState(null)
    const [number, setNumber] = useState("")

    const { onNumber } = useContext(AuthContext)
  
    useEffect(() => {
      onNumber(number)
      // eslint-disable-next-line
    }, [number])

    const loginUserFirstStep = (e) => {
        e.preventDefault();
        setLoading(true);
        const config = {
            method: "post",
            url: `${apiEndPoint}auth/signinfirststep`,
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                number: number,
                password: ""
            },
        }

        axios(config)
            .then((response) => {
                setResponseMessage(response.data.message)
                setLoading(false);
            })
            .catch((error) => {
                setErrors(error.response.data.message);
                setLoading(false);
            });
    };

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
            <div className="container">
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="pop-dialog modal-dialog modal-dialog-centered" role="document">
                        <div className="pop-content modal-content">
                            <div className="modal-header">
                                <h5 className="pop-title modal-title" id="exampleModalLongTitle">Continue with Phone</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className="pop-p">You will recieve a 6 digit code <br />for verification </p>
                                <form onSubmit={loginUserFirstStep} className="container user-model-login">
                                    <h6 className="pop-lab ps-3">Enter your phone number</h6>
                                    <div className='text-center'>
                                        <ReactIntlTelInput
                                            inputProps={inputProps}
                                            intlTelOpts={intlTelOpts}
                                            // value={value}
                                            onChange={onChange}
                                        // onReady={onReady}
                                        />
                                    </div>
                                    <h5 className='text-danger text-sm text-center'>{errors}</h5>
                                    {
                                        responseMessage ? <button type="submit" id="myBtn" className="pop-btn send_otp" data-toggle="modal" data-target="#myModal" name="send">GET OTP → </button> :
                                            <button type="submit" id="myBtn" className="pop-btn send_otp" data-toggle="modal" name="send">GET OTP → </button>
                                    }

                                </form>
                                <div className="pop-p">By Signing up, you agree to our <a href='#'>Terms of Use</a> and  <a href='#'>Privacy Policy</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pop Modal End*/}
        </>
    )
}

export default LoginPopup