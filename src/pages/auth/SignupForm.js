import React, { Fragment, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Input, Checkbox } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "../../styles/signup.scss";
import TypeOfProfileText from "./component/TypeOfProfileText";
import axios from "axios";
import { toast, ToastContainer } from "react-toast";

function SignupForm() {
  const { formType } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [acceptErrorMsg, setAcceptErrorMsg] = useState("");
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputValidations = () => {
    let emailMessage = "Invalid email address";
    let passwordMessage = "Password cannot be less than 8 characters";
    let re = /\S+@\S+\.\S+/;
    const emailTest = re.test(email);

    //full_name input validation and error messages
    if (fullName.length === 0) {
      setErrorStatus(true);
      setNameErrorMsg("This field is required");
      return;
    } else {
      setErrorStatus(false);
      setNameErrorMsg("");
    }

    //email input validation and error messages
    if (email.length === 0) {
      setErrorStatus(true);
      setEmailErrorMsg("This field is required");
      return;
    } else if (emailTest === false) {
      setErrorStatus(true);
      setEmailErrorMsg(emailMessage);
    } else {
      setErrorStatus(false);
      setEmailErrorMsg("");
    }

    // password input validation and error messages
    if (password.length === 0) {
      setErrorStatus(true);
      setPasswordErrorMsg("This field is required");
    } else if (password.length < 8) {
      setErrorStatus(true);
      setPasswordErrorMsg(passwordMessage);
    } else {
      setErrorStatus(false);
      setPasswordErrorMsg("");
    }

    if (confirmPassword.length === 0) {
      setErrorStatus(true);
      setConfirmPasswordErrorMsg("This field is required");
    } else if (confirmPassword.length < 8) {
      setErrorStatus(true);
      setConfirmPasswordErrorMsg(passwordMessage);
    } else {
      setErrorStatus(false);
      setConfirmPasswordErrorMsg("");
    }

    if (password !== confirmPassword) {
      setErrorStatus(true);
      setPasswordErrorMsg("Passwords don't match");
    } else {
      setErrorStatus(false);
      setPasswordErrorMsg("");
    }

    //acceptterms input validation and error messages
    if (acceptTerms === false) {
      setErrorStatus(true);
      setAcceptErrorMsg("This field is required");
    } else {
      setErrorStatus(false);
      setAcceptErrorMsg("");
    }
  };

  // const handleTerms = (e) => {
  //   console.log(`checked = ${e.target.checked}`);
  //   setAcceptTerms(e.target.checked);
  //   setValues((values) => {
  //     return { ...values, accept_terms: true };
  //   });
  // };

  const submitForm = (event) => {
    event.preventDefault();

    inputValidations();

    if (errorStatus === true) {
      return errorStatus;
    } else {
      const signupData = {
        fullName,
        email,
        password,
        confirmPassword,
        acceptTerms,
        formType
      };

      setLoading(true);
      axios
        .post(process.env.REACT_APP_HOST_API + "register", signupData, {
          xsrfHeaderName: "X-XSRF-TOKEN",
          withCredentials: true
        })
        .then((res) => {
          if (res.data.response) {
            // toast.success("registered successfully");
            navigate("/verify");
          } else {
            toast.error("Internal server error. Please try again");
          }
          setLoading(false);
        })
        .catch((error) => {
          toast.error("Internal server error. Please try again");
        });
    }
  };

  return (
    <Fragment>
      <div className="auth">
        <Header />
        <div className="auth__signupform">
          <div className="auth__signupform--wrap">
            <div className="formik">
              <form onSubmit={submitForm}>
                <div className="formik__header">
                  <h1>
                    <button onClick={() => navigate("/account-type")}>
                      <svg
                        width="21"
                        height="18"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.284 7.7152H4.03678L8.70351 2.10999C8.92172 1.84745 9.02671 1.50898 8.99536 1.16903C8.96402 0.829086 8.79892 0.515513 8.53638 0.297298C8.27384 0.0790819 7.93536 -0.0259025 7.59542 0.00544001C7.25547 0.0367826 6.9419 0.201885 6.72368 0.464426L0.295688 8.17802C0.252441 8.23937 0.213768 8.30383 0.179984 8.37086C0.179984 8.43514 0.179984 8.47371 0.0899922 8.53799C0.0317204 8.68539 0.0012099 8.8423 0 9.0008C0.0012099 9.1593 0.0317204 9.31621 0.0899922 9.46362C0.0899922 9.5279 0.0899918 9.56647 0.179984 9.63075C0.213768 9.69778 0.252441 9.76223 0.295688 9.82359L6.72368 17.5372C6.84456 17.6823 6.99592 17.799 7.16702 17.879C7.33811 17.959 7.52473 18.0003 7.71359 18C8.01398 18.0006 8.30508 17.896 8.53638 17.7043C8.66656 17.5964 8.77416 17.4638 8.85304 17.3143C8.93191 17.1647 8.9805 17.001 8.99603 16.8326C9.01155 16.6643 8.9937 16.4945 8.94351 16.333C8.89331 16.1715 8.81176 16.0215 8.70351 15.8916L4.03678 10.2864H19.284C19.6249 10.2864 19.9519 10.151 20.193 9.90986C20.4341 9.66876 20.5696 9.34177 20.5696 9.0008C20.5696 8.65984 20.4341 8.33284 20.193 8.09175C19.9519 7.85065 19.6249 7.7152 19.284 7.7152Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                    Sign Up to Kominiti
                  </h1>
                  <TypeOfProfileText formType={formType} />
                </div>
                <div className="formik__wrap">
                  <div className="formik__wrap-name">
                    <label>Full Name</label>
                    <div className="formik__wrap-box">
                      <div className="formik__wrap-box-input">
                        <span>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.4508 12.2412C13.0996 11.3992 12.5899 10.6344 11.9502 9.98932C11.3125 9.34242 10.557 8.82664 9.72551 8.47048C9.71807 8.46671 9.71062 8.46482 9.70317 8.46105C10.863 7.61307 11.617 6.23178 11.617 4.67337C11.617 2.09171 9.55052 0 7 0C4.44949 0 2.38301 2.09171 2.38301 4.67337C2.38301 6.23178 3.13699 7.61306 4.29683 8.46294C4.28938 8.46671 4.28193 8.46859 4.27449 8.47236C3.44045 8.82852 2.69205 9.3392 2.04977 9.99121C1.41067 10.6367 0.901113 11.4015 0.549245 12.2431C0.203571 13.0671 0.0171405 13.9505 4.65534e-05 14.8455C-0.000450341 14.8656 0.00303479 14.8856 0.0102967 14.9043C0.0175586 14.9231 0.0284503 14.9401 0.04233 14.9545C0.0562097 14.9689 0.0727966 14.9804 0.0911133 14.9882C0.10943 14.996 0.129106 15 0.148982 15H1.266C1.34791 15 1.41307 14.934 1.41493 14.853C1.45216 13.3982 2.02929 12.0358 3.04949 11.0031C4.10507 9.93467 5.50693 9.34673 7 9.34673C8.49308 9.34673 9.89493 9.93467 10.9505 11.0031C11.9707 12.0358 12.5478 13.3982 12.5851 14.853C12.5869 14.9359 12.6521 15 12.734 15H13.851C13.8709 15 13.8906 14.996 13.9089 14.9882C13.9272 14.9804 13.9438 14.9689 13.9577 14.9545C13.9715 14.9401 13.9824 14.9231 13.9897 14.9043C13.997 14.8856 14.0005 14.8656 14 14.8455C13.9813 13.9447 13.797 13.0685 13.4508 12.2412ZM7 7.91457C6.14548 7.91457 5.34123 7.57726 4.73619 6.96482C4.13114 6.35239 3.79789 5.53832 3.79789 4.67337C3.79789 3.80842 4.13114 2.99435 4.73619 2.38191C5.34123 1.76947 6.14548 1.43216 7 1.43216C7.85452 1.43216 8.65877 1.76947 9.26381 2.38191C9.86886 2.99435 10.2021 3.80842 10.2021 4.67337C10.2021 5.53832 9.86886 6.35239 9.26381 6.96482C8.65877 7.57726 7.85452 7.91457 7 7.91457Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        <input
                          class="input-field"
                          type="text"
                          placeholder="John"
                          name="fullName"
                          value={fullName}
                          onChange={(e) => {
                            const nameValue = e.target.value.replace(
                              /[0-9]/g,
                              ""
                            );
                            setFullName(nameValue);
                          }}
                        />
                      </div>
                      {nameErrorMsg && nameErrorMsg.length > 0 ? (
                        <span
                          style={{
                            color: "red",
                            fontSize: "12px",
                          }}
                        >
                          {nameErrorMsg}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="formik__wrap-email">
                    <label>Email</label>
                    <div className="formik__wrap-email-box">
                      <div className="formik__wrap-email-input">
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.75 5.875C21.75 4.84375 20.9063 4 19.875 4H4.875C3.84375 4 3 4.84375 3 5.875M21.75 5.875V17.125C21.75 18.1563 20.9063 19 19.875 19H4.875C3.84375 19 3 18.1563 3 17.125V5.875M21.75 5.875L12.375 12.4375L3 5.875"
                              stroke="#666666"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <input
                          class="input-field"
                          type="email"
                          placeholder="johndoe@ymail.com"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      {emailErrorMsg && emailErrorMsg.length > 0 ? (
                        <span
                          style={{
                            color: "red",
                            fontSize: "12px",
                          }}
                        >
                          {emailErrorMsg}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="formik__wrap-password">
                    <label>Password</label>
                    <div className="formik__wrap-password-box">
                      <div className="formik__wrap-password-input">
                        <Input.Password
                          placeholder="input password"
                          iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                          }
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      {passwordErrorMsg && passwordErrorMsg.length > 0 ? (
                        <span
                          style={{
                            color: "red",
                            fontSize: "12px",
                          }}
                        >
                          {passwordErrorMsg}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="formik__wrap-password">
                    <label>Confirm Password</label>
                    <div className="formik__wrap-password-box">
                      <div className="formik__wrap-password-input">
                        <Input.Password
                          placeholder="Confirm password"
                          iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                          }
                          name="confirm_password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      {confirmPasswordErrorMsg &&
                      confirmPasswordErrorMsg.length > 0 ? (
                        <span
                          style={{
                            color: "red",
                            fontSize: "12px",
                          }}
                        >
                          {confirmPasswordErrorMsg}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="formik__wrap-check">
                    <Checkbox
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                    >
                      I accept the{" "}
                      <Link to="/" className="terms">
                        Terms and Conditions
                      </Link>
                    </Checkbox>
                  </div>
                  {acceptErrorMsg && acceptErrorMsg.length > 0 ? (
                    <span
                      style={{
                        color: "red",
                        fontSize: "12px",
                      }}
                    >
                      {acceptErrorMsg}
                    </span>
                  ) : (
                    ""
                  )}

                  <div className="formik__wrap-btn">
                    <button onClick={submitForm} className="button">
                      Get Started
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </form>
              <div className="formik--bottom">
                <div className="top">
                  <p>or sign in with your social account</p>
                </div>
                <div className="middle">
                  <Link to="/" className="google">
                    <svg
                      width="68"
                      height="68"
                      viewBox="0 0 68 68"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_5027_71787)">
                        <rect
                          x="10"
                          y="10"
                          width="48"
                          height="48"
                          rx="24"
                          fill="white"
                          shape-rendering="crispEdges"
                        />
                        <path
                          d="M42.8249 32.2373H42.1V32.2H34V35.8H39.0864C38.3443 37.8956 36.3503 39.4 34 39.4C31.0178 39.4 28.6 36.9822 28.6 34C28.6 31.0178 31.0178 28.6 34 28.6C35.3765 28.6 36.6289 29.1193 37.5824 29.9675L40.1281 27.4219C38.5207 25.9238 36.3706 25 34 25C29.0297 25 25 29.0297 25 34C25 38.9703 29.0297 43 34 43C38.9703 43 43 38.9703 43 34C43 33.3966 42.9379 32.8075 42.8249 32.2373Z"
                          fill="#FFC107"
                        />
                        <path
                          d="M26.0391 29.8109L28.996 31.9795C29.7961 29.9986 31.7338 28.6 34.0014 28.6C35.3779 28.6 36.6303 29.1193 37.5838 29.9675L40.1295 27.4219C38.5221 25.9238 36.372 25 34.0014 25C30.5445 25 27.5466 26.9516 26.0391 29.8109Z"
                          fill="#FF3D00"
                        />
                        <path
                          d="M34.0005 42.9999C36.3252 42.9999 38.4375 42.1103 40.0346 40.6635L37.2491 38.3064C36.3151 39.0167 35.1739 39.4008 34.0005 39.3999C31.6596 39.3999 29.672 37.9073 28.9232 35.8242L25.9883 38.0855C27.4778 41.0001 30.5027 42.9999 34.0005 42.9999Z"
                          fill="#4CAF50"
                        />
                        <path
                          d="M42.825 32.2366H42.1V32.1992H34V35.7992H39.0864C38.7314 36.7966 38.092 37.6681 37.2472 38.3062L37.2485 38.3053L40.034 40.6624C39.8369 40.8415 43 38.4992 43 33.9992C43 33.3958 42.9379 32.8067 42.825 32.2366Z"
                          fill="#1976D2"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_5027_71787"
                          x="0"
                          y="0"
                          width="68"
                          height="68"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_5027_71787"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_5027_71787"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </Link>
                  <Link to="/" className="facebook">
                    <svg
                      width="68"
                      height="68"
                      viewBox="0 0 68 68"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_5027_71794)">
                        <rect
                          x="10"
                          y="10"
                          width="48"
                          height="48"
                          rx="24"
                          fill="#4267B2"
                          shape-rendering="crispEdges"
                        />
                        <path
                          d="M35.3955 43V34.79H38.1502L38.5635 31.5894H35.3955V29.5463C35.3955 28.62 35.6517 27.9887 36.9816 27.9887L38.675 27.988V25.1253C38.3821 25.0873 37.3769 25 36.2069 25C33.7638 25 32.0911 26.4913 32.0911 29.2293V31.5894H29.3281V34.79H32.0911V43H35.3955Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_5027_71794"
                          x="0"
                          y="0"
                          width="68"
                          height="68"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_5027_71794"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_5027_71794"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </Link>
                  <Link to="/" className="linkedln">
                    <svg
                      width="68"
                      height="68"
                      viewBox="0 0 68 68"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_5027_71797)">
                        <rect
                          x="10"
                          y="10"
                          width="48"
                          height="48"
                          rx="24"
                          fill="#4895EF"
                          shape-rendering="crispEdges"
                        />
                        <path
                          d="M28.9375 26.9688C28.9375 28.0561 28.0561 28.9375 26.9688 28.9375C25.8814 28.9375 25 28.0561 25 26.9688C25 25.8814 25.8814 25 26.9688 25C28.0561 25 28.9375 25.8814 28.9375 26.9688Z"
                          fill="white"
                        />
                        <path
                          d="M29.0252 30.625H25V43H29.0252V30.625Z"
                          fill="white"
                        />
                        <path
                          d="M39.9895 30.7701C39.9752 30.7656 39.9612 30.761 39.9472 30.7564C39.9193 30.7471 39.8912 30.7379 39.8612 30.7296C39.8073 30.7172 39.7533 30.7071 39.6981 30.6981C39.4844 30.6554 39.2504 30.625 38.9759 30.625C36.6291 30.625 35.1407 32.3316 34.6503 32.9909V30.625H30.625V43H34.6503V36.25C34.6503 36.25 37.6923 32.0133 38.9759 35.125V43H43V34.6491C43 32.7794 41.7186 31.2213 39.9895 30.7701Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_5027_71797"
                          x="0"
                          y="0"
                          width="68"
                          height="68"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_5027_71797"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_5027_71797"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </Link>
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

export default SignupForm;
