
// css
import '../css/header/style.css';
import '../css/main/style.css';
import '../css/footer/style.css';

// componen
import React from 'react';

import '@fortawesome/fontawesome-free/css/all.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function CheckOutPage(props) {

    //   state
    const { amount_product_add } = props
    // function
    const { orderBtn, abc } = props

    // form function
    const { formFirstName, formLastName, formCompanyName, formCountryName, formAddress, formApartment, formCity, formState, formPhone, formEmail } = props

    const companyName = [
        {
            value: "",
            label: "Select a company"
        },
        {
            value: "azerbaijan",
            label: "Azerbaijan"
        },
        {
            value: "bahamas",
            label: "Bahamas"
        },
        {
            value: "bahrain",
            label: "Bahrain"
        },
        {
            value: "bangladesh",
            label: "Bangladesh"
        },
        {
            value: "barbados",
            label: "Barbados"
        },

    ]

    return (

        <div>
            { /* CART start */}
            <main className="main">
                <div className="main-page">
                    <div className="container py-5">
                        <div className="d-flex align-items-center py-4">
                            <div className="main-stage__page">
                                <h1 className="" href="#">
                                    CART
                                </h1>
                            </div>
                            <div className="main-stage__listpage ml-auto ">
                                <ul className="d-flex align-items-center">
                                    <li >
                                        <a href="" className="active">Home</a>
                                    </li>
                                    <li>
                                        <a href="">Cart</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-checkout">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-md-12 col-lg-7 checkout_bill">
                                <div className="title-checkout py-3">
                                    Billing Details
                                </div>
                                <div className="checkout_fill">

                                    <form >
                                        <div className="d-flex row">
                                            <div className="col-sm-12 col-lg-6 form-group">
                                                <label for="firstname">First Name</label>
                                                <input type="text" onChange={formFirstName} className="form-control" id="firstname" />                                            </div>
                                            <div className="col-sm-12 col-lg-6 form-group">
                                                <label for="lastname">Last Name</label>
                                                <input type="text" onChange={formLastName} className="form-control" id="lastname"></input>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="company">Company Name</label>
                                            <select className="d-flex align-items-center" onChange={formCompanyName} id="company">
                                                {
                                                    companyName.map((optionPrice, index) => (
                                                        <option key={index} value={optionPrice.value}>{optionPrice.label}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className=" form-group">
                                            <label for="country">Country</label>
                                            <input type="text" onChange={formCountryName} className="form-control" id="country"></input>
                                        </div>
                                        <div className=" form-group">
                                            <label for="address">Street Address</label>
                                            <input type="text" className="form-control" onChange={formAddress} placeholder="House number and street name" id="address"></input>
                                            <input type="text" className="form-control" onChange={formApartment} placeholder="Apartment, suite, unit etc." id="apartment"></input>
                                        </div>
                                        <div className=" form-group">
                                            <label for="city">Town / City</label>
                                            <input type="text" onChange={formCity} className="form-control" id="city"></input>
                                        </div>
                                        <div className="d-flex row">
                                            <div className="col-sm-12 col-lg-6 form-group">
                                                <label for="state">State / County</label>
                                                <input type="text" onChange={formState} className="form-control" id="state"></input>
                                            </div>
                                            <div className="col-sm-12 col-lg-6 form-group">
                                                <label for="phone">Phone</label>
                                                <input type="tel" className="form-control" onChange={formPhone} id="phone" name="phone" pattern="[0]{1}[0-9]{1}[0-9]{8}" required></input>
                                            </div>
                                        </div>
                                        <div className=" form-group">
                                            <label for="email">Email Address</label>
                                            <input type="email" onChange={formEmail} className="form-control" id="email"></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-5 checkout_order">
                                <div className="title-checkout py-3">
                                    Your order
                                </div>
                                <div className="checkout_order-content py-4 px-5">
                                    <div className="bill_content d-flex">
                                        <span>Product</span>
                                        <span className="ml-auto">Total</span>
                                    </div>
                                    <div className="bill_content bill_products d-flex">
                                        <div>
                                            {
                                                amount_product_add.map(product => (
                                                    <p key={product.product_id} className="checkout-product">{product.product_name}  x  {product.product_amount} </p>
                                                ))
                                            }
                                        </div>
                                        <div className="ml-auto">
                                            {
                                                amount_product_add.map(product => (
                                                    <p key={product.product_id} className="checkout-product">
                                                        {
                                                            `$${Math.ceil((product.product_price - Math.ceil(product.product_price * (product.product_sale / 100))) * product.product_amount)}`
                                                        }
                                                    </p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="bill_content d-flex">
                                        <span>Shipping</span>
                                        <p className="ml-auto">Free shipping</p>
                                    </div>
                                    <div className="bill_content d-flex">
                                        <div className="d-flex flex-column">
                                            <span>Total</span>
                                            <span>Amount</span>
                                        </div>
                                        <div className="ml-auto d-flex flex-column">
                                            <p className=" total">
                                                ${
                                                    amount_product_add.reduce((total, product) =>
                                                        Math.ceil(total = total + ((product.product_price - Math.ceil((product.product_price * (product.product_sale / 100)))) * product.product_amount)), 0
                                                    )
                                                }
                                            </p>
                                            <p className=" total">
                                                x{
                                                    amount_product_add.reduce((total, product) =>
                                                        total = total + product.product_amount, 0
                                                    )
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bill_content">
                                        <span>Direct bank transfer</span>
                                        <p className="direct p-2">
                                            Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                        </p>
                                    </div>
                                </div>
                                <div className="bill_order mt-4">
                                    <Link to="/success" onClick={orderBtn} className="order__btn btn px-5 py-3" role="button">
                                        PLACE ORDER
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* CART end */}
        </div>

    );
}



export default CheckOutPage;
