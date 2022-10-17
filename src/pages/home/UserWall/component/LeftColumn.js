import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import user from "../../../../assets/Group-4.png"
import "../../../../styles/wall.scss"
const LeftColumn = () => {
    return (
        <Fragment>
            <div className="wall__userprofile">
                <div className="wall__userprofile--card">
                    <div className="wall__userprofile--card-userprofile">
                        <div className="wall__userprofile--card-userprofile__image">
                            <img src={user} alt="profile" />
                        </div>
                        <div className="wall__userprofile--card-userprofile__name">
                            <h1>Firstname Lastname</h1>
                            <p>Graphics Design</p>
                        </div>
                    </div>
                    <div className="wall__userprofile--card__views">
                        <div className="wall__userprofile--card__views--heading">
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.41573 5.28394C1.41573 5.28399 1.41573 5.28397 1.41573 5.28389C1.41579 5.28251 1.41656 5.26181 1.42765 5.2184C1.43915 5.1734 1.45932 5.11342 1.49209 5.03845C1.5582 4.88719 1.66435 4.70042 1.81451 4.48756C2.11466 4.06211 2.55836 3.57808 3.10515 3.12175C4.21248 2.19763 5.63356 1.47541 7.0029 1.47541C8.37484 1.47541 9.79511 2.18883 10.899 3.10591C11.4444 3.55905 11.8864 4.04084 12.1852 4.46692C12.5096 4.92943 12.5843 5.21076 12.5843 5.28394C12.5843 5.33879 12.5244 5.57911 12.207 5.98149C11.915 6.3517 11.4785 6.76493 10.9339 7.15171C9.83728 7.93053 8.40329 8.53217 7.00662 8.52452C5.60763 8.51686 4.16955 7.90373 3.06912 7.12194C2.52266 6.73371 2.08433 6.32117 1.79111 5.95412C1.6445 5.77059 1.54399 5.61069 1.48289 5.48231C1.45274 5.41896 1.43505 5.36925 1.42532 5.33319C1.41664 5.30098 1.41581 5.28523 1.41574 5.28378L1.41573 5.28367V5.28394ZM7.0029 0C5.1917 0 3.46527 0.931033 2.22021 1.9701C1.59081 2.49537 1.0571 3.07041 0.673889 3.6136C0.482378 3.88506 0.320354 4.16001 0.203718 4.42686C0.0909977 4.68476 0 4.98167 0 5.28394C0 5.86604 0.337906 6.44099 0.703083 6.89811C1.09644 7.39051 1.63937 7.89181 2.27168 8.34102C3.52877 9.23411 5.23821 9.99026 6.99918 9.99991C8.76247 10.0096 10.4731 9.2644 11.7311 8.37091C12.3639 7.92154 12.9072 7.41725 13.3006 6.91839C13.6687 6.4517 14 5.87141 14 5.28394C14 4.71478 13.6861 4.10667 13.3282 3.59633C12.9447 3.04954 12.4108 2.47507 11.7815 1.95224C10.5358 0.917367 8.81149 0 7.0029 0ZM7.00008 7.45897C8.30322 7.45897 9.35963 6.35804 9.35963 4.99997C9.35963 3.64189 8.30322 2.54096 7.00008 2.54096C5.69693 2.54096 4.64053 3.64189 4.64053 4.99997C4.64053 6.35804 5.69693 7.45897 7.00008 7.45897ZM7.9439 4.99997C7.9439 5.54319 7.52133 5.98357 7.00008 5.98357C6.47882 5.98357 6.05626 5.54319 6.05626 4.99997C6.05626 4.45674 6.47882 4.01636 7.00008 4.01636C7.52133 4.01636 7.9439 4.45674 7.9439 4.99997Z" fill="#929292" />
                            </svg>
                            <h1>Profile views</h1>
                        </div>
                        <div className="wall__userprofile--card__views--counts">
                            <span>0</span>
                        </div>
                    </div>
                    <div className="wall__userprofile--card__join">
                        <Link to="/" className="joined">Become an elite member</Link>
                    </div>
                </div>
                <div className="wall__middlesection">
                    <div className="wall__middlesection--card">
                        <ul className="list">
                            <NavLink to='' className='list__child'>
                                <li>Wall</li>
                            </NavLink>
                            <NavLink to='' className='list__child'>
                                <li>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>My kominiti</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ul>
                                                <NavLink to='' className='list__child'>
                                                    <li>Wall</li>
                                                </NavLink>
                                                <NavLink to='' className='list__child'>
                                                    <li>Wall</li>
                                                </NavLink>
                                                <NavLink to='' className='list__child'>
                                                    <li>Wall</li>
                                                </NavLink>
                                                <NavLink to='' className='list__child'>
                                                    <li>Wall</li>
                                                </NavLink>
                                            </ul>
                                        </AccordionDetails>
                                    </Accordion>
                                </li>
                            </NavLink>
                            <NavLink to='' className='list__child'>
                                <li>Send referral</li>
                            </NavLink>
                            <NavLink to='' className='list__child'>
                                <li>Invite campaign</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
                <div className="wall__suggestion">
                   <div className="wall__suggestion--card">
                      <div className="wall__suggestion--card--heading">
                        <h1>Suggested Groups</h1>
                      </div>
                      <div className="wall__suggestion--card--list">
                        <div className="creative">
                            <div className="creative__right">
                                <div className="creative__right--image">
                                    <img src={user} alt='group'/>
                                </div>
                                <div>
                                  <h1>Creative thinker</h1>
                                 <p>30 Members</p>
                                </div>
                            </div>
                            <div className="creative__left">
                               <Link to='/' className="join">Join</Link>
                            </div>
                        </div>
                        <div className="creative">
                            <div className="creative__right">
                                <div className="creative__right--image">
                                    <img src={user} alt='group'/>
                                </div>
                                <div>
                                  <h1>Creative thinker</h1>
                                 <p>30 Members</p>
                                </div>
                            </div>
                            <div className="creative__left">
                               <Link to='/' className="join">Join</Link>
                            </div>
                        </div>
                        <div className="creative">
                            <div className="creative__right">
                                <div className="creative__right--image">
                                    <img src={user} alt='group'/>
                                </div>
                                <div>
                                  <h1>Creative thinker</h1>
                                 <p>30 Members</p>
                                </div>
                            </div>
                            <div className="creative__left">
                               <Link to='/' className="join">Join</Link>
                            </div>
                        </div>
                      </div>
                   </div>
                </div>
                <div className="wall__bottom">
                  <div className="wall__bottom--card">
                      <div className="wall__bottom--card--heading">
                        <h1>Test your knowledge</h1>
                      </div>
                      <div className="wall__bottom--card--content">
                        <p>Test your knowledge, earn more  badges.</p>
                      </div>
                      <div className="wall__bottom--card--button">
                        <Link to='/' className="btn">
                          <button>Take a test</button>
                        </Link>
                      </div>
                  </div>
                </div>
            </div>
        </Fragment>
    )
}
export default LeftColumn;   