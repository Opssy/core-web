import React, { Fragment } from 'react';
import Left from './component/Left';
import Right from './component/Right';
import Middle from './component/Middle';
import '../../../styles/userprofile.scss'
import Header from '../../../components/header/Header'
import Footer from './../../../components/footer/Footer';
const UserProfile = () => {
    return (
            <Fragment>
                <Header/>
                <div className='userprofilepage'>
                    <div className='userprofilepage__wrapper'>
                        <div className='userprofilepage__leftsidebar'>
                          <Left/>
                        </div>
                        <div className='userprofilepage__middlecolumn'>
                            <Middle/>
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
export default UserProfile;