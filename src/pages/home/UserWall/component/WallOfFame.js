import React, { Fragment } from "react";
import user from "../../../../assets/Group.png"
import badge from "../../../../assets/badge.png"
import "../../../../styles/wall.scss"
const WallOfFame = () => {
    return (
        <Fragment>
            <div className="walloffame">
                <div className="walloffame__header">
                    <h1>Picture Of The Week</h1>
                    <div className="walloffame__wrapper">
                        <div className="right">
                            <div className="right_north">
                                <img src={user} alt="user" />
                                <span>
                                    <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30.9375 26.25H6.5625C6.04688 26.25 5.625 26.6719 5.625 27.1875V29.0625C5.625 29.5781 6.04688 30 6.5625 30H30.9375C31.4531 30 31.875 29.5781 31.875 29.0625V27.1875C31.875 26.6719 31.4531 26.25 30.9375 26.25ZM34.6875 7.5C33.1348 7.5 31.875 8.75977 31.875 10.3125C31.875 10.7285 31.9688 11.1152 32.1328 11.4727L27.8906 14.0156C26.9883 14.5547 25.8223 14.25 25.3008 13.3359L20.5254 4.98047C21.1523 4.46484 21.5625 3.69141 21.5625 2.8125C21.5625 1.25977 20.3027 0 18.75 0C17.1973 0 15.9375 1.25977 15.9375 2.8125C15.9375 3.69141 16.3477 4.46484 16.9746 4.98047L12.1992 13.3359C11.6777 14.25 10.5059 14.5547 9.60938 14.0156L5.37305 11.4727C5.53125 11.1211 5.63086 10.7285 5.63086 10.3125C5.63086 8.75977 4.37109 7.5 2.81836 7.5C1.26562 7.5 0 8.75977 0 10.3125C0 11.8652 1.25977 13.125 2.8125 13.125C2.96484 13.125 3.11719 13.1016 3.26367 13.0781L7.5 24.375H30L34.2363 13.0781C34.3828 13.1016 34.5352 13.125 34.6875 13.125C36.2402 13.125 37.5 11.8652 37.5 10.3125C37.5 8.75977 36.2402 7.5 34.6875 7.5Z" fill="#FCB912" />
                                    </svg>
                                </span>
                            </div>
                            <div className="right_south">
                                <h1>Sahed Mamuud </h1>
                                <span>Ui/Ux designer</span>
                                <p>Kominiti face of the week</p>
                            </div>
                        </div>
                        <div className="left">
                            <div className="left__likes">
                                <h2>Total Likes</h2>
                            </div>
                            <div className="left__num">
                                <h2> 1500</h2>
                            </div>
                            <div className="left__badge">
                                <h2> Badge Earned</h2>
                                <span>
                                   <img src={badge} alt="badge"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default WallOfFame;