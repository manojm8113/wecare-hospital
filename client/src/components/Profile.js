import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Profile.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { deleteMydata, Getmyprofile } from './Api'
import { LogoutData } from '../Redux/Loginslice'
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const Datas = useSelector((state) => state.login.LoginInformation[0]);
  const id = Datas?.id;
  useEffect(() => {
    if (id) {
      console.log("userssghvxhvshv",id);
      async function getdata() {
        setLoading(true);
        try {
          const profilData = await Getmyprofile(id);
          setProfile(profilData);
        } catch (error) {
          console.error("Error fetching profile data:", error);
        } finally {
          setLoading(false);
        }
      }
      getdata();
      console.log("users datass",getdata());
    }
  }, [id]);
  
  const deletemy = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your data?");
    if (confirmDelete) {
      try {
        await deleteMydata(id, dispatch);
        alert("Your data has been deleted successfully!");
        dispatch(LogoutData());
        navigate("/signup");
      } catch (err) {
        console.log("delete error:", err);
      }
    }
  };
  const logoutpage = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      try {
        dispatch(LogoutData());
        alert("You are logged out successfully!");
        navigate("/signup");
      } catch (err) {
        console.log("logout error:", err);
      }
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
    <div className="page-content page-container" id="page-content">
    <div className="padding">
      <div className="row container d-flex justify-content-center">
        <div className="col-xl-6 col-md-12">
          <div className="card user-card-full">
            <div className="row m-l-0 m-r-0">
              <div className="col-sm-4 bg-c-lite-green user-profile">
                <div className="card-block text-center text-white">
                  <div className="m-b-25">
                    <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                  </div>
                  <h6 className="f-w-600">UserName: {Profile?.Username || 'Loading...'}</h6>
                  <i className="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="card-block">
                  <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Haii...!! {Profile?.Username || 'Loading...'}
                  </h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Email</p>
                      <h6 className="text-muted f-w-400">
                        {Profile?.Email || 'Loading...'}
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Phone</p>
                      <h6 className="text-muted f-w-400">
                        {Profile?.Phone || 'Loading...'}
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Address</p>
                      <h6 className="text-muted f-w-400">
                        {Profile?.Address || 'Loading...'}
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Pin</p>
                      <h6 className="text-muted f-w-400">
                        {Profile?.Zip || 'Loading...'}
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <button onClick={logoutpage} className="btn btn-outline-dark"> Logout</button>
                    </div>
                    <div className="col-sm-4">
                      <button onClick={deletemy} className="btn btn-outline-dark">
                        Delete
                      </button>
                    </div>
                    <div className="col-sm-4">
                      <Link to={'/update/:id'}>
                        <button className="btn btn-outline-dark">Update</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {loading && <p>Loading...</p>}
        </div>
      </div>
    </div>
  </div>
  <section className="bg-dark banner-profile">
  <div className="container-fluid overflow-hidden">
    <div className="row">
      <div className="col-12 col-md-6 order-1 order-md-0 align-self-md-end">
        <div className="row py-3 py-sm-5 py-xl-9 mt-md-10 justify-content-sm-center">
          <div className="col-12 col-sm-10">
            <h2 className="display-2 fw-bolder mb-4 text-white">We Provide You The Best Treatment In Resonable Price</h2>
            <div className="row">
              <div className="col-12 col-xxl-8">
                <p className="fs-5 mb-5 text-white">We work in a customized way by devising and handling entirely online projects with long-term partnerships.</p>
              </div>
            </div>
            <div className="d-grid gap-2 d-sm-flex">
              <button type="button" className="btn btn-warning bsb-btn-2xl rounded-pill">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 p-0">
        <img className="img-fluid w-100 h-100 object-fit-cover" loading="lazy" src="https://www.yudaah.com/demo/dil-hospital/assets/images/blog/blog_03.jpg" alt="We Offer Modern Web Solutions"/>
      </div>
    </div>
  </div>
</section>
    <Footer/>
    </div>
  )
}
export default Profile