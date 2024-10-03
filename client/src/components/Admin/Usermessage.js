import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Table, Spinner, Alert } from 'react-bootstrap';
import { Getusermessage } from '../Api';
import './Usermessage.css';

const Usermessage = () => {
  const [Profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const profileData = await Getusermessage();
        setProfile(profileData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <Alert variant="danger">Error: {error}</Alert>
      </div>
    );
  }

  return (
    <div className="usermessage-container">
      <Sidebar />
      <div className="users">
        <h2 className="text-center my-4">User Messages</h2>
        <Table responsive="sm" striped bordered hover className="user-table">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {Profile && Profile.length > 0 ? (
              Profile.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.Username}</td>
                  <td>{item.Email}</td>
                  <td>{item.Subject}</td>
                  <td>{item.Message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No queries found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Usermessage;
