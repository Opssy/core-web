import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../../../../../styles/invite-campaign.scss";
import User from "../../../../../assets/Group-4.png"
const Referral = () => {
    return (
        <Fragment>
            <div className="campaign">
                <header className="campaign__header">
                    <Link to="/" className="campaign__header--link">
                        <span>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.1426 9L0.999722 9M0.999722 9L8.49972 16.5M0.999722 9L8.49972 1.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        Back
                    </Link>
                </header>
                <div className="campaign__container">
                    <h1>Instructions on how to refer</h1>
                    <div className="campaign__container-body">
                        <ul>
                        <li>Select connection you want to refer (you can select multiple connections)</li>
                            <li> Select connection you want to refer above selected to (you can select multiple connections)</li>
                            <li>Click on the “refer” button and that’s it.</li>
                        </ul>
                        <div className='refer-bdy'>
                            <Link to='/' className='btn-refer'> Refer Now</Link>
                        </div>
                    </div>
                </div>
                
                <div className="campaign__users">
                    <h2>Invited Users</h2>
                    <div className="campaign__users--tab">
                        <Tabs>
                            <TabList>
                                <Tab>Referred by me</Tab>
                                <Tab>Referred to me</Tab>
                                <Tab>Referred me</Tab>
                            </TabList>

                            <TabPanel className="campaign__users--tabpanel">
                                <div className="campaign__users--tabpanel--container">
                                    <div className="campaign__users--tabpanel--container--heading">
                                      <div>
                                        <div>
                                            <h1>Referree</h1>
                                        </div>
                                        <div>
                                        <h1>Referred To You</h1>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="campaign__users--tabpanel--container--wrap">
                                        <div className="left">
                                            <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.3333 5.31733V16.5C25.3333 18.4333 23.7667 20 21.8333 20H3.5C2.57174 20 1.6815 19.6313 1.02513 18.9749C0.368749 18.3185 0 17.4283 0 16.5V5.31733L12.2653 12.064C12.5153 12.2013 12.8187 12.2013 13.068 12.064L25.3333 5.31733ZM21.8333 1.50522e-08C22.747 8.49036e-05 23.6244 0.357435 24.2781 0.995717C24.9318 1.634 25.3101 2.50261 25.332 3.416L12.6667 10.3827L0.00133324 3.41533L0.00266679 3.35533C0.0400018 2.45284 0.424805 1.59972 1.07661 0.974384C1.72841 0.349047 2.59673 -8.3702e-05 3.5 1.50522e-08H21.8333Z" fill="#666666" />
                                            </svg>
                                             <p>johndoe@yahoo.com</p>
                                        </div>
                                        <div className="right">
                                           <p><span>Sent </span>Tues 21, 2021  10:45 am</p>
                                        </div>
                                    </div>
                                    <div className="campaign__users--tabpanel--container--wrap">
                                        <div className="left">
                                            <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.3333 5.31733V16.5C25.3333 18.4333 23.7667 20 21.8333 20H3.5C2.57174 20 1.6815 19.6313 1.02513 18.9749C0.368749 18.3185 0 17.4283 0 16.5V5.31733L12.2653 12.064C12.5153 12.2013 12.8187 12.2013 13.068 12.064L25.3333 5.31733ZM21.8333 1.50522e-08C22.747 8.49036e-05 23.6244 0.357435 24.2781 0.995717C24.9318 1.634 25.3101 2.50261 25.332 3.416L12.6667 10.3827L0.00133324 3.41533L0.00266679 3.35533C0.0400018 2.45284 0.424805 1.59972 1.07661 0.974384C1.72841 0.349047 2.59673 -8.3702e-05 3.5 1.50522e-08H21.8333Z" fill="#666666" />
                                            </svg>
                                             <p>johndoe@yahoo.com</p>
                                        </div>
                                        <div className="right">
                                           <p><span>Sent </span>Tues 21, 2021  10:45 am</p>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className="campaign__users--tabpanel">
                                <div className="campaign__users--tabpanel--container">
                                    <div className="campaign__users--tabpanel--container---box">
                                        <div className="right">
                                            <div className="right__right">
                                                <img src={User} alt='user' />
                                            </div>
                                            <div className="right__left">
                                                <p>User name</p>
                                            </div>
                                        </div>
                                        <div className="left">
                                            <button>Message</button>
                                        </div>
                                    </div>
                                    <div className="campaign__users--tabpanel--container---box">
                                        <div className="right">
                                            <div className="right__right">
                                                <img src={User} alt='user' />
                                            </div>
                                            <div className="right__left">
                                                <p>User name</p>
                                            </div>
                                        </div>
                                        <div className="left">
                                            <button>Message</button>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Referral;




