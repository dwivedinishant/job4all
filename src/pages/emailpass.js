import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Emailpass() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error('Please enter a valid email address.');
      return;
    }

    axios.post('http://ls.bizbybot.com/api/auth/password/forgot', { email })
      .then((response) => {
        if (response.status === 200) {
          toast.success('Password reset email sent successfully!');
          setEmail('');
        } else {
          console.error('API returned non-200 status code:', response.status);
          if (response.data && response.data.error) {
            toast.error(response.data.error);
          } else {
            toast.error('An error occurred. Please try again.');
          }
        }
      })
      .catch((error) => {
        console.error('Error sending reset email:', error);
        toast.error('An error occurred. Please try again.');
      });
  };

  return (
    <>
      <div data-spy="scroll" data-target="navbar" data-offset="30">
        {/* Navigation Bar */}
        <div className="nav-menu fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-dark navbar-expand-lg">
                  <a className="navbar-brand" href="/">
                    <h3>Job4All</h3>
                  </a>
                  <ul className="navbar-nav ml-auto">
                    <h3 className="nav-item">
                      <p className="nav-link">Go back to</p>
                    </h3>
                    <li className="nav-item">
                      <Link to="/login" className="btn btn-outline-light my-3 my-sm-0 ml-lg-3">Login</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="bg-gradient loginheader" id="home" style={{ position: 'relative', minHeight: '100vh' }}>
          <div
            className="loginform-container"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              maxWidth: '400px',
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h1 className="text-center" style={{ color: '#633991', fontWeight: '400' }}>Reset Password</h1>
            <h6 className="text-center" style={{ color: '#633991', fontWeight: '300' }}>Enter your email</h6>
            <br />
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email} // Bind the state to the input value
                  onChange={(e) => setEmail(e.target.value)} // Update state on change
                />
              </div>
              <br />
              <div className="form-group mt-1">
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </header>
      </div>
    </>
  );
}
