import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import '../../../../../styles/userprofile.scss';
import user from '../../../../../assets/banner-page-review.png'
import Repost from "./Repost";
const  FeedRepost = () => {
    return (
        <Fragment>
            <div className="middlebar">
                <div className="middlebar__header">
                    <div className="middlebar__header-wrap ">
                        <div className="middlebar__header-img">
                            <img src={user} alt='img' />
                        </div>
                        <div className="middlebar__header-details">
                            <h1>Opeyemi Dayomide</h1>
                            <p>position held</p>
                            <div className="middlebar__header-calender">
                                <span>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1091_5293)">
                                            <path d="M12.8129 3.10494L12.6034 3.17133L11.4881 3.2707L11.1731 3.77377L10.9445 3.70114L10.0569 2.90085L9.9281 2.48467L9.75565 2.04086L9.19777 1.54046L8.53963 1.41169L8.52448 1.71291L9.16925 2.34208L9.48473 2.71371L9.13004 2.89907L8.8413 2.81396L8.40863 2.6335L8.42334 2.2846L7.85565 2.05111L7.66717 2.87145L7.09503 3.00111L7.15162 3.45873L7.89709 3.60222L8.02587 2.871L8.64123 2.9619L8.9273 3.12944H9.38626L9.7004 3.75862L10.5332 4.60346L10.4722 4.93186L9.80066 4.84631L8.64034 5.43226L7.80486 6.43439L7.69613 6.8782H7.39625L6.83748 6.62065L6.29475 6.8782L6.42976 7.45079L6.66592 7.17853L7.08121 7.16561L7.05225 7.67982L7.39625 7.78052L7.7398 8.16641L8.3008 8.00867L8.94156 8.10982L9.68569 8.30989L10.0573 8.35355L10.6874 9.06873L11.9034 9.7839L11.1169 11.2864L10.2868 11.6723L9.97177 12.531L8.77045 13.333L8.64257 13.7956C11.7136 13.0559 13.9981 10.2972 13.9981 6.99896C13.9972 5.55836 13.5606 4.21758 12.8129 3.10494Z" fill="#4895EF" />
                                            <path d="M7.80275 10.6585L7.29299 9.71341L7.76086 8.73846L7.29299 8.59854L6.76764 8.07096L5.60376 7.80985L5.21743 7.00154V7.48145H5.04721L4.04419 6.1215V5.0044L3.30896 3.80888L2.14151 4.01697H1.35504L0.959358 3.75764L1.46421 3.3575L0.960695 3.4738C0.3538 4.51024 0 5.71289 0 7.0011C0 10.8657 3.13295 14 6.99801 14C7.29567 14 7.58753 13.9737 7.87627 13.939L7.80319 13.091C7.80319 13.091 8.12447 11.8318 8.12447 11.789C8.12402 11.7458 7.80275 10.6585 7.80275 10.6585Z" fill="#4895EF" />
                                            <path d="M2.59663 2.25692L3.83983 2.08358L4.41286 1.76944L5.05763 1.95525L6.08784 1.89822L6.44075 1.34346L6.95541 1.42812L8.20529 1.31093L8.54973 0.931286L9.03543 0.606895L9.72253 0.710272L9.97295 0.672397C9.06795 0.246412 8.06092 0 6.99373 0C4.82147 0 2.87914 0.990104 1.59673 2.54477H1.60029L2.59663 2.25692ZM7.2896 0.696014L8.00433 0.302556L8.46329 0.567683L7.79891 1.07343L7.16439 1.13715L6.87876 0.951783L7.2896 0.696014ZM5.1726 0.753495L5.48807 0.884944L5.90114 0.753495L6.12616 1.14339L5.1726 1.39381L4.71408 1.12556C4.71408 1.12556 5.16235 0.83682 5.1726 0.753495Z" fill="#4895EF" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1091_5293">
                                                <rect width="13.9981" height="14" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <p className="time">11:40pm</p>
                                <p className="date">Dec 12, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="middlebar__header-left">
                        <div class="three-dots"></div>
                        <div class="dropdown">
                            <Link to='/' className="dropdown-modal"><div>click here for a scam</div></Link>
                            <Link to='/' className="dropdown-modal"><div>click here for a scam</div></Link>
                            <Link to='/' className="dropdown-modal"><div>click here for a scam</div></Link>
                        </div>
                    </div>
                </div>
                <Repost/>
            </div>
        </Fragment>
    )
}
export default FeedRepost;