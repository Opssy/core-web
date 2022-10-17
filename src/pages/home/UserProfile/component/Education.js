import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import logo from '../../../../assets/banner_1.png'

function Education() {
    return (
        <Fragment>
            <div className="education">
                <h1>Education</h1>
                <div className="education__wrapper">
                   <div className="education__wrapper-box">
                      <div className="education__wrapper-box-child">
                          <div className="img-wrap">
                            <img src={logo} alt='school logo'/>
                          </div>
                          <div className="details">
                            <h1>University of Ilorin</h1>
                            <p>Masters in Business Management</p>
                            <span>Jan.2020 - Nov.2021</span>
                          </div>
                      </div>
                      <div className="education__wrapper-box-child">
                          <div className="img-wrap">
                            <img src={logo} alt='school logo'/>
                          </div>
                          <div className="details">
                            <h1>University of Ilorin</h1>
                            <p>Masters in Business Management</p>
                            <span>Jan.2020 - Nov.2021</span>
                          </div>
                      </div>
                      <div className="education__wrapper-box-child">
                          <div className="img-wrap">
                            <img src={logo} alt='school logo'/>
                          </div>
                          <div className="details">
                            <h1>University of Ilorin</h1>
                            <p>Masters in Business Management</p>
                            <span>Jan.2020 - Nov.2021</span>
                          </div>
                      </div>
                   </div>
                </div>
                <div className='education--footer'>
                    <Link to='/' className='more'>See more</Link>
                </div>
            </div>
        </Fragment>
    );
}
export default Education;