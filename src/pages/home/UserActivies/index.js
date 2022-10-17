import React, { Fragment } from 'react';
import Leftsidebar from './component/Leftsidebar';
import Right from '../UserProfile/component/Right';
import Middlebar from './component/Middlebar'
import '../../../styles/userprofile.scss'
import Header from '../../../components/header/Header'
import Footer from './../../../components/footer/Footer';
const UserActivity = () => {
    return (
            <Fragment>
                <Header/>
                <div className='userprofilepage'>
                    <div className='userprofilepage__wrapper'>
                        <div className='userprofilepage__leftsidebar'>
                          <Leftsidebar/>
                        </div>
                        <div className='userprofilepage__middlecolumn'>
                            <Middlebar/>
                        </div>
                        <div className='userprofilepage__rightsidebar'>
                          <Right/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>
    )
}
export default UserActivity;