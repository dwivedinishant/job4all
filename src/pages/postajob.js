import React, { useState, useEffect } from "react";
import Navbar from "../component/Auth/navbar";
import { Form } from "react-bootstrap";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Redactor } from '@texttree/notepad-rcl';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMemo, useRef } from "react";
import JoditEditor from 'jodit-react';

export default function Postajob() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [value, setValue] = useState()
  const [showCompanyDetails, setShowCompanyDetails] = useState(false);
  const editor = useRef(null);
	const [content, setContent] = useState('');


  const handleToggle = () => {
    setShowCompanyDetails(!showCompanyDetails);
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(token ? true : false);
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    contract_year: "",
    experience_min: "",
    experience_max: "",
    salary_min: "",
    salary_max: "",
    currency: "",
    location: "",
    job_types: [],
    industry_types: [],
    workplace_types: [],
    qualifications: "",
    descriptions: "",
    responsibilities: "",
    skills: [],
    educations: [],
    company_name: "",
    city: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData({ ...formData, image_url: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Navbar />
      <header className="logged-in-gradient textalignpostajob" id="#jobs">
        <div className="container mt-5">
          <h1 className="pl-3" style={{ color: "WHITE" }}>Post a Job
            <p className="pt-3" style={{fontSize : '1rem'}}>All fields marked with an asterisk (*) are required.</p>
          </h1>
          
          <div className="row mt-4 d-flex ">
            <div className="col-md-6 mb-5">
              <div className="card shadow-sm formbgcustom">
                <div className="card-body" style={{ color: "black" }}>
                  <form onSubmit={handleSubmit}>
                    <h4 style={{ color: "white" }}>Job Essentials</h4>
                    <hr />
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Job Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Job Type
                      </label>
                      <select
                        className="form-control"
                        id="job_type"
                        name="job_type"
                        onChange={handleChange}
                      >
                        <option value="">Select...</option>
                        <option value="1">Full Time</option>
                        <option value="2">Part Time</option>
                        <option value="3">Contract</option>
                        <option value="4">Internship</option>
                        <option value="Permanent">Permanent</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label  className="form-label">
                        Job Location
                      </label>
                      <select
                        className="form-control"
                        id="job_location"
                        name="job_location"
                        onChange={handleChange}
                      >
                        <option value="">Select...</option>
                        <option value="1">Remote</option>
                        <option value="2">On-Site</option>
                        <option value="3">Hybrid</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Experience Level
                      </label>
                      <select
                        className="form-control"
                        id="experience_level"
                        name="experience_level"
                        onChange={handleChange}
                      >
                        <option value="">Select...</option>
                        <option value="1">Entry Level</option>
                        <option value="2">Junior</option>
                        <option value="3">Mid Level</option>
                        <option value="4">Senior</option>
                        <option value="5">Executive</option>
                      </select>
                    </div>
                    <br/>
                    <h4 style={{ color: "white" }}>Compensation & Benefits</h4>
                    <hr/>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="salary_min" className="form-label">
                            Min Salary
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="salary_min"
                            name="salary_min"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="salary_max" className="form-label">
                            Max Salary
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="salary_max"
                            name="salary_max"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="currency" className="form-label">
                        Currency
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="currency"
                        name="currency"
                        placeholder="e.g., USD, INR"
                        onChange={handleChange}
                      />
                    </div>
                    <br/>
                    <h4 style={{ color: "white" }}>Job Description</h4>      
                    <JoditEditor
                      ref={editor}
                      value={content}
                      onChange={newContent => {}}/>
                    <hr/>              
                    <br/>
                    <div>
                    {!showCompanyDetails ? (
                      <h4 style={{ color: "white" }}>Company Information</h4>
                    ) : null}
                    {!showCompanyDetails ? (
                      <hr />
                    ) : null}
                    {!showCompanyDetails ? (
                      <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                       Existing Company Name 
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    ) : null}
                    
                    <Form.Check type="radio" aria-label="radio 1" className="ml-4" label='Not an existing company?' onChange={handleToggle}/>
                    <br/>
                    {!showCompanyDetails ? (
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    ) : null}
                  </div>
                  </form>
                </div>
              </div>
            </div>


            {showCompanyDetails && ( 
            <div className="col-md-6 mb-5">
            {/* <img src={resume} alt="Resume preview" className="img-fluid" /> */}
            <div className="">
             
                <div className="card shadow-sm formbgcustom">
                  <div className="card-body" style={{ color: "black" }}>
                    <h4 style={{ color: "white" }}>Company Information</h4>
                    <hr />
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Phone
                      </label>
                      <PhoneInput
                        placeholder="Enter phone number"
                        className="form-control"
                        value={value}
                        onChange={setValue}/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Description
                      </label>
                      <JoditEditor
                      ref={editor}
                      value={content}
                      onChange={newContent => {}}/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Company Images 
                      </label>
                      <span className="font-css top"></span>
                      <div className="">
                          <input type="file" id="file-input" name="ImageStyle"/>
                      </div><br></br><hr/>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
               
            </div>
          </div>
          )}
            
          </div>
        </div>
      </header>
    </div>
  );
}
