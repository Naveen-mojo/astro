import React, { useContext } from 'react'
import bgimg from '../assest/images/user-login.73fdd928182536e7306d.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
// import { ToastContainer } from 'react-toastify';

export default function Login() {

    const { loginUser, error } = useContext(AuthContext)

    return (
        <>
            <section className='registration-sec' style={{ backgroundImage: `url(${bgimg}` }}>
                <div className="container resgi-container">
                    <h4 className='text-center fw-bold text-center mb-4'>Astrologer Login</h4>
                    <hr></hr>

                    <h5 className='text-danger text-center'>{error}</h5>

                    <form onSubmit={loginUser}>
                        <label className='fw-bold h6' htmlFor="inlineFormInputGroupUsername2">Email</label>
                        <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fa fa-envelope"></i></div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername2" name='email' placeholder="email" />
                        </div>
                        <label className='fw-bold h6' htmlFor="inlineFormInputGroupUsername2">Password</label>
                        <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fa fa-unlock-alt"></i></div>
                            </div>
                            <input type="text" className="form-control" name='password' id="inlineFormInputGroupUsername2" placeholder="password" />
                        </div>
                        <div className='d-flex my-4'>
                            <div className='flex-grow-1 text-left text-sm h6'>
                                <span>Are you not registered ? </span>
                                <Link to='/astro/signup'> click here </Link>
                            </div>
                            <div className='text-sm h6'>
                                <Link to='' >Forget password ?</Link>
                            </div>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" defaultChecked className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                By signing in, you agree to our
                                <Link to=''> terms and conditions</Link>
                            </label>
                        </div>
                        <button type="submit" id="myBtn" className="pop-btn send_otp" name="login">Login → </button>
                    </form>
                </div>
            </section>
        </>
    )
}
