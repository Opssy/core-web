import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Feed from "./Feeds"
import FeedRepost from "./FeedRepost";
import user from "../../../../assets/logo.png"
const Layout = () => {
    return (
        <Fragment>
            <div className="wall__layout">
                <div className="wall__layout--wrapper">
                    <div className="wall__layout--wrapper-box">
                        <div className="wall__layout--wrapper-box-img">
                            <img src={user} alt='user' />
                        </div>
                        <div className="wall__layout--wrapper-box-comment">
                            <button>
                                <span>Share what is on your mind...</span>
                            </button>
                            <div className="upload">
                                <div className="upload--images">
                                    <Link to='/' className="img">
                                        <span>
                                            <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.2301 0H1.76986C1.06859 0 0.5 0.54825 0.5 1.22448V13.7756C0.5 14.4517 1.06859 15 1.76986 15H19.2301C19.9314 15 20.5 14.4517 20.5 13.7755V1.22448C20.5 0.54825 19.9314 0 19.2301 0ZM19.2301 1.22448V10.1299L16.7276 7.93591C16.3514 7.60622 15.773 7.61938 15.4136 7.96623L12.8809 10.4081L7.88699 4.6561C7.5095 4.2214 6.81807 4.21713 6.43492 4.64661L1.76986 9.8746V1.22448H19.2301ZM13.8333 4.43877C13.8333 3.50876 14.6149 2.75508 15.5793 2.75508C16.5438 2.75508 17.3254 3.50876 17.3254 4.43877C17.3254 5.36878 16.5438 6.12242 15.5793 6.12242C14.6149 6.12246 13.8333 5.36878 13.8333 4.43877Z" fill="#666666" />
                                            </svg>
                                        </span>
                                        images
                                    </Link>
                                </div>
                                <div className="upload--video">
                                    <Link to='/' className="vid">
                                        <span>
                                            <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.0937 1.79087C23.841 1.63897 23.5254 1.6251 23.2597 1.7542L17.6428 4.48501V2.5C17.6428 1.11929 16.4916 0 15.0714 0H3.07143C1.65127 0 0.5 1.11929 0.5 2.5V12.5C0.5 13.8807 1.65127 15 3.07143 15H15.0714C16.4916 15 17.6428 13.8807 17.6428 12.5V10.515L23.2597 13.25C23.6832 13.4557 24.1979 13.2888 24.4096 12.8771C24.4698 12.76 24.5007 12.6308 24.5 12.5V2.5C24.5001 2.21113 24.3464 1.94282 24.0937 1.79087ZM9.07143 10.8334C7.17787 10.8334 5.64285 9.34097 5.64285 7.5C5.64285 5.65903 7.17787 4.16665 9.07143 4.16665C10.965 4.16665 12.5 5.65903 12.5 7.5C12.5 9.34097 10.9649 10.8334 9.07143 10.8334Z" fill="#666666" />
                                            </svg>
                                        </span>
                                        video
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="wall__layout--wrapper-box-btn">
                            <div className="left">
                                <div className="left__top">
                                    <Link to='/' className="event">
                                        <span>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.75 0.46875C3.75 0.34443 3.70061 0.225201 3.61271 0.137294C3.5248 0.049386 3.40557 0 3.28125 0C3.15693 0 3.0377 0.049386 2.94979 0.137294C2.86189 0.225201 2.8125 0.34443 2.8125 0.46875V0.9375H1.875C1.37772 0.9375 0.900806 1.13504 0.549175 1.48667C0.197544 1.83831 0 2.31522 0 2.8125L0 3.75H15V2.8125C15 2.31522 14.8025 1.83831 14.4508 1.48667C14.0992 1.13504 13.6223 0.9375 13.125 0.9375H12.1875V0.46875C12.1875 0.34443 12.1381 0.225201 12.0502 0.137294C11.9623 0.049386 11.8431 0 11.7188 0C11.5944 0 11.4752 0.049386 11.3873 0.137294C11.2994 0.225201 11.25 0.34443 11.25 0.46875V0.9375H3.75V0.46875ZM15 13.125V4.6875H0V13.125C0 13.6223 0.197544 14.0992 0.549175 14.4508C0.900806 14.8025 1.37772 15 1.875 15H13.125C13.6223 15 14.0992 14.8025 14.4508 14.4508C14.8025 14.0992 15 13.6223 15 13.125ZM11.7188 6.5625H12.6562C12.7806 6.5625 12.8998 6.61189 12.9877 6.69979C13.0756 6.7877 13.125 6.90693 13.125 7.03125V7.96875C13.125 8.09307 13.0756 8.2123 12.9877 8.30021C12.8998 8.38811 12.7806 8.4375 12.6562 8.4375H11.7188C11.5944 8.4375 11.4752 8.38811 11.3873 8.30021C11.2994 8.2123 11.25 8.09307 11.25 7.96875V7.03125C11.25 6.90693 11.2994 6.7877 11.3873 6.69979C11.4752 6.61189 11.5944 6.5625 11.7188 6.5625Z" fill="#4895EF" />
                                            </svg>
                                        </span>
                                        Event
                                    </Link>
                                </div>
                                <div className="left__bottom">
                                    <Link to='/' className="article">
                                        <span>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 0V15H15V0H0ZM9.16667 11.6667H3.33333V10H9.16667V11.6667ZM11.6667 8.33333H3.33333V6.66667H11.6667V8.33333ZM11.6667 5H3.33333V3.33333H11.6667V5Z" fill="#4895EF" />
                                            </svg>
                                        </span>
                                        Articles
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wall__page-feed">
                   <Feed/>
                </div>
                <div className="wall__page-feed">
                   <FeedRepost/>
                </div>
        </Fragment>
    )
}
export default Layout;