import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const loginUrl = "http://ls.bizbybot.com/api/auth/login";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Email is required');
      return;
    }

    if (!password) {
      toast.error('Password is required');
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const response = await axios.post(loginUrl, formData);
      localStorage.setItem('access_token', response.data.data.access_token);
      localStorage.setItem('user', JSON.stringify(response.data.data));
      toast.success('Login successful!');
      setIsLoading(false);
      setSuccess(true);  
    } catch (error) {
      setIsLoading(false);
      const errorMessage = error.response?.data?.message || 'An error occurred. Please try again.';
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (success) {
      const timeoutId = setTimeout(() => navigate('/'), 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [success]);
  return (
    <>
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
                    <p className="nav-link">Don't have an account yet?</p>
                  </h3>
                  <li className="nav-item">
                    <Link to="/signup" className="btn btn-outline-light my-3 my-sm-0 ml-lg-3">
                      Sign up
                    </Link>
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
          <h1 className="text-center" style={{ color: '#633991', fontWeight: '400' }}>
            Login
          </h1>
          <h6 className="text-center" style={{ color: '#633991', fontWeight: '300' }}>
            Welcome Back!
          </h6>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group mt-2">
              <button type="submit" className="btn btn-primary w-100">
                 {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </div>
            <div className="form-group text-center mt-3">
              <Link to="/enter-email-pass" className="text-decoration-none">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </header>
    </>
  );
}
export default Login;