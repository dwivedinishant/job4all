import React, { useState, useEffect } from 'react';
import Navbar from '../component/Auth/navbar';
import axios from 'axios';
import { Link } from 'react-router';

export default function Jobs() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setIsLoggedIn(token ? true : false);

    axios.get('http://ls.bizbybot.com/api/jobs/latest')
      .then(response => {
        console.log('API response:', response.data);
        setJobs(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <header className="logged-in-gradient loginheader" id="#jobs" style={{ position: "relative", minHeight: "100vh" }}>
        <div className="container mt-5">
          <h1>Latest Jobs Opportunitiies</h1>
          <p className={`${isLoggedIn ? 'tagline2' : 'tagline'}`}>The journey starts here.</p>
          <br/><br/><br/><br/>
          <div className="row">
            {jobs.length === 0 ? (
              <div className="col-md-6 offset-md-3">
                <p className="text-center"  style={{ color: 'white' }}>Loading jobs...</p>
              </div>
            ) : (
              jobs.map((job) => (
                <div key={job.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h4 className="card-title" style={{ color: '#010088' }}>{job.title}</h4>
                      <p className="card-text" style={{ color: '#010088' }}>{job.company_info.name}</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item" style={{ color: '#010088' }}>
                          Experience: {job.experience_min} - {job.experience_max} years
                        </li>
                        <li className="list-group-item" style={{ color: '#010088' }}>
                          Salary: {job.salary_currency} {job.salary_min} - {job.salary_max}
                        </li>
                      </ul>
                      <Link
                        to=""
                        className={`btn btn-primary mt-3 ${job.created_by === 36 ? 'disabled' : ''}`}>
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </header>
    </div>
  );
}   