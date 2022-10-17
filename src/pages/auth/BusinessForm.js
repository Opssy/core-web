import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "antd";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "../../styles/businessform.scss";
import bannerOne from "../../assets/banner_1.png";

function BusinessForm() {
  const navigate = useNavigate();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [businessName, setBusinessName] = useState("");
  const [businessNameErrorMsg, setBusinessNameErrorMsg] = useState("");
  const [website, setWebsite] = useState("");
  const [websiteErrorMsg, setWebsiteErrorMsg] = useState("");
  const [industry, setIndustry] = useState("");
  const [industryErrorMsg, setIndustryErrorMsg] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [companySizeErrorMsg, setCompanySizeErrorMsg] = useState("");
  const [companyLogoName, setCompanyLogoName] = useState("");
  const [companyLogo, setCompanyLogo] = useState([]);
  const [logoThumb, setLogoThumb] = useState();
  const [companyLogoErrorMsg, setCompanyLogoErrorMsg] = useState("");
  const [tagline, setTagline] = useState("");
  const [taglineErrorMsg, setTaglineErrorMsg] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptErrorMsg, setAcceptErrorMsg] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);

  const inputValidations = () => {
    let websiteMessage = "Invalid website";
    let re =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

    //Matches Case
    // https://www.google.com
    // http://www.google.com
    // http://www.google.in
    // www.google.com

    const websiteTest = re.test(website);

    //businessName input validation and error messages
    if (businessName.length === 0) {
      setErrorStatus(true);
      setBusinessNameErrorMsg("This field is required");
      return;
    } else {
      setErrorStatus(false);
      setBusinessNameErrorMsg("");
    }

    //website input validation and error messages
    if (website.length === 0) {
      setErrorStatus(true);
      setWebsiteErrorMsg("This field is required");
      return;
    } else if (websiteTest === false) {
      setErrorStatus(true);
      setWebsiteErrorMsg(websiteMessage);
    } else {
      setErrorStatus(false);
      setWebsiteErrorMsg("");
    }

    if (industry.length === 0) {
      setErrorStatus(true);
      setIndustryErrorMsg("This field is required");
      return;
    } else {
      setErrorStatus(false);
      setIndustryErrorMsg("");
    }

    if (companySize.length === 0) {
      setErrorStatus(true);
      setCompanySizeErrorMsg("This field is required");
      return;
    } else {
      setErrorStatus(false);
      setCompanySizeErrorMsg("");
    }

    //company logo input validation and error messages
    if (companyLogo.length === 0) {
      setErrorStatus(true);
      setCompanyLogoErrorMsg("This field is required");
      return;
    } else {
      setErrorStatus(false);
      setCompanyLogoErrorMsg("");
    }

    //tagline input validation and error messages
    if (tagline.length === 0) {
      setErrorStatus(true);
      setTaglineErrorMsg("This field is required");
      return;
    } else {
      setErrorStatus(false);
      setTaglineErrorMsg("");
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

  const submitForm = (event) => {
    event.preventDefault();
    inputValidations();
    if (errorStatus === true) {
      console.log(errorStatus);
      return errorStatus;
    } else {
      console.log("form submitted");
      // console.log("form submitted:", fullName, email, password, acceptTerms);
      // const signupData = { fullName, email, password, acceptTerms };
      // const config = {
      //   headers: {
      //     "content-type": "multipart/form-data",
      //   },
      // };
      // setLoading(true);
      // axios
      //   .post("http://localhost:3000/v1/register", signupData, config)
      //   .then((res) => {
      //     if (res.success) {
      //       toast.success("registered successfully");
      //       // navigate("/verify");
      //     } else {
      //       toast.error(res.error);
      //     }
      //   })
      //   .catch((error) => {
      //     console.log("error:", error);
      //     toast.error("Internal server error. Please try again");
      //   })
      //   .then(() => {
      //     setLoading(false);
      //     navigate(`/signup-form/${formType}`);
      //   });
    }
  };
  return (
    <Fragment>
      <div className="business">
        <Header />
        <div className="business__sub">
          <div className="business__sub-header">
            <h2>Sign up your business</h2>
            <div className="biz">Business info</div>
          </div>
        </div>
        <div className="business_container">
          <div className="business_container__desc">
            <p>
              <span onClick={() => navigate("/signup")}>
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
              </span>
              Let’s get started with a few details about your business.
            </p>
          </div>
          <div className="business_container-wrapper">
            <div className="right">
              <div className="right__top">
                <form onSubmit={submitForm} className="right__form">
                  <div className="right__form__top">
                    <div className="right__form__top__header">
                      <p>Page Identity</p>
                    </div>
                    <div className="right__form--wrap">
                      <div className="right__form--wrap--box">
                        <label>Name</label>
                        <input
                          class="input-field"
                          type="text"
                          placeholder="Company Name"
                          name="businessName"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                        />
                        {businessNameErrorMsg &&
                        businessNameErrorMsg.length > 0 ? (
                          <span
                            style={{
                              color: "red",
                              fontSize: "12px",
                            }}
                          >
                            {businessNameErrorMsg}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="right__form--wrap--box">
                        <label>Website</label>
                        <input
                          class="input-field"
                          type="text"
                          placeholder="www.example.com"
                          name="website"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                        />
                        {websiteErrorMsg && websiteErrorMsg.length > 0 ? (
                          <span
                            style={{
                              color: "red",
                              fontSize: "12px",
                            }}
                          >
                            {websiteErrorMsg}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="right__form__middle">
                    <div className="right__form__middle-header">
                      <p>Company Details</p>
                    </div>
                    <div className="right__form__middle--wrap">
                      <div className="right__form__middle--wrap--box">
                        <label>Industry</label>
                        <select
                          name="pets"
                          id="pet-select"
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                        >
                          <option value="">--Please choose an option--</option>
                          <option value="dog">Dog</option>
                          <option value="cat">Cat</option>
                          <option value="hamster">Hamster</option>
                          <option value="parrot">Parrot</option>
                          <option value="spider">Spider</option>
                          <option value="goldfish">Goldfish</option>
                        </select>
                        {industryErrorMsg && industryErrorMsg.length > 0 ? (
                          <span
                            style={{
                              color: "red",
                              fontSize: "12px",
                            }}
                          >
                            {industryErrorMsg}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="right__form__middle--wrap--box">
                        <label>Company size</label>
                        <select
                          name="pets"
                          id="pet-select"
                          value={companySize}
                          onChange={(e) => setCompanySize(e.target.value)}
                        >
                          <option value="">--Please choose an option--</option>
                          <option value="0-10">0-10</option>
                          <option value="10-50">10-50</option>
                          <option value="51-200">51-200</option>
                          <option value="201-500">201-500</option>
                          <option value="501-1000">501-1000</option>
                          <option value="1001-5001">1001-5001</option>
                          <option value="5001-10000">5001-10000</option>
                          <option value="10000+">10000+</option>
                        </select>
                        {companySizeErrorMsg &&
                        companySizeErrorMsg.length > 0 ? (
                          <span
                            style={{
                              color: "red",
                              fontSize: "12px",
                            }}
                          >
                            {companySizeErrorMsg}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="right__form__bottom">
                    <div className="right__form__bottom__header">
                      <p>Profile Details</p>
                    </div>
                    <div className="right__form__bottom--wrap">
                      <div className="right__form__bottom--wrap--box">
                        <label>Logo</label>
                        <div class="new-input-file-mask">
                          <div class="mask-label">
                            {!companyLogoName
                              ? "JPG, GIF, PNG"
                              : companyLogoName}
                            <input
                              type="file"
                              name="file"
                              accept="image/jpeg,image/png,image/gif,image/jpg"
                              onChange={(e) => {
                                setCompanyLogo(e.target.files[0]);
                                setCompanyLogoName(e.target.files[0].name);
                                const fileUrl = URL.createObjectURL(
                                  e.target.files[0]
                                );
                                setLogoThumb(fileUrl);
                              }}
                            />
                            <button class="false-button">Select File</button>
                          </div>
                        </div>
                        {companyLogoErrorMsg &&
                        companyLogoErrorMsg.length > 0 ? (
                          <span
                            style={{
                              color: "red",
                              fontSize: "12px",
                            }}
                          >
                            {companyLogoErrorMsg}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="right__form__bottom--wrap--box">
                        <label>Tagline</label>
                        <input
                          class="input-field"
                          type="text"
                          placeholder="Tagline"
                          name="tagline"
                          value={tagline}
                          onChange={(e) => setTagline(e.target.value)}
                        />
                        {taglineErrorMsg && taglineErrorMsg.length > 0 ? (
                          <span
                            style={{
                              color: "red",
                              fontSize: "12px",
                            }}
                          >
                            {taglineErrorMsg}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="right__checkbox">
                    <div className="right__checkbox-check">
                      <Checkbox
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                      >
                        I verify that I am an authorized representative of this
                        organization and have the right to act on its behalf in
                        the creation and management of this page. The
                        organization and I agree to the additional{" "}
                        <Link to="#" className="terms">
                          terms
                        </Link>{" "}
                        for Pages.{" "}
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
                  </div>
                  <div className="next">
                    <button onClick={submitForm}>Next</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="left">
              <div className="left__container">
                <div className="left__container--div">
                  <p>Preview window</p>
                </div>
                <div className="left__container--profile">
                  <div className="left__container--profile-box">
                    <img src={logoThumb} alt="" />
                  </div>
                </div>
                <div className="left__container-details">
                  <div className="left__container-details--list">
                    <h1>{businessName ? businessName : "Company Name"}</h1>
                    <p>{industry ? industry : "Industry"}</p>
                    <span>{tagline ? tagline : "Tagline"}</span>
                  </div>
                  <div>
                    <Link to="#" className="fl">
                      Follow
                    </Link>
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

export default BusinessForm;
