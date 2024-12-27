import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router';
import { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setUserData(JSON.parse(userData));
  }, []);

  const firstName = userData?.first_name || "";
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

    <div>
        <ToastContainer position="bottom-right" />
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
                        <Link className="nav-link" to="/">
                          HOME
                        </Link>{" "}
                      </li>
                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/">
                          JOBS
                        </Link>{" "}
                      </li>
                      <li className={isLoggedIn ? "d-none" : ""}>
                        {" "}
                        <a className="nav-link" href="#login">
                          LOG IN
                        </a>{" "}
                      </li>
                      <li className={isLoggedIn ? "" : "d-none"}>
                        <Link
                          to=""
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
    </div>
  )
}
