import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext';
import OTPInput, { ResendOTP } from "otp-input-react";

function OTPModel() {

  const { loginUser, error, onChangeNumber } = useContext(AuthContext);

  const [OTP, setOTP] = useState("");

  useEffect(() => {
    onChangeNumber(OTP)
  }, [OTP])

  return (
    <>
      {/* Otp  Modal*/}
      <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="pop-dialog modal-dialog modal-dialog-centered" role="document">
          <div className="pop-content modal-content">
            <div className="modal-header">
              <h5 className="pop-title modal-title" id="exampleModalLongTitle">Verify Phone</h5>
              <input type="hidden" id="ResendToPhone" defaultValue />
              <input type="hidden" id="SavePhoneExt" defaultValue />
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="pop-p">OTP sent to your Number</p>
              <form onSubmit={loginUser} id="sms-box">
                <div className='p-5'>
                  <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" secure inputStyles={{
                    width: "50px",
                    height: "75px", color: "#000", fontSize: "25px", border: "1px solid #000"
                  }}
                    disabled={false} />
                    <div className='text-center h6 text-danger mt-3'>{error}</div>
                  <button className="pop-btn" id="SubmitOtp" type="submit">Submit </button>
                  <ResendOTP className="mt-5" onResendClick={() => console.log("Resend clicked")} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Otp End */}
    </>
  )
}

export default OTPModel