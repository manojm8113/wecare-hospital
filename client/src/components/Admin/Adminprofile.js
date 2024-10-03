import React, { useEffect, useState } from 'react';
import './Adminprofile.css';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { Getadminprofile } from '../Api';
import { useNavigate } from 'react-router-dom';
import { AdminLogoutData } from '../../Redux/AdminSlice';

const Adminprofile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const Datas = useSelector((state) => state.adminlogin.AdminLoginInformation[0]);
  const id = Datas?.id;

  useEffect(() => {
    if (id) {
      async function getdata() {
        setLoading(true);
        try {
          const profilData = await Getadminprofile(id);
          setProfile(profilData);
        } catch (error) {
          console.error("Error fetching profile data:", error);
        } finally {
          setLoading(false);
        }
      }
      getdata();
    }
  }, [id]);

  if (!id) {
    return <div>No Admin Profile Information Available</div>;
  }

  const logoutpage = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      try {
        dispatch(AdminLogoutData());
        alert("You are logged out successfully!");
        navigate("/adminlogin");
      } catch (err) {
        console.log("logout error:", err);
      }
    }
  };

  return (
    <div>
      <Sidebar />
      <section className="vh-100">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                <MDBRow className="g-0">
                  <MDBCol md="4" className="gradient-custom text-center text-white"
                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                    <MDBTypography tag="h5">{loading ? 'Loading...' : profile?.name}</MDBTypography>
                    <MDBCardText>{loading ? 'Loading...' : profile?.Username}</MDBCardText>
                    <MDBIcon far icon="edit mb-5" />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">{loading ? 'Loading...' : profile?.Email}</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">{loading ? 'Loading...' : profile?.Phone}</MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <hr className="mt-0 mb-4" />
                      <MDBTypography tag="h6">Admin Role and Responsibilities</MDBTypography>
                      <MDBCardText className="text-muted">
                        {loading ? 'Loading...' : "Responsible for overseeing hospital operations, managing staff, and ensuring compliance with health regulations."}
                      </MDBCardText>
                      <hr className="mt-0 mb-4" />

                      <MDBTypography tag="h6">Recent Activities</MDBTypography>
                      <MDBCardText className="text-muted">
                        {loading ? 'Loading...' : "Recently approved new department protocols, conducted a staff meeting on patient care improvement, and reviewed hospital budget."}
                      </MDBCardText>
                      <hr className="mt-0 mb-4" />

                      <MDBTypography tag="h6">Hospital Statistics</MDBTypography>
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Total Patients</MDBTypography>
                          <MDBCardText className="text-muted">{loading ? 'Loading...' : '1,234'}</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Admissions This Month</MDBTypography>
                          <MDBCardText className="text-muted">{loading ? 'Loading...' : 'Loading......'}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBBtn color="danger" onClick={logoutpage}>Logout</MDBBtn>
                        </MDBCol>
                      </MDBRow>
                      <div className="d-flex justify-content-start">
                        <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                        <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                        <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                      </div>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Adminprofile;
