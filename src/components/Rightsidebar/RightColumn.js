import Password from "antd/lib/input/Password";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/banner_1.png"
import user from "../../assets/Group-4.png"
import RightBar from './RightBar';
const RightColumn = () => {
    return (
        <Fragment>
            <div className="wall__rightsidebar">
                <div className="wall__rightsidebar--card">
                    <img src={banner} alt="banner" />
                    <div className="content">
                        <h1>Get $ for every point you earn</h1>
                        <p>Just by answering 10 questions.</p>
                        <Link to='/' className="btn">
                            <button>Start  trivia</button>
                        </Link>
                    </div>
                </div>

                <div className="wall__rightsidebar-interest">
                    <div className="wall__rightsidebar-interest--card">
                        <div className="wall__rightsidebar-interest--card--heading">
                            <h1>Based on your interest</h1>
                        </div>
                        <div className="wall__rightsidebar-interest--card--list">
                            <div className="interest">
                                <div className="interest__right">
                                    <div className="interest__right--image">
                                        <img src={user} alt='group image' />
                                    </div>
                                    <div>
                                        <h1>Jae Umanah</h1>
                                        <p>Business Owner</p>
                                    </div>
                                </div>
                                <div className="interest__left">
                                    <Link to='/' className="join">+ Follow</Link>
                                </div>
                            </div>
                            <div className="interest">
                                <div className="interest__right">
                                    <div className="interest__right--image">
                                        <img src={user} alt='group image' />
                                    </div>
                                    <div>
                                        <h1>Jae Umanah</h1>
                                        <p>Freelancer</p>
                                    </div>
                                </div>
                                <div className="interest__left">
                                    <Link to='/' className="join">+ Follow</Link>
                                </div>
                            </div>
                            <div className="interest">
                                <div className="interest__right">
                                    <div className="interest__right--image">
                                        <img src={user} alt='group image' />
                                    </div>
                                    <div>
                                        <h1>Jae Umanah</h1>
                                        <p>Job seeker</p>
                                    </div>
                                </div>
                                <div className="interest__left">
                                    <Link to='/' className="join">+ Follow</Link>
                                </div>
                            </div>
                        </div>
                        <div className="wall__rightsidebar-interest--card--footer">
                            <Link to='/' className="view">View more</Link>
                        </div>
                    </div>
                </div>

                <div className="wall__rightsidebar-happen">
                    <div className="wall__rightsidebar-happen--card">
                        <div className="wall__rightsidebar-happen--card--heading">
                            <h1>Happening now</h1>
                        </div>
                        <div className="wall__rightsidebar-happen--card--list">
                            <div className="interest">
                                <div className="interest__right">
                                    <div>
                                        <label>Live . GroupName...</label>
                                        <h1>Title..</h1>
                                        <p>30 Active Members</p>
                                    </div>
                                </div>
                                <div className="interest__left">
                                    <Link to='/' className="join">Join</Link>
                                </div>
                            </div>
                            <div className="interest">
                                <div className="interest__right">
                                    <div>
                                        <label>Live . GroupName...</label>
                                        <h1>Title..</h1>
                                        <p>30 Active Members</p>
                                    </div>
                                </div>
                                <div className="interest__left">
                                    <Link to='/' className="join">Join</Link>
                                </div>
                            </div>
                            <div className="interest">
                                <div className="interest__right">
                                    <div>
                                        <label>Live . GroupName...</label>
                                        <h1>Title..</h1>
                                        <p>30 Active Members</p>
                                    </div>
                                </div>
                                <div className="interest__left">
                                    <Link to='/' className="join">Join</Link>
                                </div>
                            </div>
                        </div>
                        <div className="wall__rightsidebar-interest--card--footer">
                            <Link to='/' className="view">Discover more</Link>
                        </div>
                    </div>
                </div>
                <div className="wall__rightsidebar-didyouknow">
                    <div class="card">
                        <img src={banner} alt="Avatar"/>
                        <div class="card__container">
                            <h4>Did you know ?</h4>
                            <p>During pandemic 70% people around the world works on-line. During pandemic 70% people around the world works online 
                            <Link to='/' className="span"> Read More</Link>
                           </p>
                        </div>
                    </div>
                </div>
                <div className="wall__rightsidebar-rightbar">
                 <RightBar/>
                </div>
            </div>
        </Fragment>
    )
}
export default RightColumn;