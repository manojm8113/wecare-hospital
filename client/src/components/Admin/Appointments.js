import React, { useEffect, useState } from 'react';
import './Appointments.css';
import Sidebar from './Sidebar';
import { Table, Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { GetAppoinments } from '../Api';
import axios from 'axios';

const Appointments = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const profileData = await GetAppoinments();
      setProfile(profileData);
      setLoading(false);
    }
    getData();
  }, []);


  return (
    <div className="appointments">
      <Sidebar />
      <div className="content">
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md={10}>
              <Card className="mt-4">
                <Card.Header className="text-center bg-dark text-white">
                  <h4>Booking Data</h4>
                </Card.Header>
                <Card.Body>
                  <Table responsive="sm" striped bordered hover>
                    <thead className="bg-secondary text-white">
                      <tr>
                        <th>Sl.No</th>
                        <th>Patient Name</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Section</th>
                        <th>Doctor</th>
                        <th>Date</th>
                        <th>Payment Id</th>
                        <th>Order Id</th>
                    
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="10" className="text-center">
                            <Spinner animation="border" role="status">
                              <span className="sr-only">Loading...</span>
                            </Spinner>
                          </td>
                        </tr>
                      ) : (
                        profile.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.patientName}</td>
                            <td>{item.phone}</td>
                            <td>{item.patientAge}</td>
                            <td>{item.section}</td>
                            <td>{item.doctor}</td>
                            <td>{item.date}</td>
                            <td>{item.paymentId}</td>
                            <td>{item.orderId}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Appointments;
