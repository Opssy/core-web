import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../../styles/signup.scss";

function Header() {
  return (
    <Fragment>
      <div className="auth">
        <div className="auth__header">
          <div className="auth__header-top">
            <p>Already have an account?</p>
            <Link to="/login" className="sign-in">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
