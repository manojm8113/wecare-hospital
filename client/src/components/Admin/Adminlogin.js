import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import './Adminlogin.css';
import { useDispatch } from 'react-redux';
import { AdminLogin } from '../Api';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!Email) newErrors.Email = 'Email is required';
    if (!Password) newErrors.Password = 'Password is required';
    if (Password !== ConfirmPassword) newErrors.ConfirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const display = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    try {
      const response = await AdminLogin({ Email, Password }, dispatch);
      if (response.status === 200) {
        setTimeout(() => {
          navigate('/dashboard');
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
      <div className="content-wrap">
        <MDBContainer className="p-3 my-5 h-custom">
          <div className="d-flex justify-content-center mb-4">
            <Link to={'/doctorlogin'}><MDBBtn tag='a' className='mx-3 heads-icons' title="Doctor Login">
              <MDBIcon fas icon='user-md' size="2x" />
            </MDBBtn></Link>
            <Link to={'/login'}><MDBBtn tag='a' className='mx-3 heads-icons' title="User Login">
             <MDBIcon fas icon="user-friends" size="2x"/>
            </MDBBtn></Link>
          </div>

          <MDBRow>
            <MDBCol col='10' md='6' className="d-flex align-items-center justify-content-center">
              <img src="https://img.freepik.com/free-vector/hospital-building-with-ambulance_24877-51674.jpg?t=st=1725970294~exp=1725973894~hmac=eebecc2a3126e9357cdd9c34ddcb1dd780e1c9b8d6a53b63006857c94d1d6456&w=740" className="img-fluid" alt="Hospital Admin" />
            </MDBCol>

            <MDBCol col='4' md='6'>
              <div className="d-flex flex-row align-items-center justify-content-center mb-4">
                <p className="lead fw-bold mb-0 me-3">Admin Portal</p>
                <MDBBtn floating size='md' tag='a' className='me-2 admin-icon'>
                  <MDBIcon fab icon='facebook-f' />
                </MDBBtn>
                <MDBBtn floating size='md' tag='a' className='me-2 admin-icon'>
                  <MDBIcon fab icon='twitter' />
                </MDBBtn>
                <MDBBtn floating size='md' tag='a' className='me-2 admin-icon'>
                  <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Sign In to Admin Dashboard</p>
              </div>

              <MDBInput 
                wrapperClass='mb-4' 
                label='Email address' 
                id='formControlLg' 
                type='email' 
                size="lg" 
                value={Email}
                onChange={(e) => setEmail(e.target.value)} 
              />
              {errors.Email && <div className="text-danger mb-2">{errors.Email}</div>}
              
              <MDBInput 
                wrapperClass='mb-4' 
                label='Password' 
                id='formControlLg' 
                type='password' 
                size="lg" 
                value={Password}
                onChange={(e) => setPassword(e.target.value)} 
              />
              {errors.Password && <div className="text-danger mb-2">{errors.Password}</div>}
              
              <MDBInput 
                wrapperClass='mb-4' 
                label='Confirm Password' 
                id='formControlLg' 
                type='password' 
                size="lg" 
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} 
              />
              {errors.ConfirmPassword && <div className="text-danger mb-2">{errors.ConfirmPassword}</div>}

              <div className='text-center text-md-start mt-4 pt-2'>
                <MDBBtn className="mb-0 px-5 admin-login-btn" size='lg' onClick={display}>Login</MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <footer className='admin-footer'>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark">
          <div className="text-light mb-3 mb-md-0">
            © 2024 WeCare. All rights reserved.
          </div>

          <div>
            <MDBBtn tag='a' color='none' className='mx-3 foot-socialicon'>
              <MDBIcon fab icon='facebook-f' size="md" />
            </MDBBtn>
            <MDBBtn tag='a' color='none' className='mx-3 foot-socialicon'>
              <MDBIcon fab icon='twitter' size="md" />
            </MDBBtn>
            <MDBBtn tag='a' color='none' className='mx-3 foot-socialicon'>
              <MDBIcon fab icon='google' size="md" />
            </MDBBtn>
            <MDBBtn tag='a' color='none' className='mx-3 foot-socialicon'>
              <MDBIcon fab icon='linkedin-in' size="md" />
            </MDBBtn>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Adminlogin;
