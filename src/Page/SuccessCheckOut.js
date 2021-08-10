
// css
import '../css/header/style.css';
import '../css/main/style.css';
import '../css/footer/style.css';

// componen
import React from 'react';

import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';
function SuccessPage(props) {

    const { amount_product_add } = props
    // function


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
                                <ul className="d-flex align-items-center list-breakcrumb">
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

                <div className="success-checkout">
                    <div className="container">

                        <div className="flag_noti d-flex flex-column align-items-center py-5">
                            <span className="flag_icon">
                                <i className="fa fa-check-circle fa-4x mr-2" aria-hidden="true" />
                            </span>
                            <span className="flag_icon p-4">The order has been successfully !</span>

                            <div className="succees_order checkout_order">
                                <div className="checkout_order-content py-4 px-5">
                                    <div className="bill_content d-flex">
                                        <span>Product</span>
                                        <span className="ml-auto">Total</span>
                                    </div>
                                    <div className="bill_content bill_products d-flex">
                                        <div>
                                            {
                                                amount_product_add.map(product => (
                                                    <p key={product._id} className="checkout-product">{product.product_name}  x  {product.product_amount} </p>
                                                ))
                                            }
                                        </div>
                                        <div className="ml-auto">
                                            {
                                                amount_product_add.map(product => (
                                                    <p key={product._id} className="checkout-product">
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
                                    <div className="shop_again d-flex flex-column align-items-center">
                                        <span className="flag_text p-4">Do you want to shop again?</span>
                                        <Link to="/shop">Shop now</Link>
                                    </div>
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



export default SuccessPage;
