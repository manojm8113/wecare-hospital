import React, { useEffect, useState } from 'react';
import './Appointment.css';
import {
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBCarouselItem,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBCarousel,
  MDBTooltip,
  MDBIcon,
} from "mdb-react-ui-kit";
import Navbar from './Navbar';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { GetDoctordetails } from './Api';
import Autosuggest from 'react-autosuggest';
import { useLocation } from 'react-router-dom';

const Appointment = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [doctorSuggestions, setDoctorSuggestions] = useState([]);
  const [sectionSuggestions, setSectionSuggestions] = useState([]);
  const [doctor, setDoctor] = useState('');
  const [section, setSection] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState({});
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const profileData = await GetDoctordetails();
      setProfile(profileData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % profile.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [profile.length]);

  useEffect(() => {
    // Automatically set date to two days from current date
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 2);
    const formattedDate = currentDate.toISOString().split('T')[0];
    setDate(formattedDate);
  }, []);

  const renderImage = (imageName) => {
    try {
      return require(`../Images/${imageName}`);
    } catch (error) {
      return null;
    }
  };

  const getSuggestions = (value, type) => {
    const inputValue = value ? value.trim().toLowerCase() : '';
    const inputLength = inputValue.length;
  
    if (type === 'doctor') {
      return inputLength === 0 
        ? [] 
        : profile.filter(
            doctor => 
              doctor.doctorname?.toLowerCase().includes(inputValue) && 
              doctor.section?.toLowerCase() === section?.toLowerCase()
          );
    } else if (type === 'section') {
      return inputLength === 0 
        ? [] 
        : profile
            .filter(doctor => doctor.section?.toLowerCase().includes(inputValue))
            .map(doctor => doctor.section)
            .filter((v, i, a) => a.indexOf(v) === i);
    }
  };
  

  const onDoctorSuggestionsFetchRequested = ({ value }) => {
    setDoctorSuggestions(getSuggestions(value, 'doctor'));
  };

  const onSectionSuggestionsFetchRequested = ({ value }) => {
    setSectionSuggestions(getSuggestions(value, 'section'));
  };

  const onSuggestionsClearRequested = () => {
    setDoctorSuggestions([]);
    setSectionSuggestions([]);
  };

  const onDoctorChange = (event, { newValue }) => {
    setDoctor(newValue);
  };

  const onSectionChange = (event, { newValue }) => {
    setSection(newValue);
    setDoctor('');
    setDoctorSuggestions([]);
  };

  const renderSuggestion = suggestion => (
    <div>
      {suggestion.doctorname || suggestion}
    </div>
  );

  const renderInputComponent = inputProps => (
    <MDBInput {...inputProps} />
  );

  const inputPropsDoctor = {
    placeholder: 'Type a doctor name',
    value: doctor,
    onChange: onDoctorChange,
    wrapperClass: 'mb-4',
    size: 'lg',
    id: 'form5',
    label: 'Doctor',
  };

  const inputPropsSection = {
    placeholder: 'Type a section',
    value: section,
    onChange: onSectionChange,
    wrapperClass: 'mb-4',
    size: 'lg',
    id: 'form4',
    label: 'Section',
  };

  const validateForm = (e) => {
    const newErrors = {};
    if (!patientName) newErrors.patientName = 'Patient name is required';
    if (!patientAge) {
      newErrors.patientAge = 'Patient age is required';
    } else if (!/^\d+$/.test(patientAge)) {
      newErrors.patientAge = 'Age must be a number';
    }
    if (!phone) newErrors.phone = 'Phone number is required';
    if (!section) newErrors.section = 'Section is required';
    if (!doctor) newErrors.doctor = 'Doctor name is required';
    if (!date) newErrors.date = 'Date is required';
    return newErrors;
  };

  const paymentHandler = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const amount = 200;
    const currency = 'INR';
    const receiptId = '1234567890';
    const response = await fetch('http://localhost:5000/appointment/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
    });

    const order = await response.json();
    console.log('order', order);

    const options = {
      key: 'rzp_test_qTNUhpkfqV860Y',
      amount: order.amount,
      currency: order.currency,
      name: 'We care',
      description: 'Test Transaction',
      image: 'https://i.ibb.co/5Y3m33n/test.png',
      order_id: order.id,
      handler: async function (response) {
        const body = { ...response, patientName, patientAge, phone, section, doctor, date };

        const validateResponse = await fetch('http://localhost:5000/appointment/order/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });

        const jsonResponse = await validateResponse.json();
        console.log('jsonResponse', jsonResponse);

        // Set booking success to true on successful payment
        setBookingSuccess(true);
      },
      prefill: {
        name: 'We care',
        email: 'wecare@gmail.com',
        contact: '9000000000',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    event.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div className="container appointment-sec">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="display-5 mb-4 mb-md-5 text-center">We Are Always Ready To Help You. Book An Appointment</h2>
            <span className='puls-icon'>
              <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M48 320h64l64-256 64 384 64-224 32 96h64" />
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M464 320 A32 32 0 0 1 432 352 A32 32 0 0 1 400 320 A32 32 0 0 1 464 320 z" />
              </svg>
            </span>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>
      <div className="section__container">
        <div className="header__content carousel-caption">
          <h1>Providing an Exceptional Patient Experience</h1>
          <p>
            Welcome, where exceptional patient experiences are our priority. With compassionate care, state-of-the-art facilities, and a patient-centered approach, we're dedicated to your well-being. Trust us with your health and experience the difference.
          </p>
          <button className="btn" id='booking'>See Services</button>
        </div>
      </div>

      {bookingSuccess ? (
        <div className="container text-center my-5">
          <h2 className="text-success">Your appointment has been successfully booked!</h2>
          <p>Thank you for choosing our services. We look forward to seeing you!</p>
          <MDBBtn className="mt-4" onClick={() => setBookingSuccess(false)}>Book Another Appointment</MDBBtn>
        </div>
      ) : (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
          <div className='mask gradient-custom-3'></div>
          <MDBCard className='m-5' style={{ maxWidth: '900px' }}>
            <MDBCardBody className='px-5'>
              <h2 className="text-uppercase text-center mb-5 book-head ">Book Appointment</h2>
              <form onSubmit={paymentHandler}>
                <MDBInput wrapperClass='mb-4' label='Patient Name' size='lg' id='form1' type='text' value={patientName} onChange={(e) => setPatientName(e.target.value)} />
                {errors.patientName && <div className="error-text">{errors.patientName}</div>}

                <MDBInput wrapperClass='mb-4' label='Patient Age' size='lg' id='form2' type='text' value={patientAge} onChange={(e) => setPatientAge(e.target.value)} />
                {errors.patientAge && <div className="error-text">{errors.patientAge}</div>}

                <MDBInput wrapperClass='mb-4' label='Phone' size='lg' id='form3' type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
                {errors.phone && <div className="error-text">{errors.phone}</div>}

                <Autosuggest
                  suggestions={sectionSuggestions}
                  onSuggestionsFetchRequested={onSectionSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
                  getSuggestionValue={suggestion => suggestion}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputPropsSection}
                  renderInputComponent={renderInputComponent}
                />
                {errors.section && <div className="error-text">{errors.section}</div>}

                <Autosuggest
                  suggestions={doctorSuggestions}
                  onSuggestionsFetchRequested={onDoctorSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
                  getSuggestionValue={suggestion => suggestion.doctorname}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputPropsDoctor}
                  renderInputComponent={renderInputComponent}
                />
                {errors.doctor && <div className="error-text">{errors.doctor}</div>}

                <MDBInput
                  wrapperClass='mb-4'
                  label='Date'
                  size='lg'
                  id='form6'
                  type='date'
                  value={date}
                  disabled
                />
                {errors.date && <div className="error-text">{errors.date}</div>}
                <div className="d-flex justify-content-center">
                <p className='mb-4 w-100 gradient-custom-4'>Note:- Only Bokking After Two Days So Make Sure The Date Of Booking</p>
              </div>
                <div className="d-flex justify-content-center">
                  <MDBBtn className='mb-4 w-100 gradient-custom-4  booking-btn' size='lg'>Book Appointment</MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      )}
      <MDBContainer className="my-5 doctorslist">
        <MDBCarousel showControls showIndicators>
          {profile.length > 0 ? (
            profile.map((item, index) => (
              <MDBCarouselItem key={index} className={index === currentIndex ? "active" : ""}>
                <MDBContainer className="doctor-carousel-item">
                  <MDBRow className="text-center">
                    <MDBCol lg="12" className="mb-5 mb-md-0">
                      <div className="d-flex justify-content-center mb-4">
                        <img
                          src={renderImage(item.image) || "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"}
                          className="rounded-circle shadow-1-strong"
                          width="150"
                          height="150"
                          alt="Doctor"
                        />
                      </div>
                      <h5 className="mb-3 doctor-name">{item.doctorname}</h5>
                      <h6 className="text-primary mb-3 doctor-section">{item.section}</h6>
                      <p className="px-xl-3 doctor-description">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        {item.description}
                      </p>
                      <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
                        <li>
                          <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                      </MDBTypography>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCarouselItem>
            ))
          ) : (
            <MDBCarouselItem>
              <MDBContainer>
                <MDBRow className="text-center">
                  <MDBCol>
                    <p>Loading....</p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCarouselItem>
          )}
        </MDBCarousel>
      </MDBContainer>
      <Footer />
    </div>
  );
};
export default Appointment;
