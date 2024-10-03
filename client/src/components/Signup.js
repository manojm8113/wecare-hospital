import React, { useState } from 'react';
import { MDBBtn, MDBCol, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { signinData } from './Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import Navbar from './Navbar';

const Signup = () => {
  const [Username, setUsername] = useState('');
  const [Address, setAddress] = useState('');
  const [Zip, setZip] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const navigate = useNavigate();

  const showError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showSuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const validate = () => {
    if (!Username) return "User name is required"; 
    if (!Zip || isNaN(Zip)) return "Valid Zip code is required";
    if (!Address) return "Address is required";
    if (!Phone || isNaN(Phone)) return "Valid phone number is required";
    if (!Email || !/\S+@\S+\.\S+/.test(Email)) return "Valid email is required";
    if (!Password) return "Password is required";
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();
    const errorMessage = validate();
    if (errorMessage) {
      showError(errorMessage);
    } else {
      try {
        const response = await signinData({ Username, Zip, Address, Phone, Email, Password });
        if (response.error) {
          showError(response.error);
        } else {
          showSuccess("Registration successful!");
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        }
      } catch (error) {
        showError("An error occurred during registration.");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signups">
        <ToastContainer />
        <section className="bsb-hero-5 px-3 bsb-overlay signup-banner">
          <div className="container">
            <div className="row justify-content-md-center align-items-center">
              <div className="col-12 col-md-11 col-lg-9 col-xl-8 col-xxl-7 text-center">
                <h2 className="display-1 text-white fw-bold mb-4">
                  We Take Care Of You
                </h2>
                <button
                  type="button"
                  className="btn bsb-btn-5xl btn-outline-dark"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left">
              <svg
                viewBox="0 0 576 512"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M224 24v56h-56c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h56v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-56h56c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-56V24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24zm335.7 368.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H193.7c-29.1 0-57.3 9.9-80 28l-44.9 36H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h320.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-367-8.2h.9-.9z" />
              </svg>
              <h3>Welcome</h3>
              <p>We Are Always Ready To Help You & Your Family!</p>
              <Link to={'/login'}><input type="submit" name="" size='md' value="Login"/></Link>
              <br />
            </div>
            <div className="col-md-9 register-right">
              <h2>Please Register</h2>
              <form className="mb-0 register-form" onSubmit={submit}>
                <MDBRow className="mb-4">
                  <MDBCol>
                  <label htmlFor="firstName" className="form-label">User Name</label>
                    <MDBInput type="text" onChange={(e) => setUsername(e.target.value)} />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                  <label htmlFor="Address" className="form-label">Address</label>
                    <MDBInput type="text" onChange={(e) => setAddress(e.target.value)} />
                  </MDBCol>
                  <MDBCol>
                  <label htmlFor="Zip" className="form-label">Pincode</label>
                    <MDBInput type="text" onChange={(e) => setZip(e.target.value)} />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                  <label htmlFor="Phone" className="form-label">Phone</label>
                    <MDBInput type="text" onChange={(e) => setPhone(e.target.value)} />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                  <label htmlFor="Email" className="form-label">Email</label>
                    <MDBInput type="email" onChange={(e) => setEmail(e.target.value)} />
                  </MDBCol>
                  <MDBCol>
                  <label htmlFor="Password" className="form-label">Password</label>
                    <MDBInput type="password" onChange={(e) => setPassword(e.target.value)} />
                  </MDBCol>
                </MDBRow>
                <div className="float-end">
                  <MDBBtn rounded style={{ backgroundColor: "#f89007" }} type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
