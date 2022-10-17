import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toast";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Logo from "../../assets/footer-logo.png";
import "../../styles/login.scss";
function ForgotPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const [email, setEmail] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

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
  };

  const submitForm = (event) => {
    event.preventDefault();
    inputValidations();
    if (errorStatus === true) {
      console.log(errorStatus);
      return errorStatus;
    } else {
      console.log("Reset link sent.");
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      setLoading(true);
      axios
        .post("http://localhost:3000/v1/forgot")
        .then((res) => {
          if (res.success) {
            toast.success("login successful");
            // navigate("/")
          } else {
            toast.error(res.error);
          }
        })
        .catch((error) => {
          console.log("error:", error);
          toast.error("Internal server error. Please try again later");
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
              <h2>Forgot Password</h2>
              <p>Enter your email to receive a password reset link</p>
            </div>
          </div>
          <div className="login__signupform--wrap">
            <div className="formik">
              <form>
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
                  <div className="formik__wrap-btn">
                    <button onClick={submitForm} className="button">
                      Restore
                    </button>
                  </div>
                </div>
              </form>
              <div className="formik--bottom">
                <div className="bottom">
                  <p>
                    or{" "}
                    <Link to="/login" className="sign">
                      Sign in
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

export default ForgotPassword;
