import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import logo from '../../../../assets/banner_1.png'

function Experience() {
    return (
        <Fragment>
            <div className="education">
                <h1>Experience</h1>
                <div className="education__wrapper">
                   <div className="education__wrapper-box">
                      <div className="education__wrapper-box-child">
                          <div className="img-wrap">
                            <img src={logo} alt='school logo'/>
                          </div>
                          <div className="details">
                            <h1>Graphic designer <span>Fulltime</span></h1>
                            <p className="kom">Kominiti</p>
                            <span>Jan.2020 - Nov.2021</span>
                          </div>
                      </div>
                      <div className="education__wrapper-box-child">
                          <div className="img-wrap">
                            <img src={logo} alt='school logo'/>
                          </div>
                          <div className="details">
                            <h1>Data Anyalystic <span>Fulltime</span></h1>
                            <p className="kom">Uadcy</p>
                            <span>Jan.2020 - Nov.2021</span>
                          </div>
                      </div>
                      <div className="education__wrapper-box-child">
                          <div className="img-wrap">
                            <img src={logo} alt='school logo'/>
                          </div>
                          <div className="details">
                            <h1>Lead Designer <span>Halftime</span></h1>
                            <p className="kom">Master</p>
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
export default Experience;