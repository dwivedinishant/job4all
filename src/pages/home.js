import React, { useState } from "react";
import iphonex from "../images/iphonex.png";
import iphonex2 from "../images/iphonex2.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const latestJobsUrl = "http://ls.bizbybot.com/api/jobs/latest";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [latestJobs, setLatestJobs] = useState([]);


  useEffect(() => {
    const userData = localStorage.getItem("user");
    setUserData(JSON.parse(userData));
  }, []);

  const firstName = userData?.first_name || "";

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");

    toast.success("Successfully logged out", {
      autoClose: 500,
    });

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };


  return (
    <>
      <div data-spy="scroll" data-target="navbar" data-offset="30">
        
        <div className="nav-menu fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-dark navbar-expand-lg">
                  <a className="navbar-brand" href="/">
                    <h3>Job4All</h3>
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="navbar"
                    aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    {" "}
                    <span className="navbar-toggler-icon"></span>{" "}
                  </button>
                  <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        {" "}
                        <a className="nav-link" href="#home">
                          HOME
                        </a>{" "}
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a className="nav-link" href="#jobs">
                          JOBS
                        </a>{" "}
                      </li>
                      <li className={isLoggedIn ? "d-none" : ""}>
                        {" "}
                        <a className="nav-link" href="#login">
                          LOG IN
                        </a>{" "}
                      </li>
                      <li className={isLoggedIn ? "" : "d-none"}>
                        <Link
                          to="/postajob"
                          className="btn btn-outline-light my-3 my-sm-0 ml-lg-3"
                        >
                          Post a Job
                        </Link>
                      </li>
                      {isLoggedIn && (
                        <li className="nav-item dropdown ml-3 active">
                          <Link
                            className="nav-link dropdown-toggle"
                            to=""
                            id="accountDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {firstName}
                          </Link>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="accountDropdown"
                          >
                            <Link className="dropdown-item" to="/myAccount">
                              My Account
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link
                              className="dropdown-item"
                              onClick={handleLogout}
                            >
                              Log Out
                            </Link>
                          </div>
                        </li>
                      )}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section  */}

        <header
          className={`bg-gradient ${isLoggedIn ? "logged-in-gradient" : ""}`}
          id="home"
        >
          <div className="container mt-5">
            <h1>Connecting Talent with Opportunity</h1>
            <p className={`${isLoggedIn ? "tagline2" : "tagline"}`}>
              Find your dream job or the perfect candidate—
              <br></br>your journey starts here.
            </p>
          </div>
          <div className="img-holder mt-3">
            <img src={iphonex} alt="phone" className="img-fluid" />
          </div>
        </header>

        {/* Job Filter */}

        <div className="client-logos my-5" id="jobs">
          <div className="container text-center">
            <div className="d-flex justify-content-center align-items-center mb-4">
              <div className="input-group me-2">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Keyword, Skills, Job Title"
                />
              </div>
              <div className="input-group ">
              <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <select className="form-control">
                  
                  <option value="">Job Type</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="freelance">Freelance</option>
                </select>
              </div>
              <div className="input-group me-2">
                <span className="input-group-text">
                  <i className="bi bi-geo-alt"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Anywhere"
                />
              </div>
              <button className="btn btn-primary fw-bold">SEARCH</button>
            </div>
          </div>
        </div>

        {/* Latest Jobs  */}

        <div className="section light-bg" id="features">
          <div className="container">
            <div className="section-title">
              <small>HIGHLIGHTS</small>
              <h3>Latest Jobs</h3>
            </div>
            {/* <div className="row">
              <div className="col-12 col-lg-4">
                <div className="card features">
                  <div className="card-body">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="card-title">{companyTitle}</h4>
                        <p className="card-text">{companyName}</p>
                        <p className="card-text">Experience Required : {companyExpMin}-{companyExpMax} years</p>
                        <p className="card-text"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <br/>
            <div className="d-flex justify-content-center">
              <Link to='jobs' className="btn btn-primary fw-bold morejobs">More Jobs</Link>
            </div>
          </div>
        </div>

        {/* LOGIN SECTION  */}

        <div
          className={`bg-gradient header2 ${
            isLoggedIn ? "logged-in-gradient" : ""
          }`}
          id="login"
        >
          <div className="img-holder2">
            <img src={iphonex2} alt="phone" className="img-fluid" />
          </div>
          <div className={isLoggedIn ? "d-none" : "container pb-5"}>
            <h2>Join us now</h2>
            <p class="mb-3">Login to your account</p>
            <Link to="/login" className="btn btn-primary">
              Log in
            </Link>
          </div>
        </div>

        {/* Website connects  */}

        <div className="section light-bg">
          <div className="container">
            <div className="call-to-action">
              <div className="row">
                <div className="col-lg-6 text-center text-lg-left">
                  <p className="mb-2">
                    {" "}
                    <span className="ti-location-pin mr-2"></span> Abc , Noida
                    110052
                  </p>
                  <div className=" d-block d-sm-inline-block">
                    <p className="mb-2">
                      <span className="ti-email mr-2"></span>{" "}
                      <Link className="mr-4" to="mailto:abc@abc.com">
                        abc@abc.com
                      </Link>
                    </p>
                  </div>
                  <div className="d-block d-sm-inline-block">
                    <p className="mb-0">
                      <span className="ti-headphone-alt mr-2"></span>{" "}
                      <Link to="tel:123-123-1234">123-123-1234</Link>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="social-icons">
                    <Link to="">
                      <span className="ti-facebook"></span>
                    </Link>
                    <Link to="">
                      <span className="ti-twitter-alt"></span>
                    </Link>
                    <Link to="">
                      <span className="ti-instagram"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer  */}

        <footer className="my-5 text-center">
          <p className="mb-2">
            <small>© 2024.</small>
          </p>
          <small>
            <Link to="" className="m-2">
              TERMS
            </Link>
            <Link to="" className="m-2">
              PRIVACY
            </Link>
          </small>
        </footer>
      </div>
    </>
  );
}
