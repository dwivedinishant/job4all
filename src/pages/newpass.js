import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function NewPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const handleContinue = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error('Both fields are required');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    axios.post('http://ls.bizbybot.com/api/auth/password/reset', {
      token,
      password,
      confirm_password: confirmPassword,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success('Password updated successfully! Login to continue');
          setTimeout(() => navigate('/login'), 3000);
        } else {
          throw new Error('Failed to reset password');
        }
      })
      .catch((error) => {
        console.error('Password reset failed:', error);
        // toast.error(error.message);
      });
  };

  return (
    <>

      <div>
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
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

        {/* Content */}
        <header className="bg-gradient loginheader" id="home" style={{ 
          position: 'relative', 
          minHeight: '100vh' 
        }}>
          <div className="loginform-container" style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '400px',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
          }}>
            <h1 className="text-center" style={{ color: '#633991', fontWeight: '400' }}>
              Change Password
            </h1>
            <h6 className="text-center" style={{ color: '#633991', fontWeight: '300' }}>
              Please enter your new password
            </h6>
            <br />
            <form onSubmit={handleContinue}>
              <div className="form-group mt-3">
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Re-enter New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group mt-2">
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </div>
              <br />
            </form>
          </div>
        </header>
      </div>
    </>
  );
}