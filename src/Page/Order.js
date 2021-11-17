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


function Order (props){
    const { productsList, DeleteDB, viewDetail,   } = props
    

    return(
        
        
        <div className="order-main-area pt-100px pb-100px">
            <confirmDelete/>
            <div className="container">
                <div class="row order-title">
                    <h3 className="order-page-title">Your Order</h3>
                </div>
                
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <form action="#">
                            <div className="table-content table-responsive order-table-content">
                                <table>                  
                                    <tbody>
                                        {  
                                            productsList.map((product) => {
                                                return (
                                                    <tr key={product._id}>
                                                        <td className="order-img">
                                                            <a href="#"><img className="img-responsive ml-15px" src={product.product_img} alt=""></img></a>
                                                        </td>
                                                        <td className="order-name"><a href="#">{product.product_name}</a>
                                                            <td className="order-amount">{product.product_amount}</td>
                                                            <td className="order-material">{product.product_material}</td>
                                                        </td>
                                                            <td className="order-saleoff">{`$${product.product_price}`}</td>
                                                            <td className="order-price"><span className="amount">{product.product_price}</span></td>
                                                        
                                                    </tr>
                                                    
                                                )
                                                
                                            })
                                            
                                        }
                                       
                                        <div>

                                        </div>
                                    </tbody>
                                    <tr>Delivred</tr>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       
    );

}

export default Order;