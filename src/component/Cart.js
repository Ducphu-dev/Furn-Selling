
import '../App.css';
import React from 'react'
import { Link } from 'react-router-dom';

function Cart(props) {
    const { product } = props
    // function
    const { deleteProduct, addProduct, miunusProduct, viewProduct } = props
    return (
        <div key={product._id}>
            <div  className="items__products row text-center border border-top-0 align-items-center py-4">
                <div className="col-2 col-img " >
                    <div className="shop-item d-flex " >
                        <img className="" src={product.product_img} alt="Card image" ></img>
                    </div>
                </div>
                <div className="col-2 col-name">
                    <Link to="/detail" onClick={() => viewProduct(product._id)}>{product.product_name}</Link>
                </div>
                <div className="col-2 col-price" >
                    {`$${product.product_price - Math.ceil(product.product_price * (product.product_sale / 100))}`}
                </div>
                <div className="col-2 col-quantity " >
                    <div className="d-flex align-items-center ">
                        <span className="input-group-btn">
                            <button type="button" className="btn border rounded-0" onClick={() => miunusProduct(product._id)} >
                                <i className="fa fa-minus" aria-hidden="true"></i>
                            </button>
                        </span>
                        <div  className="form-control input-number text-center border-top border-bottom rounded-0"  >{product.product_amount}</div>
                        <span className="input-group-btn">
                            <button type="button" className="btn border rounded-0" onClick={() => addProduct(product._id)}>
                                <i className="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </span>
                    </div>
                </div>
                <div className="col-2 col-total">
                    {
                        `$${Math.ceil((product.product_price - Math.ceil(product.product_price * (product.product_sale / 100))) * product.product_amount)}`
                    }

                </div>
                <div className="col-2 col-delete" >
                    <a href="javascript:void(0);" onClick={() => deleteProduct(product._id)}><i className="fa fa-times" aria-hidden="true"></i></a>
                </div>
            </div>
            {/* mobile */}
            <div className="cart__lists-mobile ">
                <div className="shop-item border d-flex p-2" key={product._id}>
                    <img className="side-product__img" src={product.product_img} alt="Card image"></img>
                    <div className="side-product__title  ">
                        <Link to="/detail" onClick={() => viewProduct(product._id)} className="title">{product.product_name}</Link>
                        <p className="item-price">{`$${product.product_price - Math.ceil(product.product_price * (product.product_sale / 100))}`}</p>

                        <div className="d-flex cart_quantity align-items-center">
                            <span className="input-group-btn">
                                <button type="button" className="btn border rounded-0" onClick={() => miunusProduct(product._id)} >
                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                </button>
                            </span>
                            <div  className="form-control input-number text-center border-top border-bottom rounded-0" >{product.product_amount}</div>
                            <span className="input-group-btn">
                                <button type="button" className="btn border rounded-0" onClick={() => addProduct(product._id)}>
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            </span>
                        </div>
                        <a href="javascript:void(0);" className="side-product__close ml-auto " onClick={() => deleteProduct(product._id)}>
                            <i className="fa fa-trash " aria-hidden="true"></i>
                        </a>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart;
