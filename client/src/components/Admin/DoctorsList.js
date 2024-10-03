import React, { useEffect, useState } from 'react';
import './Doctorslist.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDoctorData, GetDoctordetails } from '../Api';
import { Table, Container, Row, Col, Button, Image } from 'react-bootstrap';

const DoctorsList = () => {
  const dispatch = useDispatch();
  const [Profile, setProfile] = useState([]);

  useEffect(() => {
    async function getdata() {
      const profilData = await GetDoctordetails();
      console.log('Profile Data:', profilData);
      setProfile(profilData);
    }
    getdata();
  }, []);

  const renderImage = (imageName) => {
    try {
      return require(`../../Images/${imageName}`);
    } catch (error) {
      return null;
    }
  };

  const deletemy = async (doctorId) => {
    if (!doctorId) {
      console.log("ID not found!");
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this doctor's data?");
    if (confirmDelete) {
      try {
        await deleteDoctorData(doctorId, dispatch);
        alert("Doctor's data has been deleted successfully!");
        console.log("doctor's id", doctorId);
        const updatedProfile = await GetDoctordetails();
        setProfile(updatedProfile);
      } catch (err) {
        console.log("delete error:", err);
      }
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <Container fluid className="my-5">
          <Row className="justify-content-md-center">
            <Col md={12}>
              <h2 className="text-center mb-4">Doctors List</h2>
              <Table responsive="sm" striped bordered hover className="text-center">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>Sl.No</th>
                    <th>Image</th>
                    <th>Doctor Name</th>
                    <th>Section</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Profile && Profile.length > 0 ? (
                    Profile.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <Image src={renderImage(item.image)} rounded fluid className="doctor-image" alt="Doctor" />
                        </td>
                        <td>{item.doctorname}</td>
                        <td>{item.section}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.description}</td>
                        <td>
                          <Button
                            variant="danger"
                            className="me-2"
                            onClick={() => deletemy(item.id || item._id)} 
                          >
                            Delete
                          </Button>
                          <Link to={`/doctorupdate/${item.id || item._id}`}>
                          <Button variant="dark">Update</Button>
                        </Link>
                        
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8">Loading....</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default DoctorsList;
