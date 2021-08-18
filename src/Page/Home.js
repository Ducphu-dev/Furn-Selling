
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

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

function HomePage(props) {
    //   state
    const { productsList, products_recommendList, DetailsPage, product_sale_1, product_sale_2, list__recommend } = props


    // function
    const { addProduct, viewProduct, formFirstName } = props

    const recommend_new_list = (productsList.filter((product, index) => product = product.product_sale !== null))
    const [toggleTabs, setToggleTabs] = useState(0)

    const changeTabRecommend = (index) =>{
        setToggleTabs(index)
        console.log(index)
    }
    

    return (

        <div key="1">
            {/* INDEX start */}
            <main className="main">
                <div className="main-slider">

                    <Swiper
                        slidesPerView={1}
                        pagination={{clickable:true}}
                        navigation
                        className="Swiper-banner"
                        
                    >
                        <SwiperSlide>
                            <div className="image-banner">
                                <img src="https://htmldemo.hasthemes.com/furns/furns/assets/images/slider-image/slider-2-1.jpg" alt="Chicago"></img>
                                <div className="introduce-center">
                                    <h4 className="font-weight-bold">New Product</h4>
                                    <h1 className="font-weight-bold products-name">Flexible Sofa Set</h1>
                                    <p className="title">Torem ipsum dolor sit amet, consectetur adipisicing elitsed do <br /> eiusmo tempor incididunt ut labore et dolore magna</p>
                                    <Link to="/shop">Shop now</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-banner">
                                <img src="https://htmldemo.hasthemes.com/furns/furns/assets/images/slider-image/slider-2-2.jpg" alt="Chicago"></img>
                                <div className="introduce-center">
                                    <h4 className="font-weight-bold">New Product</h4>
                                    <h1 className="font-weight-bold products-name">Flexible Sofa Set</h1>
                                    <p className="title">Torem ipsum dolor sit amet, consectetur adipisicing elitsed do <br /> eiusmo tempor incididunt ut labore et dolore magna</p>
                                    <Link to="/shop">Shop now</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    
                </div>

                <div className="main-list-products container">
                    {/* <!--  recommend list product start --> */}

                    <div className="main-list py-4 ">
                        <div className="row list-items-recommend py-4 justify-content-center">

                            {
                                products_recommendList.map((product, index) => {
                                    return (
                                        <div className="col-12  col-sm-6 col-lg-4 my-3" key={product._id} >
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
                                {
                                    list__recommend.map((element, index) =>{
                                        return(
                                            <li className="px-4" key={index}>
                                                <a onClick={()=>changeTabRecommend(index, element)} className={toggleTabs === index ? "active" : ""} >{element.title}</a>
                                            </li>
                                        )
                                    })
                                }
                                {/* <li className="px-4"><a className="active" href="">New Arrivals</a></li>
                                <li className="px-4"><a href="">Best Sellers</a></li>
                                <li className="px-4"><a href="">Sale Items</a></li>
                                <li className="px-4"><a href="">On Sales</a></li> */}
                            </ul>
                        </div>

                        {/* <!-- products start --> */}
                        <div className="py-4 list-recommend">
                            <div   className={toggleTabs === 0 ? "row products list-recommend__items active" : "row products list-recommend__items"}>

                                {
                                    productsList.map((product) => {
                                        return (
                                            <Product 
                                                key={product._id}
                                                addProduct={addProduct}
                                                product={product}
                                                viewProduct={viewProduct}
                                                DetailsPage={DetailsPage}
                                            />
                                        )
                                    })
                                    .filter((product, index) => index < 8)
                                }

                            </div>
                            <div className={toggleTabs === 1 ? "row products list-recommend__items active" : "row products list-recommend__items"}>

                                {
                                    productsList.map((product) => {
                                        return (
                                            <Product key={product._id}
                                                addProduct={addProduct}
                                                product={product}
                                                viewProduct={viewProduct}
                                                DetailsPage={DetailsPage}
                                            />
                                        )
                                    })
                                    .filter((product, index) => index < 8)
                                }

                            </div>
                            <div className={toggleTabs === 2 ? "row products list-recommend__items active" : "row products list-recommend__items"}>

                                {
                                    productsList.map((product) => {
                                        return (
                                            <Product 
                                                key={product._id}
                                                addProduct={addProduct}
                                                product={product}
                                                viewProduct={viewProduct}
                                                DetailsPage={DetailsPage}
                                            />
                                        )
                                    })
                                    .filter((product, index) => index < 8)
                                }

                            </div>
                            <div className={toggleTabs === 3 ? "row products list-recommend__items active" : "row products list-recommend__items"}>

                                {
                                    productsList.map((product) => {
                                        return (
                                            <Product 
                                                key={product._id}
                                                addProduct={addProduct}
                                                product={product}
                                                viewProduct={viewProduct}
                                                DetailsPage={DetailsPage}
                                            />
                                        )
                                    })
                                    .filter((product, index) => index < 8)
                                }

                            </div>
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
                <div className="container">
                    <div className="main-products-recommend products  ">
                        <div className="recommend__title py-4 text-center">
                            <h1><strong>Sale products</strong></h1>
                            <p>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do <br /> eiusmo tempor incididunt ut labore et dolore magna</p>
                        </div>

                        <Swiper
                            slidesPerView={2}
                            navigation
                            className="Swiper-sale"
                            breakpoints={{
                                // when window width is >= 640px
                                768: {
                                  slidesPerView: 3,
                                },
                                // when window width is >= 768px
                                992: {
                                  slidesPerView: 4,
                                }}
                            }
                        >
                                {
                                    
                                    recommend_new_list.map((product, index) => {
                                        return (
                                            <SwiperSlide>
                                                <Product 
                                                key={product._id}
                                                addProduct={addProduct}
                                                product={product}
                                                viewProduct={viewProduct}
                                                DetailsPage={DetailsPage}
                                            />
                                            </SwiperSlide>
                                            
                                        )
                                    })
                                        
                                }
                            
                        </Swiper>
                    </div>
                </div>
                

            </main>
            {/* INDEX end */}
        </div>

    );
}


export default HomePage;
