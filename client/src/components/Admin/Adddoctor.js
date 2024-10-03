import React, { useState } from 'react';
import './Adddoctor.css';
import doctor from '../assets/woman-doctor.webp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBIcon
} from 'mdb-react-ui-kit';
import Sidebar from './Sidebar';
import { AddDoctors } from '../Api';

const Adddoctor = () => {
    const [image, setImage] = useState(null);
    const [doctorname, setDoctorname] = useState('');
    const [section, setSection] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [password, setPassword] = useState('');

    const submitImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        formData.append("doctorname", doctorname);
        formData.append("section", section);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("description", description);
        formData.append("password", password);

        try {
            const response = await AddDoctors(formData);
            if (response && response.status === "ok") {
                toast.success('Doctor added successfully!');
                setImage(null);
                setDoctorname('');
                setSection('');
                setEmail('');
                setPhone('');
                setDescription('');
                setPassword('');
            } else {
                toast.error('Failed to add doctor.');
            }
        } catch (error) {
            console.error('Error submitting data:', error);
            toast.error('Failed to add doctor.');
        }
    };

    return (
        <div>
            <Sidebar />
            <MDBContainer className='my-5'>
                <MDBRow className='g-0 align-items-center'>
                    <MDBCol md='6' className='form-col'>
                        <MDBCard className='my-5 cascading-right' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
                            <MDBCardBody className='p-5 shadow-5 text-center'>
                                <h2 className="fw-bold mb-5">Add Doctor</h2>
                                <form onSubmit={submitImage}>
                                    <MDBRow>
                                        <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4' label='Doctor Name' id='form1' type='text' value={doctorname} onChange={(e) => setDoctorname(e.target.value)} required />
                                        </MDBCol>

                                        <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4' label='Section' id='form2' type='text' value={section} onChange={(e) => setSection(e.target.value)} required />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                        </MDBCol>

                                        <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4' label='Phone' id='form4' type='text' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4' label='Description' id='form5' type='text' value={description} onChange={(e) => setDescription(e.target.value)} required />
                                        </MDBCol>

                                        <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4' label='Password' id='form6' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBInput wrapperClass='mb-4' id='form7' type='file' accept='image/*' onChange={(e) => setImage(e.target.files[0])} />

                                    <div className='d-flex justify-content-center mb-4'>
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                    </div>

                                    <MDBBtn className='w-100 mb-4 add-doctor-btn' size='md' type='submit' >Add Doctor</MDBBtn>
                                </form>

                                <div className="text-center">
                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='facebook-f' size="sm" />
                                    </MDBBtn>
                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='twitter' size="sm" />
                                    </MDBBtn>
                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='google' size="sm" />
                                    </MDBBtn>
                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='github' size="sm" />
                                    </MDBBtn>
                                </div>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol md='6' className='image-col'>
                        <img src={doctor} className="w-100 rounded-4 shadow-4" alt="Doctor" fluid />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <ToastContainer />
        </div>
    );
};

export default Adddoctor;
