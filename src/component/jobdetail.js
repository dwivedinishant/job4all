import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Navbar from "../component/Auth/navbar";
import Carousel from 'react-bootstrap/Carousel';
import Job1 from '../images/Job1.jpg';
import Job2 from '../images/Job2.jpg';
import Job3 from '../images/Job3.jpg';

export default function JobDetail() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('user');

    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
      } catch (error) {
        toast.error('Error parsing user data. Please try again.', {
          autoClose: 5000,
        });
        localStorage.removeItem('user');
      }
    }
  }, []);

  return (
    <div>
      <Navbar />
      <header className="logged-in-gradient loginheader" id="home" style={{ position: "relative", minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 mt-3">
              <h2 className="text-center">Job Detail</h2>
              <hr />
              <div className="card p-3 formbgcustomDetailJob"> 
                <div className="card-body" style={{ color: "#390088" }}>
                  <div className="text-center mb-4"> 
                    {/* <Carousel>
                      <Carousel.Item interval={1000}>
                        <img src={Job1} style={{height : '50vh' , overflow : 'hidden'}}/>
                      </Carousel.Item>
                      <Carousel.Item interval={1000}>
                      <img src={Job2}  style={{height : '50vh', overflow : 'hidden'}}/>
                      </Carousel.Item>
                      <Carousel.Item>
                      <img src={Job3}  style={{height : '50vh', overflow : 'hidden'}}/> 
                      </Carousel.Item>
                    </Carousel> */}
                    <h5 className="card-title"> Software Developer </h5>
                    <h6 className="card-title"> Tech Solutions </h6>
                    <p style={{textAlign : 'justify' , marginInline: '20px', marginBlock: '20px'}}>We are seeking a highly skilled and motivated Software Developer to join our team. The ideal candidate will have a strong understanding of software development principles and practices, and a passion for building high-quality software.</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Salary expected : $300 - 500$
                    </li>
                    <li className="list-group-item">
                      Work Experience : 1 - 2 Years
                    </li>
                    <li className="list-group-item">
                      Skills Required : Java, Python, C++, JavaScript
                    </li>
                    
                    {/* <li className="list-group-item">
                      Role: {userData?.role || "~"}
                    </li> */}
                  </ul>
                  <br/>
                    <button type="button" className="btn btn-primary">Apply Now</button>
                  <br/><br/>
                  <p> ⚲ Mumbai , 229031</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}