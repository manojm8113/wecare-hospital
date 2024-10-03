import React from 'react';
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';
import about from './assets/woman-doctor.webp';
import blog1 from './assets/pf1.jpg';
import blog2 from './assets/pf2.jpg';
import blog3 from './assets/pf3.jpg';
import blog4 from './assets/pf4.jpg';
const Aboutus = () => {
 
  return (
   <div>
     <Navbar/>
      <section className="py-3 py-md-5">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <img className="img-fluid rounded" loading="lazy" src={about} alt="Hospital Building" />
            </div>
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="mb-3">Who Are We?</h2>
                  <p className="lead fs-4 text-secondary mb-3">We are committed to providing top-quality healthcare services with compassion and excellence.</p>
                  <p className="mb-5">Our hospital has a long history of serving the community with a dedicated team of healthcare professionals. We strive to continuously improve our services and ensure patient satisfaction.</p>
                  <div className="row gy-4 gy-md-0 gx-xxl-5X">
                    <div className="col-12 col-md-6">
                      <div className="d-flex">
                        <div className="me-4 text-primary">
                         <span className="who-icon">
                            <svg fill="currentColor" viewBox="0 0 576 512" width="32" height="32" style={{color: 'rgb(247, 93, 37)'}}>
                             <path d="M224 24v56h-56c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h56v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-56h56c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-56V24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24zm335.7 368.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H193.7c-29.1 0-57.3 9.9-80 28l-44.9 36H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h320.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-367-8.2h.9-.9z" />
                            </svg>
                          </span>
                        </div>
                        <div>
                          <h2 className="h4 mb-3">Comprehensive Care</h2>
                          <p className="text-secondary mb-0">We provide a wide range of medical services to meet all your healthcare needs.</p>
                        </div>
                     </div>
                   </div>
                    <div className="col-12 col-md-6">
                      <div className="d-flex">
                        <div className="me-4 text-primary">
                          <span className="who-icon">
                            <svg fill="currentColor" viewBox="0 0 16 16" width="32" height="32">
                              <path fillRule="evenodd" d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 01-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 01-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 014 9H1.475zM.879 8C-2.426 1.68 4.41-2 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 00-.945.049L7.921 8.956 6.464 5.314a.5.5 0 00-.88-.091L3.732 8H.88z"/>
                            </svg>
                          </span>
                        </div>
                        <div>
                          <h2 className="h4 mb-3">Advanced Technology</h2>
                          <p className="text-secondary mb-0">We use the latest medical technology to provide the best possible care for our patients.</p>
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
      <div className="section-blog">
       <h2>We Offer Different Services To Improve Your Health</h2>
        <span className='puls-icon'>
          <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
           <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M48 320h64l64-256 64 384 64-224 32 96h64"/>
           <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M464 320 A32 32 0 0 1 432 352 A32 32 0 0 1 400 320 A32 32 0 0 1 464 320 z"/></svg>
        </span>
        <p>We provide a variety of healthcare services to ensure your well-being and health improvement.</p>
     </div>
      <section className="py-3 py-md-5">
        <div className="container overflow-hidden">
          <div className="row gy-5">
            <div className="col-12">
              <div className="row align-items-center gy-3 gy-md-0 gx-xl-5">
                <div className="col-xs-12 col-md-6">
                  <div className="img-wrapper position-relative bsb-hover-push">
                    <a href="#!">
                      <span className="badges rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">We Care</span>
                      <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src={blog1} alt="Doctor Consultation" />
                    </a>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <div>
                    
                    <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Effective Consultation Techniques</a></h2>
                    <p className="mb-4">Learn about the best practices for medical consultations to ensure patient comfort and accurate diagnoses.</p>
                    <span className='puls-icon'>
                    <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
                     <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M48 320h64l64-256 64 384 64-224 32 96h64"/>
                     <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M464 320 A32 32 0 0 1 432 352 A32 32 0 0 1 400 320 A32 32 0 0 1 464 320 z"/></svg>
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                <div className="col-xs-12 col-md-6">
                  <div className="img-wrapper position-relative bsb-hover-push">
                    <a href="#!">
                      <span className="badges rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">We Care</span>
                      <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src={blog2} alt="Hospital Ward" />
                    </a>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <div>
                   
                    <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Modern Hospital Facilities</a></h2>
                    <p className="mb-4">Explore the state-of-the-art facilities available at our hospital for patient care and recovery.</p>
                    <span className='puls-icon'>
          <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
           <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M48 320h64l64-256 64 384 64-224 32 96h64"/>
           <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M464 320 A32 32 0 0 1 432 352 A32 32 0 0 1 400 320 A32 32 0 0 1 464 320 z"/></svg>
        </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row align-items-center gy-3 gy-md-0 gx-xl-5">
                <div className="col-xs-12 col-md-6">
                  <div className="img-wrapper position-relative bsb-hover-push">
                    <a href="#!">
                      <span className="badges rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">We Care</span>
                      <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src={blog3} alt="Medical Equipment" />
                    </a>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <div>
                   
                    <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Latest in Medical Technology</a></h2>
                    <p className="mb-4">Our hospital uses cutting-edge medical technology to provide accurate diagnoses and effective treatments.</p>
                    <span className='puls-icon'>
                    <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
                     <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M48 320h64l64-256 64 384 64-224 32 96h64"/>
                     <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M464 320 A32 32 0 0 1 432 352 A32 32 0 0 1 400 320 A32 32 0 0 1 464 320 z"/></svg>
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                <div className="col-xs-12 col-md-6">
                  <div className="img-wrapper position-relative bsb-hover-push">
                    <a href="#!">
                      <span className="badges rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">We Care</span>
                      <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src={blog4} alt="Patient Care" />
                    </a>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <div>
                    
                    <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Importance of Patient Care</a></h2>
                    <p className="mb-4">Understanding the significance of patient care and how it impacts recovery and overall well-being.</p>
                    <span className='puls-icon'>
          <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
           <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M48 320h64l64-256 64 384 64-224 32 96h64"/>
           <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M464 320 A32 32 0 0 1 432 352 A32 32 0 0 1 400 320 A32 32 0 0 1 464 320 z"/></svg>
        </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Aboutus;
