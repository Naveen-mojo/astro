import React from 'react'

export default function ProfileModal() {
    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="profileModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-warning">
                            <h5 className="modal-title" id="exampleModalLongTitle">Account Information</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="editProfile" className="form-horizontal">
                                <div className="row">
                                    <div className="col-12 col-md-12">
                                        <div className="card-body bg-light">
                                            <div className='col-md-12'>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label>First Name</label>
                                                            <input placeholder="First Name" type="text" name="firstName" className="form-control profilefield" />
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label>Last Name</label>
                                                            <input placeholder="Last Name" type="text" name="lastName" className="form-control profilefield" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label>Date of Birth</label>
                                                            <input placeholder="Date of Birth" type="text" name="dateBirth" className="form-control profilefield" />
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label>Time of Birth</label>
                                                            <input placeholder="Time of Birth" type="text" name="timeBirth" className="form-control profilefield" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label>Place of Birth</label>
                                                            <input placeholder="Place of Birth" type="text" name="placeBirth" className="form-control profilefield" />
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label>Current Address</label>
                                                            <input placeholder="Current Address" type="text" name="address" className="form-control profilefield" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label>City, State, Country</label>
                                                            <input placeholder="City, State, Country" type="text" name="country" className="form-control profilefield" />
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label>Pincode</label>
                                                            <input placeholder="pincode" type="text" name="pincode" className="form-control profilefield" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div align="right" className="panel-footer">
                                        <button id="btn-submit" type="submit" data-placeholder="Updating..." className="p-2 rounded fw-bold bg-warning mr5">Update Profile</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
