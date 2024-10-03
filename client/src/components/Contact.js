import React, { useEffect, useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { MDBBtn, MDBCheckbox, MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { contactMessage, Getmyprofile } from './Api';

const Contact = () => {
  const [Profile, setProfile] = useState();
  const Datas = useSelector((state) => state.login.LoginInformation[0]);
  const id = Datas?.id;
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Subject, setSubject] = useState('');
  const [Message, setMessage] = useState('');
  const [sendCopy, setSendCopy] = useState(false);

  useEffect(() => {
    async function getdata() {
      if (id) {
        try {
          const profilData = await Getmyprofile(id);
          if (profilData) {
            setProfile(profilData);
            setUsername(profilData.Username || '');
            setEmail(profilData.Email || '');
          } else {
            console.error("No profile data found");
          }
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      } else {
        console.error("ID is not defined");
      }
    }
    getdata();
  }, [id]);

  async function submit(e) {
    e.preventDefault(); // Prevent the default form submission
    try {
      await contactMessage({ Username, Email, Subject, Message });
      alert('Your query has been sent successfully!');
    } catch (error) {
      console.error('Error sending query:', error);
      alert('Failed to send your query.');
    }
  }

  return (
    <div>
      <Navbar />
      <section className="contact-section bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
              <h3 className="fs-6 text-secondary mb-2 text-uppercase">Get in Touch</h3>
              <h2 className="display-5 mb-4 mb-md-5">We're always on the lookout to work with new clients.</h2>
              <span className='puls-icon'>
                <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                    d="M48 320h64l64-256 64 384 64-224 32 96h64"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                    d="M464 320 A32 32 0 0 1 432 352 A32 32 0 0 1 400 320 A32 32 0 0 1 464 320 z"
                  />
                </svg>
              </span>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-xl-center">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=826&t=st=1720785626~exp=1720786226~hmac=b3e2a5baed16925c063008ed0484bf90b54da46f772a56a24f86eb4b0715bc8b"
                alt="Get in Touch"
              />
            </div>
            <div className="col-12 col-lg-6">
              <form id='form' className='text-center contact-head' style={{ width: '100%', maxWidth: '400px' }}>
                <h2>Contact us</h2>

                <MDBInput
                  label='Name'
                  wrapperClass='mb-4'
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <MDBInput
                  type='email'
                  label='Email address'
                  wrapperClass='mb-4'
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <MDBInput
                  label='Subject'
                  wrapperClass='mb-4'
                  value={Subject}
                  onChange={(e) => setSubject(e.target.value)}
                />

                <MDBTextArea
                  wrapperClass='mb-4'
                  label='Message'
                  value={Message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <MDBCheckbox
                  wrapperClass='d-flex justify-content-center'
                  label='Send me a copy'
                  checked={sendCopy}
                  onChange={(e) => setSendCopy(e.target.checked)}
                />

                <MDBBtn block className='my-4 contact-btn' onClick={submit}>
                  Send
                </MDBBtn>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light py-3 py-md-5 py-xl-8">
        <div className="container contact-sec">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Feel Free To Contact Us</h2>
              <span className='puls-icon'>
                <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                    d="M48 320h64l64-256 64 384 64-224 32 96h64"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                    d="M464 320 A32 32 0 0 1 432 352 A32 32 0 0 1 400 320 A32 32 0 0 1 464 320 z"
                  />
                </svg>
              </span>
              <p className="text-secondary mb-5 text-center lead fs-4">We stand out as the epitome of customer-centricity, offering the best benefits like ambulance services and 24/7 support.</p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="container-fluid">
                <div className="row gy-3 gy-md-4">
                  <div className="col-12 col-lg-4">
                    <div className="card border-dark">
                      <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                        <div className="me-3 text-primary">
                          <span className='contact-icons'>
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              width="48" height="48"
                            >
                              <path d="M21.86 12.48L19.15 8a2 2 0 00-1.72-1H15V5a1 1 0 00-1-1H4a2 2 0 00-2 2v10a2 2 0 001 1.73 3.49 3.49 0 007 .27h3.1a3.48 3.48 0 006.9 0 2 2 0 002-2v-3a1.07 1.07 0 00-.14-.52zM6.5 19A1.5 1.5 0 118 17.5 1.5 1.5 0 016.5 19zm5.5-8h-2v2H8v-2H6V9h2V7h2v2h2zm4.5 8a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5zM15 12V9h2.43l1.8 3z" />
                            </svg>
                          </span>
                        </div>
                        <div>
                          <h4 className="mb-1">For Ambulance</h4>
                          <p className="m-0 text-secondary">+91-1800-987-120</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="card border-dark">
                      <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                        <div className="me-3 text-primary">
                          <span className='contact-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-chat-left-heart-fill" viewBox="0 0 16 16">
                              <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                            </svg>
                          </span>
                        </div>
                        <div>
                          <h4 className="mb-1">24/7 Support</h4>
                          <p className="m-0 text-secondary">+91-9786254123</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="card border-dark">
                      <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                        <div className="me-3 text-primary">
                          <span className='contact-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-folder-symlink-fill" viewBox="0 0 16 16">
                              <path d="M13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2l.04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3M2.19 3q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293L7.586 3zm9.608 5.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742" />
                            </svg>
                          </span>
                        </div>
                        <div>
                          <h4 className="mb-1">Our Mail</h4>
                          <p className="m-0 text-secondary">wecaresupport@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <span className='contact-map'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31353.631871705173!2d76.72949182540123!3d10.795683275090276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86944964d5e73%3A0xd7459d206d828668!2sKanjikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1720786577646!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </span>
      </section>
      <Footer />
    </div>
  );
};
export default Contact;
