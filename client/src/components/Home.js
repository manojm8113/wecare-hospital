import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Carousel from 'react-bootstrap/Carousel';
import hero from './assets/hero.jpg'
import hero2 from './assets/slider2.jpg'
import hero3 from './assets/slider3.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdLocalHospital } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { CgSmileMouthOpen } from "react-icons/cg";
import Footer from './Footer';
const Home = () => {
  return (
    <div>
    <Navbar/>
    <div className='container-flex'>
    <Carousel>
      <Carousel.Item>
        <img src={hero} className="carousel-banner" alt="First slide" />
        <Carousel.Caption className="carousel-caption">
          <h3>Excellence in Healthcare</h3>
          <p>Providing compassionate and comprehensive medical care for your well-being.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={hero2} className="carousel-banner" alt="Second slide" />
        <Carousel.Caption className="carousel-caption">
          <h3>Advanced Medical Facilities</h3>
          <p>State-of-the-art technology and experienced professionals at your service.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={hero3} className="carousel-banner" alt="Third slide" />
        <Carousel.Caption className="carousel-caption">
          <h3>Committed to Your Health</h3>
          <p>Our priority is to ensure you receive the best care and support.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  <section>
    <div className='container-fluid'>
    <Row>
      <Col className='col-sm-6 col-md-3 first-section'><MdLocalHospital />Care about your Health</Col>
      <Col className='col-sm-6 col-md-3 second-section'><FaUserDoctor />Professional Doctors</Col>
      <Col className='col-sm-6 col-md-3 first-section'><FaWheelchair />15000+ People Treated</Col>
      <Col className='col-sm-6 col-md-3 second-section'><CgSmileMouthOpen />Fast and Flex Service</Col>
    </Row>
  </div>
  </section>
  <section className="py-3 py-md-5 py-xl-8">
  <div className="container our-treatments">
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 className="mb-4 display-5 text-center">Our Treatments</h2>
        <span className='puls-icon'><svg
        viewBox="0 0 512 512"
        fill="currentColor"
        height="1em"
        width="1em">
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
        <p className="text-secondary mb-5 text-center lead fs-4">Take a Look at our Treatments</p>       
        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
    </div>
  </div>
  <div className="container">
  <div className="row">
    <div className="col-12">
      <div className="container-fluid">
        <div className="row gy-3 gy-md-4">         
          <div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch services">
            <div className="card border-dark flex-fill">
              <div className="card-body text-center p-4 p-xxl-5 d-flex flex-column">
                <img src='https://www.yudaah.com/demo/dil-hospital/assets/images/treatments/treatment_1.png' width="48" height="48" alt="Cardiology" className="bi bi-heart text-primary mb-4"/>
                <h4 className="mb-4">Cardiology</h4>
                <p className="mb-4 text-secondary">Our expert cardiology team provides comprehensive care for heart conditions using the latest medical advancements.</p>
              </div>
            </div>
          </div>            
          <div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch services">
            <div className="card border-dark flex-fill">
              <div className="card-body text-center p-4 p-xxl-5 d-flex flex-column">
                <img src='https://www.yudaah.com/demo/dil-hospital/assets/images/treatments/treatment_2.png' width="48" height="48" alt="Orthopedics" className="bi bi-bone text-primary mb-4"/>
                <h4 className="mb-4">Orthopedics</h4>
                <p className="mb-4 text-secondary">Our orthopedics department offers advanced treatments for bone, joint, and muscle disorders to improve mobility and quality of life.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 d-flex align-items-stretch services">
            <div class="card border-dark flex-fill">
              <div class="card-body text-center p-4 p-xxl-5 d-flex flex-column">
                <img src="https://www.yudaah.com/demo/dil-hospital/assets/images/treatments/treatment_3.png" width="48" height="48" alt="Neurology" class="bi bi-brain text-primary mb-4"/>
                <h4 class="mb-4">Neurology</h4>
                <p class="mb-4 text-secondary">Our neurology specialists diagnose and treat a wide range of neurological disorders with cutting-edge techniques.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 d-flex align-items-stretch services">
            <div class="card border-dark flex-fill">
              <div class="card-body text-center p-4 p-xxl-5 d-flex flex-column">
                <img src="https://www.yudaah.com/demo/dil-hospital/assets/images/treatments/treatment_4.png" width="48" height="48" alt="Pediatrics" class="bi bi-child text-primary mb-4"/>
                <h4 class="mb-4">Pediatrics</h4>
                <p class="mb-4 text-secondary">Our pediatrics department provides compassionate and comprehensive care for children from infancy through adolescence.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 d-flex align-items-stretch services">
            <div class="card border-dark flex-fill">
              <div class="card-body text-center p-4 p-xxl-5 d-flex flex-column">
                <img src="https://www.yudaah.com/demo/dil-hospital/assets/images/treatments/treatment_5.png" width="48" height="48" alt="Dermatology" class="bi bi-skin text-primary mb-4"/>
                <h4 class="mb-4">Dermatology</h4>
                <p class="mb-4 text-secondary">Our dermatologists provide expert care for skin conditions, offering advanced treatments and personalized care plans.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 d-flex align-items-stretch services">
            <div class="card border-dark flex-fill">
              <div class="card-body text-center p-4 p-xxl-5 d-flex flex-column">
                <img src="https://www.yudaah.com/demo/dil-hospital/assets/images/treatments/treatment_6.png" width="48" height="48" alt="Oncology" class="bi bi-ribbon text-primary mb-4"/>
                <h4 class="mb-4">Oncology</h4>
                <p class="mb-4 text-secondary">Our oncology team offers comprehensive cancer care, from diagnosis to treatment and support services.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 d-flex align-items-stretch services">
            <div class="card border-dark flex-fill">
              <div class="card-body text-center p-4 p-xxl-5 d-flex flex-column">
                <img src="https://www.yudaah.com/demo/dil-hospital/assets/images/treatments/treatment_7.png" width="48" height="48" alt="Radiology" class="bi bi-xray text-primary mb-4"/>
                <h4 class="mb-4">Radiology</h4>
                <p class="mb-4 text-secondary">Our radiology department utilizes state-of-the-art imaging technology to provide accurate diagnostics and treatment planning.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 d-flex align-items-stretch services">
            <div class="card border-dark flex-fill">
              <div class="card-body text-center p-4 p-xxl-5 d-flex flex-column">
                <img src="https://www.yudaah.com/demo/dil-hospital/assets/images/treatments/treatment_8.png" width="48" height="48" alt="Surgery" class="bi bi-scalpel text-primary mb-4"/>
                <h4 class="mb-4">Surgery</h4>
                <p class="mb-4 text-secondary">Our surgery department offers a wide range of surgical procedures with a focus on minimally invasive techniques and patient safety.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<section className="py-5 py-xl-8">
  <div className="container we-help">
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 className="mb-4 display-5 text-center">We Are Always Ready To Help You & Your Family</h2>
       <span className='puls-icon'><svg
        viewBox="0 0 512 512"
        fill="currentColor"
        height="1em"
        width="1em">
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
        <p className="text-secondary mb-5 text-center lead fs-4">Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
    </div>
  </div>
  <div className="container overflow-hidden">
    <div className="row gy-5 gy-md-6 gy-lg-0">
      <div className="col-6 col-lg-4">
        <div className="text-center">
          <div className="d-flex align-items-center justify-content-center  mb-3 mx-auto bsb-circle">
          <span className='medi-icons'><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 640 512"><path d="M0 48C0 21.5 21.5 0 48 0H368c26.5 0 48 21.5 48 48V96h50.7c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3V256v32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V48zM416 256H544V237.3L466.7 160H416v96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM176 80v48l-48 0c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V192h48c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16H240V80c0-8.8-7.2-16-16-16H192c-8.8 0-16 7.2-16 16z"/></svg>
          </span>
          </div>
          <h5 className="display-6 fw-bold m-1">Emergency Help</h5>
          <p className="text-secondary m-0">Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
        </div>
      </div>
      <div className="col-6 col-lg-4">
        <div className="text-center">
          <div className="d-flex align-items-center justify-content-center  mb-3 mx-auto bsb-circle">
          <span className='medi-icons'><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 384 512"><path d="M222.6 43.2l-.1 4.8H288c53 0 96 43 96 96s-43 96-96 96H248V160h40c8.8 0 16-7.2 16-16s-7.2-16-16-16H248 220l-4.5 144H256c53 0 96 43 96 96s-43 96-96 96H240V384h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H213l-3.1 99.5L208.5 495l0 1c-.3 8.9-7.6 16-16.5 16s-16.2-7.1-16.5-16l0-1-1-31H136c-22.1 0-40-17.9-40-40s17.9-40 40-40h36l-1-32H152c-53 0-96-43-96-96c0-47.6 34.6-87.1 80-94.7V256c0 8.8 7.2 16 16 16h16.5L164 128H136 122.6c-9 18.9-28.3 32-50.6 32H56c-30.9 0-56-25.1-56-56S25.1 48 56 48h8 8 89.5l-.1-4.8L161 32c0-.7 0-1.3 0-1.9c.5-16.6 14.1-30 31-30s30.5 13.4 31 30c0 .6 0 1.3 0 1.9l-.4 11.2zM64 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>
</span>
          </div>
          <h5 className="display-6 fw-bold m-1">Enriched Pharmecy</h5>
          <p className="text-secondary m-0">Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
        </div>
      </div>
      <div className="col-6 col-lg-4">
        <div className="text-center">
          <div className="d-flex align-items-center justify-content-center  mb-3 mx-auto bsb-circle">
          <span className='medi-icons'><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 576 512"><path d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
          </span>
          </div>
          <h5 className="display-6 fw-bold m-1">Medical Treatment
          </h5>
          <p className="text-secondary m-0">Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.
          </p>
        </div>
      </div>   
    </div>
  </div>
</section>
<section className="bg-dark banner">
  <div className="container-fluid overflow-hidden">
    <div className="row">
      <div className="col-12 col-md-6 order-1 order-md-0 align-self-md-end">
        <div className="row py-3 py-sm-5 py-xl-9 mt-md-10 justify-content-sm-center">
          <div className="col-12 col-sm-10">
            <h2 className="display-2 fw-bolder mb-4 text-white">We Provide You The Best Treatment In Resonable Price</h2>
            <div className="row">
              <div className="col-12 col-xxl-8">
                <p className="fs-5 mb-5 text-white">We work in a customized way by devising and handling entirely online projects with long-term partnerships.</p>
              </div>
            </div>
            <div className="d-grid gap-2 d-sm-flex">
              <button type="button" className="btn btn-warning bsb-btn-2xl rounded-pill">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 p-0">
        <img className="img-fluid w-100 h-100 object-fit-cover" loading="lazy" src="https://www.yudaah.com/demo/dil-hospital/assets/images/blog/blog_03.jpg" alt="We Offer Modern Web Solutions"/>
      </div>
    </div>
  </div>
</section>
  <Footer/>
    </div>
  )
}
export default Home