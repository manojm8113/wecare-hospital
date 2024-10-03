import React, { useEffect, useState } from 'react';
import { GetDoctorProfiles } from '../Api'; // Ensure this points to your correct API utility
import Doctornav from './Doctornav';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
    const [profileData, setProfileData] = useState({
        image: '',
        doctorName: '',
        email: '',
        phone: '',
        section: '',
        description: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProfile() {
            const doctorToken = localStorage.getItem('doctorToken');
            const doctorId = localStorage.getItem('id');
            
            if (!doctorToken || !doctorId) {
                setError("Authentication failed. Please log in again.");
                setTimeout(() => {
                    navigate('/doctorlogin');
                }, 3000);
                return;
            }
    
            try {
                const myData = await GetDoctorProfiles(doctorToken, doctorId);
                if (myData) {
                    setProfileData({
                        image: myData.image || '',
                        doctorName: myData.doctorname || '',
                        email: myData.email || '',
                        phone: myData.phone || '',
                        section: myData.section || '',
                        description: myData.description || ''
                    });
                } else {
                    setError("Failed to fetch profile data. Please try again.");
                }
            } catch (error) {
                console.error("Error fetching doctor profile:", error);
                setError("An error occurred while fetching your profile. Please try again.");
            }
        }
    
        fetchProfile();
    }, [navigate]);

    const renderImage = (imageName) => {
        try {
            // Use require to dynamically load images from outside the public folder
            return require(`../../Images/${imageName}`);
        } catch (error) {
            console.error("Image not found:", error);
            return require(`../../Images/default-image.jpg`); // Fallback to a default image
        }
    };

    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div>
            <Doctornav />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img
                                src={renderImage(profileData.image)} // Dynamically load the image
                                alt="Doctor's Profile"
                                className="card-img-top img-fluid"
                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{profileData.doctorName}</h5>
                                <p className="card-text">
                                    <strong>Email:</strong> {profileData.email}<br />
                                    <strong>Phone:</strong> {profileData.phone}<br />
                                    <strong>Section:</strong> {profileData.section}<br />
                                    <strong>Description:</strong> {profileData.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h2>Doctor's Profile Information</h2>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <strong>Name:</strong> {profileData.doctorName}
                            </li>
                            <li className="list-group-item">
                                <strong>Email:</strong> {profileData.email}
                            </li>
                            <li className="list-group-item">
                                <strong>Phone:</strong> {profileData.phone}
                            </li>
                            <li className="list-group-item">
                                <strong>Section:</strong> {profileData.section}
                            </li>
                            <li className="list-group-item">
                                <strong>Description:</strong> {profileData.description}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
