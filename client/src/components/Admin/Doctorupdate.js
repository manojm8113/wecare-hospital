import React, { useEffect, useState } from 'react';
import './Doctorupdate.css';
import { useParams } from 'react-router-dom';
import { GetDoctorProfile, UpdateDoctorData } from '../Api';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { FaUserMd, FaEnvelope, FaPhone, FaBuilding, FaClipboard } from 'react-icons/fa';

const Doctorupdate = () => {
  const { doctorId } = useParams();
  const [doctorName, setDoctorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [section, setSection] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function display() {
      if (doctorId) {
        try {
          const myData = await GetDoctorProfile(doctorId);
          setDoctorName(myData?.doctorname || '');
          setEmail(myData?.email || '');
          setPhone(myData?.phone || '');
          setSection(myData?.section || '');
          setDescription(myData?.description || '');
        } catch (error) {
          console.error("Failed to fetch doctor profile:", error);
        }
      }
    }
    display();
  }, [doctorId]);

  const update = async () => {
    try {
      await UpdateDoctorData({ doctorName, email, phone, section, description }, doctorId);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div>
      <Sidebar />
      <Container fluid className="mt-4 doctor-update-container">
        <Row className="justify-content-md-center">
          <Col md={8} className="form-container">
            <h2 className="text-center mb-4">Update Doctor Profile</h2>
            <Form>
              <Form.Group as={Row} controlId="formDoctorName">
                <Col sm={12} className="input-group">
                  <FaUserMd className="input-icon" />
                  <Form.Control
                    type="text"
                    placeholder="Doctor Name"
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formEmail">
                <Col sm={12} className="input-group">
                  <FaEnvelope className="input-icon" />
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPhone">
                <Col sm={12} className="input-group">
                  <FaPhone className="input-icon" />
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formSection">
                <Col sm={12} className="input-group">
                  <FaBuilding className="input-icon" />
                  <Form.Control
                    type="text"
                    placeholder="Section"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formDescription">
                <Col sm={12} className="input-group">
                  <FaClipboard className="input-icon" />
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <div className="text-center mt-4">
                <Button className="custom-button" onClick={update}>
                  Update Profile
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Doctorupdate;