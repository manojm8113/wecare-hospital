import React, { useState } from 'react';
import './Doctorlogin.css';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { DoctorLogin } from '../Api';
import { toast } from 'react-toastify';
import doctor from '../assets/woman-doctor.webp';
import { Link, useNavigate } from 'react-router-dom';

const Doctorlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const display = async () => {
      // Check if the passwords match
      if (password !== confirmPassword) {
          toast.error('Passwords do not match!');
          return;
      }

      try {
          // Send login request
          const response = await DoctorLogin({ email, password }, dispatch);
          if (response.status === 200) {
              // Store token and doctor ID in localStorage
              localStorage.setItem('doctorToken', response.data.doctorToken);
              localStorage.setItem('id', response.data.id);

              // Show success message
              toast.success('Login successful');

              // Redirect to the doctor's home page
              navigate('/doctorhome');
          } else {
              toast.error(response.data.message || 'Invalid email or password');
          }
      } catch (error) {
          console.error('Login error', error);
          toast.error('An error occurred. Please try again.');
      }
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <span className='logos-icon'>
                <svg viewBox="0 0 576 512" fill="currentColor">
                  <path d="M224 24v56h-56c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h56v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-56h56c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-56V24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24zm335.7 368.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H193.7c-29.1 0-57.3 9.9-80 28l-44.9 36H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h320.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-367-8.2h.9-.9z" />
                </svg>
              </span>
              <h4 className="mt-1 mb-5 pb-1">Doctor Login</h4>
            </div>
            <p>Please login to your account</p>
            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e) => setEmail(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e) => setPassword(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form3' type='password' onChange={(e) => setConfirmPassword(e.target.value)} />

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={display}>Sign in</MDBBtn>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4 admins">
              <p className="mb-0">Are You?<Link to={'/adminlogin'}><span>Admin</span></Link></p>
            </div>
          </div>
        </MDBCol>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column justify-content-center h-100 mb-4 gradient-custom-3">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">Welcome Back, Doctor!</h4>
              <p className="small mb-0">Access your account to manage your appointments, patients, and more.</p>
            </div>
            <img src={doctor} alt="Doctor" className="doctor-image"/>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Doctorlogin;
