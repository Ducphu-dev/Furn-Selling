
import '../App.css';
import React from 'react'

function Product_Detail(props) {

    const { product, delivery_poli, sercurity_poli, return_poli, amount_product_details } = props
    // function
    const { addProduct, plus_details, minus_details, add_more_product } = props

    const price_sale = () => {
        if (product.product_sale === null) {
            return false;
        }
        return true;
    }

    return (
        <div>
            <div className="row" key={product.product_id}>
                <div className="products-detail__img col-md-5">
                    <div className="img-preview">
                        <img src={product.product_img}></img>
                    </div>
                    <div className="img-small-preview my-2 d-flex" >
                        <img src={product.product_img} className="m-2" alt=""></img>
                        <img src={product.product_img} className="m-2" alt=""></img>
                        <img src={product.product_img} className="m-2" alt=""></img>
                        <img src={product.product_img} className="m-2" alt=""></img>
                        <img src={product.product_img} className="m-2" alt=""></img>
                    </div>
                </div>

                <div className="products-detail__infor col-md-7">
                    <div className="detail border-bottom">
                        <div className="detail__title">
                            <h3 className="detail__name mb-3">{product.product_name}</h3>
                            <div className="d-flex my-4 align-items-center">
                                <p className="detail__price">{`$${product.product_price - Math.ceil(product.product_price * (product.product_sale / 100))}` }</p>
                                <p className="detail__price_sale text-secondary ml-2"><s>{price_sale() ? `$${product.product_price}` : null}</s></p>
                            </div>
                            <p className="detail__infor">{product.product_infor}</p>
                        </div>

                        <div className="detail__amount__add d-flex my-5">
                            <div className="detail__amount d-flex border">
                                <span className="input-group-btn d-flex justify-content-center">
                                    <button type="button" className="btn btn__plus__minus" onClick={minus_details} >
                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                    </button>
                                </span>
                                <input type="text" name="quant[1]" className=" border-0 input-number text-center" onChange={add_more_product} value={amount_product_details} />
                                <span className="input-group-btn d-flex justify-content-center">
                                    <button type="button" className="btn btn__plus__minus" onClick={plus_details} >
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </button>
                                </span>
                            </div>
                            <div className="detail__add mx-3">
                                <a onClick={() => addProduct(product.product_id)} className="detail__add-btn btn btn-warning px-5 py-2" role="button">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="detail__policy my-4">
                        <div className="policy d-flex align-items-center my-2">
                            <img className="mr-3" src={sercurity_poli} alt=""></img>
                            <span>Security Policy (Edit With Customer Reassurance Module)</span>
                        </div>
                        <div className="policy d-flex align-items-center my-2">
                            <img className="mr-3" src={delivery_poli} alt=""></img>
                            <span>Delivery Policy (Edit With Customer Reassurance Module)</span>
                        </div>
                        <div className="policy d-flex align-items-center my-2">
                            <img className="mr-3" src={return_poli} alt=""></img>
                            <span>Return Policy (Edit With Customer Reassurance Module)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-nav my-5">
                {/* <!-- Nav tabs --> */}
                <ul className="nav nav-tabs d-flex justify-content-center border-0" role="tablist">
                    <li className="nav-item ">
                        <a className="nav-link active border-0" data-toggle="tab" href="#menu1">Product Details</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link border-0" data-toggle="tab" href="#menu2">Description</a>
                    </li>
                </ul>

                {/* <!-- Tab panes --> */}
                <div className="tab-content border">

                    <div id="menu1" className=" menu2 container tab-pane m-4 active">
                        <div className="row">
                            <div className="infor__products col-4 col-md-2 d-flex flex-column">
                                <ul className="nav infor d-flex flex-column">
                                    <li className="nav-item">Weight</li>
                                    <li className="nav-item">Dimensions</li>
                                    <li className="nav-item">Materials</li>
                                    <li className="nav-item">Other Info</li>
                                </ul>
                            </div>
                            <div className="infor__products col-8 col-md-10">
                                <ul className="nav infor d-flex flex-column">
                                    <li className="nav-item">{product.prodcuct_weight} g</li>
                                    <li className="nav-item">{product.product_dimension} cm</li>
                                    <li className="nav-item">{product.product_material}</li>
                                    <li className="nav-item">{product.product_infor}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="menu2" className="menu1 container tab-pane p-4 ">
                        <p>{product.product_description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product_Detail;
