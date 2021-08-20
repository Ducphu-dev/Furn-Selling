
import '../App.css';
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productAction from '../actions/productAction';

function AccountPage(props) {

   
    // funtion
    const { btnLogout } = props


    return (
        <div className="login-page">
            <div className="main-page">
                <div className="container py-5">
                    <div className="d-flex align-items-center py-4">
                        <div className="main-stage__page">
                            <h1 className="" href="#">
                                Account
                            </h1>
                        </div>
                        <div className="main-stage__listpage ml-auto ">
                            <ul className="d-flex align-items-center list-breakcrumb">
                                <li>
                                    <a href="index.html" >Home</a>
                                </li>
                                <li>
                                    <a href="#" className="active">Account</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="login-form">
                   
                    <div className="form">
                            <Link className="btn btn-primary btn-hover-dark mt-4 rounded-0" to="/login" onClick={btnLogout}  >Logout</Link>
                       
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

export default (AccountPage);
