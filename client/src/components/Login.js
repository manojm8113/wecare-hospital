import React, { useState } from 'react';
import './Login.css';
import login from './assets/woman-doctor.webp';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginDatas } from './Api';
import Navbar from './Navbar';
import Footer from './Footer';

const Login = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const display = async () => {
        if (Password !== ConfirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        try {
            const response = await LoginDatas({ Email, Password }, dispatch);
            if (response.status === 200) {
                setTimeout(() => {
                    navigate('/appointment');
                  }, 1000);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div className="page-container">
            <Navbar />
            <ToastContainer />
            <div className="content-wrap">
                <section className="vh-100 login-section">
                    <div className="login-banner">
                        <h2>We Take Care Of You And Your Family</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Temporibus vitae ipsam tempora labore, dolores deserunt corrupti
                            nostrum suscipit. Modi deleniti minus, ipsa odio ab quibusdam
                            provident placeat laboriosam molestiae sunt?
                        </p>
                    </div>
                    <div className="container py-5 h-100" id='for-bottom'>
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card cardss">
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block login-img">
                                            <img src={login} alt="login form" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">
                                                <form>
                                                    <div className="d-flex align-items-center mb-3 pb-1 logo-icon">
                                                        <svg viewBox="0 0 576 512" fill="currentColor">
                                                            <path d="M224 24v56h-56c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h56v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-56h56c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-56V24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24zm335.7 368.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H193.7c-29.1 0-57.3 9.9-80 28l-44.9 36H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h320.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-367-8.2h.9-.9z" />
                                                        </svg>
                                                    </div>

                                                    <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                                                    <div className="form-outline mb-4">
                                                        <input
                                                            type="email"
                                                            id="form2Example17"
                                                            className="form-control form-control-lg"
                                                            value={Email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                        <label className="form-label active" htmlFor="form2Example17">Email address</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input
                                                            type="password"
                                                            id="form2Example27"
                                                            className="form-control form-control-lg"
                                                            value={Password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                        <label className="form-label active" htmlFor="form2Example27">Password</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input
                                                            type="password"
                                                            id="form2Example28"
                                                            className="form-control form-control-lg"
                                                            value={ConfirmPassword}
                                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                                        />
                                                        <label className="form-label active" htmlFor="form2Example28">Confirm Password</label>
                                                    </div>

                                                    <div className="pt-1 mb-4">
                                                        <button
                                                            className="btn btn-lg btn-block login-btn"
                                                            type="button"
                                                            onClick={display}>
                                                            Login
                                                        </button>
                                                    </div>

                                                    <Link to={'/forgot'} className="small text-muted forgot-pass">Forgot password?</Link>
                                                   
                                                    <p className="mb-5 pb-lg-2 account-question">
                                                        Don't have an account? <Link to={'/signup'} className="register-link">Register here</Link>
                                                    </p>
                                                    <Link to={'/adminlogin'} className="small text-muted forgot-pass">Admin Login</Link>
                                                    <div>
                                                    <a href="#!" className="small text-muted">Terms of use.</a>
                                                    <a href="#!" className="small text-muted">Privacy policy</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='for-footer'>
                <Footer />
            </div>
        </div>
    );
};

export default Login;
