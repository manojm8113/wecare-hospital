import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DoctorLogoutData } from '../../Redux/DoctorSlice';
import { useDispatch } from 'react-redux';

const Doctornav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutpage = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      try {
        dispatch(DoctorLogoutData());
        alert("You are logged out successfully!");
        navigate("/doctorlogin");
      } catch (err) {
        console.log("logout error:", err);
      }
    }
  };
  return (
    <div>
    <div className="container-fluid mx-2">
    <div className="row mt-5 mx-2">
    <div className="col-md-3">
    <Link to={'/doctorprofile/:doctorId'}><button className='btn btn-dark w-100 mb-4'>My Profile</button></Link>
    <Link to={'/booking'}><button className='btn btn-dark w-100 mb-4'>Appoitments</button></Link> 
    <Link to={'/myappointments'}><button className='btn btn-dark w-100 mb-4'>My Appoitments</button></Link> 
    <button className='btn btn-dark w-100 mb-4' onClick={logoutpage}>Log out</button>
    </div>
    </div>
    </div>
    </div>
  )
}
export default Doctornav