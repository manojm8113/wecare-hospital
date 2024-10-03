import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
import { Getuserdetails } from '../Api';
import { Table, Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import './Userslist.css';

const Userslist = () => {
  const dispatch = useDispatch();
  const [Profile, setProfile] = useState([]);
  
  useEffect(() => {
    async function getdata() {
      const profilData = await Getuserdetails();
      setProfile(profilData);
    }
    getdata();
  }, []);
  
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md={12}>
              <Card className="mt-4">
                <Card.Header className="text-center bg-dark text-white">
                  <h4>Users Data</h4>
                </Card.Header>
                <Card.Body>
                  <Table responsive="sm" striped bordered hover>
                    <thead className="bg-secondary text-white">
                      <tr>
                        <th>Sl.No</th>
                        <th>User Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Profile && Profile.length > 0 ? (
                        Profile.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.Username}</td>
                            <td>{item.Phone}</td>
                            <td>{item.Email}</td>
                            <td>{item.Address} {item.Zip}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center">
                            <Spinner animation="border" role="status">
                              <span className="sr-only">Loading...</span>
                            </Spinner>
                          </td>
                        </tr>
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
export default Userslist;
