import React, { useEffect, useState } from 'react';
import './Booking.css';
import { Table, Container, Row, Col, Card, Spinner, Form, Button } from 'react-bootstrap';
import { GetAppoinments } from '../Api';
import Doctornav from './Doctornav';

const Booking = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');

  useEffect(() => {
    async function fetchData() {
      const appointmentData = await GetAppoinments();
      setAppointments(appointmentData);

      // Extract unique doctors from the appointment data for the dropdown
      const uniqueDoctors = [...new Set(appointmentData.map((item) => item.doctor))];
      setDoctors(uniqueDoctors);

      setLoading(false);
    }
    fetchData();
  }, []);

  // Handle doctor change in dropdown
  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
  };

  // Filter appointments based on the selected doctor
  const filteredAppointments = selectedDoctor
    ? appointments.filter((appointment) => appointment.doctor === selectedDoctor)
    : appointments;

  return (
    <div className="appointments">
      <Doctornav />
      <div className="content">
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md={10}>
              <Card className="mt-4 shadow-lg">
                <Card.Header className="text-center bg-dark text-white">
                  <h4>Appointments</h4>
                </Card.Header>
                <Card.Body>
                  <Form.Group as={Row} className="mb-4">
                    <Form.Label column sm={2} className="text-right">
                      <strong>Select Doctor:</strong>
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control 
                        as="select" 
                        value={selectedDoctor} 
                        onChange={handleDoctorChange} 
                        className="w-50 mx-auto"
                      >
                        <option value="">All Doctors</option>
                        {doctors.map((doctor, index) => (
                          <option key={index} value={doctor}>
                            {doctor}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  {loading ? (
                    <div className="d-flex justify-content-center my-5">
                      <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    </div>
                  ) : (
                    <Table responsive="sm" striped bordered hover className="text-center">
                      <thead className="bg-secondary text-white">
                        <tr>
                          <th>Sl.No</th>
                          <th>Patient Name</th>
                          <th>Phone</th>
                          <th>Age</th>
                          <th>Section</th>
                          <th>Doctor</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredAppointments.length > 0 ? (
                          filteredAppointments.map((item, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.patientName}</td>
                              <td>{item.phone}</td>
                              <td>{item.patientAge}</td>
                              <td>{item.section}</td>
                              <td>{item.doctor}</td>
                              <td>{item.date}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="7" className="text-center">
                              No appointments found for the selected doctor.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Booking;
