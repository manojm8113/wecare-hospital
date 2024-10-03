import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/userLogin/forgot-password', { Email: email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div>
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card border border-light-subtle rounded-3 shadow-sm">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="text-center mb-3">
                    <a href="#!">
                      <img src="./assets/img/bsb-logo.svg" alt="BootstrapBrain Logo" width="175" height="57" />
                    </a>
                  </div>
                  <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                    Provide the email address associated with your account to recover your password.
                  </h2>
                  {message && <div className="alert alert-info">{message}</div>}
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-2 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <label htmlFor="email" className="form-label">Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid my-3">
                          <button className="btn btn-primary btn-lg" type="submit">Reset Password</button>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex gap-2 justify-content-between">
                          <Link to={'/login'} className="link-primary text-decoration-none">Log In</Link>
                          <Link to={'/signup'} className="link-primary text-decoration-none">Register</Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forgotpassword;
