
// css
import '../css/header/style.css';
import '../css/main/style.css';
import '../css/footer/style.css';


// componen
import Cart from '../component/Cart';
import Product_Side from '../component/Product-Side';

import React from 'react';

import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';


function CartPage(props) {
    //   state
    const { amount, product, amount_product_add } = props
    const amout = amount_product_add.length
    console.log(amout)
    // function
    const { deleteProduct, addProduct, miunusProduct, viewProduct, deleteAllProduct } = props

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

                <div className="main-cart">
                    <div className="container py-5">
                        <div className="cart__title d-flex align-items-center py-4">
                            <div className="">
                                <h1 className="" href="#">
                                    Your cart items
                                </h1>
                            </div>
                        </div>
                        <div className="cart__lists">
                            <div className="row items__title py-4 text-center">
                                <div className="col" >IMAGE</div>
                                <div className="col" >PRODUCT NAME</div>
                                <div className="col" >UNTIL PRICE</div>
                                <div className="col" >QTY</div>
                                <div className="col" >SUBTOTAL</div>
                                <div className="col" >ACTION</div>
                            </div>
                            {

                                amount_product_add.map((product) => {
                                    return (
                                        <Cart key={product._id}
                                            product={product}
                                            amount={amount}
                                            deleteProduct={deleteProduct}
                                            addProduct={addProduct}
                                            miunusProduct={miunusProduct}
                                            viewProduct={viewProduct}
                                        />
                                    )
                                })

                            }
                        </div>

                        <div className="cart__active d-flex py-4">
                            <a href="#" className="cart__btn-continuos btn btn-light px-5 py-3 " role="button">Continues shopping</a>
                            <a href="#" className="cart__btn btn px-5 py-3 ml-auto" onClick={deleteAllProduct} role="button">Clear Shopping cart</a>
                        </div>
                        <div className="cart__pay py-4">
                            <div className="proceed card border-0 ml-auto text-center" >
                                <div className="card-body">
                                    <h4 className="proceed__title card-title">Cart Total</h4>
                                    <div className="proceed__total d-flex py-4">
                                        <p className="card-text mr-auto">Total products:</p>
                                        <p className="total card-text">
                                            {
                                                amount_product_add.reduce((total, product) =>
                                                    Math.ceil(total = total + ((product.product_price - Math.ceil((product.product_price * (product.product_sale / 100)))) * product.product_amount)), 0
                                                )
                                            }
                                        </p>
                                    </div>
                                    {
                                        amount === 0 ? <Link to="/checkout" className="cart__btn btn px-5 py-3" role="button">PROCEED TO CHECKOUT</Link> : <a className="cart__btn btn px-5 py-3" role="button">PROCEED TO CHECKOUT</a>
                                    }
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



export default CartPage;
