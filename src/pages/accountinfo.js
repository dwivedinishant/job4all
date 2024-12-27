import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import ProfilePicture from '../images/ProfilePic.png';
import Navbar from "../component/Auth/navbar";

export default function Accountinfo() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    const parsedUserData = JSON.parse(storedUserData);

    if (parsedUserData) {
      setUserData(parsedUserData);
    } else {
      toast.error("Please login to access this page.", {
        autoClose: 5000,
      });

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }, []);

  return (
    <>
      <div>
        <Navbar/>

        <header className="logged-in-gradient loginheader" id="home" style={{ position: "relative", minHeight: "100vh" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3 mt-4">
                <h2 className="text-center">Account Information</h2>
                <hr />
                <div className="card p-4"> 
                  <div className="card-body" style={{ color: "#390088" }}>
                    <div className="text-center mb-4"> 
                      <img
                        src={
                          userData?.profile_picture
                            ? userData?.profile_picture
                            : ProfilePicture
                        }
                        alt="Profile Picture"
                        className="rounded-circle mb-3" 
                        style={{ width: "80px", height: "80px" }} 
                      />
                      <h5 className="card-title">
                        Hello {userData?.full_name || "~"}
                      </h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Email: {userData?.email || "~"}
                      </li>
                      <li className="list-group-item">
                        Phone Number: {userData?.phone_number || "NA"}
                      </li>
                      {/* <li className="list-group-item">
                        Role: {userData?.role || "~"}
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

      </div>
    </>
  );
}
