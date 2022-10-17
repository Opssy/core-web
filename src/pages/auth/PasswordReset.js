import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Header from './component/Header';
import Footer from './component/Footer';
import Logo from '../../assets/footer-logo.png'
import "../../styles/login.scss"
function Login() {
    return (
        <Fragment>
            <div className='login'>
                <Header />
                <div className='login__signupform' style={{marginTop:'9%'}}>
                    <div className='login__signupform-logo'>
                       <img src={Logo} alt='logo'/>
                    </div>
                     <div className='login__signupform-wrap'>
                     <div className='login__signupform-text'>
                        <h2>
                        Change Password
                        </h2>
                        <p>
                        Enter a new password to access your account
                        </p>
                    </div>
                     </div>
                    <div className='login__signupform--wrap'>
                        <div className='formik'>
                            <form>
                            <div className='formik__wrap'>
                                <div className='formik__wrap-password'>
                                    <label>Password</label>
                                    <div className='formik__wrap-password-box'>
                                        <div className='formik__wrap-password-input'>
                                            <Input.Password
                                                placeholder="input password"
                                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='formik__wrap-password'>
                                    <label>Confirm password</label>
                                    <div className='formik__wrap-password-box'>
                                        <div className='formik__wrap-password-input'>
                                            <Input.Password
                                                placeholder="input password"
                                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='formik__wrap-btn'>
                                    <Link to='/' className='button'>Change Password</Link>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}

export default Login;


