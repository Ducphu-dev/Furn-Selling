// css
import '../css/header/style.css';
import '../css/main/style.css';
import '../css/footer/style.css';

// component
import confirmDelete from '../component/confirmDelete'


import React from 'react';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import product from '../component/Product';
import AddProduct from './AddProduct';


function ShowAll (props){
    const { productsList, DeleteDB, viewDetail, clearUpdate , isAdminLogin } = props
    

    return(
        <div>
        {
            isAdminLogin === true ? 
                <div className="addproduct-main-area pt-100px pb-100px">
                {/* <confirmDelete/> */}
                <div className="container">
                    <div class="row showall-title">
                        <h3 className="addproduct-page-title">Our Product</h3>
                        <Link to='/addproduct' className="add " onClick={clearUpdate}>Add Product</Link>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <form action="#">
                                <div className="table-content table-responsive addproduct-table-content">
                                    <table> 
                                        <thead>
                                            <tr>
                                                <th>Picture</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Sale</th>
                                                <th>Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            {  
                                                productsList.map((product) => {
                                                    return (
                                                        <tr key={product._id}>
                                                        <td className="product-img">
                                                            <a href="#"><img className="img-responsive ml-15px" src={product.product_img} alt=""></img></a>
                                                        </td>
                                                        <td className="product-name"><a href="#">{product.product_name}</a></td>
                                                        <td className="product-price"><span className="amount">{`$${product.product_price}`}</span></td>
                                                        <td className="product-saleoff">{`${product.product_sale}%`}</td>
                                                        <td className="product-date">{  moment(product.product_date).format("DD/MM/YYYY")}</td>
                                                        <td className="product-remove">
                                                            <Link to='/addproduct' onClick={()=> viewDetail(product._id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                                            </svg>
                                                            </Link>
                                                            <a>
                                                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => DeleteDB(product._id)} width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                            </svg>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    )
                                                })
                                            }
                                        
                                            <div>

                                            </div>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>:
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
                        <Link className="btn btn-primary btn-hover-dark mt-4 rounded-0" to="/admin"   >Go to admin login</Link>
                   
                </div>
            </div>
        </div>
        
    </div>
        }
        
        </div>
       
    );

}

export default ShowAll;