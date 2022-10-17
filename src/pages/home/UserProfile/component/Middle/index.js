import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import trivia from '../../../../../assets/trivia-bg.png'
import Education from '../Education';
import Experience from '../Experience';
import Activity from './../ActivityList';
import ActiveDeals from './../ActiveDeals';
import Review from './../Reviews';
const Middle = () => {
    return (
        <Fragment>
            <div>
                <div className='userprofilepage__middle'>
                    <div className='userprofilepage__middle_aboutme'>
                        <h1>About me </h1>
                        <div className='userprofilepage__middle_aboutme--p'>
                            <p>
                                Deserunt esse dolor sunt laboris cupidatat anim
                                consequat aliqua ad. Magna non quis nulla dolore
                                occaecat. Enim nisi eiusmod voluptate officia. Fugiat ipsum reprehenderit pariatur deserunt.
                                Deserunt esse dolor sunt laboris cupidatat anim conse
                                quat aliqua ad. Magna non quis nulla dolore occaecat.
                                Enim nisi eiusmod voluptate officia. Proident proident
                                elit id sunt incididunt duis nisi duis aliquip laboris
                                ex pariatur Lorem ex. Exercitation nisi id consectetur
                                pariatur nulla esse do proident ex veniam adipisicing do reprehenderit consequat. Fugiat ipsum reprehenderit pariatur deserunt.
                                <Link to='/'> See more..</Link>
                            </p>
                        </div>
                    </div>
                    <div className='userprofilepage__middle--portfolio'>
                        <h1>portfolio</h1>
                        <div className='portfolio'>
                            <Link to='/' className='portfolio__link'>
                            <div className='portfolio-one'>
                                <div className='portfolio-one--box'>
                                    <img src={trivia} alt='portfolio' />
                                </div>
                                <p>project_name</p>
                            </div>
                            </Link>
                            <Link to='/'  className='portfolio__link'>
                            <div className='portfolio-one'>
                                <div className='portfolio-one--box'>
                                    <img src={trivia} alt='portfolio' />
                                </div>
                                <p>project_name</p>
                            </div>
                            </Link>
                            <Link to='/'  className='portfolio__link'>
                            <div className='portfolio-one'>
                                <div className='portfolio-one--box'>
                                    <img src={trivia}  alt='portfolio'/>
                                </div>
                                <p>project_name</p>
                            </div>
                            </Link>
                        </div>
                        <div className='userprofilepage__middle--portfolio--footer'>
                           <Link to='/' className='more'>See more</Link>
                        </div>
                    </div>
                    <div className='userprofilepage__education'>
                       <Experience/>
                    </div>
                    <div className='userprofilepage__education'>
                       <Education/>
                    </div>
                    <div className='userprofilepage__educations'>
                       <Activity/>
                    </div>
                    <div className='userprofilepage__educations'>
                       <ActiveDeals/>
                    </div>
                    <div className='userprofilepage__educations'>
                       <Review/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Middle;