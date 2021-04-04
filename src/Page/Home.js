
// css
import '../css/header/style.css';
import '../css/main/style.css';
import '../css/footer/style.css';

// component
import Product from '../component/Product';


import React from 'react';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';
import moment from 'moment';


function HomePage(props) {
    //   state
    const { productsList, products_recommendList, DetailsPage, product_sale_1, product_sale_2 } = props


    // function
    const { addProduct, viewProduct, formFirstName } = props

    const recommend_new_list = (productsList.filter((product, index) => product = product.product_sale !== null))

    return (

        <div>
            {/* INDEX start */}
            <main className="main">
                <div className="main-slider">
                    <div id="slider" className="carousel slide" data-ride="carousel">
                        {/* <!-- start slider --> */}
                        <div className="carousel-inner">
                            <ul className="carousel-indicators">
                                <li data-target="#slider" data-slide-to="0" className="active"></li>
                                <li data-target="#slider" data-slide-to="1"></li>
                            </ul>

                            <div className="carousel-item active">
                                <img src="https://htmldemo.hasthemes.com/furns/furns/assets/images/slider-image/slider-2-1.jpg" alt="Los Angeles"></img>
                            </div>
                            <div className="carousel-item">
                                <img src="https://htmldemo.hasthemes.com/furns/furns/assets/images/slider-image/slider-2-2.jpg" alt="Chicago"></img>
                            </div>

                            <a className="carousel-control-prev " href="#slider" data-slide="prev">
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                            </a>

                            <a className="carousel-control-next" href="#slider" data-slide="next">
                                <i class="fa fa-chevron-right" aria-hidden=" true"></i>
                            </a>
                        </div>
                        {/* <!-- end slider --> */}

                        {/* <!-- start introduce slider --> */}
                        <div className="introduce-center ">
                            <span><h4 className="font-weight-bold">New Product</h4></span>
                            <span className="products-name"><h1 className="font-weight-bold">Flexible Sofa Set</h1></span>
                            <span className="title"><p>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do <br /> eiusmo tempor incididunt ut labore et dolore magna</p></span>
                            <Link to="/shop">Shop now</Link>
                        </div>
                        {/* <!-- end introduce slider --> */}
                    </div>
                </div>

                <div className="main-list-products container">
                    {/* <!--  recommend list product start --> */}

                    <div className="main-list py-4 ">
                        <div className="row list-items-recommend py-4">

                            {
                                products_recommendList.map((product, index) => {
                                    return (
                                        <div className="col-12 col-sm-12 col-lg-4 my-3" key={product.prodcuct_id} >
                                            <div className="card d-flex align-items-center">
                                                <img className="card-img-top" src={product.prodcuct_img} alt="Card image"></img>
                                                <div className="text__overlay card-img-overlay ">
                                                    <h4 className="card-title">{product.product_name}</h4>
                                                    <a href="#" className="text-dark">Shop now</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    {/* <!-- recommend list product end --> */}


                    <div className="main-products-recommend container ">
                        <div className="recommend__title pt-3 text-center">
                            <h1><strong>Our products</strong></h1>
                            <p>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do <br /> eiusmo tempor incididunt ut labore et dolore magna</p>
                        </div>

                        <div className="recommend__list py-5">
                            <ul className="d-flex justify-content-center list">
                                <li className="px-4"><a className="active" href="">New Arrivals</a></li>
                                <li className="px-4"><a href="">Best Sellers</a></li>
                                <li className="px-4"><a href="">Sale Items</a></li>
                                <li className="px-4"><a href="">On Sales</a></li>
                            </ul>
                        </div>

                        {/* <!-- products start --> */}
                        <div className="row products py-4">

                            {
                                productsList.map((product) => {
                                    return (
                                        <Product
                                            addProduct={addProduct}
                                            product={product}
                                            viewProduct={viewProduct}
                                            DetailsPage={DetailsPage}
                                        />
                                    )
                                })
                            }

                        </div>
                        {/* <!-- products end --> */}
                    </div>
                </div>
                {/* product sale start */}
                <div className="product-sale row p-2">
                    <div className="product-sale_item1 col-12 col-sm-12 col-lg-6 py-2">
                        <img src={product_sale_1}></img>
                        <div className="item_title1">
                            <p>Sale Furniture<br />For Summer</p>
                            <a>Great Discount Here</a>
                        </div>

                    </div>
                    <div className="product-sale_item2 col-12 col-sm-12 col-lg-6 py-2">
                        <img src={product_sale_2}></img>
                        <div className="item_title2">
                            <p>Sale Furniture<br />For Summer</p>
                            <a>Great Discount Here</a>
                        </div>
                    </div>
                </div>
                {/* product sale end */}
                <div className="main-products-recommend container ">
                    <div className="recommend__title py-4 text-center">
                        <h1><strong>Sale products</strong></h1>
                        <p>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do <br /> eiusmo tempor incididunt ut labore et dolore magna</p>
                    </div>

                    {/* <!-- products new start --> */}
                    <div className="row products py-4">

                        {
                            recommend_new_list.map((product, index) => {
                                return (
                                    <Product
                                        addProduct={addProduct}
                                        product={product}
                                        viewProduct={viewProduct}
                                        DetailsPage={DetailsPage}
                                    />
                                )
                            })
                                .filter((product, index) => index < 4)
                        }

                    </div>
                    {/* <!-- products new end --> */}


                </div>

            </main>
            {/* INDEX end */}
        </div>

    );
}


export default HomePage;
