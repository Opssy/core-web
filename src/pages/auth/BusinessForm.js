import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Logo from "../../assets/logo.png"
import "../../styles/businessform.scss"
function BusinessForm() {
    return (
        <Fragment>
            <div className='business'>
                <Header />
                <div className='business__sub'>
                    <div className='business__sub-header'>
                        <h2>Sign up your business</h2>
                        <Link to='/' className='biz'>Business info</Link>
                    </div>
                </div>
                <div className='business_container'>
                <div className='business_container__desc'>
                    <p>
                        <span>
                            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.284 7.7152H4.03678L8.70351 2.10999C8.92172 1.84745 9.02671 1.50898 8.99536 1.16903C8.96402 0.829086 8.79892 0.515513 8.53638 0.297298C8.27384 0.0790819 7.93536 -0.0259025 7.59542 0.00544001C7.25547 0.0367826 6.9419 0.201885 6.72368 0.464426L0.295688 8.17802C0.252441 8.23937 0.213768 8.30383 0.179984 8.37086C0.179984 8.43514 0.179984 8.47371 0.0899922 8.53799C0.0317204 8.68539 0.0012099 8.8423 0 9.0008C0.0012099 9.1593 0.0317204 9.31621 0.0899922 9.46362C0.0899922 9.5279 0.0899918 9.56647 0.179984 9.63075C0.213768 9.69778 0.252441 9.76223 0.295688 9.82359L6.72368 17.5372C6.84456 17.6823 6.99592 17.799 7.16702 17.879C7.33811 17.959 7.52473 18.0003 7.71359 18C8.01398 18.0006 8.30508 17.896 8.53638 17.7043C8.66656 17.5964 8.77416 17.4638 8.85304 17.3143C8.93191 17.1647 8.9805 17.001 8.99603 16.8326C9.01155 16.6643 8.9937 16.4945 8.94351 16.333C8.89331 16.1715 8.81176 16.0215 8.70351 15.8916L4.03678 10.2864H19.284C19.6249 10.2864 19.9519 10.151 20.193 9.90986C20.4341 9.66876 20.5696 9.34177 20.5696 9.0008C20.5696 8.65984 20.4341 8.33284 20.193 8.09175C19.9519 7.85065 19.6249 7.7152 19.284 7.7152Z" fill="black" />
                            </svg>
                        </span>
                        Let’s get started with a few details about your business.
                    </p>
                </div>
                <div className='business_container-wrapper'>
                    <div className='right'></div>
                    <div className='left'></div>
                </div>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}

export default BusinessForm;
