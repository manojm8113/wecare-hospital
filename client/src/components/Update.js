import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Update.css';
import { Getmyprofile, UpdateMydata } from './Api';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Update = () => {
  const [info, setInfo] = useState(null);
  const Data = useSelector((state) => state.login.LoginInformation[0]);
  const id = Data?.id;
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Address, setAddress] = useState('');
  const [Zip, setZip] = useState('');

  useEffect(() => {
    async function display() {
      if (id) {
        const myData = await Getmyprofile(id);
        setInfo(myData);
        setUsername(myData.Username);
        setEmail(myData.Email);
        setPhone(myData.Phone);
        setAddress(myData.Address);
        setZip(myData.Zip);
      }
    }
    display();
  }, [id]);

  const update = async () => {
    console.log("Updating with", { Username, Email, Phone, Address, Zip }, id);
    try {
      await UpdateMydata({ Username, Email, Phone, Address, Zip }, id);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update profile.");
    }
  };
  return (
    <div>
      <Navbar/>
      <div className="container we-help">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center">We Are Always Ready To Help You & Your Family</h2>
           <span className='puls-icon'><svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M48 320h64l64-256 64 384 64-224 32 96h64"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M464 320 A32 32 0 0 1 432 352 A32 32 0 0 1 400 320 A32 32 0 0 1 464 320 z"
            />
            </svg>
            </span> 
            <p className="text-secondary mb-5 text-center lead fs-4">Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
          </div>
        </div>
      </div>
    
      <div className="container rounded bg-white mt-5">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <span className="text-black-50 font-weight-bold update-profile">
                Update Your Profile <i className="fa fa-long-arrow-right mr-1 mb-1"></i>
              </span>
            </div>
          </div>
          <div className="col-md-8 profile-data">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex flex-row align-items-center back" id='back-home'>
                  <i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                  <Link to={'/'}>
                    <h6>Back to home</h6>
                  </Link>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User name"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number"
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zip"
                    value={Zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-5 text-right">
                <button
                  className="btn btn-dark profile-button"
                  type="button"
                  onClick={update}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Update;
