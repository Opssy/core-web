import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Logo from "../../assets/logo.png";
import "../../styles/signup.scss";
function Signup() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="auth">
        <Header />
        <div className="auth_container">
          <div className="auth_container--img">
            <img src={Logo} alt="logo" />
          </div>
          <div className="auth_container--description">
            <h2>Join Kominiti</h2>
            <p>What type of account will you be opening today?</p>
          </div>
          <div className="auth_container-wrapper">
            <div className="auth_container--option">
              <div className="auth_container--option-top">
                <div className="individual" onClick={() => navigate("/account-type")}>
                  <div className="individual-img">
                    <svg
                      width="27"
                      height="30"
                      viewBox="0 0 27 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.1967 20.1967C3.60322 18.7902 5.51087 18 7.5 18H19.5C21.4891 18 23.3968 18.7902 24.8033 20.1967C26.2098 21.6032 27 23.5109 27 25.5V28.5C27 29.3284 26.3284 30 25.5 30C24.6716 30 24 29.3284 24 28.5V25.5C24 24.3065 23.5259 23.1619 22.682 22.318C21.8381 21.4741 20.6935 21 19.5 21H7.5C6.30653 21 5.16193 21.4741 4.31802 22.318C3.47411 23.1619 3 24.3065 3 25.5V28.5C3 29.3284 2.32843 30 1.5 30C0.671573 30 0 29.3284 0 28.5V25.5C0 23.5109 0.790176 21.6032 2.1967 20.1967Z"
                        fill="#4895EF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5 3C11.0147 3 9 5.01472 9 7.5C9 9.98528 11.0147 12 13.5 12C15.9853 12 18 9.98528 18 7.5C18 5.01472 15.9853 3 13.5 3ZM6 7.5C6 3.35786 9.35786 0 13.5 0C17.6421 0 21 3.35786 21 7.5C21 11.6421 17.6421 15 13.5 15C9.35786 15 6 11.6421 6 7.5Z"
                        fill="#4895EF"
                      />
                    </svg>
                  </div>
                  <div className="individual-description">
                    <h1>Individual</h1>
                    <p>Personal account to manage all you activities.</p>
                  </div>
                  <div className="individual-arrow">
                    <svg
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.6629 8.27459C15.2968 7.90847 14.7032 7.90847 14.3371 8.27459C13.971 8.6407 13.971 9.2343 14.3371 9.60041L19.2992 14.5625H8.4375C7.91973 14.5625 7.5 14.9822 7.5 15.5C7.5 16.0178 7.91973 16.4375 8.4375 16.4375H19.2992L14.3371 21.3996C13.971 21.7657 13.971 22.3593 14.3371 22.7254C14.7032 23.0915 15.2968 23.0915 15.6629 22.7254L22.2254 16.1629C22.5915 15.7968 22.5915 15.2032 22.2254 14.8371L15.6629 8.27459Z"
                        fill="#4895EF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="auth_container--option-bottom">
                <div className="business" onClick={() => navigate("/business-form")}>
                  <div className="business-img">
                    <svg
                      width="34"
                      height="30"
                      viewBox="0 0 34 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 9C4.17157 9 3.5 9.67157 3.5 10.5V25.5C3.5 26.3284 4.17157 27 5 27H29C29.8284 27 30.5 26.3284 30.5 25.5V10.5C30.5 9.67157 29.8284 9 29 9H5ZM0.5 10.5C0.5 8.01472 2.51472 6 5 6H29C31.4853 6 33.5 8.01472 33.5 10.5V25.5C33.5 27.9853 31.4853 30 29 30H5C2.51472 30 0.5 27.9853 0.5 25.5V10.5Z"
                        fill="#4895EF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.818 1.31802C11.6619 0.474106 12.8065 0 14 0H20C21.1935 0 22.3381 0.474106 23.182 1.31802C24.0259 2.16193 24.5 3.30652 24.5 4.5V28.5C24.5 29.3284 23.8284 30 23 30C22.1716 30 21.5 29.3284 21.5 28.5V4.5C21.5 4.10218 21.342 3.72064 21.0607 3.43934C20.7794 3.15804 20.3978 3 20 3H14C13.6022 3 13.2206 3.15804 12.9393 3.43934C12.658 3.72064 12.5 4.10218 12.5 4.5V28.5C12.5 29.3284 11.8284 30 11 30C10.1716 30 9.5 29.3284 9.5 28.5V4.5C9.5 3.30652 9.97411 2.16193 10.818 1.31802Z"
                        fill="#4895EF"
                      />
                    </svg>
                  </div>
                  <div className="business-description">
                    <h1>Business Owner</h1>
                    <p>Own or belong to a company?</p>
                  </div>
                  <div className="business-arrow">
                    <svg
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.6629 8.27459C15.2968 7.90847 14.7032 7.90847 14.3371 8.27459C13.971 8.6407 13.971 9.2343 14.3371 9.60041L19.2992 14.5625H8.4375C7.91973 14.5625 7.5 14.9822 7.5 15.5C7.5 16.0178 7.91973 16.4375 8.4375 16.4375H19.2992L14.3371 21.3996C13.971 21.7657 13.971 22.3593 14.3371 22.7254C14.7032 23.0915 15.2968 23.0915 15.6629 22.7254L22.2254 16.1629C22.5915 15.7968 22.5915 15.2032 22.2254 14.8371L15.6629 8.27459Z"
                        fill="#4895EF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Signup;
