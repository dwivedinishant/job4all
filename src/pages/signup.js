import React from 'react';
import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';

export default function Signup() {
  return (
    <>
      <body data-spy="scroll" data-target="navbar" data-offset="30">
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
                    <li className="nav-item">
                      <Link to="/login" className="nav-link active">
                        <SlArrowLeftCircle />
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
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            
            <h1 className="text-center" style={{ color: '#633991', fontWeight: '400' }}>SignUp</h1>
            <h6 className="text-center" style={{ color: '#633991', fontWeight: '300' }}>Let’s get started with awesome energy!</h6>
            <br/>
            <form>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <br />
              <div className="form-group mt-2">
                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
                <br/><br/>
              </div>
            </form>
          </div>
        </header>
      </body>
    </>
  );
}
