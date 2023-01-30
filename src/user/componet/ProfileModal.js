import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { apiEndPoint } from "../../enviroment";
import axios from "axios";

export default function ProfileModal() {
  const { user } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState([])

  useEffect(() => {
    var config = {
      method: 'get',
      url: `${apiEndPoint}auth/user/?userId=${user.id}`,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios(config)
      .then(function (response) {
        setUserDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])


  const [userData, setUserData] = useState({
    firstname: userDetails.firstname,
    lastname: userDetails.lastname,
    placebirth: userDetails.placebirth,
    datebirth: userDetails.datebirth,
    timebirth: userDetails.timebirth,
    currentaddress: userDetails.currentaddress,
    city: userDetails.city,
    pincode: userDetails.pincode,
  })

  const getUserData = (event) => {
    const { name, value } = event.target
    setUserData((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }


  const profileModel = (event) => {
    event.preventDefault();
    var data = {
      firstname: userData.firstname,
      lastname: userData.lastname,
      placebirth: userData.placebirth,
      datebirth: userData.datebirth,
      timebirth: userData.timebirth,
      currentaddress: userData.currentaddress,
      city: userData.city,
      pincode: userData.pincode,
    };

    var config = {
      method: 'patch',
      url: `${apiEndPoint}auth/update/${user.id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    document.getElementById("close-modal").click()
  }


  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="profileModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-warning">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Account Information
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                id="close-modal"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={profileModel} id="editProfile" className="form-horizontal">
                <div className="row">
                  <div className="col-12 col-md-12">
                    <div className="card-body bg-light">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>First Name</label>
                              <input
                                placeholder="First Name"
                                type="text"
                                name="firstname"
                                onChange={getUserData}
                                className="form-control profilefield"
                                defaultValue={userDetails?.firstname}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input
                                placeholder="Last Name"
                                type="text"
                                name="lastname"
                                onChange={getUserData}
                                className="form-control profilefield"
                                defaultValue={userDetails?.lastname}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Date of Birth</label>
                              <input
                                placeholder="Date of Birth"
                                type="date"
                                name="datebirth"
                                onChange={getUserData}
                                className="form-control profilefield"
                                defaultValue="2023-10-21"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Time of Birth</label>
                              <input
                                placeholder="Time of Birth"
                                type="time"
                                name="timebirth"
                                onChange={getUserData}
                                className="form-control profilefield"
                                defaultValue={userDetails?.timebirth}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Place of Birth</label>
                              <input
                                placeholder="Place of Birth"
                                type="text"
                                name="placebirth"
                                onChange={getUserData}
                                className="form-control profilefield"
                                defaultValue={userDetails?.placebirth}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Current Address</label>
                              <input
                                placeholder="Current Address"
                                type="text"
                                name="currentaddress"
                                onChange={getUserData}
                                className="form-control profilefield"
                                defaultValue={userDetails?.currentaddress}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>City, State, Country</label>
                              <input
                                placeholder="City, State, Country"
                                type="text"
                                name="city"
                                onChange={getUserData}
                                className="form-control profilefield"
                                defaultValue={userDetails?.city}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Pincode</label>
                              <input
                                placeholder="pincode"
                                type="text"
                                onChange={getUserData}
                                name="pincode"
                                className="form-control profilefield"
                                defaultValue={userDetails?.pincode}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div align="right" className="panel-footer">
                    <button
                      id="btn-submit"
                      type="submit"
                      data-placeholder="Updating..."
                      className="p-2 rounded fw-bold bg-warning mr5"
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
