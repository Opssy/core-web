import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Logo from "../../assets/footer-logo.png";
import "../../styles/login.scss";
import axios from "axios";
import { toast } from "react-toast";
function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);

  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const { email, password } = values;

  // const handleInputChange = (name) => (e) => {
  //   setValues({ ...values, [name]: e.target.value });
  // };

  const inputValidations = () => {
    let emailMessage = "Invalid email address";
    let re = /\S+@\S+\.\S+/;
    const emailTest = re.test(email);

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

    //password input validation and error messages
    if (password.length === 0) {
      setErrorStatus(true);
      setPasswordErrorMsg("This field is required");
    } else {
      setErrorStatus(false);
      setPasswordErrorMsg("");
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    inputValidations();
    if (errorStatus === true) {
      console.log(errorStatus);
      return errorStatus;
    } else {
      console.log("login successful", email, password);
      const signinData = { email, password };
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      setLoading(true);
      axios
        .post("http://localhost:3000/v1/logon", signinData, config)
        .then((res) => {
          if (res.success) {
            toast.success("login successful");
            navigate("/");
          } else {
            toast.error(res.error);
          }
        })
        .catch((error) => {
          console.log("error:", error);
          toast.error("Internal server error. Please try again");
        })
        .then(() => {
          setLoading(false);
        });
    }
  };

  return (
    <Fragment>
      <div className="login">
        <Header />
        <div className="login__signupform">
          <div className="login__signupform-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="login__signupform-wrap">
            <div className="login__signupform-text">
              <h2>Welcome Back!</h2>
              <p>Sign in to stay connected to your kominiti</p>
            </div>
          </div>
          <div className="login__signupform--wrap">
            <div className="formik">
              <p>Sign in</p>
              <form onSubmit={submitForm}>
                <div className="formik__wrap">
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
                  <div className="formik__wrap-check">
                    <Link to="/forgot-password" className="terms">
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="formik__wrap-btn">
                    <button onClick={submitForm} className="button">
                      Get Started
                    </button>
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
                <div className="bottom">
                  <p>
                    Don't have an account?{" "}
                    <Link to="/" className="sign">
                      Sign up
                    </Link>
                  </p>
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

export default Login;
