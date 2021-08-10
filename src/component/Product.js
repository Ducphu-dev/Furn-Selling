
import '../App.css';
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productAction from '../actions/productAction';

function Product(props) {

    const price_sale = () => {
        if (product.product_sale === null) {
            return false;
        }
        return true;
    }
    const list_newproduct = () => {
        const date = moment(product.product_date, "YYYYMMDD").fromNow()

        const inforDay = date.split(" ")
        
        if(inforDay[0] < 31 && inforDay[1].includes("days")){
            return true;
        }

        if(inforDay[0].includes("a") && inforDay.includes("month")){
            return true;
        }

        return false
        
        
    }



    const { product } = props
    // funtion
    const { addProduct, viewProduct } = props

    return (
        <div className="col-6 col-md-4 col-xl-3 product-item" key={product._id}>
            <div className="list-products"  >
                <div className="product-img card border-0" >
                    <Link className="image card-img-top" to="/detail" onClick={() => viewProduct(product._id)}>
                        <img className="card-img-top img" src={product.product_img} alt="Card image"></img>
                        <img className="card-img-top img_hover" src={product.product_img_hover} alt="Card image"></img>
                    </Link>
                    <div className="products-btn card-img-overlay">
                        <div className="d-flex">
                            <div className="btn_left mr-auto d-flex flex-column">
                                <span className="badge badge_new px-2 py-2 mb-1 ">{list_newproduct() ? 'New' : ''}</span>
                                <span className="badge badge_sale px-2 py-2 mr-auto">{price_sale() ? `${product.product_sale}%` : null}</span>
                            </div>
                            <div className="btn_right d-flex flex-column">
                                <a className="products-btn__like btn mb-3">
                                    <i className="fa fa-heart " aria-hidden="true"></i>
                                </a>
                                <div className="btn_hover d-flex flex-column">
                                    <a className="products-btn__like btn mb-3">
                                        <i className="fa fa-expand" aria-hidden="true"></i>
                                    </a>
                                    <a className="products-btn__like btn mb-3">
                                        <i className="fa fa-share" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="btn-add__overlay d-flex justify-content-center btn-add__overlay--primary">
                            <a className="product-btn__view btn" role="button" onClick={() => addProduct(product._id)}> Add to cart</a>
                        </div>
                    </div>
                </div>
                <div className="product-title d-flex flex-column align-items-center py-4">
                    <Link className="product-title_name mb-2" to="/detail" onClick={() => viewProduct(product._id)}>{product.product_name}</Link>
                    <div className="d-flex align-items-center">
                        <p className="product_price">{`$${product.product_price - Math.ceil(product.product_price * (product.product_sale / 100))}`}</p>
                        <p className=" product_price_sale text-secondary ml-2"><s>{price_sale() ? `$${product.product_price}` : null}</s></p>
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

export default (Product);
