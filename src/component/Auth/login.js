import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router";

import { toast } from "react-toastify";

import { ToastContainer } from "react-toastify";

import Navbar from "../component/Auth/navbar";

import Carousel from "react-bootstrap/Carousel";

import ExampleCarouselImage from "components/ExampleCarouselImage";

export default function JobDetail() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");

    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);

        setUserData(parsedUserData);
      } catch (error) {
        // Handle JSON parsing errors

        toast.error("Error parsing user data. Please try again.", {
          autoClose: 5000,
        }); // Optionally, clear local storage if data is corrupted

        localStorage.removeItem("user");
      }
    }
  }, []);

  return (
    <div>
            <Navbar />     {" "}
      {/* <header className="logged-in-gradient" id="#jobs" >

        <div className="container mt-5 pb-5">

          <div className="row">

            <div className="col-md-6 offset-md-3">

              <div className="card p-4">

                <div className="card-body">

                  <h3  style={{ color: 'black' }}>Job Details</h3>

                  <div className="mb-3">

                    <label htmlFor="jobTitle"  style={{ color: 'black' }}>Job Title</label>

                    <input

                      type="text"

                      className="form-control"

                      id="jobTitle"

                      placeholder="Enter Job Title"

                      value="NA"

                      readOnly

                    />

                  </div>

                  <div className="mb-3"  style={{ color: 'black' }}>

                    <label htmlFor="companyName">Company Name</label>

                    <input

                      type="text"

                      className="form-control"

                      id="companyName"

                      placeholder="Enter Company Name"

                      value="NA"

                      readOnly

                    />

                  </div>

                  <div className="row"  style={{ color: 'black' }}>

                    <div className="col-md-6">

                      <div className="mb-3">

                        <label htmlFor="salaryMin">Salary Min</label>

                        <input

                          type="text"

                          className="form-control"

                          id="salaryMin"

                          placeholder="Enter Salary Min"

                          value="NA"

                          readOnly

                        />

                      </div>

                    </div>

                    <div className="col-md-6"  style={{ color: 'black' }}>

                      <div className="mb-3">

                        <label htmlFor="salaryMax">Salary Max</label>

                        <input

                          type="text"

                          className="form-control"

                          id="salaryMax"

                          placeholder="Enter Salary Max"

                          value="NA"

                          readOnly

                        />

                      </div>

                    </div>

                  </div>

                  <div className="mb-3"  style={{ color: 'black' }}>

                    <label htmlFor="experience">Work Experience Required</label>

                    <input

                      type="text"

                      className="form-control"

                      id="experience"

                      placeholder="Enter Work Experience Required"

                      value="NA"

                      readOnly

                    />

                  </div>

                  <div className="mb-3"  style={{ color: 'black' }}>

                    <label htmlFor="location">Company Location</label>

                    <input

                      type="text"

                      className="form-control"

                      id="location"

                      placeholder="Enter Company Location"

                      value="NA"

                      readOnly

                    />

                  </div>

                  <div className="mb-3"  style={{ color: 'black' }}>

                    <label htmlFor="skills">Skills Required</label>

                    <input

                      type="text"

                      className="form-control"

                      id="skills"

                      placeholder="Enter Skills Required"

                      value="NA"

                      readOnly

                    />

                  </div>

                  <button type="button" className="btn btn-primary">Apply Now</button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </header> */}
           {" "}
      <header
        className="logged-in-gradient loginheader"
        id="home"
        style={{ position: "relative", minHeight: "100vh" }}
      >
                 {" "}
        <div className="container">
                     {" "}
          <div className="row">
                         {" "}
            <div className="col-md-6 offset-md-3 mt-4">
                             {" "}
              <h2 className="text-center">Account Information</h2>
                              <hr />               {" "}
              <div className="card p-4">
                                 {" "}
                <div className="card-body" style={{ color: "#390088" }}>
                                     {" "}
                  <div className="text-center mb-4">
                                       {" "}
                    <Carousel>
                           {" "}
                      <Carousel.Item interval={1000}>
                                <ExampleCarouselImage text="First slide" />     
                         {" "}
                        <Carousel.Caption>
                                    <h3>First slide label</h3>         {" "}
                          <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                          </p>
                                 {" "}
                        </Carousel.Caption>
                             {" "}
                      </Carousel.Item>
                           {" "}
                      <Carousel.Item interval={500}>
                                <ExampleCarouselImage text="Second slide" />   
                           {" "}
                        <Carousel.Caption>
                                    <h3>Second slide label</h3>         {" "}
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                                 {" "}
                        </Carousel.Caption>
                             {" "}
                      </Carousel.Item>
                           {" "}
                      <Carousel.Item>
                                <ExampleCarouselImage text="Third slide" />     
                         {" "}
                        <Carousel.Caption>
                                    <h3>Third slide label</h3>         {" "}
                          <p>
                                        Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur.          {" "}
                          </p>
                                 {" "}
                        </Carousel.Caption>
                             {" "}
                      </Carousel.Item>
                         {" "}
                    </Carousel>
                                         {" "}
                    <h5 className="card-title">
                                              Hello {userData?.full_name || "~"}
                                           {" "}
                    </h5>
                                       {" "}
                  </div>
                                     {" "}
                  <ul className="list-group list-group-flush">
                                         {" "}
                    <li className="list-group-item">
                                              Email: {userData?.email || "~"}   
                                       {" "}
                    </li>
                                         {" "}
                    <li className="list-group-item">
                                              Phone Number:{" "}
                      {userData?.phone_number || "NA"}                     {" "}
                    </li>
                                         {" "}
                    {/* <li className="list-group-item">

                        Role: {userData?.role || "~"}

                      </li> */}
                                       {" "}
                  </ul>
                                   {" "}
                </div>
                               {" "}
              </div>
                           {" "}
            </div>
                       {" "}
          </div>
                   {" "}
        </div>
             {" "}
      </header>
         {" "}
    </div>
  );
}
