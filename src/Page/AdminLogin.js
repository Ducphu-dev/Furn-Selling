
import '../App.css';
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function AdminPage(props) {
    // funtion
    const {  errorMsgAdmin,AdminName,AdminPassword , btnAdmin, isAdminLogin} = props
<<<<<<< HEAD
    
    let data = sessionStorage.getItem('admin');
    console.log(data)
  
=======
    const islogin = sessionStorage.getItem('admin')
    console.log(isAdminLogin)
>>>>>>> a6f9007544bf046ef394eb58e77d101bf9f79830
    return (
        <div className="login-page admin">
            <div className="container">
                <div className="login-form">
                    <div className="login-tabs">
                        <ul className="list-login-tabs">
                            <li >
                                <p className="active">Admin Login</p>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="form">
                        
                        <div className="form-register active">
                            <div className="input">
                                <input className="input-form" onChange={AdminName} type="text" placeholder="Username"/>
                                <span>{errorMsgAdmin.adminName}</span>
                            </div>
                            
                            <div className="input">
                                <input className="input-form" onChange={AdminPassword} type="password" placeholder="Password"/>
                                <span >{errorMsgAdmin.adminPassword}</span>
                            </div>
                           
                            <a className="btn btn-primary btn-hover-dark mt-4 rounded-0"  onClick={btnAdmin}>Login</a>
                            <Link to='/showall' className="btn btn-primary btn-hover-dark mt-4 rounded-0" style={{display: isAdminLogin === true ? "block" : "none" }} >Storage</Link>
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

export default (AdminPage);
