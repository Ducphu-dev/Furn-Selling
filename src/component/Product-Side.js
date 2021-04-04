
import '../App.css';
import React from 'react'
import { Link } from 'react-router-dom';

function Product_Side(props) {
    //   state
    const { product } = props

    // function
    const { deleteProduct, viewProduct } = props
    return (
        <div className="shop-item border-bottom d-flex  p-4" key={product.product_id}>
            <img className="side-product__img" src={product.product_img} alt="Card image"></img>
            <div className="side-product__title mx-4 ">
                <Link to="/detail" onClick={() => viewProduct(product.product_id)} className="title ml-auto">{product.product_name}</Link>
                <div className="d-flex">
                    <p className="item-amount">{product.product_amount} x </p>
                    <p className="item-price">{`$${product.product_price - Math.ceil(product.product_price * (product.product_sale / 100))}`}</p>
                </div>
            </div>
            <div className="side-product__close ml-auto" >
                <a onClick={() => deleteProduct(product.product_id)}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </a>
            </div>
        </div>


    )
}

export default Product_Side;
