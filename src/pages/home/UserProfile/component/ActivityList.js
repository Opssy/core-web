import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import logo from '../../../../assets/banner_1.png'

function Activity() {
    return (
        <Fragment>
            <div className="activity">
                <h1>Activity</h1>
                <div className="activity__wrapper">
                   <div className="activity__wrapper-box">
                      <div className="activity__wrapper-box-child">
                          <div className="img-wrap">
                         <img src={logo} alt='school logo'/>
                          </div>
                          <div className="details">
                            <h1>University of Ilorin</h1>
                            <p>Eke Chibueze Precious shared this</p>
                            <span>28 reactions</span>
                          </div>
                      </div>
                      <div className="activity__wrapper-box-child">
                          <div className="img-wrap">
                            <img src={logo} alt='school logo'/>
                          </div>
                          <div className="details">
                            <h1>University of Ilorin</h1>
                            <p>Eke Chibueze Precious shared this</p>
                            <span>28 reactions</span>
                          </div>
                      </div>
                   </div>
                   <div className="activity__wrapper-box">
                      <div className="activity__wrapper-box-child">
                          <div className="img-wrap">
                         <img src={logo} alt='school logo'/>
                          </div>
                          <div className="details">
                            <h1>University of Ilorin</h1>
                            <p>Eke Chibueze Precious shared this</p>
                            <span>28 reactions</span>
                          </div>
                      </div>
                      <div className="activity__wrapper-box-child">
                          <div className="img-wrap">
                            <img src={logo} alt='school logo'/>
                          </div>
                          <div className="details">
                            <h1>University of Ilorin</h1>
                            <p>Eke Chibueze Precious shared this</p>
                            <span>28 reactions</span>
                          </div>
                      </div>
                   </div>
                </div>
                <div className='activity--footer'>
                    <Link to='/' className='more'>See more</Link>
                </div>
            </div>
        </Fragment>
    );
}
export default Activity;