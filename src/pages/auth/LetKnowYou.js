import React, { Fragment } from 'react';
import '../../styles/userinfo.scss'
import Logo from '../../assets/footer-logo.png'
import { Link } from 'react-router-dom';
import Footer from './component/Footer';
function LetKnowYou() {
    return (
        <Fragment>
            <div className='userinfo'>
                <div className='userinfo__header'>
                    <img src={Logo} alt='logo' />
                </div>
                <div className='userinfo__container'>
                    <div className='userinfo__container-box'>
                        <div className='userinfo__container-box--save'>
                            <div className='userinfo-email'>
                                <h2>Let’s get to know more about you.</h2>
                            </div>
                            <form>
                                <div className='userinfo__wrap'>
                                    <div className='userinfo__wrap-email'>
                                        <label>What do you do?</label>
                                        <div className='userinfo__wrap-email-box'>
                                            <div className='userinfo__wrap-email-input'>
                                                <input class="input-field" type="text" placeholder="E.g Graphics designer" name="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className='userinfo-footer'>
                                <p><Link to='/' className='resends'>Continue </Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </Fragment>
    );
}

export default LetKnowYou;