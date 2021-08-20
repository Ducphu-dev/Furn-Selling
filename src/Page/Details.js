
// css
import '../css/header/style.css';
import '../css/main/style.css';
import '../css/footer/style.css';

// component
import Product from '../component/Product';
import Product_Detail from '../component/Product-Detail';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productAction from '../actions/productAction'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import React from 'react';

import '@fortawesome/fontawesome-free/css/all.css';

function DetailPage(props) {
    const listRecommend = 4
    //   state
    const { productsList, sercurity_poli, delivery_poli, return_poli, addProduct, viewProduct, amount_product_details,findedIndexViewDetail, isLogin } = props

    const { minus_details, plus_details } = props
    const recommend = productsList.filter((product, index) => index < listRecommend)

    return (

        <div>
            {/* DETAIL start */}
            <main className="main">
                <div className="main-page">
                    <div className="container py-5">
                        <div className="d-flex align-items-center py-4">
                            <div className="main-stage__page">
                                <h1 className="" href="#">
                                    SHOP
                                </h1>
                            </div>
                            <div className="main-stage__listpage ml-auto ">
                                <ul className="d-flex align-items-center list-breakcrumb">
                                    <li>
                                        <a href="index.html" className="active">Home</a>
                                    </li>
                                    <li>
                                        <a href="cart.html">Cart</a>
                                    </li>
                                    <li>
                                        <a href="#">Products</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-cart container">
                    <div className=" products-detail py-5">
                        {/* <!-- product detail start --> */}
                        {
                            findedIndexViewDetail.map((product) => {
                                return (
                                    <Product_Detail
                                        product={product}
                                        sercurity_poli={sercurity_poli}
                                        delivery_poli={delivery_poli}
                                        return_poli={return_poli}
                                        addProduct={addProduct}
                                        plus_details={plus_details}
                                        minus_details={minus_details}
                                        amount_product_details={amount_product_details}
                                        isLogin={isLogin}
                                    />
                                )
                            })
                        }
                        {/* <!-- product detail end -->

          

                            <!-- same item start--> */}
                        <div className="same-item my-5">
                            <h1>You Might Also Like</h1>
                            <div className="row products py-4">
                            <Swiper
                                    slidesPerView={2}
                                    navigation
                                    className="Swiper-sale"
                                    breakpoints={{
                                        // when window width is >= 640px
                                        769: {
                                          slidesPerView: 3,
                                        },
                                        // when window width is >= 768px
                                        992: {
                                          slidesPerView: 4,
                                        }}
                                    }
                                >
                                {
                                    
                                    productsList.map((product, index) => {
                                        return (
                                            <SwiperSlide>
                                                <Product
                                                addProduct={addProduct}
                                                product={product}
                                                viewProduct={viewProduct}
                                            />
                                            </SwiperSlide>
                                            
                                        )
                                    })
                                        
                                }
                        
                            </Swiper>
                              
                            </div>
                        </div>

                        <div className="same-item my-5">
                            <h1>12 Other Products In The Same Category:</h1>
                            <div className="row products py-4 " >
                                <Swiper
                                        slidesPerView={2}
                                        navigation
                                        className="Swiper-sale"
                                        breakpoints={{
                                            // when window width is >= 640px
                                            769: {
                                              slidesPerView: 3,
                                            },
                                            // when window width is >= 768px
                                            992: {
                                              slidesPerView: 4,
                                            }}
                                        }
                                    >
                                    {
                                        
                                        productsList.map((product, index) => {
                                            return (
                                                <SwiperSlide>
                                                    <Product
                                                    addProduct={addProduct}
                                                    product={product}
                                                    viewProduct={viewProduct}
                                                />
                                                </SwiperSlide>
                                                
                                            )
                                        })
                                            
                                    }
                            
                                </Swiper>
                                

                            </div>
                        </div>
                        {/* <!-- same item end--> */}
                    </div>
                </div>
            </main>
            {/* DETAIL end */}
        </div>

    );
}


export default (DetailPage);
