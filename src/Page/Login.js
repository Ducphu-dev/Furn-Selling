
import '../App.css';
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productAction from '../actions/productAction';

function LoginPage(props) {

    const { product } = props
    // funtion
    const { addProduct, viewProduct, UserNameReg, PasswordReg, EmailReg, btnReg, errorMsg, btnLogin, UserNameLogin, PasswordLogin, errorLoginMsg } = props

    const [toggleTabs, setToggleTabs] = useState(1)

    const changeTabsLogin = (number) =>{
        setToggleTabs(number)
    }

    return (
        <div className="login-page">
            <div className="main-page">
                <div className="container py-5">
                    <div className="d-flex align-items-center py-4">
                        <div className="main-stage__page">
                            <h1 className="" href="#">
                                Login
                            </h1>
                        </div>
                        <div className="main-stage__listpage ml-auto ">
                            <ul className="d-flex align-items-center list-breakcrumb">
                                <li>
                                    <a href="index.html" >Home</a>
                                </li>
                                <li>
                                    <a href="#" className="active">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="login-form">
                    <div className="login-tabs">
                        <ul className="list-login-tabs">
                            <li >
                                <p className={toggleTabs === 1 ? "active" : ""} onClick={()=>changeTabsLogin(1)}>Login</p>
                            </li>
                            <li>
                                <p className={toggleTabs === 2 ? "active" : ""}  onClick={()=>changeTabsLogin(2)}>Register</p>
                            </li>
                        </ul>
                    </div>
                    <div className="form">
                        <div className={toggleTabs === 1 ? "form-signin active" : "form-signin"} >
                            <div className="input">
                                <input className="input-form" onChange={UserNameLogin} type="text" placeholder="Username"/>
                                <span>{errorLoginMsg.usernameLoginError}</span>
                            </div>
                            
                            <div className="input">
                                <input className="input-form" onChange={PasswordLogin} type="password" placeholder="Password"/>
                                <span>{errorLoginMsg.passwordLoginError}</span>
                            </div>
                            
                            <div className="forgot">
                                <a href="">Forgot Password?</a>
                            </div>
                            <input className="btn-submit" onClick={btnLogin} type="submit" value="Login"/>
                        </div>
                        <div className={toggleTabs === 2 ? "form-register active" : "form-register"}>
                            <div className="input">
                                <input className="input-form" onChange={UserNameReg} type="text" placeholder="Username"/>
                                <span>{errorMsg.usernameRegError}</span>
                            </div>
                            
                            <div className="input">
                                <input className="input-form" onChange={PasswordReg} type="password" placeholder="Password"/>
                                <span >{errorMsg.passwordRegError}</span>
                            </div>
                            
                            <div className="input">
                                <input className="input-form" onChange={EmailReg} type="email" placeholder="Email"/>
                                <span>{errorMsg.emailRegError}</span>
                            </div>
                            
                            <input className="btn-submit" type="submit" value="Register" onClick={btnReg}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

// const mapDispatchToProps = dispatch =>{
//     return {
//         ...bindActionCreators(productAction, dispatch)
//     }
// }

export default (LoginPage);
