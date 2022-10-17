import React, { Fragment } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Logo from "../../assets/logo.png";
import "../../styles/accountype.scss";
import { Link, useNavigate } from "react-router-dom";
function AccountType() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="accountype">
        <Header />
        <div className="accountype_container">
          <div className="accountype_container--img">
            <img src={Logo} alt="logo" />
          </div>
          <div className="accountype_container--description">
            <h2>Join Kominiti</h2>
            <p>Select the type of individual account...</p>
          </div>
          <div className="accountype_container-wrapper">
            <div className="accountype_container--option">
              <div className="accountype_container--option-top">
                <div
                  onClick={() => navigate("/signup")}
                  className="accountype_container-link"
                >
                  <div className="individual">
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
                      <p>Select the profile that describes you...</p>
                    </div>
                    <div className="individual-arrow">
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.83709 0.774587C7.2032 0.408471 7.79679 0.408471 8.16291 0.774587C8.52903 1.1407 8.52903 1.7343 8.16291 2.10041L3.20082 7.0625H14.0625C14.5803 7.0625 15 7.48223 15 8C15 8.51777 14.5803 8.9375 14.0625 8.9375H3.20083L8.16291 13.8996C8.52903 14.2657 8.52903 14.8593 8.16291 15.2254C7.79679 15.5915 7.2032 15.5915 6.83709 15.2254L0.274586 8.66291C-0.09153 8.2968 -0.09153 7.7032 0.274586 7.33709L6.83709 0.774587Z"
                          fill="#4895EF"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="/signup-form/jobseeker"
                className="accountype_container-link"
              >
                <div className="accountype_container--option-bottom">
                  <div className="business">
                    <div className="business-img">
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99826 0C11.4538 0 13.4427 1.98889 13.4427 4.44444C13.4427 6.9 11.4538 8.88889 8.99826 8.88889C6.54271 8.88889 4.55382 6.9 4.55382 4.44444C4.55382 1.98889 6.54271 0 8.99826 0ZM13.4427 11.7111C13.4427 12.8889 13.1316 15.6333 11.0094 18.7L10.1094 13.3333L11.1538 11.2444C10.4649 11.1667 9.74271 11.1111 8.99826 11.1111C8.25382 11.1111 7.5316 11.1667 6.84271 11.2444L7.88715 13.3333L6.98715 18.7C4.86493 15.6333 4.55382 12.8889 4.55382 11.7111C1.89826 12.4889 0.109375 13.8889 0.109375 15.5556V20H17.8872V15.5556C17.8872 13.8889 16.1094 12.4889 13.4427 11.7111Z"
                          fill="#4895EF"
                        />
                      </svg>
                    </div>
                    <div className="business-description">
                      <h1>Job Seeker</h1>
                      <p>Looking for opportunities?</p>
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
              </Link>
              <Link
                to="/signup-form/freelancer"
                className="accountype_container-link"
              >
                <div className="accountype_container--option-bottom">
                  <div className="business">
                    <div className="business-img">
                      <svg
                        width="26"
                        height="20"
                        viewBox="0 0 26 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M24.25 17.5H1.75C1.41848 17.5 1.10054 17.6317 0.866116 17.8661C0.631696 18.1005 0.5 18.4185 0.5 18.75C0.5 19.0815 0.631696 19.3995 0.866116 19.6339C1.10054 19.8683 1.41848 20 1.75 20H24.25C24.5815 20 24.8995 19.8683 25.1339 19.6339C25.3683 19.3995 25.5 19.0815 25.5 18.75C25.5 18.4185 25.3683 18.1005 25.1339 17.8661C24.8995 17.6317 24.5815 17.5 24.25 17.5ZM23 0H3C2.33696 0 1.70107 0.263392 1.23223 0.732233C0.763392 1.20107 0.5 1.83696 0.5 2.5V15C0.5 15.3315 0.631696 15.6495 0.866116 15.8839C1.10054 16.1183 1.41848 16.25 1.75 16.25H24.25C24.5815 16.25 24.8995 16.1183 25.1339 15.8839C25.3683 15.6495 25.5 15.3315 25.5 15V2.5C25.5 1.83696 25.2366 1.20107 24.7678 0.732233C24.2989 0.263392 23.663 0 23 0ZM12.725 3.75C8.925 3.75 5.4875 5.2875 3 7.775L4.7625 9.5375C6.8 7.5125 9.6125 6.25 12.725 6.25C15.8375 6.25 18.65 7.5125 20.675 9.55L22.4375 7.7875C19.9625 5.2875 16.525 3.75 12.725 3.75ZM6.5375 11.3125L8.3 13.075C9.47612 11.9062 11.0669 11.2502 12.725 11.2502C14.3831 11.2502 15.9739 11.9062 17.15 13.075L18.9125 11.3125C17.325 9.725 15.1375 8.75 12.725 8.75C10.3125 8.75 8.125 9.725 6.5375 11.3125Z"
                          fill="#4895EF"
                        />
                      </svg>
                    </div>
                    <div className="business-description">
                      <h1>Freelancer</h1>
                      <p>Want to showcase your skills?</p>
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
              </Link>
              {/* <Link to='/' className="accountype_container-link">
                                <div className='accountype_container--option-bottom'>
                                    <div className='business'>
                                        <div className='business-img'>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.2642 17.7368C18.2642 20.3484 20.3894 22.4737 23.001 22.4737C25.6126 22.4737 27.7379 20.3484 27.7379 17.7368C27.7379 15.1253 25.6126 13 23.001 13C20.3894 13 18.2642 15.1253 18.2642 17.7368ZM31.4221 33H32.4747V31.9474C32.4747 27.8853 29.1684 24.5789 25.1063 24.5789H20.8958C16.8326 24.5789 13.5273 27.8853 13.5273 31.9474V33H31.4221Z" fill="#4895EF" />
                                            </svg>

                                        </div>
                                        <div className='business-description'>
                                            <h1>Others</h1>
                                            <p>Want to explore Kominiti?</p>
                                        </div>
                                        <div className='business-arrow'>
                                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.6629 8.27459C15.2968 7.90847 14.7032 7.90847 14.3371 8.27459C13.971 8.6407 13.971 9.2343 14.3371 9.60041L19.2992 14.5625H8.4375C7.91973 14.5625 7.5 14.9822 7.5 15.5C7.5 16.0178 7.91973 16.4375 8.4375 16.4375H19.2992L14.3371 21.3996C13.971 21.7657 13.971 22.3593 14.3371 22.7254C14.7032 23.0915 15.2968 23.0915 15.6629 22.7254L22.2254 16.1629C22.5915 15.7968 22.5915 15.2032 22.2254 14.8371L15.6629 8.27459Z" fill="#4895EF" />
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </Link> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default AccountType;
