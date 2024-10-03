import React, { useEffect, useState, useCallback } from 'react';
import Doctornav from './Doctornav';
import { Table, Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDoctorAppointments = useCallback(async () => {
    try {
      const token = localStorage.getItem('doctorToken'); // Get JWT token from localStorage
      const doctorId = localStorage.getItem('id'); // Get doctor ID from localStorage

      if (!token || !doctorId) {
        setError('Unauthorized access. Please log in again.');
        setLoading(false);
        return;
      }

      // Make a GET request with the token and doctor ID
      const response = await axios.get(`http://localhost:5000/appointment/appointments/${doctorId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAppointments(response.data); // Set the fetched appointments in state
      setLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setError('Access forbidden. Please log in again.');
      } else {
        setError('Failed to load appointments. Please try again.');
      }
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDoctorAppointments();
  }, [fetchDoctorAppointments]);

  return (
    <div className="my-appointments">
      <Doctornav />
      <div className="content">
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md={10}>
              <Card className="mt-4 shadow-lg">
                <Card.Header className="text-center bg-dark text-white">
                  <h4>My Appointments</h4>
                </Card.Header>
                <Card.Body>
                  {loading && (
                    <div className="d-flex justify-content-center my-5">
                      <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    </div>
                  )}

                  {error && (
                    <Alert variant="danger" className="text-center">
                      {error}
                    </Alert>
                  )}

                  {!loading && !error && appointments.length > 0 ? (
                    <Table responsive="sm" striped bordered hover className="text-center">
                      <thead className="bg-secondary text-white">
                        <tr>
                          <th>Sl.No</th>
                          <th>Patient Name</th>
                          <th>Phone</th>
                          <th>Age</th>
                          <th>Section</th>
                          <th>Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointments.map((appointment, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.phone}</td>
                            <td>{appointment.patientAge}</td>
                            <td>{appointment.section}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  ) : (
                    !loading && (
                      <div className="text-center">
                        <p>No appointments found.</p>
                      </div>
                    )
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

export default MyAppointments;
