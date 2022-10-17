import React, { Fragment, useState, useContext } from "react";
import { Tag, Input } from "antd";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Popup from "./component/videoPop";
import List from "./component/MarketplaceList";
import DealList from "./component/HotdealList";
import Lists from "./component/BestList"
import PopularList from "./component/PopularList";
import video from "../../assets/video.png";
import bannerOne from "../../assets/banner_1.png";
import bannerTwo from "../../assets/banner_2.png";
import Group from "../../assets/Group.png";
import GroupOne from "../../assets/Group-2.png";
import GroupTwo from "../../assets/Group-3.png";
import GroupThree from "../../assets/Group-4.png";
import Group1 from "../../assets/Group-5.png";
import Group2 from "../../assets/Group-6.png";
import Group3 from "../../assets/Group-7.png";
import Group4 from "../../assets/Group-8.png";
import mkt from "../../assets/market.png";
import job from "../../assets/job.png";
import learn from "../../assets/learn.png";
import forum from"../../assets/forum.png";
// import LeftBg from "../../../assets/left-banner.png"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Search from "./component/search/Search";
import MobileHeader from "../../components/mobile/header";
import "../../styles/landingpage.scss";
import { ProfileContext } from "../auth/ProfileContextApi";

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [emailErrorMsg, setEmailErrorMsg] = useState("");
  // const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  // const [errorStatus, setErrorStatus] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const user = useContext(ProfileContext);
  console.log("user", user);
  return (
    <Fragment>
      <div className="landing">
        <Header />
        <MobileHeader />
        <div>
          <div className="landing__banner">
            <div className="landing__banner-right">
              <div className="right">
                <h1>Facilisis egestas sollicitudinx. {user.name}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vitae egestas purus, netus a, et, varius vitae. Magna
                  diam curabitur pellentesque ipsum accumsan. Ullamcorper in
                  suspendisse leo, est. Vitae fringilla vulputate et dolor.
                  Rutrum adipiscing enim, pellentesque ac viverra purus dictum.
                </p>
                <div className="right__search" id="hide">
                  <Search />
                  <p>
                    Recent searches: <span>#</span>
                  </p>
                </div>
                <div className="right__popular">
                  <h2>Popular categories</h2>
                  <div className="right__popular-sub">
                    <Tag className="one">
                      <Link to="/" className="ct-one">
                        Category 1
                      </Link>
                    </Tag>
                    <Tag className="one">
                      <Link to="/" className="ct-one">
                        Category 2
                      </Link>
                    </Tag>
                    <Tag className="one">
                      <Link to="/" className="ct-one">
                        Category 3
                      </Link>
                    </Tag>
                    <Tag className="one">
                      <Link to="/" className="ct-one">
                        Category 4
                      </Link>
                    </Tag>
                  </div>
                </div>
              </div>
            </div>
            <div className="landing__banner-left">
              <div className="landing__banner-left--wrap">
                <div className="formik">
                  <h4>Sign Up</h4>
                  <p>By continuing, you agree to our <Link to="/" className="terms">Terms of Use</Link> and <Link to="/" className="terms">Privacy Policy</Link></p>
                  <div className="formik--bottom">
                    <div className="middle">
                      <div className="middle-google">
                        <Link to="/" className="button">
                          <span>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.4057 10.1247C21.5307 10.7942 21.5987 11.4941 21.5987 12.2245C21.5987 17.9376 17.7751 22 12 22C10.6867 22.0004 9.38613 21.742 8.17269 21.2396C6.95925 20.7372 5.8567 20.0006 4.92804 19.072C3.99937 18.1433 3.26279 17.0407 2.76039 15.8273C2.25798 14.6139 1.9996 13.3133 2 12C1.9996 10.6867 2.25798 9.38613 2.76039 8.17269C3.26279 6.95926 3.99937 5.8567 4.92804 4.92804C5.8567 3.99937 6.95925 3.26279 8.17269 2.76039C9.38613 2.25798 10.6867 1.9996 12 2C14.7001 2 16.9563 2.9935 18.6873 4.60666L15.8683 7.42564V7.41853C14.819 6.41893 13.4872 5.90593 12 5.90593C8.70053 5.90593 6.01869 8.69342 6.01869 11.9939C6.01869 15.2934 8.70053 18.087 12 18.087C14.9937 18.087 17.0315 16.3753 17.45 14.0246H12V10.1247H21.4067H21.4057Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Continue with Google
                        </Link>
                      </div>
                      <div className="middle-linkedin">
                        <Link to="/" className="button">
                          <span>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.1111 22H8.66667V8.66667H13.1111V10.8889C13.579 10.2936 14.1728 9.8093 14.85 9.47062C15.5271 9.13195 16.2708 8.94733 17.0278 8.93C18.3515 8.93735 19.6184 9.46936 20.5505 10.4094C21.4826 11.3494 22.0038 12.6207 22 13.9444V22H17.5556V14.5C17.4696 13.8995 17.1696 13.3503 16.7109 12.9534C16.2521 12.5565 15.6655 12.3387 15.0589 12.34C14.7874 12.3486 14.5204 12.4119 14.274 12.5262C14.0276 12.6405 13.8068 12.8034 13.6249 13.0051C13.443 13.2069 13.3038 13.4433 13.2155 13.7001C13.1272 13.957 13.0917 14.2291 13.1111 14.5V22ZM6.44444 22H2V8.66667H6.44444V22ZM4.22222 6.44444C3.63285 6.44444 3.06762 6.21032 2.65087 5.79357C2.23413 5.37682 2 4.81159 2 4.22222C2 3.63285 2.23413 3.06762 2.65087 2.65087C3.06762 2.23413 3.63285 2 4.22222 2C4.81159 2 5.37682 2.23413 5.79357 2.65087C6.21032 3.06762 6.44444 3.63285 6.44444 4.22222C6.44444 4.81159 6.21032 5.37682 5.79357 5.79357C5.37682 6.21032 4.81159 6.44444 4.22222 6.44444Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Continue with LinkedIn
                        </Link>
                      </div>
                    </div>
                    <div className="top">
                      <p>or</p>
                    </div>
                  </div>
                  <form>
                    <div className="formik__wrap">
                      <div className="formik__wrap-email">
                        <label>Phone Number</label>
                        <div className="formik__wrap-email-box" style={{marginTop:"10px"}}>
                          <div className="formik__wrap-email-input">
                            <PhoneInput
                              inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true
                              }}
                              className="input-field"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="formik__wrap-password">
                        <label>Password</label>
                        <div className="formik__wrap-password-box">
                          <div className="formik__wrap-password-input">
                            <Input.Password
                              placeholder="input password"
                              iconRender={(visible) =>
                                visible ? (
                                  <EyeTwoTone />
                                ) : (
                                  <EyeInvisibleOutlined />
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="formik__wrap-btn">
                        <Link to="/" className="button">
                          Continue
                        </Link>
                      </div>
                    </div>
                  </form>
                  <div className="formik--bottom">

                    <div className="bottom">
                      <p>
                        Don't have an account?{" "}
                        <Link to="/" className="sign">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="landing__banner">
          <div className="landing__banner-right">
            <div className="right">
              <h1>Facilisis egestas sollicitudin.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae egestas purus, netus a, et, varius vitae. Magna diam curabitur pellentesque ipsum accumsan. Ullamcorper in suspendisse leo, est. Vitae fringilla vulputate et dolor. Rutrum adipiscing enim, pellentesque ac viverra purus dictum.</p>
                <div className="right__search" id="hide">
                  <Search />
                  <p>Recent searches: <span>#</span></p>
                </div>
              <div className="right__popular">
                <h2>Popular categories</h2>
                <div className="right__popular-sub">
                  <Tag className="one">
                    <Link to="/" className="ct-one">
                      Category 1
                    </Link>
                  </Tag>
                  <Tag className="one">
                    <Link to="/" className="ct-one">
                      Category 2
                    </Link>
                  </Tag>
                  <Tag className="one">
                    <Link to="/" className="ct-one">
                      Category 3
                    </Link>
                  </Tag>
                  <Tag className="one">
                    <Link to="/" className="ct-one">
                      Category 4
                    </Link>
                  </Tag>
                </div>
              </div>
            </div>
          </div>
          <div className="landing__banner-left">
            <div className='landing__banner-left--wrap'>
               <div className="img-wrapper">
                 <img src={LeftBg} alt='banner'/>
               </div>
            </div>
          </div>
        </div> */}
          <section className="landing__insidekominiti">
            <div className="landing__insidekominiti--wrapper">
              <div className="heading">
                <h1>Inside Kominiti</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
              </div>
              <div className="heading__box">
                <div className="heading__box-wrap">
                  <div className="heading__box-container">
                    <div className="globe">
                     <img src={mkt} alt="marketplace"/>
                    </div>
                    <h1>Marketplace</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris vitae egestas purus, netus a, et, varius vitae.
                      Magna diam curabitur pellentesque ipsum accumsan.
                      Ullamcorper in
                    </p>
                    <div>
                      <Link to="/" className="more"> Learn more</Link>
                    </div>
                  </div>
                </div>
                <div className="heading__box-wrap">
                  <div className="heading__box-container">
                    <div className="globe">
                        <img src={job} alt="job"/>
                    </div>
                    <h1>Job</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris vitae egestas purus, netus a, et, varius vitae.
                      Magna diam curabitur pellentesque ipsum accumsan.
                      Ullamcorper in
                    </p>
                    <div>
                      <Link to="/" className="more"> Learn more</Link>
                    </div>
                  </div>
                </div>

                <div className="heading__box-wrap">
                  <div className="heading__box-container">
                    <div className="globe">
                      <img src={learn} alt="learn"/>
                    </div>
                    <h1>Learn</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris vitae egestas purus, netus a, et, varius vitae.
                      Magna diam curabitur pellentesque ipsum accumsan.
                      Ullamcorper in
                    </p>
                    
                    <div>
                      <Link to="/" className="more"> Learn more</Link>
                    </div>
                  </div>
                </div>

                <div className="heading__box-wrap">
                  <div className="heading__box-container">
                    <div className="globe">
                     <img src={forum} alt="forum"/>
                    </div>
                    <h1>Marketplace</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris vitae egestas purus, netus a, et, varius vitae.
                      Magna diam curabitur pellentesque ipsum accumsan.
                      Ullamcorper in
                    </p>
                    
                    <div>
                      <Link to="/" className="more"> Learn more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="landing__why">
            <div className="landing__why--container">
              <div className="landing__why--heading">
                <h1>Why Kominiti</h1>
              </div>
              <div className="landing__why--wrapper">
                <div className="landing__why--wrapper--video">
                  <img src={video} alt="video" />
                  <div
                    className="landing__why--wrapper--video-player"
                    onClick={togglePopup}
                  >
                    <span>
                      <svg
                        width="49"
                        height="49"
                        viewBox="0 0 49 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.00390625"
                          width="48"
                          height="48"
                          rx="24"
                          fill="white"
                        />
                        <path
                          d="M34.0891 25.8616L17.1235 35.7055C15.6837 36.5401 13.8359 35.5295 13.8359 33.8471V14.1592C13.8359 12.4794 15.681 11.4662 17.1235 12.3035L34.0891 22.1474C34.4166 22.3344 34.6889 22.6046 34.8782 22.9308C35.0676 23.2569 35.1673 23.6274 35.1673 24.0045C35.1673 24.3816 35.0676 24.752 34.8782 25.0782C34.6889 25.4043 34.4166 25.6746 34.0891 25.8616Z"
                          fill="#4895EF"
                        />
                      </svg>
                    </span>
                  </div>
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <Iframe
                            src="https://www.youtube.com//embed/EQDyIusmW9A"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            title="video"
                          />
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
                <div className="landing__why--wrapper--list">
                  <div className="landing__why--wrapper--list-child">
                    <div className="landing__why--wrapper--list-child--first">
                      <div className="before">
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="1"
                            y="1.50391"
                            width="28"
                            height="28"
                            rx="14"
                            stroke="black"
                            stroke-width="2"
                          />
                          <path
                            d="M9.375 14.6602L13.5938 18.8789L20.3438 12.1289"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="after">
                        <h1>
                          Access to Global Freelancers and Business
                          Professionals
                        </h1>
                        <p>
                          Business professionals and freelancers connect on
                          Kominiti for easy access to the global marketplace.
                        </p>
                      </div>
                    </div>

                    <div className="landing__why--wrapper--list-child--second">
                      <div className="before">
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="1"
                            y="1.50391"
                            width="28"
                            height="28"
                            rx="14"
                            stroke="black"
                            stroke-width="2"
                          />
                          <path
                            d="M9.375 14.6602L13.5938 18.8789L20.3438 12.1289"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="after">
                        <h1>Marketplace for Talent Pool</h1>
                        <p>
                          Showcase your skills and services to global business
                          owners on the Kominiti marketplace
                        </p>
                      </div>
                    </div>

                    <div className="landing__why--wrapper--list-child--second">
                      <div className="before">
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="1"
                            y="1.50391"
                            width="28"
                            height="28"
                            rx="14"
                            stroke="black"
                            stroke-width="2"
                          />
                          <path
                            d="M9.375 14.6602L13.5938 18.8789L20.3438 12.1289"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="after">
                        <h1>Guaranteed Security </h1>
                        <p>
                          Data security at the heart of our digital
                          transformation. We are simple, safe and secure.
                        </p>
                      </div>
                    </div>
                    <div className="landing__why--wrapper--list-child--second">
                      <div className="before">
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="1"
                            y="1.50391"
                            width="28"
                            height="28"
                            rx="14"
                            stroke="black"
                            stroke-width="2"
                          />
                          <path
                            d="M9.375 14.6602L13.5938 18.8789L20.3438 12.1289"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="after">
                        <h1>Flexible and Easy Payment Process</h1>
                        <p>
                          Get paid on the spot and enjoy low commission when you
                          complete any project on Kominiti.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="landing__marketplace">
            <div className="landing__marketplace--container">
              <div className="landing__marketplace--container--header">
                <div className="after">
                  <h1>Facilisis egestas sollicitudin.</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vitae egestas purus, netus a, et, varius vitae. Magna
                    diam curabitur pellentesque ipsum accumsan. Ullamcorper in
                    suspendisse leo, est. Vitae fringilla vulputate et dolor.
                    Rutrum adipiscing enim, pellentesque ac viverra purus
                    dictum.
                  </p>
                </div>
                <div className="before">
                  <span>
                    <svg
                      width="202"
                      height="136"
                      viewBox="0 0 202 136"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M177.285 117.083C176.084 117.083 174.89 117.031 173.721 116.924L173.756 116.536C181.837 117.271 192.427 115.45 197.871 109.729C201.07 106.366 202.196 101.509 201.039 96.0541C200.15 91.8619 198.359 87.7608 195.859 84.1951C194.932 82.8727 193.764 81.6743 192.635 80.5156C191.023 78.8605 189.355 77.1493 188.335 75.029C186.966 72.1818 186.905 69.2223 188.15 65.983C189.235 63.1615 191.182 60.4692 192.9 58.0934C198.046 50.9767 195.128 41.6221 190.238 35.9416C187.693 32.9844 184.481 30.9078 181.374 28.8997C177.393 26.3267 173.276 23.6657 170.491 19.1228C170.074 18.4418 169.679 17.7272 169.297 17.0368C168.267 15.1706 167.2 13.2404 165.6 11.8301C160.922 7.70562 153.863 8.72718 147.634 9.62796C146.558 9.78381 145.541 9.9303 144.565 10.0464C143.013 10.2303 141.437 10.4274 139.912 10.6191C134.018 11.3586 127.924 12.1223 121.875 12.2547C116.406 12.374 110.652 12.2532 105.623 10.57C102.834 9.63653 100.279 8.08822 97.8083 6.59133C95.9257 5.45054 93.9784 4.2708 91.9517 3.37936C89.0436 2.10066 85.5963 0.804025 82.089 0.896753C74.9981 1.08143 66.5069 5.72093 62.7588 11.4584C61.4349 13.4851 60.3564 15.8158 59.3131 18.0701C56.9403 23.1982 54.4865 28.5016 48.9166 30.9421C45.0236 32.6478 40.6561 32.6961 36.4319 32.7429C35.9418 32.7483 35.4524 32.7538 34.9654 32.7616C31.1503 32.8239 18.4731 33.6569 15.5253 41.771C14.2934 45.1629 15.2417 48.9772 16.063 51.5518C16.1464 51.8128 16.2305 52.0762 16.3155 52.3412C17.5591 56.2264 18.9679 60.6298 19.324 64.8867C19.7347 69.7896 18.689 73.7691 16.1284 77.0519C15.3414 78.061 14.3939 78.9431 13.4767 79.7963C12.971 80.267 12.4482 80.7532 11.9611 81.2535C6.38502 86.9777 4.43462 93.5278 6.3219 100.196C8.1632 106.702 13.144 112.358 19.0108 114.604C23.3854 116.28 28.4308 116.617 33.6025 115.58L33.6789 115.962C28.4347 117.014 23.3144 116.67 18.8713 114.968C12.8939 112.679 7.82113 106.922 5.94709 100.302C4.94111 96.7468 4.98864 93.2271 6.08891 89.839C7.09645 86.7377 8.97827 83.7571 11.6822 80.9816C12.1762 80.4743 12.7022 79.9849 13.2118 79.5111C14.1173 78.668 15.0539 77.7969 15.8214 76.8127C21.4342 69.6158 18.5175 60.502 15.9445 52.4604C15.8596 52.1954 15.7754 51.9321 15.6921 51.671C14.8536 49.0427 13.8866 45.1427 15.1599 41.6393C16.3529 38.3549 19.1877 35.8777 23.5848 34.2756C27.8776 32.7117 32.5537 32.4125 34.9592 32.3735C35.447 32.3657 35.9371 32.3603 36.428 32.3548C40.6132 32.3088 44.9403 32.2605 48.7608 30.5868C54.1951 28.2055 56.6177 22.9706 58.9601 17.908C60.0089 15.6412 61.0936 13.2973 62.4331 11.2464C64.3102 8.37263 67.3687 5.69366 71.0458 3.70118C74.6786 1.73286 78.5965 0.599089 82.0789 0.508699C85.6664 0.414413 89.1612 1.72741 92.1083 3.02404C94.1592 3.9256 96.1166 5.11236 98.0101 6.25938C100.463 7.74536 102.999 9.28199 105.746 10.2023C110.718 11.8667 116.432 11.9859 121.866 11.8675C127.895 11.7358 133.98 10.9729 139.864 10.2342C141.39 10.0425 142.967 9.84537 144.52 9.66147C145.491 9.54614 146.505 9.39965 147.579 9.24459C150.588 8.809 154 8.31575 157.191 8.46692C160.876 8.64069 163.71 9.64588 165.859 11.5402C167.509 12.9958 168.592 14.9555 169.64 16.8506C170.019 17.5379 170.412 18.2485 170.825 18.9218C173.564 23.3891 177.642 26.0252 181.587 28.5748C184.717 30.5985 187.954 32.6899 190.535 35.6899C193.274 38.8715 195.129 42.7653 195.758 46.6528C196.464 51.0134 195.585 55.049 193.217 58.324C189.703 63.1841 185.72 68.6916 188.688 74.8623C189.68 76.9249 191.325 78.6127 192.916 80.246C194.055 81.4156 195.234 82.6257 196.179 83.9738C198.708 87.5824 200.522 91.7325 201.421 95.9762C201.98 98.6131 202.026 101.114 201.556 103.412C201.035 105.958 199.891 108.175 198.154 110.001C195.543 112.744 191.589 114.817 186.719 115.994C183.737 116.711 180.484 117.083 177.285 117.083Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M144.37 116.773C148.125 116.857 151.879 116.96 155.633 117.082C158.655 117.18 161.678 117.291 164.688 117.579C173.454 118.419 182.586 120.461 190.735 115.894C200.103 110.643 202.188 99.9164 197.192 90.8377C194.271 85.5288 188.286 79.9745 188.646 73.5132C188.962 67.8194 193.572 64.0113 195.113 58.7952C196.598 53.7731 197.412 48.5913 194.72 43.7873C192.446 39.7291 188.598 36.7681 184.513 34.5426C178.767 31.4117 173.058 28.9852 169.987 22.8355C167.082 17.0171 166.361 10.4093 160.195 6.83028C155.104 3.87546 148.996 3.05571 143.124 3.47026C134.155 4.10377 125.806 7.42405 116.778 7.74664C106.853 8.10119 98.3381 1.19492 88.2573 0.598039C81.2887 0.18505 74.8562 2.37155 69.7928 7.15521C64.9717 11.709 63.8823 18.3246 59.0293 22.8348C53.5444 27.9325 45.47 28.7304 38.0331 29.6C31.5601 30.3566 25.2328 32.2088 20.7297 37.3042C16.9348 41.5985 17.2372 45.8429 17.7585 51.0793C18.3258 56.7747 21.2775 63.8492 20.0097 69.5025C18.8821 74.5301 13.7104 77.7701 11.3486 82.1501C1.44853 100.51 19.2382 117.426 36.7942 119.398C47.7758 120.631 59.0106 119.484 69.9992 118.867C82.2183 118.213 94.4412 117.296 106.659 116.747C119.2 116.16 131.824 116.491 144.37 116.773Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M129.16 47.6738H102.453V79.2083H129.16V47.6738Z"
                        fill="white"
                      />
                      <path
                        d="M160.551 47.6738H133.844V79.2083H160.551V47.6738Z"
                        fill="white"
                      />
                      <path
                        d="M129.16 11.4238H102.453V42.9583H129.16V11.4238Z"
                        fill="white"
                      />
                      <path
                        d="M160.551 11.4238H133.844V42.9583H160.551V11.4238Z"
                        fill="white"
                      />
                      <path
                        d="M97.8301 135.504C151.86 135.504 195.66 133.704 195.66 131.483C195.66 129.261 151.86 127.461 97.8301 127.461C43.8 127.461 0 129.261 0 131.483C0 133.704 43.8 135.504 97.8301 135.504Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M175.668 101.237C176.148 101.618 176.67 102.057 177.19 102.272C177.539 102.416 178.524 102.309 178.663 102.754C178.311 101.622 178.567 100.811 178.694 99.6962C178.825 98.539 178.724 97.2556 178.665 96.0915C178.537 93.5722 178.113 91.0608 177.293 88.6717C176.097 85.1847 174.028 81.9548 171.144 79.6584C169.082 78.0166 167.568 78.8208 166.285 80.8615C165.627 81.9096 164.254 81.6789 163.77 82.8556C163.187 84.2722 163.356 86.0512 163.781 87.4818C164.277 89.1533 165.207 90.6642 166.243 92.066C167.927 94.3429 169.911 96.3782 171.997 98.2866C173.003 99.2076 174.162 100.129 175.302 100.955C175.42 101.043 175.542 101.138 175.668 101.237Z"
                        fill="#438289"
                      />
                      <path
                        d="M166.469 81.5703C166.762 81.9701 167.052 82.3714 167.341 82.7742L168.214 83.9781L169.943 86.3984C171.087 88.0184 172.181 89.6805 173.146 91.4174C174.11 93.1551 174.979 94.941 175.801 96.7457L176.411 98.1023L177.007 99.4644C177.204 99.9195 177.397 100.376 177.588 100.834C177.782 101.29 177.972 101.748 178.161 102.206C177.734 101.31 177.329 100.407 176.903 99.512L176.276 98.1639L175.637 96.8221C175.204 95.9314 174.78 95.0361 174.328 94.1556C173.885 93.2704 173.422 92.3961 172.941 91.5319C171.985 89.7997 170.903 88.1431 169.795 86.5005L168.121 84.0443C167.567 83.2207 167.012 82.4002 166.469 81.5703Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M181.755 104.201C181.409 104.378 181.06 104.551 180.71 104.721C180.495 104.824 178.986 105.176 178.931 105.353C179.3 104.168 178.878 103.47 178.668 102.363C178.469 101.317 178.823 99.9859 179.018 98.9504C179.457 96.6119 180.197 94.3397 181.035 92.1166C181.992 89.5778 183.265 86.8911 185.697 85.6903C187.11 84.9929 188.327 86.4204 189.015 87.5176C189.353 88.0552 189.901 88.0934 190.396 88.3926C191.048 88.7862 191.135 89.1984 191.327 89.9542C191.736 91.5649 191.716 93.2854 191.26 94.8836C190.537 97.4176 188.771 99.5535 186.696 101.179C185.462 102.146 184.113 102.953 182.731 103.69C182.408 103.863 182.083 104.034 181.755 104.201Z"
                        fill="#438289"
                      />
                      <path
                        d="M188.869 88.0977C188.43 88.7764 187.98 89.4465 187.532 90.1182L186.174 92.1231C185.727 92.7948 185.273 93.4611 184.848 94.146C184.63 94.485 184.425 94.8309 184.215 95.1753C184.111 95.3476 184.014 95.5237 183.912 95.6974C183.813 95.8728 183.709 96.045 183.614 96.2226C183.222 96.9263 182.845 97.6385 182.483 98.3593C182.115 99.0761 181.768 99.8047 181.415 100.53L180.894 101.623L180.379 102.718C180.028 103.445 179.696 104.182 179.344 104.909C179.955 103.413 180.578 101.923 181.251 100.453C181.413 100.084 181.589 99.719 181.76 99.3528C181.929 98.9858 182.109 98.6234 182.286 98.2603C182.461 97.8956 182.65 97.538 182.835 97.1787C183.018 96.818 183.218 96.4657 183.411 96.1096C183.506 95.9312 183.612 95.759 183.713 95.5829C183.816 95.4083 183.915 95.2315 184.02 95.0592C184.233 94.7148 184.438 94.3657 184.662 94.0283C184.773 93.8592 184.881 93.6878 184.993 93.5203L185.332 93.0177C185.556 92.6811 185.793 92.353 186.023 92.021C186.957 90.701 187.914 89.4013 188.869 88.0977Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M185.133 82.1359C185.125 82.1367 185.117 82.1374 185.109 82.1382C183.492 82.2956 181.982 81.2639 180.312 81.6091C181.343 81.3956 180.581 78.56 180.615 77.96C180.7 76.4133 181.371 74.5112 181.747 72.9901C182.57 69.6582 184.36 66.5826 186.797 64.1732C188.759 62.2345 192.57 58.9353 195.533 60.1571C196.989 60.7571 197.805 61.9431 198.496 63.2701C199.349 64.9065 202.195 65.007 201.759 67.4046C201.359 69.6028 197.112 72.4696 195.507 74.0483C193.422 76.0985 191.334 78.1525 189.073 80.0055C187.971 80.907 186.606 81.9824 185.133 82.1359Z"
                        fill="#438289"
                      />
                      <path
                        d="M198.17 63.9277C197.396 64.5909 196.612 65.2423 195.829 65.8945L193.469 67.8387C191.902 69.14 190.364 70.4732 188.94 71.9249C187.515 73.3751 186.183 74.9171 184.872 76.4748L183.895 77.6491L182.93 78.8351C182.279 79.619 181.65 80.4208 181 81.207C181.303 80.7972 181.609 80.3889 181.916 79.9821C182.222 79.5746 182.528 79.167 182.84 78.7642L183.779 77.5572L184.732 76.361C186.013 74.7738 187.344 73.2231 188.773 71.7613C189.497 71.0405 190.232 70.3298 191.004 69.6605C191.77 68.9849 192.559 68.3374 193.355 67.7C194.154 67.0657 194.955 66.4353 195.757 65.8064L198.17 63.9277Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M176.519 82.1823C176.656 82.2789 176.79 82.3786 176.921 82.4815C177.624 83.0371 178.038 83.3947 178.919 83.7298C179.549 83.9698 181.115 84.4381 181.404 85.1277C180.86 83.8295 181.021 82.3771 181.106 80.9978C181.446 75.4942 179.106 70.1432 175.586 66.0141C172.929 62.8972 169.509 59.2668 165.629 57.745C165.143 57.5549 164.617 57.4053 164.105 57.5081C163.213 57.6881 162.88 58.4463 162.497 59.1733C161.708 60.6741 159.547 60.9944 159.094 62.5489C158.904 63.2019 158.979 63.9032 159.124 64.5679C159.637 66.9118 160.565 68.9822 162.068 70.8757C164.702 74.1968 167.955 77.0191 171.485 79.3521C173.047 80.383 174.989 81.1061 176.519 82.1823Z"
                        fill="#438289"
                      />
                      <path
                        d="M162.414 60.7969L165.034 63.4977C165.905 64.4 166.775 65.3047 167.64 66.2125C169.367 68.0328 171.035 69.9177 172.56 71.9172C173.313 72.9224 174.046 73.9439 174.748 74.9842C175.099 75.5047 175.455 76.0221 175.794 76.5505C176.135 77.0772 176.483 77.6001 176.813 78.1338L177.81 79.7305L178.79 81.3372C179.116 81.8733 179.435 82.4133 179.754 82.9533C180.074 83.4926 180.392 84.0333 180.708 84.5749C180.029 83.5198 179.374 82.45 178.693 81.3972L177.685 79.8092L176.662 78.2312C175.97 77.1855 175.289 76.1336 174.574 75.105C173.867 74.071 173.13 73.0572 172.375 72.059C172.189 71.8073 171.992 71.5642 171.801 71.3164L171.512 70.9463C171.416 70.8224 171.319 70.6993 171.219 70.5793C170.82 70.0961 170.428 69.6083 170.015 69.1377C169.205 68.1824 168.351 67.2652 167.51 66.3356L164.952 63.5771C164.102 62.6522 163.253 61.7296 162.414 60.7969Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M178.76 111.195C178.316 107.672 177.856 104.03 178.479 100.423C178.645 99.4609 178.89 98.5064 179.126 97.583C179.478 96.2061 179.843 94.7825 179.933 93.3651C179.99 92.4783 179.943 91.5526 179.897 90.6573C179.813 89.038 179.728 87.3643 180.231 85.7622C180.281 85.6024 180.337 85.4427 180.391 85.2884C180.6 84.6908 180.797 84.1266 180.669 83.6162C180.612 83.3902 180.487 83.165 180.355 82.9258C180.296 82.8183 180.234 82.7076 180.176 82.5923C179.404 81.0533 179.462 79.1255 180.353 76.6975C180.514 76.2572 180.692 75.8154 180.865 75.3891C181.407 74.045 181.918 72.7756 182.016 71.4182C182.189 68.9863 180.972 66.633 179.818 64.6187L180.629 64.1543C181.852 66.2886 183.14 68.7915 182.947 71.4852C182.84 72.9899 182.277 74.3878 181.731 75.7398C181.562 76.1598 181.387 76.5946 181.23 77.0209C180.433 79.1933 180.362 80.8788 181.011 82.1746C181.06 82.272 181.114 82.3694 181.172 82.4731C181.327 82.7544 181.489 83.0443 181.575 83.3902C181.771 84.1726 181.507 84.93 181.273 85.5985C181.219 85.7528 181.168 85.8985 181.123 86.0443C180.669 87.4858 180.747 89.0038 180.83 90.6113C180.877 91.5331 180.926 92.4861 180.866 93.4259C180.77 94.9305 180.395 96.3978 180.032 97.816C179.8 98.7215 179.56 99.6581 179.4 100.583C178.801 104.052 179.252 107.625 179.688 111.079L178.76 111.195Z"
                        fill="#438289"
                      />
                      <path
                        d="M185.669 68.2079C184.493 69.0339 183.285 69.9027 182.583 71.0575C182.885 69.6697 182.517 68.1417 182.485 66.7344C182.447 65.105 182.454 63.4663 182.741 61.8572C183.022 60.2816 183.562 58.766 184.1 57.259C185.076 54.5239 186.072 51.7507 187.755 49.3834C188.391 48.4888 189.212 47.5865 190.26 47.1821C191.648 46.6468 191.998 47.2725 192.684 48.4203C193.047 49.0281 193.53 48.9252 194.074 49.2018C194.749 49.5447 194.728 49.8712 194.846 50.6364C195.12 52.4044 194.917 54.199 194.392 55.9024C193.77 57.9253 192.736 59.7962 191.632 61.6032C190.43 63.5715 189.092 65.5289 187.298 67.0095C186.802 67.4162 186.24 67.8074 185.669 68.2079Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M192.545 49.1406C192.097 50.011 191.637 50.8736 191.179 51.7386L189.791 54.3232C188.875 56.05 187.978 57.7853 187.202 59.5783C187.009 60.0264 186.809 60.4721 186.626 60.9248L186.347 61.602C186.253 61.8272 186.167 62.0563 186.076 62.2822C185.895 62.7358 185.713 63.1893 185.541 63.6467L185.278 64.3308C185.189 64.5584 185.102 64.7867 185.017 65.0158L184.501 66.3888L183.996 67.7656C183.65 68.6805 183.324 69.6031 182.977 70.5179C183.125 70.0519 183.275 69.5859 183.428 69.1215C183.58 68.6563 183.731 68.1911 183.887 67.7275L184.362 66.3389L184.848 64.9542C185.504 63.1106 186.203 61.2802 186.988 59.4833C187.772 57.6864 188.678 55.9448 189.633 54.2368L191.08 51.6825L191.811 50.4108C192.054 49.9876 192.298 49.5637 192.545 49.1406Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M175.635 70.049C176.44 70.2454 177.239 70.4924 177.886 70.9817C179.034 71.849 179.761 73.6147 180.61 74.7758C180.86 75.1178 181.114 75.4646 181.44 75.7366C181.508 73.9178 181.364 72.4038 180.743 70.695C180.154 69.0718 179.367 67.5305 178.583 65.9955C176.445 61.8134 171.373 59.6931 166.83 60.8401C163.422 61.6996 166.012 64.9614 167.631 66.3298C168.85 67.3591 170.285 68.0986 171.735 68.7633C172.521 69.1233 173.319 69.4653 174.153 69.6937C174.627 69.823 175.132 69.9259 175.635 70.049Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M180.781 74.0645C180.383 73.3554 180.074 72.5988 179.796 71.8343C179.66 71.451 179.534 71.0637 179.412 70.6764C179.296 70.2891 179.14 69.9221 178.95 69.5676C178.569 68.8624 178.079 68.2164 177.558 67.6C177.04 66.9868 176.448 66.4359 175.799 65.9652C175.149 65.4946 174.447 65.0948 173.704 64.7847C173.334 64.6265 172.956 64.4956 172.569 64.3663C172.184 64.2369 171.8 64.1044 171.417 63.9712L169.115 63.174C168.351 62.9005 167.583 62.634 166.82 62.3535C167.6 62.5834 168.374 62.8281 169.151 63.0649L171.474 63.7998C171.861 63.9221 172.248 64.0452 172.634 64.1707C173.019 64.2938 173.411 64.4231 173.79 64.579C174.549 64.8891 175.269 65.2959 175.936 65.7743C176.598 66.2598 177.203 66.8247 177.727 67.4567C177.987 67.7722 178.238 68.0941 178.473 68.4299C178.591 68.5974 178.703 68.7689 178.81 68.9442C178.916 69.1203 179.016 69.2995 179.109 69.4834C179.293 69.8504 179.445 70.2377 179.552 70.632C179.663 71.0224 179.78 71.4104 179.903 71.7962C180.024 72.1827 180.156 72.566 180.3 72.9447C180.447 73.325 180.606 73.6982 180.781 74.0645Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M187.971 96.301C187.473 96.2714 186.974 96.2605 186.475 96.2675C184.453 96.2971 182.806 96.7678 180.912 97.3499C180.506 97.4745 180.096 97.6 179.672 97.6234C180.705 96.1249 181.727 94.9982 183.245 94C185.99 92.1961 188.977 90.9649 192.319 91.1324C194.495 91.2415 196.647 91.9397 198.457 93.1561C199.743 94.0202 202.05 95.8888 199.836 97.0584C198.432 97.8002 196.849 98.126 195.27 97.868C194.346 97.7169 193.463 97.3834 192.566 97.1137C191.074 96.6649 189.528 96.3937 187.971 96.301Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M181.199 96.6789C181.558 96.4896 181.91 96.2862 182.253 96.0704C182.595 95.8529 182.93 95.6246 183.258 95.387C183.588 95.1516 183.913 94.9101 184.236 94.6639C184.557 94.4114 184.911 94.1916 185.278 94.0085C185.462 93.9174 185.65 93.8332 185.84 93.7553C186.031 93.6797 186.224 93.6088 186.418 93.5449C186.807 93.4163 187.202 93.308 187.598 93.2106C188.396 93.0174 189.219 92.927 190.04 92.934C190.861 92.9488 191.681 93.0532 192.475 93.2597C192.872 93.361 193.264 93.4911 193.646 93.6236C194.031 93.7537 194.414 93.8862 194.797 94.0202L197.099 94.8205C197.863 95.0955 198.63 95.3628 199.392 95.6441C198.613 95.4127 197.839 95.1672 197.063 94.9296L194.741 94.1916C194.354 94.0693 193.968 93.9454 193.582 93.8192C193.195 93.6914 192.814 93.5706 192.422 93.4755C191.642 93.28 190.841 93.1802 190.038 93.1685C189.235 93.1576 188.432 93.2449 187.65 93.4264C186.863 93.6088 186.086 93.834 185.357 94.1706C184.993 94.3413 184.648 94.5423 184.325 94.7831C183.995 95.0207 183.663 95.2561 183.324 95.4813C182.642 95.927 181.942 96.3478 181.199 96.6789Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M184.491 89.9789C184.125 90.2508 183.76 90.5228 183.396 90.7986C182.656 91.3597 180.291 92.3181 180.069 93.2096C180.26 92.4428 180.012 91.7898 179.884 91.0464C179.763 90.3443 179.861 89.7724 179.965 89.0578C180.16 87.7254 180.36 86.3165 180.596 85.0378C181.005 82.8233 181.753 80.6874 182.497 78.5617C183.23 76.4671 183.97 74.3593 185.082 72.4385C186.203 70.5045 187.743 69.0497 189.449 67.651C191.223 66.197 192.987 67.8738 194.194 69.225C195.084 70.2209 196.251 69.9154 197.379 70.5115C198.975 71.3554 198.04 74.0328 197.681 75.3061C197.126 77.2806 195.866 78.9957 194.567 80.5472C192.386 83.1529 189.974 85.5646 187.37 87.748C186.437 88.5326 185.464 89.2542 184.491 89.9789Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M194.029 70.002C193.393 70.9004 192.744 71.7895 192.097 72.6801L190.141 75.3396C188.845 77.117 187.588 78.9217 186.483 80.8199C185.376 82.7166 184.392 84.6849 183.434 86.6641L182.724 88.154L182.031 89.6517C181.559 90.6459 181.114 91.6527 180.645 92.6485C180.854 92.1397 181.066 91.6317 181.28 91.1244L181.601 90.3631L181.926 89.6041L182.59 88.0916L183.271 86.587C184.192 84.5867 185.173 82.6098 186.281 80.7007C186.848 79.7539 187.428 78.815 188.058 77.9095C188.68 76.9986 189.334 76.1111 189.998 75.2321C190.664 74.3555 191.335 73.4828 192.006 72.6108L194.029 70.002Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M176.753 63.8422C176.911 63.9707 177.071 64.097 177.233 64.2209C178.711 65.3469 180.387 66.2601 181.579 67.6853C180.805 66.7604 182.795 63.4596 183.077 62.5627C183.667 60.6777 184.019 58.9479 183.864 56.9468C183.398 50.9063 180.427 45.3481 177.046 40.3213C176.451 39.4369 175.815 38.5369 174.906 37.9797C173.547 37.1475 172.318 37.4717 170.983 38.2135C170.36 38.5595 169.762 38.9296 169.078 39.147C168.094 39.4595 167.028 39.3558 166.055 39.6995C164.134 40.3782 164.539 44.1964 164.778 45.7299C165.233 48.645 166.582 51.4011 168.366 53.7302C171 57.1673 173.354 61.0681 176.753 63.8422Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M169.863 39.6816L171.676 42.917C172.277 43.997 172.877 45.0778 173.473 46.1617C174.659 48.331 175.766 50.5518 176.699 52.8482L177.032 53.7155C177.144 54.0046 177.256 54.2929 177.357 54.5859L177.668 55.4609C177.719 55.6067 177.773 55.7524 177.822 55.8989L177.968 56.3399C178.16 56.9282 178.363 57.5126 178.541 58.1056C178.723 58.6971 178.91 59.2861 179.079 59.8815L179.59 61.6643L180.081 63.4527L180.32 64.3488L180.553 65.2464C180.709 65.8449 180.861 66.4433 181.012 67.0433C180.657 65.8589 180.33 64.6667 179.971 63.4838L179.449 61.7056L178.907 59.9337C178.534 58.7563 178.17 57.5758 177.767 56.4085L177.619 55.9698C177.57 55.8233 177.514 55.6791 177.463 55.5342L177.148 54.6638C177.046 54.3724 176.932 54.0856 176.82 53.7989L176.484 52.937C176.018 51.7955 175.533 50.6601 174.991 49.5513C174.73 48.9926 174.447 48.444 174.168 47.8923L173.316 46.2474L171.577 42.9731C171.001 41.8767 170.425 40.7827 169.863 39.6816Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M185.314 76.4447C184.812 76.7774 184.31 77.1094 183.809 77.4421C182.376 78.3912 181.444 79.0551 180.993 80.7974C180.368 80.0463 180.336 78.9686 179.723 78.2299C179.266 77.6782 178.355 77.3096 177.73 76.9504C175.961 75.9335 173.905 75.5501 172.144 74.5138C171.88 74.3587 171.597 74.1429 171.583 73.8366C171.567 73.4961 171.889 73.2475 172.183 73.0769C173.607 72.2517 174.474 71.8184 176.15 71.9166C177.876 72.0179 179.621 72.3312 181.339 71.9774C182.233 71.7935 183.081 71.4351 183.956 71.1756C185.195 70.8078 187.325 70.253 188.586 70.7829C189.619 71.2169 190.005 72.8922 189.259 73.7361C189.061 73.959 188.81 74.1265 188.561 74.2909C187.479 75.0094 186.396 75.727 185.314 76.4447Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M180.675 81.0781C180.656 80.4968 180.652 79.9178 180.66 79.3373C180.662 79.0474 180.673 78.7576 180.681 78.4677C180.692 78.1778 180.709 77.888 180.725 77.5981C180.746 77.3082 180.769 77.0183 180.797 76.7293C180.829 76.4394 180.863 76.1534 180.89 75.8682C180.914 75.583 180.927 75.2978 180.906 75.0126C180.889 74.7266 180.84 74.4422 180.771 74.1602C180.889 74.4259 180.97 74.7095 181.02 74.9994C181.069 75.29 181.082 75.5861 181.072 75.8791C181.067 76.1721 181.037 76.462 181.018 76.7495C180.996 77.0378 180.975 77.3254 180.958 77.6145L180.842 79.3467C180.8 79.9233 180.751 80.5015 180.675 81.0781Z"
                        fill="#438289"
                      />
                      <path
                        d="M174.786 97.5555C175.234 97.8804 175.697 98.1835 176.173 98.4601C177.474 99.2152 178.157 99.2549 178.592 100.933C179.067 100.364 179.093 99.6266 179.492 99.05C179.939 98.404 180.836 97.9677 181.535 97.6716C182.455 97.2827 183.428 97.0365 184.355 96.6664C184.917 96.4419 185.46 96.1723 185.979 95.8606C188.224 94.511 184.996 93.4653 183.758 93.4404C181.934 93.403 180.088 93.8884 178.301 93.5214C177.55 93.3671 176.837 93.0656 176.102 92.8474C175.054 92.5365 173.018 91.977 172.01 92.683C170.846 93.4988 171.874 94.9817 172.608 95.7032C173.283 96.3679 174.013 96.9944 174.786 97.5555Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M178.627 99.5743C178.555 99.0904 178.51 98.6042 178.473 98.1188C178.433 97.6333 178.405 97.1478 178.371 96.6639C178.345 96.1777 178.294 95.7 178.279 95.2052C178.273 94.959 178.285 94.7081 178.328 94.4642C178.373 94.2203 178.443 93.9818 178.547 93.7598C178.492 93.9982 178.454 94.2374 178.442 94.4774C178.426 94.7167 178.439 94.9551 178.46 95.1951C178.485 95.4343 178.514 95.6743 178.541 95.9182C178.566 96.1613 178.586 96.4052 178.604 96.6484C178.618 96.8923 178.631 97.1362 178.64 97.38C178.646 97.6239 178.654 97.8678 178.654 98.1117C178.658 98.598 178.651 99.0858 178.627 99.5743Z"
                        fill="#438289"
                      />
                      <path
                        d="M188.513 112.043H170.254L173.457 130.317H185.31L188.513 112.043Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M190.356 112.045H168.327L168.016 108.189H190.746L190.356 112.045Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M186.644 112.043H170.254L170.416 112.966H186.574C186.469 113.976 186.269 115 185.965 116.023C183.989 122.686 178.345 127.025 172.79 126.511L173.457 130.317H185.31L188.513 112.044H186.644V112.043Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M170.5 127.854H188.866V128.035C188.866 129.456 187.715 130.607 186.295 130.607H173.071C171.651 130.607 170.5 129.456 170.5 128.035V127.854Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M154.634 121.016L154.112 128.947H151.772L151.07 121.016H154.634Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M164.58 122.117L163.94 131.821H161.077L160.219 122.117H164.58Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M164.436 124.294H160.411L160.219 122.117H164.58L164.436 124.294Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M154.561 122.117L154.418 124.294H151.36L151.168 122.117H154.561Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M50.8164 121.016L51.34 128.947H53.6793L54.3814 121.016H50.8164Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M40.875 122.117L41.5155 131.821H44.3776L45.2363 122.117H40.875Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M150.28 91.4805H54.9805V121.695H150.28V91.4805Z"
                        fill="#DEBFA8"
                      />
                      <path
                        d="M54.9645 80.3066L38.2969 86.0908L40.2558 113.494L62.5978 112.504L62.5487 98.4805C62.5487 98.4805 63.6941 81.8807 54.9645 80.3066Z"
                        fill="#F9ECE1"
                      />
                      <path
                        d="M102.756 112.037H50.4453V122.119H102.756V112.037Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M38.2969 86.0895L40.7982 122.119H55.1796C55.1796 122.119 53.7855 92.6833 47.9499 89.035C42.1143 85.3867 38.2969 86.0895 38.2969 86.0895Z"
                        fill="#DEBFA8"
                      />
                      <path
                        d="M54.9834 121.697C55.0519 121.695 55.1229 121.71 55.1829 121.747L55.1719 121.753C54.8408 118.129 54.4667 114.512 54.0195 110.906L53.8441 109.555L53.6641 108.204C53.5402 107.305 53.4086 106.407 53.2675 105.511C52.9901 103.717 52.6831 101.928 52.313 100.155C51.9522 98.3799 51.5306 96.6173 50.9922 94.896C50.8605 94.465 50.714 94.0388 50.5636 93.6149C50.4062 93.1941 50.2472 92.7733 50.0641 92.365C49.8833 91.9559 49.6901 91.5523 49.4711 91.1666C49.2545 90.7801 49.0168 90.4053 48.7433 90.0648C48.4691 89.7235 48.162 89.4227 47.7989 89.1959C47.4148 88.9598 47.0345 88.7159 46.641 88.4962C45.8594 88.0466 45.0537 87.6351 44.2207 87.2884C43.3901 86.9362 42.5337 86.6393 41.6563 86.4203C40.7789 86.2045 39.8797 86.0533 38.9688 86.0385C39.423 86.0136 39.8804 86.026 40.3355 86.0603C40.7906 86.1008 41.2433 86.1671 41.6929 86.252C41.9173 86.2949 42.141 86.3455 42.3638 86.3969C42.5844 86.4562 42.808 86.5092 43.0277 86.5746C43.2459 86.6424 43.468 86.7032 43.6838 86.778C43.8997 86.8536 44.1186 86.9237 44.3329 87.0047C45.1932 87.3227 46.0254 87.7123 46.8374 88.1393C47.2472 88.3466 47.6392 88.5842 48.0358 88.8141C48.0849 88.8406 48.1355 88.8772 48.1862 88.9107L48.3374 89.0136C48.434 89.0861 48.5252 89.1655 48.6187 89.2411L48.8774 89.4897L49.1158 89.7539C49.7236 90.4801 50.1763 91.3014 50.5605 92.1398C50.7569 92.5583 50.9259 92.9869 51.0943 93.4154C51.2556 93.8463 51.4114 94.278 51.5524 94.7144C52.1197 96.4599 52.5467 98.2404 52.9223 100.028C53.2847 101.818 53.5893 103.618 53.8504 105.422C53.9782 106.325 54.0958 107.228 54.2057 108.133L54.3639 109.49L54.5041 110.849C54.593 111.755 54.6787 112.662 54.7519 113.57C54.8236 114.478 54.8899 115.386 54.9499 116.294C55.0605 118.111 55.1525 119.93 55.1852 121.75V121.764L55.1743 121.757C55.1205 121.72 55.0519 121.7 54.9834 121.697Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M100.265 97.5861H61.7513C60.3744 97.5861 59.2578 96.4695 59.2578 95.0926V75.5013C59.2578 74.1244 60.3744 73.0078 61.7513 73.0078H100.265C101.642 73.0078 102.759 74.1244 102.759 75.5013V95.0926C102.758 96.4695 101.642 97.5861 100.265 97.5861Z"
                        fill="#EBD6C5"
                      />
                      <path
                        d="M101.538 112.791H55.564C54.8923 112.791 54.3477 112.246 54.3477 111.574L54.4817 102.759L102.755 102.416V111.574C102.755 112.246 102.211 112.791 101.538 112.791Z"
                        fill="#E5CAB6"
                      />
                      <path
                        opacity="0.3"
                        d="M81.0083 96.0095C71.0818 96.0095 62.6069 91.5944 59.2578 85.377V95.2957C59.2578 96.5604 60.2833 97.5851 61.5472 97.5851H100.469C101.733 97.5851 102.758 96.5596 102.758 95.2957V85.377C99.4089 91.5944 90.9349 96.0095 81.0083 96.0095Z"
                        fill="#E5CAB6"
                      />
                      <path
                        d="M101.711 103.565H55.5078C54.547 103.565 54.0958 102.426 54.8135 101.814L59.478 97.8372C59.6689 97.6744 59.9159 97.584 60.1722 97.584H101.711C102.288 97.584 102.756 98.0328 102.756 98.5853V102.562C102.755 103.116 102.288 103.565 101.711 103.565Z"
                        fill="#F2E0D3"
                      />
                      <path
                        opacity="0.5"
                        d="M101.538 111.166H55.564C54.9687 111.166 54.4739 110.737 54.3687 110.172L54.3477 111.573C54.3477 112.245 54.8923 112.789 55.564 112.789H101.538C102.21 112.789 102.755 112.245 102.755 111.573V109.949C102.755 110.621 102.211 111.166 101.538 111.166Z"
                        fill="#E5CAB6"
                      />
                      <path
                        d="M150.497 80.3066L167.165 86.0908L165.206 113.494L142.864 112.504L142.913 98.4805C142.913 98.4805 141.768 81.8807 150.497 80.3066Z"
                        fill="#F9ECE1"
                      />
                      <path
                        d="M102.701 122.117H155.012V112.036H102.701V122.117Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M167.168 86.0895L164.667 122.119H150.285C150.285 122.119 151.679 92.6833 157.515 89.035C163.351 85.3867 167.168 86.0895 167.168 86.0895Z"
                        fill="#DEBFA8"
                      />
                      <path
                        d="M150.476 121.695C150.407 121.698 150.339 121.717 150.284 121.757L150.273 121.765V121.751C150.306 119.93 150.399 118.112 150.509 116.294C150.569 115.386 150.635 114.478 150.707 113.57C150.78 112.662 150.866 111.756 150.954 110.849L151.095 109.49L151.253 108.133C151.363 107.228 151.48 106.324 151.608 105.422C151.869 103.617 152.174 101.818 152.536 100.028C152.912 98.2414 153.339 96.4608 153.906 94.7146C154.047 94.2782 154.203 93.8458 154.364 93.4156C154.533 92.987 154.702 92.5593 154.898 92.14C155.282 91.3016 155.735 90.4803 156.343 89.754L156.581 89.4899L156.84 89.2413C156.934 89.1649 157.025 89.0863 157.121 89.0138L157.272 88.9109C157.323 88.8774 157.374 88.8408 157.423 88.8143C157.819 88.5844 158.211 88.346 158.621 88.1395C159.432 87.7125 160.265 87.3229 161.126 87.0049C161.34 86.9239 161.559 86.8538 161.775 86.7782C161.991 86.7034 162.213 86.6434 162.431 86.5748C162.651 86.5101 162.873 86.4571 163.095 86.3971C163.318 86.3465 163.541 86.2951 163.766 86.2522C164.215 86.1673 164.668 86.1018 165.123 86.0605C165.579 86.0255 166.036 86.0138 166.49 86.0387C165.579 86.0535 164.68 86.2047 163.802 86.4205C162.924 86.6395 162.069 86.9364 161.238 87.2886C160.404 87.6353 159.599 88.0468 158.818 88.4964C158.424 88.7161 158.044 88.96 157.66 89.1961C157.297 89.4229 156.989 89.7244 156.715 90.065C156.442 90.4055 156.205 90.7795 155.987 91.1668C155.769 91.5525 155.575 91.9561 155.394 92.3652C155.211 92.7735 155.052 93.1943 154.895 93.6151C154.745 94.039 154.598 94.4645 154.466 94.8961C153.928 96.6175 153.506 98.3808 153.146 100.155C152.776 101.929 152.469 103.717 152.191 105.511C152.05 106.407 151.918 107.305 151.794 108.205L151.614 109.555L151.439 110.906C150.992 114.512 150.618 118.129 150.287 121.754L150.276 121.747C150.336 121.708 150.407 121.693 150.476 121.695Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M105.197 97.5861H143.711C145.087 97.5861 146.204 96.4695 146.204 95.0926V75.5013C146.204 74.1244 145.087 73.0078 143.711 73.0078H105.197C103.82 73.0078 102.703 74.1244 102.703 75.5013V95.0926C102.703 96.4695 103.82 97.5861 105.197 97.5861Z"
                        fill="#EBD6C5"
                      />
                      <path
                        d="M103.919 112.791H149.894C150.565 112.791 151.11 112.246 151.11 111.574L150.976 102.759L102.703 102.416V111.574C102.703 112.246 103.248 112.791 103.919 112.791Z"
                        fill="#E5CAB6"
                      />
                      <path
                        opacity="0.3"
                        d="M124.454 96.0095C134.38 96.0095 142.855 91.5944 146.204 85.377V95.2957C146.204 96.5604 145.179 97.5851 143.915 97.5851H104.992C103.728 97.5851 102.703 96.5596 102.703 95.2957V85.377C106.052 91.5944 114.526 96.0095 124.454 96.0095Z"
                        fill="#E5CAB6"
                      />
                      <path
                        d="M103.748 103.565H149.951C150.912 103.565 151.363 102.426 150.646 101.814L145.981 97.8372C145.79 97.6744 145.543 97.584 145.287 97.584H103.748C103.171 97.584 102.703 98.0328 102.703 98.5853V102.562C102.703 103.116 103.171 103.565 103.748 103.565Z"
                        fill="#F2E0D3"
                      />
                      <path
                        opacity="0.5"
                        d="M103.919 111.166H149.894C150.489 111.166 150.984 110.737 151.089 110.172L151.11 111.573C151.11 112.245 150.565 112.789 149.894 112.789H103.919C103.248 112.789 102.703 112.245 102.703 111.573V109.949C102.703 110.621 103.248 111.166 103.919 111.166Z"
                        fill="#E5CAB6"
                      />
                      <path
                        opacity="0.5"
                        d="M41.0192 124.294H45.0431L45.2363 122.117H40.875L41.0192 124.294Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M50.8867 122.117L51.0301 124.294H54.0878L54.2802 122.117H50.8867Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M49.8606 77.2213C50.8915 76.534 54.3278 77.2704 55.9479 77.3195C57.5679 77.3686 68.3671 75.6995 69.6926 75.6995C71.0181 75.6995 73.9144 74.374 74.3072 74.8649C74.6999 75.3558 74.3563 79.774 74.7981 80.6086C75.2399 81.4431 78.2345 90.4751 78.529 91.5551C78.8235 92.6351 81.6436 97.238 81.349 97.8762C81.0545 98.5144 74.7007 97.7165 69.9879 97.8326C66.0474 97.9292 61.9868 98.8697 61.2505 99.0661C60.5141 99.2624 58.4632 100.895 57.5686 100.588C56.6741 100.281 56.5868 95.777 57.0286 93.7151C57.4705 91.6533 53.9998 83.9468 53.3047 83.0631C52.6097 82.1795 48.8296 77.9086 49.8606 77.2213Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 98.6496L47.457 97.9888L50.2568 94.3109L53.263 96.9984L55.7051 93.7912L58.7114 96.4787L61.1542 93.2706L64.1597 95.9582L66.6026 92.7501L69.608 95.4377L72.0509 92.2304L75.0572 94.9171L77.5 91.7098L80.5063 94.3974L82.9491 91.1893L85.9554 93.8769L88.0414 91.1387L88.9094 91.7995L86.1081 95.4766L83.1019 92.7891L80.659 95.9971L77.6528 93.3096L75.2099 96.5177L72.2036 93.8301L69.7616 97.0374L66.7553 94.3506L64.3124 97.5579L61.307 94.8704L58.8641 98.0784L55.8586 95.3909L53.4158 98.599L50.4095 95.9114L48.3251 98.6496Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 93.4328L47.457 92.772L50.2568 89.0949L53.263 91.7824L55.7051 88.5744L58.7114 91.2619L61.1542 88.0538L64.1597 90.7414L66.6026 87.5333L69.608 90.2209L72.0509 87.0136L75.0572 89.7011L77.5 86.4931L80.5063 89.1806L82.9491 85.9725L85.9554 88.6601L88.0414 85.9219L88.9094 86.5827L86.1081 90.2598L83.1019 87.5723L80.659 90.7803L77.6528 88.0928L75.2099 91.3009L72.2036 88.6133L69.7616 91.8214L66.7553 89.1338L64.3124 92.3411L61.307 89.6536L58.8641 92.8617L55.8586 90.1741L53.4158 93.3822L50.4095 90.6946L48.3251 93.4328Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 88.2199L47.457 87.5591L50.2568 83.882L53.263 86.5695L55.7051 83.3615L58.7114 86.049L61.1542 82.8409L64.1597 85.5285L66.6026 82.3204L69.608 85.008L72.0509 81.8007L75.0572 84.4882L77.5 81.2802L80.5063 83.9677L82.9491 80.7596L85.9554 83.4472L88.0414 80.709L88.9094 81.3698L86.1081 85.0469L83.1019 82.3594L80.659 85.5674L77.6528 82.8799L75.2099 86.088L72.2036 83.4004L69.7616 86.6085L66.7553 83.9209L64.3124 87.1282L61.307 84.4407L58.8641 87.6488L55.8586 84.9612L53.4158 88.1693L50.4095 85.4817L48.3251 88.2199Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 83.0031L47.457 82.3424L50.2568 78.6652L53.263 81.3527L55.7051 78.1447L58.7114 80.8322L61.1542 77.6241L64.1597 80.3117L66.6026 77.1044L69.608 79.7912L72.0509 76.5839L75.0572 79.2714L77.5 76.0634L80.5063 78.7509L82.9491 75.5428L85.9554 78.2304L88.0414 75.4922L88.9094 76.153L86.1081 79.8301L83.1019 77.1426L80.659 80.3506L77.6528 77.6631L75.2099 80.8712L72.2036 78.1836L69.7616 81.3917L66.7553 78.7041L64.3124 81.9122L61.307 79.2247L58.8641 82.432L55.8586 79.7444L53.4158 82.9525L50.4095 80.2649L48.3251 83.0031Z"
                        fill="#6EC4CE"
                      />
                      <path
                        opacity="0.5"
                        d="M81.349 97.8748C81.5493 97.4408 80.3095 95.1733 79.4025 93.427C76.5287 94.034 67.5295 95.8255 64.3915 95.1483C60.6364 94.3387 59.2642 92.8753 57.3224 88.3737C56.2892 85.9776 55.0167 80.6797 54.2304 77.1584C52.5746 76.9659 50.6 76.7267 49.8606 77.2191C48.8296 77.9064 52.6097 82.1773 53.3039 83.061C53.9982 83.9446 57.4697 91.6512 57.0279 93.713C56.586 95.7748 56.6733 100.278 57.5679 100.586C58.4624 100.893 60.5133 99.2603 61.2497 99.0639C61.9861 98.8676 66.0466 97.927 69.9871 97.8304C74.7007 97.7151 81.0545 98.513 81.349 97.8748Z"
                        fill="#E2D3C9"
                      />
                      <path
                        d="M156.045 77.2213C155.014 76.534 151.578 77.2704 149.958 77.3195C148.338 77.3686 137.539 75.6995 136.213 75.6995C134.888 75.6995 131.991 74.374 131.599 74.8649C131.206 75.3558 131.549 79.774 131.108 80.6086C130.666 81.4431 127.671 90.4751 127.377 91.5551C127.082 92.6351 124.262 97.238 124.557 97.8762C124.851 98.5144 131.205 97.7165 135.918 97.8326C139.858 97.9292 143.919 98.8697 144.655 99.0661C145.392 99.2624 147.443 100.895 148.337 100.588C149.232 100.281 149.319 95.777 148.877 93.7151C148.435 91.6533 151.906 83.9468 152.601 83.0631C153.296 82.1795 157.076 77.9086 156.045 77.2213Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 98.6496L155.499 95.9114L152.494 98.599L150.051 95.3909L147.045 98.0784L144.602 94.8704L141.596 97.5579L139.153 94.3506L136.148 97.0374L133.705 93.8301L130.7 96.5177L128.256 93.3096L125.25 95.9971L122.807 92.7891L119.801 95.4766L117 91.7995L117.867 91.1387L119.953 93.8769L122.96 91.1893L125.403 94.3974L128.409 91.7098L130.852 94.9171L133.858 92.2304L136.301 95.4377L139.306 92.7501L141.749 95.9582L144.755 93.2706L147.198 96.4787L150.204 93.7912L152.646 96.9984L155.652 94.3109L158.452 97.9888L157.584 98.6496Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 93.4328L155.499 90.6946L152.494 93.3822L150.051 90.1741L147.045 92.8617L144.602 89.6536L141.596 92.3411L139.153 89.1338L136.148 91.8214L133.705 88.6133L130.7 91.3009L128.256 88.0928L125.25 90.7803L122.807 87.5723L119.801 90.2598L117 86.5827L117.867 85.9219L119.953 88.6601L122.96 85.9725L125.403 89.1806L128.409 86.4931L130.852 89.7011L133.858 87.0136L136.301 90.2209L139.306 87.5333L141.749 90.7414L144.755 88.0538L147.198 91.2619L150.204 88.5744L152.646 91.7824L155.652 89.0949L158.452 92.772L157.584 93.4328Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 88.2199L155.499 85.4817L152.494 88.1693L150.051 84.9612L147.045 87.6488L144.602 84.4407L141.596 87.1282L139.153 83.9209L136.148 86.6085L133.705 83.4004L130.7 86.088L128.256 82.8799L125.25 85.5674L122.807 82.3594L119.801 85.0469L117 81.3698L117.867 80.709L119.953 83.4472L122.96 80.7596L125.403 83.9677L128.409 81.2802L130.852 84.4882L133.858 81.8007L136.301 85.008L139.306 82.3204L141.749 85.5285L144.755 82.8409L147.198 86.049L150.204 83.3615L152.646 86.5695L155.652 83.882L158.452 87.5591L157.584 88.2199Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 83.0031L155.499 80.2649L152.494 82.9525L150.051 79.7444L147.045 82.432L144.602 79.2247L141.596 81.9122L139.153 78.7041L136.148 81.3917L133.705 78.1836L130.7 80.8712L128.256 77.6631L125.25 80.3506L122.807 77.1426L119.801 79.8301L117 76.153L117.867 75.4922L119.953 78.2304L122.96 75.5428L125.403 78.7509L128.409 76.0634L130.852 79.2714L133.858 76.5839L136.301 79.7912L139.306 77.1044L141.749 80.3117L144.755 77.6241L147.198 80.8322L150.204 78.1447L152.646 81.3527L155.652 78.6652L158.452 82.3424L157.584 83.0031Z"
                        fill="#6EC4CE"
                      />
                      <path
                        opacity="0.5"
                        d="M124.557 97.8748C124.356 97.4408 125.596 95.1733 126.503 93.427C129.377 94.034 138.376 95.8255 141.514 95.1483C145.269 94.3387 146.641 92.8753 148.583 88.3737C149.617 85.9776 150.889 80.6797 151.675 77.1584C153.331 76.9659 155.306 76.7267 156.045 77.2191C157.076 77.9064 153.296 82.1773 152.602 83.061C151.907 83.9446 148.437 91.6512 148.878 93.713C149.319 95.7748 149.232 100.278 148.338 100.586C147.443 100.893 145.392 99.2603 144.656 99.0639C143.92 98.8676 139.859 97.927 135.919 97.8304C131.205 97.7151 124.851 98.513 124.557 97.8748Z"
                        fill="#E2D3C9"
                      />
                      <path
                        d="M122.798 70.5586C120.447 70.448 118.103 70.8259 115.778 71.2023C115.044 71.3215 114.267 71.729 114.82 72.6057C115.123 73.0872 115.753 73.2283 116.318 73.2929C118.746 73.5711 121.24 73.2633 123.68 73.2672L122.798 70.5586Z"
                        fill="#755846"
                      />
                      <path
                        d="M140.096 67.296C140.453 69.4762 139.43 72.6274 137.05 73.2648C136.09 73.522 134.934 73.4308 133.944 73.4246C132.737 73.4176 131.531 73.4074 130.325 73.3989C127.956 73.3817 125.586 73.3646 123.218 73.3474C121.656 73.3365 119.996 73.2968 118.693 72.4357C117.144 71.4134 116.373 69.523 117.402 67.896C118.287 66.498 119.941 65.6417 121.52 65.3019C124.163 64.7323 126.909 65.4874 129.537 65.0136C129.962 64.9373 130.383 64.8282 130.8 64.677C133.173 63.8167 135.53 62.6315 137.952 64.0357C139.115 64.7105 139.879 65.9697 140.096 67.296Z"
                        fill="#5E4130"
                      />
                      <path
                        d="M120.473 62.6022C120.078 62.1837 119.835 62.1019 119.596 62.6972C119.32 63.3837 119.134 64.131 119.142 64.8752C118.152 65.0825 117.214 65.536 116.421 66.171C115.812 65.7378 115.088 65.465 114.363 65.3014C113.737 65.1604 113.667 65.4074 113.786 65.97C113.935 66.6651 114.171 67.336 114.401 68.0077C114.544 68.4284 114.674 68.8531 114.821 69.2723C114.924 69.7071 115.129 70.1217 115.38 70.4326C116.071 71.2929 117.448 71.7923 118.516 71.9334C119.723 72.0931 120.867 71.7846 121.68 70.8666C122.41 70.043 122.908 68.9194 123.097 67.8409C123.206 67.2269 123.155 66.5708 122.939 65.977C122.697 65.3108 122.218 64.8261 121.802 64.2682C121.377 63.7001 120.962 63.1188 120.473 62.6022Z"
                        fill="#755846"
                      />
                      <path
                        d="M138.316 65.5664C140.59 67.7311 140.352 70.2262 139.095 72.4329C137.702 74.8805 135.408 76.5379 132.849 77.6156C129.827 78.8888 126.369 79.5402 123.133 78.7766C122.482 78.6231 121.771 78.3036 121.579 77.6631C121.013 75.768 123.968 75.8023 125.022 75.7119C127.188 75.5272 129.483 75.5054 131.589 74.801C133.901 74.028 135.547 72.3792 136.703 70.269L138.316 65.5664Z"
                        fill="#755846"
                      />
                      <path
                        d="M139.963 69.0548C139.955 68.0379 139.609 67.0226 138.975 66.2262C137.366 64.2026 134.234 64.1395 132.078 65.2366C129.605 66.4951 129.213 69.8263 130.182 72.1741C130.226 72.2816 129.316 72.2504 129.239 72.2559C128.585 72.3018 127.231 72.1772 126.97 72.9782C126.796 73.5151 127.154 74.2413 127.693 74.4151C127.918 74.4876 128.159 74.4884 128.396 74.4876C130.09 74.4852 131.784 74.4907 133.478 74.4938C134.805 74.4962 135.807 74.2507 136.602 73.1193C137.015 72.5302 137.329 71.8725 137.769 71.3037L139.963 69.0548Z"
                        fill="#755846"
                      />
                      <path
                        d="M120.23 69.7994C120.326 70.0472 120.17 70.3378 119.883 70.4493C119.595 70.5607 119.284 70.45 119.188 70.203C119.093 69.9552 119.248 69.6646 119.536 69.5532C119.823 69.4417 120.134 69.5524 120.23 69.7994Z"
                        fill="#E88E8E"
                      />
                      <path
                        d="M122.614 65.2617C122.7 65.4082 122.808 65.5313 122.91 65.67C122.961 65.7394 123.008 65.8142 123.047 65.8976C123.086 65.9833 123.111 66.0674 123.135 66.1516C123.18 66.3207 123.209 66.4906 123.235 66.6565C123.262 66.8186 123.285 66.997 123.296 67.1685C123.342 67.8628 123.227 68.5672 122.979 69.2202C122.728 69.8708 122.343 70.4747 121.842 70.9578C121.59 71.1994 121.318 71.4121 121.014 71.5836C120.86 71.6654 120.698 71.7394 120.527 71.7791C120.357 71.8212 120.176 71.8267 120.012 71.7862C120.352 71.7643 120.637 71.596 120.886 71.3927C121.135 71.1869 121.366 70.9524 121.573 70.7062C121.99 70.2129 122.31 69.6487 122.543 69.0526C122.77 68.4542 122.907 67.8199 122.93 67.1739C122.933 67.0929 122.935 67.0126 122.935 66.9316L122.93 66.6838C122.926 66.517 122.924 66.3526 122.91 66.1921C122.903 66.1119 122.894 66.0316 122.877 65.9591C122.859 65.8843 122.829 65.8103 122.797 65.7339C122.733 65.5835 122.652 65.4277 122.614 65.2617Z"
                        fill="#8E6751"
                      />
                      <path
                        d="M119.832 67.9407C119.957 68.0295 120.084 68.0701 120.211 68.0794C120.337 68.0888 120.452 68.0623 120.558 68.0054C120.663 67.9477 120.757 67.8636 120.828 67.7584C120.9 67.6532 120.949 67.5246 120.977 67.375C121.045 67.5129 121.05 67.6844 120.992 67.8394C120.935 67.9945 120.819 68.1301 120.669 68.2111C120.593 68.2516 120.51 68.2773 120.423 68.2867C120.338 68.2945 120.251 68.2844 120.172 68.2586C120.014 68.2072 119.878 68.0888 119.832 67.9407Z"
                        fill="#061F34"
                      />
                      <path
                        d="M116.863 69.4056C116.988 69.4944 117.116 69.5349 117.242 69.5443C117.368 69.5536 117.484 69.5271 117.59 69.4702C117.695 69.4126 117.788 69.3284 117.859 69.2232C117.931 69.118 117.98 68.9895 118.008 68.8398C118.077 68.9778 118.081 69.1492 118.024 69.3043C117.966 69.4593 117.851 69.5949 117.7 69.676C117.625 69.7165 117.541 69.743 117.455 69.7515C117.369 69.7593 117.283 69.7492 117.203 69.7235C117.046 69.6728 116.909 69.5536 116.863 69.4056Z"
                        fill="#061F34"
                      />
                      <path
                        d="M108.28 80.7512C107.392 82.672 105.911 84.3613 104.271 85.6494C102.477 87.059 100.307 88.0182 98.0396 88.3175C97.4108 88.4008 95.7028 88.7694 95.4791 88.0104C95.2983 87.3949 96.5178 85.8286 96.8311 85.379C97.9313 83.8011 99.122 82.2855 100.394 80.8416C101.246 79.8738 103.205 78.6683 103.236 77.2626C103.262 76.1039 102.405 75.0169 101.972 73.9961C101.14 72.0371 100.248 70.1039 99.4391 68.1355C98.5274 65.9163 97.7965 63.4579 98.1106 61.0337C98.268 59.815 99.4797 57.63 100.885 58.6189C103.07 60.1563 104.597 63.4314 105.781 65.7527C107.443 69.0075 108.781 72.6254 109.113 76.2839C109.256 77.8501 108.923 79.3611 108.28 80.7512Z"
                        fill="#F9AE8F"
                      />
                      <path
                        d="M70.8966 80.7512C71.785 82.672 73.2663 84.3613 74.9057 85.6494C76.7003 87.059 78.8697 88.0182 81.1372 88.3175C81.766 88.4008 83.4741 88.7694 83.6977 88.0104C83.8785 87.3949 82.659 85.8286 82.3458 85.379C81.2455 83.8011 80.0549 82.2855 78.7832 80.8416C77.9307 79.8738 75.9717 78.6683 75.9406 77.2626C75.9148 76.1039 76.772 75.0169 77.2052 73.9961C78.0367 72.0371 78.9289 70.1039 79.7377 68.1355C80.6494 65.9163 81.3803 63.4579 81.0663 61.0337C80.9089 59.815 79.6972 57.63 78.2915 58.6189C76.1073 60.1563 74.58 63.4314 73.3956 65.7527C71.7335 69.0075 70.3956 72.6254 70.0637 76.2839C69.9218 77.8501 70.2538 79.3611 70.8966 80.7512Z"
                        fill="#F9AE8F"
                      />
                      <path
                        d="M88.0875 30.8294C88.2792 30.6985 88.46 30.538 88.6595 30.4195C89.6351 29.8398 90.1501 30.4834 91.0595 30.6315C91.4203 30.6907 91.7896 30.6486 92.152 30.5972C92.5159 30.5457 92.9179 30.4935 93.2257 30.6922C93.6091 30.9393 93.6933 31.4793 94.0556 31.7551C94.6509 32.2094 95.6 31.7076 96.239 32.1011C96.9013 32.5086 96.8429 33.478 97.22 34.0663C97.4024 34.3515 97.7156 34.5252 97.965 34.7559C98.5525 35.2982 98.2619 36.3712 98.1154 37.0562C97.6915 39.0447 97.2231 41.024 96.712 42.9923C96.2452 44.7892 94.7842 45.7523 93.2733 46.7372C92.2166 47.4261 91.1584 47.8437 90.027 48.3643C88.9712 48.8497 87.8132 48.9884 86.7153 48.457C85.7833 48.0058 85.1436 47.1401 84.5413 46.3063C83.9156 45.4406 83.4145 44.497 83.0888 43.4778C82.7062 42.2785 82.4989 41.0419 82.3018 39.8029C82.1841 39.0634 82.0727 38.3232 81.9683 37.5814C81.8685 36.8754 81.7228 36.1515 81.7057 35.4377C81.6379 34.5603 81.6309 33.319 82.2963 32.6271C82.4304 32.4876 82.5963 32.3832 82.7841 32.3333C83.1948 32.2234 83.5361 32.3676 83.9366 32.1229C84.3098 31.8954 84.5522 31.505 84.8943 31.2377C85.3633 30.8715 86.0062 30.7304 86.5898 30.8676C86.9117 30.9431 87.228 31.0982 87.5561 31.0577C87.7525 31.032 87.9239 30.9416 88.0875 30.8294Z"
                        fill="#835F55"
                      />
                      <path
                        d="M85.6741 57.8081C87.1749 59.4024 90.0588 59.5294 92.0777 58.8772C93.4523 58.433 94.4232 57.4208 94.452 56.0284C94.4848 54.4722 93.0237 53.3665 92.6551 51.9156C92.4455 51.0935 92.4666 50.2465 92.4884 49.4096C92.5133 48.4333 92.5211 47.4538 92.5718 46.479C91.5377 46.2748 90.6993 46.1719 89.6006 46.2148C88.692 46.2499 87.7842 46.161 86.8756 46.2109C86.8024 46.2148 86.7229 46.2218 86.6715 46.267C86.6193 46.313 86.6099 46.3839 86.6037 46.4501C86.4821 47.7686 86.6014 49.1042 86.5063 50.425C86.4182 51.639 86.1276 52.8608 85.3671 53.866C84.439 55.0925 84.6673 56.739 85.6741 57.8081Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M92.5931 51.7192C92.4302 50.9548 92.4466 50.1717 92.4669 49.3979C92.4918 48.4215 92.4996 47.4421 92.5502 46.4672C91.5162 46.2631 90.6778 46.1602 89.5791 46.2031C88.6705 46.2381 87.7627 46.1493 86.8541 46.1992C86.7809 46.2031 86.7022 46.2101 86.65 46.2553C86.5978 46.3013 86.5884 46.3722 86.5822 46.4384C86.4606 47.7569 86.5798 49.0924 86.4848 50.4132C86.4575 50.7912 86.4068 51.1699 86.332 51.5431C86.4746 51.66 86.6196 51.7714 86.7692 51.8751C87.8905 52.6504 89.403 52.9075 90.7448 52.5522C91.4282 52.3706 92.0422 52.0847 92.5931 51.7192Z"
                        fill="#F38D70"
                      />
                      <path
                        d="M95.9224 41.9959C95.9333 41.8665 95.9458 41.7372 95.9582 41.6078C96.1117 40.0712 96.2473 38.0499 95.2336 36.7572C94.2587 35.5151 92.4603 35.1738 91.0008 34.8668C88.9133 34.4273 86.4821 35.0553 84.7444 36.2717C84.0532 36.7556 83.6535 37.5714 83.4969 38.4005C83.341 39.2265 83.4493 40.1273 83.4688 40.9634C83.4984 42.2546 83.4867 43.5458 83.7603 44.8128C84.0135 45.9878 84.4132 47.1949 85.0343 48.2305C85.5805 49.2053 86.2857 50.1162 87.1896 50.784C88.1972 51.5289 89.5553 51.7767 90.7608 51.4346C92.4424 50.9577 93.7071 49.6775 94.5081 48.1634C95.1993 46.8575 95.5834 45.3949 95.7517 43.9323C95.825 43.2871 95.8663 42.6403 95.9224 41.9959Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M96.4742 43.2881C96.5443 43.2577 96.5888 43.1907 96.6269 43.126C96.7789 42.8665 96.9597 42.5206 96.9721 42.2167C96.983 41.9486 96.9792 41.6704 96.9854 41.3992C97.0158 40.0637 96.8638 38.792 96.5412 37.7299C96.1103 36.3094 95.1823 35.0657 93.8958 34.2686C92.6708 33.5104 91.1903 33.1839 89.7487 33.3156C88.6734 33.4138 88.0305 33.5945 86.6809 34.0582C85.77 34.3706 85.1529 34.8218 84.5692 35.4312C83.8391 36.194 83.458 37.3309 83.289 38.3517C83.116 39.3927 83.1269 40.4525 83.1386 41.5044C83.1394 41.6042 83.1425 42.7387 83.1978 42.8221C83.2531 42.9055 83.3817 42.9476 83.4549 42.8798C83.4892 42.8486 83.6622 41.7741 83.6716 41.7289C83.8695 40.8141 83.9139 40.5117 84.069 39.8821C84.2451 39.166 84.3066 38.6603 84.5684 38.0696C84.7679 37.6192 85.2144 37.1283 85.6991 36.9959C86.084 36.8907 86.4869 37.0434 86.864 37.1712C88.1326 37.6029 89.5157 37.7829 90.8311 37.5125C91.4739 37.38 92.0958 37.1431 92.7495 37.0792C93.4033 37.0153 94.2854 37.1626 94.6968 37.6621C94.883 37.8881 94.989 38.167 95.0778 38.4437C95.328 39.2221 95.4698 40.027 95.5984 40.8312C95.7191 41.587 95.7308 42.3491 95.981 43.0356C96.0067 43.1065 96.062 43.1642 96.1205 43.2125C96.1992 43.2795 96.3737 43.3317 96.4742 43.2881Z"
                        fill="#F38D70"
                      />
                      <path
                        d="M95.7844 42.9004C97.1176 42.1352 97.3826 44.4082 97.0974 45.5015C96.9797 45.9526 96.8091 46.3882 96.5613 46.7451C96.227 47.2267 95.3052 47.9911 94.8353 47.3872C94.6218 47.1129 94.6233 46.6812 94.6389 46.2978C94.6787 45.27 94.8805 43.4186 95.7844 42.9004Z"
                        fill="#F7AC8D"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M85.0864 53.4355C85.2168 53.6716 85.3598 53.8995 85.5158 54.1171C86.3145 55.2298 87.4413 56.009 88.7262 56.2802C90.9013 56.7398 93.3039 55.5973 94.4053 53.5246C94.6986 53.6551 94.9943 53.7801 95.2916 53.9015C95.2213 54.0455 95.1463 54.1871 95.0655 54.3255C93.8125 56.4714 91.0775 57.6777 88.5621 57.1946C87.1198 56.9172 85.8146 56.1169 84.8865 54.9418C84.6134 54.5957 84.3687 54.2163 84.1548 53.8075L84.2186 53.7824C84.2837 53.7567 84.3496 53.731 84.416 53.705C84.6363 53.6189 84.8621 53.5306 85.0864 53.4355ZM89.6834 57.5047C89.2954 57.5047 88.9065 57.4688 88.5232 57.3956C87.0325 57.1088 85.6837 56.2829 84.7252 55.0688C84.4396 54.7071 84.1845 54.3103 83.9622 53.8825C83.4801 54.0691 82.9955 54.2481 82.5113 54.4269C81.0454 54.9682 79.5833 55.5082 78.2076 56.2549C78.135 56.293 78.1724 56.9681 78.1945 57.3669C78.2018 57.4988 78.2074 57.6004 78.2068 57.6388C78.1998 58.0666 78.199 58.4921 78.1983 58.9245C78.1973 59.6353 78.1927 60.3024 78.1883 60.952V60.952C78.1757 62.807 78.1641 64.5199 78.238 66.7043C78.272 67.7023 78.3116 68.7013 78.3512 69.7008L78.3512 69.7008C78.4207 71.4537 78.4902 73.2079 78.5294 74.9602C78.6323 79.5833 77.4346 84.8314 76.3281 88.5951C80.0528 90.3421 85.2175 91.5257 89.3934 91.5958V91.599C89.4243 91.599 89.4555 91.5986 89.4868 91.5982L89.4877 91.5982C89.5192 91.5978 89.5508 91.5974 89.582 91.5974C89.6451 91.5982 89.7082 91.599 89.7705 91.599V91.5951C93.9464 91.5249 99.1119 90.3413 102.836 88.5943C101.729 84.8314 100.532 79.5833 100.634 74.9594C100.673 73.2056 100.743 71.4498 100.813 69.6954L100.813 69.6953L100.813 69.6943C100.852 68.6968 100.892 67.6996 100.926 66.7035C101 64.5191 100.988 62.8062 100.976 60.9512V60.9511C100.971 60.3015 100.967 59.6345 100.966 58.9237C100.965 58.4913 100.964 58.0666 100.957 57.638C100.956 57.5994 100.962 57.4975 100.969 57.3653L100.969 57.3652L100.969 57.3651C100.992 56.9662 101.029 56.2922 100.956 56.2541C99.7026 55.5941 98.3811 55.0919 97.06 54.5899C96.5326 54.3895 96.0053 54.1891 95.4824 53.9788C95.4081 54.1317 95.3286 54.2824 95.2424 54.4299C94.1383 56.3187 91.9221 57.5047 89.6834 57.5047Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M69.2969 69.9117C69.3997 69.6717 74.1156 59.4351 75.1777 58.2701C76.2398 57.1052 79.2125 55.7891 79.2125 55.7891L78.6959 70.1447L77.4444 72.3858L69.2969 69.9117Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M83.5763 42.9004C82.2431 42.1352 81.9782 44.4082 82.2634 45.5015C82.381 45.9526 82.5517 46.3882 82.7995 46.7451C83.1338 47.2267 84.0556 47.9911 84.5254 47.3872C84.739 47.1129 84.7374 46.6812 84.7218 46.2978C84.6821 45.27 84.4802 43.4186 83.5763 42.9004Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M94.3719 41.7776C94.5067 41.7644 94.6135 41.7285 94.6703 41.6592C94.8948 41.3849 94.5574 40.9937 94.3361 40.8441C93.9161 40.5605 92.4955 40.1077 92.1121 40.6579C91.7537 41.1706 92.4815 41.427 92.8602 41.5298C93.1173 41.5999 93.9098 41.8228 94.3719 41.7776Z"
                        fill="#835F55"
                      />
                      <path
                        d="M85.0606 41.5151C84.9265 41.494 84.8221 41.4527 84.7699 41.3802C84.5611 41.0935 84.9203 40.7218 85.1502 40.5854C85.5858 40.326 87.0289 39.9543 87.3811 40.5247C87.7099 41.0569 86.9689 41.2719 86.5847 41.353C86.3229 41.4083 85.5187 41.586 85.0606 41.5151Z"
                        fill="#835F55"
                      />
                      <path
                        d="M93.3032 43.4005C93.2307 43.9428 92.9042 44.3464 92.5746 44.3028C92.245 44.2584 92.0362 43.7838 92.1078 43.2415C92.1803 42.6992 92.5068 42.2955 92.8364 42.3392C93.1668 42.3828 93.3756 42.8581 93.3032 43.4005Z"
                        fill="#1E2032"
                      />
                      <path
                        d="M87.2288 43.1659C87.2132 43.7129 86.9311 44.1485 86.5984 44.1391C86.2657 44.1298 86.0085 43.6786 86.0241 43.1316C86.0397 42.5846 86.3218 42.149 86.6545 42.1584C86.9872 42.1685 87.2444 42.6189 87.2288 43.1659Z"
                        fill="#1E2032"
                      />
                      <path
                        d="M90.7072 46.0382C90.6994 46.3008 90.2327 46.5003 89.6646 46.4847C89.0958 46.4683 88.6415 46.2432 88.6485 45.9806C88.6563 45.718 89.1231 45.5185 89.6911 45.5341C90.26 45.5496 90.7142 45.7756 90.7072 46.0382Z"
                        fill="#F38D70"
                      />
                      <path
                        d="M94.4398 46.0944C95.0234 45.9814 95.4169 45.5692 95.4535 45.0658C95.4855 44.6224 95.1224 44.3092 94.6073 44.3333C94.0462 44.3598 93.3761 44.6778 93.2109 45.1702C92.9647 45.8996 93.7353 46.2307 94.4398 46.0944Z"
                        fill="#FD816C"
                      />
                      <path
                        d="M84.6711 45.8093C84.11 45.6659 83.7524 45.2342 83.7461 44.7301C83.7415 44.2859 84.1132 43.9921 84.6126 44.0428C85.1565 44.0981 85.7893 44.4511 85.921 44.9506C86.1173 45.6916 85.3482 45.9823 84.6711 45.8093Z"
                        fill="#FD816C"
                      />
                      <path
                        d="M87.5352 47.3711C87.7042 47.4825 87.8811 47.5659 88.0643 47.6306C88.2474 47.6953 88.4344 47.7428 88.6245 47.7786C89.004 47.8495 89.3913 47.8776 89.7785 47.8753C90.1658 47.8729 90.5539 47.8433 90.9373 47.7794C91.1289 47.7475 91.3191 47.7069 91.5069 47.6524C91.6947 47.5979 91.8786 47.5301 92.0578 47.4366C91.9884 47.509 91.9113 47.5776 91.8271 47.636C91.7858 47.6672 91.7422 47.6937 91.6986 47.7202C91.6549 47.7482 91.6097 47.7708 91.5645 47.795C91.3822 47.8893 91.1897 47.9617 90.9926 48.0194C90.5983 48.1324 90.1892 48.1862 89.7801 48.1877C89.371 48.1893 88.9588 48.1371 88.5653 48.0155C88.3689 47.954 88.1772 47.8737 87.9996 47.7677C87.8227 47.6633 87.6583 47.5324 87.5352 47.3711Z"
                        fill="#F6604B"
                      />
                      <path
                        d="M95.62 33.8061C94.5447 33.1757 93.2293 32.8796 92.0239 32.684C90.8309 32.4908 89.6169 32.3817 88.4091 32.4542C87.0797 32.5337 85.7433 32.8282 84.5667 33.4679C82.8672 34.3913 82.6591 36.4173 82.6062 38.1573C82.5586 39.7251 82.8805 41.4651 83.5272 42.9277C83.5833 42.5272 83.8327 38.6591 84.0594 37.7108C84.1288 37.4217 84.2168 37.1295 84.3968 36.8887C84.7522 36.4126 85.4059 36.2248 86.0129 36.2428C86.62 36.2607 87.2052 36.4493 87.7958 36.5848C89.2498 36.9184 90.7865 36.9277 92.235 36.5755C92.8124 36.4352 93.3891 36.2163 93.993 36.3651C95.207 36.6643 95.6434 37.9345 95.6971 38.9116C95.7361 39.6246 95.8343 42.4914 95.8499 42.9184C95.8491 42.9005 95.9792 42.7867 95.9932 42.7688C96.139 42.5857 96.2403 42.3651 96.3268 42.1501C96.5917 41.4893 96.6938 40.7786 96.8122 40.0804C97.1481 38.1075 97.939 35.3817 95.9449 34.0126C95.839 33.9394 95.7306 33.8708 95.62 33.8061Z"
                        fill="#835F55"
                      />
                      <path
                        d="M81.6755 35.0556C81.6732 34.9831 81.6693 34.8873 81.6646 34.775C81.6428 34.2537 81.6093 33.466 81.6576 33.1379C81.7799 32.3174 82.3074 31.475 83.2113 31.4439C83.3836 31.4384 83.5534 31.4633 83.7178 31.4883C83.9142 31.5179 84.0997 31.5459 84.2828 31.5226C84.6475 31.4758 84.8469 31.2381 85.0776 30.9631C85.1205 30.9124 85.1633 30.8602 85.2085 30.8096C85.8155 30.1207 86.869 30.314 87.4441 30.4909L87.4877 30.5041C87.974 30.6537 88.4329 30.7955 88.9129 30.6311C89.2145 30.5283 89.5137 30.3974 89.802 30.2711C90.0405 30.1667 90.2867 30.0592 90.5361 29.9665C91.2989 29.682 92.3524 29.4522 93.0374 29.9727C93.2992 30.1714 93.395 30.4807 93.4878 30.7792C93.5789 31.073 93.6646 31.3504 93.9023 31.4766C94.108 31.5857 94.3636 31.5202 94.6106 31.4563C94.7127 31.4298 94.8179 31.4026 94.9192 31.3885C95.5885 31.2927 96.1784 31.5787 96.5353 32.1724C96.6779 32.4101 96.7909 32.6883 96.8906 33.046C96.9382 33.2158 96.9631 33.3896 96.9873 33.5571C97.0169 33.7628 97.0449 33.9576 97.1104 34.1423C97.1961 34.3847 97.2935 34.6589 97.4789 34.8483L97.3317 34.9917C97.115 34.7696 97.0099 34.4727 96.9163 34.2109C96.8439 34.0067 96.8127 33.7932 96.7831 33.586C96.7597 33.4247 96.7356 33.2579 96.6919 33.1005C96.5976 32.7608 96.4917 32.4989 96.3584 32.2776C96.0413 31.7501 95.5395 31.5062 94.9472 31.5911C94.8576 31.6036 94.7618 31.6285 94.6613 31.655C94.3893 31.7252 94.0815 31.8046 93.8049 31.6582C93.4924 31.4922 93.3896 31.1602 93.2906 30.84C93.2041 30.5602 93.1215 30.2953 92.9119 30.1363C92.301 29.6727 91.3207 29.8924 90.6062 30.1589C90.3623 30.2501 90.1184 30.3568 89.8823 30.4597C89.5893 30.5875 89.287 30.72 88.9768 30.8259C88.4337 31.0114 87.921 30.8532 87.4246 30.7005L87.381 30.6872C86.8542 30.5252 85.8911 30.3436 85.3605 30.9452C85.3168 30.995 85.2747 31.0449 85.2327 31.0948C84.9958 31.3769 84.7511 31.6691 84.3062 31.7259C84.0942 31.7532 83.8862 31.722 83.6843 31.6917C83.5223 31.6675 83.3688 31.6441 83.216 31.6496C82.4306 31.6769 81.9677 32.4319 81.8586 33.1683C81.8126 33.4769 81.8469 34.2841 81.868 34.7665C81.8726 34.8795 81.8765 34.9761 81.8789 35.0486L81.6755 35.0556Z"
                        fill="#835F55"
                      />
                      <path
                        d="M87.3164 32.6806C87.3974 32.4741 87.5307 32.287 87.6982 32.1367C87.8665 31.987 88.0691 31.8748 88.2858 31.8031C88.5032 31.7338 88.7377 31.7135 88.9676 31.7447C89.2006 31.7759 89.4125 31.8756 89.6112 31.9754C89.8107 32.0759 90.0008 32.1811 90.2011 32.2481C90.4021 32.3143 90.6125 32.3517 90.8245 32.3541C91.0356 32.358 91.2476 32.3307 91.4494 32.2715C91.5507 32.2411 91.6481 32.2052 91.7455 32.1593L92.0447 32.0159C92.1476 31.9683 92.2575 31.9255 92.3751 31.8967C92.4928 31.8702 92.6198 31.8585 92.7437 31.8803C92.8676 31.9005 92.9837 31.9481 93.0873 32.0112C93.191 32.0743 93.2821 32.1522 93.3624 32.238C93.4427 32.3237 93.5136 32.4164 93.5759 32.5122C93.6398 32.6096 93.6912 32.7094 93.7481 32.7967C93.805 32.8847 93.8673 32.9595 93.9476 33.0117C94.0279 33.0647 94.1237 33.0998 94.2266 33.1247C94.4315 33.1754 94.6614 33.1871 94.8819 33.2774C94.9918 33.3242 95.0931 33.3928 95.1741 33.4777C95.2567 33.5619 95.3222 33.66 95.3728 33.7637C95.4733 33.9717 95.5115 34.2024 95.5107 34.4252C95.5115 34.6497 95.4788 34.8694 95.4445 35.0884C95.457 34.8671 95.4702 34.6458 95.4538 34.4276C95.4375 34.2102 95.3884 33.9951 95.2832 33.8096C95.1811 33.6242 95.0245 33.4707 94.832 33.4029C94.6372 33.3328 94.4175 33.3265 94.1915 33.2813C94.0785 33.258 93.9616 33.2221 93.8541 33.1567C93.7458 33.0904 93.6624 32.9922 93.5977 32.8964C93.5323 32.7998 93.4801 32.7024 93.4201 32.6167C93.3601 32.5294 93.2938 32.4468 93.2214 32.3728C93.078 32.2239 92.9019 32.1086 92.711 32.0782C92.6159 32.0618 92.5185 32.0712 92.4211 32.0938C92.3237 32.1187 92.2263 32.1569 92.1289 32.2021L91.8289 32.3431C91.726 32.3907 91.6154 32.4312 91.504 32.4631C91.3925 32.4959 91.2788 32.5177 91.1642 32.5317C91.0497 32.5465 90.9336 32.552 90.8182 32.5465C90.5876 32.5387 90.3585 32.4935 90.1411 32.4164C89.9221 32.3385 89.7273 32.2208 89.5364 32.1148C89.3455 32.0096 89.1515 31.9138 88.945 31.8748C88.7385 31.8359 88.5211 31.8437 88.313 31.8974C88.1058 31.9512 87.9071 32.0463 87.7341 32.178C87.5634 32.3135 87.4169 32.4834 87.3164 32.6806Z"
                        fill="#835F55"
                      />
                      <path
                        d="M109.892 69.9117C109.789 69.6717 105.073 59.4351 104.011 58.2701C102.949 57.1052 99.9766 55.7891 99.9766 55.7891L100.493 70.1447L101.745 72.3858L109.892 69.9117Z"
                        fill="#4C9DAD"
                      />
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M78.3889 70.6995C78.3538 70.2943 78.3383 69.8899 78.3305 69.4855C78.3242 69.2829 78.3258 69.0811 78.3242 68.8792L78.3297 68.273L78.346 67.6668C78.3554 67.4649 78.3608 67.2623 78.3741 67.0605C78.3967 66.6569 78.4255 66.2525 78.4762 65.8496C78.512 66.2548 78.5268 66.6592 78.5346 67.0636C78.5408 67.2662 78.5385 67.4681 78.5408 67.6699L78.5354 68.2761L78.519 68.8824C78.5097 69.0842 78.5042 69.2868 78.491 69.4886C78.4684 69.8922 78.4388 70.2959 78.3889 70.6995Z"
                          fill="#A7C8BC"
                        />
                      </g>
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M100.737 70.6995C100.687 70.2959 100.658 69.8922 100.636 69.4886C100.623 69.2868 100.617 69.085 100.608 68.8824L100.591 68.2761L100.586 67.6699C100.588 67.4681 100.587 67.2655 100.592 67.0636C100.6 66.6592 100.616 66.2548 100.651 65.8496C100.7 66.2532 100.73 66.6569 100.753 67.0605C100.766 67.2623 100.771 67.4642 100.781 67.6668L100.797 68.273L100.803 68.8792C100.8 69.0811 100.802 69.2837 100.796 69.4855C100.788 69.8899 100.772 70.2951 100.737 70.6995Z"
                          fill="#A7C8BC"
                        />
                      </g>
                      <path
                        d="M113.944 92.2365C113.396 93.0617 112.676 93.7786 111.965 94.3708C108.084 97.6007 102.805 97.9958 98.2062 99.4186C94.0981 100.69 90.4474 100.865 86.2466 100.372C83.3752 100.034 80.478 99.1794 77.7087 98.1945C74.859 97.1815 72.0749 97.116 69.4193 95.5108C67.3271 94.2469 64.6317 93.0025 64.313 90.0157C64.1798 88.7666 65.1561 87.0391 66.1894 86.2864C67.6006 85.2593 70.2577 85.07 71.9806 85.2297C78.9211 85.871 83.1477 88.8765 90.1365 88.9279C94.0365 88.9568 97.6732 87.7466 101.42 86.6526C104.311 85.8087 107.521 85.2703 110.531 85.4471C112.411 85.5578 114.005 87.1568 114.467 88.7853C114.797 89.9503 114.626 91.2111 113.944 92.2365Z"
                        fill="#1C3842"
                      />
                      <path
                        d="M103.112 88.2682H76.0659L74.128 68.133C74.0929 67.7722 74.3726 67.459 74.7295 67.459H104.448C104.804 67.459 105.084 67.7715 105.049 68.133L103.112 88.2682Z"
                        fill="#B8D1CE"
                      />
                      <path
                        d="M103.325 88.8385H75.8541L73.8857 68.7033C73.8507 68.3425 74.1343 68.0293 74.4967 68.0293H104.681C105.045 68.0293 105.328 68.3418 105.292 68.7033L103.325 88.8385Z"
                        fill="white"
                      />
                      <path
                        d="M103.31 88.8379H75.8555V90.0597H103.31V88.8379Z"
                        fill="#B8D1CE"
                      />
                      <path
                        d="M91.4504 78.823C91.6626 77.7929 90.9995 76.7858 89.9694 76.5737C88.9393 76.3615 87.9322 77.0246 87.7201 78.0547C87.5079 79.0848 88.171 80.0919 89.2011 80.304C90.2312 80.5162 91.2383 79.8531 91.4504 78.823Z"
                        fill="#B8D1CE"
                      />
                      <path
                        d="M71.7574 99.5848C71.6514 99.8163 71.5906 100.074 71.5703 100.344C71.4761 101.638 71.9451 103.241 73.128 103.927C74.2431 104.573 75.6153 103.789 76.6618 103.38C77.713 102.968 78.7595 102.544 79.8301 102.184C82.2075 101.385 84.6691 100.88 87.1182 100.354C88.1694 100.128 89.4161 100.055 90.2585 99.3277C90.9543 98.7269 91.3494 97.7669 91.2161 96.8505C91.0424 95.6622 89.9959 94.6586 88.8013 94.5347C88.3494 94.4879 87.892 94.5549 87.4502 94.6594C86.0172 94.9983 84.6847 95.7035 83.3086 96.2248C81.8577 96.7742 80.3849 97.2775 78.8717 97.6274C77.4582 97.9547 76.0049 98.0459 74.5774 98.2913C73.8971 98.4082 73.1872 98.4799 72.5545 98.7752C72.1781 98.9513 71.9171 99.2381 71.7574 99.5848Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M79.9552 97.2793L81.4731 101.797L77.8902 102.901L76.3801 101.926L75.6328 97.9635L79.9552 97.2793Z"
                        fill="white"
                      />
                      <path
                        d="M72.6571 105.672C72.5597 105.69 72.4615 105.706 72.3633 105.721C71.1033 105.914 69.8457 105.407 68.9277 104.552C68.2459 103.917 67.7347 103.094 67.4807 102.197C67.1558 101.048 67.2991 99.8801 68.0332 98.9123C68.4353 98.3817 68.9869 98.0856 69.5838 97.823C70.4916 97.4232 71.4392 97.2799 72.4241 97.2939C73.4729 97.3095 74.5148 97.2549 75.562 97.3593C76.2096 97.4139 76.8633 97.4692 77.4836 97.6632C77.4088 97.6391 77.0192 97.8674 76.9452 97.9134C76.7862 98.0123 76.7106 98.0607 76.7169 98.2734C76.7262 98.5765 77.0387 98.864 77.1937 99.1095C77.4485 99.5108 77.6527 99.9565 77.6979 100.429C77.7789 101.284 77.4462 102.604 78.8114 102.673C78.7421 102.67 77.9465 103.273 77.8576 103.345C77.6153 103.542 76.9421 103.94 76.6678 104.09C75.1202 104.943 74.2646 105.379 72.6571 105.672Z"
                        fill="white"
                      />
                      <path
                        d="M73.5946 105.233C73.4972 105.251 73.399 105.267 73.3008 105.282C72.0408 105.474 70.7832 104.968 69.8652 104.113C69.1834 103.478 68.6722 102.654 68.4182 101.757C68.0933 100.609 68.2366 99.4399 68.9707 98.4729C69.3728 97.9422 69.9244 97.6461 70.5213 97.3835C71.4291 96.9838 72.3767 96.8404 73.3616 96.8544C74.4104 96.87 75.4523 96.8155 76.4995 96.9199C77.1471 96.9744 77.8008 97.0298 78.4211 97.2238C78.3463 97.1996 77.9567 97.4279 77.8827 97.4739C77.7237 97.5729 77.6481 97.6212 77.6544 97.8339C77.6637 98.137 77.9762 98.4246 78.1312 98.67C78.386 99.0713 78.5902 99.5171 78.6354 99.99C78.7164 100.844 78.3837 102.165 79.7489 102.233C79.6796 102.23 78.884 102.833 78.7951 102.905C78.5528 103.102 77.8796 103.5 77.6053 103.651C76.0577 104.503 75.2021 104.94 73.5946 105.233Z"
                        fill="#EA584A"
                      />
                      <path
                        d="M74.292 102.32C75.1258 102.394 75.9689 102.357 76.7925 102.211C77.3411 102.113 77.9006 102.079 78.1343 101.484C78.2084 101.296 78.2395 101.094 78.2668 100.894C78.3775 100.092 78.1881 99.2014 77.5967 98.6162C77.345 98.3669 77.0076 98.1752 76.6538 98.1993C76.5198 98.2087 76.3897 98.2476 76.2611 98.2874C75.9229 98.391 75.5855 98.4939 75.2473 98.5975C74.8686 98.7128 74.4891 98.8289 74.1237 98.9817C73.833 99.1032 73.5478 99.2513 73.3226 99.4718C73.0592 99.7305 72.9361 100.027 72.9883 100.386C73.0452 100.778 72.9891 101.16 73.1426 101.54C73.2618 101.834 73.4824 102.096 73.7769 102.216C73.9406 102.283 74.1174 102.304 74.292 102.32Z"
                        fill="#CF3A43"
                      />
                      <path
                        d="M72.9903 99.0764C73.4984 100.015 73.8241 101.416 73.3495 102.419C73.2428 102.644 73.5786 102.842 73.6862 102.615C74.2277 101.472 73.9098 99.9562 73.3269 98.8793C73.2069 98.6595 72.8703 98.8559 72.9903 99.0764Z"
                        fill="white"
                      />
                      <path
                        d="M74.3173 98.6635C74.6664 99.1996 74.8674 99.8682 74.996 100.492C75.1472 101.226 75.1137 101.965 74.7919 102.651C74.6859 102.877 75.0217 103.075 75.1285 102.847C75.4581 102.144 75.536 101.408 75.4184 100.644C75.3038 99.9041 75.0646 99.0976 74.654 98.4664C74.5176 98.2575 74.1802 98.4524 74.3173 98.6635Z"
                        fill="white"
                      />
                      <path
                        d="M75.5542 98.2908C75.9438 98.8519 76.1823 99.5524 76.3381 100.216C76.5142 100.965 76.508 101.734 76.201 102.45C76.1036 102.678 76.4387 102.877 76.5376 102.646C76.8524 101.912 76.9124 101.151 76.7675 100.368C76.6249 99.5937 76.342 98.7443 75.8901 98.0945C75.749 97.8903 75.4109 98.0843 75.5542 98.2908Z"
                        fill="white"
                      />
                      <path
                        d="M113.011 93.9487C111.214 95.8422 108.587 96.7149 106.126 97.3562C100.383 98.8523 94.6112 100.322 88.8106 101.577C84.6005 102.487 87.3987 101.827 85.7264 102.233L83.582 94.9017C83.582 94.9017 88.1584 93.1983 92.1286 91.8198C96.9644 90.1406 101.853 88.5362 106.696 86.8242C108.22 86.2858 110.211 85.7738 111.823 86.1518C112.735 86.3653 113.589 86.917 114.047 87.7336C115.164 89.7237 114.581 92.2406 113.087 93.8669C113.062 93.8949 113.037 93.9222 113.011 93.9487Z"
                        fill="#254654"
                      />
                      <path
                        d="M83.3125 94.4566L85.4086 102.762L88.6837 102.056L86.4052 93.248L83.3125 94.4566Z"
                        fill="#2E5268"
                      />
                      <path
                        d="M107.059 99.5848C107.165 99.8163 107.226 100.074 107.246 100.344C107.34 101.638 106.871 103.241 105.688 103.927C104.573 104.573 103.201 103.789 102.154 103.38C101.103 102.968 100.057 102.544 98.9859 102.184C96.6085 101.385 94.1469 100.88 91.6978 100.354C90.6467 100.128 89.3999 100.055 88.5576 99.3277C87.8617 98.7269 87.4667 97.7669 87.5999 96.8505C87.7737 95.6622 88.8202 94.6586 90.0147 94.5347C90.4667 94.4879 90.9241 94.5549 91.3659 94.6594C92.7989 94.9983 94.1314 95.7035 95.5075 96.2248C96.9584 96.7742 98.4311 97.2775 99.9444 97.6274C101.358 97.9547 102.811 98.0459 104.239 98.2913C104.919 98.4082 105.629 98.4799 106.262 98.7752C106.638 98.9513 106.899 99.2381 107.059 99.5848Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M98.8578 97.2793L97.3398 101.797L100.923 102.901L102.433 101.926L103.18 97.9635L98.8578 97.2793Z"
                        fill="white"
                      />
                      <path
                        d="M106.158 105.672C106.256 105.69 106.354 105.706 106.452 105.721C107.712 105.914 108.97 105.407 109.888 104.552C110.569 103.917 111.081 103.094 111.335 102.197C111.66 101.048 111.516 99.8801 110.782 98.9123C110.38 98.3817 109.828 98.0856 109.231 97.823C108.324 97.4232 107.376 97.2799 106.391 97.2939C105.342 97.3095 104.301 97.2549 103.253 97.3593C102.606 97.4139 101.952 97.4692 101.332 97.6632C101.407 97.6391 101.796 97.8674 101.87 97.9134C102.028 98.0123 102.105 98.0607 102.098 98.2734C102.089 98.5765 101.777 98.864 101.622 99.1095C101.367 99.5108 101.163 99.9565 101.117 100.429C101.036 101.284 101.369 102.604 100.004 102.673C100.073 102.67 100.869 103.273 100.958 103.345C101.2 103.542 101.873 103.94 102.148 104.09C103.695 104.943 104.551 105.379 106.158 105.672Z"
                        fill="white"
                      />
                      <path
                        d="M105.221 105.233C105.318 105.251 105.416 105.267 105.514 105.282C106.774 105.474 108.032 104.968 108.95 104.113C109.632 103.478 110.143 102.654 110.397 101.757C110.722 100.609 110.579 99.4399 109.845 98.4729C109.443 97.9422 108.891 97.6461 108.294 97.3835C107.386 96.9838 106.439 96.8404 105.454 96.8544C104.405 96.87 103.363 96.8155 102.316 96.9199C101.668 96.9744 101.014 97.0298 100.394 97.2238C100.469 97.1996 100.859 97.4279 100.933 97.4739C101.091 97.5729 101.167 97.6212 101.161 97.8339C101.152 98.137 100.839 98.4246 100.684 98.67C100.429 99.0713 100.225 99.5171 100.18 99.99C100.099 100.844 100.432 102.165 99.0664 102.233C99.1358 102.23 99.9313 102.833 100.02 102.905C100.263 103.102 100.936 103.5 101.21 103.651C102.758 104.503 103.613 104.94 105.221 105.233Z"
                        fill="#EA584A"
                      />
                      <path
                        d="M104.524 102.32C103.691 102.394 102.847 102.357 102.024 102.211C101.475 102.113 100.916 102.079 100.682 101.484C100.608 101.296 100.577 101.094 100.55 100.894C100.439 100.092 100.628 99.2014 101.22 98.6162C101.471 98.3669 101.809 98.1752 102.163 98.1993C102.297 98.2087 102.427 98.2476 102.555 98.2874C102.893 98.391 103.231 98.4939 103.569 98.5975C103.948 98.7128 104.327 98.8289 104.693 98.9817C104.983 99.1032 105.269 99.2513 105.494 99.4718C105.757 99.7305 105.88 100.027 105.828 100.386C105.771 100.778 105.827 101.16 105.674 101.54C105.554 101.834 105.334 102.096 105.039 102.216C104.876 102.283 104.699 102.304 104.524 102.32Z"
                        fill="#CF3A43"
                      />
                      <path
                        d="M105.489 98.8801C104.906 99.957 104.588 101.472 105.13 102.616C105.238 102.842 105.573 102.645 105.467 102.419C104.992 101.417 105.318 100.016 105.826 99.0773C105.945 98.856 105.608 98.6588 105.489 98.8801Z"
                        fill="white"
                      />
                      <path
                        d="M104.164 98.4667C103.754 99.0979 103.514 99.9044 103.4 100.644C103.281 101.408 103.359 102.144 103.69 102.848C103.796 103.074 104.132 102.877 104.026 102.651C103.704 101.965 103.671 101.228 103.822 100.492C103.951 99.8685 104.153 99.2 104.501 98.6639C104.638 98.4527 104.301 98.2571 104.164 98.4667Z"
                        fill="white"
                      />
                      <path
                        d="M102.921 98.0928C102.469 98.7427 102.187 99.5921 102.043 100.367C101.899 101.15 101.958 101.911 102.273 102.644C102.371 102.874 102.707 102.675 102.61 102.448C102.303 101.732 102.296 100.964 102.473 100.215C102.629 99.5508 102.866 98.8518 103.256 98.2892C103.401 98.0827 103.062 97.8879 102.921 98.0928Z"
                        fill="white"
                      />
                      <path
                        d="M65.8027 93.9487C67.5996 95.8422 70.2272 96.7149 72.688 97.3562C78.4309 98.8523 84.2026 100.322 90.0031 101.577C94.2133 102.487 91.4151 101.827 93.0873 102.233L95.2309 94.9017C95.2309 94.9017 90.6545 93.1983 86.6844 91.8198C81.8485 90.1406 76.9605 88.5362 72.1168 86.8242C70.5934 86.2858 68.6017 85.7738 66.9895 86.1518C66.0778 86.3653 65.2238 86.917 64.7656 87.7336C63.649 89.7237 64.2318 92.2406 65.7256 93.8669C65.7513 93.8949 65.777 93.9222 65.8027 93.9487Z"
                        fill="#2E5268"
                      />
                      <path
                        d="M95.504 94.4566L93.4079 102.762L90.1328 102.056L92.4113 93.248L95.504 94.4566Z"
                        fill="#456A7C"
                      />
                      <path
                        d="M6.66797 90.0703H37.8369V90.2519C37.8369 91.6724 36.686 92.8233 35.2655 92.8233H9.23941C7.81888 92.8233 6.66797 91.6724 6.66797 90.2519V90.0703Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M7.9575 131.821C7.29282 131.821 6.79645 131.209 6.93282 130.559L14.8497 92.8223H18.6679L8.97205 131.032C8.85438 131.495 8.43672 131.821 7.9575 131.821Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M36.7886 131.821C37.4532 131.821 37.9496 131.209 37.8132 130.559L29.8963 92.8223H26.0781L35.774 131.032C35.8917 131.495 36.3093 131.821 36.7886 131.821Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M28.0617 133.591C28.7264 133.591 29.2227 132.952 29.0864 132.272L25.2518 92.8223H21.4336L27.0471 132.766C27.1648 133.252 27.5825 133.591 28.0617 133.591Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M34.4057 115.125H10.168V116.658H34.4057V115.125Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M14.8498 92.8223L14.1875 95.9781H17.867L18.668 92.8223H14.8498Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M29.8963 92.8223L30.5579 95.9781H26.8784L26.0781 92.8223H29.8963Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M25.2518 92.8223L25.5588 95.9781H21.877L21.4336 92.8223H25.2518Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M21.4398 67.4121H19.918V89.4431H21.4398V67.4121Z"
                        fill="#061F34"
                      />
                      <path
                        d="M32.8135 68.7185H8.54297L9.0105 53.9023H32.3459L32.8135 68.7185Z"
                        fill="#EDDCD1"
                      />
                      <path
                        d="M28.9064 90.1066H12.4492C12.4492 88.7757 13.5277 87.6973 14.8586 87.6973H26.4971C27.828 87.6973 28.9064 88.7757 28.9064 90.1066Z"
                        fill="#061F34"
                      />
                      <path
                        d="M20.679 77.8594C22.0847 77.8594 23.2434 78.9635 23.3096 80.3685L23.6579 87.6971H17.6992L18.0475 80.3685C18.1145 78.9643 19.2725 77.8594 20.679 77.8594Z"
                        fill="#061F34"
                      />
                      <path
                        d="M15.627 77.1037C16.1891 77.1037 16.6447 76.6481 16.6447 76.086C16.6447 75.524 16.1891 75.0684 15.627 75.0684C15.065 75.0684 14.6094 75.524 14.6094 76.086C14.6094 76.6481 15.065 77.1037 15.627 77.1037Z"
                        fill="#061F34"
                      />
                      <path
                        d="M15.7455 68.7188H15.5117V75.2027H15.7455V68.7188Z"
                        fill="#061F34"
                      />
                      <path
                        opacity="0.5"
                        d="M32.3459 53.9023H30.549C29.7893 61.5154 23.0186 67.4725 14.7768 67.4725C12.5926 67.4725 10.5121 67.0541 8.61933 66.2975L8.54297 68.7185H32.8135L32.3459 53.9023Z"
                        fill="#E2D3C9"
                      />
                      <path
                        d="M31.9669 90.089H28.4448C27.498 90.089 26.7305 89.3214 26.7305 88.3747V80.1328H33.6812V88.3747C33.6812 89.3214 32.9136 90.089 31.9669 90.089Z"
                        fill="#FFC73C"
                      />
                      <path
                        d="M34.1664 82.3848C32.4996 82.3848 31.1484 83.7554 31.1484 85.4471C31.1484 87.138 32.4996 88.5095 34.1664 88.5095C35.8331 88.5095 37.1843 87.1388 37.1843 85.4471C37.1843 83.7562 35.8331 82.3848 34.1664 82.3848ZM34.1664 87.4178C33.0942 87.4178 32.2245 86.5357 32.2245 85.4479C32.2245 84.3601 33.0942 83.478 34.1664 83.478C35.2386 83.478 36.1082 84.3601 36.1082 85.4479C36.1082 86.5357 35.2394 87.4178 34.1664 87.4178Z"
                        fill="#FFC73C"
                      />
                      <path
                        opacity="0.2"
                        d="M27.7662 86.3093C27.5597 86.3093 27.3906 86.1402 27.3906 85.9337V81.0885C27.3906 80.882 27.5597 80.7129 27.7662 80.7129C27.9727 80.7129 28.1418 80.882 28.1418 81.0885V85.9337C28.1418 86.1402 27.9727 86.3093 27.7662 86.3093Z"
                        fill="white"
                      />
                      <path
                        d="M32.0728 80.1328V88.3287C32.0728 89.3012 31.285 90.089 30.3125 90.089H31.9177C32.8902 90.089 33.678 89.3012 33.678 88.3287V80.1328H32.0728Z"
                        fill="#FFC73C"
                      />
                      <path
                        d="M45.026 61.5664H65.2617V35.0884H45.026V61.5664Z"
                        fill="white"
                      />
                      <path
                        d="M46.3496 60.2207H63.9414V36.4325H46.3496V60.2207Z"
                        fill="white"
                      />
                      <path
                        d="M63.9441 36.4316V60.2198H46.3516L63.9441 36.4316Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M140.238 93.418H114.227V98.2476H140.238V93.418Z"
                        fill="#FFC73C"
                      />
                      <path
                        d="M123.92 94.3496H115.641V97.2476H123.92V94.3496Z"
                        fill="#FFF9E1"
                      />
                      <path
                        d="M139.014 95.7982C139.014 96.5984 138.365 97.2468 137.566 97.2468C136.765 97.2468 136.117 96.5984 136.117 95.7982C136.117 94.9979 136.766 94.3496 137.566 94.3496C138.365 94.3488 139.014 94.9979 139.014 95.7982Z"
                        fill="#FFFCDB"
                      />
                      <path
                        d="M138.755 95.7993C138.755 96.4569 138.222 96.9891 137.565 96.9891C136.907 96.9891 136.375 96.4561 136.375 95.7993C136.375 95.1416 136.908 94.6094 137.565 94.6094C138.222 94.6086 138.755 95.1416 138.755 95.7993Z"
                        fill="#324751"
                      />
                      <path
                        d="M116.833 94.9023H116.496V96.8083H116.833V94.9023Z"
                        fill="#777068"
                      />
                      <path
                        d="M117.809 94.9023H117.473V96.8083H117.809V94.9023Z"
                        fill="#777068"
                      />
                      <path
                        d="M118.786 94.9023H118.449V96.8083H118.786V94.9023Z"
                        fill="#777068"
                      />
                      <path
                        d="M141.378 88.5879H115.367V93.4175H141.378V88.5879Z"
                        fill="#3DA0A5"
                      />
                      <path
                        d="M125.061 89.5195H116.781V92.4175H125.061V89.5195Z"
                        fill="#FFF9E1"
                      />
                      <path
                        d="M140.159 90.9681C140.159 91.7684 139.51 92.4167 138.71 92.4167C137.91 92.4167 137.262 91.7684 137.262 90.9681C137.262 90.1678 137.911 89.5195 138.71 89.5195C139.51 89.5188 140.159 90.1678 140.159 90.9681Z"
                        fill="#79D2F3"
                      />
                      <path
                        d="M139.895 90.9692C139.895 91.6268 139.362 92.1591 138.706 92.1591C138.048 92.1591 137.516 91.6261 137.516 90.9692C137.516 90.3115 138.049 89.7793 138.706 89.7793C139.362 89.7785 139.895 90.3115 139.895 90.9692Z"
                        fill="#324751"
                      />
                      <path
                        d="M117.973 90.0723H117.637V91.9783H117.973V90.0723Z"
                        fill="#777068"
                      />
                      <path
                        d="M118.95 90.0723H118.613V91.9783H118.95V90.0723Z"
                        fill="#777068"
                      />
                      <path
                        d="M119.926 90.0723H119.59V91.9783H119.926V90.0723Z"
                        fill="#777068"
                      />
                      <path
                        d="M139.997 88.5731H116.602V86.0204L119.525 85.4687L116.602 85.1235V79.7422H135.431L140.938 80.6843L140.591 83.3297L137.831 83.6056L140.591 84.158L139.997 88.5731Z"
                        fill="#F3F7F8"
                      />
                      <path
                        d="M118.883 82.3617C120.082 82.297 121.281 82.2666 122.48 82.2417C123.68 82.216 124.879 82.2183 126.078 82.2051C127.277 82.2175 128.477 82.216 129.676 82.2409L131.475 82.2846C132.075 82.3103 132.674 82.3259 133.274 82.3617C132.674 82.3975 132.075 82.4124 131.475 82.4388L129.676 82.4825C128.477 82.5074 127.277 82.5059 126.078 82.5183C124.879 82.5051 123.68 82.5074 122.48 82.4817C121.281 82.4575 120.082 82.4272 118.883 82.3617Z"
                        fill="#D1D1D3"
                      />
                      <path
                        d="M122.824 86.3051C124.023 86.2404 125.223 86.21 126.422 86.1851C127.621 86.1593 128.82 86.1617 130.02 86.1484C131.219 86.1609 132.418 86.1593 133.617 86.1843L135.416 86.2279C136.016 86.2536 136.616 86.2692 137.216 86.3051C136.616 86.3409 136.016 86.3557 135.416 86.3822L133.617 86.4258C132.418 86.4508 131.219 86.45 130.02 86.4617C128.82 86.4484 127.621 86.4508 126.422 86.4251C125.223 86.4001 124.023 86.3697 122.824 86.3051Z"
                        fill="#D1D1D3"
                      />
                      <path
                        d="M116.602 79.7422H139.691L140.938 80.6843L116.602 79.7422Z"
                        fill="#D1D1D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="landing__marketplace--container--wrap">
                <div className="marketplace">
                  <div className="marketplace__top">
                    <div className="marketplace__top__before">
                      <h1>Projects</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                    </div>
                    <div className="marketplace__top__after">
                      <Link to="/" className="see">
                        See more
                      </Link>
                    </div>
                  </div>
                  <div className="marketplace__bottom">
                    <div className="marketplace__bottom-wrapper">
                      <List />
                      <List />
                      <List />
                      <List />
                      {/* <List/> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="landing__hotdeals">
            <div className="landing__hotdeals--container">
              <div className="landing__hotdeals--container--header">
                <div className="after">
                  <h1>Facilisis egestas sollicitudin.</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vitae egestas purus, netus a, et, varius vitae. Magna
                    diam curabitur pellentesque ipsum accumsan. Ullamcorper in
                    suspendisse leo, est. Vitae fringilla vulputate et dolor.
                    Rutrum adipiscing enim, pellentesque ac viverra purus
                    dictum.
                  </p>
                </div>
                <div className="before">
                  <span>
                    <svg
                      width="202"
                      height="136"
                      viewBox="0 0 202 136"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M177.285 117.083C176.084 117.083 174.89 117.031 173.721 116.924L173.756 116.536C181.837 117.271 192.427 115.45 197.871 109.729C201.07 106.366 202.196 101.509 201.039 96.0541C200.15 91.8619 198.359 87.7608 195.859 84.1951C194.932 82.8727 193.764 81.6743 192.635 80.5156C191.023 78.8605 189.355 77.1493 188.335 75.029C186.966 72.1818 186.905 69.2223 188.15 65.983C189.235 63.1615 191.182 60.4692 192.9 58.0934C198.046 50.9767 195.128 41.6221 190.238 35.9416C187.693 32.9844 184.481 30.9078 181.374 28.8997C177.393 26.3267 173.276 23.6657 170.491 19.1228C170.074 18.4418 169.679 17.7272 169.297 17.0368C168.267 15.1706 167.2 13.2404 165.6 11.8301C160.922 7.70562 153.863 8.72718 147.634 9.62796C146.558 9.78381 145.541 9.9303 144.565 10.0464C143.013 10.2303 141.437 10.4274 139.912 10.6191C134.018 11.3586 127.924 12.1223 121.875 12.2547C116.406 12.374 110.652 12.2532 105.623 10.57C102.834 9.63653 100.279 8.08822 97.8083 6.59133C95.9257 5.45054 93.9784 4.2708 91.9517 3.37936C89.0436 2.10066 85.5963 0.804025 82.089 0.896753C74.9981 1.08143 66.5069 5.72093 62.7588 11.4584C61.4349 13.4851 60.3564 15.8158 59.3131 18.0701C56.9403 23.1982 54.4865 28.5016 48.9166 30.9421C45.0236 32.6478 40.6561 32.6961 36.4319 32.7429C35.9418 32.7483 35.4524 32.7538 34.9654 32.7616C31.1503 32.8239 18.4731 33.6569 15.5253 41.771C14.2934 45.1629 15.2417 48.9772 16.063 51.5518C16.1464 51.8128 16.2305 52.0762 16.3155 52.3412C17.5591 56.2264 18.9679 60.6298 19.324 64.8867C19.7347 69.7896 18.689 73.7691 16.1284 77.0519C15.3414 78.061 14.3939 78.9431 13.4767 79.7963C12.971 80.267 12.4482 80.7532 11.9611 81.2535C6.38502 86.9777 4.43462 93.5278 6.3219 100.196C8.1632 106.702 13.144 112.358 19.0108 114.604C23.3854 116.28 28.4308 116.617 33.6025 115.58L33.6789 115.962C28.4347 117.014 23.3144 116.67 18.8713 114.968C12.8939 112.679 7.82113 106.922 5.94709 100.302C4.94111 96.7468 4.98864 93.2271 6.08891 89.839C7.09645 86.7377 8.97827 83.7571 11.6822 80.9816C12.1762 80.4743 12.7022 79.9849 13.2118 79.5111C14.1173 78.668 15.0539 77.7969 15.8214 76.8127C21.4342 69.6158 18.5175 60.502 15.9445 52.4604C15.8596 52.1954 15.7754 51.9321 15.6921 51.671C14.8536 49.0427 13.8866 45.1427 15.1599 41.6393C16.3529 38.3549 19.1877 35.8777 23.5848 34.2756C27.8776 32.7117 32.5537 32.4125 34.9592 32.3735C35.447 32.3657 35.9371 32.3603 36.428 32.3548C40.6132 32.3088 44.9403 32.2605 48.7608 30.5868C54.1951 28.2055 56.6177 22.9706 58.9601 17.908C60.0089 15.6412 61.0936 13.2973 62.4331 11.2464C64.3102 8.37263 67.3687 5.69366 71.0458 3.70118C74.6786 1.73286 78.5965 0.599089 82.0789 0.508699C85.6664 0.414413 89.1612 1.72741 92.1083 3.02404C94.1592 3.9256 96.1166 5.11236 98.0101 6.25938C100.463 7.74536 102.999 9.28199 105.746 10.2023C110.718 11.8667 116.432 11.9859 121.866 11.8675C127.895 11.7358 133.98 10.9729 139.864 10.2342C141.39 10.0425 142.967 9.84537 144.52 9.66147C145.491 9.54614 146.505 9.39965 147.579 9.24459C150.588 8.809 154 8.31575 157.191 8.46692C160.876 8.64069 163.71 9.64588 165.859 11.5402C167.509 12.9958 168.592 14.9555 169.64 16.8506C170.019 17.5379 170.412 18.2485 170.825 18.9218C173.564 23.3891 177.642 26.0252 181.587 28.5748C184.717 30.5985 187.954 32.6899 190.535 35.6899C193.274 38.8715 195.129 42.7653 195.758 46.6528C196.464 51.0134 195.585 55.049 193.217 58.324C189.703 63.1841 185.72 68.6916 188.688 74.8623C189.68 76.9249 191.325 78.6127 192.916 80.246C194.055 81.4156 195.234 82.6257 196.179 83.9738C198.708 87.5824 200.522 91.7325 201.421 95.9762C201.98 98.6131 202.026 101.114 201.556 103.412C201.035 105.958 199.891 108.175 198.154 110.001C195.543 112.744 191.589 114.817 186.719 115.994C183.737 116.711 180.484 117.083 177.285 117.083Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M144.37 116.773C148.125 116.857 151.879 116.96 155.633 117.082C158.655 117.18 161.678 117.291 164.688 117.579C173.454 118.419 182.586 120.461 190.735 115.894C200.103 110.643 202.188 99.9164 197.192 90.8377C194.271 85.5288 188.286 79.9745 188.646 73.5132C188.962 67.8194 193.572 64.0113 195.113 58.7952C196.598 53.7731 197.412 48.5913 194.72 43.7873C192.446 39.7291 188.598 36.7681 184.513 34.5426C178.767 31.4117 173.058 28.9852 169.987 22.8355C167.082 17.0171 166.361 10.4093 160.195 6.83028C155.104 3.87546 148.996 3.05571 143.124 3.47026C134.155 4.10377 125.806 7.42405 116.778 7.74664C106.853 8.10119 98.3381 1.19492 88.2573 0.598039C81.2887 0.18505 74.8562 2.37155 69.7928 7.15521C64.9717 11.709 63.8823 18.3246 59.0293 22.8348C53.5444 27.9325 45.47 28.7304 38.0331 29.6C31.5601 30.3566 25.2328 32.2088 20.7297 37.3042C16.9348 41.5985 17.2372 45.8429 17.7585 51.0793C18.3258 56.7747 21.2775 63.8492 20.0097 69.5025C18.8821 74.5301 13.7104 77.7701 11.3486 82.1501C1.44853 100.51 19.2382 117.426 36.7942 119.398C47.7758 120.631 59.0106 119.484 69.9992 118.867C82.2183 118.213 94.4412 117.296 106.659 116.747C119.2 116.16 131.824 116.491 144.37 116.773Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M129.16 47.6738H102.453V79.2083H129.16V47.6738Z"
                        fill="white"
                      />
                      <path
                        d="M160.551 47.6738H133.844V79.2083H160.551V47.6738Z"
                        fill="white"
                      />
                      <path
                        d="M129.16 11.4238H102.453V42.9583H129.16V11.4238Z"
                        fill="white"
                      />
                      <path
                        d="M160.551 11.4238H133.844V42.9583H160.551V11.4238Z"
                        fill="white"
                      />
                      <path
                        d="M97.8301 135.504C151.86 135.504 195.66 133.704 195.66 131.483C195.66 129.261 151.86 127.461 97.8301 127.461C43.8 127.461 0 129.261 0 131.483C0 133.704 43.8 135.504 97.8301 135.504Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M175.668 101.237C176.148 101.618 176.67 102.057 177.19 102.272C177.539 102.416 178.524 102.309 178.663 102.754C178.311 101.622 178.567 100.811 178.694 99.6962C178.825 98.539 178.724 97.2556 178.665 96.0915C178.537 93.5722 178.113 91.0608 177.293 88.6717C176.097 85.1847 174.028 81.9548 171.144 79.6584C169.082 78.0166 167.568 78.8208 166.285 80.8615C165.627 81.9096 164.254 81.6789 163.77 82.8556C163.187 84.2722 163.356 86.0512 163.781 87.4818C164.277 89.1533 165.207 90.6642 166.243 92.066C167.927 94.3429 169.911 96.3782 171.997 98.2866C173.003 99.2076 174.162 100.129 175.302 100.955C175.42 101.043 175.542 101.138 175.668 101.237Z"
                        fill="#438289"
                      />
                      <path
                        d="M166.469 81.5703C166.762 81.9701 167.052 82.3714 167.341 82.7742L168.214 83.9781L169.943 86.3984C171.087 88.0184 172.181 89.6805 173.146 91.4174C174.11 93.1551 174.979 94.941 175.801 96.7457L176.411 98.1023L177.007 99.4644C177.204 99.9195 177.397 100.376 177.588 100.834C177.782 101.29 177.972 101.748 178.161 102.206C177.734 101.31 177.329 100.407 176.903 99.512L176.276 98.1639L175.637 96.8221C175.204 95.9314 174.78 95.0361 174.328 94.1556C173.885 93.2704 173.422 92.3961 172.941 91.5319C171.985 89.7997 170.903 88.1431 169.795 86.5005L168.121 84.0443C167.567 83.2207 167.012 82.4002 166.469 81.5703Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M181.755 104.201C181.409 104.378 181.06 104.551 180.71 104.721C180.495 104.824 178.986 105.176 178.931 105.353C179.3 104.168 178.878 103.47 178.668 102.363C178.469 101.317 178.823 99.9859 179.018 98.9504C179.457 96.6119 180.197 94.3397 181.035 92.1166C181.992 89.5778 183.265 86.8911 185.697 85.6903C187.11 84.9929 188.327 86.4204 189.015 87.5176C189.353 88.0552 189.901 88.0934 190.396 88.3926C191.048 88.7862 191.135 89.1984 191.327 89.9542C191.736 91.5649 191.716 93.2854 191.26 94.8836C190.537 97.4176 188.771 99.5535 186.696 101.179C185.462 102.146 184.113 102.953 182.731 103.69C182.408 103.863 182.083 104.034 181.755 104.201Z"
                        fill="#438289"
                      />
                      <path
                        d="M188.869 88.0977C188.43 88.7764 187.98 89.4465 187.532 90.1182L186.174 92.1231C185.727 92.7948 185.273 93.4611 184.848 94.146C184.63 94.485 184.425 94.8309 184.215 95.1753C184.111 95.3476 184.014 95.5237 183.912 95.6974C183.813 95.8728 183.709 96.045 183.614 96.2226C183.222 96.9263 182.845 97.6385 182.483 98.3593C182.115 99.0761 181.768 99.8047 181.415 100.53L180.894 101.623L180.379 102.718C180.028 103.445 179.696 104.182 179.344 104.909C179.955 103.413 180.578 101.923 181.251 100.453C181.413 100.084 181.589 99.719 181.76 99.3528C181.929 98.9858 182.109 98.6234 182.286 98.2603C182.461 97.8956 182.65 97.538 182.835 97.1787C183.018 96.818 183.218 96.4657 183.411 96.1096C183.506 95.9312 183.612 95.759 183.713 95.5829C183.816 95.4083 183.915 95.2315 184.02 95.0592C184.233 94.7148 184.438 94.3657 184.662 94.0283C184.773 93.8592 184.881 93.6878 184.993 93.5203L185.332 93.0177C185.556 92.6811 185.793 92.353 186.023 92.021C186.957 90.701 187.914 89.4013 188.869 88.0977Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M185.133 82.1359C185.125 82.1367 185.117 82.1374 185.109 82.1382C183.492 82.2956 181.982 81.2639 180.312 81.6091C181.343 81.3956 180.581 78.56 180.615 77.96C180.7 76.4133 181.371 74.5112 181.747 72.9901C182.57 69.6582 184.36 66.5826 186.797 64.1732C188.759 62.2345 192.57 58.9353 195.533 60.1571C196.989 60.7571 197.805 61.9431 198.496 63.2701C199.349 64.9065 202.195 65.007 201.759 67.4046C201.359 69.6028 197.112 72.4696 195.507 74.0483C193.422 76.0985 191.334 78.1525 189.073 80.0055C187.971 80.907 186.606 81.9824 185.133 82.1359Z"
                        fill="#438289"
                      />
                      <path
                        d="M198.17 63.9277C197.396 64.5909 196.612 65.2423 195.829 65.8945L193.469 67.8387C191.902 69.14 190.364 70.4732 188.94 71.9249C187.515 73.3751 186.183 74.9171 184.872 76.4748L183.895 77.6491L182.93 78.8351C182.279 79.619 181.65 80.4208 181 81.207C181.303 80.7972 181.609 80.3889 181.916 79.9821C182.222 79.5746 182.528 79.167 182.84 78.7642L183.779 77.5572L184.732 76.361C186.013 74.7738 187.344 73.2231 188.773 71.7613C189.497 71.0405 190.232 70.3298 191.004 69.6605C191.77 68.9849 192.559 68.3374 193.355 67.7C194.154 67.0657 194.955 66.4353 195.757 65.8064L198.17 63.9277Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M176.519 82.1823C176.656 82.2789 176.79 82.3786 176.921 82.4815C177.624 83.0371 178.038 83.3947 178.919 83.7298C179.549 83.9698 181.115 84.4381 181.404 85.1277C180.86 83.8295 181.021 82.3771 181.106 80.9978C181.446 75.4942 179.106 70.1432 175.586 66.0141C172.929 62.8972 169.509 59.2668 165.629 57.745C165.143 57.5549 164.617 57.4053 164.105 57.5081C163.213 57.6881 162.88 58.4463 162.497 59.1733C161.708 60.6741 159.547 60.9944 159.094 62.5489C158.904 63.2019 158.979 63.9032 159.124 64.5679C159.637 66.9118 160.565 68.9822 162.068 70.8757C164.702 74.1968 167.955 77.0191 171.485 79.3521C173.047 80.383 174.989 81.1061 176.519 82.1823Z"
                        fill="#438289"
                      />
                      <path
                        d="M162.414 60.7969L165.034 63.4977C165.905 64.4 166.775 65.3047 167.64 66.2125C169.367 68.0328 171.035 69.9177 172.56 71.9172C173.313 72.9224 174.046 73.9439 174.748 74.9842C175.099 75.5047 175.455 76.0221 175.794 76.5505C176.135 77.0772 176.483 77.6001 176.813 78.1338L177.81 79.7305L178.79 81.3372C179.116 81.8733 179.435 82.4133 179.754 82.9533C180.074 83.4926 180.392 84.0333 180.708 84.5749C180.029 83.5198 179.374 82.45 178.693 81.3972L177.685 79.8092L176.662 78.2312C175.97 77.1855 175.289 76.1336 174.574 75.105C173.867 74.071 173.13 73.0572 172.375 72.059C172.189 71.8073 171.992 71.5642 171.801 71.3164L171.512 70.9463C171.416 70.8224 171.319 70.6993 171.219 70.5793C170.82 70.0961 170.428 69.6083 170.015 69.1377C169.205 68.1824 168.351 67.2652 167.51 66.3356L164.952 63.5771C164.102 62.6522 163.253 61.7296 162.414 60.7969Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M178.76 111.195C178.316 107.672 177.856 104.03 178.479 100.423C178.645 99.4609 178.89 98.5064 179.126 97.583C179.478 96.2061 179.843 94.7825 179.933 93.3651C179.99 92.4783 179.943 91.5526 179.897 90.6573C179.813 89.038 179.728 87.3643 180.231 85.7622C180.281 85.6024 180.337 85.4427 180.391 85.2884C180.6 84.6908 180.797 84.1266 180.669 83.6162C180.612 83.3902 180.487 83.165 180.355 82.9258C180.296 82.8183 180.234 82.7076 180.176 82.5923C179.404 81.0533 179.462 79.1255 180.353 76.6975C180.514 76.2572 180.692 75.8154 180.865 75.3891C181.407 74.045 181.918 72.7756 182.016 71.4182C182.189 68.9863 180.972 66.633 179.818 64.6187L180.629 64.1543C181.852 66.2886 183.14 68.7915 182.947 71.4852C182.84 72.9899 182.277 74.3878 181.731 75.7398C181.562 76.1598 181.387 76.5946 181.23 77.0209C180.433 79.1933 180.362 80.8788 181.011 82.1746C181.06 82.272 181.114 82.3694 181.172 82.4731C181.327 82.7544 181.489 83.0443 181.575 83.3902C181.771 84.1726 181.507 84.93 181.273 85.5985C181.219 85.7528 181.168 85.8985 181.123 86.0443C180.669 87.4858 180.747 89.0038 180.83 90.6113C180.877 91.5331 180.926 92.4861 180.866 93.4259C180.77 94.9305 180.395 96.3978 180.032 97.816C179.8 98.7215 179.56 99.6581 179.4 100.583C178.801 104.052 179.252 107.625 179.688 111.079L178.76 111.195Z"
                        fill="#438289"
                      />
                      <path
                        d="M185.669 68.2079C184.493 69.0339 183.285 69.9027 182.583 71.0575C182.885 69.6697 182.517 68.1417 182.485 66.7344C182.447 65.105 182.454 63.4663 182.741 61.8572C183.022 60.2816 183.562 58.766 184.1 57.259C185.076 54.5239 186.072 51.7507 187.755 49.3834C188.391 48.4888 189.212 47.5865 190.26 47.1821C191.648 46.6468 191.998 47.2725 192.684 48.4203C193.047 49.0281 193.53 48.9252 194.074 49.2018C194.749 49.5447 194.728 49.8712 194.846 50.6364C195.12 52.4044 194.917 54.199 194.392 55.9024C193.77 57.9253 192.736 59.7962 191.632 61.6032C190.43 63.5715 189.092 65.5289 187.298 67.0095C186.802 67.4162 186.24 67.8074 185.669 68.2079Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M192.545 49.1406C192.097 50.011 191.637 50.8736 191.179 51.7386L189.791 54.3232C188.875 56.05 187.978 57.7853 187.202 59.5783C187.009 60.0264 186.809 60.4721 186.626 60.9248L186.347 61.602C186.253 61.8272 186.167 62.0563 186.076 62.2822C185.895 62.7358 185.713 63.1893 185.541 63.6467L185.278 64.3308C185.189 64.5584 185.102 64.7867 185.017 65.0158L184.501 66.3888L183.996 67.7656C183.65 68.6805 183.324 69.6031 182.977 70.5179C183.125 70.0519 183.275 69.5859 183.428 69.1215C183.58 68.6563 183.731 68.1911 183.887 67.7275L184.362 66.3389L184.848 64.9542C185.504 63.1106 186.203 61.2802 186.988 59.4833C187.772 57.6864 188.678 55.9448 189.633 54.2368L191.08 51.6825L191.811 50.4108C192.054 49.9876 192.298 49.5637 192.545 49.1406Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M175.635 70.049C176.44 70.2454 177.239 70.4924 177.886 70.9817C179.034 71.849 179.761 73.6147 180.61 74.7758C180.86 75.1178 181.114 75.4646 181.44 75.7366C181.508 73.9178 181.364 72.4038 180.743 70.695C180.154 69.0718 179.367 67.5305 178.583 65.9955C176.445 61.8134 171.373 59.6931 166.83 60.8401C163.422 61.6996 166.012 64.9614 167.631 66.3298C168.85 67.3591 170.285 68.0986 171.735 68.7633C172.521 69.1233 173.319 69.4653 174.153 69.6937C174.627 69.823 175.132 69.9259 175.635 70.049Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M180.781 74.0645C180.383 73.3554 180.074 72.5988 179.796 71.8343C179.66 71.451 179.534 71.0637 179.412 70.6764C179.296 70.2891 179.14 69.9221 178.95 69.5676C178.569 68.8624 178.079 68.2164 177.558 67.6C177.04 66.9868 176.448 66.4359 175.799 65.9652C175.149 65.4946 174.447 65.0948 173.704 64.7847C173.334 64.6265 172.956 64.4956 172.569 64.3663C172.184 64.2369 171.8 64.1044 171.417 63.9712L169.115 63.174C168.351 62.9005 167.583 62.634 166.82 62.3535C167.6 62.5834 168.374 62.8281 169.151 63.0649L171.474 63.7998C171.861 63.9221 172.248 64.0452 172.634 64.1707C173.019 64.2938 173.411 64.4231 173.79 64.579C174.549 64.8891 175.269 65.2959 175.936 65.7743C176.598 66.2598 177.203 66.8247 177.727 67.4567C177.987 67.7722 178.238 68.0941 178.473 68.4299C178.591 68.5974 178.703 68.7689 178.81 68.9442C178.916 69.1203 179.016 69.2995 179.109 69.4834C179.293 69.8504 179.445 70.2377 179.552 70.632C179.663 71.0224 179.78 71.4104 179.903 71.7962C180.024 72.1827 180.156 72.566 180.3 72.9447C180.447 73.325 180.606 73.6982 180.781 74.0645Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M187.971 96.301C187.473 96.2714 186.974 96.2605 186.475 96.2675C184.453 96.2971 182.806 96.7678 180.912 97.3499C180.506 97.4745 180.096 97.6 179.672 97.6234C180.705 96.1249 181.727 94.9982 183.245 94C185.99 92.1961 188.977 90.9649 192.319 91.1324C194.495 91.2415 196.647 91.9397 198.457 93.1561C199.743 94.0202 202.05 95.8888 199.836 97.0584C198.432 97.8002 196.849 98.126 195.27 97.868C194.346 97.7169 193.463 97.3834 192.566 97.1137C191.074 96.6649 189.528 96.3937 187.971 96.301Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M181.199 96.6789C181.558 96.4896 181.91 96.2862 182.253 96.0704C182.595 95.8529 182.93 95.6246 183.258 95.387C183.588 95.1516 183.913 94.9101 184.236 94.6639C184.557 94.4114 184.911 94.1916 185.278 94.0085C185.462 93.9174 185.65 93.8332 185.84 93.7553C186.031 93.6797 186.224 93.6088 186.418 93.5449C186.807 93.4163 187.202 93.308 187.598 93.2106C188.396 93.0174 189.219 92.927 190.04 92.934C190.861 92.9488 191.681 93.0532 192.475 93.2597C192.872 93.361 193.264 93.4911 193.646 93.6236C194.031 93.7537 194.414 93.8862 194.797 94.0202L197.099 94.8205C197.863 95.0955 198.63 95.3628 199.392 95.6441C198.613 95.4127 197.839 95.1672 197.063 94.9296L194.741 94.1916C194.354 94.0693 193.968 93.9454 193.582 93.8192C193.195 93.6914 192.814 93.5706 192.422 93.4755C191.642 93.28 190.841 93.1802 190.038 93.1685C189.235 93.1576 188.432 93.2449 187.65 93.4264C186.863 93.6088 186.086 93.834 185.357 94.1706C184.993 94.3413 184.648 94.5423 184.325 94.7831C183.995 95.0207 183.663 95.2561 183.324 95.4813C182.642 95.927 181.942 96.3478 181.199 96.6789Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M184.491 89.9789C184.125 90.2508 183.76 90.5228 183.396 90.7986C182.656 91.3597 180.291 92.3181 180.069 93.2096C180.26 92.4428 180.012 91.7898 179.884 91.0464C179.763 90.3443 179.861 89.7724 179.965 89.0578C180.16 87.7254 180.36 86.3165 180.596 85.0378C181.005 82.8233 181.753 80.6874 182.497 78.5617C183.23 76.4671 183.97 74.3593 185.082 72.4385C186.203 70.5045 187.743 69.0497 189.449 67.651C191.223 66.197 192.987 67.8738 194.194 69.225C195.084 70.2209 196.251 69.9154 197.379 70.5115C198.975 71.3554 198.04 74.0328 197.681 75.3061C197.126 77.2806 195.866 78.9957 194.567 80.5472C192.386 83.1529 189.974 85.5646 187.37 87.748C186.437 88.5326 185.464 89.2542 184.491 89.9789Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M194.029 70.002C193.393 70.9004 192.744 71.7895 192.097 72.6801L190.141 75.3396C188.845 77.117 187.588 78.9217 186.483 80.8199C185.376 82.7166 184.392 84.6849 183.434 86.6641L182.724 88.154L182.031 89.6517C181.559 90.6459 181.114 91.6527 180.645 92.6485C180.854 92.1397 181.066 91.6317 181.28 91.1244L181.601 90.3631L181.926 89.6041L182.59 88.0916L183.271 86.587C184.192 84.5867 185.173 82.6098 186.281 80.7007C186.848 79.7539 187.428 78.815 188.058 77.9095C188.68 76.9986 189.334 76.1111 189.998 75.2321C190.664 74.3555 191.335 73.4828 192.006 72.6108L194.029 70.002Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M176.753 63.8422C176.911 63.9707 177.071 64.097 177.233 64.2209C178.711 65.3469 180.387 66.2601 181.579 67.6853C180.805 66.7604 182.795 63.4596 183.077 62.5627C183.667 60.6777 184.019 58.9479 183.864 56.9468C183.398 50.9063 180.427 45.3481 177.046 40.3213C176.451 39.4369 175.815 38.5369 174.906 37.9797C173.547 37.1475 172.318 37.4717 170.983 38.2135C170.36 38.5595 169.762 38.9296 169.078 39.147C168.094 39.4595 167.028 39.3558 166.055 39.6995C164.134 40.3782 164.539 44.1964 164.778 45.7299C165.233 48.645 166.582 51.4011 168.366 53.7302C171 57.1673 173.354 61.0681 176.753 63.8422Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M169.863 39.6816L171.676 42.917C172.277 43.997 172.877 45.0778 173.473 46.1617C174.659 48.331 175.766 50.5518 176.699 52.8482L177.032 53.7155C177.144 54.0046 177.256 54.2929 177.357 54.5859L177.668 55.4609C177.719 55.6067 177.773 55.7524 177.822 55.8989L177.968 56.3399C178.16 56.9282 178.363 57.5126 178.541 58.1056C178.723 58.6971 178.91 59.2861 179.079 59.8815L179.59 61.6643L180.081 63.4527L180.32 64.3488L180.553 65.2464C180.709 65.8449 180.861 66.4433 181.012 67.0433C180.657 65.8589 180.33 64.6667 179.971 63.4838L179.449 61.7056L178.907 59.9337C178.534 58.7563 178.17 57.5758 177.767 56.4085L177.619 55.9698C177.57 55.8233 177.514 55.6791 177.463 55.5342L177.148 54.6638C177.046 54.3724 176.932 54.0856 176.82 53.7989L176.484 52.937C176.018 51.7955 175.533 50.6601 174.991 49.5513C174.73 48.9926 174.447 48.444 174.168 47.8923L173.316 46.2474L171.577 42.9731C171.001 41.8767 170.425 40.7827 169.863 39.6816Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M185.314 76.4447C184.812 76.7774 184.31 77.1094 183.809 77.4421C182.376 78.3912 181.444 79.0551 180.993 80.7974C180.368 80.0463 180.336 78.9686 179.723 78.2299C179.266 77.6782 178.355 77.3096 177.73 76.9504C175.961 75.9335 173.905 75.5501 172.144 74.5138C171.88 74.3587 171.597 74.1429 171.583 73.8366C171.567 73.4961 171.889 73.2475 172.183 73.0769C173.607 72.2517 174.474 71.8184 176.15 71.9166C177.876 72.0179 179.621 72.3312 181.339 71.9774C182.233 71.7935 183.081 71.4351 183.956 71.1756C185.195 70.8078 187.325 70.253 188.586 70.7829C189.619 71.2169 190.005 72.8922 189.259 73.7361C189.061 73.959 188.81 74.1265 188.561 74.2909C187.479 75.0094 186.396 75.727 185.314 76.4447Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M180.675 81.0781C180.656 80.4968 180.652 79.9178 180.66 79.3373C180.662 79.0474 180.673 78.7576 180.681 78.4677C180.692 78.1778 180.709 77.888 180.725 77.5981C180.746 77.3082 180.769 77.0183 180.797 76.7293C180.829 76.4394 180.863 76.1534 180.89 75.8682C180.914 75.583 180.927 75.2978 180.906 75.0126C180.889 74.7266 180.84 74.4422 180.771 74.1602C180.889 74.4259 180.97 74.7095 181.02 74.9994C181.069 75.29 181.082 75.5861 181.072 75.8791C181.067 76.1721 181.037 76.462 181.018 76.7495C180.996 77.0378 180.975 77.3254 180.958 77.6145L180.842 79.3467C180.8 79.9233 180.751 80.5015 180.675 81.0781Z"
                        fill="#438289"
                      />
                      <path
                        d="M174.786 97.5555C175.234 97.8804 175.697 98.1835 176.173 98.4601C177.474 99.2152 178.157 99.2549 178.592 100.933C179.067 100.364 179.093 99.6266 179.492 99.05C179.939 98.404 180.836 97.9677 181.535 97.6716C182.455 97.2827 183.428 97.0365 184.355 96.6664C184.917 96.4419 185.46 96.1723 185.979 95.8606C188.224 94.511 184.996 93.4653 183.758 93.4404C181.934 93.403 180.088 93.8884 178.301 93.5214C177.55 93.3671 176.837 93.0656 176.102 92.8474C175.054 92.5365 173.018 91.977 172.01 92.683C170.846 93.4988 171.874 94.9817 172.608 95.7032C173.283 96.3679 174.013 96.9944 174.786 97.5555Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M178.627 99.5743C178.555 99.0904 178.51 98.6042 178.473 98.1188C178.433 97.6333 178.405 97.1478 178.371 96.6639C178.345 96.1777 178.294 95.7 178.279 95.2052C178.273 94.959 178.285 94.7081 178.328 94.4642C178.373 94.2203 178.443 93.9818 178.547 93.7598C178.492 93.9982 178.454 94.2374 178.442 94.4774C178.426 94.7167 178.439 94.9551 178.46 95.1951C178.485 95.4343 178.514 95.6743 178.541 95.9182C178.566 96.1613 178.586 96.4052 178.604 96.6484C178.618 96.8923 178.631 97.1362 178.64 97.38C178.646 97.6239 178.654 97.8678 178.654 98.1117C178.658 98.598 178.651 99.0858 178.627 99.5743Z"
                        fill="#438289"
                      />
                      <path
                        d="M188.513 112.043H170.254L173.457 130.317H185.31L188.513 112.043Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M190.356 112.045H168.327L168.016 108.189H190.746L190.356 112.045Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M186.644 112.043H170.254L170.416 112.966H186.574C186.469 113.976 186.269 115 185.965 116.023C183.989 122.686 178.345 127.025 172.79 126.511L173.457 130.317H185.31L188.513 112.044H186.644V112.043Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M170.5 127.854H188.866V128.035C188.866 129.456 187.715 130.607 186.295 130.607H173.071C171.651 130.607 170.5 129.456 170.5 128.035V127.854Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M154.634 121.016L154.112 128.947H151.772L151.07 121.016H154.634Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M164.58 122.117L163.94 131.821H161.077L160.219 122.117H164.58Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M164.436 124.294H160.411L160.219 122.117H164.58L164.436 124.294Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M154.561 122.117L154.418 124.294H151.36L151.168 122.117H154.561Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M50.8164 121.016L51.34 128.947H53.6793L54.3814 121.016H50.8164Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M40.875 122.117L41.5155 131.821H44.3776L45.2363 122.117H40.875Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M150.28 91.4805H54.9805V121.695H150.28V91.4805Z"
                        fill="#DEBFA8"
                      />
                      <path
                        d="M54.9645 80.3066L38.2969 86.0908L40.2558 113.494L62.5978 112.504L62.5487 98.4805C62.5487 98.4805 63.6941 81.8807 54.9645 80.3066Z"
                        fill="#F9ECE1"
                      />
                      <path
                        d="M102.756 112.037H50.4453V122.119H102.756V112.037Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M38.2969 86.0895L40.7982 122.119H55.1796C55.1796 122.119 53.7855 92.6833 47.9499 89.035C42.1143 85.3867 38.2969 86.0895 38.2969 86.0895Z"
                        fill="#DEBFA8"
                      />
                      <path
                        d="M54.9834 121.697C55.0519 121.695 55.1229 121.71 55.1829 121.747L55.1719 121.753C54.8408 118.129 54.4667 114.512 54.0195 110.906L53.8441 109.555L53.6641 108.204C53.5402 107.305 53.4086 106.407 53.2675 105.511C52.9901 103.717 52.6831 101.928 52.313 100.155C51.9522 98.3799 51.5306 96.6173 50.9922 94.896C50.8605 94.465 50.714 94.0388 50.5636 93.6149C50.4062 93.1941 50.2472 92.7733 50.0641 92.365C49.8833 91.9559 49.6901 91.5523 49.4711 91.1666C49.2545 90.7801 49.0168 90.4053 48.7433 90.0648C48.4691 89.7235 48.162 89.4227 47.7989 89.1959C47.4148 88.9598 47.0345 88.7159 46.641 88.4962C45.8594 88.0466 45.0537 87.6351 44.2207 87.2884C43.3901 86.9362 42.5337 86.6393 41.6563 86.4203C40.7789 86.2045 39.8797 86.0533 38.9688 86.0385C39.423 86.0136 39.8804 86.026 40.3355 86.0603C40.7906 86.1008 41.2433 86.1671 41.6929 86.252C41.9173 86.2949 42.141 86.3455 42.3638 86.3969C42.5844 86.4562 42.808 86.5092 43.0277 86.5746C43.2459 86.6424 43.468 86.7032 43.6838 86.778C43.8997 86.8536 44.1186 86.9237 44.3329 87.0047C45.1932 87.3227 46.0254 87.7123 46.8374 88.1393C47.2472 88.3466 47.6392 88.5842 48.0358 88.8141C48.0849 88.8406 48.1355 88.8772 48.1862 88.9107L48.3374 89.0136C48.434 89.0861 48.5252 89.1655 48.6187 89.2411L48.8774 89.4897L49.1158 89.7539C49.7236 90.4801 50.1763 91.3014 50.5605 92.1398C50.7569 92.5583 50.9259 92.9869 51.0943 93.4154C51.2556 93.8463 51.4114 94.278 51.5524 94.7144C52.1197 96.4599 52.5467 98.2404 52.9223 100.028C53.2847 101.818 53.5893 103.618 53.8504 105.422C53.9782 106.325 54.0958 107.228 54.2057 108.133L54.3639 109.49L54.5041 110.849C54.593 111.755 54.6787 112.662 54.7519 113.57C54.8236 114.478 54.8899 115.386 54.9499 116.294C55.0605 118.111 55.1525 119.93 55.1852 121.75V121.764L55.1743 121.757C55.1205 121.72 55.0519 121.7 54.9834 121.697Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M100.265 97.5861H61.7513C60.3744 97.5861 59.2578 96.4695 59.2578 95.0926V75.5013C59.2578 74.1244 60.3744 73.0078 61.7513 73.0078H100.265C101.642 73.0078 102.759 74.1244 102.759 75.5013V95.0926C102.758 96.4695 101.642 97.5861 100.265 97.5861Z"
                        fill="#EBD6C5"
                      />
                      <path
                        d="M101.538 112.791H55.564C54.8923 112.791 54.3477 112.246 54.3477 111.574L54.4817 102.759L102.755 102.416V111.574C102.755 112.246 102.211 112.791 101.538 112.791Z"
                        fill="#E5CAB6"
                      />
                      <path
                        opacity="0.3"
                        d="M81.0083 96.0095C71.0818 96.0095 62.6069 91.5944 59.2578 85.377V95.2957C59.2578 96.5604 60.2833 97.5851 61.5472 97.5851H100.469C101.733 97.5851 102.758 96.5596 102.758 95.2957V85.377C99.4089 91.5944 90.9349 96.0095 81.0083 96.0095Z"
                        fill="#E5CAB6"
                      />
                      <path
                        d="M101.711 103.565H55.5078C54.547 103.565 54.0958 102.426 54.8135 101.814L59.478 97.8372C59.6689 97.6744 59.9159 97.584 60.1722 97.584H101.711C102.288 97.584 102.756 98.0328 102.756 98.5853V102.562C102.755 103.116 102.288 103.565 101.711 103.565Z"
                        fill="#F2E0D3"
                      />
                      <path
                        opacity="0.5"
                        d="M101.538 111.166H55.564C54.9687 111.166 54.4739 110.737 54.3687 110.172L54.3477 111.573C54.3477 112.245 54.8923 112.789 55.564 112.789H101.538C102.21 112.789 102.755 112.245 102.755 111.573V109.949C102.755 110.621 102.211 111.166 101.538 111.166Z"
                        fill="#E5CAB6"
                      />
                      <path
                        d="M150.497 80.3066L167.165 86.0908L165.206 113.494L142.864 112.504L142.913 98.4805C142.913 98.4805 141.768 81.8807 150.497 80.3066Z"
                        fill="#F9ECE1"
                      />
                      <path
                        d="M102.701 122.117H155.012V112.036H102.701V122.117Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M167.168 86.0895L164.667 122.119H150.285C150.285 122.119 151.679 92.6833 157.515 89.035C163.351 85.3867 167.168 86.0895 167.168 86.0895Z"
                        fill="#DEBFA8"
                      />
                      <path
                        d="M150.476 121.695C150.407 121.698 150.339 121.717 150.284 121.757L150.273 121.765V121.751C150.306 119.93 150.399 118.112 150.509 116.294C150.569 115.386 150.635 114.478 150.707 113.57C150.78 112.662 150.866 111.756 150.954 110.849L151.095 109.49L151.253 108.133C151.363 107.228 151.48 106.324 151.608 105.422C151.869 103.617 152.174 101.818 152.536 100.028C152.912 98.2414 153.339 96.4608 153.906 94.7146C154.047 94.2782 154.203 93.8458 154.364 93.4156C154.533 92.987 154.702 92.5593 154.898 92.14C155.282 91.3016 155.735 90.4803 156.343 89.754L156.581 89.4899L156.84 89.2413C156.934 89.1649 157.025 89.0863 157.121 89.0138L157.272 88.9109C157.323 88.8774 157.374 88.8408 157.423 88.8143C157.819 88.5844 158.211 88.346 158.621 88.1395C159.432 87.7125 160.265 87.3229 161.126 87.0049C161.34 86.9239 161.559 86.8538 161.775 86.7782C161.991 86.7034 162.213 86.6434 162.431 86.5748C162.651 86.5101 162.873 86.4571 163.095 86.3971C163.318 86.3465 163.541 86.2951 163.766 86.2522C164.215 86.1673 164.668 86.1018 165.123 86.0605C165.579 86.0255 166.036 86.0138 166.49 86.0387C165.579 86.0535 164.68 86.2047 163.802 86.4205C162.924 86.6395 162.069 86.9364 161.238 87.2886C160.404 87.6353 159.599 88.0468 158.818 88.4964C158.424 88.7161 158.044 88.96 157.66 89.1961C157.297 89.4229 156.989 89.7244 156.715 90.065C156.442 90.4055 156.205 90.7795 155.987 91.1668C155.769 91.5525 155.575 91.9561 155.394 92.3652C155.211 92.7735 155.052 93.1943 154.895 93.6151C154.745 94.039 154.598 94.4645 154.466 94.8961C153.928 96.6175 153.506 98.3808 153.146 100.155C152.776 101.929 152.469 103.717 152.191 105.511C152.05 106.407 151.918 107.305 151.794 108.205L151.614 109.555L151.439 110.906C150.992 114.512 150.618 118.129 150.287 121.754L150.276 121.747C150.336 121.708 150.407 121.693 150.476 121.695Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M105.197 97.5861H143.711C145.087 97.5861 146.204 96.4695 146.204 95.0926V75.5013C146.204 74.1244 145.087 73.0078 143.711 73.0078H105.197C103.82 73.0078 102.703 74.1244 102.703 75.5013V95.0926C102.703 96.4695 103.82 97.5861 105.197 97.5861Z"
                        fill="#EBD6C5"
                      />
                      <path
                        d="M103.919 112.791H149.894C150.565 112.791 151.11 112.246 151.11 111.574L150.976 102.759L102.703 102.416V111.574C102.703 112.246 103.248 112.791 103.919 112.791Z"
                        fill="#E5CAB6"
                      />
                      <path
                        opacity="0.3"
                        d="M124.454 96.0095C134.38 96.0095 142.855 91.5944 146.204 85.377V95.2957C146.204 96.5604 145.179 97.5851 143.915 97.5851H104.992C103.728 97.5851 102.703 96.5596 102.703 95.2957V85.377C106.052 91.5944 114.526 96.0095 124.454 96.0095Z"
                        fill="#E5CAB6"
                      />
                      <path
                        d="M103.748 103.565H149.951C150.912 103.565 151.363 102.426 150.646 101.814L145.981 97.8372C145.79 97.6744 145.543 97.584 145.287 97.584H103.748C103.171 97.584 102.703 98.0328 102.703 98.5853V102.562C102.703 103.116 103.171 103.565 103.748 103.565Z"
                        fill="#F2E0D3"
                      />
                      <path
                        opacity="0.5"
                        d="M103.919 111.166H149.894C150.489 111.166 150.984 110.737 151.089 110.172L151.11 111.573C151.11 112.245 150.565 112.789 149.894 112.789H103.919C103.248 112.789 102.703 112.245 102.703 111.573V109.949C102.703 110.621 103.248 111.166 103.919 111.166Z"
                        fill="#E5CAB6"
                      />
                      <path
                        opacity="0.5"
                        d="M41.0192 124.294H45.0431L45.2363 122.117H40.875L41.0192 124.294Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M50.8867 122.117L51.0301 124.294H54.0878L54.2802 122.117H50.8867Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M49.8606 77.2213C50.8915 76.534 54.3278 77.2704 55.9479 77.3195C57.5679 77.3686 68.3671 75.6995 69.6926 75.6995C71.0181 75.6995 73.9144 74.374 74.3072 74.8649C74.6999 75.3558 74.3563 79.774 74.7981 80.6086C75.2399 81.4431 78.2345 90.4751 78.529 91.5551C78.8235 92.6351 81.6436 97.238 81.349 97.8762C81.0545 98.5144 74.7007 97.7165 69.9879 97.8326C66.0474 97.9292 61.9868 98.8697 61.2505 99.0661C60.5141 99.2624 58.4632 100.895 57.5686 100.588C56.6741 100.281 56.5868 95.777 57.0286 93.7151C57.4705 91.6533 53.9998 83.9468 53.3047 83.0631C52.6097 82.1795 48.8296 77.9086 49.8606 77.2213Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 98.6496L47.457 97.9888L50.2568 94.3109L53.263 96.9984L55.7051 93.7912L58.7114 96.4787L61.1542 93.2706L64.1597 95.9582L66.6026 92.7501L69.608 95.4377L72.0509 92.2304L75.0572 94.9171L77.5 91.7098L80.5063 94.3974L82.9491 91.1893L85.9554 93.8769L88.0414 91.1387L88.9094 91.7995L86.1081 95.4766L83.1019 92.7891L80.659 95.9971L77.6528 93.3096L75.2099 96.5177L72.2036 93.8301L69.7616 97.0374L66.7553 94.3506L64.3124 97.5579L61.307 94.8704L58.8641 98.0784L55.8586 95.3909L53.4158 98.599L50.4095 95.9114L48.3251 98.6496Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 93.4328L47.457 92.772L50.2568 89.0949L53.263 91.7824L55.7051 88.5744L58.7114 91.2619L61.1542 88.0538L64.1597 90.7414L66.6026 87.5333L69.608 90.2209L72.0509 87.0136L75.0572 89.7011L77.5 86.4931L80.5063 89.1806L82.9491 85.9725L85.9554 88.6601L88.0414 85.9219L88.9094 86.5827L86.1081 90.2598L83.1019 87.5723L80.659 90.7803L77.6528 88.0928L75.2099 91.3009L72.2036 88.6133L69.7616 91.8214L66.7553 89.1338L64.3124 92.3411L61.307 89.6536L58.8641 92.8617L55.8586 90.1741L53.4158 93.3822L50.4095 90.6946L48.3251 93.4328Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 88.2199L47.457 87.5591L50.2568 83.882L53.263 86.5695L55.7051 83.3615L58.7114 86.049L61.1542 82.8409L64.1597 85.5285L66.6026 82.3204L69.608 85.008L72.0509 81.8007L75.0572 84.4882L77.5 81.2802L80.5063 83.9677L82.9491 80.7596L85.9554 83.4472L88.0414 80.709L88.9094 81.3698L86.1081 85.0469L83.1019 82.3594L80.659 85.5674L77.6528 82.8799L75.2099 86.088L72.2036 83.4004L69.7616 86.6085L66.7553 83.9209L64.3124 87.1282L61.307 84.4407L58.8641 87.6488L55.8586 84.9612L53.4158 88.1693L50.4095 85.4817L48.3251 88.2199Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 83.0031L47.457 82.3424L50.2568 78.6652L53.263 81.3527L55.7051 78.1447L58.7114 80.8322L61.1542 77.6241L64.1597 80.3117L66.6026 77.1044L69.608 79.7912L72.0509 76.5839L75.0572 79.2714L77.5 76.0634L80.5063 78.7509L82.9491 75.5428L85.9554 78.2304L88.0414 75.4922L88.9094 76.153L86.1081 79.8301L83.1019 77.1426L80.659 80.3506L77.6528 77.6631L75.2099 80.8712L72.2036 78.1836L69.7616 81.3917L66.7553 78.7041L64.3124 81.9122L61.307 79.2247L58.8641 82.432L55.8586 79.7444L53.4158 82.9525L50.4095 80.2649L48.3251 83.0031Z"
                        fill="#6EC4CE"
                      />
                      <path
                        opacity="0.5"
                        d="M81.349 97.8748C81.5493 97.4408 80.3095 95.1733 79.4025 93.427C76.5287 94.034 67.5295 95.8255 64.3915 95.1483C60.6364 94.3387 59.2642 92.8753 57.3224 88.3737C56.2892 85.9776 55.0167 80.6797 54.2304 77.1584C52.5746 76.9659 50.6 76.7267 49.8606 77.2191C48.8296 77.9064 52.6097 82.1773 53.3039 83.061C53.9982 83.9446 57.4697 91.6512 57.0279 93.713C56.586 95.7748 56.6733 100.278 57.5679 100.586C58.4624 100.893 60.5133 99.2603 61.2497 99.0639C61.9861 98.8676 66.0466 97.927 69.9871 97.8304C74.7007 97.7151 81.0545 98.513 81.349 97.8748Z"
                        fill="#E2D3C9"
                      />
                      <path
                        d="M156.045 77.2213C155.014 76.534 151.578 77.2704 149.958 77.3195C148.338 77.3686 137.539 75.6995 136.213 75.6995C134.888 75.6995 131.991 74.374 131.599 74.8649C131.206 75.3558 131.549 79.774 131.108 80.6086C130.666 81.4431 127.671 90.4751 127.377 91.5551C127.082 92.6351 124.262 97.238 124.557 97.8762C124.851 98.5144 131.205 97.7165 135.918 97.8326C139.858 97.9292 143.919 98.8697 144.655 99.0661C145.392 99.2624 147.443 100.895 148.337 100.588C149.232 100.281 149.319 95.777 148.877 93.7151C148.435 91.6533 151.906 83.9468 152.601 83.0631C153.296 82.1795 157.076 77.9086 156.045 77.2213Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 98.6496L155.499 95.9114L152.494 98.599L150.051 95.3909L147.045 98.0784L144.602 94.8704L141.596 97.5579L139.153 94.3506L136.148 97.0374L133.705 93.8301L130.7 96.5177L128.256 93.3096L125.25 95.9971L122.807 92.7891L119.801 95.4766L117 91.7995L117.867 91.1387L119.953 93.8769L122.96 91.1893L125.403 94.3974L128.409 91.7098L130.852 94.9171L133.858 92.2304L136.301 95.4377L139.306 92.7501L141.749 95.9582L144.755 93.2706L147.198 96.4787L150.204 93.7912L152.646 96.9984L155.652 94.3109L158.452 97.9888L157.584 98.6496Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 93.4328L155.499 90.6946L152.494 93.3822L150.051 90.1741L147.045 92.8617L144.602 89.6536L141.596 92.3411L139.153 89.1338L136.148 91.8214L133.705 88.6133L130.7 91.3009L128.256 88.0928L125.25 90.7803L122.807 87.5723L119.801 90.2598L117 86.5827L117.867 85.9219L119.953 88.6601L122.96 85.9725L125.403 89.1806L128.409 86.4931L130.852 89.7011L133.858 87.0136L136.301 90.2209L139.306 87.5333L141.749 90.7414L144.755 88.0538L147.198 91.2619L150.204 88.5744L152.646 91.7824L155.652 89.0949L158.452 92.772L157.584 93.4328Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 88.2199L155.499 85.4817L152.494 88.1693L150.051 84.9612L147.045 87.6488L144.602 84.4407L141.596 87.1282L139.153 83.9209L136.148 86.6085L133.705 83.4004L130.7 86.088L128.256 82.8799L125.25 85.5674L122.807 82.3594L119.801 85.0469L117 81.3698L117.867 80.709L119.953 83.4472L122.96 80.7596L125.403 83.9677L128.409 81.2802L130.852 84.4882L133.858 81.8007L136.301 85.008L139.306 82.3204L141.749 85.5285L144.755 82.8409L147.198 86.049L150.204 83.3615L152.646 86.5695L155.652 83.882L158.452 87.5591L157.584 88.2199Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 83.0031L155.499 80.2649L152.494 82.9525L150.051 79.7444L147.045 82.432L144.602 79.2247L141.596 81.9122L139.153 78.7041L136.148 81.3917L133.705 78.1836L130.7 80.8712L128.256 77.6631L125.25 80.3506L122.807 77.1426L119.801 79.8301L117 76.153L117.867 75.4922L119.953 78.2304L122.96 75.5428L125.403 78.7509L128.409 76.0634L130.852 79.2714L133.858 76.5839L136.301 79.7912L139.306 77.1044L141.749 80.3117L144.755 77.6241L147.198 80.8322L150.204 78.1447L152.646 81.3527L155.652 78.6652L158.452 82.3424L157.584 83.0031Z"
                        fill="#6EC4CE"
                      />
                      <path
                        opacity="0.5"
                        d="M124.557 97.8748C124.356 97.4408 125.596 95.1733 126.503 93.427C129.377 94.034 138.376 95.8255 141.514 95.1483C145.269 94.3387 146.641 92.8753 148.583 88.3737C149.617 85.9776 150.889 80.6797 151.675 77.1584C153.331 76.9659 155.306 76.7267 156.045 77.2191C157.076 77.9064 153.296 82.1773 152.602 83.061C151.907 83.9446 148.437 91.6512 148.878 93.713C149.319 95.7748 149.232 100.278 148.338 100.586C147.443 100.893 145.392 99.2603 144.656 99.0639C143.92 98.8676 139.859 97.927 135.919 97.8304C131.205 97.7151 124.851 98.513 124.557 97.8748Z"
                        fill="#E2D3C9"
                      />
                      <path
                        d="M122.798 70.5586C120.447 70.448 118.103 70.8259 115.778 71.2023C115.044 71.3215 114.267 71.729 114.82 72.6057C115.123 73.0872 115.753 73.2283 116.318 73.2929C118.746 73.5711 121.24 73.2633 123.68 73.2672L122.798 70.5586Z"
                        fill="#755846"
                      />
                      <path
                        d="M140.096 67.296C140.453 69.4762 139.43 72.6274 137.05 73.2648C136.09 73.522 134.934 73.4308 133.944 73.4246C132.737 73.4176 131.531 73.4074 130.325 73.3989C127.956 73.3817 125.586 73.3646 123.218 73.3474C121.656 73.3365 119.996 73.2968 118.693 72.4357C117.144 71.4134 116.373 69.523 117.402 67.896C118.287 66.498 119.941 65.6417 121.52 65.3019C124.163 64.7323 126.909 65.4874 129.537 65.0136C129.962 64.9373 130.383 64.8282 130.8 64.677C133.173 63.8167 135.53 62.6315 137.952 64.0357C139.115 64.7105 139.879 65.9697 140.096 67.296Z"
                        fill="#5E4130"
                      />
                      <path
                        d="M120.473 62.6022C120.078 62.1837 119.835 62.1019 119.596 62.6972C119.32 63.3837 119.134 64.131 119.142 64.8752C118.152 65.0825 117.214 65.536 116.421 66.171C115.812 65.7378 115.088 65.465 114.363 65.3014C113.737 65.1604 113.667 65.4074 113.786 65.97C113.935 66.6651 114.171 67.336 114.401 68.0077C114.544 68.4284 114.674 68.8531 114.821 69.2723C114.924 69.7071 115.129 70.1217 115.38 70.4326C116.071 71.2929 117.448 71.7923 118.516 71.9334C119.723 72.0931 120.867 71.7846 121.68 70.8666C122.41 70.043 122.908 68.9194 123.097 67.8409C123.206 67.2269 123.155 66.5708 122.939 65.977C122.697 65.3108 122.218 64.8261 121.802 64.2682C121.377 63.7001 120.962 63.1188 120.473 62.6022Z"
                        fill="#755846"
                      />
                      <path
                        d="M138.316 65.5664C140.59 67.7311 140.352 70.2262 139.095 72.4329C137.702 74.8805 135.408 76.5379 132.849 77.6156C129.827 78.8888 126.369 79.5402 123.133 78.7766C122.482 78.6231 121.771 78.3036 121.579 77.6631C121.013 75.768 123.968 75.8023 125.022 75.7119C127.188 75.5272 129.483 75.5054 131.589 74.801C133.901 74.028 135.547 72.3792 136.703 70.269L138.316 65.5664Z"
                        fill="#755846"
                      />
                      <path
                        d="M139.963 69.0548C139.955 68.0379 139.609 67.0226 138.975 66.2262C137.366 64.2026 134.234 64.1395 132.078 65.2366C129.605 66.4951 129.213 69.8263 130.182 72.1741C130.226 72.2816 129.316 72.2504 129.239 72.2559C128.585 72.3018 127.231 72.1772 126.97 72.9782C126.796 73.5151 127.154 74.2413 127.693 74.4151C127.918 74.4876 128.159 74.4884 128.396 74.4876C130.09 74.4852 131.784 74.4907 133.478 74.4938C134.805 74.4962 135.807 74.2507 136.602 73.1193C137.015 72.5302 137.329 71.8725 137.769 71.3037L139.963 69.0548Z"
                        fill="#755846"
                      />
                      <path
                        d="M120.23 69.7994C120.326 70.0472 120.17 70.3378 119.883 70.4493C119.595 70.5607 119.284 70.45 119.188 70.203C119.093 69.9552 119.248 69.6646 119.536 69.5532C119.823 69.4417 120.134 69.5524 120.23 69.7994Z"
                        fill="#E88E8E"
                      />
                      <path
                        d="M122.614 65.2617C122.7 65.4082 122.808 65.5313 122.91 65.67C122.961 65.7394 123.008 65.8142 123.047 65.8976C123.086 65.9833 123.111 66.0674 123.135 66.1516C123.18 66.3207 123.209 66.4906 123.235 66.6565C123.262 66.8186 123.285 66.997 123.296 67.1685C123.342 67.8628 123.227 68.5672 122.979 69.2202C122.728 69.8708 122.343 70.4747 121.842 70.9578C121.59 71.1994 121.318 71.4121 121.014 71.5836C120.86 71.6654 120.698 71.7394 120.527 71.7791C120.357 71.8212 120.176 71.8267 120.012 71.7862C120.352 71.7643 120.637 71.596 120.886 71.3927C121.135 71.1869 121.366 70.9524 121.573 70.7062C121.99 70.2129 122.31 69.6487 122.543 69.0526C122.77 68.4542 122.907 67.8199 122.93 67.1739C122.933 67.0929 122.935 67.0126 122.935 66.9316L122.93 66.6838C122.926 66.517 122.924 66.3526 122.91 66.1921C122.903 66.1119 122.894 66.0316 122.877 65.9591C122.859 65.8843 122.829 65.8103 122.797 65.7339C122.733 65.5835 122.652 65.4277 122.614 65.2617Z"
                        fill="#8E6751"
                      />
                      <path
                        d="M119.832 67.9407C119.957 68.0295 120.084 68.0701 120.211 68.0794C120.337 68.0888 120.452 68.0623 120.558 68.0054C120.663 67.9477 120.757 67.8636 120.828 67.7584C120.9 67.6532 120.949 67.5246 120.977 67.375C121.045 67.5129 121.05 67.6844 120.992 67.8394C120.935 67.9945 120.819 68.1301 120.669 68.2111C120.593 68.2516 120.51 68.2773 120.423 68.2867C120.338 68.2945 120.251 68.2844 120.172 68.2586C120.014 68.2072 119.878 68.0888 119.832 67.9407Z"
                        fill="#061F34"
                      />
                      <path
                        d="M116.863 69.4056C116.988 69.4944 117.116 69.5349 117.242 69.5443C117.368 69.5536 117.484 69.5271 117.59 69.4702C117.695 69.4126 117.788 69.3284 117.859 69.2232C117.931 69.118 117.98 68.9895 118.008 68.8398C118.077 68.9778 118.081 69.1492 118.024 69.3043C117.966 69.4593 117.851 69.5949 117.7 69.676C117.625 69.7165 117.541 69.743 117.455 69.7515C117.369 69.7593 117.283 69.7492 117.203 69.7235C117.046 69.6728 116.909 69.5536 116.863 69.4056Z"
                        fill="#061F34"
                      />
                      <path
                        d="M108.28 80.7512C107.392 82.672 105.911 84.3613 104.271 85.6494C102.477 87.059 100.307 88.0182 98.0396 88.3175C97.4108 88.4008 95.7028 88.7694 95.4791 88.0104C95.2983 87.3949 96.5178 85.8286 96.8311 85.379C97.9313 83.8011 99.122 82.2855 100.394 80.8416C101.246 79.8738 103.205 78.6683 103.236 77.2626C103.262 76.1039 102.405 75.0169 101.972 73.9961C101.14 72.0371 100.248 70.1039 99.4391 68.1355C98.5274 65.9163 97.7965 63.4579 98.1106 61.0337C98.268 59.815 99.4797 57.63 100.885 58.6189C103.07 60.1563 104.597 63.4314 105.781 65.7527C107.443 69.0075 108.781 72.6254 109.113 76.2839C109.256 77.8501 108.923 79.3611 108.28 80.7512Z"
                        fill="#F9AE8F"
                      />
                      <path
                        d="M70.8966 80.7512C71.785 82.672 73.2663 84.3613 74.9057 85.6494C76.7003 87.059 78.8697 88.0182 81.1372 88.3175C81.766 88.4008 83.4741 88.7694 83.6977 88.0104C83.8785 87.3949 82.659 85.8286 82.3458 85.379C81.2455 83.8011 80.0549 82.2855 78.7832 80.8416C77.9307 79.8738 75.9717 78.6683 75.9406 77.2626C75.9148 76.1039 76.772 75.0169 77.2052 73.9961C78.0367 72.0371 78.9289 70.1039 79.7377 68.1355C80.6494 65.9163 81.3803 63.4579 81.0663 61.0337C80.9089 59.815 79.6972 57.63 78.2915 58.6189C76.1073 60.1563 74.58 63.4314 73.3956 65.7527C71.7335 69.0075 70.3956 72.6254 70.0637 76.2839C69.9218 77.8501 70.2538 79.3611 70.8966 80.7512Z"
                        fill="#F9AE8F"
                      />
                      <path
                        d="M88.0875 30.8294C88.2792 30.6985 88.46 30.538 88.6595 30.4195C89.6351 29.8398 90.1501 30.4834 91.0595 30.6315C91.4203 30.6907 91.7896 30.6486 92.152 30.5972C92.5159 30.5457 92.9179 30.4935 93.2257 30.6922C93.6091 30.9393 93.6933 31.4793 94.0556 31.7551C94.6509 32.2094 95.6 31.7076 96.239 32.1011C96.9013 32.5086 96.8429 33.478 97.22 34.0663C97.4024 34.3515 97.7156 34.5252 97.965 34.7559C98.5525 35.2982 98.2619 36.3712 98.1154 37.0562C97.6915 39.0447 97.2231 41.024 96.712 42.9923C96.2452 44.7892 94.7842 45.7523 93.2733 46.7372C92.2166 47.4261 91.1584 47.8437 90.027 48.3643C88.9712 48.8497 87.8132 48.9884 86.7153 48.457C85.7833 48.0058 85.1436 47.1401 84.5413 46.3063C83.9156 45.4406 83.4145 44.497 83.0888 43.4778C82.7062 42.2785 82.4989 41.0419 82.3018 39.8029C82.1841 39.0634 82.0727 38.3232 81.9683 37.5814C81.8685 36.8754 81.7228 36.1515 81.7057 35.4377C81.6379 34.5603 81.6309 33.319 82.2963 32.6271C82.4304 32.4876 82.5963 32.3832 82.7841 32.3333C83.1948 32.2234 83.5361 32.3676 83.9366 32.1229C84.3098 31.8954 84.5522 31.505 84.8943 31.2377C85.3633 30.8715 86.0062 30.7304 86.5898 30.8676C86.9117 30.9431 87.228 31.0982 87.5561 31.0577C87.7525 31.032 87.9239 30.9416 88.0875 30.8294Z"
                        fill="#835F55"
                      />
                      <path
                        d="M85.6741 57.8081C87.1749 59.4024 90.0588 59.5294 92.0777 58.8772C93.4523 58.433 94.4232 57.4208 94.452 56.0284C94.4848 54.4722 93.0237 53.3665 92.6551 51.9156C92.4455 51.0935 92.4666 50.2465 92.4884 49.4096C92.5133 48.4333 92.5211 47.4538 92.5718 46.479C91.5377 46.2748 90.6993 46.1719 89.6006 46.2148C88.692 46.2499 87.7842 46.161 86.8756 46.2109C86.8024 46.2148 86.7229 46.2218 86.6715 46.267C86.6193 46.313 86.6099 46.3839 86.6037 46.4501C86.4821 47.7686 86.6014 49.1042 86.5063 50.425C86.4182 51.639 86.1276 52.8608 85.3671 53.866C84.439 55.0925 84.6673 56.739 85.6741 57.8081Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M92.5931 51.7192C92.4302 50.9548 92.4466 50.1717 92.4669 49.3979C92.4918 48.4215 92.4996 47.4421 92.5502 46.4672C91.5162 46.2631 90.6778 46.1602 89.5791 46.2031C88.6705 46.2381 87.7627 46.1493 86.8541 46.1992C86.7809 46.2031 86.7022 46.2101 86.65 46.2553C86.5978 46.3013 86.5884 46.3722 86.5822 46.4384C86.4606 47.7569 86.5798 49.0924 86.4848 50.4132C86.4575 50.7912 86.4068 51.1699 86.332 51.5431C86.4746 51.66 86.6196 51.7714 86.7692 51.8751C87.8905 52.6504 89.403 52.9075 90.7448 52.5522C91.4282 52.3706 92.0422 52.0847 92.5931 51.7192Z"
                        fill="#F38D70"
                      />
                      <path
                        d="M95.9224 41.9959C95.9333 41.8665 95.9458 41.7372 95.9582 41.6078C96.1117 40.0712 96.2473 38.0499 95.2336 36.7572C94.2587 35.5151 92.4603 35.1738 91.0008 34.8668C88.9133 34.4273 86.4821 35.0553 84.7444 36.2717C84.0532 36.7556 83.6535 37.5714 83.4969 38.4005C83.341 39.2265 83.4493 40.1273 83.4688 40.9634C83.4984 42.2546 83.4867 43.5458 83.7603 44.8128C84.0135 45.9878 84.4132 47.1949 85.0343 48.2305C85.5805 49.2053 86.2857 50.1162 87.1896 50.784C88.1972 51.5289 89.5553 51.7767 90.7608 51.4346C92.4424 50.9577 93.7071 49.6775 94.5081 48.1634C95.1993 46.8575 95.5834 45.3949 95.7517 43.9323C95.825 43.2871 95.8663 42.6403 95.9224 41.9959Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M96.4742 43.2881C96.5443 43.2577 96.5888 43.1907 96.6269 43.126C96.7789 42.8665 96.9597 42.5206 96.9721 42.2167C96.983 41.9486 96.9792 41.6704 96.9854 41.3992C97.0158 40.0637 96.8638 38.792 96.5412 37.7299C96.1103 36.3094 95.1823 35.0657 93.8958 34.2686C92.6708 33.5104 91.1903 33.1839 89.7487 33.3156C88.6734 33.4138 88.0305 33.5945 86.6809 34.0582C85.77 34.3706 85.1529 34.8218 84.5692 35.4312C83.8391 36.194 83.458 37.3309 83.289 38.3517C83.116 39.3927 83.1269 40.4525 83.1386 41.5044C83.1394 41.6042 83.1425 42.7387 83.1978 42.8221C83.2531 42.9055 83.3817 42.9476 83.4549 42.8798C83.4892 42.8486 83.6622 41.7741 83.6716 41.7289C83.8695 40.8141 83.9139 40.5117 84.069 39.8821C84.2451 39.166 84.3066 38.6603 84.5684 38.0696C84.7679 37.6192 85.2144 37.1283 85.6991 36.9959C86.084 36.8907 86.4869 37.0434 86.864 37.1712C88.1326 37.6029 89.5157 37.7829 90.8311 37.5125C91.4739 37.38 92.0958 37.1431 92.7495 37.0792C93.4033 37.0153 94.2854 37.1626 94.6968 37.6621C94.883 37.8881 94.989 38.167 95.0778 38.4437C95.328 39.2221 95.4698 40.027 95.5984 40.8312C95.7191 41.587 95.7308 42.3491 95.981 43.0356C96.0067 43.1065 96.062 43.1642 96.1205 43.2125C96.1992 43.2795 96.3737 43.3317 96.4742 43.2881Z"
                        fill="#F38D70"
                      />
                      <path
                        d="M95.7844 42.9004C97.1176 42.1352 97.3826 44.4082 97.0974 45.5015C96.9797 45.9526 96.8091 46.3882 96.5613 46.7451C96.227 47.2267 95.3052 47.9911 94.8353 47.3872C94.6218 47.1129 94.6233 46.6812 94.6389 46.2978C94.6787 45.27 94.8805 43.4186 95.7844 42.9004Z"
                        fill="#F7AC8D"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M85.0864 53.4355C85.2168 53.6716 85.3598 53.8995 85.5158 54.1171C86.3145 55.2298 87.4413 56.009 88.7262 56.2802C90.9013 56.7398 93.3039 55.5973 94.4053 53.5246C94.6986 53.6551 94.9943 53.7801 95.2916 53.9015C95.2213 54.0455 95.1463 54.1871 95.0655 54.3255C93.8125 56.4714 91.0775 57.6777 88.5621 57.1946C87.1198 56.9172 85.8146 56.1169 84.8865 54.9418C84.6134 54.5957 84.3687 54.2163 84.1548 53.8075L84.2186 53.7824C84.2837 53.7567 84.3496 53.731 84.416 53.705C84.6363 53.6189 84.8621 53.5306 85.0864 53.4355ZM89.6834 57.5047C89.2954 57.5047 88.9065 57.4688 88.5232 57.3956C87.0325 57.1088 85.6837 56.2829 84.7252 55.0688C84.4396 54.7071 84.1845 54.3103 83.9622 53.8825C83.4801 54.0691 82.9955 54.2481 82.5113 54.4269C81.0454 54.9682 79.5833 55.5082 78.2076 56.2549C78.135 56.293 78.1724 56.9681 78.1945 57.3669C78.2018 57.4988 78.2074 57.6004 78.2068 57.6388C78.1998 58.0666 78.199 58.4921 78.1983 58.9245C78.1973 59.6353 78.1927 60.3024 78.1883 60.952V60.952C78.1757 62.807 78.1641 64.5199 78.238 66.7043C78.272 67.7023 78.3116 68.7013 78.3512 69.7008L78.3512 69.7008C78.4207 71.4537 78.4902 73.2079 78.5294 74.9602C78.6323 79.5833 77.4346 84.8314 76.3281 88.5951C80.0528 90.3421 85.2175 91.5257 89.3934 91.5958V91.599C89.4243 91.599 89.4555 91.5986 89.4868 91.5982L89.4877 91.5982C89.5192 91.5978 89.5508 91.5974 89.582 91.5974C89.6451 91.5982 89.7082 91.599 89.7705 91.599V91.5951C93.9464 91.5249 99.1119 90.3413 102.836 88.5943C101.729 84.8314 100.532 79.5833 100.634 74.9594C100.673 73.2056 100.743 71.4498 100.813 69.6954L100.813 69.6953L100.813 69.6943C100.852 68.6968 100.892 67.6996 100.926 66.7035C101 64.5191 100.988 62.8062 100.976 60.9512V60.9511C100.971 60.3015 100.967 59.6345 100.966 58.9237C100.965 58.4913 100.964 58.0666 100.957 57.638C100.956 57.5994 100.962 57.4975 100.969 57.3653L100.969 57.3652L100.969 57.3651C100.992 56.9662 101.029 56.2922 100.956 56.2541C99.7026 55.5941 98.3811 55.0919 97.06 54.5899C96.5326 54.3895 96.0053 54.1891 95.4824 53.9788C95.4081 54.1317 95.3286 54.2824 95.2424 54.4299C94.1383 56.3187 91.9221 57.5047 89.6834 57.5047Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M69.2969 69.9117C69.3997 69.6717 74.1156 59.4351 75.1777 58.2701C76.2398 57.1052 79.2125 55.7891 79.2125 55.7891L78.6959 70.1447L77.4444 72.3858L69.2969 69.9117Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M83.5763 42.9004C82.2431 42.1352 81.9782 44.4082 82.2634 45.5015C82.381 45.9526 82.5517 46.3882 82.7995 46.7451C83.1338 47.2267 84.0556 47.9911 84.5254 47.3872C84.739 47.1129 84.7374 46.6812 84.7218 46.2978C84.6821 45.27 84.4802 43.4186 83.5763 42.9004Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M94.3719 41.7776C94.5067 41.7644 94.6135 41.7285 94.6703 41.6592C94.8948 41.3849 94.5574 40.9937 94.3361 40.8441C93.9161 40.5605 92.4955 40.1077 92.1121 40.6579C91.7537 41.1706 92.4815 41.427 92.8602 41.5298C93.1173 41.5999 93.9098 41.8228 94.3719 41.7776Z"
                        fill="#835F55"
                      />
                      <path
                        d="M85.0606 41.5151C84.9265 41.494 84.8221 41.4527 84.7699 41.3802C84.5611 41.0935 84.9203 40.7218 85.1502 40.5854C85.5858 40.326 87.0289 39.9543 87.3811 40.5247C87.7099 41.0569 86.9689 41.2719 86.5847 41.353C86.3229 41.4083 85.5187 41.586 85.0606 41.5151Z"
                        fill="#835F55"
                      />
                      <path
                        d="M93.3032 43.4005C93.2307 43.9428 92.9042 44.3464 92.5746 44.3028C92.245 44.2584 92.0362 43.7838 92.1078 43.2415C92.1803 42.6992 92.5068 42.2955 92.8364 42.3392C93.1668 42.3828 93.3756 42.8581 93.3032 43.4005Z"
                        fill="#1E2032"
                      />
                      <path
                        d="M87.2288 43.1659C87.2132 43.7129 86.9311 44.1485 86.5984 44.1391C86.2657 44.1298 86.0085 43.6786 86.0241 43.1316C86.0397 42.5846 86.3218 42.149 86.6545 42.1584C86.9872 42.1685 87.2444 42.6189 87.2288 43.1659Z"
                        fill="#1E2032"
                      />
                      <path
                        d="M90.7072 46.0382C90.6994 46.3008 90.2327 46.5003 89.6646 46.4847C89.0958 46.4683 88.6415 46.2432 88.6485 45.9806C88.6563 45.718 89.1231 45.5185 89.6911 45.5341C90.26 45.5496 90.7142 45.7756 90.7072 46.0382Z"
                        fill="#F38D70"
                      />
                      <path
                        d="M94.4398 46.0944C95.0234 45.9814 95.4169 45.5692 95.4535 45.0658C95.4855 44.6224 95.1224 44.3092 94.6073 44.3333C94.0462 44.3598 93.3761 44.6778 93.2109 45.1702C92.9647 45.8996 93.7353 46.2307 94.4398 46.0944Z"
                        fill="#FD816C"
                      />
                      <path
                        d="M84.6711 45.8093C84.11 45.6659 83.7524 45.2342 83.7461 44.7301C83.7415 44.2859 84.1132 43.9921 84.6126 44.0428C85.1565 44.0981 85.7893 44.4511 85.921 44.9506C86.1173 45.6916 85.3482 45.9823 84.6711 45.8093Z"
                        fill="#FD816C"
                      />
                      <path
                        d="M87.5352 47.3711C87.7042 47.4825 87.8811 47.5659 88.0643 47.6306C88.2474 47.6953 88.4344 47.7428 88.6245 47.7786C89.004 47.8495 89.3913 47.8776 89.7785 47.8753C90.1658 47.8729 90.5539 47.8433 90.9373 47.7794C91.1289 47.7475 91.3191 47.7069 91.5069 47.6524C91.6947 47.5979 91.8786 47.5301 92.0578 47.4366C91.9884 47.509 91.9113 47.5776 91.8271 47.636C91.7858 47.6672 91.7422 47.6937 91.6986 47.7202C91.6549 47.7482 91.6097 47.7708 91.5645 47.795C91.3822 47.8893 91.1897 47.9617 90.9926 48.0194C90.5983 48.1324 90.1892 48.1862 89.7801 48.1877C89.371 48.1893 88.9588 48.1371 88.5653 48.0155C88.3689 47.954 88.1772 47.8737 87.9996 47.7677C87.8227 47.6633 87.6583 47.5324 87.5352 47.3711Z"
                        fill="#F6604B"
                      />
                      <path
                        d="M95.62 33.8061C94.5447 33.1757 93.2293 32.8796 92.0239 32.684C90.8309 32.4908 89.6169 32.3817 88.4091 32.4542C87.0797 32.5337 85.7433 32.8282 84.5667 33.4679C82.8672 34.3913 82.6591 36.4173 82.6062 38.1573C82.5586 39.7251 82.8805 41.4651 83.5272 42.9277C83.5833 42.5272 83.8327 38.6591 84.0594 37.7108C84.1288 37.4217 84.2168 37.1295 84.3968 36.8887C84.7522 36.4126 85.4059 36.2248 86.0129 36.2428C86.62 36.2607 87.2052 36.4493 87.7958 36.5848C89.2498 36.9184 90.7865 36.9277 92.235 36.5755C92.8124 36.4352 93.3891 36.2163 93.993 36.3651C95.207 36.6643 95.6434 37.9345 95.6971 38.9116C95.7361 39.6246 95.8343 42.4914 95.8499 42.9184C95.8491 42.9005 95.9792 42.7867 95.9932 42.7688C96.139 42.5857 96.2403 42.3651 96.3268 42.1501C96.5917 41.4893 96.6938 40.7786 96.8122 40.0804C97.1481 38.1075 97.939 35.3817 95.9449 34.0126C95.839 33.9394 95.7306 33.8708 95.62 33.8061Z"
                        fill="#835F55"
                      />
                      <path
                        d="M81.6755 35.0556C81.6732 34.9831 81.6693 34.8873 81.6646 34.775C81.6428 34.2537 81.6093 33.466 81.6576 33.1379C81.7799 32.3174 82.3074 31.475 83.2113 31.4439C83.3836 31.4384 83.5534 31.4633 83.7178 31.4883C83.9142 31.5179 84.0997 31.5459 84.2828 31.5226C84.6475 31.4758 84.8469 31.2381 85.0776 30.9631C85.1205 30.9124 85.1633 30.8602 85.2085 30.8096C85.8155 30.1207 86.869 30.314 87.4441 30.4909L87.4877 30.5041C87.974 30.6537 88.4329 30.7955 88.9129 30.6311C89.2145 30.5283 89.5137 30.3974 89.802 30.2711C90.0405 30.1667 90.2867 30.0592 90.5361 29.9665C91.2989 29.682 92.3524 29.4522 93.0374 29.9727C93.2992 30.1714 93.395 30.4807 93.4878 30.7792C93.5789 31.073 93.6646 31.3504 93.9023 31.4766C94.108 31.5857 94.3636 31.5202 94.6106 31.4563C94.7127 31.4298 94.8179 31.4026 94.9192 31.3885C95.5885 31.2927 96.1784 31.5787 96.5353 32.1724C96.6779 32.4101 96.7909 32.6883 96.8906 33.046C96.9382 33.2158 96.9631 33.3896 96.9873 33.5571C97.0169 33.7628 97.0449 33.9576 97.1104 34.1423C97.1961 34.3847 97.2935 34.6589 97.4789 34.8483L97.3317 34.9917C97.115 34.7696 97.0099 34.4727 96.9163 34.2109C96.8439 34.0067 96.8127 33.7932 96.7831 33.586C96.7597 33.4247 96.7356 33.2579 96.6919 33.1005C96.5976 32.7608 96.4917 32.4989 96.3584 32.2776C96.0413 31.7501 95.5395 31.5062 94.9472 31.5911C94.8576 31.6036 94.7618 31.6285 94.6613 31.655C94.3893 31.7252 94.0815 31.8046 93.8049 31.6582C93.4924 31.4922 93.3896 31.1602 93.2906 30.84C93.2041 30.5602 93.1215 30.2953 92.9119 30.1363C92.301 29.6727 91.3207 29.8924 90.6062 30.1589C90.3623 30.2501 90.1184 30.3568 89.8823 30.4597C89.5893 30.5875 89.287 30.72 88.9768 30.8259C88.4337 31.0114 87.921 30.8532 87.4246 30.7005L87.381 30.6872C86.8542 30.5252 85.8911 30.3436 85.3605 30.9452C85.3168 30.995 85.2747 31.0449 85.2327 31.0948C84.9958 31.3769 84.7511 31.6691 84.3062 31.7259C84.0942 31.7532 83.8862 31.722 83.6843 31.6917C83.5223 31.6675 83.3688 31.6441 83.216 31.6496C82.4306 31.6769 81.9677 32.4319 81.8586 33.1683C81.8126 33.4769 81.8469 34.2841 81.868 34.7665C81.8726 34.8795 81.8765 34.9761 81.8789 35.0486L81.6755 35.0556Z"
                        fill="#835F55"
                      />
                      <path
                        d="M87.3164 32.6806C87.3974 32.4741 87.5307 32.287 87.6982 32.1367C87.8665 31.987 88.0691 31.8748 88.2858 31.8031C88.5032 31.7338 88.7377 31.7135 88.9676 31.7447C89.2006 31.7759 89.4125 31.8756 89.6112 31.9754C89.8107 32.0759 90.0008 32.1811 90.2011 32.2481C90.4021 32.3143 90.6125 32.3517 90.8245 32.3541C91.0356 32.358 91.2476 32.3307 91.4494 32.2715C91.5507 32.2411 91.6481 32.2052 91.7455 32.1593L92.0447 32.0159C92.1476 31.9683 92.2575 31.9255 92.3751 31.8967C92.4928 31.8702 92.6198 31.8585 92.7437 31.8803C92.8676 31.9005 92.9837 31.9481 93.0873 32.0112C93.191 32.0743 93.2821 32.1522 93.3624 32.238C93.4427 32.3237 93.5136 32.4164 93.5759 32.5122C93.6398 32.6096 93.6912 32.7094 93.7481 32.7967C93.805 32.8847 93.8673 32.9595 93.9476 33.0117C94.0279 33.0647 94.1237 33.0998 94.2266 33.1247C94.4315 33.1754 94.6614 33.1871 94.8819 33.2774C94.9918 33.3242 95.0931 33.3928 95.1741 33.4777C95.2567 33.5619 95.3222 33.66 95.3728 33.7637C95.4733 33.9717 95.5115 34.2024 95.5107 34.4252C95.5115 34.6497 95.4788 34.8694 95.4445 35.0884C95.457 34.8671 95.4702 34.6458 95.4538 34.4276C95.4375 34.2102 95.3884 33.9951 95.2832 33.8096C95.1811 33.6242 95.0245 33.4707 94.832 33.4029C94.6372 33.3328 94.4175 33.3265 94.1915 33.2813C94.0785 33.258 93.9616 33.2221 93.8541 33.1567C93.7458 33.0904 93.6624 32.9922 93.5977 32.8964C93.5323 32.7998 93.4801 32.7024 93.4201 32.6167C93.3601 32.5294 93.2938 32.4468 93.2214 32.3728C93.078 32.2239 92.9019 32.1086 92.711 32.0782C92.6159 32.0618 92.5185 32.0712 92.4211 32.0938C92.3237 32.1187 92.2263 32.1569 92.1289 32.2021L91.8289 32.3431C91.726 32.3907 91.6154 32.4312 91.504 32.4631C91.3925 32.4959 91.2788 32.5177 91.1642 32.5317C91.0497 32.5465 90.9336 32.552 90.8182 32.5465C90.5876 32.5387 90.3585 32.4935 90.1411 32.4164C89.9221 32.3385 89.7273 32.2208 89.5364 32.1148C89.3455 32.0096 89.1515 31.9138 88.945 31.8748C88.7385 31.8359 88.5211 31.8437 88.313 31.8974C88.1058 31.9512 87.9071 32.0463 87.7341 32.178C87.5634 32.3135 87.4169 32.4834 87.3164 32.6806Z"
                        fill="#835F55"
                      />
                      <path
                        d="M109.892 69.9117C109.789 69.6717 105.073 59.4351 104.011 58.2701C102.949 57.1052 99.9766 55.7891 99.9766 55.7891L100.493 70.1447L101.745 72.3858L109.892 69.9117Z"
                        fill="#4C9DAD"
                      />
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M78.3889 70.6995C78.3538 70.2943 78.3383 69.8899 78.3305 69.4855C78.3242 69.2829 78.3258 69.0811 78.3242 68.8792L78.3297 68.273L78.346 67.6668C78.3554 67.4649 78.3608 67.2623 78.3741 67.0605C78.3967 66.6569 78.4255 66.2525 78.4762 65.8496C78.512 66.2548 78.5268 66.6592 78.5346 67.0636C78.5408 67.2662 78.5385 67.4681 78.5408 67.6699L78.5354 68.2761L78.519 68.8824C78.5097 69.0842 78.5042 69.2868 78.491 69.4886C78.4684 69.8922 78.4388 70.2959 78.3889 70.6995Z"
                          fill="#A7C8BC"
                        />
                      </g>
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M100.737 70.6995C100.687 70.2959 100.658 69.8922 100.636 69.4886C100.623 69.2868 100.617 69.085 100.608 68.8824L100.591 68.2761L100.586 67.6699C100.588 67.4681 100.587 67.2655 100.592 67.0636C100.6 66.6592 100.616 66.2548 100.651 65.8496C100.7 66.2532 100.73 66.6569 100.753 67.0605C100.766 67.2623 100.771 67.4642 100.781 67.6668L100.797 68.273L100.803 68.8792C100.8 69.0811 100.802 69.2837 100.796 69.4855C100.788 69.8899 100.772 70.2951 100.737 70.6995Z"
                          fill="#A7C8BC"
                        />
                      </g>
                      <path
                        d="M113.944 92.2365C113.396 93.0617 112.676 93.7786 111.965 94.3708C108.084 97.6007 102.805 97.9958 98.2062 99.4186C94.0981 100.69 90.4474 100.865 86.2466 100.372C83.3752 100.034 80.478 99.1794 77.7087 98.1945C74.859 97.1815 72.0749 97.116 69.4193 95.5108C67.3271 94.2469 64.6317 93.0025 64.313 90.0157C64.1798 88.7666 65.1561 87.0391 66.1894 86.2864C67.6006 85.2593 70.2577 85.07 71.9806 85.2297C78.9211 85.871 83.1477 88.8765 90.1365 88.9279C94.0365 88.9568 97.6732 87.7466 101.42 86.6526C104.311 85.8087 107.521 85.2703 110.531 85.4471C112.411 85.5578 114.005 87.1568 114.467 88.7853C114.797 89.9503 114.626 91.2111 113.944 92.2365Z"
                        fill="#1C3842"
                      />
                      <path
                        d="M103.112 88.2682H76.0659L74.128 68.133C74.0929 67.7722 74.3726 67.459 74.7295 67.459H104.448C104.804 67.459 105.084 67.7715 105.049 68.133L103.112 88.2682Z"
                        fill="#B8D1CE"
                      />
                      <path
                        d="M103.325 88.8385H75.8541L73.8857 68.7033C73.8507 68.3425 74.1343 68.0293 74.4967 68.0293H104.681C105.045 68.0293 105.328 68.3418 105.292 68.7033L103.325 88.8385Z"
                        fill="white"
                      />
                      <path
                        d="M103.31 88.8379H75.8555V90.0597H103.31V88.8379Z"
                        fill="#B8D1CE"
                      />
                      <path
                        d="M91.4504 78.823C91.6626 77.7929 90.9995 76.7858 89.9694 76.5737C88.9393 76.3615 87.9322 77.0246 87.7201 78.0547C87.5079 79.0848 88.171 80.0919 89.2011 80.304C90.2312 80.5162 91.2383 79.8531 91.4504 78.823Z"
                        fill="#B8D1CE"
                      />
                      <path
                        d="M71.7574 99.5848C71.6514 99.8163 71.5906 100.074 71.5703 100.344C71.4761 101.638 71.9451 103.241 73.128 103.927C74.2431 104.573 75.6153 103.789 76.6618 103.38C77.713 102.968 78.7595 102.544 79.8301 102.184C82.2075 101.385 84.6691 100.88 87.1182 100.354C88.1694 100.128 89.4161 100.055 90.2585 99.3277C90.9543 98.7269 91.3494 97.7669 91.2161 96.8505C91.0424 95.6622 89.9959 94.6586 88.8013 94.5347C88.3494 94.4879 87.892 94.5549 87.4502 94.6594C86.0172 94.9983 84.6847 95.7035 83.3086 96.2248C81.8577 96.7742 80.3849 97.2775 78.8717 97.6274C77.4582 97.9547 76.0049 98.0459 74.5774 98.2913C73.8971 98.4082 73.1872 98.4799 72.5545 98.7752C72.1781 98.9513 71.9171 99.2381 71.7574 99.5848Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M79.9552 97.2793L81.4731 101.797L77.8902 102.901L76.3801 101.926L75.6328 97.9635L79.9552 97.2793Z"
                        fill="white"
                      />
                      <path
                        d="M72.6571 105.672C72.5597 105.69 72.4615 105.706 72.3633 105.721C71.1033 105.914 69.8457 105.407 68.9277 104.552C68.2459 103.917 67.7347 103.094 67.4807 102.197C67.1558 101.048 67.2991 99.8801 68.0332 98.9123C68.4353 98.3817 68.9869 98.0856 69.5838 97.823C70.4916 97.4232 71.4392 97.2799 72.4241 97.2939C73.4729 97.3095 74.5148 97.2549 75.562 97.3593C76.2096 97.4139 76.8633 97.4692 77.4836 97.6632C77.4088 97.6391 77.0192 97.8674 76.9452 97.9134C76.7862 98.0123 76.7106 98.0607 76.7169 98.2734C76.7262 98.5765 77.0387 98.864 77.1937 99.1095C77.4485 99.5108 77.6527 99.9565 77.6979 100.429C77.7789 101.284 77.4462 102.604 78.8114 102.673C78.7421 102.67 77.9465 103.273 77.8576 103.345C77.6153 103.542 76.9421 103.94 76.6678 104.09C75.1202 104.943 74.2646 105.379 72.6571 105.672Z"
                        fill="white"
                      />
                      <path
                        d="M73.5946 105.233C73.4972 105.251 73.399 105.267 73.3008 105.282C72.0408 105.474 70.7832 104.968 69.8652 104.113C69.1834 103.478 68.6722 102.654 68.4182 101.757C68.0933 100.609 68.2366 99.4399 68.9707 98.4729C69.3728 97.9422 69.9244 97.6461 70.5213 97.3835C71.4291 96.9838 72.3767 96.8404 73.3616 96.8544C74.4104 96.87 75.4523 96.8155 76.4995 96.9199C77.1471 96.9744 77.8008 97.0298 78.4211 97.2238C78.3463 97.1996 77.9567 97.4279 77.8827 97.4739C77.7237 97.5729 77.6481 97.6212 77.6544 97.8339C77.6637 98.137 77.9762 98.4246 78.1312 98.67C78.386 99.0713 78.5902 99.5171 78.6354 99.99C78.7164 100.844 78.3837 102.165 79.7489 102.233C79.6796 102.23 78.884 102.833 78.7951 102.905C78.5528 103.102 77.8796 103.5 77.6053 103.651C76.0577 104.503 75.2021 104.94 73.5946 105.233Z"
                        fill="#EA584A"
                      />
                      <path
                        d="M74.292 102.32C75.1258 102.394 75.9689 102.357 76.7925 102.211C77.3411 102.113 77.9006 102.079 78.1343 101.484C78.2084 101.296 78.2395 101.094 78.2668 100.894C78.3775 100.092 78.1881 99.2014 77.5967 98.6162C77.345 98.3669 77.0076 98.1752 76.6538 98.1993C76.5198 98.2087 76.3897 98.2476 76.2611 98.2874C75.9229 98.391 75.5855 98.4939 75.2473 98.5975C74.8686 98.7128 74.4891 98.8289 74.1237 98.9817C73.833 99.1032 73.5478 99.2513 73.3226 99.4718C73.0592 99.7305 72.9361 100.027 72.9883 100.386C73.0452 100.778 72.9891 101.16 73.1426 101.54C73.2618 101.834 73.4824 102.096 73.7769 102.216C73.9406 102.283 74.1174 102.304 74.292 102.32Z"
                        fill="#CF3A43"
                      />
                      <path
                        d="M72.9903 99.0764C73.4984 100.015 73.8241 101.416 73.3495 102.419C73.2428 102.644 73.5786 102.842 73.6862 102.615C74.2277 101.472 73.9098 99.9562 73.3269 98.8793C73.2069 98.6595 72.8703 98.8559 72.9903 99.0764Z"
                        fill="white"
                      />
                      <path
                        d="M74.3173 98.6635C74.6664 99.1996 74.8674 99.8682 74.996 100.492C75.1472 101.226 75.1137 101.965 74.7919 102.651C74.6859 102.877 75.0217 103.075 75.1285 102.847C75.4581 102.144 75.536 101.408 75.4184 100.644C75.3038 99.9041 75.0646 99.0976 74.654 98.4664C74.5176 98.2575 74.1802 98.4524 74.3173 98.6635Z"
                        fill="white"
                      />
                      <path
                        d="M75.5542 98.2908C75.9438 98.8519 76.1823 99.5524 76.3381 100.216C76.5142 100.965 76.508 101.734 76.201 102.45C76.1036 102.678 76.4387 102.877 76.5376 102.646C76.8524 101.912 76.9124 101.151 76.7675 100.368C76.6249 99.5937 76.342 98.7443 75.8901 98.0945C75.749 97.8903 75.4109 98.0843 75.5542 98.2908Z"
                        fill="white"
                      />
                      <path
                        d="M113.011 93.9487C111.214 95.8422 108.587 96.7149 106.126 97.3562C100.383 98.8523 94.6112 100.322 88.8106 101.577C84.6005 102.487 87.3987 101.827 85.7264 102.233L83.582 94.9017C83.582 94.9017 88.1584 93.1983 92.1286 91.8198C96.9644 90.1406 101.853 88.5362 106.696 86.8242C108.22 86.2858 110.211 85.7738 111.823 86.1518C112.735 86.3653 113.589 86.917 114.047 87.7336C115.164 89.7237 114.581 92.2406 113.087 93.8669C113.062 93.8949 113.037 93.9222 113.011 93.9487Z"
                        fill="#254654"
                      />
                      <path
                        d="M83.3125 94.4566L85.4086 102.762L88.6837 102.056L86.4052 93.248L83.3125 94.4566Z"
                        fill="#2E5268"
                      />
                      <path
                        d="M107.059 99.5848C107.165 99.8163 107.226 100.074 107.246 100.344C107.34 101.638 106.871 103.241 105.688 103.927C104.573 104.573 103.201 103.789 102.154 103.38C101.103 102.968 100.057 102.544 98.9859 102.184C96.6085 101.385 94.1469 100.88 91.6978 100.354C90.6467 100.128 89.3999 100.055 88.5576 99.3277C87.8617 98.7269 87.4667 97.7669 87.5999 96.8505C87.7737 95.6622 88.8202 94.6586 90.0147 94.5347C90.4667 94.4879 90.9241 94.5549 91.3659 94.6594C92.7989 94.9983 94.1314 95.7035 95.5075 96.2248C96.9584 96.7742 98.4311 97.2775 99.9444 97.6274C101.358 97.9547 102.811 98.0459 104.239 98.2913C104.919 98.4082 105.629 98.4799 106.262 98.7752C106.638 98.9513 106.899 99.2381 107.059 99.5848Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M98.8578 97.2793L97.3398 101.797L100.923 102.901L102.433 101.926L103.18 97.9635L98.8578 97.2793Z"
                        fill="white"
                      />
                      <path
                        d="M106.158 105.672C106.256 105.69 106.354 105.706 106.452 105.721C107.712 105.914 108.97 105.407 109.888 104.552C110.569 103.917 111.081 103.094 111.335 102.197C111.66 101.048 111.516 99.8801 110.782 98.9123C110.38 98.3817 109.828 98.0856 109.231 97.823C108.324 97.4232 107.376 97.2799 106.391 97.2939C105.342 97.3095 104.301 97.2549 103.253 97.3593C102.606 97.4139 101.952 97.4692 101.332 97.6632C101.407 97.6391 101.796 97.8674 101.87 97.9134C102.028 98.0123 102.105 98.0607 102.098 98.2734C102.089 98.5765 101.777 98.864 101.622 99.1095C101.367 99.5108 101.163 99.9565 101.117 100.429C101.036 101.284 101.369 102.604 100.004 102.673C100.073 102.67 100.869 103.273 100.958 103.345C101.2 103.542 101.873 103.94 102.148 104.09C103.695 104.943 104.551 105.379 106.158 105.672Z"
                        fill="white"
                      />
                      <path
                        d="M105.221 105.233C105.318 105.251 105.416 105.267 105.514 105.282C106.774 105.474 108.032 104.968 108.95 104.113C109.632 103.478 110.143 102.654 110.397 101.757C110.722 100.609 110.579 99.4399 109.845 98.4729C109.443 97.9422 108.891 97.6461 108.294 97.3835C107.386 96.9838 106.439 96.8404 105.454 96.8544C104.405 96.87 103.363 96.8155 102.316 96.9199C101.668 96.9744 101.014 97.0298 100.394 97.2238C100.469 97.1996 100.859 97.4279 100.933 97.4739C101.091 97.5729 101.167 97.6212 101.161 97.8339C101.152 98.137 100.839 98.4246 100.684 98.67C100.429 99.0713 100.225 99.5171 100.18 99.99C100.099 100.844 100.432 102.165 99.0664 102.233C99.1358 102.23 99.9313 102.833 100.02 102.905C100.263 103.102 100.936 103.5 101.21 103.651C102.758 104.503 103.613 104.94 105.221 105.233Z"
                        fill="#EA584A"
                      />
                      <path
                        d="M104.524 102.32C103.691 102.394 102.847 102.357 102.024 102.211C101.475 102.113 100.916 102.079 100.682 101.484C100.608 101.296 100.577 101.094 100.55 100.894C100.439 100.092 100.628 99.2014 101.22 98.6162C101.471 98.3669 101.809 98.1752 102.163 98.1993C102.297 98.2087 102.427 98.2476 102.555 98.2874C102.893 98.391 103.231 98.4939 103.569 98.5975C103.948 98.7128 104.327 98.8289 104.693 98.9817C104.983 99.1032 105.269 99.2513 105.494 99.4718C105.757 99.7305 105.88 100.027 105.828 100.386C105.771 100.778 105.827 101.16 105.674 101.54C105.554 101.834 105.334 102.096 105.039 102.216C104.876 102.283 104.699 102.304 104.524 102.32Z"
                        fill="#CF3A43"
                      />
                      <path
                        d="M105.489 98.8801C104.906 99.957 104.588 101.472 105.13 102.616C105.238 102.842 105.573 102.645 105.467 102.419C104.992 101.417 105.318 100.016 105.826 99.0773C105.945 98.856 105.608 98.6588 105.489 98.8801Z"
                        fill="white"
                      />
                      <path
                        d="M104.164 98.4667C103.754 99.0979 103.514 99.9044 103.4 100.644C103.281 101.408 103.359 102.144 103.69 102.848C103.796 103.074 104.132 102.877 104.026 102.651C103.704 101.965 103.671 101.228 103.822 100.492C103.951 99.8685 104.153 99.2 104.501 98.6639C104.638 98.4527 104.301 98.2571 104.164 98.4667Z"
                        fill="white"
                      />
                      <path
                        d="M102.921 98.0928C102.469 98.7427 102.187 99.5921 102.043 100.367C101.899 101.15 101.958 101.911 102.273 102.644C102.371 102.874 102.707 102.675 102.61 102.448C102.303 101.732 102.296 100.964 102.473 100.215C102.629 99.5508 102.866 98.8518 103.256 98.2892C103.401 98.0827 103.062 97.8879 102.921 98.0928Z"
                        fill="white"
                      />
                      <path
                        d="M65.8027 93.9487C67.5996 95.8422 70.2272 96.7149 72.688 97.3562C78.4309 98.8523 84.2026 100.322 90.0031 101.577C94.2133 102.487 91.4151 101.827 93.0873 102.233L95.2309 94.9017C95.2309 94.9017 90.6545 93.1983 86.6844 91.8198C81.8485 90.1406 76.9605 88.5362 72.1168 86.8242C70.5934 86.2858 68.6017 85.7738 66.9895 86.1518C66.0778 86.3653 65.2238 86.917 64.7656 87.7336C63.649 89.7237 64.2318 92.2406 65.7256 93.8669C65.7513 93.8949 65.777 93.9222 65.8027 93.9487Z"
                        fill="#2E5268"
                      />
                      <path
                        d="M95.504 94.4566L93.4079 102.762L90.1328 102.056L92.4113 93.248L95.504 94.4566Z"
                        fill="#456A7C"
                      />
                      <path
                        d="M6.66797 90.0703H37.8369V90.2519C37.8369 91.6724 36.686 92.8233 35.2655 92.8233H9.23941C7.81888 92.8233 6.66797 91.6724 6.66797 90.2519V90.0703Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M7.9575 131.821C7.29282 131.821 6.79645 131.209 6.93282 130.559L14.8497 92.8223H18.6679L8.97205 131.032C8.85438 131.495 8.43672 131.821 7.9575 131.821Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M36.7886 131.821C37.4532 131.821 37.9496 131.209 37.8132 130.559L29.8963 92.8223H26.0781L35.774 131.032C35.8917 131.495 36.3093 131.821 36.7886 131.821Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M28.0617 133.591C28.7264 133.591 29.2227 132.952 29.0864 132.272L25.2518 92.8223H21.4336L27.0471 132.766C27.1648 133.252 27.5825 133.591 28.0617 133.591Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M34.4057 115.125H10.168V116.658H34.4057V115.125Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M14.8498 92.8223L14.1875 95.9781H17.867L18.668 92.8223H14.8498Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M29.8963 92.8223L30.5579 95.9781H26.8784L26.0781 92.8223H29.8963Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M25.2518 92.8223L25.5588 95.9781H21.877L21.4336 92.8223H25.2518Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M21.4398 67.4121H19.918V89.4431H21.4398V67.4121Z"
                        fill="#061F34"
                      />
                      <path
                        d="M32.8135 68.7185H8.54297L9.0105 53.9023H32.3459L32.8135 68.7185Z"
                        fill="#EDDCD1"
                      />
                      <path
                        d="M28.9064 90.1066H12.4492C12.4492 88.7757 13.5277 87.6973 14.8586 87.6973H26.4971C27.828 87.6973 28.9064 88.7757 28.9064 90.1066Z"
                        fill="#061F34"
                      />
                      <path
                        d="M20.679 77.8594C22.0847 77.8594 23.2434 78.9635 23.3096 80.3685L23.6579 87.6971H17.6992L18.0475 80.3685C18.1145 78.9643 19.2725 77.8594 20.679 77.8594Z"
                        fill="#061F34"
                      />
                      <path
                        d="M15.627 77.1037C16.1891 77.1037 16.6447 76.6481 16.6447 76.086C16.6447 75.524 16.1891 75.0684 15.627 75.0684C15.065 75.0684 14.6094 75.524 14.6094 76.086C14.6094 76.6481 15.065 77.1037 15.627 77.1037Z"
                        fill="#061F34"
                      />
                      <path
                        d="M15.7455 68.7188H15.5117V75.2027H15.7455V68.7188Z"
                        fill="#061F34"
                      />
                      <path
                        opacity="0.5"
                        d="M32.3459 53.9023H30.549C29.7893 61.5154 23.0186 67.4725 14.7768 67.4725C12.5926 67.4725 10.5121 67.0541 8.61933 66.2975L8.54297 68.7185H32.8135L32.3459 53.9023Z"
                        fill="#E2D3C9"
                      />
                      <path
                        d="M31.9669 90.089H28.4448C27.498 90.089 26.7305 89.3214 26.7305 88.3747V80.1328H33.6812V88.3747C33.6812 89.3214 32.9136 90.089 31.9669 90.089Z"
                        fill="#FFC73C"
                      />
                      <path
                        d="M34.1664 82.3848C32.4996 82.3848 31.1484 83.7554 31.1484 85.4471C31.1484 87.138 32.4996 88.5095 34.1664 88.5095C35.8331 88.5095 37.1843 87.1388 37.1843 85.4471C37.1843 83.7562 35.8331 82.3848 34.1664 82.3848ZM34.1664 87.4178C33.0942 87.4178 32.2245 86.5357 32.2245 85.4479C32.2245 84.3601 33.0942 83.478 34.1664 83.478C35.2386 83.478 36.1082 84.3601 36.1082 85.4479C36.1082 86.5357 35.2394 87.4178 34.1664 87.4178Z"
                        fill="#FFC73C"
                      />
                      <path
                        opacity="0.2"
                        d="M27.7662 86.3093C27.5597 86.3093 27.3906 86.1402 27.3906 85.9337V81.0885C27.3906 80.882 27.5597 80.7129 27.7662 80.7129C27.9727 80.7129 28.1418 80.882 28.1418 81.0885V85.9337C28.1418 86.1402 27.9727 86.3093 27.7662 86.3093Z"
                        fill="white"
                      />
                      <path
                        d="M32.0728 80.1328V88.3287C32.0728 89.3012 31.285 90.089 30.3125 90.089H31.9177C32.8902 90.089 33.678 89.3012 33.678 88.3287V80.1328H32.0728Z"
                        fill="#FFC73C"
                      />
                      <path
                        d="M45.026 61.5664H65.2617V35.0884H45.026V61.5664Z"
                        fill="white"
                      />
                      <path
                        d="M46.3496 60.2207H63.9414V36.4325H46.3496V60.2207Z"
                        fill="white"
                      />
                      <path
                        d="M63.9441 36.4316V60.2198H46.3516L63.9441 36.4316Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M140.238 93.418H114.227V98.2476H140.238V93.418Z"
                        fill="#FFC73C"
                      />
                      <path
                        d="M123.92 94.3496H115.641V97.2476H123.92V94.3496Z"
                        fill="#FFF9E1"
                      />
                      <path
                        d="M139.014 95.7982C139.014 96.5984 138.365 97.2468 137.566 97.2468C136.765 97.2468 136.117 96.5984 136.117 95.7982C136.117 94.9979 136.766 94.3496 137.566 94.3496C138.365 94.3488 139.014 94.9979 139.014 95.7982Z"
                        fill="#FFFCDB"
                      />
                      <path
                        d="M138.755 95.7993C138.755 96.4569 138.222 96.9891 137.565 96.9891C136.907 96.9891 136.375 96.4561 136.375 95.7993C136.375 95.1416 136.908 94.6094 137.565 94.6094C138.222 94.6086 138.755 95.1416 138.755 95.7993Z"
                        fill="#324751"
                      />
                      <path
                        d="M116.833 94.9023H116.496V96.8083H116.833V94.9023Z"
                        fill="#777068"
                      />
                      <path
                        d="M117.809 94.9023H117.473V96.8083H117.809V94.9023Z"
                        fill="#777068"
                      />
                      <path
                        d="M118.786 94.9023H118.449V96.8083H118.786V94.9023Z"
                        fill="#777068"
                      />
                      <path
                        d="M141.378 88.5879H115.367V93.4175H141.378V88.5879Z"
                        fill="#3DA0A5"
                      />
                      <path
                        d="M125.061 89.5195H116.781V92.4175H125.061V89.5195Z"
                        fill="#FFF9E1"
                      />
                      <path
                        d="M140.159 90.9681C140.159 91.7684 139.51 92.4167 138.71 92.4167C137.91 92.4167 137.262 91.7684 137.262 90.9681C137.262 90.1678 137.911 89.5195 138.71 89.5195C139.51 89.5188 140.159 90.1678 140.159 90.9681Z"
                        fill="#79D2F3"
                      />
                      <path
                        d="M139.895 90.9692C139.895 91.6268 139.362 92.1591 138.706 92.1591C138.048 92.1591 137.516 91.6261 137.516 90.9692C137.516 90.3115 138.049 89.7793 138.706 89.7793C139.362 89.7785 139.895 90.3115 139.895 90.9692Z"
                        fill="#324751"
                      />
                      <path
                        d="M117.973 90.0723H117.637V91.9783H117.973V90.0723Z"
                        fill="#777068"
                      />
                      <path
                        d="M118.95 90.0723H118.613V91.9783H118.95V90.0723Z"
                        fill="#777068"
                      />
                      <path
                        d="M119.926 90.0723H119.59V91.9783H119.926V90.0723Z"
                        fill="#777068"
                      />
                      <path
                        d="M139.997 88.5731H116.602V86.0204L119.525 85.4687L116.602 85.1235V79.7422H135.431L140.938 80.6843L140.591 83.3297L137.831 83.6056L140.591 84.158L139.997 88.5731Z"
                        fill="#F3F7F8"
                      />
                      <path
                        d="M118.883 82.3617C120.082 82.297 121.281 82.2666 122.48 82.2417C123.68 82.216 124.879 82.2183 126.078 82.2051C127.277 82.2175 128.477 82.216 129.676 82.2409L131.475 82.2846C132.075 82.3103 132.674 82.3259 133.274 82.3617C132.674 82.3975 132.075 82.4124 131.475 82.4388L129.676 82.4825C128.477 82.5074 127.277 82.5059 126.078 82.5183C124.879 82.5051 123.68 82.5074 122.48 82.4817C121.281 82.4575 120.082 82.4272 118.883 82.3617Z"
                        fill="#D1D1D3"
                      />
                      <path
                        d="M122.824 86.3051C124.023 86.2404 125.223 86.21 126.422 86.1851C127.621 86.1593 128.82 86.1617 130.02 86.1484C131.219 86.1609 132.418 86.1593 133.617 86.1843L135.416 86.2279C136.016 86.2536 136.616 86.2692 137.216 86.3051C136.616 86.3409 136.016 86.3557 135.416 86.3822L133.617 86.4258C132.418 86.4508 131.219 86.45 130.02 86.4617C128.82 86.4484 127.621 86.4508 126.422 86.4251C125.223 86.4001 124.023 86.3697 122.824 86.3051Z"
                        fill="#D1D1D3"
                      />
                      <path
                        d="M116.602 79.7422H139.691L140.938 80.6843L116.602 79.7422Z"
                        fill="#D1D1D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="landing__hotdeals--container--wrap">
                <div className="hotdeals">
                  <div className="hotdeals__top">
                    <div className="hotdeals__top__before">
                      <h1>Gigs</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                    </div>
                    <div className="hotdeals__top__after">
                      <Link to="/" className="see">
                        See more
                      </Link>
                    </div>
                  </div>
                  <div className="hotdeals__bottom">
                    <div className="hotdeals__bottom-wrapper">
                      <DealList />
                      <DealList />
                      <DealList />
                      <DealList />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="landing__points">
            <div className="landing__points-wrapper">
              <div className="landing__points-wrapper-container">
                <div className="points">
                </div>
                <div className="skills">
                </div>
              </div>
            </div>
          </section>
          <section className="landing__hotdeals" >
            <div className="landing__hotdeals--container">
              <div className="landing__hotdeals--container--header" style={{background: '#E2F3ED'}}>
                <div className="after">
                  <h1>Facilisis egestas sollicitudin.</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vitae egestas purus, netus a, et, varius vitae. Magna
                    diam curabitur pellentesque ipsum accumsan. Ullamcorper in
                    suspendisse leo, est. Vitae fringilla vulputate et dolor.
                    Rutrum adipiscing enim, pellentesque ac viverra purus
                    dictum.
                  </p>
                </div>
                <div className="before">
                  <span>
                    <svg
                      width="202"
                      height="136"
                      viewBox="0 0 202 136"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M177.285 117.083C176.084 117.083 174.89 117.031 173.721 116.924L173.756 116.536C181.837 117.271 192.427 115.45 197.871 109.729C201.07 106.366 202.196 101.509 201.039 96.0541C200.15 91.8619 198.359 87.7608 195.859 84.1951C194.932 82.8727 193.764 81.6743 192.635 80.5156C191.023 78.8605 189.355 77.1493 188.335 75.029C186.966 72.1818 186.905 69.2223 188.15 65.983C189.235 63.1615 191.182 60.4692 192.9 58.0934C198.046 50.9767 195.128 41.6221 190.238 35.9416C187.693 32.9844 184.481 30.9078 181.374 28.8997C177.393 26.3267 173.276 23.6657 170.491 19.1228C170.074 18.4418 169.679 17.7272 169.297 17.0368C168.267 15.1706 167.2 13.2404 165.6 11.8301C160.922 7.70562 153.863 8.72718 147.634 9.62796C146.558 9.78381 145.541 9.9303 144.565 10.0464C143.013 10.2303 141.437 10.4274 139.912 10.6191C134.018 11.3586 127.924 12.1223 121.875 12.2547C116.406 12.374 110.652 12.2532 105.623 10.57C102.834 9.63653 100.279 8.08822 97.8083 6.59133C95.9257 5.45054 93.9784 4.2708 91.9517 3.37936C89.0436 2.10066 85.5963 0.804025 82.089 0.896753C74.9981 1.08143 66.5069 5.72093 62.7588 11.4584C61.4349 13.4851 60.3564 15.8158 59.3131 18.0701C56.9403 23.1982 54.4865 28.5016 48.9166 30.9421C45.0236 32.6478 40.6561 32.6961 36.4319 32.7429C35.9418 32.7483 35.4524 32.7538 34.9654 32.7616C31.1503 32.8239 18.4731 33.6569 15.5253 41.771C14.2934 45.1629 15.2417 48.9772 16.063 51.5518C16.1464 51.8128 16.2305 52.0762 16.3155 52.3412C17.5591 56.2264 18.9679 60.6298 19.324 64.8867C19.7347 69.7896 18.689 73.7691 16.1284 77.0519C15.3414 78.061 14.3939 78.9431 13.4767 79.7963C12.971 80.267 12.4482 80.7532 11.9611 81.2535C6.38502 86.9777 4.43462 93.5278 6.3219 100.196C8.1632 106.702 13.144 112.358 19.0108 114.604C23.3854 116.28 28.4308 116.617 33.6025 115.58L33.6789 115.962C28.4347 117.014 23.3144 116.67 18.8713 114.968C12.8939 112.679 7.82113 106.922 5.94709 100.302C4.94111 96.7468 4.98864 93.2271 6.08891 89.839C7.09645 86.7377 8.97827 83.7571 11.6822 80.9816C12.1762 80.4743 12.7022 79.9849 13.2118 79.5111C14.1173 78.668 15.0539 77.7969 15.8214 76.8127C21.4342 69.6158 18.5175 60.502 15.9445 52.4604C15.8596 52.1954 15.7754 51.9321 15.6921 51.671C14.8536 49.0427 13.8866 45.1427 15.1599 41.6393C16.3529 38.3549 19.1877 35.8777 23.5848 34.2756C27.8776 32.7117 32.5537 32.4125 34.9592 32.3735C35.447 32.3657 35.9371 32.3603 36.428 32.3548C40.6132 32.3088 44.9403 32.2605 48.7608 30.5868C54.1951 28.2055 56.6177 22.9706 58.9601 17.908C60.0089 15.6412 61.0936 13.2973 62.4331 11.2464C64.3102 8.37263 67.3687 5.69366 71.0458 3.70118C74.6786 1.73286 78.5965 0.599089 82.0789 0.508699C85.6664 0.414413 89.1612 1.72741 92.1083 3.02404C94.1592 3.9256 96.1166 5.11236 98.0101 6.25938C100.463 7.74536 102.999 9.28199 105.746 10.2023C110.718 11.8667 116.432 11.9859 121.866 11.8675C127.895 11.7358 133.98 10.9729 139.864 10.2342C141.39 10.0425 142.967 9.84537 144.52 9.66147C145.491 9.54614 146.505 9.39965 147.579 9.24459C150.588 8.809 154 8.31575 157.191 8.46692C160.876 8.64069 163.71 9.64588 165.859 11.5402C167.509 12.9958 168.592 14.9555 169.64 16.8506C170.019 17.5379 170.412 18.2485 170.825 18.9218C173.564 23.3891 177.642 26.0252 181.587 28.5748C184.717 30.5985 187.954 32.6899 190.535 35.6899C193.274 38.8715 195.129 42.7653 195.758 46.6528C196.464 51.0134 195.585 55.049 193.217 58.324C189.703 63.1841 185.72 68.6916 188.688 74.8623C189.68 76.9249 191.325 78.6127 192.916 80.246C194.055 81.4156 195.234 82.6257 196.179 83.9738C198.708 87.5824 200.522 91.7325 201.421 95.9762C201.98 98.6131 202.026 101.114 201.556 103.412C201.035 105.958 199.891 108.175 198.154 110.001C195.543 112.744 191.589 114.817 186.719 115.994C183.737 116.711 180.484 117.083 177.285 117.083Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M144.37 116.773C148.125 116.857 151.879 116.96 155.633 117.082C158.655 117.18 161.678 117.291 164.688 117.579C173.454 118.419 182.586 120.461 190.735 115.894C200.103 110.643 202.188 99.9164 197.192 90.8377C194.271 85.5288 188.286 79.9745 188.646 73.5132C188.962 67.8194 193.572 64.0113 195.113 58.7952C196.598 53.7731 197.412 48.5913 194.72 43.7873C192.446 39.7291 188.598 36.7681 184.513 34.5426C178.767 31.4117 173.058 28.9852 169.987 22.8355C167.082 17.0171 166.361 10.4093 160.195 6.83028C155.104 3.87546 148.996 3.05571 143.124 3.47026C134.155 4.10377 125.806 7.42405 116.778 7.74664C106.853 8.10119 98.3381 1.19492 88.2573 0.598039C81.2887 0.18505 74.8562 2.37155 69.7928 7.15521C64.9717 11.709 63.8823 18.3246 59.0293 22.8348C53.5444 27.9325 45.47 28.7304 38.0331 29.6C31.5601 30.3566 25.2328 32.2088 20.7297 37.3042C16.9348 41.5985 17.2372 45.8429 17.7585 51.0793C18.3258 56.7747 21.2775 63.8492 20.0097 69.5025C18.8821 74.5301 13.7104 77.7701 11.3486 82.1501C1.44853 100.51 19.2382 117.426 36.7942 119.398C47.7758 120.631 59.0106 119.484 69.9992 118.867C82.2183 118.213 94.4412 117.296 106.659 116.747C119.2 116.16 131.824 116.491 144.37 116.773Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M129.16 47.6738H102.453V79.2083H129.16V47.6738Z"
                        fill="white"
                      />
                      <path
                        d="M160.551 47.6738H133.844V79.2083H160.551V47.6738Z"
                        fill="white"
                      />
                      <path
                        d="M129.16 11.4238H102.453V42.9583H129.16V11.4238Z"
                        fill="white"
                      />
                      <path
                        d="M160.551 11.4238H133.844V42.9583H160.551V11.4238Z"
                        fill="white"
                      />
                      <path
                        d="M97.8301 135.504C151.86 135.504 195.66 133.704 195.66 131.483C195.66 129.261 151.86 127.461 97.8301 127.461C43.8 127.461 0 129.261 0 131.483C0 133.704 43.8 135.504 97.8301 135.504Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M175.668 101.237C176.148 101.618 176.67 102.057 177.19 102.272C177.539 102.416 178.524 102.309 178.663 102.754C178.311 101.622 178.567 100.811 178.694 99.6962C178.825 98.539 178.724 97.2556 178.665 96.0915C178.537 93.5722 178.113 91.0608 177.293 88.6717C176.097 85.1847 174.028 81.9548 171.144 79.6584C169.082 78.0166 167.568 78.8208 166.285 80.8615C165.627 81.9096 164.254 81.6789 163.77 82.8556C163.187 84.2722 163.356 86.0512 163.781 87.4818C164.277 89.1533 165.207 90.6642 166.243 92.066C167.927 94.3429 169.911 96.3782 171.997 98.2866C173.003 99.2076 174.162 100.129 175.302 100.955C175.42 101.043 175.542 101.138 175.668 101.237Z"
                        fill="#438289"
                      />
                      <path
                        d="M166.469 81.5703C166.762 81.9701 167.052 82.3714 167.341 82.7742L168.214 83.9781L169.943 86.3984C171.087 88.0184 172.181 89.6805 173.146 91.4174C174.11 93.1551 174.979 94.941 175.801 96.7457L176.411 98.1023L177.007 99.4644C177.204 99.9195 177.397 100.376 177.588 100.834C177.782 101.29 177.972 101.748 178.161 102.206C177.734 101.31 177.329 100.407 176.903 99.512L176.276 98.1639L175.637 96.8221C175.204 95.9314 174.78 95.0361 174.328 94.1556C173.885 93.2704 173.422 92.3961 172.941 91.5319C171.985 89.7997 170.903 88.1431 169.795 86.5005L168.121 84.0443C167.567 83.2207 167.012 82.4002 166.469 81.5703Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M181.755 104.201C181.409 104.378 181.06 104.551 180.71 104.721C180.495 104.824 178.986 105.176 178.931 105.353C179.3 104.168 178.878 103.47 178.668 102.363C178.469 101.317 178.823 99.9859 179.018 98.9504C179.457 96.6119 180.197 94.3397 181.035 92.1166C181.992 89.5778 183.265 86.8911 185.697 85.6903C187.11 84.9929 188.327 86.4204 189.015 87.5176C189.353 88.0552 189.901 88.0934 190.396 88.3926C191.048 88.7862 191.135 89.1984 191.327 89.9542C191.736 91.5649 191.716 93.2854 191.26 94.8836C190.537 97.4176 188.771 99.5535 186.696 101.179C185.462 102.146 184.113 102.953 182.731 103.69C182.408 103.863 182.083 104.034 181.755 104.201Z"
                        fill="#438289"
                      />
                      <path
                        d="M188.869 88.0977C188.43 88.7764 187.98 89.4465 187.532 90.1182L186.174 92.1231C185.727 92.7948 185.273 93.4611 184.848 94.146C184.63 94.485 184.425 94.8309 184.215 95.1753C184.111 95.3476 184.014 95.5237 183.912 95.6974C183.813 95.8728 183.709 96.045 183.614 96.2226C183.222 96.9263 182.845 97.6385 182.483 98.3593C182.115 99.0761 181.768 99.8047 181.415 100.53L180.894 101.623L180.379 102.718C180.028 103.445 179.696 104.182 179.344 104.909C179.955 103.413 180.578 101.923 181.251 100.453C181.413 100.084 181.589 99.719 181.76 99.3528C181.929 98.9858 182.109 98.6234 182.286 98.2603C182.461 97.8956 182.65 97.538 182.835 97.1787C183.018 96.818 183.218 96.4657 183.411 96.1096C183.506 95.9312 183.612 95.759 183.713 95.5829C183.816 95.4083 183.915 95.2315 184.02 95.0592C184.233 94.7148 184.438 94.3657 184.662 94.0283C184.773 93.8592 184.881 93.6878 184.993 93.5203L185.332 93.0177C185.556 92.6811 185.793 92.353 186.023 92.021C186.957 90.701 187.914 89.4013 188.869 88.0977Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M185.133 82.1359C185.125 82.1367 185.117 82.1374 185.109 82.1382C183.492 82.2956 181.982 81.2639 180.312 81.6091C181.343 81.3956 180.581 78.56 180.615 77.96C180.7 76.4133 181.371 74.5112 181.747 72.9901C182.57 69.6582 184.36 66.5826 186.797 64.1732C188.759 62.2345 192.57 58.9353 195.533 60.1571C196.989 60.7571 197.805 61.9431 198.496 63.2701C199.349 64.9065 202.195 65.007 201.759 67.4046C201.359 69.6028 197.112 72.4696 195.507 74.0483C193.422 76.0985 191.334 78.1525 189.073 80.0055C187.971 80.907 186.606 81.9824 185.133 82.1359Z"
                        fill="#438289"
                      />
                      <path
                        d="M198.17 63.9277C197.396 64.5909 196.612 65.2423 195.829 65.8945L193.469 67.8387C191.902 69.14 190.364 70.4732 188.94 71.9249C187.515 73.3751 186.183 74.9171 184.872 76.4748L183.895 77.6491L182.93 78.8351C182.279 79.619 181.65 80.4208 181 81.207C181.303 80.7972 181.609 80.3889 181.916 79.9821C182.222 79.5746 182.528 79.167 182.84 78.7642L183.779 77.5572L184.732 76.361C186.013 74.7738 187.344 73.2231 188.773 71.7613C189.497 71.0405 190.232 70.3298 191.004 69.6605C191.77 68.9849 192.559 68.3374 193.355 67.7C194.154 67.0657 194.955 66.4353 195.757 65.8064L198.17 63.9277Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M176.519 82.1823C176.656 82.2789 176.79 82.3786 176.921 82.4815C177.624 83.0371 178.038 83.3947 178.919 83.7298C179.549 83.9698 181.115 84.4381 181.404 85.1277C180.86 83.8295 181.021 82.3771 181.106 80.9978C181.446 75.4942 179.106 70.1432 175.586 66.0141C172.929 62.8972 169.509 59.2668 165.629 57.745C165.143 57.5549 164.617 57.4053 164.105 57.5081C163.213 57.6881 162.88 58.4463 162.497 59.1733C161.708 60.6741 159.547 60.9944 159.094 62.5489C158.904 63.2019 158.979 63.9032 159.124 64.5679C159.637 66.9118 160.565 68.9822 162.068 70.8757C164.702 74.1968 167.955 77.0191 171.485 79.3521C173.047 80.383 174.989 81.1061 176.519 82.1823Z"
                        fill="#438289"
                      />
                      <path
                        d="M162.414 60.7969L165.034 63.4977C165.905 64.4 166.775 65.3047 167.64 66.2125C169.367 68.0328 171.035 69.9177 172.56 71.9172C173.313 72.9224 174.046 73.9439 174.748 74.9842C175.099 75.5047 175.455 76.0221 175.794 76.5505C176.135 77.0772 176.483 77.6001 176.813 78.1338L177.81 79.7305L178.79 81.3372C179.116 81.8733 179.435 82.4133 179.754 82.9533C180.074 83.4926 180.392 84.0333 180.708 84.5749C180.029 83.5198 179.374 82.45 178.693 81.3972L177.685 79.8092L176.662 78.2312C175.97 77.1855 175.289 76.1336 174.574 75.105C173.867 74.071 173.13 73.0572 172.375 72.059C172.189 71.8073 171.992 71.5642 171.801 71.3164L171.512 70.9463C171.416 70.8224 171.319 70.6993 171.219 70.5793C170.82 70.0961 170.428 69.6083 170.015 69.1377C169.205 68.1824 168.351 67.2652 167.51 66.3356L164.952 63.5771C164.102 62.6522 163.253 61.7296 162.414 60.7969Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M178.76 111.195C178.316 107.672 177.856 104.03 178.479 100.423C178.645 99.4609 178.89 98.5064 179.126 97.583C179.478 96.2061 179.843 94.7825 179.933 93.3651C179.99 92.4783 179.943 91.5526 179.897 90.6573C179.813 89.038 179.728 87.3643 180.231 85.7622C180.281 85.6024 180.337 85.4427 180.391 85.2884C180.6 84.6908 180.797 84.1266 180.669 83.6162C180.612 83.3902 180.487 83.165 180.355 82.9258C180.296 82.8183 180.234 82.7076 180.176 82.5923C179.404 81.0533 179.462 79.1255 180.353 76.6975C180.514 76.2572 180.692 75.8154 180.865 75.3891C181.407 74.045 181.918 72.7756 182.016 71.4182C182.189 68.9863 180.972 66.633 179.818 64.6187L180.629 64.1543C181.852 66.2886 183.14 68.7915 182.947 71.4852C182.84 72.9899 182.277 74.3878 181.731 75.7398C181.562 76.1598 181.387 76.5946 181.23 77.0209C180.433 79.1933 180.362 80.8788 181.011 82.1746C181.06 82.272 181.114 82.3694 181.172 82.4731C181.327 82.7544 181.489 83.0443 181.575 83.3902C181.771 84.1726 181.507 84.93 181.273 85.5985C181.219 85.7528 181.168 85.8985 181.123 86.0443C180.669 87.4858 180.747 89.0038 180.83 90.6113C180.877 91.5331 180.926 92.4861 180.866 93.4259C180.77 94.9305 180.395 96.3978 180.032 97.816C179.8 98.7215 179.56 99.6581 179.4 100.583C178.801 104.052 179.252 107.625 179.688 111.079L178.76 111.195Z"
                        fill="#438289"
                      />
                      <path
                        d="M185.669 68.2079C184.493 69.0339 183.285 69.9027 182.583 71.0575C182.885 69.6697 182.517 68.1417 182.485 66.7344C182.447 65.105 182.454 63.4663 182.741 61.8572C183.022 60.2816 183.562 58.766 184.1 57.259C185.076 54.5239 186.072 51.7507 187.755 49.3834C188.391 48.4888 189.212 47.5865 190.26 47.1821C191.648 46.6468 191.998 47.2725 192.684 48.4203C193.047 49.0281 193.53 48.9252 194.074 49.2018C194.749 49.5447 194.728 49.8712 194.846 50.6364C195.12 52.4044 194.917 54.199 194.392 55.9024C193.77 57.9253 192.736 59.7962 191.632 61.6032C190.43 63.5715 189.092 65.5289 187.298 67.0095C186.802 67.4162 186.24 67.8074 185.669 68.2079Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M192.545 49.1406C192.097 50.011 191.637 50.8736 191.179 51.7386L189.791 54.3232C188.875 56.05 187.978 57.7853 187.202 59.5783C187.009 60.0264 186.809 60.4721 186.626 60.9248L186.347 61.602C186.253 61.8272 186.167 62.0563 186.076 62.2822C185.895 62.7358 185.713 63.1893 185.541 63.6467L185.278 64.3308C185.189 64.5584 185.102 64.7867 185.017 65.0158L184.501 66.3888L183.996 67.7656C183.65 68.6805 183.324 69.6031 182.977 70.5179C183.125 70.0519 183.275 69.5859 183.428 69.1215C183.58 68.6563 183.731 68.1911 183.887 67.7275L184.362 66.3389L184.848 64.9542C185.504 63.1106 186.203 61.2802 186.988 59.4833C187.772 57.6864 188.678 55.9448 189.633 54.2368L191.08 51.6825L191.811 50.4108C192.054 49.9876 192.298 49.5637 192.545 49.1406Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M175.635 70.049C176.44 70.2454 177.239 70.4924 177.886 70.9817C179.034 71.849 179.761 73.6147 180.61 74.7758C180.86 75.1178 181.114 75.4646 181.44 75.7366C181.508 73.9178 181.364 72.4038 180.743 70.695C180.154 69.0718 179.367 67.5305 178.583 65.9955C176.445 61.8134 171.373 59.6931 166.83 60.8401C163.422 61.6996 166.012 64.9614 167.631 66.3298C168.85 67.3591 170.285 68.0986 171.735 68.7633C172.521 69.1233 173.319 69.4653 174.153 69.6937C174.627 69.823 175.132 69.9259 175.635 70.049Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M180.781 74.0645C180.383 73.3554 180.074 72.5988 179.796 71.8343C179.66 71.451 179.534 71.0637 179.412 70.6764C179.296 70.2891 179.14 69.9221 178.95 69.5676C178.569 68.8624 178.079 68.2164 177.558 67.6C177.04 66.9868 176.448 66.4359 175.799 65.9652C175.149 65.4946 174.447 65.0948 173.704 64.7847C173.334 64.6265 172.956 64.4956 172.569 64.3663C172.184 64.2369 171.8 64.1044 171.417 63.9712L169.115 63.174C168.351 62.9005 167.583 62.634 166.82 62.3535C167.6 62.5834 168.374 62.8281 169.151 63.0649L171.474 63.7998C171.861 63.9221 172.248 64.0452 172.634 64.1707C173.019 64.2938 173.411 64.4231 173.79 64.579C174.549 64.8891 175.269 65.2959 175.936 65.7743C176.598 66.2598 177.203 66.8247 177.727 67.4567C177.987 67.7722 178.238 68.0941 178.473 68.4299C178.591 68.5974 178.703 68.7689 178.81 68.9442C178.916 69.1203 179.016 69.2995 179.109 69.4834C179.293 69.8504 179.445 70.2377 179.552 70.632C179.663 71.0224 179.78 71.4104 179.903 71.7962C180.024 72.1827 180.156 72.566 180.3 72.9447C180.447 73.325 180.606 73.6982 180.781 74.0645Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M187.971 96.301C187.473 96.2714 186.974 96.2605 186.475 96.2675C184.453 96.2971 182.806 96.7678 180.912 97.3499C180.506 97.4745 180.096 97.6 179.672 97.6234C180.705 96.1249 181.727 94.9982 183.245 94C185.99 92.1961 188.977 90.9649 192.319 91.1324C194.495 91.2415 196.647 91.9397 198.457 93.1561C199.743 94.0202 202.05 95.8888 199.836 97.0584C198.432 97.8002 196.849 98.126 195.27 97.868C194.346 97.7169 193.463 97.3834 192.566 97.1137C191.074 96.6649 189.528 96.3937 187.971 96.301Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M181.199 96.6789C181.558 96.4896 181.91 96.2862 182.253 96.0704C182.595 95.8529 182.93 95.6246 183.258 95.387C183.588 95.1516 183.913 94.9101 184.236 94.6639C184.557 94.4114 184.911 94.1916 185.278 94.0085C185.462 93.9174 185.65 93.8332 185.84 93.7553C186.031 93.6797 186.224 93.6088 186.418 93.5449C186.807 93.4163 187.202 93.308 187.598 93.2106C188.396 93.0174 189.219 92.927 190.04 92.934C190.861 92.9488 191.681 93.0532 192.475 93.2597C192.872 93.361 193.264 93.4911 193.646 93.6236C194.031 93.7537 194.414 93.8862 194.797 94.0202L197.099 94.8205C197.863 95.0955 198.63 95.3628 199.392 95.6441C198.613 95.4127 197.839 95.1672 197.063 94.9296L194.741 94.1916C194.354 94.0693 193.968 93.9454 193.582 93.8192C193.195 93.6914 192.814 93.5706 192.422 93.4755C191.642 93.28 190.841 93.1802 190.038 93.1685C189.235 93.1576 188.432 93.2449 187.65 93.4264C186.863 93.6088 186.086 93.834 185.357 94.1706C184.993 94.3413 184.648 94.5423 184.325 94.7831C183.995 95.0207 183.663 95.2561 183.324 95.4813C182.642 95.927 181.942 96.3478 181.199 96.6789Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M184.491 89.9789C184.125 90.2508 183.76 90.5228 183.396 90.7986C182.656 91.3597 180.291 92.3181 180.069 93.2096C180.26 92.4428 180.012 91.7898 179.884 91.0464C179.763 90.3443 179.861 89.7724 179.965 89.0578C180.16 87.7254 180.36 86.3165 180.596 85.0378C181.005 82.8233 181.753 80.6874 182.497 78.5617C183.23 76.4671 183.97 74.3593 185.082 72.4385C186.203 70.5045 187.743 69.0497 189.449 67.651C191.223 66.197 192.987 67.8738 194.194 69.225C195.084 70.2209 196.251 69.9154 197.379 70.5115C198.975 71.3554 198.04 74.0328 197.681 75.3061C197.126 77.2806 195.866 78.9957 194.567 80.5472C192.386 83.1529 189.974 85.5646 187.37 87.748C186.437 88.5326 185.464 89.2542 184.491 89.9789Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M194.029 70.002C193.393 70.9004 192.744 71.7895 192.097 72.6801L190.141 75.3396C188.845 77.117 187.588 78.9217 186.483 80.8199C185.376 82.7166 184.392 84.6849 183.434 86.6641L182.724 88.154L182.031 89.6517C181.559 90.6459 181.114 91.6527 180.645 92.6485C180.854 92.1397 181.066 91.6317 181.28 91.1244L181.601 90.3631L181.926 89.6041L182.59 88.0916L183.271 86.587C184.192 84.5867 185.173 82.6098 186.281 80.7007C186.848 79.7539 187.428 78.815 188.058 77.9095C188.68 76.9986 189.334 76.1111 189.998 75.2321C190.664 74.3555 191.335 73.4828 192.006 72.6108L194.029 70.002Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M176.753 63.8422C176.911 63.9707 177.071 64.097 177.233 64.2209C178.711 65.3469 180.387 66.2601 181.579 67.6853C180.805 66.7604 182.795 63.4596 183.077 62.5627C183.667 60.6777 184.019 58.9479 183.864 56.9468C183.398 50.9063 180.427 45.3481 177.046 40.3213C176.451 39.4369 175.815 38.5369 174.906 37.9797C173.547 37.1475 172.318 37.4717 170.983 38.2135C170.36 38.5595 169.762 38.9296 169.078 39.147C168.094 39.4595 167.028 39.3558 166.055 39.6995C164.134 40.3782 164.539 44.1964 164.778 45.7299C165.233 48.645 166.582 51.4011 168.366 53.7302C171 57.1673 173.354 61.0681 176.753 63.8422Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M169.863 39.6816L171.676 42.917C172.277 43.997 172.877 45.0778 173.473 46.1617C174.659 48.331 175.766 50.5518 176.699 52.8482L177.032 53.7155C177.144 54.0046 177.256 54.2929 177.357 54.5859L177.668 55.4609C177.719 55.6067 177.773 55.7524 177.822 55.8989L177.968 56.3399C178.16 56.9282 178.363 57.5126 178.541 58.1056C178.723 58.6971 178.91 59.2861 179.079 59.8815L179.59 61.6643L180.081 63.4527L180.32 64.3488L180.553 65.2464C180.709 65.8449 180.861 66.4433 181.012 67.0433C180.657 65.8589 180.33 64.6667 179.971 63.4838L179.449 61.7056L178.907 59.9337C178.534 58.7563 178.17 57.5758 177.767 56.4085L177.619 55.9698C177.57 55.8233 177.514 55.6791 177.463 55.5342L177.148 54.6638C177.046 54.3724 176.932 54.0856 176.82 53.7989L176.484 52.937C176.018 51.7955 175.533 50.6601 174.991 49.5513C174.73 48.9926 174.447 48.444 174.168 47.8923L173.316 46.2474L171.577 42.9731C171.001 41.8767 170.425 40.7827 169.863 39.6816Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M185.314 76.4447C184.812 76.7774 184.31 77.1094 183.809 77.4421C182.376 78.3912 181.444 79.0551 180.993 80.7974C180.368 80.0463 180.336 78.9686 179.723 78.2299C179.266 77.6782 178.355 77.3096 177.73 76.9504C175.961 75.9335 173.905 75.5501 172.144 74.5138C171.88 74.3587 171.597 74.1429 171.583 73.8366C171.567 73.4961 171.889 73.2475 172.183 73.0769C173.607 72.2517 174.474 71.8184 176.15 71.9166C177.876 72.0179 179.621 72.3312 181.339 71.9774C182.233 71.7935 183.081 71.4351 183.956 71.1756C185.195 70.8078 187.325 70.253 188.586 70.7829C189.619 71.2169 190.005 72.8922 189.259 73.7361C189.061 73.959 188.81 74.1265 188.561 74.2909C187.479 75.0094 186.396 75.727 185.314 76.4447Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M180.675 81.0781C180.656 80.4968 180.652 79.9178 180.66 79.3373C180.662 79.0474 180.673 78.7576 180.681 78.4677C180.692 78.1778 180.709 77.888 180.725 77.5981C180.746 77.3082 180.769 77.0183 180.797 76.7293C180.829 76.4394 180.863 76.1534 180.89 75.8682C180.914 75.583 180.927 75.2978 180.906 75.0126C180.889 74.7266 180.84 74.4422 180.771 74.1602C180.889 74.4259 180.97 74.7095 181.02 74.9994C181.069 75.29 181.082 75.5861 181.072 75.8791C181.067 76.1721 181.037 76.462 181.018 76.7495C180.996 77.0378 180.975 77.3254 180.958 77.6145L180.842 79.3467C180.8 79.9233 180.751 80.5015 180.675 81.0781Z"
                        fill="#438289"
                      />
                      <path
                        d="M174.786 97.5555C175.234 97.8804 175.697 98.1835 176.173 98.4601C177.474 99.2152 178.157 99.2549 178.592 100.933C179.067 100.364 179.093 99.6266 179.492 99.05C179.939 98.404 180.836 97.9677 181.535 97.6716C182.455 97.2827 183.428 97.0365 184.355 96.6664C184.917 96.4419 185.46 96.1723 185.979 95.8606C188.224 94.511 184.996 93.4653 183.758 93.4404C181.934 93.403 180.088 93.8884 178.301 93.5214C177.55 93.3671 176.837 93.0656 176.102 92.8474C175.054 92.5365 173.018 91.977 172.01 92.683C170.846 93.4988 171.874 94.9817 172.608 95.7032C173.283 96.3679 174.013 96.9944 174.786 97.5555Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M178.627 99.5743C178.555 99.0904 178.51 98.6042 178.473 98.1188C178.433 97.6333 178.405 97.1478 178.371 96.6639C178.345 96.1777 178.294 95.7 178.279 95.2052C178.273 94.959 178.285 94.7081 178.328 94.4642C178.373 94.2203 178.443 93.9818 178.547 93.7598C178.492 93.9982 178.454 94.2374 178.442 94.4774C178.426 94.7167 178.439 94.9551 178.46 95.1951C178.485 95.4343 178.514 95.6743 178.541 95.9182C178.566 96.1613 178.586 96.4052 178.604 96.6484C178.618 96.8923 178.631 97.1362 178.64 97.38C178.646 97.6239 178.654 97.8678 178.654 98.1117C178.658 98.598 178.651 99.0858 178.627 99.5743Z"
                        fill="#438289"
                      />
                      <path
                        d="M188.513 112.043H170.254L173.457 130.317H185.31L188.513 112.043Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M190.356 112.045H168.327L168.016 108.189H190.746L190.356 112.045Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M186.644 112.043H170.254L170.416 112.966H186.574C186.469 113.976 186.269 115 185.965 116.023C183.989 122.686 178.345 127.025 172.79 126.511L173.457 130.317H185.31L188.513 112.044H186.644V112.043Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M170.5 127.854H188.866V128.035C188.866 129.456 187.715 130.607 186.295 130.607H173.071C171.651 130.607 170.5 129.456 170.5 128.035V127.854Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M154.634 121.016L154.112 128.947H151.772L151.07 121.016H154.634Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M164.58 122.117L163.94 131.821H161.077L160.219 122.117H164.58Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M164.436 124.294H160.411L160.219 122.117H164.58L164.436 124.294Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M154.561 122.117L154.418 124.294H151.36L151.168 122.117H154.561Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M50.8164 121.016L51.34 128.947H53.6793L54.3814 121.016H50.8164Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M40.875 122.117L41.5155 131.821H44.3776L45.2363 122.117H40.875Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M150.28 91.4805H54.9805V121.695H150.28V91.4805Z"
                        fill="#DEBFA8"
                      />
                      <path
                        d="M54.9645 80.3066L38.2969 86.0908L40.2558 113.494L62.5978 112.504L62.5487 98.4805C62.5487 98.4805 63.6941 81.8807 54.9645 80.3066Z"
                        fill="#F9ECE1"
                      />
                      <path
                        d="M102.756 112.037H50.4453V122.119H102.756V112.037Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M38.2969 86.0895L40.7982 122.119H55.1796C55.1796 122.119 53.7855 92.6833 47.9499 89.035C42.1143 85.3867 38.2969 86.0895 38.2969 86.0895Z"
                        fill="#DEBFA8"
                      />
                      <path
                        d="M54.9834 121.697C55.0519 121.695 55.1229 121.71 55.1829 121.747L55.1719 121.753C54.8408 118.129 54.4667 114.512 54.0195 110.906L53.8441 109.555L53.6641 108.204C53.5402 107.305 53.4086 106.407 53.2675 105.511C52.9901 103.717 52.6831 101.928 52.313 100.155C51.9522 98.3799 51.5306 96.6173 50.9922 94.896C50.8605 94.465 50.714 94.0388 50.5636 93.6149C50.4062 93.1941 50.2472 92.7733 50.0641 92.365C49.8833 91.9559 49.6901 91.5523 49.4711 91.1666C49.2545 90.7801 49.0168 90.4053 48.7433 90.0648C48.4691 89.7235 48.162 89.4227 47.7989 89.1959C47.4148 88.9598 47.0345 88.7159 46.641 88.4962C45.8594 88.0466 45.0537 87.6351 44.2207 87.2884C43.3901 86.9362 42.5337 86.6393 41.6563 86.4203C40.7789 86.2045 39.8797 86.0533 38.9688 86.0385C39.423 86.0136 39.8804 86.026 40.3355 86.0603C40.7906 86.1008 41.2433 86.1671 41.6929 86.252C41.9173 86.2949 42.141 86.3455 42.3638 86.3969C42.5844 86.4562 42.808 86.5092 43.0277 86.5746C43.2459 86.6424 43.468 86.7032 43.6838 86.778C43.8997 86.8536 44.1186 86.9237 44.3329 87.0047C45.1932 87.3227 46.0254 87.7123 46.8374 88.1393C47.2472 88.3466 47.6392 88.5842 48.0358 88.8141C48.0849 88.8406 48.1355 88.8772 48.1862 88.9107L48.3374 89.0136C48.434 89.0861 48.5252 89.1655 48.6187 89.2411L48.8774 89.4897L49.1158 89.7539C49.7236 90.4801 50.1763 91.3014 50.5605 92.1398C50.7569 92.5583 50.9259 92.9869 51.0943 93.4154C51.2556 93.8463 51.4114 94.278 51.5524 94.7144C52.1197 96.4599 52.5467 98.2404 52.9223 100.028C53.2847 101.818 53.5893 103.618 53.8504 105.422C53.9782 106.325 54.0958 107.228 54.2057 108.133L54.3639 109.49L54.5041 110.849C54.593 111.755 54.6787 112.662 54.7519 113.57C54.8236 114.478 54.8899 115.386 54.9499 116.294C55.0605 118.111 55.1525 119.93 55.1852 121.75V121.764L55.1743 121.757C55.1205 121.72 55.0519 121.7 54.9834 121.697Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M100.265 97.5861H61.7513C60.3744 97.5861 59.2578 96.4695 59.2578 95.0926V75.5013C59.2578 74.1244 60.3744 73.0078 61.7513 73.0078H100.265C101.642 73.0078 102.759 74.1244 102.759 75.5013V95.0926C102.758 96.4695 101.642 97.5861 100.265 97.5861Z"
                        fill="#EBD6C5"
                      />
                      <path
                        d="M101.538 112.791H55.564C54.8923 112.791 54.3477 112.246 54.3477 111.574L54.4817 102.759L102.755 102.416V111.574C102.755 112.246 102.211 112.791 101.538 112.791Z"
                        fill="#E5CAB6"
                      />
                      <path
                        opacity="0.3"
                        d="M81.0083 96.0095C71.0818 96.0095 62.6069 91.5944 59.2578 85.377V95.2957C59.2578 96.5604 60.2833 97.5851 61.5472 97.5851H100.469C101.733 97.5851 102.758 96.5596 102.758 95.2957V85.377C99.4089 91.5944 90.9349 96.0095 81.0083 96.0095Z"
                        fill="#E5CAB6"
                      />
                      <path
                        d="M101.711 103.565H55.5078C54.547 103.565 54.0958 102.426 54.8135 101.814L59.478 97.8372C59.6689 97.6744 59.9159 97.584 60.1722 97.584H101.711C102.288 97.584 102.756 98.0328 102.756 98.5853V102.562C102.755 103.116 102.288 103.565 101.711 103.565Z"
                        fill="#F2E0D3"
                      />
                      <path
                        opacity="0.5"
                        d="M101.538 111.166H55.564C54.9687 111.166 54.4739 110.737 54.3687 110.172L54.3477 111.573C54.3477 112.245 54.8923 112.789 55.564 112.789H101.538C102.21 112.789 102.755 112.245 102.755 111.573V109.949C102.755 110.621 102.211 111.166 101.538 111.166Z"
                        fill="#E5CAB6"
                      />
                      <path
                        d="M150.497 80.3066L167.165 86.0908L165.206 113.494L142.864 112.504L142.913 98.4805C142.913 98.4805 141.768 81.8807 150.497 80.3066Z"
                        fill="#F9ECE1"
                      />
                      <path
                        d="M102.701 122.117H155.012V112.036H102.701V122.117Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M167.168 86.0895L164.667 122.119H150.285C150.285 122.119 151.679 92.6833 157.515 89.035C163.351 85.3867 167.168 86.0895 167.168 86.0895Z"
                        fill="#DEBFA8"
                      />
                      <path
                        d="M150.476 121.695C150.407 121.698 150.339 121.717 150.284 121.757L150.273 121.765V121.751C150.306 119.93 150.399 118.112 150.509 116.294C150.569 115.386 150.635 114.478 150.707 113.57C150.78 112.662 150.866 111.756 150.954 110.849L151.095 109.49L151.253 108.133C151.363 107.228 151.48 106.324 151.608 105.422C151.869 103.617 152.174 101.818 152.536 100.028C152.912 98.2414 153.339 96.4608 153.906 94.7146C154.047 94.2782 154.203 93.8458 154.364 93.4156C154.533 92.987 154.702 92.5593 154.898 92.14C155.282 91.3016 155.735 90.4803 156.343 89.754L156.581 89.4899L156.84 89.2413C156.934 89.1649 157.025 89.0863 157.121 89.0138L157.272 88.9109C157.323 88.8774 157.374 88.8408 157.423 88.8143C157.819 88.5844 158.211 88.346 158.621 88.1395C159.432 87.7125 160.265 87.3229 161.126 87.0049C161.34 86.9239 161.559 86.8538 161.775 86.7782C161.991 86.7034 162.213 86.6434 162.431 86.5748C162.651 86.5101 162.873 86.4571 163.095 86.3971C163.318 86.3465 163.541 86.2951 163.766 86.2522C164.215 86.1673 164.668 86.1018 165.123 86.0605C165.579 86.0255 166.036 86.0138 166.49 86.0387C165.579 86.0535 164.68 86.2047 163.802 86.4205C162.924 86.6395 162.069 86.9364 161.238 87.2886C160.404 87.6353 159.599 88.0468 158.818 88.4964C158.424 88.7161 158.044 88.96 157.66 89.1961C157.297 89.4229 156.989 89.7244 156.715 90.065C156.442 90.4055 156.205 90.7795 155.987 91.1668C155.769 91.5525 155.575 91.9561 155.394 92.3652C155.211 92.7735 155.052 93.1943 154.895 93.6151C154.745 94.039 154.598 94.4645 154.466 94.8961C153.928 96.6175 153.506 98.3808 153.146 100.155C152.776 101.929 152.469 103.717 152.191 105.511C152.05 106.407 151.918 107.305 151.794 108.205L151.614 109.555L151.439 110.906C150.992 114.512 150.618 118.129 150.287 121.754L150.276 121.747C150.336 121.708 150.407 121.693 150.476 121.695Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M105.197 97.5861H143.711C145.087 97.5861 146.204 96.4695 146.204 95.0926V75.5013C146.204 74.1244 145.087 73.0078 143.711 73.0078H105.197C103.82 73.0078 102.703 74.1244 102.703 75.5013V95.0926C102.703 96.4695 103.82 97.5861 105.197 97.5861Z"
                        fill="#EBD6C5"
                      />
                      <path
                        d="M103.919 112.791H149.894C150.565 112.791 151.11 112.246 151.11 111.574L150.976 102.759L102.703 102.416V111.574C102.703 112.246 103.248 112.791 103.919 112.791Z"
                        fill="#E5CAB6"
                      />
                      <path
                        opacity="0.3"
                        d="M124.454 96.0095C134.38 96.0095 142.855 91.5944 146.204 85.377V95.2957C146.204 96.5604 145.179 97.5851 143.915 97.5851H104.992C103.728 97.5851 102.703 96.5596 102.703 95.2957V85.377C106.052 91.5944 114.526 96.0095 124.454 96.0095Z"
                        fill="#E5CAB6"
                      />
                      <path
                        d="M103.748 103.565H149.951C150.912 103.565 151.363 102.426 150.646 101.814L145.981 97.8372C145.79 97.6744 145.543 97.584 145.287 97.584H103.748C103.171 97.584 102.703 98.0328 102.703 98.5853V102.562C102.703 103.116 103.171 103.565 103.748 103.565Z"
                        fill="#F2E0D3"
                      />
                      <path
                        opacity="0.5"
                        d="M103.919 111.166H149.894C150.489 111.166 150.984 110.737 151.089 110.172L151.11 111.573C151.11 112.245 150.565 112.789 149.894 112.789H103.919C103.248 112.789 102.703 112.245 102.703 111.573V109.949C102.703 110.621 103.248 111.166 103.919 111.166Z"
                        fill="#E5CAB6"
                      />
                      <path
                        opacity="0.5"
                        d="M41.0192 124.294H45.0431L45.2363 122.117H40.875L41.0192 124.294Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M50.8867 122.117L51.0301 124.294H54.0878L54.2802 122.117H50.8867Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M49.8606 77.2213C50.8915 76.534 54.3278 77.2704 55.9479 77.3195C57.5679 77.3686 68.3671 75.6995 69.6926 75.6995C71.0181 75.6995 73.9144 74.374 74.3072 74.8649C74.6999 75.3558 74.3563 79.774 74.7981 80.6086C75.2399 81.4431 78.2345 90.4751 78.529 91.5551C78.8235 92.6351 81.6436 97.238 81.349 97.8762C81.0545 98.5144 74.7007 97.7165 69.9879 97.8326C66.0474 97.9292 61.9868 98.8697 61.2505 99.0661C60.5141 99.2624 58.4632 100.895 57.5686 100.588C56.6741 100.281 56.5868 95.777 57.0286 93.7151C57.4705 91.6533 53.9998 83.9468 53.3047 83.0631C52.6097 82.1795 48.8296 77.9086 49.8606 77.2213Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 98.6496L47.457 97.9888L50.2568 94.3109L53.263 96.9984L55.7051 93.7912L58.7114 96.4787L61.1542 93.2706L64.1597 95.9582L66.6026 92.7501L69.608 95.4377L72.0509 92.2304L75.0572 94.9171L77.5 91.7098L80.5063 94.3974L82.9491 91.1893L85.9554 93.8769L88.0414 91.1387L88.9094 91.7995L86.1081 95.4766L83.1019 92.7891L80.659 95.9971L77.6528 93.3096L75.2099 96.5177L72.2036 93.8301L69.7616 97.0374L66.7553 94.3506L64.3124 97.5579L61.307 94.8704L58.8641 98.0784L55.8586 95.3909L53.4158 98.599L50.4095 95.9114L48.3251 98.6496Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 93.4328L47.457 92.772L50.2568 89.0949L53.263 91.7824L55.7051 88.5744L58.7114 91.2619L61.1542 88.0538L64.1597 90.7414L66.6026 87.5333L69.608 90.2209L72.0509 87.0136L75.0572 89.7011L77.5 86.4931L80.5063 89.1806L82.9491 85.9725L85.9554 88.6601L88.0414 85.9219L88.9094 86.5827L86.1081 90.2598L83.1019 87.5723L80.659 90.7803L77.6528 88.0928L75.2099 91.3009L72.2036 88.6133L69.7616 91.8214L66.7553 89.1338L64.3124 92.3411L61.307 89.6536L58.8641 92.8617L55.8586 90.1741L53.4158 93.3822L50.4095 90.6946L48.3251 93.4328Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 88.2199L47.457 87.5591L50.2568 83.882L53.263 86.5695L55.7051 83.3615L58.7114 86.049L61.1542 82.8409L64.1597 85.5285L66.6026 82.3204L69.608 85.008L72.0509 81.8007L75.0572 84.4882L77.5 81.2802L80.5063 83.9677L82.9491 80.7596L85.9554 83.4472L88.0414 80.709L88.9094 81.3698L86.1081 85.0469L83.1019 82.3594L80.659 85.5674L77.6528 82.8799L75.2099 86.088L72.2036 83.4004L69.7616 86.6085L66.7553 83.9209L64.3124 87.1282L61.307 84.4407L58.8641 87.6488L55.8586 84.9612L53.4158 88.1693L50.4095 85.4817L48.3251 88.2199Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 83.0031L47.457 82.3424L50.2568 78.6652L53.263 81.3527L55.7051 78.1447L58.7114 80.8322L61.1542 77.6241L64.1597 80.3117L66.6026 77.1044L69.608 79.7912L72.0509 76.5839L75.0572 79.2714L77.5 76.0634L80.5063 78.7509L82.9491 75.5428L85.9554 78.2304L88.0414 75.4922L88.9094 76.153L86.1081 79.8301L83.1019 77.1426L80.659 80.3506L77.6528 77.6631L75.2099 80.8712L72.2036 78.1836L69.7616 81.3917L66.7553 78.7041L64.3124 81.9122L61.307 79.2247L58.8641 82.432L55.8586 79.7444L53.4158 82.9525L50.4095 80.2649L48.3251 83.0031Z"
                        fill="#6EC4CE"
                      />
                      <path
                        opacity="0.5"
                        d="M81.349 97.8748C81.5493 97.4408 80.3095 95.1733 79.4025 93.427C76.5287 94.034 67.5295 95.8255 64.3915 95.1483C60.6364 94.3387 59.2642 92.8753 57.3224 88.3737C56.2892 85.9776 55.0167 80.6797 54.2304 77.1584C52.5746 76.9659 50.6 76.7267 49.8606 77.2191C48.8296 77.9064 52.6097 82.1773 53.3039 83.061C53.9982 83.9446 57.4697 91.6512 57.0279 93.713C56.586 95.7748 56.6733 100.278 57.5679 100.586C58.4624 100.893 60.5133 99.2603 61.2497 99.0639C61.9861 98.8676 66.0466 97.927 69.9871 97.8304C74.7007 97.7151 81.0545 98.513 81.349 97.8748Z"
                        fill="#E2D3C9"
                      />
                      <path
                        d="M156.045 77.2213C155.014 76.534 151.578 77.2704 149.958 77.3195C148.338 77.3686 137.539 75.6995 136.213 75.6995C134.888 75.6995 131.991 74.374 131.599 74.8649C131.206 75.3558 131.549 79.774 131.108 80.6086C130.666 81.4431 127.671 90.4751 127.377 91.5551C127.082 92.6351 124.262 97.238 124.557 97.8762C124.851 98.5144 131.205 97.7165 135.918 97.8326C139.858 97.9292 143.919 98.8697 144.655 99.0661C145.392 99.2624 147.443 100.895 148.337 100.588C149.232 100.281 149.319 95.777 148.877 93.7151C148.435 91.6533 151.906 83.9468 152.601 83.0631C153.296 82.1795 157.076 77.9086 156.045 77.2213Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 98.6496L155.499 95.9114L152.494 98.599L150.051 95.3909L147.045 98.0784L144.602 94.8704L141.596 97.5579L139.153 94.3506L136.148 97.0374L133.705 93.8301L130.7 96.5177L128.256 93.3096L125.25 95.9971L122.807 92.7891L119.801 95.4766L117 91.7995L117.867 91.1387L119.953 93.8769L122.96 91.1893L125.403 94.3974L128.409 91.7098L130.852 94.9171L133.858 92.2304L136.301 95.4377L139.306 92.7501L141.749 95.9582L144.755 93.2706L147.198 96.4787L150.204 93.7912L152.646 96.9984L155.652 94.3109L158.452 97.9888L157.584 98.6496Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 93.4328L155.499 90.6946L152.494 93.3822L150.051 90.1741L147.045 92.8617L144.602 89.6536L141.596 92.3411L139.153 89.1338L136.148 91.8214L133.705 88.6133L130.7 91.3009L128.256 88.0928L125.25 90.7803L122.807 87.5723L119.801 90.2598L117 86.5827L117.867 85.9219L119.953 88.6601L122.96 85.9725L125.403 89.1806L128.409 86.4931L130.852 89.7011L133.858 87.0136L136.301 90.2209L139.306 87.5333L141.749 90.7414L144.755 88.0538L147.198 91.2619L150.204 88.5744L152.646 91.7824L155.652 89.0949L158.452 92.772L157.584 93.4328Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 88.2199L155.499 85.4817L152.494 88.1693L150.051 84.9612L147.045 87.6488L144.602 84.4407L141.596 87.1282L139.153 83.9209L136.148 86.6085L133.705 83.4004L130.7 86.088L128.256 82.8799L125.25 85.5674L122.807 82.3594L119.801 85.0469L117 81.3698L117.867 80.709L119.953 83.4472L122.96 80.7596L125.403 83.9677L128.409 81.2802L130.852 84.4882L133.858 81.8007L136.301 85.008L139.306 82.3204L141.749 85.5285L144.755 82.8409L147.198 86.049L150.204 83.3615L152.646 86.5695L155.652 83.882L158.452 87.5591L157.584 88.2199Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 83.0031L155.499 80.2649L152.494 82.9525L150.051 79.7444L147.045 82.432L144.602 79.2247L141.596 81.9122L139.153 78.7041L136.148 81.3917L133.705 78.1836L130.7 80.8712L128.256 77.6631L125.25 80.3506L122.807 77.1426L119.801 79.8301L117 76.153L117.867 75.4922L119.953 78.2304L122.96 75.5428L125.403 78.7509L128.409 76.0634L130.852 79.2714L133.858 76.5839L136.301 79.7912L139.306 77.1044L141.749 80.3117L144.755 77.6241L147.198 80.8322L150.204 78.1447L152.646 81.3527L155.652 78.6652L158.452 82.3424L157.584 83.0031Z"
                        fill="#6EC4CE"
                      />
                      <path
                        opacity="0.5"
                        d="M124.557 97.8748C124.356 97.4408 125.596 95.1733 126.503 93.427C129.377 94.034 138.376 95.8255 141.514 95.1483C145.269 94.3387 146.641 92.8753 148.583 88.3737C149.617 85.9776 150.889 80.6797 151.675 77.1584C153.331 76.9659 155.306 76.7267 156.045 77.2191C157.076 77.9064 153.296 82.1773 152.602 83.061C151.907 83.9446 148.437 91.6512 148.878 93.713C149.319 95.7748 149.232 100.278 148.338 100.586C147.443 100.893 145.392 99.2603 144.656 99.0639C143.92 98.8676 139.859 97.927 135.919 97.8304C131.205 97.7151 124.851 98.513 124.557 97.8748Z"
                        fill="#E2D3C9"
                      />
                      <path
                        d="M122.798 70.5586C120.447 70.448 118.103 70.8259 115.778 71.2023C115.044 71.3215 114.267 71.729 114.82 72.6057C115.123 73.0872 115.753 73.2283 116.318 73.2929C118.746 73.5711 121.24 73.2633 123.68 73.2672L122.798 70.5586Z"
                        fill="#755846"
                      />
                      <path
                        d="M140.096 67.296C140.453 69.4762 139.43 72.6274 137.05 73.2648C136.09 73.522 134.934 73.4308 133.944 73.4246C132.737 73.4176 131.531 73.4074 130.325 73.3989C127.956 73.3817 125.586 73.3646 123.218 73.3474C121.656 73.3365 119.996 73.2968 118.693 72.4357C117.144 71.4134 116.373 69.523 117.402 67.896C118.287 66.498 119.941 65.6417 121.52 65.3019C124.163 64.7323 126.909 65.4874 129.537 65.0136C129.962 64.9373 130.383 64.8282 130.8 64.677C133.173 63.8167 135.53 62.6315 137.952 64.0357C139.115 64.7105 139.879 65.9697 140.096 67.296Z"
                        fill="#5E4130"
                      />
                      <path
                        d="M120.473 62.6022C120.078 62.1837 119.835 62.1019 119.596 62.6972C119.32 63.3837 119.134 64.131 119.142 64.8752C118.152 65.0825 117.214 65.536 116.421 66.171C115.812 65.7378 115.088 65.465 114.363 65.3014C113.737 65.1604 113.667 65.4074 113.786 65.97C113.935 66.6651 114.171 67.336 114.401 68.0077C114.544 68.4284 114.674 68.8531 114.821 69.2723C114.924 69.7071 115.129 70.1217 115.38 70.4326C116.071 71.2929 117.448 71.7923 118.516 71.9334C119.723 72.0931 120.867 71.7846 121.68 70.8666C122.41 70.043 122.908 68.9194 123.097 67.8409C123.206 67.2269 123.155 66.5708 122.939 65.977C122.697 65.3108 122.218 64.8261 121.802 64.2682C121.377 63.7001 120.962 63.1188 120.473 62.6022Z"
                        fill="#755846"
                      />
                      <path
                        d="M138.316 65.5664C140.59 67.7311 140.352 70.2262 139.095 72.4329C137.702 74.8805 135.408 76.5379 132.849 77.6156C129.827 78.8888 126.369 79.5402 123.133 78.7766C122.482 78.6231 121.771 78.3036 121.579 77.6631C121.013 75.768 123.968 75.8023 125.022 75.7119C127.188 75.5272 129.483 75.5054 131.589 74.801C133.901 74.028 135.547 72.3792 136.703 70.269L138.316 65.5664Z"
                        fill="#755846"
                      />
                      <path
                        d="M139.963 69.0548C139.955 68.0379 139.609 67.0226 138.975 66.2262C137.366 64.2026 134.234 64.1395 132.078 65.2366C129.605 66.4951 129.213 69.8263 130.182 72.1741C130.226 72.2816 129.316 72.2504 129.239 72.2559C128.585 72.3018 127.231 72.1772 126.97 72.9782C126.796 73.5151 127.154 74.2413 127.693 74.4151C127.918 74.4876 128.159 74.4884 128.396 74.4876C130.09 74.4852 131.784 74.4907 133.478 74.4938C134.805 74.4962 135.807 74.2507 136.602 73.1193C137.015 72.5302 137.329 71.8725 137.769 71.3037L139.963 69.0548Z"
                        fill="#755846"
                      />
                      <path
                        d="M120.23 69.7994C120.326 70.0472 120.17 70.3378 119.883 70.4493C119.595 70.5607 119.284 70.45 119.188 70.203C119.093 69.9552 119.248 69.6646 119.536 69.5532C119.823 69.4417 120.134 69.5524 120.23 69.7994Z"
                        fill="#E88E8E"
                      />
                      <path
                        d="M122.614 65.2617C122.7 65.4082 122.808 65.5313 122.91 65.67C122.961 65.7394 123.008 65.8142 123.047 65.8976C123.086 65.9833 123.111 66.0674 123.135 66.1516C123.18 66.3207 123.209 66.4906 123.235 66.6565C123.262 66.8186 123.285 66.997 123.296 67.1685C123.342 67.8628 123.227 68.5672 122.979 69.2202C122.728 69.8708 122.343 70.4747 121.842 70.9578C121.59 71.1994 121.318 71.4121 121.014 71.5836C120.86 71.6654 120.698 71.7394 120.527 71.7791C120.357 71.8212 120.176 71.8267 120.012 71.7862C120.352 71.7643 120.637 71.596 120.886 71.3927C121.135 71.1869 121.366 70.9524 121.573 70.7062C121.99 70.2129 122.31 69.6487 122.543 69.0526C122.77 68.4542 122.907 67.8199 122.93 67.1739C122.933 67.0929 122.935 67.0126 122.935 66.9316L122.93 66.6838C122.926 66.517 122.924 66.3526 122.91 66.1921C122.903 66.1119 122.894 66.0316 122.877 65.9591C122.859 65.8843 122.829 65.8103 122.797 65.7339C122.733 65.5835 122.652 65.4277 122.614 65.2617Z"
                        fill="#8E6751"
                      />
                      <path
                        d="M119.832 67.9407C119.957 68.0295 120.084 68.0701 120.211 68.0794C120.337 68.0888 120.452 68.0623 120.558 68.0054C120.663 67.9477 120.757 67.8636 120.828 67.7584C120.9 67.6532 120.949 67.5246 120.977 67.375C121.045 67.5129 121.05 67.6844 120.992 67.8394C120.935 67.9945 120.819 68.1301 120.669 68.2111C120.593 68.2516 120.51 68.2773 120.423 68.2867C120.338 68.2945 120.251 68.2844 120.172 68.2586C120.014 68.2072 119.878 68.0888 119.832 67.9407Z"
                        fill="#061F34"
                      />
                      <path
                        d="M116.863 69.4056C116.988 69.4944 117.116 69.5349 117.242 69.5443C117.368 69.5536 117.484 69.5271 117.59 69.4702C117.695 69.4126 117.788 69.3284 117.859 69.2232C117.931 69.118 117.98 68.9895 118.008 68.8398C118.077 68.9778 118.081 69.1492 118.024 69.3043C117.966 69.4593 117.851 69.5949 117.7 69.676C117.625 69.7165 117.541 69.743 117.455 69.7515C117.369 69.7593 117.283 69.7492 117.203 69.7235C117.046 69.6728 116.909 69.5536 116.863 69.4056Z"
                        fill="#061F34"
                      />
                      <path
                        d="M108.28 80.7512C107.392 82.672 105.911 84.3613 104.271 85.6494C102.477 87.059 100.307 88.0182 98.0396 88.3175C97.4108 88.4008 95.7028 88.7694 95.4791 88.0104C95.2983 87.3949 96.5178 85.8286 96.8311 85.379C97.9313 83.8011 99.122 82.2855 100.394 80.8416C101.246 79.8738 103.205 78.6683 103.236 77.2626C103.262 76.1039 102.405 75.0169 101.972 73.9961C101.14 72.0371 100.248 70.1039 99.4391 68.1355C98.5274 65.9163 97.7965 63.4579 98.1106 61.0337C98.268 59.815 99.4797 57.63 100.885 58.6189C103.07 60.1563 104.597 63.4314 105.781 65.7527C107.443 69.0075 108.781 72.6254 109.113 76.2839C109.256 77.8501 108.923 79.3611 108.28 80.7512Z"
                        fill="#F9AE8F"
                      />
                      <path
                        d="M70.8966 80.7512C71.785 82.672 73.2663 84.3613 74.9057 85.6494C76.7003 87.059 78.8697 88.0182 81.1372 88.3175C81.766 88.4008 83.4741 88.7694 83.6977 88.0104C83.8785 87.3949 82.659 85.8286 82.3458 85.379C81.2455 83.8011 80.0549 82.2855 78.7832 80.8416C77.9307 79.8738 75.9717 78.6683 75.9406 77.2626C75.9148 76.1039 76.772 75.0169 77.2052 73.9961C78.0367 72.0371 78.9289 70.1039 79.7377 68.1355C80.6494 65.9163 81.3803 63.4579 81.0663 61.0337C80.9089 59.815 79.6972 57.63 78.2915 58.6189C76.1073 60.1563 74.58 63.4314 73.3956 65.7527C71.7335 69.0075 70.3956 72.6254 70.0637 76.2839C69.9218 77.8501 70.2538 79.3611 70.8966 80.7512Z"
                        fill="#F9AE8F"
                      />
                      <path
                        d="M88.0875 30.8294C88.2792 30.6985 88.46 30.538 88.6595 30.4195C89.6351 29.8398 90.1501 30.4834 91.0595 30.6315C91.4203 30.6907 91.7896 30.6486 92.152 30.5972C92.5159 30.5457 92.9179 30.4935 93.2257 30.6922C93.6091 30.9393 93.6933 31.4793 94.0556 31.7551C94.6509 32.2094 95.6 31.7076 96.239 32.1011C96.9013 32.5086 96.8429 33.478 97.22 34.0663C97.4024 34.3515 97.7156 34.5252 97.965 34.7559C98.5525 35.2982 98.2619 36.3712 98.1154 37.0562C97.6915 39.0447 97.2231 41.024 96.712 42.9923C96.2452 44.7892 94.7842 45.7523 93.2733 46.7372C92.2166 47.4261 91.1584 47.8437 90.027 48.3643C88.9712 48.8497 87.8132 48.9884 86.7153 48.457C85.7833 48.0058 85.1436 47.1401 84.5413 46.3063C83.9156 45.4406 83.4145 44.497 83.0888 43.4778C82.7062 42.2785 82.4989 41.0419 82.3018 39.8029C82.1841 39.0634 82.0727 38.3232 81.9683 37.5814C81.8685 36.8754 81.7228 36.1515 81.7057 35.4377C81.6379 34.5603 81.6309 33.319 82.2963 32.6271C82.4304 32.4876 82.5963 32.3832 82.7841 32.3333C83.1948 32.2234 83.5361 32.3676 83.9366 32.1229C84.3098 31.8954 84.5522 31.505 84.8943 31.2377C85.3633 30.8715 86.0062 30.7304 86.5898 30.8676C86.9117 30.9431 87.228 31.0982 87.5561 31.0577C87.7525 31.032 87.9239 30.9416 88.0875 30.8294Z"
                        fill="#835F55"
                      />
                      <path
                        d="M85.6741 57.8081C87.1749 59.4024 90.0588 59.5294 92.0777 58.8772C93.4523 58.433 94.4232 57.4208 94.452 56.0284C94.4848 54.4722 93.0237 53.3665 92.6551 51.9156C92.4455 51.0935 92.4666 50.2465 92.4884 49.4096C92.5133 48.4333 92.5211 47.4538 92.5718 46.479C91.5377 46.2748 90.6993 46.1719 89.6006 46.2148C88.692 46.2499 87.7842 46.161 86.8756 46.2109C86.8024 46.2148 86.7229 46.2218 86.6715 46.267C86.6193 46.313 86.6099 46.3839 86.6037 46.4501C86.4821 47.7686 86.6014 49.1042 86.5063 50.425C86.4182 51.639 86.1276 52.8608 85.3671 53.866C84.439 55.0925 84.6673 56.739 85.6741 57.8081Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M92.5931 51.7192C92.4302 50.9548 92.4466 50.1717 92.4669 49.3979C92.4918 48.4215 92.4996 47.4421 92.5502 46.4672C91.5162 46.2631 90.6778 46.1602 89.5791 46.2031C88.6705 46.2381 87.7627 46.1493 86.8541 46.1992C86.7809 46.2031 86.7022 46.2101 86.65 46.2553C86.5978 46.3013 86.5884 46.3722 86.5822 46.4384C86.4606 47.7569 86.5798 49.0924 86.4848 50.4132C86.4575 50.7912 86.4068 51.1699 86.332 51.5431C86.4746 51.66 86.6196 51.7714 86.7692 51.8751C87.8905 52.6504 89.403 52.9075 90.7448 52.5522C91.4282 52.3706 92.0422 52.0847 92.5931 51.7192Z"
                        fill="#F38D70"
                      />
                      <path
                        d="M95.9224 41.9959C95.9333 41.8665 95.9458 41.7372 95.9582 41.6078C96.1117 40.0712 96.2473 38.0499 95.2336 36.7572C94.2587 35.5151 92.4603 35.1738 91.0008 34.8668C88.9133 34.4273 86.4821 35.0553 84.7444 36.2717C84.0532 36.7556 83.6535 37.5714 83.4969 38.4005C83.341 39.2265 83.4493 40.1273 83.4688 40.9634C83.4984 42.2546 83.4867 43.5458 83.7603 44.8128C84.0135 45.9878 84.4132 47.1949 85.0343 48.2305C85.5805 49.2053 86.2857 50.1162 87.1896 50.784C88.1972 51.5289 89.5553 51.7767 90.7608 51.4346C92.4424 50.9577 93.7071 49.6775 94.5081 48.1634C95.1993 46.8575 95.5834 45.3949 95.7517 43.9323C95.825 43.2871 95.8663 42.6403 95.9224 41.9959Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M96.4742 43.2881C96.5443 43.2577 96.5888 43.1907 96.6269 43.126C96.7789 42.8665 96.9597 42.5206 96.9721 42.2167C96.983 41.9486 96.9792 41.6704 96.9854 41.3992C97.0158 40.0637 96.8638 38.792 96.5412 37.7299C96.1103 36.3094 95.1823 35.0657 93.8958 34.2686C92.6708 33.5104 91.1903 33.1839 89.7487 33.3156C88.6734 33.4138 88.0305 33.5945 86.6809 34.0582C85.77 34.3706 85.1529 34.8218 84.5692 35.4312C83.8391 36.194 83.458 37.3309 83.289 38.3517C83.116 39.3927 83.1269 40.4525 83.1386 41.5044C83.1394 41.6042 83.1425 42.7387 83.1978 42.8221C83.2531 42.9055 83.3817 42.9476 83.4549 42.8798C83.4892 42.8486 83.6622 41.7741 83.6716 41.7289C83.8695 40.8141 83.9139 40.5117 84.069 39.8821C84.2451 39.166 84.3066 38.6603 84.5684 38.0696C84.7679 37.6192 85.2144 37.1283 85.6991 36.9959C86.084 36.8907 86.4869 37.0434 86.864 37.1712C88.1326 37.6029 89.5157 37.7829 90.8311 37.5125C91.4739 37.38 92.0958 37.1431 92.7495 37.0792C93.4033 37.0153 94.2854 37.1626 94.6968 37.6621C94.883 37.8881 94.989 38.167 95.0778 38.4437C95.328 39.2221 95.4698 40.027 95.5984 40.8312C95.7191 41.587 95.7308 42.3491 95.981 43.0356C96.0067 43.1065 96.062 43.1642 96.1205 43.2125C96.1992 43.2795 96.3737 43.3317 96.4742 43.2881Z"
                        fill="#F38D70"
                      />
                      <path
                        d="M95.7844 42.9004C97.1176 42.1352 97.3826 44.4082 97.0974 45.5015C96.9797 45.9526 96.8091 46.3882 96.5613 46.7451C96.227 47.2267 95.3052 47.9911 94.8353 47.3872C94.6218 47.1129 94.6233 46.6812 94.6389 46.2978C94.6787 45.27 94.8805 43.4186 95.7844 42.9004Z"
                        fill="#F7AC8D"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M85.0864 53.4355C85.2168 53.6716 85.3598 53.8995 85.5158 54.1171C86.3145 55.2298 87.4413 56.009 88.7262 56.2802C90.9013 56.7398 93.3039 55.5973 94.4053 53.5246C94.6986 53.6551 94.9943 53.7801 95.2916 53.9015C95.2213 54.0455 95.1463 54.1871 95.0655 54.3255C93.8125 56.4714 91.0775 57.6777 88.5621 57.1946C87.1198 56.9172 85.8146 56.1169 84.8865 54.9418C84.6134 54.5957 84.3687 54.2163 84.1548 53.8075L84.2186 53.7824C84.2837 53.7567 84.3496 53.731 84.416 53.705C84.6363 53.6189 84.8621 53.5306 85.0864 53.4355ZM89.6834 57.5047C89.2954 57.5047 88.9065 57.4688 88.5232 57.3956C87.0325 57.1088 85.6837 56.2829 84.7252 55.0688C84.4396 54.7071 84.1845 54.3103 83.9622 53.8825C83.4801 54.0691 82.9955 54.2481 82.5113 54.4269C81.0454 54.9682 79.5833 55.5082 78.2076 56.2549C78.135 56.293 78.1724 56.9681 78.1945 57.3669C78.2018 57.4988 78.2074 57.6004 78.2068 57.6388C78.1998 58.0666 78.199 58.4921 78.1983 58.9245C78.1973 59.6353 78.1927 60.3024 78.1883 60.952V60.952C78.1757 62.807 78.1641 64.5199 78.238 66.7043C78.272 67.7023 78.3116 68.7013 78.3512 69.7008L78.3512 69.7008C78.4207 71.4537 78.4902 73.2079 78.5294 74.9602C78.6323 79.5833 77.4346 84.8314 76.3281 88.5951C80.0528 90.3421 85.2175 91.5257 89.3934 91.5958V91.599C89.4243 91.599 89.4555 91.5986 89.4868 91.5982L89.4877 91.5982C89.5192 91.5978 89.5508 91.5974 89.582 91.5974C89.6451 91.5982 89.7082 91.599 89.7705 91.599V91.5951C93.9464 91.5249 99.1119 90.3413 102.836 88.5943C101.729 84.8314 100.532 79.5833 100.634 74.9594C100.673 73.2056 100.743 71.4498 100.813 69.6954L100.813 69.6953L100.813 69.6943C100.852 68.6968 100.892 67.6996 100.926 66.7035C101 64.5191 100.988 62.8062 100.976 60.9512V60.9511C100.971 60.3015 100.967 59.6345 100.966 58.9237C100.965 58.4913 100.964 58.0666 100.957 57.638C100.956 57.5994 100.962 57.4975 100.969 57.3653L100.969 57.3652L100.969 57.3651C100.992 56.9662 101.029 56.2922 100.956 56.2541C99.7026 55.5941 98.3811 55.0919 97.06 54.5899C96.5326 54.3895 96.0053 54.1891 95.4824 53.9788C95.4081 54.1317 95.3286 54.2824 95.2424 54.4299C94.1383 56.3187 91.9221 57.5047 89.6834 57.5047Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M69.2969 69.9117C69.3997 69.6717 74.1156 59.4351 75.1777 58.2701C76.2398 57.1052 79.2125 55.7891 79.2125 55.7891L78.6959 70.1447L77.4444 72.3858L69.2969 69.9117Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M83.5763 42.9004C82.2431 42.1352 81.9782 44.4082 82.2634 45.5015C82.381 45.9526 82.5517 46.3882 82.7995 46.7451C83.1338 47.2267 84.0556 47.9911 84.5254 47.3872C84.739 47.1129 84.7374 46.6812 84.7218 46.2978C84.6821 45.27 84.4802 43.4186 83.5763 42.9004Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M94.3719 41.7776C94.5067 41.7644 94.6135 41.7285 94.6703 41.6592C94.8948 41.3849 94.5574 40.9937 94.3361 40.8441C93.9161 40.5605 92.4955 40.1077 92.1121 40.6579C91.7537 41.1706 92.4815 41.427 92.8602 41.5298C93.1173 41.5999 93.9098 41.8228 94.3719 41.7776Z"
                        fill="#835F55"
                      />
                      <path
                        d="M85.0606 41.5151C84.9265 41.494 84.8221 41.4527 84.7699 41.3802C84.5611 41.0935 84.9203 40.7218 85.1502 40.5854C85.5858 40.326 87.0289 39.9543 87.3811 40.5247C87.7099 41.0569 86.9689 41.2719 86.5847 41.353C86.3229 41.4083 85.5187 41.586 85.0606 41.5151Z"
                        fill="#835F55"
                      />
                      <path
                        d="M93.3032 43.4005C93.2307 43.9428 92.9042 44.3464 92.5746 44.3028C92.245 44.2584 92.0362 43.7838 92.1078 43.2415C92.1803 42.6992 92.5068 42.2955 92.8364 42.3392C93.1668 42.3828 93.3756 42.8581 93.3032 43.4005Z"
                        fill="#1E2032"
                      />
                      <path
                        d="M87.2288 43.1659C87.2132 43.7129 86.9311 44.1485 86.5984 44.1391C86.2657 44.1298 86.0085 43.6786 86.0241 43.1316C86.0397 42.5846 86.3218 42.149 86.6545 42.1584C86.9872 42.1685 87.2444 42.6189 87.2288 43.1659Z"
                        fill="#1E2032"
                      />
                      <path
                        d="M90.7072 46.0382C90.6994 46.3008 90.2327 46.5003 89.6646 46.4847C89.0958 46.4683 88.6415 46.2432 88.6485 45.9806C88.6563 45.718 89.1231 45.5185 89.6911 45.5341C90.26 45.5496 90.7142 45.7756 90.7072 46.0382Z"
                        fill="#F38D70"
                      />
                      <path
                        d="M94.4398 46.0944C95.0234 45.9814 95.4169 45.5692 95.4535 45.0658C95.4855 44.6224 95.1224 44.3092 94.6073 44.3333C94.0462 44.3598 93.3761 44.6778 93.2109 45.1702C92.9647 45.8996 93.7353 46.2307 94.4398 46.0944Z"
                        fill="#FD816C"
                      />
                      <path
                        d="M84.6711 45.8093C84.11 45.6659 83.7524 45.2342 83.7461 44.7301C83.7415 44.2859 84.1132 43.9921 84.6126 44.0428C85.1565 44.0981 85.7893 44.4511 85.921 44.9506C86.1173 45.6916 85.3482 45.9823 84.6711 45.8093Z"
                        fill="#FD816C"
                      />
                      <path
                        d="M87.5352 47.3711C87.7042 47.4825 87.8811 47.5659 88.0643 47.6306C88.2474 47.6953 88.4344 47.7428 88.6245 47.7786C89.004 47.8495 89.3913 47.8776 89.7785 47.8753C90.1658 47.8729 90.5539 47.8433 90.9373 47.7794C91.1289 47.7475 91.3191 47.7069 91.5069 47.6524C91.6947 47.5979 91.8786 47.5301 92.0578 47.4366C91.9884 47.509 91.9113 47.5776 91.8271 47.636C91.7858 47.6672 91.7422 47.6937 91.6986 47.7202C91.6549 47.7482 91.6097 47.7708 91.5645 47.795C91.3822 47.8893 91.1897 47.9617 90.9926 48.0194C90.5983 48.1324 90.1892 48.1862 89.7801 48.1877C89.371 48.1893 88.9588 48.1371 88.5653 48.0155C88.3689 47.954 88.1772 47.8737 87.9996 47.7677C87.8227 47.6633 87.6583 47.5324 87.5352 47.3711Z"
                        fill="#F6604B"
                      />
                      <path
                        d="M95.62 33.8061C94.5447 33.1757 93.2293 32.8796 92.0239 32.684C90.8309 32.4908 89.6169 32.3817 88.4091 32.4542C87.0797 32.5337 85.7433 32.8282 84.5667 33.4679C82.8672 34.3913 82.6591 36.4173 82.6062 38.1573C82.5586 39.7251 82.8805 41.4651 83.5272 42.9277C83.5833 42.5272 83.8327 38.6591 84.0594 37.7108C84.1288 37.4217 84.2168 37.1295 84.3968 36.8887C84.7522 36.4126 85.4059 36.2248 86.0129 36.2428C86.62 36.2607 87.2052 36.4493 87.7958 36.5848C89.2498 36.9184 90.7865 36.9277 92.235 36.5755C92.8124 36.4352 93.3891 36.2163 93.993 36.3651C95.207 36.6643 95.6434 37.9345 95.6971 38.9116C95.7361 39.6246 95.8343 42.4914 95.8499 42.9184C95.8491 42.9005 95.9792 42.7867 95.9932 42.7688C96.139 42.5857 96.2403 42.3651 96.3268 42.1501C96.5917 41.4893 96.6938 40.7786 96.8122 40.0804C97.1481 38.1075 97.939 35.3817 95.9449 34.0126C95.839 33.9394 95.7306 33.8708 95.62 33.8061Z"
                        fill="#835F55"
                      />
                      <path
                        d="M81.6755 35.0556C81.6732 34.9831 81.6693 34.8873 81.6646 34.775C81.6428 34.2537 81.6093 33.466 81.6576 33.1379C81.7799 32.3174 82.3074 31.475 83.2113 31.4439C83.3836 31.4384 83.5534 31.4633 83.7178 31.4883C83.9142 31.5179 84.0997 31.5459 84.2828 31.5226C84.6475 31.4758 84.8469 31.2381 85.0776 30.9631C85.1205 30.9124 85.1633 30.8602 85.2085 30.8096C85.8155 30.1207 86.869 30.314 87.4441 30.4909L87.4877 30.5041C87.974 30.6537 88.4329 30.7955 88.9129 30.6311C89.2145 30.5283 89.5137 30.3974 89.802 30.2711C90.0405 30.1667 90.2867 30.0592 90.5361 29.9665C91.2989 29.682 92.3524 29.4522 93.0374 29.9727C93.2992 30.1714 93.395 30.4807 93.4878 30.7792C93.5789 31.073 93.6646 31.3504 93.9023 31.4766C94.108 31.5857 94.3636 31.5202 94.6106 31.4563C94.7127 31.4298 94.8179 31.4026 94.9192 31.3885C95.5885 31.2927 96.1784 31.5787 96.5353 32.1724C96.6779 32.4101 96.7909 32.6883 96.8906 33.046C96.9382 33.2158 96.9631 33.3896 96.9873 33.5571C97.0169 33.7628 97.0449 33.9576 97.1104 34.1423C97.1961 34.3847 97.2935 34.6589 97.4789 34.8483L97.3317 34.9917C97.115 34.7696 97.0099 34.4727 96.9163 34.2109C96.8439 34.0067 96.8127 33.7932 96.7831 33.586C96.7597 33.4247 96.7356 33.2579 96.6919 33.1005C96.5976 32.7608 96.4917 32.4989 96.3584 32.2776C96.0413 31.7501 95.5395 31.5062 94.9472 31.5911C94.8576 31.6036 94.7618 31.6285 94.6613 31.655C94.3893 31.7252 94.0815 31.8046 93.8049 31.6582C93.4924 31.4922 93.3896 31.1602 93.2906 30.84C93.2041 30.5602 93.1215 30.2953 92.9119 30.1363C92.301 29.6727 91.3207 29.8924 90.6062 30.1589C90.3623 30.2501 90.1184 30.3568 89.8823 30.4597C89.5893 30.5875 89.287 30.72 88.9768 30.8259C88.4337 31.0114 87.921 30.8532 87.4246 30.7005L87.381 30.6872C86.8542 30.5252 85.8911 30.3436 85.3605 30.9452C85.3168 30.995 85.2747 31.0449 85.2327 31.0948C84.9958 31.3769 84.7511 31.6691 84.3062 31.7259C84.0942 31.7532 83.8862 31.722 83.6843 31.6917C83.5223 31.6675 83.3688 31.6441 83.216 31.6496C82.4306 31.6769 81.9677 32.4319 81.8586 33.1683C81.8126 33.4769 81.8469 34.2841 81.868 34.7665C81.8726 34.8795 81.8765 34.9761 81.8789 35.0486L81.6755 35.0556Z"
                        fill="#835F55"
                      />
                      <path
                        d="M87.3164 32.6806C87.3974 32.4741 87.5307 32.287 87.6982 32.1367C87.8665 31.987 88.0691 31.8748 88.2858 31.8031C88.5032 31.7338 88.7377 31.7135 88.9676 31.7447C89.2006 31.7759 89.4125 31.8756 89.6112 31.9754C89.8107 32.0759 90.0008 32.1811 90.2011 32.2481C90.4021 32.3143 90.6125 32.3517 90.8245 32.3541C91.0356 32.358 91.2476 32.3307 91.4494 32.2715C91.5507 32.2411 91.6481 32.2052 91.7455 32.1593L92.0447 32.0159C92.1476 31.9683 92.2575 31.9255 92.3751 31.8967C92.4928 31.8702 92.6198 31.8585 92.7437 31.8803C92.8676 31.9005 92.9837 31.9481 93.0873 32.0112C93.191 32.0743 93.2821 32.1522 93.3624 32.238C93.4427 32.3237 93.5136 32.4164 93.5759 32.5122C93.6398 32.6096 93.6912 32.7094 93.7481 32.7967C93.805 32.8847 93.8673 32.9595 93.9476 33.0117C94.0279 33.0647 94.1237 33.0998 94.2266 33.1247C94.4315 33.1754 94.6614 33.1871 94.8819 33.2774C94.9918 33.3242 95.0931 33.3928 95.1741 33.4777C95.2567 33.5619 95.3222 33.66 95.3728 33.7637C95.4733 33.9717 95.5115 34.2024 95.5107 34.4252C95.5115 34.6497 95.4788 34.8694 95.4445 35.0884C95.457 34.8671 95.4702 34.6458 95.4538 34.4276C95.4375 34.2102 95.3884 33.9951 95.2832 33.8096C95.1811 33.6242 95.0245 33.4707 94.832 33.4029C94.6372 33.3328 94.4175 33.3265 94.1915 33.2813C94.0785 33.258 93.9616 33.2221 93.8541 33.1567C93.7458 33.0904 93.6624 32.9922 93.5977 32.8964C93.5323 32.7998 93.4801 32.7024 93.4201 32.6167C93.3601 32.5294 93.2938 32.4468 93.2214 32.3728C93.078 32.2239 92.9019 32.1086 92.711 32.0782C92.6159 32.0618 92.5185 32.0712 92.4211 32.0938C92.3237 32.1187 92.2263 32.1569 92.1289 32.2021L91.8289 32.3431C91.726 32.3907 91.6154 32.4312 91.504 32.4631C91.3925 32.4959 91.2788 32.5177 91.1642 32.5317C91.0497 32.5465 90.9336 32.552 90.8182 32.5465C90.5876 32.5387 90.3585 32.4935 90.1411 32.4164C89.9221 32.3385 89.7273 32.2208 89.5364 32.1148C89.3455 32.0096 89.1515 31.9138 88.945 31.8748C88.7385 31.8359 88.5211 31.8437 88.313 31.8974C88.1058 31.9512 87.9071 32.0463 87.7341 32.178C87.5634 32.3135 87.4169 32.4834 87.3164 32.6806Z"
                        fill="#835F55"
                      />
                      <path
                        d="M109.892 69.9117C109.789 69.6717 105.073 59.4351 104.011 58.2701C102.949 57.1052 99.9766 55.7891 99.9766 55.7891L100.493 70.1447L101.745 72.3858L109.892 69.9117Z"
                        fill="#4C9DAD"
                      />
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M78.3889 70.6995C78.3538 70.2943 78.3383 69.8899 78.3305 69.4855C78.3242 69.2829 78.3258 69.0811 78.3242 68.8792L78.3297 68.273L78.346 67.6668C78.3554 67.4649 78.3608 67.2623 78.3741 67.0605C78.3967 66.6569 78.4255 66.2525 78.4762 65.8496C78.512 66.2548 78.5268 66.6592 78.5346 67.0636C78.5408 67.2662 78.5385 67.4681 78.5408 67.6699L78.5354 68.2761L78.519 68.8824C78.5097 69.0842 78.5042 69.2868 78.491 69.4886C78.4684 69.8922 78.4388 70.2959 78.3889 70.6995Z"
                          fill="#A7C8BC"
                        />
                      </g>
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M100.737 70.6995C100.687 70.2959 100.658 69.8922 100.636 69.4886C100.623 69.2868 100.617 69.085 100.608 68.8824L100.591 68.2761L100.586 67.6699C100.588 67.4681 100.587 67.2655 100.592 67.0636C100.6 66.6592 100.616 66.2548 100.651 65.8496C100.7 66.2532 100.73 66.6569 100.753 67.0605C100.766 67.2623 100.771 67.4642 100.781 67.6668L100.797 68.273L100.803 68.8792C100.8 69.0811 100.802 69.2837 100.796 69.4855C100.788 69.8899 100.772 70.2951 100.737 70.6995Z"
                          fill="#A7C8BC"
                        />
                      </g>
                      <path
                        d="M113.944 92.2365C113.396 93.0617 112.676 93.7786 111.965 94.3708C108.084 97.6007 102.805 97.9958 98.2062 99.4186C94.0981 100.69 90.4474 100.865 86.2466 100.372C83.3752 100.034 80.478 99.1794 77.7087 98.1945C74.859 97.1815 72.0749 97.116 69.4193 95.5108C67.3271 94.2469 64.6317 93.0025 64.313 90.0157C64.1798 88.7666 65.1561 87.0391 66.1894 86.2864C67.6006 85.2593 70.2577 85.07 71.9806 85.2297C78.9211 85.871 83.1477 88.8765 90.1365 88.9279C94.0365 88.9568 97.6732 87.7466 101.42 86.6526C104.311 85.8087 107.521 85.2703 110.531 85.4471C112.411 85.5578 114.005 87.1568 114.467 88.7853C114.797 89.9503 114.626 91.2111 113.944 92.2365Z"
                        fill="#1C3842"
                      />
                      <path
                        d="M103.112 88.2682H76.0659L74.128 68.133C74.0929 67.7722 74.3726 67.459 74.7295 67.459H104.448C104.804 67.459 105.084 67.7715 105.049 68.133L103.112 88.2682Z"
                        fill="#B8D1CE"
                      />
                      <path
                        d="M103.325 88.8385H75.8541L73.8857 68.7033C73.8507 68.3425 74.1343 68.0293 74.4967 68.0293H104.681C105.045 68.0293 105.328 68.3418 105.292 68.7033L103.325 88.8385Z"
                        fill="white"
                      />
                      <path
                        d="M103.31 88.8379H75.8555V90.0597H103.31V88.8379Z"
                        fill="#B8D1CE"
                      />
                      <path
                        d="M91.4504 78.823C91.6626 77.7929 90.9995 76.7858 89.9694 76.5737C88.9393 76.3615 87.9322 77.0246 87.7201 78.0547C87.5079 79.0848 88.171 80.0919 89.2011 80.304C90.2312 80.5162 91.2383 79.8531 91.4504 78.823Z"
                        fill="#B8D1CE"
                      />
                      <path
                        d="M71.7574 99.5848C71.6514 99.8163 71.5906 100.074 71.5703 100.344C71.4761 101.638 71.9451 103.241 73.128 103.927C74.2431 104.573 75.6153 103.789 76.6618 103.38C77.713 102.968 78.7595 102.544 79.8301 102.184C82.2075 101.385 84.6691 100.88 87.1182 100.354C88.1694 100.128 89.4161 100.055 90.2585 99.3277C90.9543 98.7269 91.3494 97.7669 91.2161 96.8505C91.0424 95.6622 89.9959 94.6586 88.8013 94.5347C88.3494 94.4879 87.892 94.5549 87.4502 94.6594C86.0172 94.9983 84.6847 95.7035 83.3086 96.2248C81.8577 96.7742 80.3849 97.2775 78.8717 97.6274C77.4582 97.9547 76.0049 98.0459 74.5774 98.2913C73.8971 98.4082 73.1872 98.4799 72.5545 98.7752C72.1781 98.9513 71.9171 99.2381 71.7574 99.5848Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M79.9552 97.2793L81.4731 101.797L77.8902 102.901L76.3801 101.926L75.6328 97.9635L79.9552 97.2793Z"
                        fill="white"
                      />
                      <path
                        d="M72.6571 105.672C72.5597 105.69 72.4615 105.706 72.3633 105.721C71.1033 105.914 69.8457 105.407 68.9277 104.552C68.2459 103.917 67.7347 103.094 67.4807 102.197C67.1558 101.048 67.2991 99.8801 68.0332 98.9123C68.4353 98.3817 68.9869 98.0856 69.5838 97.823C70.4916 97.4232 71.4392 97.2799 72.4241 97.2939C73.4729 97.3095 74.5148 97.2549 75.562 97.3593C76.2096 97.4139 76.8633 97.4692 77.4836 97.6632C77.4088 97.6391 77.0192 97.8674 76.9452 97.9134C76.7862 98.0123 76.7106 98.0607 76.7169 98.2734C76.7262 98.5765 77.0387 98.864 77.1937 99.1095C77.4485 99.5108 77.6527 99.9565 77.6979 100.429C77.7789 101.284 77.4462 102.604 78.8114 102.673C78.7421 102.67 77.9465 103.273 77.8576 103.345C77.6153 103.542 76.9421 103.94 76.6678 104.09C75.1202 104.943 74.2646 105.379 72.6571 105.672Z"
                        fill="white"
                      />
                      <path
                        d="M73.5946 105.233C73.4972 105.251 73.399 105.267 73.3008 105.282C72.0408 105.474 70.7832 104.968 69.8652 104.113C69.1834 103.478 68.6722 102.654 68.4182 101.757C68.0933 100.609 68.2366 99.4399 68.9707 98.4729C69.3728 97.9422 69.9244 97.6461 70.5213 97.3835C71.4291 96.9838 72.3767 96.8404 73.3616 96.8544C74.4104 96.87 75.4523 96.8155 76.4995 96.9199C77.1471 96.9744 77.8008 97.0298 78.4211 97.2238C78.3463 97.1996 77.9567 97.4279 77.8827 97.4739C77.7237 97.5729 77.6481 97.6212 77.6544 97.8339C77.6637 98.137 77.9762 98.4246 78.1312 98.67C78.386 99.0713 78.5902 99.5171 78.6354 99.99C78.7164 100.844 78.3837 102.165 79.7489 102.233C79.6796 102.23 78.884 102.833 78.7951 102.905C78.5528 103.102 77.8796 103.5 77.6053 103.651C76.0577 104.503 75.2021 104.94 73.5946 105.233Z"
                        fill="#EA584A"
                      />
                      <path
                        d="M74.292 102.32C75.1258 102.394 75.9689 102.357 76.7925 102.211C77.3411 102.113 77.9006 102.079 78.1343 101.484C78.2084 101.296 78.2395 101.094 78.2668 100.894C78.3775 100.092 78.1881 99.2014 77.5967 98.6162C77.345 98.3669 77.0076 98.1752 76.6538 98.1993C76.5198 98.2087 76.3897 98.2476 76.2611 98.2874C75.9229 98.391 75.5855 98.4939 75.2473 98.5975C74.8686 98.7128 74.4891 98.8289 74.1237 98.9817C73.833 99.1032 73.5478 99.2513 73.3226 99.4718C73.0592 99.7305 72.9361 100.027 72.9883 100.386C73.0452 100.778 72.9891 101.16 73.1426 101.54C73.2618 101.834 73.4824 102.096 73.7769 102.216C73.9406 102.283 74.1174 102.304 74.292 102.32Z"
                        fill="#CF3A43"
                      />
                      <path
                        d="M72.9903 99.0764C73.4984 100.015 73.8241 101.416 73.3495 102.419C73.2428 102.644 73.5786 102.842 73.6862 102.615C74.2277 101.472 73.9098 99.9562 73.3269 98.8793C73.2069 98.6595 72.8703 98.8559 72.9903 99.0764Z"
                        fill="white"
                      />
                      <path
                        d="M74.3173 98.6635C74.6664 99.1996 74.8674 99.8682 74.996 100.492C75.1472 101.226 75.1137 101.965 74.7919 102.651C74.6859 102.877 75.0217 103.075 75.1285 102.847C75.4581 102.144 75.536 101.408 75.4184 100.644C75.3038 99.9041 75.0646 99.0976 74.654 98.4664C74.5176 98.2575 74.1802 98.4524 74.3173 98.6635Z"
                        fill="white"
                      />
                      <path
                        d="M75.5542 98.2908C75.9438 98.8519 76.1823 99.5524 76.3381 100.216C76.5142 100.965 76.508 101.734 76.201 102.45C76.1036 102.678 76.4387 102.877 76.5376 102.646C76.8524 101.912 76.9124 101.151 76.7675 100.368C76.6249 99.5937 76.342 98.7443 75.8901 98.0945C75.749 97.8903 75.4109 98.0843 75.5542 98.2908Z"
                        fill="white"
                      />
                      <path
                        d="M113.011 93.9487C111.214 95.8422 108.587 96.7149 106.126 97.3562C100.383 98.8523 94.6112 100.322 88.8106 101.577C84.6005 102.487 87.3987 101.827 85.7264 102.233L83.582 94.9017C83.582 94.9017 88.1584 93.1983 92.1286 91.8198C96.9644 90.1406 101.853 88.5362 106.696 86.8242C108.22 86.2858 110.211 85.7738 111.823 86.1518C112.735 86.3653 113.589 86.917 114.047 87.7336C115.164 89.7237 114.581 92.2406 113.087 93.8669C113.062 93.8949 113.037 93.9222 113.011 93.9487Z"
                        fill="#254654"
                      />
                      <path
                        d="M83.3125 94.4566L85.4086 102.762L88.6837 102.056L86.4052 93.248L83.3125 94.4566Z"
                        fill="#2E5268"
                      />
                      <path
                        d="M107.059 99.5848C107.165 99.8163 107.226 100.074 107.246 100.344C107.34 101.638 106.871 103.241 105.688 103.927C104.573 104.573 103.201 103.789 102.154 103.38C101.103 102.968 100.057 102.544 98.9859 102.184C96.6085 101.385 94.1469 100.88 91.6978 100.354C90.6467 100.128 89.3999 100.055 88.5576 99.3277C87.8617 98.7269 87.4667 97.7669 87.5999 96.8505C87.7737 95.6622 88.8202 94.6586 90.0147 94.5347C90.4667 94.4879 90.9241 94.5549 91.3659 94.6594C92.7989 94.9983 94.1314 95.7035 95.5075 96.2248C96.9584 96.7742 98.4311 97.2775 99.9444 97.6274C101.358 97.9547 102.811 98.0459 104.239 98.2913C104.919 98.4082 105.629 98.4799 106.262 98.7752C106.638 98.9513 106.899 99.2381 107.059 99.5848Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M98.8578 97.2793L97.3398 101.797L100.923 102.901L102.433 101.926L103.18 97.9635L98.8578 97.2793Z"
                        fill="white"
                      />
                      <path
                        d="M106.158 105.672C106.256 105.69 106.354 105.706 106.452 105.721C107.712 105.914 108.97 105.407 109.888 104.552C110.569 103.917 111.081 103.094 111.335 102.197C111.66 101.048 111.516 99.8801 110.782 98.9123C110.38 98.3817 109.828 98.0856 109.231 97.823C108.324 97.4232 107.376 97.2799 106.391 97.2939C105.342 97.3095 104.301 97.2549 103.253 97.3593C102.606 97.4139 101.952 97.4692 101.332 97.6632C101.407 97.6391 101.796 97.8674 101.87 97.9134C102.028 98.0123 102.105 98.0607 102.098 98.2734C102.089 98.5765 101.777 98.864 101.622 99.1095C101.367 99.5108 101.163 99.9565 101.117 100.429C101.036 101.284 101.369 102.604 100.004 102.673C100.073 102.67 100.869 103.273 100.958 103.345C101.2 103.542 101.873 103.94 102.148 104.09C103.695 104.943 104.551 105.379 106.158 105.672Z"
                        fill="white"
                      />
                      <path
                        d="M105.221 105.233C105.318 105.251 105.416 105.267 105.514 105.282C106.774 105.474 108.032 104.968 108.95 104.113C109.632 103.478 110.143 102.654 110.397 101.757C110.722 100.609 110.579 99.4399 109.845 98.4729C109.443 97.9422 108.891 97.6461 108.294 97.3835C107.386 96.9838 106.439 96.8404 105.454 96.8544C104.405 96.87 103.363 96.8155 102.316 96.9199C101.668 96.9744 101.014 97.0298 100.394 97.2238C100.469 97.1996 100.859 97.4279 100.933 97.4739C101.091 97.5729 101.167 97.6212 101.161 97.8339C101.152 98.137 100.839 98.4246 100.684 98.67C100.429 99.0713 100.225 99.5171 100.18 99.99C100.099 100.844 100.432 102.165 99.0664 102.233C99.1358 102.23 99.9313 102.833 100.02 102.905C100.263 103.102 100.936 103.5 101.21 103.651C102.758 104.503 103.613 104.94 105.221 105.233Z"
                        fill="#EA584A"
                      />
                      <path
                        d="M104.524 102.32C103.691 102.394 102.847 102.357 102.024 102.211C101.475 102.113 100.916 102.079 100.682 101.484C100.608 101.296 100.577 101.094 100.55 100.894C100.439 100.092 100.628 99.2014 101.22 98.6162C101.471 98.3669 101.809 98.1752 102.163 98.1993C102.297 98.2087 102.427 98.2476 102.555 98.2874C102.893 98.391 103.231 98.4939 103.569 98.5975C103.948 98.7128 104.327 98.8289 104.693 98.9817C104.983 99.1032 105.269 99.2513 105.494 99.4718C105.757 99.7305 105.88 100.027 105.828 100.386C105.771 100.778 105.827 101.16 105.674 101.54C105.554 101.834 105.334 102.096 105.039 102.216C104.876 102.283 104.699 102.304 104.524 102.32Z"
                        fill="#CF3A43"
                      />
                      <path
                        d="M105.489 98.8801C104.906 99.957 104.588 101.472 105.13 102.616C105.238 102.842 105.573 102.645 105.467 102.419C104.992 101.417 105.318 100.016 105.826 99.0773C105.945 98.856 105.608 98.6588 105.489 98.8801Z"
                        fill="white"
                      />
                      <path
                        d="M104.164 98.4667C103.754 99.0979 103.514 99.9044 103.4 100.644C103.281 101.408 103.359 102.144 103.69 102.848C103.796 103.074 104.132 102.877 104.026 102.651C103.704 101.965 103.671 101.228 103.822 100.492C103.951 99.8685 104.153 99.2 104.501 98.6639C104.638 98.4527 104.301 98.2571 104.164 98.4667Z"
                        fill="white"
                      />
                      <path
                        d="M102.921 98.0928C102.469 98.7427 102.187 99.5921 102.043 100.367C101.899 101.15 101.958 101.911 102.273 102.644C102.371 102.874 102.707 102.675 102.61 102.448C102.303 101.732 102.296 100.964 102.473 100.215C102.629 99.5508 102.866 98.8518 103.256 98.2892C103.401 98.0827 103.062 97.8879 102.921 98.0928Z"
                        fill="white"
                      />
                      <path
                        d="M65.8027 93.9487C67.5996 95.8422 70.2272 96.7149 72.688 97.3562C78.4309 98.8523 84.2026 100.322 90.0031 101.577C94.2133 102.487 91.4151 101.827 93.0873 102.233L95.2309 94.9017C95.2309 94.9017 90.6545 93.1983 86.6844 91.8198C81.8485 90.1406 76.9605 88.5362 72.1168 86.8242C70.5934 86.2858 68.6017 85.7738 66.9895 86.1518C66.0778 86.3653 65.2238 86.917 64.7656 87.7336C63.649 89.7237 64.2318 92.2406 65.7256 93.8669C65.7513 93.8949 65.777 93.9222 65.8027 93.9487Z"
                        fill="#2E5268"
                      />
                      <path
                        d="M95.504 94.4566L93.4079 102.762L90.1328 102.056L92.4113 93.248L95.504 94.4566Z"
                        fill="#456A7C"
                      />
                      <path
                        d="M6.66797 90.0703H37.8369V90.2519C37.8369 91.6724 36.686 92.8233 35.2655 92.8233H9.23941C7.81888 92.8233 6.66797 91.6724 6.66797 90.2519V90.0703Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M7.9575 131.821C7.29282 131.821 6.79645 131.209 6.93282 130.559L14.8497 92.8223H18.6679L8.97205 131.032C8.85438 131.495 8.43672 131.821 7.9575 131.821Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M36.7886 131.821C37.4532 131.821 37.9496 131.209 37.8132 130.559L29.8963 92.8223H26.0781L35.774 131.032C35.8917 131.495 36.3093 131.821 36.7886 131.821Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M28.0617 133.591C28.7264 133.591 29.2227 132.952 29.0864 132.272L25.2518 92.8223H21.4336L27.0471 132.766C27.1648 133.252 27.5825 133.591 28.0617 133.591Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M34.4057 115.125H10.168V116.658H34.4057V115.125Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M14.8498 92.8223L14.1875 95.9781H17.867L18.668 92.8223H14.8498Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M29.8963 92.8223L30.5579 95.9781H26.8784L26.0781 92.8223H29.8963Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M25.2518 92.8223L25.5588 95.9781H21.877L21.4336 92.8223H25.2518Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M21.4398 67.4121H19.918V89.4431H21.4398V67.4121Z"
                        fill="#061F34"
                      />
                      <path
                        d="M32.8135 68.7185H8.54297L9.0105 53.9023H32.3459L32.8135 68.7185Z"
                        fill="#EDDCD1"
                      />
                      <path
                        d="M28.9064 90.1066H12.4492C12.4492 88.7757 13.5277 87.6973 14.8586 87.6973H26.4971C27.828 87.6973 28.9064 88.7757 28.9064 90.1066Z"
                        fill="#061F34"
                      />
                      <path
                        d="M20.679 77.8594C22.0847 77.8594 23.2434 78.9635 23.3096 80.3685L23.6579 87.6971H17.6992L18.0475 80.3685C18.1145 78.9643 19.2725 77.8594 20.679 77.8594Z"
                        fill="#061F34"
                      />
                      <path
                        d="M15.627 77.1037C16.1891 77.1037 16.6447 76.6481 16.6447 76.086C16.6447 75.524 16.1891 75.0684 15.627 75.0684C15.065 75.0684 14.6094 75.524 14.6094 76.086C14.6094 76.6481 15.065 77.1037 15.627 77.1037Z"
                        fill="#061F34"
                      />
                      <path
                        d="M15.7455 68.7188H15.5117V75.2027H15.7455V68.7188Z"
                        fill="#061F34"
                      />
                      <path
                        opacity="0.5"
                        d="M32.3459 53.9023H30.549C29.7893 61.5154 23.0186 67.4725 14.7768 67.4725C12.5926 67.4725 10.5121 67.0541 8.61933 66.2975L8.54297 68.7185H32.8135L32.3459 53.9023Z"
                        fill="#E2D3C9"
                      />
                      <path
                        d="M31.9669 90.089H28.4448C27.498 90.089 26.7305 89.3214 26.7305 88.3747V80.1328H33.6812V88.3747C33.6812 89.3214 32.9136 90.089 31.9669 90.089Z"
                        fill="#FFC73C"
                      />
                      <path
                        d="M34.1664 82.3848C32.4996 82.3848 31.1484 83.7554 31.1484 85.4471C31.1484 87.138 32.4996 88.5095 34.1664 88.5095C35.8331 88.5095 37.1843 87.1388 37.1843 85.4471C37.1843 83.7562 35.8331 82.3848 34.1664 82.3848ZM34.1664 87.4178C33.0942 87.4178 32.2245 86.5357 32.2245 85.4479C32.2245 84.3601 33.0942 83.478 34.1664 83.478C35.2386 83.478 36.1082 84.3601 36.1082 85.4479C36.1082 86.5357 35.2394 87.4178 34.1664 87.4178Z"
                        fill="#FFC73C"
                      />
                      <path
                        opacity="0.2"
                        d="M27.7662 86.3093C27.5597 86.3093 27.3906 86.1402 27.3906 85.9337V81.0885C27.3906 80.882 27.5597 80.7129 27.7662 80.7129C27.9727 80.7129 28.1418 80.882 28.1418 81.0885V85.9337C28.1418 86.1402 27.9727 86.3093 27.7662 86.3093Z"
                        fill="white"
                      />
                      <path
                        d="M32.0728 80.1328V88.3287C32.0728 89.3012 31.285 90.089 30.3125 90.089H31.9177C32.8902 90.089 33.678 89.3012 33.678 88.3287V80.1328H32.0728Z"
                        fill="#FFC73C"
                      />
                      <path
                        d="M45.026 61.5664H65.2617V35.0884H45.026V61.5664Z"
                        fill="white"
                      />
                      <path
                        d="M46.3496 60.2207H63.9414V36.4325H46.3496V60.2207Z"
                        fill="white"
                      />
                      <path
                        d="M63.9441 36.4316V60.2198H46.3516L63.9441 36.4316Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M140.238 93.418H114.227V98.2476H140.238V93.418Z"
                        fill="#FFC73C"
                      />
                      <path
                        d="M123.92 94.3496H115.641V97.2476H123.92V94.3496Z"
                        fill="#FFF9E1"
                      />
                      <path
                        d="M139.014 95.7982C139.014 96.5984 138.365 97.2468 137.566 97.2468C136.765 97.2468 136.117 96.5984 136.117 95.7982C136.117 94.9979 136.766 94.3496 137.566 94.3496C138.365 94.3488 139.014 94.9979 139.014 95.7982Z"
                        fill="#FFFCDB"
                      />
                      <path
                        d="M138.755 95.7993C138.755 96.4569 138.222 96.9891 137.565 96.9891C136.907 96.9891 136.375 96.4561 136.375 95.7993C136.375 95.1416 136.908 94.6094 137.565 94.6094C138.222 94.6086 138.755 95.1416 138.755 95.7993Z"
                        fill="#324751"
                      />
                      <path
                        d="M116.833 94.9023H116.496V96.8083H116.833V94.9023Z"
                        fill="#777068"
                      />
                      <path
                        d="M117.809 94.9023H117.473V96.8083H117.809V94.9023Z"
                        fill="#777068"
                      />
                      <path
                        d="M118.786 94.9023H118.449V96.8083H118.786V94.9023Z"
                        fill="#777068"
                      />
                      <path
                        d="M141.378 88.5879H115.367V93.4175H141.378V88.5879Z"
                        fill="#3DA0A5"
                      />
                      <path
                        d="M125.061 89.5195H116.781V92.4175H125.061V89.5195Z"
                        fill="#FFF9E1"
                      />
                      <path
                        d="M140.159 90.9681C140.159 91.7684 139.51 92.4167 138.71 92.4167C137.91 92.4167 137.262 91.7684 137.262 90.9681C137.262 90.1678 137.911 89.5195 138.71 89.5195C139.51 89.5188 140.159 90.1678 140.159 90.9681Z"
                        fill="#79D2F3"
                      />
                      <path
                        d="M139.895 90.9692C139.895 91.6268 139.362 92.1591 138.706 92.1591C138.048 92.1591 137.516 91.6261 137.516 90.9692C137.516 90.3115 138.049 89.7793 138.706 89.7793C139.362 89.7785 139.895 90.3115 139.895 90.9692Z"
                        fill="#324751"
                      />
                      <path
                        d="M117.973 90.0723H117.637V91.9783H117.973V90.0723Z"
                        fill="#777068"
                      />
                      <path
                        d="M118.95 90.0723H118.613V91.9783H118.95V90.0723Z"
                        fill="#777068"
                      />
                      <path
                        d="M119.926 90.0723H119.59V91.9783H119.926V90.0723Z"
                        fill="#777068"
                      />
                      <path
                        d="M139.997 88.5731H116.602V86.0204L119.525 85.4687L116.602 85.1235V79.7422H135.431L140.938 80.6843L140.591 83.3297L137.831 83.6056L140.591 84.158L139.997 88.5731Z"
                        fill="#F3F7F8"
                      />
                      <path
                        d="M118.883 82.3617C120.082 82.297 121.281 82.2666 122.48 82.2417C123.68 82.216 124.879 82.2183 126.078 82.2051C127.277 82.2175 128.477 82.216 129.676 82.2409L131.475 82.2846C132.075 82.3103 132.674 82.3259 133.274 82.3617C132.674 82.3975 132.075 82.4124 131.475 82.4388L129.676 82.4825C128.477 82.5074 127.277 82.5059 126.078 82.5183C124.879 82.5051 123.68 82.5074 122.48 82.4817C121.281 82.4575 120.082 82.4272 118.883 82.3617Z"
                        fill="#D1D1D3"
                      />
                      <path
                        d="M122.824 86.3051C124.023 86.2404 125.223 86.21 126.422 86.1851C127.621 86.1593 128.82 86.1617 130.02 86.1484C131.219 86.1609 132.418 86.1593 133.617 86.1843L135.416 86.2279C136.016 86.2536 136.616 86.2692 137.216 86.3051C136.616 86.3409 136.016 86.3557 135.416 86.3822L133.617 86.4258C132.418 86.4508 131.219 86.45 130.02 86.4617C128.82 86.4484 127.621 86.4508 126.422 86.4251C125.223 86.4001 124.023 86.3697 122.824 86.3051Z"
                        fill="#D1D1D3"
                      />
                      <path
                        d="M116.602 79.7422H139.691L140.938 80.6843L116.602 79.7422Z"
                        fill="#D1D1D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="landing__hotdeals--container--wrap">
                <div className="hotdeals">
                  <div className="hotdeals__top">
                    <div className="hotdeals__top__before">
                      <h1>Popular Jobs By Category</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                    </div>
                    <div className="hotdeals__top__after">
                      <Link to="/" className="see">
                        See more
                      </Link>
                    </div>
                  </div>
                  <div className="hotdeals__bottom">
                    <div className="hotdeals__bottom-wrapper">
                      <PopularList/>
                      <PopularList/>
                      <PopularList/>
                      <PopularList/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="landing__marketplace">
            <div className="landing__marketplace--container">
              <div className="landing__marketplace--container--header" style={{background:"transparent"}}>
                <div className="after">
                  <h1>Facilisis egestas sollicitudin.</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vitae egestas purus, netus a, et, varius vitae. Magna
                    diam curabitur pellentesque ipsum accumsan. Ullamcorper in
                    suspendisse leo, est. Vitae fringilla vulputate et dolor.
                    Rutrum adipiscing enim, pellentesque ac viverra purus
                    dictum.
                  </p>
                </div>
                <div className="before">
                  <span>
                    <svg
                      width="202"
                      height="136"
                      viewBox="0 0 202 136"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M177.285 117.083C176.084 117.083 174.89 117.031 173.721 116.924L173.756 116.536C181.837 117.271 192.427 115.45 197.871 109.729C201.07 106.366 202.196 101.509 201.039 96.0541C200.15 91.8619 198.359 87.7608 195.859 84.1951C194.932 82.8727 193.764 81.6743 192.635 80.5156C191.023 78.8605 189.355 77.1493 188.335 75.029C186.966 72.1818 186.905 69.2223 188.15 65.983C189.235 63.1615 191.182 60.4692 192.9 58.0934C198.046 50.9767 195.128 41.6221 190.238 35.9416C187.693 32.9844 184.481 30.9078 181.374 28.8997C177.393 26.3267 173.276 23.6657 170.491 19.1228C170.074 18.4418 169.679 17.7272 169.297 17.0368C168.267 15.1706 167.2 13.2404 165.6 11.8301C160.922 7.70562 153.863 8.72718 147.634 9.62796C146.558 9.78381 145.541 9.9303 144.565 10.0464C143.013 10.2303 141.437 10.4274 139.912 10.6191C134.018 11.3586 127.924 12.1223 121.875 12.2547C116.406 12.374 110.652 12.2532 105.623 10.57C102.834 9.63653 100.279 8.08822 97.8083 6.59133C95.9257 5.45054 93.9784 4.2708 91.9517 3.37936C89.0436 2.10066 85.5963 0.804025 82.089 0.896753C74.9981 1.08143 66.5069 5.72093 62.7588 11.4584C61.4349 13.4851 60.3564 15.8158 59.3131 18.0701C56.9403 23.1982 54.4865 28.5016 48.9166 30.9421C45.0236 32.6478 40.6561 32.6961 36.4319 32.7429C35.9418 32.7483 35.4524 32.7538 34.9654 32.7616C31.1503 32.8239 18.4731 33.6569 15.5253 41.771C14.2934 45.1629 15.2417 48.9772 16.063 51.5518C16.1464 51.8128 16.2305 52.0762 16.3155 52.3412C17.5591 56.2264 18.9679 60.6298 19.324 64.8867C19.7347 69.7896 18.689 73.7691 16.1284 77.0519C15.3414 78.061 14.3939 78.9431 13.4767 79.7963C12.971 80.267 12.4482 80.7532 11.9611 81.2535C6.38502 86.9777 4.43462 93.5278 6.3219 100.196C8.1632 106.702 13.144 112.358 19.0108 114.604C23.3854 116.28 28.4308 116.617 33.6025 115.58L33.6789 115.962C28.4347 117.014 23.3144 116.67 18.8713 114.968C12.8939 112.679 7.82113 106.922 5.94709 100.302C4.94111 96.7468 4.98864 93.2271 6.08891 89.839C7.09645 86.7377 8.97827 83.7571 11.6822 80.9816C12.1762 80.4743 12.7022 79.9849 13.2118 79.5111C14.1173 78.668 15.0539 77.7969 15.8214 76.8127C21.4342 69.6158 18.5175 60.502 15.9445 52.4604C15.8596 52.1954 15.7754 51.9321 15.6921 51.671C14.8536 49.0427 13.8866 45.1427 15.1599 41.6393C16.3529 38.3549 19.1877 35.8777 23.5848 34.2756C27.8776 32.7117 32.5537 32.4125 34.9592 32.3735C35.447 32.3657 35.9371 32.3603 36.428 32.3548C40.6132 32.3088 44.9403 32.2605 48.7608 30.5868C54.1951 28.2055 56.6177 22.9706 58.9601 17.908C60.0089 15.6412 61.0936 13.2973 62.4331 11.2464C64.3102 8.37263 67.3687 5.69366 71.0458 3.70118C74.6786 1.73286 78.5965 0.599089 82.0789 0.508699C85.6664 0.414413 89.1612 1.72741 92.1083 3.02404C94.1592 3.9256 96.1166 5.11236 98.0101 6.25938C100.463 7.74536 102.999 9.28199 105.746 10.2023C110.718 11.8667 116.432 11.9859 121.866 11.8675C127.895 11.7358 133.98 10.9729 139.864 10.2342C141.39 10.0425 142.967 9.84537 144.52 9.66147C145.491 9.54614 146.505 9.39965 147.579 9.24459C150.588 8.809 154 8.31575 157.191 8.46692C160.876 8.64069 163.71 9.64588 165.859 11.5402C167.509 12.9958 168.592 14.9555 169.64 16.8506C170.019 17.5379 170.412 18.2485 170.825 18.9218C173.564 23.3891 177.642 26.0252 181.587 28.5748C184.717 30.5985 187.954 32.6899 190.535 35.6899C193.274 38.8715 195.129 42.7653 195.758 46.6528C196.464 51.0134 195.585 55.049 193.217 58.324C189.703 63.1841 185.72 68.6916 188.688 74.8623C189.68 76.9249 191.325 78.6127 192.916 80.246C194.055 81.4156 195.234 82.6257 196.179 83.9738C198.708 87.5824 200.522 91.7325 201.421 95.9762C201.98 98.6131 202.026 101.114 201.556 103.412C201.035 105.958 199.891 108.175 198.154 110.001C195.543 112.744 191.589 114.817 186.719 115.994C183.737 116.711 180.484 117.083 177.285 117.083Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M144.37 116.773C148.125 116.857 151.879 116.96 155.633 117.082C158.655 117.18 161.678 117.291 164.688 117.579C173.454 118.419 182.586 120.461 190.735 115.894C200.103 110.643 202.188 99.9164 197.192 90.8377C194.271 85.5288 188.286 79.9745 188.646 73.5132C188.962 67.8194 193.572 64.0113 195.113 58.7952C196.598 53.7731 197.412 48.5913 194.72 43.7873C192.446 39.7291 188.598 36.7681 184.513 34.5426C178.767 31.4117 173.058 28.9852 169.987 22.8355C167.082 17.0171 166.361 10.4093 160.195 6.83028C155.104 3.87546 148.996 3.05571 143.124 3.47026C134.155 4.10377 125.806 7.42405 116.778 7.74664C106.853 8.10119 98.3381 1.19492 88.2573 0.598039C81.2887 0.18505 74.8562 2.37155 69.7928 7.15521C64.9717 11.709 63.8823 18.3246 59.0293 22.8348C53.5444 27.9325 45.47 28.7304 38.0331 29.6C31.5601 30.3566 25.2328 32.2088 20.7297 37.3042C16.9348 41.5985 17.2372 45.8429 17.7585 51.0793C18.3258 56.7747 21.2775 63.8492 20.0097 69.5025C18.8821 74.5301 13.7104 77.7701 11.3486 82.1501C1.44853 100.51 19.2382 117.426 36.7942 119.398C47.7758 120.631 59.0106 119.484 69.9992 118.867C82.2183 118.213 94.4412 117.296 106.659 116.747C119.2 116.16 131.824 116.491 144.37 116.773Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M129.16 47.6738H102.453V79.2083H129.16V47.6738Z"
                        fill="white"
                      />
                      <path
                        d="M160.551 47.6738H133.844V79.2083H160.551V47.6738Z"
                        fill="white"
                      />
                      <path
                        d="M129.16 11.4238H102.453V42.9583H129.16V11.4238Z"
                        fill="white"
                      />
                      <path
                        d="M160.551 11.4238H133.844V42.9583H160.551V11.4238Z"
                        fill="white"
                      />
                      <path
                        d="M97.8301 135.504C151.86 135.504 195.66 133.704 195.66 131.483C195.66 129.261 151.86 127.461 97.8301 127.461C43.8 127.461 0 129.261 0 131.483C0 133.704 43.8 135.504 97.8301 135.504Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M175.668 101.237C176.148 101.618 176.67 102.057 177.19 102.272C177.539 102.416 178.524 102.309 178.663 102.754C178.311 101.622 178.567 100.811 178.694 99.6962C178.825 98.539 178.724 97.2556 178.665 96.0915C178.537 93.5722 178.113 91.0608 177.293 88.6717C176.097 85.1847 174.028 81.9548 171.144 79.6584C169.082 78.0166 167.568 78.8208 166.285 80.8615C165.627 81.9096 164.254 81.6789 163.77 82.8556C163.187 84.2722 163.356 86.0512 163.781 87.4818C164.277 89.1533 165.207 90.6642 166.243 92.066C167.927 94.3429 169.911 96.3782 171.997 98.2866C173.003 99.2076 174.162 100.129 175.302 100.955C175.42 101.043 175.542 101.138 175.668 101.237Z"
                        fill="#438289"
                      />
                      <path
                        d="M166.469 81.5703C166.762 81.9701 167.052 82.3714 167.341 82.7742L168.214 83.9781L169.943 86.3984C171.087 88.0184 172.181 89.6805 173.146 91.4174C174.11 93.1551 174.979 94.941 175.801 96.7457L176.411 98.1023L177.007 99.4644C177.204 99.9195 177.397 100.376 177.588 100.834C177.782 101.29 177.972 101.748 178.161 102.206C177.734 101.31 177.329 100.407 176.903 99.512L176.276 98.1639L175.637 96.8221C175.204 95.9314 174.78 95.0361 174.328 94.1556C173.885 93.2704 173.422 92.3961 172.941 91.5319C171.985 89.7997 170.903 88.1431 169.795 86.5005L168.121 84.0443C167.567 83.2207 167.012 82.4002 166.469 81.5703Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M181.755 104.201C181.409 104.378 181.06 104.551 180.71 104.721C180.495 104.824 178.986 105.176 178.931 105.353C179.3 104.168 178.878 103.47 178.668 102.363C178.469 101.317 178.823 99.9859 179.018 98.9504C179.457 96.6119 180.197 94.3397 181.035 92.1166C181.992 89.5778 183.265 86.8911 185.697 85.6903C187.11 84.9929 188.327 86.4204 189.015 87.5176C189.353 88.0552 189.901 88.0934 190.396 88.3926C191.048 88.7862 191.135 89.1984 191.327 89.9542C191.736 91.5649 191.716 93.2854 191.26 94.8836C190.537 97.4176 188.771 99.5535 186.696 101.179C185.462 102.146 184.113 102.953 182.731 103.69C182.408 103.863 182.083 104.034 181.755 104.201Z"
                        fill="#438289"
                      />
                      <path
                        d="M188.869 88.0977C188.43 88.7764 187.98 89.4465 187.532 90.1182L186.174 92.1231C185.727 92.7948 185.273 93.4611 184.848 94.146C184.63 94.485 184.425 94.8309 184.215 95.1753C184.111 95.3476 184.014 95.5237 183.912 95.6974C183.813 95.8728 183.709 96.045 183.614 96.2226C183.222 96.9263 182.845 97.6385 182.483 98.3593C182.115 99.0761 181.768 99.8047 181.415 100.53L180.894 101.623L180.379 102.718C180.028 103.445 179.696 104.182 179.344 104.909C179.955 103.413 180.578 101.923 181.251 100.453C181.413 100.084 181.589 99.719 181.76 99.3528C181.929 98.9858 182.109 98.6234 182.286 98.2603C182.461 97.8956 182.65 97.538 182.835 97.1787C183.018 96.818 183.218 96.4657 183.411 96.1096C183.506 95.9312 183.612 95.759 183.713 95.5829C183.816 95.4083 183.915 95.2315 184.02 95.0592C184.233 94.7148 184.438 94.3657 184.662 94.0283C184.773 93.8592 184.881 93.6878 184.993 93.5203L185.332 93.0177C185.556 92.6811 185.793 92.353 186.023 92.021C186.957 90.701 187.914 89.4013 188.869 88.0977Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M185.133 82.1359C185.125 82.1367 185.117 82.1374 185.109 82.1382C183.492 82.2956 181.982 81.2639 180.312 81.6091C181.343 81.3956 180.581 78.56 180.615 77.96C180.7 76.4133 181.371 74.5112 181.747 72.9901C182.57 69.6582 184.36 66.5826 186.797 64.1732C188.759 62.2345 192.57 58.9353 195.533 60.1571C196.989 60.7571 197.805 61.9431 198.496 63.2701C199.349 64.9065 202.195 65.007 201.759 67.4046C201.359 69.6028 197.112 72.4696 195.507 74.0483C193.422 76.0985 191.334 78.1525 189.073 80.0055C187.971 80.907 186.606 81.9824 185.133 82.1359Z"
                        fill="#438289"
                      />
                      <path
                        d="M198.17 63.9277C197.396 64.5909 196.612 65.2423 195.829 65.8945L193.469 67.8387C191.902 69.14 190.364 70.4732 188.94 71.9249C187.515 73.3751 186.183 74.9171 184.872 76.4748L183.895 77.6491L182.93 78.8351C182.279 79.619 181.65 80.4208 181 81.207C181.303 80.7972 181.609 80.3889 181.916 79.9821C182.222 79.5746 182.528 79.167 182.84 78.7642L183.779 77.5572L184.732 76.361C186.013 74.7738 187.344 73.2231 188.773 71.7613C189.497 71.0405 190.232 70.3298 191.004 69.6605C191.77 68.9849 192.559 68.3374 193.355 67.7C194.154 67.0657 194.955 66.4353 195.757 65.8064L198.17 63.9277Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M176.519 82.1823C176.656 82.2789 176.79 82.3786 176.921 82.4815C177.624 83.0371 178.038 83.3947 178.919 83.7298C179.549 83.9698 181.115 84.4381 181.404 85.1277C180.86 83.8295 181.021 82.3771 181.106 80.9978C181.446 75.4942 179.106 70.1432 175.586 66.0141C172.929 62.8972 169.509 59.2668 165.629 57.745C165.143 57.5549 164.617 57.4053 164.105 57.5081C163.213 57.6881 162.88 58.4463 162.497 59.1733C161.708 60.6741 159.547 60.9944 159.094 62.5489C158.904 63.2019 158.979 63.9032 159.124 64.5679C159.637 66.9118 160.565 68.9822 162.068 70.8757C164.702 74.1968 167.955 77.0191 171.485 79.3521C173.047 80.383 174.989 81.1061 176.519 82.1823Z"
                        fill="#438289"
                      />
                      <path
                        d="M162.414 60.7969L165.034 63.4977C165.905 64.4 166.775 65.3047 167.64 66.2125C169.367 68.0328 171.035 69.9177 172.56 71.9172C173.313 72.9224 174.046 73.9439 174.748 74.9842C175.099 75.5047 175.455 76.0221 175.794 76.5505C176.135 77.0772 176.483 77.6001 176.813 78.1338L177.81 79.7305L178.79 81.3372C179.116 81.8733 179.435 82.4133 179.754 82.9533C180.074 83.4926 180.392 84.0333 180.708 84.5749C180.029 83.5198 179.374 82.45 178.693 81.3972L177.685 79.8092L176.662 78.2312C175.97 77.1855 175.289 76.1336 174.574 75.105C173.867 74.071 173.13 73.0572 172.375 72.059C172.189 71.8073 171.992 71.5642 171.801 71.3164L171.512 70.9463C171.416 70.8224 171.319 70.6993 171.219 70.5793C170.82 70.0961 170.428 69.6083 170.015 69.1377C169.205 68.1824 168.351 67.2652 167.51 66.3356L164.952 63.5771C164.102 62.6522 163.253 61.7296 162.414 60.7969Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M178.76 111.195C178.316 107.672 177.856 104.03 178.479 100.423C178.645 99.4609 178.89 98.5064 179.126 97.583C179.478 96.2061 179.843 94.7825 179.933 93.3651C179.99 92.4783 179.943 91.5526 179.897 90.6573C179.813 89.038 179.728 87.3643 180.231 85.7622C180.281 85.6024 180.337 85.4427 180.391 85.2884C180.6 84.6908 180.797 84.1266 180.669 83.6162C180.612 83.3902 180.487 83.165 180.355 82.9258C180.296 82.8183 180.234 82.7076 180.176 82.5923C179.404 81.0533 179.462 79.1255 180.353 76.6975C180.514 76.2572 180.692 75.8154 180.865 75.3891C181.407 74.045 181.918 72.7756 182.016 71.4182C182.189 68.9863 180.972 66.633 179.818 64.6187L180.629 64.1543C181.852 66.2886 183.14 68.7915 182.947 71.4852C182.84 72.9899 182.277 74.3878 181.731 75.7398C181.562 76.1598 181.387 76.5946 181.23 77.0209C180.433 79.1933 180.362 80.8788 181.011 82.1746C181.06 82.272 181.114 82.3694 181.172 82.4731C181.327 82.7544 181.489 83.0443 181.575 83.3902C181.771 84.1726 181.507 84.93 181.273 85.5985C181.219 85.7528 181.168 85.8985 181.123 86.0443C180.669 87.4858 180.747 89.0038 180.83 90.6113C180.877 91.5331 180.926 92.4861 180.866 93.4259C180.77 94.9305 180.395 96.3978 180.032 97.816C179.8 98.7215 179.56 99.6581 179.4 100.583C178.801 104.052 179.252 107.625 179.688 111.079L178.76 111.195Z"
                        fill="#438289"
                      />
                      <path
                        d="M185.669 68.2079C184.493 69.0339 183.285 69.9027 182.583 71.0575C182.885 69.6697 182.517 68.1417 182.485 66.7344C182.447 65.105 182.454 63.4663 182.741 61.8572C183.022 60.2816 183.562 58.766 184.1 57.259C185.076 54.5239 186.072 51.7507 187.755 49.3834C188.391 48.4888 189.212 47.5865 190.26 47.1821C191.648 46.6468 191.998 47.2725 192.684 48.4203C193.047 49.0281 193.53 48.9252 194.074 49.2018C194.749 49.5447 194.728 49.8712 194.846 50.6364C195.12 52.4044 194.917 54.199 194.392 55.9024C193.77 57.9253 192.736 59.7962 191.632 61.6032C190.43 63.5715 189.092 65.5289 187.298 67.0095C186.802 67.4162 186.24 67.8074 185.669 68.2079Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M192.545 49.1406C192.097 50.011 191.637 50.8736 191.179 51.7386L189.791 54.3232C188.875 56.05 187.978 57.7853 187.202 59.5783C187.009 60.0264 186.809 60.4721 186.626 60.9248L186.347 61.602C186.253 61.8272 186.167 62.0563 186.076 62.2822C185.895 62.7358 185.713 63.1893 185.541 63.6467L185.278 64.3308C185.189 64.5584 185.102 64.7867 185.017 65.0158L184.501 66.3888L183.996 67.7656C183.65 68.6805 183.324 69.6031 182.977 70.5179C183.125 70.0519 183.275 69.5859 183.428 69.1215C183.58 68.6563 183.731 68.1911 183.887 67.7275L184.362 66.3389L184.848 64.9542C185.504 63.1106 186.203 61.2802 186.988 59.4833C187.772 57.6864 188.678 55.9448 189.633 54.2368L191.08 51.6825L191.811 50.4108C192.054 49.9876 192.298 49.5637 192.545 49.1406Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M175.635 70.049C176.44 70.2454 177.239 70.4924 177.886 70.9817C179.034 71.849 179.761 73.6147 180.61 74.7758C180.86 75.1178 181.114 75.4646 181.44 75.7366C181.508 73.9178 181.364 72.4038 180.743 70.695C180.154 69.0718 179.367 67.5305 178.583 65.9955C176.445 61.8134 171.373 59.6931 166.83 60.8401C163.422 61.6996 166.012 64.9614 167.631 66.3298C168.85 67.3591 170.285 68.0986 171.735 68.7633C172.521 69.1233 173.319 69.4653 174.153 69.6937C174.627 69.823 175.132 69.9259 175.635 70.049Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M180.781 74.0645C180.383 73.3554 180.074 72.5988 179.796 71.8343C179.66 71.451 179.534 71.0637 179.412 70.6764C179.296 70.2891 179.14 69.9221 178.95 69.5676C178.569 68.8624 178.079 68.2164 177.558 67.6C177.04 66.9868 176.448 66.4359 175.799 65.9652C175.149 65.4946 174.447 65.0948 173.704 64.7847C173.334 64.6265 172.956 64.4956 172.569 64.3663C172.184 64.2369 171.8 64.1044 171.417 63.9712L169.115 63.174C168.351 62.9005 167.583 62.634 166.82 62.3535C167.6 62.5834 168.374 62.8281 169.151 63.0649L171.474 63.7998C171.861 63.9221 172.248 64.0452 172.634 64.1707C173.019 64.2938 173.411 64.4231 173.79 64.579C174.549 64.8891 175.269 65.2959 175.936 65.7743C176.598 66.2598 177.203 66.8247 177.727 67.4567C177.987 67.7722 178.238 68.0941 178.473 68.4299C178.591 68.5974 178.703 68.7689 178.81 68.9442C178.916 69.1203 179.016 69.2995 179.109 69.4834C179.293 69.8504 179.445 70.2377 179.552 70.632C179.663 71.0224 179.78 71.4104 179.903 71.7962C180.024 72.1827 180.156 72.566 180.3 72.9447C180.447 73.325 180.606 73.6982 180.781 74.0645Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M187.971 96.301C187.473 96.2714 186.974 96.2605 186.475 96.2675C184.453 96.2971 182.806 96.7678 180.912 97.3499C180.506 97.4745 180.096 97.6 179.672 97.6234C180.705 96.1249 181.727 94.9982 183.245 94C185.99 92.1961 188.977 90.9649 192.319 91.1324C194.495 91.2415 196.647 91.9397 198.457 93.1561C199.743 94.0202 202.05 95.8888 199.836 97.0584C198.432 97.8002 196.849 98.126 195.27 97.868C194.346 97.7169 193.463 97.3834 192.566 97.1137C191.074 96.6649 189.528 96.3937 187.971 96.301Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M181.199 96.6789C181.558 96.4896 181.91 96.2862 182.253 96.0704C182.595 95.8529 182.93 95.6246 183.258 95.387C183.588 95.1516 183.913 94.9101 184.236 94.6639C184.557 94.4114 184.911 94.1916 185.278 94.0085C185.462 93.9174 185.65 93.8332 185.84 93.7553C186.031 93.6797 186.224 93.6088 186.418 93.5449C186.807 93.4163 187.202 93.308 187.598 93.2106C188.396 93.0174 189.219 92.927 190.04 92.934C190.861 92.9488 191.681 93.0532 192.475 93.2597C192.872 93.361 193.264 93.4911 193.646 93.6236C194.031 93.7537 194.414 93.8862 194.797 94.0202L197.099 94.8205C197.863 95.0955 198.63 95.3628 199.392 95.6441C198.613 95.4127 197.839 95.1672 197.063 94.9296L194.741 94.1916C194.354 94.0693 193.968 93.9454 193.582 93.8192C193.195 93.6914 192.814 93.5706 192.422 93.4755C191.642 93.28 190.841 93.1802 190.038 93.1685C189.235 93.1576 188.432 93.2449 187.65 93.4264C186.863 93.6088 186.086 93.834 185.357 94.1706C184.993 94.3413 184.648 94.5423 184.325 94.7831C183.995 95.0207 183.663 95.2561 183.324 95.4813C182.642 95.927 181.942 96.3478 181.199 96.6789Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M184.491 89.9789C184.125 90.2508 183.76 90.5228 183.396 90.7986C182.656 91.3597 180.291 92.3181 180.069 93.2096C180.26 92.4428 180.012 91.7898 179.884 91.0464C179.763 90.3443 179.861 89.7724 179.965 89.0578C180.16 87.7254 180.36 86.3165 180.596 85.0378C181.005 82.8233 181.753 80.6874 182.497 78.5617C183.23 76.4671 183.97 74.3593 185.082 72.4385C186.203 70.5045 187.743 69.0497 189.449 67.651C191.223 66.197 192.987 67.8738 194.194 69.225C195.084 70.2209 196.251 69.9154 197.379 70.5115C198.975 71.3554 198.04 74.0328 197.681 75.3061C197.126 77.2806 195.866 78.9957 194.567 80.5472C192.386 83.1529 189.974 85.5646 187.37 87.748C186.437 88.5326 185.464 89.2542 184.491 89.9789Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M194.029 70.002C193.393 70.9004 192.744 71.7895 192.097 72.6801L190.141 75.3396C188.845 77.117 187.588 78.9217 186.483 80.8199C185.376 82.7166 184.392 84.6849 183.434 86.6641L182.724 88.154L182.031 89.6517C181.559 90.6459 181.114 91.6527 180.645 92.6485C180.854 92.1397 181.066 91.6317 181.28 91.1244L181.601 90.3631L181.926 89.6041L182.59 88.0916L183.271 86.587C184.192 84.5867 185.173 82.6098 186.281 80.7007C186.848 79.7539 187.428 78.815 188.058 77.9095C188.68 76.9986 189.334 76.1111 189.998 75.2321C190.664 74.3555 191.335 73.4828 192.006 72.6108L194.029 70.002Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M176.753 63.8422C176.911 63.9707 177.071 64.097 177.233 64.2209C178.711 65.3469 180.387 66.2601 181.579 67.6853C180.805 66.7604 182.795 63.4596 183.077 62.5627C183.667 60.6777 184.019 58.9479 183.864 56.9468C183.398 50.9063 180.427 45.3481 177.046 40.3213C176.451 39.4369 175.815 38.5369 174.906 37.9797C173.547 37.1475 172.318 37.4717 170.983 38.2135C170.36 38.5595 169.762 38.9296 169.078 39.147C168.094 39.4595 167.028 39.3558 166.055 39.6995C164.134 40.3782 164.539 44.1964 164.778 45.7299C165.233 48.645 166.582 51.4011 168.366 53.7302C171 57.1673 173.354 61.0681 176.753 63.8422Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M169.863 39.6816L171.676 42.917C172.277 43.997 172.877 45.0778 173.473 46.1617C174.659 48.331 175.766 50.5518 176.699 52.8482L177.032 53.7155C177.144 54.0046 177.256 54.2929 177.357 54.5859L177.668 55.4609C177.719 55.6067 177.773 55.7524 177.822 55.8989L177.968 56.3399C178.16 56.9282 178.363 57.5126 178.541 58.1056C178.723 58.6971 178.91 59.2861 179.079 59.8815L179.59 61.6643L180.081 63.4527L180.32 64.3488L180.553 65.2464C180.709 65.8449 180.861 66.4433 181.012 67.0433C180.657 65.8589 180.33 64.6667 179.971 63.4838L179.449 61.7056L178.907 59.9337C178.534 58.7563 178.17 57.5758 177.767 56.4085L177.619 55.9698C177.57 55.8233 177.514 55.6791 177.463 55.5342L177.148 54.6638C177.046 54.3724 176.932 54.0856 176.82 53.7989L176.484 52.937C176.018 51.7955 175.533 50.6601 174.991 49.5513C174.73 48.9926 174.447 48.444 174.168 47.8923L173.316 46.2474L171.577 42.9731C171.001 41.8767 170.425 40.7827 169.863 39.6816Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M185.314 76.4447C184.812 76.7774 184.31 77.1094 183.809 77.4421C182.376 78.3912 181.444 79.0551 180.993 80.7974C180.368 80.0463 180.336 78.9686 179.723 78.2299C179.266 77.6782 178.355 77.3096 177.73 76.9504C175.961 75.9335 173.905 75.5501 172.144 74.5138C171.88 74.3587 171.597 74.1429 171.583 73.8366C171.567 73.4961 171.889 73.2475 172.183 73.0769C173.607 72.2517 174.474 71.8184 176.15 71.9166C177.876 72.0179 179.621 72.3312 181.339 71.9774C182.233 71.7935 183.081 71.4351 183.956 71.1756C185.195 70.8078 187.325 70.253 188.586 70.7829C189.619 71.2169 190.005 72.8922 189.259 73.7361C189.061 73.959 188.81 74.1265 188.561 74.2909C187.479 75.0094 186.396 75.727 185.314 76.4447Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M180.675 81.0781C180.656 80.4968 180.652 79.9178 180.66 79.3373C180.662 79.0474 180.673 78.7576 180.681 78.4677C180.692 78.1778 180.709 77.888 180.725 77.5981C180.746 77.3082 180.769 77.0183 180.797 76.7293C180.829 76.4394 180.863 76.1534 180.89 75.8682C180.914 75.583 180.927 75.2978 180.906 75.0126C180.889 74.7266 180.84 74.4422 180.771 74.1602C180.889 74.4259 180.97 74.7095 181.02 74.9994C181.069 75.29 181.082 75.5861 181.072 75.8791C181.067 76.1721 181.037 76.462 181.018 76.7495C180.996 77.0378 180.975 77.3254 180.958 77.6145L180.842 79.3467C180.8 79.9233 180.751 80.5015 180.675 81.0781Z"
                        fill="#438289"
                      />
                      <path
                        d="M174.786 97.5555C175.234 97.8804 175.697 98.1835 176.173 98.4601C177.474 99.2152 178.157 99.2549 178.592 100.933C179.067 100.364 179.093 99.6266 179.492 99.05C179.939 98.404 180.836 97.9677 181.535 97.6716C182.455 97.2827 183.428 97.0365 184.355 96.6664C184.917 96.4419 185.46 96.1723 185.979 95.8606C188.224 94.511 184.996 93.4653 183.758 93.4404C181.934 93.403 180.088 93.8884 178.301 93.5214C177.55 93.3671 176.837 93.0656 176.102 92.8474C175.054 92.5365 173.018 91.977 172.01 92.683C170.846 93.4988 171.874 94.9817 172.608 95.7032C173.283 96.3679 174.013 96.9944 174.786 97.5555Z"
                        fill="#68B5B7"
                      />
                      <path
                        d="M178.627 99.5743C178.555 99.0904 178.51 98.6042 178.473 98.1188C178.433 97.6333 178.405 97.1478 178.371 96.6639C178.345 96.1777 178.294 95.7 178.279 95.2052C178.273 94.959 178.285 94.7081 178.328 94.4642C178.373 94.2203 178.443 93.9818 178.547 93.7598C178.492 93.9982 178.454 94.2374 178.442 94.4774C178.426 94.7167 178.439 94.9551 178.46 95.1951C178.485 95.4343 178.514 95.6743 178.541 95.9182C178.566 96.1613 178.586 96.4052 178.604 96.6484C178.618 96.8923 178.631 97.1362 178.64 97.38C178.646 97.6239 178.654 97.8678 178.654 98.1117C178.658 98.598 178.651 99.0858 178.627 99.5743Z"
                        fill="#438289"
                      />
                      <path
                        d="M188.513 112.043H170.254L173.457 130.317H185.31L188.513 112.043Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M190.356 112.045H168.327L168.016 108.189H190.746L190.356 112.045Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M186.644 112.043H170.254L170.416 112.966H186.574C186.469 113.976 186.269 115 185.965 116.023C183.989 122.686 178.345 127.025 172.79 126.511L173.457 130.317H185.31L188.513 112.044H186.644V112.043Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M170.5 127.854H188.866V128.035C188.866 129.456 187.715 130.607 186.295 130.607H173.071C171.651 130.607 170.5 129.456 170.5 128.035V127.854Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M154.634 121.016L154.112 128.947H151.772L151.07 121.016H154.634Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M164.58 122.117L163.94 131.821H161.077L160.219 122.117H164.58Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M164.436 124.294H160.411L160.219 122.117H164.58L164.436 124.294Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M154.561 122.117L154.418 124.294H151.36L151.168 122.117H154.561Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M50.8164 121.016L51.34 128.947H53.6793L54.3814 121.016H50.8164Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M40.875 122.117L41.5155 131.821H44.3776L45.2363 122.117H40.875Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M150.28 91.4805H54.9805V121.695H150.28V91.4805Z"
                        fill="#DEBFA8"
                      />
                      <path
                        d="M54.9645 80.3066L38.2969 86.0908L40.2558 113.494L62.5978 112.504L62.5487 98.4805C62.5487 98.4805 63.6941 81.8807 54.9645 80.3066Z"
                        fill="#F9ECE1"
                      />
                      <path
                        d="M102.756 112.037H50.4453V122.119H102.756V112.037Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M38.2969 86.0895L40.7982 122.119H55.1796C55.1796 122.119 53.7855 92.6833 47.9499 89.035C42.1143 85.3867 38.2969 86.0895 38.2969 86.0895Z"
                        fill="#DEBFA8"
                      />
                      <path
                        d="M54.9834 121.697C55.0519 121.695 55.1229 121.71 55.1829 121.747L55.1719 121.753C54.8408 118.129 54.4667 114.512 54.0195 110.906L53.8441 109.555L53.6641 108.204C53.5402 107.305 53.4086 106.407 53.2675 105.511C52.9901 103.717 52.6831 101.928 52.313 100.155C51.9522 98.3799 51.5306 96.6173 50.9922 94.896C50.8605 94.465 50.714 94.0388 50.5636 93.6149C50.4062 93.1941 50.2472 92.7733 50.0641 92.365C49.8833 91.9559 49.6901 91.5523 49.4711 91.1666C49.2545 90.7801 49.0168 90.4053 48.7433 90.0648C48.4691 89.7235 48.162 89.4227 47.7989 89.1959C47.4148 88.9598 47.0345 88.7159 46.641 88.4962C45.8594 88.0466 45.0537 87.6351 44.2207 87.2884C43.3901 86.9362 42.5337 86.6393 41.6563 86.4203C40.7789 86.2045 39.8797 86.0533 38.9688 86.0385C39.423 86.0136 39.8804 86.026 40.3355 86.0603C40.7906 86.1008 41.2433 86.1671 41.6929 86.252C41.9173 86.2949 42.141 86.3455 42.3638 86.3969C42.5844 86.4562 42.808 86.5092 43.0277 86.5746C43.2459 86.6424 43.468 86.7032 43.6838 86.778C43.8997 86.8536 44.1186 86.9237 44.3329 87.0047C45.1932 87.3227 46.0254 87.7123 46.8374 88.1393C47.2472 88.3466 47.6392 88.5842 48.0358 88.8141C48.0849 88.8406 48.1355 88.8772 48.1862 88.9107L48.3374 89.0136C48.434 89.0861 48.5252 89.1655 48.6187 89.2411L48.8774 89.4897L49.1158 89.7539C49.7236 90.4801 50.1763 91.3014 50.5605 92.1398C50.7569 92.5583 50.9259 92.9869 51.0943 93.4154C51.2556 93.8463 51.4114 94.278 51.5524 94.7144C52.1197 96.4599 52.5467 98.2404 52.9223 100.028C53.2847 101.818 53.5893 103.618 53.8504 105.422C53.9782 106.325 54.0958 107.228 54.2057 108.133L54.3639 109.49L54.5041 110.849C54.593 111.755 54.6787 112.662 54.7519 113.57C54.8236 114.478 54.8899 115.386 54.9499 116.294C55.0605 118.111 55.1525 119.93 55.1852 121.75V121.764L55.1743 121.757C55.1205 121.72 55.0519 121.7 54.9834 121.697Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M100.265 97.5861H61.7513C60.3744 97.5861 59.2578 96.4695 59.2578 95.0926V75.5013C59.2578 74.1244 60.3744 73.0078 61.7513 73.0078H100.265C101.642 73.0078 102.759 74.1244 102.759 75.5013V95.0926C102.758 96.4695 101.642 97.5861 100.265 97.5861Z"
                        fill="#EBD6C5"
                      />
                      <path
                        d="M101.538 112.791H55.564C54.8923 112.791 54.3477 112.246 54.3477 111.574L54.4817 102.759L102.755 102.416V111.574C102.755 112.246 102.211 112.791 101.538 112.791Z"
                        fill="#E5CAB6"
                      />
                      <path
                        opacity="0.3"
                        d="M81.0083 96.0095C71.0818 96.0095 62.6069 91.5944 59.2578 85.377V95.2957C59.2578 96.5604 60.2833 97.5851 61.5472 97.5851H100.469C101.733 97.5851 102.758 96.5596 102.758 95.2957V85.377C99.4089 91.5944 90.9349 96.0095 81.0083 96.0095Z"
                        fill="#E5CAB6"
                      />
                      <path
                        d="M101.711 103.565H55.5078C54.547 103.565 54.0958 102.426 54.8135 101.814L59.478 97.8372C59.6689 97.6744 59.9159 97.584 60.1722 97.584H101.711C102.288 97.584 102.756 98.0328 102.756 98.5853V102.562C102.755 103.116 102.288 103.565 101.711 103.565Z"
                        fill="#F2E0D3"
                      />
                      <path
                        opacity="0.5"
                        d="M101.538 111.166H55.564C54.9687 111.166 54.4739 110.737 54.3687 110.172L54.3477 111.573C54.3477 112.245 54.8923 112.789 55.564 112.789H101.538C102.21 112.789 102.755 112.245 102.755 111.573V109.949C102.755 110.621 102.211 111.166 101.538 111.166Z"
                        fill="#E5CAB6"
                      />
                      <path
                        d="M150.497 80.3066L167.165 86.0908L165.206 113.494L142.864 112.504L142.913 98.4805C142.913 98.4805 141.768 81.8807 150.497 80.3066Z"
                        fill="#F9ECE1"
                      />
                      <path
                        d="M102.701 122.117H155.012V112.036H102.701V122.117Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M167.168 86.0895L164.667 122.119H150.285C150.285 122.119 151.679 92.6833 157.515 89.035C163.351 85.3867 167.168 86.0895 167.168 86.0895Z"
                        fill="#DEBFA8"
                      />
                      <path
                        d="M150.476 121.695C150.407 121.698 150.339 121.717 150.284 121.757L150.273 121.765V121.751C150.306 119.93 150.399 118.112 150.509 116.294C150.569 115.386 150.635 114.478 150.707 113.57C150.78 112.662 150.866 111.756 150.954 110.849L151.095 109.49L151.253 108.133C151.363 107.228 151.48 106.324 151.608 105.422C151.869 103.617 152.174 101.818 152.536 100.028C152.912 98.2414 153.339 96.4608 153.906 94.7146C154.047 94.2782 154.203 93.8458 154.364 93.4156C154.533 92.987 154.702 92.5593 154.898 92.14C155.282 91.3016 155.735 90.4803 156.343 89.754L156.581 89.4899L156.84 89.2413C156.934 89.1649 157.025 89.0863 157.121 89.0138L157.272 88.9109C157.323 88.8774 157.374 88.8408 157.423 88.8143C157.819 88.5844 158.211 88.346 158.621 88.1395C159.432 87.7125 160.265 87.3229 161.126 87.0049C161.34 86.9239 161.559 86.8538 161.775 86.7782C161.991 86.7034 162.213 86.6434 162.431 86.5748C162.651 86.5101 162.873 86.4571 163.095 86.3971C163.318 86.3465 163.541 86.2951 163.766 86.2522C164.215 86.1673 164.668 86.1018 165.123 86.0605C165.579 86.0255 166.036 86.0138 166.49 86.0387C165.579 86.0535 164.68 86.2047 163.802 86.4205C162.924 86.6395 162.069 86.9364 161.238 87.2886C160.404 87.6353 159.599 88.0468 158.818 88.4964C158.424 88.7161 158.044 88.96 157.66 89.1961C157.297 89.4229 156.989 89.7244 156.715 90.065C156.442 90.4055 156.205 90.7795 155.987 91.1668C155.769 91.5525 155.575 91.9561 155.394 92.3652C155.211 92.7735 155.052 93.1943 154.895 93.6151C154.745 94.039 154.598 94.4645 154.466 94.8961C153.928 96.6175 153.506 98.3808 153.146 100.155C152.776 101.929 152.469 103.717 152.191 105.511C152.05 106.407 151.918 107.305 151.794 108.205L151.614 109.555L151.439 110.906C150.992 114.512 150.618 118.129 150.287 121.754L150.276 121.747C150.336 121.708 150.407 121.693 150.476 121.695Z"
                        fill="#D7B399"
                      />
                      <path
                        d="M105.197 97.5861H143.711C145.087 97.5861 146.204 96.4695 146.204 95.0926V75.5013C146.204 74.1244 145.087 73.0078 143.711 73.0078H105.197C103.82 73.0078 102.703 74.1244 102.703 75.5013V95.0926C102.703 96.4695 103.82 97.5861 105.197 97.5861Z"
                        fill="#EBD6C5"
                      />
                      <path
                        d="M103.919 112.791H149.894C150.565 112.791 151.11 112.246 151.11 111.574L150.976 102.759L102.703 102.416V111.574C102.703 112.246 103.248 112.791 103.919 112.791Z"
                        fill="#E5CAB6"
                      />
                      <path
                        opacity="0.3"
                        d="M124.454 96.0095C134.38 96.0095 142.855 91.5944 146.204 85.377V95.2957C146.204 96.5604 145.179 97.5851 143.915 97.5851H104.992C103.728 97.5851 102.703 96.5596 102.703 95.2957V85.377C106.052 91.5944 114.526 96.0095 124.454 96.0095Z"
                        fill="#E5CAB6"
                      />
                      <path
                        d="M103.748 103.565H149.951C150.912 103.565 151.363 102.426 150.646 101.814L145.981 97.8372C145.79 97.6744 145.543 97.584 145.287 97.584H103.748C103.171 97.584 102.703 98.0328 102.703 98.5853V102.562C102.703 103.116 103.171 103.565 103.748 103.565Z"
                        fill="#F2E0D3"
                      />
                      <path
                        opacity="0.5"
                        d="M103.919 111.166H149.894C150.489 111.166 150.984 110.737 151.089 110.172L151.11 111.573C151.11 112.245 150.565 112.789 149.894 112.789H103.919C103.248 112.789 102.703 112.245 102.703 111.573V109.949C102.703 110.621 103.248 111.166 103.919 111.166Z"
                        fill="#E5CAB6"
                      />
                      <path
                        opacity="0.5"
                        d="M41.0192 124.294H45.0431L45.2363 122.117H40.875L41.0192 124.294Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M50.8867 122.117L51.0301 124.294H54.0878L54.2802 122.117H50.8867Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M49.8606 77.2213C50.8915 76.534 54.3278 77.2704 55.9479 77.3195C57.5679 77.3686 68.3671 75.6995 69.6926 75.6995C71.0181 75.6995 73.9144 74.374 74.3072 74.8649C74.6999 75.3558 74.3563 79.774 74.7981 80.6086C75.2399 81.4431 78.2345 90.4751 78.529 91.5551C78.8235 92.6351 81.6436 97.238 81.349 97.8762C81.0545 98.5144 74.7007 97.7165 69.9879 97.8326C66.0474 97.9292 61.9868 98.8697 61.2505 99.0661C60.5141 99.2624 58.4632 100.895 57.5686 100.588C56.6741 100.281 56.5868 95.777 57.0286 93.7151C57.4705 91.6533 53.9998 83.9468 53.3047 83.0631C52.6097 82.1795 48.8296 77.9086 49.8606 77.2213Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 98.6496L47.457 97.9888L50.2568 94.3109L53.263 96.9984L55.7051 93.7912L58.7114 96.4787L61.1542 93.2706L64.1597 95.9582L66.6026 92.7501L69.608 95.4377L72.0509 92.2304L75.0572 94.9171L77.5 91.7098L80.5063 94.3974L82.9491 91.1893L85.9554 93.8769L88.0414 91.1387L88.9094 91.7995L86.1081 95.4766L83.1019 92.7891L80.659 95.9971L77.6528 93.3096L75.2099 96.5177L72.2036 93.8301L69.7616 97.0374L66.7553 94.3506L64.3124 97.5579L61.307 94.8704L58.8641 98.0784L55.8586 95.3909L53.4158 98.599L50.4095 95.9114L48.3251 98.6496Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 93.4328L47.457 92.772L50.2568 89.0949L53.263 91.7824L55.7051 88.5744L58.7114 91.2619L61.1542 88.0538L64.1597 90.7414L66.6026 87.5333L69.608 90.2209L72.0509 87.0136L75.0572 89.7011L77.5 86.4931L80.5063 89.1806L82.9491 85.9725L85.9554 88.6601L88.0414 85.9219L88.9094 86.5827L86.1081 90.2598L83.1019 87.5723L80.659 90.7803L77.6528 88.0928L75.2099 91.3009L72.2036 88.6133L69.7616 91.8214L66.7553 89.1338L64.3124 92.3411L61.307 89.6536L58.8641 92.8617L55.8586 90.1741L53.4158 93.3822L50.4095 90.6946L48.3251 93.4328Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 88.2199L47.457 87.5591L50.2568 83.882L53.263 86.5695L55.7051 83.3615L58.7114 86.049L61.1542 82.8409L64.1597 85.5285L66.6026 82.3204L69.608 85.008L72.0509 81.8007L75.0572 84.4882L77.5 81.2802L80.5063 83.9677L82.9491 80.7596L85.9554 83.4472L88.0414 80.709L88.9094 81.3698L86.1081 85.0469L83.1019 82.3594L80.659 85.5674L77.6528 82.8799L75.2099 86.088L72.2036 83.4004L69.7616 86.6085L66.7553 83.9209L64.3124 87.1282L61.307 84.4407L58.8641 87.6488L55.8586 84.9612L53.4158 88.1693L50.4095 85.4817L48.3251 88.2199Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M48.3251 83.0031L47.457 82.3424L50.2568 78.6652L53.263 81.3527L55.7051 78.1447L58.7114 80.8322L61.1542 77.6241L64.1597 80.3117L66.6026 77.1044L69.608 79.7912L72.0509 76.5839L75.0572 79.2714L77.5 76.0634L80.5063 78.7509L82.9491 75.5428L85.9554 78.2304L88.0414 75.4922L88.9094 76.153L86.1081 79.8301L83.1019 77.1426L80.659 80.3506L77.6528 77.6631L75.2099 80.8712L72.2036 78.1836L69.7616 81.3917L66.7553 78.7041L64.3124 81.9122L61.307 79.2247L58.8641 82.432L55.8586 79.7444L53.4158 82.9525L50.4095 80.2649L48.3251 83.0031Z"
                        fill="#6EC4CE"
                      />
                      <path
                        opacity="0.5"
                        d="M81.349 97.8748C81.5493 97.4408 80.3095 95.1733 79.4025 93.427C76.5287 94.034 67.5295 95.8255 64.3915 95.1483C60.6364 94.3387 59.2642 92.8753 57.3224 88.3737C56.2892 85.9776 55.0167 80.6797 54.2304 77.1584C52.5746 76.9659 50.6 76.7267 49.8606 77.2191C48.8296 77.9064 52.6097 82.1773 53.3039 83.061C53.9982 83.9446 57.4697 91.6512 57.0279 93.713C56.586 95.7748 56.6733 100.278 57.5679 100.586C58.4624 100.893 60.5133 99.2603 61.2497 99.0639C61.9861 98.8676 66.0466 97.927 69.9871 97.8304C74.7007 97.7151 81.0545 98.513 81.349 97.8748Z"
                        fill="#E2D3C9"
                      />
                      <path
                        d="M156.045 77.2213C155.014 76.534 151.578 77.2704 149.958 77.3195C148.338 77.3686 137.539 75.6995 136.213 75.6995C134.888 75.6995 131.991 74.374 131.599 74.8649C131.206 75.3558 131.549 79.774 131.108 80.6086C130.666 81.4431 127.671 90.4751 127.377 91.5551C127.082 92.6351 124.262 97.238 124.557 97.8762C124.851 98.5144 131.205 97.7165 135.918 97.8326C139.858 97.9292 143.919 98.8697 144.655 99.0661C145.392 99.2624 147.443 100.895 148.337 100.588C149.232 100.281 149.319 95.777 148.877 93.7151C148.435 91.6533 151.906 83.9468 152.601 83.0631C153.296 82.1795 157.076 77.9086 156.045 77.2213Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 98.6496L155.499 95.9114L152.494 98.599L150.051 95.3909L147.045 98.0784L144.602 94.8704L141.596 97.5579L139.153 94.3506L136.148 97.0374L133.705 93.8301L130.7 96.5177L128.256 93.3096L125.25 95.9971L122.807 92.7891L119.801 95.4766L117 91.7995L117.867 91.1387L119.953 93.8769L122.96 91.1893L125.403 94.3974L128.409 91.7098L130.852 94.9171L133.858 92.2304L136.301 95.4377L139.306 92.7501L141.749 95.9582L144.755 93.2706L147.198 96.4787L150.204 93.7912L152.646 96.9984L155.652 94.3109L158.452 97.9888L157.584 98.6496Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 93.4328L155.499 90.6946L152.494 93.3822L150.051 90.1741L147.045 92.8617L144.602 89.6536L141.596 92.3411L139.153 89.1338L136.148 91.8214L133.705 88.6133L130.7 91.3009L128.256 88.0928L125.25 90.7803L122.807 87.5723L119.801 90.2598L117 86.5827L117.867 85.9219L119.953 88.6601L122.96 85.9725L125.403 89.1806L128.409 86.4931L130.852 89.7011L133.858 87.0136L136.301 90.2209L139.306 87.5333L141.749 90.7414L144.755 88.0538L147.198 91.2619L150.204 88.5744L152.646 91.7824L155.652 89.0949L158.452 92.772L157.584 93.4328Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 88.2199L155.499 85.4817L152.494 88.1693L150.051 84.9612L147.045 87.6488L144.602 84.4407L141.596 87.1282L139.153 83.9209L136.148 86.6085L133.705 83.4004L130.7 86.088L128.256 82.8799L125.25 85.5674L122.807 82.3594L119.801 85.0469L117 81.3698L117.867 80.709L119.953 83.4472L122.96 80.7596L125.403 83.9677L128.409 81.2802L130.852 84.4882L133.858 81.8007L136.301 85.008L139.306 82.3204L141.749 85.5285L144.755 82.8409L147.198 86.049L150.204 83.3615L152.646 86.5695L155.652 83.882L158.452 87.5591L157.584 88.2199Z"
                        fill="#6EC4CE"
                      />
                      <path
                        d="M157.584 83.0031L155.499 80.2649L152.494 82.9525L150.051 79.7444L147.045 82.432L144.602 79.2247L141.596 81.9122L139.153 78.7041L136.148 81.3917L133.705 78.1836L130.7 80.8712L128.256 77.6631L125.25 80.3506L122.807 77.1426L119.801 79.8301L117 76.153L117.867 75.4922L119.953 78.2304L122.96 75.5428L125.403 78.7509L128.409 76.0634L130.852 79.2714L133.858 76.5839L136.301 79.7912L139.306 77.1044L141.749 80.3117L144.755 77.6241L147.198 80.8322L150.204 78.1447L152.646 81.3527L155.652 78.6652L158.452 82.3424L157.584 83.0031Z"
                        fill="#6EC4CE"
                      />
                      <path
                        opacity="0.5"
                        d="M124.557 97.8748C124.356 97.4408 125.596 95.1733 126.503 93.427C129.377 94.034 138.376 95.8255 141.514 95.1483C145.269 94.3387 146.641 92.8753 148.583 88.3737C149.617 85.9776 150.889 80.6797 151.675 77.1584C153.331 76.9659 155.306 76.7267 156.045 77.2191C157.076 77.9064 153.296 82.1773 152.602 83.061C151.907 83.9446 148.437 91.6512 148.878 93.713C149.319 95.7748 149.232 100.278 148.338 100.586C147.443 100.893 145.392 99.2603 144.656 99.0639C143.92 98.8676 139.859 97.927 135.919 97.8304C131.205 97.7151 124.851 98.513 124.557 97.8748Z"
                        fill="#E2D3C9"
                      />
                      <path
                        d="M122.798 70.5586C120.447 70.448 118.103 70.8259 115.778 71.2023C115.044 71.3215 114.267 71.729 114.82 72.6057C115.123 73.0872 115.753 73.2283 116.318 73.2929C118.746 73.5711 121.24 73.2633 123.68 73.2672L122.798 70.5586Z"
                        fill="#755846"
                      />
                      <path
                        d="M140.096 67.296C140.453 69.4762 139.43 72.6274 137.05 73.2648C136.09 73.522 134.934 73.4308 133.944 73.4246C132.737 73.4176 131.531 73.4074 130.325 73.3989C127.956 73.3817 125.586 73.3646 123.218 73.3474C121.656 73.3365 119.996 73.2968 118.693 72.4357C117.144 71.4134 116.373 69.523 117.402 67.896C118.287 66.498 119.941 65.6417 121.52 65.3019C124.163 64.7323 126.909 65.4874 129.537 65.0136C129.962 64.9373 130.383 64.8282 130.8 64.677C133.173 63.8167 135.53 62.6315 137.952 64.0357C139.115 64.7105 139.879 65.9697 140.096 67.296Z"
                        fill="#5E4130"
                      />
                      <path
                        d="M120.473 62.6022C120.078 62.1837 119.835 62.1019 119.596 62.6972C119.32 63.3837 119.134 64.131 119.142 64.8752C118.152 65.0825 117.214 65.536 116.421 66.171C115.812 65.7378 115.088 65.465 114.363 65.3014C113.737 65.1604 113.667 65.4074 113.786 65.97C113.935 66.6651 114.171 67.336 114.401 68.0077C114.544 68.4284 114.674 68.8531 114.821 69.2723C114.924 69.7071 115.129 70.1217 115.38 70.4326C116.071 71.2929 117.448 71.7923 118.516 71.9334C119.723 72.0931 120.867 71.7846 121.68 70.8666C122.41 70.043 122.908 68.9194 123.097 67.8409C123.206 67.2269 123.155 66.5708 122.939 65.977C122.697 65.3108 122.218 64.8261 121.802 64.2682C121.377 63.7001 120.962 63.1188 120.473 62.6022Z"
                        fill="#755846"
                      />
                      <path
                        d="M138.316 65.5664C140.59 67.7311 140.352 70.2262 139.095 72.4329C137.702 74.8805 135.408 76.5379 132.849 77.6156C129.827 78.8888 126.369 79.5402 123.133 78.7766C122.482 78.6231 121.771 78.3036 121.579 77.6631C121.013 75.768 123.968 75.8023 125.022 75.7119C127.188 75.5272 129.483 75.5054 131.589 74.801C133.901 74.028 135.547 72.3792 136.703 70.269L138.316 65.5664Z"
                        fill="#755846"
                      />
                      <path
                        d="M139.963 69.0548C139.955 68.0379 139.609 67.0226 138.975 66.2262C137.366 64.2026 134.234 64.1395 132.078 65.2366C129.605 66.4951 129.213 69.8263 130.182 72.1741C130.226 72.2816 129.316 72.2504 129.239 72.2559C128.585 72.3018 127.231 72.1772 126.97 72.9782C126.796 73.5151 127.154 74.2413 127.693 74.4151C127.918 74.4876 128.159 74.4884 128.396 74.4876C130.09 74.4852 131.784 74.4907 133.478 74.4938C134.805 74.4962 135.807 74.2507 136.602 73.1193C137.015 72.5302 137.329 71.8725 137.769 71.3037L139.963 69.0548Z"
                        fill="#755846"
                      />
                      <path
                        d="M120.23 69.7994C120.326 70.0472 120.17 70.3378 119.883 70.4493C119.595 70.5607 119.284 70.45 119.188 70.203C119.093 69.9552 119.248 69.6646 119.536 69.5532C119.823 69.4417 120.134 69.5524 120.23 69.7994Z"
                        fill="#E88E8E"
                      />
                      <path
                        d="M122.614 65.2617C122.7 65.4082 122.808 65.5313 122.91 65.67C122.961 65.7394 123.008 65.8142 123.047 65.8976C123.086 65.9833 123.111 66.0674 123.135 66.1516C123.18 66.3207 123.209 66.4906 123.235 66.6565C123.262 66.8186 123.285 66.997 123.296 67.1685C123.342 67.8628 123.227 68.5672 122.979 69.2202C122.728 69.8708 122.343 70.4747 121.842 70.9578C121.59 71.1994 121.318 71.4121 121.014 71.5836C120.86 71.6654 120.698 71.7394 120.527 71.7791C120.357 71.8212 120.176 71.8267 120.012 71.7862C120.352 71.7643 120.637 71.596 120.886 71.3927C121.135 71.1869 121.366 70.9524 121.573 70.7062C121.99 70.2129 122.31 69.6487 122.543 69.0526C122.77 68.4542 122.907 67.8199 122.93 67.1739C122.933 67.0929 122.935 67.0126 122.935 66.9316L122.93 66.6838C122.926 66.517 122.924 66.3526 122.91 66.1921C122.903 66.1119 122.894 66.0316 122.877 65.9591C122.859 65.8843 122.829 65.8103 122.797 65.7339C122.733 65.5835 122.652 65.4277 122.614 65.2617Z"
                        fill="#8E6751"
                      />
                      <path
                        d="M119.832 67.9407C119.957 68.0295 120.084 68.0701 120.211 68.0794C120.337 68.0888 120.452 68.0623 120.558 68.0054C120.663 67.9477 120.757 67.8636 120.828 67.7584C120.9 67.6532 120.949 67.5246 120.977 67.375C121.045 67.5129 121.05 67.6844 120.992 67.8394C120.935 67.9945 120.819 68.1301 120.669 68.2111C120.593 68.2516 120.51 68.2773 120.423 68.2867C120.338 68.2945 120.251 68.2844 120.172 68.2586C120.014 68.2072 119.878 68.0888 119.832 67.9407Z"
                        fill="#061F34"
                      />
                      <path
                        d="M116.863 69.4056C116.988 69.4944 117.116 69.5349 117.242 69.5443C117.368 69.5536 117.484 69.5271 117.59 69.4702C117.695 69.4126 117.788 69.3284 117.859 69.2232C117.931 69.118 117.98 68.9895 118.008 68.8398C118.077 68.9778 118.081 69.1492 118.024 69.3043C117.966 69.4593 117.851 69.5949 117.7 69.676C117.625 69.7165 117.541 69.743 117.455 69.7515C117.369 69.7593 117.283 69.7492 117.203 69.7235C117.046 69.6728 116.909 69.5536 116.863 69.4056Z"
                        fill="#061F34"
                      />
                      <path
                        d="M108.28 80.7512C107.392 82.672 105.911 84.3613 104.271 85.6494C102.477 87.059 100.307 88.0182 98.0396 88.3175C97.4108 88.4008 95.7028 88.7694 95.4791 88.0104C95.2983 87.3949 96.5178 85.8286 96.8311 85.379C97.9313 83.8011 99.122 82.2855 100.394 80.8416C101.246 79.8738 103.205 78.6683 103.236 77.2626C103.262 76.1039 102.405 75.0169 101.972 73.9961C101.14 72.0371 100.248 70.1039 99.4391 68.1355C98.5274 65.9163 97.7965 63.4579 98.1106 61.0337C98.268 59.815 99.4797 57.63 100.885 58.6189C103.07 60.1563 104.597 63.4314 105.781 65.7527C107.443 69.0075 108.781 72.6254 109.113 76.2839C109.256 77.8501 108.923 79.3611 108.28 80.7512Z"
                        fill="#F9AE8F"
                      />
                      <path
                        d="M70.8966 80.7512C71.785 82.672 73.2663 84.3613 74.9057 85.6494C76.7003 87.059 78.8697 88.0182 81.1372 88.3175C81.766 88.4008 83.4741 88.7694 83.6977 88.0104C83.8785 87.3949 82.659 85.8286 82.3458 85.379C81.2455 83.8011 80.0549 82.2855 78.7832 80.8416C77.9307 79.8738 75.9717 78.6683 75.9406 77.2626C75.9148 76.1039 76.772 75.0169 77.2052 73.9961C78.0367 72.0371 78.9289 70.1039 79.7377 68.1355C80.6494 65.9163 81.3803 63.4579 81.0663 61.0337C80.9089 59.815 79.6972 57.63 78.2915 58.6189C76.1073 60.1563 74.58 63.4314 73.3956 65.7527C71.7335 69.0075 70.3956 72.6254 70.0637 76.2839C69.9218 77.8501 70.2538 79.3611 70.8966 80.7512Z"
                        fill="#F9AE8F"
                      />
                      <path
                        d="M88.0875 30.8294C88.2792 30.6985 88.46 30.538 88.6595 30.4195C89.6351 29.8398 90.1501 30.4834 91.0595 30.6315C91.4203 30.6907 91.7896 30.6486 92.152 30.5972C92.5159 30.5457 92.9179 30.4935 93.2257 30.6922C93.6091 30.9393 93.6933 31.4793 94.0556 31.7551C94.6509 32.2094 95.6 31.7076 96.239 32.1011C96.9013 32.5086 96.8429 33.478 97.22 34.0663C97.4024 34.3515 97.7156 34.5252 97.965 34.7559C98.5525 35.2982 98.2619 36.3712 98.1154 37.0562C97.6915 39.0447 97.2231 41.024 96.712 42.9923C96.2452 44.7892 94.7842 45.7523 93.2733 46.7372C92.2166 47.4261 91.1584 47.8437 90.027 48.3643C88.9712 48.8497 87.8132 48.9884 86.7153 48.457C85.7833 48.0058 85.1436 47.1401 84.5413 46.3063C83.9156 45.4406 83.4145 44.497 83.0888 43.4778C82.7062 42.2785 82.4989 41.0419 82.3018 39.8029C82.1841 39.0634 82.0727 38.3232 81.9683 37.5814C81.8685 36.8754 81.7228 36.1515 81.7057 35.4377C81.6379 34.5603 81.6309 33.319 82.2963 32.6271C82.4304 32.4876 82.5963 32.3832 82.7841 32.3333C83.1948 32.2234 83.5361 32.3676 83.9366 32.1229C84.3098 31.8954 84.5522 31.505 84.8943 31.2377C85.3633 30.8715 86.0062 30.7304 86.5898 30.8676C86.9117 30.9431 87.228 31.0982 87.5561 31.0577C87.7525 31.032 87.9239 30.9416 88.0875 30.8294Z"
                        fill="#835F55"
                      />
                      <path
                        d="M85.6741 57.8081C87.1749 59.4024 90.0588 59.5294 92.0777 58.8772C93.4523 58.433 94.4232 57.4208 94.452 56.0284C94.4848 54.4722 93.0237 53.3665 92.6551 51.9156C92.4455 51.0935 92.4666 50.2465 92.4884 49.4096C92.5133 48.4333 92.5211 47.4538 92.5718 46.479C91.5377 46.2748 90.6993 46.1719 89.6006 46.2148C88.692 46.2499 87.7842 46.161 86.8756 46.2109C86.8024 46.2148 86.7229 46.2218 86.6715 46.267C86.6193 46.313 86.6099 46.3839 86.6037 46.4501C86.4821 47.7686 86.6014 49.1042 86.5063 50.425C86.4182 51.639 86.1276 52.8608 85.3671 53.866C84.439 55.0925 84.6673 56.739 85.6741 57.8081Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M92.5931 51.7192C92.4302 50.9548 92.4466 50.1717 92.4669 49.3979C92.4918 48.4215 92.4996 47.4421 92.5502 46.4672C91.5162 46.2631 90.6778 46.1602 89.5791 46.2031C88.6705 46.2381 87.7627 46.1493 86.8541 46.1992C86.7809 46.2031 86.7022 46.2101 86.65 46.2553C86.5978 46.3013 86.5884 46.3722 86.5822 46.4384C86.4606 47.7569 86.5798 49.0924 86.4848 50.4132C86.4575 50.7912 86.4068 51.1699 86.332 51.5431C86.4746 51.66 86.6196 51.7714 86.7692 51.8751C87.8905 52.6504 89.403 52.9075 90.7448 52.5522C91.4282 52.3706 92.0422 52.0847 92.5931 51.7192Z"
                        fill="#F38D70"
                      />
                      <path
                        d="M95.9224 41.9959C95.9333 41.8665 95.9458 41.7372 95.9582 41.6078C96.1117 40.0712 96.2473 38.0499 95.2336 36.7572C94.2587 35.5151 92.4603 35.1738 91.0008 34.8668C88.9133 34.4273 86.4821 35.0553 84.7444 36.2717C84.0532 36.7556 83.6535 37.5714 83.4969 38.4005C83.341 39.2265 83.4493 40.1273 83.4688 40.9634C83.4984 42.2546 83.4867 43.5458 83.7603 44.8128C84.0135 45.9878 84.4132 47.1949 85.0343 48.2305C85.5805 49.2053 86.2857 50.1162 87.1896 50.784C88.1972 51.5289 89.5553 51.7767 90.7608 51.4346C92.4424 50.9577 93.7071 49.6775 94.5081 48.1634C95.1993 46.8575 95.5834 45.3949 95.7517 43.9323C95.825 43.2871 95.8663 42.6403 95.9224 41.9959Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M96.4742 43.2881C96.5443 43.2577 96.5888 43.1907 96.6269 43.126C96.7789 42.8665 96.9597 42.5206 96.9721 42.2167C96.983 41.9486 96.9792 41.6704 96.9854 41.3992C97.0158 40.0637 96.8638 38.792 96.5412 37.7299C96.1103 36.3094 95.1823 35.0657 93.8958 34.2686C92.6708 33.5104 91.1903 33.1839 89.7487 33.3156C88.6734 33.4138 88.0305 33.5945 86.6809 34.0582C85.77 34.3706 85.1529 34.8218 84.5692 35.4312C83.8391 36.194 83.458 37.3309 83.289 38.3517C83.116 39.3927 83.1269 40.4525 83.1386 41.5044C83.1394 41.6042 83.1425 42.7387 83.1978 42.8221C83.2531 42.9055 83.3817 42.9476 83.4549 42.8798C83.4892 42.8486 83.6622 41.7741 83.6716 41.7289C83.8695 40.8141 83.9139 40.5117 84.069 39.8821C84.2451 39.166 84.3066 38.6603 84.5684 38.0696C84.7679 37.6192 85.2144 37.1283 85.6991 36.9959C86.084 36.8907 86.4869 37.0434 86.864 37.1712C88.1326 37.6029 89.5157 37.7829 90.8311 37.5125C91.4739 37.38 92.0958 37.1431 92.7495 37.0792C93.4033 37.0153 94.2854 37.1626 94.6968 37.6621C94.883 37.8881 94.989 38.167 95.0778 38.4437C95.328 39.2221 95.4698 40.027 95.5984 40.8312C95.7191 41.587 95.7308 42.3491 95.981 43.0356C96.0067 43.1065 96.062 43.1642 96.1205 43.2125C96.1992 43.2795 96.3737 43.3317 96.4742 43.2881Z"
                        fill="#F38D70"
                      />
                      <path
                        d="M95.7844 42.9004C97.1176 42.1352 97.3826 44.4082 97.0974 45.5015C96.9797 45.9526 96.8091 46.3882 96.5613 46.7451C96.227 47.2267 95.3052 47.9911 94.8353 47.3872C94.6218 47.1129 94.6233 46.6812 94.6389 46.2978C94.6787 45.27 94.8805 43.4186 95.7844 42.9004Z"
                        fill="#F7AC8D"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M85.0864 53.4355C85.2168 53.6716 85.3598 53.8995 85.5158 54.1171C86.3145 55.2298 87.4413 56.009 88.7262 56.2802C90.9013 56.7398 93.3039 55.5973 94.4053 53.5246C94.6986 53.6551 94.9943 53.7801 95.2916 53.9015C95.2213 54.0455 95.1463 54.1871 95.0655 54.3255C93.8125 56.4714 91.0775 57.6777 88.5621 57.1946C87.1198 56.9172 85.8146 56.1169 84.8865 54.9418C84.6134 54.5957 84.3687 54.2163 84.1548 53.8075L84.2186 53.7824C84.2837 53.7567 84.3496 53.731 84.416 53.705C84.6363 53.6189 84.8621 53.5306 85.0864 53.4355ZM89.6834 57.5047C89.2954 57.5047 88.9065 57.4688 88.5232 57.3956C87.0325 57.1088 85.6837 56.2829 84.7252 55.0688C84.4396 54.7071 84.1845 54.3103 83.9622 53.8825C83.4801 54.0691 82.9955 54.2481 82.5113 54.4269C81.0454 54.9682 79.5833 55.5082 78.2076 56.2549C78.135 56.293 78.1724 56.9681 78.1945 57.3669C78.2018 57.4988 78.2074 57.6004 78.2068 57.6388C78.1998 58.0666 78.199 58.4921 78.1983 58.9245C78.1973 59.6353 78.1927 60.3024 78.1883 60.952V60.952C78.1757 62.807 78.1641 64.5199 78.238 66.7043C78.272 67.7023 78.3116 68.7013 78.3512 69.7008L78.3512 69.7008C78.4207 71.4537 78.4902 73.2079 78.5294 74.9602C78.6323 79.5833 77.4346 84.8314 76.3281 88.5951C80.0528 90.3421 85.2175 91.5257 89.3934 91.5958V91.599C89.4243 91.599 89.4555 91.5986 89.4868 91.5982L89.4877 91.5982C89.5192 91.5978 89.5508 91.5974 89.582 91.5974C89.6451 91.5982 89.7082 91.599 89.7705 91.599V91.5951C93.9464 91.5249 99.1119 90.3413 102.836 88.5943C101.729 84.8314 100.532 79.5833 100.634 74.9594C100.673 73.2056 100.743 71.4498 100.813 69.6954L100.813 69.6953L100.813 69.6943C100.852 68.6968 100.892 67.6996 100.926 66.7035C101 64.5191 100.988 62.8062 100.976 60.9512V60.9511C100.971 60.3015 100.967 59.6345 100.966 58.9237C100.965 58.4913 100.964 58.0666 100.957 57.638C100.956 57.5994 100.962 57.4975 100.969 57.3653L100.969 57.3652L100.969 57.3651C100.992 56.9662 101.029 56.2922 100.956 56.2541C99.7026 55.5941 98.3811 55.0919 97.06 54.5899C96.5326 54.3895 96.0053 54.1891 95.4824 53.9788C95.4081 54.1317 95.3286 54.2824 95.2424 54.4299C94.1383 56.3187 91.9221 57.5047 89.6834 57.5047Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M69.2969 69.9117C69.3997 69.6717 74.1156 59.4351 75.1777 58.2701C76.2398 57.1052 79.2125 55.7891 79.2125 55.7891L78.6959 70.1447L77.4444 72.3858L69.2969 69.9117Z"
                        fill="#4C9DAD"
                      />
                      <path
                        d="M83.5763 42.9004C82.2431 42.1352 81.9782 44.4082 82.2634 45.5015C82.381 45.9526 82.5517 46.3882 82.7995 46.7451C83.1338 47.2267 84.0556 47.9911 84.5254 47.3872C84.739 47.1129 84.7374 46.6812 84.7218 46.2978C84.6821 45.27 84.4802 43.4186 83.5763 42.9004Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M94.3719 41.7776C94.5067 41.7644 94.6135 41.7285 94.6703 41.6592C94.8948 41.3849 94.5574 40.9937 94.3361 40.8441C93.9161 40.5605 92.4955 40.1077 92.1121 40.6579C91.7537 41.1706 92.4815 41.427 92.8602 41.5298C93.1173 41.5999 93.9098 41.8228 94.3719 41.7776Z"
                        fill="#835F55"
                      />
                      <path
                        d="M85.0606 41.5151C84.9265 41.494 84.8221 41.4527 84.7699 41.3802C84.5611 41.0935 84.9203 40.7218 85.1502 40.5854C85.5858 40.326 87.0289 39.9543 87.3811 40.5247C87.7099 41.0569 86.9689 41.2719 86.5847 41.353C86.3229 41.4083 85.5187 41.586 85.0606 41.5151Z"
                        fill="#835F55"
                      />
                      <path
                        d="M93.3032 43.4005C93.2307 43.9428 92.9042 44.3464 92.5746 44.3028C92.245 44.2584 92.0362 43.7838 92.1078 43.2415C92.1803 42.6992 92.5068 42.2955 92.8364 42.3392C93.1668 42.3828 93.3756 42.8581 93.3032 43.4005Z"
                        fill="#1E2032"
                      />
                      <path
                        d="M87.2288 43.1659C87.2132 43.7129 86.9311 44.1485 86.5984 44.1391C86.2657 44.1298 86.0085 43.6786 86.0241 43.1316C86.0397 42.5846 86.3218 42.149 86.6545 42.1584C86.9872 42.1685 87.2444 42.6189 87.2288 43.1659Z"
                        fill="#1E2032"
                      />
                      <path
                        d="M90.7072 46.0382C90.6994 46.3008 90.2327 46.5003 89.6646 46.4847C89.0958 46.4683 88.6415 46.2432 88.6485 45.9806C88.6563 45.718 89.1231 45.5185 89.6911 45.5341C90.26 45.5496 90.7142 45.7756 90.7072 46.0382Z"
                        fill="#F38D70"
                      />
                      <path
                        d="M94.4398 46.0944C95.0234 45.9814 95.4169 45.5692 95.4535 45.0658C95.4855 44.6224 95.1224 44.3092 94.6073 44.3333C94.0462 44.3598 93.3761 44.6778 93.2109 45.1702C92.9647 45.8996 93.7353 46.2307 94.4398 46.0944Z"
                        fill="#FD816C"
                      />
                      <path
                        d="M84.6711 45.8093C84.11 45.6659 83.7524 45.2342 83.7461 44.7301C83.7415 44.2859 84.1132 43.9921 84.6126 44.0428C85.1565 44.0981 85.7893 44.4511 85.921 44.9506C86.1173 45.6916 85.3482 45.9823 84.6711 45.8093Z"
                        fill="#FD816C"
                      />
                      <path
                        d="M87.5352 47.3711C87.7042 47.4825 87.8811 47.5659 88.0643 47.6306C88.2474 47.6953 88.4344 47.7428 88.6245 47.7786C89.004 47.8495 89.3913 47.8776 89.7785 47.8753C90.1658 47.8729 90.5539 47.8433 90.9373 47.7794C91.1289 47.7475 91.3191 47.7069 91.5069 47.6524C91.6947 47.5979 91.8786 47.5301 92.0578 47.4366C91.9884 47.509 91.9113 47.5776 91.8271 47.636C91.7858 47.6672 91.7422 47.6937 91.6986 47.7202C91.6549 47.7482 91.6097 47.7708 91.5645 47.795C91.3822 47.8893 91.1897 47.9617 90.9926 48.0194C90.5983 48.1324 90.1892 48.1862 89.7801 48.1877C89.371 48.1893 88.9588 48.1371 88.5653 48.0155C88.3689 47.954 88.1772 47.8737 87.9996 47.7677C87.8227 47.6633 87.6583 47.5324 87.5352 47.3711Z"
                        fill="#F6604B"
                      />
                      <path
                        d="M95.62 33.8061C94.5447 33.1757 93.2293 32.8796 92.0239 32.684C90.8309 32.4908 89.6169 32.3817 88.4091 32.4542C87.0797 32.5337 85.7433 32.8282 84.5667 33.4679C82.8672 34.3913 82.6591 36.4173 82.6062 38.1573C82.5586 39.7251 82.8805 41.4651 83.5272 42.9277C83.5833 42.5272 83.8327 38.6591 84.0594 37.7108C84.1288 37.4217 84.2168 37.1295 84.3968 36.8887C84.7522 36.4126 85.4059 36.2248 86.0129 36.2428C86.62 36.2607 87.2052 36.4493 87.7958 36.5848C89.2498 36.9184 90.7865 36.9277 92.235 36.5755C92.8124 36.4352 93.3891 36.2163 93.993 36.3651C95.207 36.6643 95.6434 37.9345 95.6971 38.9116C95.7361 39.6246 95.8343 42.4914 95.8499 42.9184C95.8491 42.9005 95.9792 42.7867 95.9932 42.7688C96.139 42.5857 96.2403 42.3651 96.3268 42.1501C96.5917 41.4893 96.6938 40.7786 96.8122 40.0804C97.1481 38.1075 97.939 35.3817 95.9449 34.0126C95.839 33.9394 95.7306 33.8708 95.62 33.8061Z"
                        fill="#835F55"
                      />
                      <path
                        d="M81.6755 35.0556C81.6732 34.9831 81.6693 34.8873 81.6646 34.775C81.6428 34.2537 81.6093 33.466 81.6576 33.1379C81.7799 32.3174 82.3074 31.475 83.2113 31.4439C83.3836 31.4384 83.5534 31.4633 83.7178 31.4883C83.9142 31.5179 84.0997 31.5459 84.2828 31.5226C84.6475 31.4758 84.8469 31.2381 85.0776 30.9631C85.1205 30.9124 85.1633 30.8602 85.2085 30.8096C85.8155 30.1207 86.869 30.314 87.4441 30.4909L87.4877 30.5041C87.974 30.6537 88.4329 30.7955 88.9129 30.6311C89.2145 30.5283 89.5137 30.3974 89.802 30.2711C90.0405 30.1667 90.2867 30.0592 90.5361 29.9665C91.2989 29.682 92.3524 29.4522 93.0374 29.9727C93.2992 30.1714 93.395 30.4807 93.4878 30.7792C93.5789 31.073 93.6646 31.3504 93.9023 31.4766C94.108 31.5857 94.3636 31.5202 94.6106 31.4563C94.7127 31.4298 94.8179 31.4026 94.9192 31.3885C95.5885 31.2927 96.1784 31.5787 96.5353 32.1724C96.6779 32.4101 96.7909 32.6883 96.8906 33.046C96.9382 33.2158 96.9631 33.3896 96.9873 33.5571C97.0169 33.7628 97.0449 33.9576 97.1104 34.1423C97.1961 34.3847 97.2935 34.6589 97.4789 34.8483L97.3317 34.9917C97.115 34.7696 97.0099 34.4727 96.9163 34.2109C96.8439 34.0067 96.8127 33.7932 96.7831 33.586C96.7597 33.4247 96.7356 33.2579 96.6919 33.1005C96.5976 32.7608 96.4917 32.4989 96.3584 32.2776C96.0413 31.7501 95.5395 31.5062 94.9472 31.5911C94.8576 31.6036 94.7618 31.6285 94.6613 31.655C94.3893 31.7252 94.0815 31.8046 93.8049 31.6582C93.4924 31.4922 93.3896 31.1602 93.2906 30.84C93.2041 30.5602 93.1215 30.2953 92.9119 30.1363C92.301 29.6727 91.3207 29.8924 90.6062 30.1589C90.3623 30.2501 90.1184 30.3568 89.8823 30.4597C89.5893 30.5875 89.287 30.72 88.9768 30.8259C88.4337 31.0114 87.921 30.8532 87.4246 30.7005L87.381 30.6872C86.8542 30.5252 85.8911 30.3436 85.3605 30.9452C85.3168 30.995 85.2747 31.0449 85.2327 31.0948C84.9958 31.3769 84.7511 31.6691 84.3062 31.7259C84.0942 31.7532 83.8862 31.722 83.6843 31.6917C83.5223 31.6675 83.3688 31.6441 83.216 31.6496C82.4306 31.6769 81.9677 32.4319 81.8586 33.1683C81.8126 33.4769 81.8469 34.2841 81.868 34.7665C81.8726 34.8795 81.8765 34.9761 81.8789 35.0486L81.6755 35.0556Z"
                        fill="#835F55"
                      />
                      <path
                        d="M87.3164 32.6806C87.3974 32.4741 87.5307 32.287 87.6982 32.1367C87.8665 31.987 88.0691 31.8748 88.2858 31.8031C88.5032 31.7338 88.7377 31.7135 88.9676 31.7447C89.2006 31.7759 89.4125 31.8756 89.6112 31.9754C89.8107 32.0759 90.0008 32.1811 90.2011 32.2481C90.4021 32.3143 90.6125 32.3517 90.8245 32.3541C91.0356 32.358 91.2476 32.3307 91.4494 32.2715C91.5507 32.2411 91.6481 32.2052 91.7455 32.1593L92.0447 32.0159C92.1476 31.9683 92.2575 31.9255 92.3751 31.8967C92.4928 31.8702 92.6198 31.8585 92.7437 31.8803C92.8676 31.9005 92.9837 31.9481 93.0873 32.0112C93.191 32.0743 93.2821 32.1522 93.3624 32.238C93.4427 32.3237 93.5136 32.4164 93.5759 32.5122C93.6398 32.6096 93.6912 32.7094 93.7481 32.7967C93.805 32.8847 93.8673 32.9595 93.9476 33.0117C94.0279 33.0647 94.1237 33.0998 94.2266 33.1247C94.4315 33.1754 94.6614 33.1871 94.8819 33.2774C94.9918 33.3242 95.0931 33.3928 95.1741 33.4777C95.2567 33.5619 95.3222 33.66 95.3728 33.7637C95.4733 33.9717 95.5115 34.2024 95.5107 34.4252C95.5115 34.6497 95.4788 34.8694 95.4445 35.0884C95.457 34.8671 95.4702 34.6458 95.4538 34.4276C95.4375 34.2102 95.3884 33.9951 95.2832 33.8096C95.1811 33.6242 95.0245 33.4707 94.832 33.4029C94.6372 33.3328 94.4175 33.3265 94.1915 33.2813C94.0785 33.258 93.9616 33.2221 93.8541 33.1567C93.7458 33.0904 93.6624 32.9922 93.5977 32.8964C93.5323 32.7998 93.4801 32.7024 93.4201 32.6167C93.3601 32.5294 93.2938 32.4468 93.2214 32.3728C93.078 32.2239 92.9019 32.1086 92.711 32.0782C92.6159 32.0618 92.5185 32.0712 92.4211 32.0938C92.3237 32.1187 92.2263 32.1569 92.1289 32.2021L91.8289 32.3431C91.726 32.3907 91.6154 32.4312 91.504 32.4631C91.3925 32.4959 91.2788 32.5177 91.1642 32.5317C91.0497 32.5465 90.9336 32.552 90.8182 32.5465C90.5876 32.5387 90.3585 32.4935 90.1411 32.4164C89.9221 32.3385 89.7273 32.2208 89.5364 32.1148C89.3455 32.0096 89.1515 31.9138 88.945 31.8748C88.7385 31.8359 88.5211 31.8437 88.313 31.8974C88.1058 31.9512 87.9071 32.0463 87.7341 32.178C87.5634 32.3135 87.4169 32.4834 87.3164 32.6806Z"
                        fill="#835F55"
                      />
                      <path
                        d="M109.892 69.9117C109.789 69.6717 105.073 59.4351 104.011 58.2701C102.949 57.1052 99.9766 55.7891 99.9766 55.7891L100.493 70.1447L101.745 72.3858L109.892 69.9117Z"
                        fill="#4C9DAD"
                      />
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M78.3889 70.6995C78.3538 70.2943 78.3383 69.8899 78.3305 69.4855C78.3242 69.2829 78.3258 69.0811 78.3242 68.8792L78.3297 68.273L78.346 67.6668C78.3554 67.4649 78.3608 67.2623 78.3741 67.0605C78.3967 66.6569 78.4255 66.2525 78.4762 65.8496C78.512 66.2548 78.5268 66.6592 78.5346 67.0636C78.5408 67.2662 78.5385 67.4681 78.5408 67.6699L78.5354 68.2761L78.519 68.8824C78.5097 69.0842 78.5042 69.2868 78.491 69.4886C78.4684 69.8922 78.4388 70.2959 78.3889 70.6995Z"
                          fill="#A7C8BC"
                        />
                      </g>
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M100.737 70.6995C100.687 70.2959 100.658 69.8922 100.636 69.4886C100.623 69.2868 100.617 69.085 100.608 68.8824L100.591 68.2761L100.586 67.6699C100.588 67.4681 100.587 67.2655 100.592 67.0636C100.6 66.6592 100.616 66.2548 100.651 65.8496C100.7 66.2532 100.73 66.6569 100.753 67.0605C100.766 67.2623 100.771 67.4642 100.781 67.6668L100.797 68.273L100.803 68.8792C100.8 69.0811 100.802 69.2837 100.796 69.4855C100.788 69.8899 100.772 70.2951 100.737 70.6995Z"
                          fill="#A7C8BC"
                        />
                      </g>
                      <path
                        d="M113.944 92.2365C113.396 93.0617 112.676 93.7786 111.965 94.3708C108.084 97.6007 102.805 97.9958 98.2062 99.4186C94.0981 100.69 90.4474 100.865 86.2466 100.372C83.3752 100.034 80.478 99.1794 77.7087 98.1945C74.859 97.1815 72.0749 97.116 69.4193 95.5108C67.3271 94.2469 64.6317 93.0025 64.313 90.0157C64.1798 88.7666 65.1561 87.0391 66.1894 86.2864C67.6006 85.2593 70.2577 85.07 71.9806 85.2297C78.9211 85.871 83.1477 88.8765 90.1365 88.9279C94.0365 88.9568 97.6732 87.7466 101.42 86.6526C104.311 85.8087 107.521 85.2703 110.531 85.4471C112.411 85.5578 114.005 87.1568 114.467 88.7853C114.797 89.9503 114.626 91.2111 113.944 92.2365Z"
                        fill="#1C3842"
                      />
                      <path
                        d="M103.112 88.2682H76.0659L74.128 68.133C74.0929 67.7722 74.3726 67.459 74.7295 67.459H104.448C104.804 67.459 105.084 67.7715 105.049 68.133L103.112 88.2682Z"
                        fill="#B8D1CE"
                      />
                      <path
                        d="M103.325 88.8385H75.8541L73.8857 68.7033C73.8507 68.3425 74.1343 68.0293 74.4967 68.0293H104.681C105.045 68.0293 105.328 68.3418 105.292 68.7033L103.325 88.8385Z"
                        fill="white"
                      />
                      <path
                        d="M103.31 88.8379H75.8555V90.0597H103.31V88.8379Z"
                        fill="#B8D1CE"
                      />
                      <path
                        d="M91.4504 78.823C91.6626 77.7929 90.9995 76.7858 89.9694 76.5737C88.9393 76.3615 87.9322 77.0246 87.7201 78.0547C87.5079 79.0848 88.171 80.0919 89.2011 80.304C90.2312 80.5162 91.2383 79.8531 91.4504 78.823Z"
                        fill="#B8D1CE"
                      />
                      <path
                        d="M71.7574 99.5848C71.6514 99.8163 71.5906 100.074 71.5703 100.344C71.4761 101.638 71.9451 103.241 73.128 103.927C74.2431 104.573 75.6153 103.789 76.6618 103.38C77.713 102.968 78.7595 102.544 79.8301 102.184C82.2075 101.385 84.6691 100.88 87.1182 100.354C88.1694 100.128 89.4161 100.055 90.2585 99.3277C90.9543 98.7269 91.3494 97.7669 91.2161 96.8505C91.0424 95.6622 89.9959 94.6586 88.8013 94.5347C88.3494 94.4879 87.892 94.5549 87.4502 94.6594C86.0172 94.9983 84.6847 95.7035 83.3086 96.2248C81.8577 96.7742 80.3849 97.2775 78.8717 97.6274C77.4582 97.9547 76.0049 98.0459 74.5774 98.2913C73.8971 98.4082 73.1872 98.4799 72.5545 98.7752C72.1781 98.9513 71.9171 99.2381 71.7574 99.5848Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M79.9552 97.2793L81.4731 101.797L77.8902 102.901L76.3801 101.926L75.6328 97.9635L79.9552 97.2793Z"
                        fill="white"
                      />
                      <path
                        d="M72.6571 105.672C72.5597 105.69 72.4615 105.706 72.3633 105.721C71.1033 105.914 69.8457 105.407 68.9277 104.552C68.2459 103.917 67.7347 103.094 67.4807 102.197C67.1558 101.048 67.2991 99.8801 68.0332 98.9123C68.4353 98.3817 68.9869 98.0856 69.5838 97.823C70.4916 97.4232 71.4392 97.2799 72.4241 97.2939C73.4729 97.3095 74.5148 97.2549 75.562 97.3593C76.2096 97.4139 76.8633 97.4692 77.4836 97.6632C77.4088 97.6391 77.0192 97.8674 76.9452 97.9134C76.7862 98.0123 76.7106 98.0607 76.7169 98.2734C76.7262 98.5765 77.0387 98.864 77.1937 99.1095C77.4485 99.5108 77.6527 99.9565 77.6979 100.429C77.7789 101.284 77.4462 102.604 78.8114 102.673C78.7421 102.67 77.9465 103.273 77.8576 103.345C77.6153 103.542 76.9421 103.94 76.6678 104.09C75.1202 104.943 74.2646 105.379 72.6571 105.672Z"
                        fill="white"
                      />
                      <path
                        d="M73.5946 105.233C73.4972 105.251 73.399 105.267 73.3008 105.282C72.0408 105.474 70.7832 104.968 69.8652 104.113C69.1834 103.478 68.6722 102.654 68.4182 101.757C68.0933 100.609 68.2366 99.4399 68.9707 98.4729C69.3728 97.9422 69.9244 97.6461 70.5213 97.3835C71.4291 96.9838 72.3767 96.8404 73.3616 96.8544C74.4104 96.87 75.4523 96.8155 76.4995 96.9199C77.1471 96.9744 77.8008 97.0298 78.4211 97.2238C78.3463 97.1996 77.9567 97.4279 77.8827 97.4739C77.7237 97.5729 77.6481 97.6212 77.6544 97.8339C77.6637 98.137 77.9762 98.4246 78.1312 98.67C78.386 99.0713 78.5902 99.5171 78.6354 99.99C78.7164 100.844 78.3837 102.165 79.7489 102.233C79.6796 102.23 78.884 102.833 78.7951 102.905C78.5528 103.102 77.8796 103.5 77.6053 103.651C76.0577 104.503 75.2021 104.94 73.5946 105.233Z"
                        fill="#EA584A"
                      />
                      <path
                        d="M74.292 102.32C75.1258 102.394 75.9689 102.357 76.7925 102.211C77.3411 102.113 77.9006 102.079 78.1343 101.484C78.2084 101.296 78.2395 101.094 78.2668 100.894C78.3775 100.092 78.1881 99.2014 77.5967 98.6162C77.345 98.3669 77.0076 98.1752 76.6538 98.1993C76.5198 98.2087 76.3897 98.2476 76.2611 98.2874C75.9229 98.391 75.5855 98.4939 75.2473 98.5975C74.8686 98.7128 74.4891 98.8289 74.1237 98.9817C73.833 99.1032 73.5478 99.2513 73.3226 99.4718C73.0592 99.7305 72.9361 100.027 72.9883 100.386C73.0452 100.778 72.9891 101.16 73.1426 101.54C73.2618 101.834 73.4824 102.096 73.7769 102.216C73.9406 102.283 74.1174 102.304 74.292 102.32Z"
                        fill="#CF3A43"
                      />
                      <path
                        d="M72.9903 99.0764C73.4984 100.015 73.8241 101.416 73.3495 102.419C73.2428 102.644 73.5786 102.842 73.6862 102.615C74.2277 101.472 73.9098 99.9562 73.3269 98.8793C73.2069 98.6595 72.8703 98.8559 72.9903 99.0764Z"
                        fill="white"
                      />
                      <path
                        d="M74.3173 98.6635C74.6664 99.1996 74.8674 99.8682 74.996 100.492C75.1472 101.226 75.1137 101.965 74.7919 102.651C74.6859 102.877 75.0217 103.075 75.1285 102.847C75.4581 102.144 75.536 101.408 75.4184 100.644C75.3038 99.9041 75.0646 99.0976 74.654 98.4664C74.5176 98.2575 74.1802 98.4524 74.3173 98.6635Z"
                        fill="white"
                      />
                      <path
                        d="M75.5542 98.2908C75.9438 98.8519 76.1823 99.5524 76.3381 100.216C76.5142 100.965 76.508 101.734 76.201 102.45C76.1036 102.678 76.4387 102.877 76.5376 102.646C76.8524 101.912 76.9124 101.151 76.7675 100.368C76.6249 99.5937 76.342 98.7443 75.8901 98.0945C75.749 97.8903 75.4109 98.0843 75.5542 98.2908Z"
                        fill="white"
                      />
                      <path
                        d="M113.011 93.9487C111.214 95.8422 108.587 96.7149 106.126 97.3562C100.383 98.8523 94.6112 100.322 88.8106 101.577C84.6005 102.487 87.3987 101.827 85.7264 102.233L83.582 94.9017C83.582 94.9017 88.1584 93.1983 92.1286 91.8198C96.9644 90.1406 101.853 88.5362 106.696 86.8242C108.22 86.2858 110.211 85.7738 111.823 86.1518C112.735 86.3653 113.589 86.917 114.047 87.7336C115.164 89.7237 114.581 92.2406 113.087 93.8669C113.062 93.8949 113.037 93.9222 113.011 93.9487Z"
                        fill="#254654"
                      />
                      <path
                        d="M83.3125 94.4566L85.4086 102.762L88.6837 102.056L86.4052 93.248L83.3125 94.4566Z"
                        fill="#2E5268"
                      />
                      <path
                        d="M107.059 99.5848C107.165 99.8163 107.226 100.074 107.246 100.344C107.34 101.638 106.871 103.241 105.688 103.927C104.573 104.573 103.201 103.789 102.154 103.38C101.103 102.968 100.057 102.544 98.9859 102.184C96.6085 101.385 94.1469 100.88 91.6978 100.354C90.6467 100.128 89.3999 100.055 88.5576 99.3277C87.8617 98.7269 87.4667 97.7669 87.5999 96.8505C87.7737 95.6622 88.8202 94.6586 90.0147 94.5347C90.4667 94.4879 90.9241 94.5549 91.3659 94.6594C92.7989 94.9983 94.1314 95.7035 95.5075 96.2248C96.9584 96.7742 98.4311 97.2775 99.9444 97.6274C101.358 97.9547 102.811 98.0459 104.239 98.2913C104.919 98.4082 105.629 98.4799 106.262 98.7752C106.638 98.9513 106.899 99.2381 107.059 99.5848Z"
                        fill="#F7AC8D"
                      />
                      <path
                        d="M98.8578 97.2793L97.3398 101.797L100.923 102.901L102.433 101.926L103.18 97.9635L98.8578 97.2793Z"
                        fill="white"
                      />
                      <path
                        d="M106.158 105.672C106.256 105.69 106.354 105.706 106.452 105.721C107.712 105.914 108.97 105.407 109.888 104.552C110.569 103.917 111.081 103.094 111.335 102.197C111.66 101.048 111.516 99.8801 110.782 98.9123C110.38 98.3817 109.828 98.0856 109.231 97.823C108.324 97.4232 107.376 97.2799 106.391 97.2939C105.342 97.3095 104.301 97.2549 103.253 97.3593C102.606 97.4139 101.952 97.4692 101.332 97.6632C101.407 97.6391 101.796 97.8674 101.87 97.9134C102.028 98.0123 102.105 98.0607 102.098 98.2734C102.089 98.5765 101.777 98.864 101.622 99.1095C101.367 99.5108 101.163 99.9565 101.117 100.429C101.036 101.284 101.369 102.604 100.004 102.673C100.073 102.67 100.869 103.273 100.958 103.345C101.2 103.542 101.873 103.94 102.148 104.09C103.695 104.943 104.551 105.379 106.158 105.672Z"
                        fill="white"
                      />
                      <path
                        d="M105.221 105.233C105.318 105.251 105.416 105.267 105.514 105.282C106.774 105.474 108.032 104.968 108.95 104.113C109.632 103.478 110.143 102.654 110.397 101.757C110.722 100.609 110.579 99.4399 109.845 98.4729C109.443 97.9422 108.891 97.6461 108.294 97.3835C107.386 96.9838 106.439 96.8404 105.454 96.8544C104.405 96.87 103.363 96.8155 102.316 96.9199C101.668 96.9744 101.014 97.0298 100.394 97.2238C100.469 97.1996 100.859 97.4279 100.933 97.4739C101.091 97.5729 101.167 97.6212 101.161 97.8339C101.152 98.137 100.839 98.4246 100.684 98.67C100.429 99.0713 100.225 99.5171 100.18 99.99C100.099 100.844 100.432 102.165 99.0664 102.233C99.1358 102.23 99.9313 102.833 100.02 102.905C100.263 103.102 100.936 103.5 101.21 103.651C102.758 104.503 103.613 104.94 105.221 105.233Z"
                        fill="#EA584A"
                      />
                      <path
                        d="M104.524 102.32C103.691 102.394 102.847 102.357 102.024 102.211C101.475 102.113 100.916 102.079 100.682 101.484C100.608 101.296 100.577 101.094 100.55 100.894C100.439 100.092 100.628 99.2014 101.22 98.6162C101.471 98.3669 101.809 98.1752 102.163 98.1993C102.297 98.2087 102.427 98.2476 102.555 98.2874C102.893 98.391 103.231 98.4939 103.569 98.5975C103.948 98.7128 104.327 98.8289 104.693 98.9817C104.983 99.1032 105.269 99.2513 105.494 99.4718C105.757 99.7305 105.88 100.027 105.828 100.386C105.771 100.778 105.827 101.16 105.674 101.54C105.554 101.834 105.334 102.096 105.039 102.216C104.876 102.283 104.699 102.304 104.524 102.32Z"
                        fill="#CF3A43"
                      />
                      <path
                        d="M105.489 98.8801C104.906 99.957 104.588 101.472 105.13 102.616C105.238 102.842 105.573 102.645 105.467 102.419C104.992 101.417 105.318 100.016 105.826 99.0773C105.945 98.856 105.608 98.6588 105.489 98.8801Z"
                        fill="white"
                      />
                      <path
                        d="M104.164 98.4667C103.754 99.0979 103.514 99.9044 103.4 100.644C103.281 101.408 103.359 102.144 103.69 102.848C103.796 103.074 104.132 102.877 104.026 102.651C103.704 101.965 103.671 101.228 103.822 100.492C103.951 99.8685 104.153 99.2 104.501 98.6639C104.638 98.4527 104.301 98.2571 104.164 98.4667Z"
                        fill="white"
                      />
                      <path
                        d="M102.921 98.0928C102.469 98.7427 102.187 99.5921 102.043 100.367C101.899 101.15 101.958 101.911 102.273 102.644C102.371 102.874 102.707 102.675 102.61 102.448C102.303 101.732 102.296 100.964 102.473 100.215C102.629 99.5508 102.866 98.8518 103.256 98.2892C103.401 98.0827 103.062 97.8879 102.921 98.0928Z"
                        fill="white"
                      />
                      <path
                        d="M65.8027 93.9487C67.5996 95.8422 70.2272 96.7149 72.688 97.3562C78.4309 98.8523 84.2026 100.322 90.0031 101.577C94.2133 102.487 91.4151 101.827 93.0873 102.233L95.2309 94.9017C95.2309 94.9017 90.6545 93.1983 86.6844 91.8198C81.8485 90.1406 76.9605 88.5362 72.1168 86.8242C70.5934 86.2858 68.6017 85.7738 66.9895 86.1518C66.0778 86.3653 65.2238 86.917 64.7656 87.7336C63.649 89.7237 64.2318 92.2406 65.7256 93.8669C65.7513 93.8949 65.777 93.9222 65.8027 93.9487Z"
                        fill="#2E5268"
                      />
                      <path
                        d="M95.504 94.4566L93.4079 102.762L90.1328 102.056L92.4113 93.248L95.504 94.4566Z"
                        fill="#456A7C"
                      />
                      <path
                        d="M6.66797 90.0703H37.8369V90.2519C37.8369 91.6724 36.686 92.8233 35.2655 92.8233H9.23941C7.81888 92.8233 6.66797 91.6724 6.66797 90.2519V90.0703Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M7.9575 131.821C7.29282 131.821 6.79645 131.209 6.93282 130.559L14.8497 92.8223H18.6679L8.97205 131.032C8.85438 131.495 8.43672 131.821 7.9575 131.821Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M36.7886 131.821C37.4532 131.821 37.9496 131.209 37.8132 130.559L29.8963 92.8223H26.0781L35.774 131.032C35.8917 131.495 36.3093 131.821 36.7886 131.821Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M28.0617 133.591C28.7264 133.591 29.2227 132.952 29.0864 132.272L25.2518 92.8223H21.4336L27.0471 132.766C27.1648 133.252 27.5825 133.591 28.0617 133.591Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M34.4057 115.125H10.168V116.658H34.4057V115.125Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M14.8498 92.8223L14.1875 95.9781H17.867L18.668 92.8223H14.8498Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M29.8963 92.8223L30.5579 95.9781H26.8784L26.0781 92.8223H29.8963Z"
                        fill="#B97F5A"
                      />
                      <path
                        opacity="0.5"
                        d="M25.2518 92.8223L25.5588 95.9781H21.877L21.4336 92.8223H25.2518Z"
                        fill="#B97F5A"
                      />
                      <path
                        d="M21.4398 67.4121H19.918V89.4431H21.4398V67.4121Z"
                        fill="#061F34"
                      />
                      <path
                        d="M32.8135 68.7185H8.54297L9.0105 53.9023H32.3459L32.8135 68.7185Z"
                        fill="#EDDCD1"
                      />
                      <path
                        d="M28.9064 90.1066H12.4492C12.4492 88.7757 13.5277 87.6973 14.8586 87.6973H26.4971C27.828 87.6973 28.9064 88.7757 28.9064 90.1066Z"
                        fill="#061F34"
                      />
                      <path
                        d="M20.679 77.8594C22.0847 77.8594 23.2434 78.9635 23.3096 80.3685L23.6579 87.6971H17.6992L18.0475 80.3685C18.1145 78.9643 19.2725 77.8594 20.679 77.8594Z"
                        fill="#061F34"
                      />
                      <path
                        d="M15.627 77.1037C16.1891 77.1037 16.6447 76.6481 16.6447 76.086C16.6447 75.524 16.1891 75.0684 15.627 75.0684C15.065 75.0684 14.6094 75.524 14.6094 76.086C14.6094 76.6481 15.065 77.1037 15.627 77.1037Z"
                        fill="#061F34"
                      />
                      <path
                        d="M15.7455 68.7188H15.5117V75.2027H15.7455V68.7188Z"
                        fill="#061F34"
                      />
                      <path
                        opacity="0.5"
                        d="M32.3459 53.9023H30.549C29.7893 61.5154 23.0186 67.4725 14.7768 67.4725C12.5926 67.4725 10.5121 67.0541 8.61933 66.2975L8.54297 68.7185H32.8135L32.3459 53.9023Z"
                        fill="#E2D3C9"
                      />
                      <path
                        d="M31.9669 90.089H28.4448C27.498 90.089 26.7305 89.3214 26.7305 88.3747V80.1328H33.6812V88.3747C33.6812 89.3214 32.9136 90.089 31.9669 90.089Z"
                        fill="#FFC73C"
                      />
                      <path
                        d="M34.1664 82.3848C32.4996 82.3848 31.1484 83.7554 31.1484 85.4471C31.1484 87.138 32.4996 88.5095 34.1664 88.5095C35.8331 88.5095 37.1843 87.1388 37.1843 85.4471C37.1843 83.7562 35.8331 82.3848 34.1664 82.3848ZM34.1664 87.4178C33.0942 87.4178 32.2245 86.5357 32.2245 85.4479C32.2245 84.3601 33.0942 83.478 34.1664 83.478C35.2386 83.478 36.1082 84.3601 36.1082 85.4479C36.1082 86.5357 35.2394 87.4178 34.1664 87.4178Z"
                        fill="#FFC73C"
                      />
                      <path
                        opacity="0.2"
                        d="M27.7662 86.3093C27.5597 86.3093 27.3906 86.1402 27.3906 85.9337V81.0885C27.3906 80.882 27.5597 80.7129 27.7662 80.7129C27.9727 80.7129 28.1418 80.882 28.1418 81.0885V85.9337C28.1418 86.1402 27.9727 86.3093 27.7662 86.3093Z"
                        fill="white"
                      />
                      <path
                        d="M32.0728 80.1328V88.3287C32.0728 89.3012 31.285 90.089 30.3125 90.089H31.9177C32.8902 90.089 33.678 89.3012 33.678 88.3287V80.1328H32.0728Z"
                        fill="#FFC73C"
                      />
                      <path
                        d="M45.026 61.5664H65.2617V35.0884H45.026V61.5664Z"
                        fill="white"
                      />
                      <path
                        d="M46.3496 60.2207H63.9414V36.4325H46.3496V60.2207Z"
                        fill="white"
                      />
                      <path
                        d="M63.9441 36.4316V60.2198H46.3516L63.9441 36.4316Z"
                        fill="#E2F3F5"
                      />
                      <path
                        d="M140.238 93.418H114.227V98.2476H140.238V93.418Z"
                        fill="#FFC73C"
                      />
                      <path
                        d="M123.92 94.3496H115.641V97.2476H123.92V94.3496Z"
                        fill="#FFF9E1"
                      />
                      <path
                        d="M139.014 95.7982C139.014 96.5984 138.365 97.2468 137.566 97.2468C136.765 97.2468 136.117 96.5984 136.117 95.7982C136.117 94.9979 136.766 94.3496 137.566 94.3496C138.365 94.3488 139.014 94.9979 139.014 95.7982Z"
                        fill="#FFFCDB"
                      />
                      <path
                        d="M138.755 95.7993C138.755 96.4569 138.222 96.9891 137.565 96.9891C136.907 96.9891 136.375 96.4561 136.375 95.7993C136.375 95.1416 136.908 94.6094 137.565 94.6094C138.222 94.6086 138.755 95.1416 138.755 95.7993Z"
                        fill="#324751"
                      />
                      <path
                        d="M116.833 94.9023H116.496V96.8083H116.833V94.9023Z"
                        fill="#777068"
                      />
                      <path
                        d="M117.809 94.9023H117.473V96.8083H117.809V94.9023Z"
                        fill="#777068"
                      />
                      <path
                        d="M118.786 94.9023H118.449V96.8083H118.786V94.9023Z"
                        fill="#777068"
                      />
                      <path
                        d="M141.378 88.5879H115.367V93.4175H141.378V88.5879Z"
                        fill="#3DA0A5"
                      />
                      <path
                        d="M125.061 89.5195H116.781V92.4175H125.061V89.5195Z"
                        fill="#FFF9E1"
                      />
                      <path
                        d="M140.159 90.9681C140.159 91.7684 139.51 92.4167 138.71 92.4167C137.91 92.4167 137.262 91.7684 137.262 90.9681C137.262 90.1678 137.911 89.5195 138.71 89.5195C139.51 89.5188 140.159 90.1678 140.159 90.9681Z"
                        fill="#79D2F3"
                      />
                      <path
                        d="M139.895 90.9692C139.895 91.6268 139.362 92.1591 138.706 92.1591C138.048 92.1591 137.516 91.6261 137.516 90.9692C137.516 90.3115 138.049 89.7793 138.706 89.7793C139.362 89.7785 139.895 90.3115 139.895 90.9692Z"
                        fill="#324751"
                      />
                      <path
                        d="M117.973 90.0723H117.637V91.9783H117.973V90.0723Z"
                        fill="#777068"
                      />
                      <path
                        d="M118.95 90.0723H118.613V91.9783H118.95V90.0723Z"
                        fill="#777068"
                      />
                      <path
                        d="M119.926 90.0723H119.59V91.9783H119.926V90.0723Z"
                        fill="#777068"
                      />
                      <path
                        d="M139.997 88.5731H116.602V86.0204L119.525 85.4687L116.602 85.1235V79.7422H135.431L140.938 80.6843L140.591 83.3297L137.831 83.6056L140.591 84.158L139.997 88.5731Z"
                        fill="#F3F7F8"
                      />
                      <path
                        d="M118.883 82.3617C120.082 82.297 121.281 82.2666 122.48 82.2417C123.68 82.216 124.879 82.2183 126.078 82.2051C127.277 82.2175 128.477 82.216 129.676 82.2409L131.475 82.2846C132.075 82.3103 132.674 82.3259 133.274 82.3617C132.674 82.3975 132.075 82.4124 131.475 82.4388L129.676 82.4825C128.477 82.5074 127.277 82.5059 126.078 82.5183C124.879 82.5051 123.68 82.5074 122.48 82.4817C121.281 82.4575 120.082 82.4272 118.883 82.3617Z"
                        fill="#D1D1D3"
                      />
                      <path
                        d="M122.824 86.3051C124.023 86.2404 125.223 86.21 126.422 86.1851C127.621 86.1593 128.82 86.1617 130.02 86.1484C131.219 86.1609 132.418 86.1593 133.617 86.1843L135.416 86.2279C136.016 86.2536 136.616 86.2692 137.216 86.3051C136.616 86.3409 136.016 86.3557 135.416 86.3822L133.617 86.4258C132.418 86.4508 131.219 86.45 130.02 86.4617C128.82 86.4484 127.621 86.4508 126.422 86.4251C125.223 86.4001 124.023 86.3697 122.824 86.3051Z"
                        fill="#D1D1D3"
                      />
                      <path
                        d="M116.602 79.7422H139.691L140.938 80.6843L116.602 79.7422Z"
                        fill="#D1D1D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="landing__marketplace--container--wrap">
                <div className="marketplace">
                  <div className="marketplace__top">
                    <div className="marketplace__top__before">
                      <h1>Projects</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                    </div>
                    <div className="marketplace__top__after">
                      <Link to="/" className="see">
                        See more
                      </Link>
                    </div>
                  </div>
                  <div className="marketplace__bottom">
                    <div className="marketplace__bottom-wrapper">
                      <Lists />
                      <Lists />
                      <Lists />
                      <Lists />
                      {/* <List/> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="landing__category">
            <div className="landing__category-wrapper">
              <div className="landing__category-wrapper--header">
                <h1>Top Categories</h1>
              </div>
              <div className="landing__category-wrapper--top">
                <div className="top">
                  <div className="top_wrap">
                    <div className="img">
                      <img src={Group} alt="sales" />
                    </div>
                    <div className="img-text">
                      <h1>
                        Sales & Marketing <span>#</span>
                      </h1>
                    </div>
                  </div>
                  <div className="top_wrap">
                    <div className="img">
                      <img src={GroupOne} alt="admin" />
                    </div>
                    <div className="img-text">
                      <h1>
                        Admin Support <span>#</span>
                      </h1>
                    </div>
                  </div>
                  <div className="top_wrap">
                    <div className="img">
                      <img src={GroupTwo} alt="accounting" />
                    </div>
                    <div className="img-text">
                      <h1>
                        Accounting & Finance <span>#</span>
                      </h1>
                    </div>
                  </div>
                  <div className="top_wrap">
                    <div className="img">
                      <img src={GroupThree} alt="writing" />
                    </div>
                    <div className="img-text">
                      <h1>
                        Writing<span>#</span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="tops">
                  <div className="tops_wrap">
                    <div className="img">
                      <img src={Group1} alt="graphics" />
                    </div>
                    <div className="img-text">
                      <h1>
                        Graphics design & Creative <span>#</span>
                      </h1>
                    </div>
                  </div>
                  <div className="tops_wrap">
                    <div className="img">
                      <img src={Group2} alt="translating" />
                    </div>
                    <div className="img-text">
                      <h1>
                        Translating <span>#</span>
                      </h1>
                    </div>
                  </div>
                  <div className="tops_wrap">
                    <div className="img">
                      <img src={Group3} alt="architecture" />
                    </div>
                    <div className="img-text">
                      <h1>
                        Engineering & Architecture <span>#</span>
                      </h1>
                    </div>
                  </div>
                  <div className="tops_wrap">
                    <div className="img">
                      <img src={Group4} alt="software development" />
                    </div>
                    <div className="img-text">
                      <h1>
                        Web, mobile & software dev <span>#</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}
export default LandingPage;
