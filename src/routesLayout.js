import React, { Component, Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
// import AuthLayout from './layout/AuthLayout';
import Signup from './pages/auth/Signup';
import AccountType from './pages/auth/AccountType'
import SignupForm from './pages/auth/SignupForm';
import Login from './pages/auth/Login';
import BusinessForm from './pages/auth/BusinessForm';

//to be removed later under maybe
import VerifyModal from './pages/auth/component/VerifyModal';
import PasswordReset from './pages/auth/PasswordReset'
import ForgotPassword from './pages/auth/ForgotPassword';
import PasswordResetMail from './pages/auth/PasswordResetMail';
import Thankyou from './pages/auth/Thankyou';
import LetKnowYou from './pages/auth/LetKnowYou';


const routesLayout = () => (
  <Fragment>
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path='/account-type' element={<AccountType/>}/>
      <Route path='/signup-form/:formType' element={<SignupForm/>}/>
      <Route path='/verify' element={<VerifyModal/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/password-reset' element={<PasswordReset/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/reset-mail' element={< PasswordResetMail/>}/>
      <Route path='/verified' element={< Thankyou/>}/>
      <Route path='/user-info' element={< LetKnowYou/>}/>
      <Route path='/business-form' element={< BusinessForm/>}/>
     </Routes>
  </Fragment>
);

export default routesLayout;