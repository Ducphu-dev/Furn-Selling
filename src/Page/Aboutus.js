
// css
import '../css/header/style.css';
import '../css/main/style.css';
import '../css/footer/style.css';


// component
import product_news_1 from '../img/aboutus1.png'
import product_news_2 from '../img/aboutus2.png'
import product_news_3 from '../img/aboutus3.png'
import product_news_4 from '../img/aboutus4.png'
import product_news_5 from '../img/aboutus5.png'
import product_news_6 from '../img/aboutuslogo.png'
import { Swiper, SwiperSlide , Autoplay } from 'swiper/react';
import 'swiper/swiper.scss';

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';


function Aboutus(props) {

    return(
        <div>
            <section class="about-area pb-100px pt-100px">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="about-left-image mb-md-30px mb-lm-30px" data-aos="fade-up">
                                <img src={product_news_1} alt="" class="img-responsive w-100"></img>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-content">
                                <div class="about-title" data-aos="fade-up">
                                    <h2>Welcome To Furns</h2>
                                </div>
                                <p class="mb-30px" data-aos="fade-up" data-aos-delay="200">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aperiam fugit consequuntur
                                    voluptatibus ex sint iure in, distinctio sed dolorem aspernatur veritatis repellendus
                                    dolorum voluptate, animi libero officiis eveniet accusamus recusandae. Temporibus
                                    amet ducimus sapiente voluptatibus autem dolorem magnam quas, porro suscipit. Quibusdam
                                    culpa asperiores exercitationem architecto quo distinctio sed dolorem!
                                </p>
                                <p data-aos="fade-up" data-aos-delay="300">
                                    Sint voluptatum beatae necessitatibus quos mollitia vero, optio asperiores aut tempora iusto
                                    eum rerum, possimus, minus quidem ut saepe laboriosam. Praesentium aperiam accusantium minus
                                    repellendus laudantium provident quod recusandae exercitationem natus
                                    dignissimos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="progressbar-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="content" data-aos="fade-up" data-aos-delay="0">
                                <h4 class="title">Functionality meets perfection</h4>
                                <p class="title-desc">In today’s day and age, one cannot underestimate the importance of design, the art of
                                    creating striking visuals to move and captivate your audience. And as the world becomes more
                                    and more digitized with each passing second, the importance of graphic design has been
                                    rocketed to the top.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="custom-progress m-t-40">
                                <div class="skill-progressbar" data-aos="fade-up" data-aos-delay="0">
                                    <h6 class="font--semi-bold m-b-15">UI/UX</h6>
                                    <div class="line-progressbar" data-percentage="75" data-progress-color="#ff7004"><div class="progressbar" style={{width: "100%" , backgroundColor: "rgb(235, 235, 235)" , borderRadius: "0px"}}><div class="proggress" style={{backgroundColor: "rgb(255, 112, 4)", height: "7px" , borderradius: "0px" , width: "75%"}}></div><div class="percentCount"></div></div></div>
                                </div>
                                <div class="skill-progressbar" data-aos="fade-up" data-aos-delay="200">
                                    <h6 class="font--semi-bold m-b-15">Ideas</h6>
                                    <div class="line-progressbar" data-percentage="86" data-progress-color="#ff7004"><div class="progressbar" style={{width: "100%" , backgroundColor: "rgb(235, 235, 235)" , borderRadius: "0px"}}><div class="proggress" style={{backgroundColor: "rgb(255, 112, 4)", height: "7px" , borderradius: "0px" , width: "86%"}}></div><div class="percentCount"></div></div></div>
                                </div>
                                <div class="skill-progressbar" data-aos="fade-up" data-aos-delay="400">
                                    <h6 class="font--semi-bold m-b-15">Design</h6>
                                    <div class="line-progressbar" data-percentage="97" data-progress-color="#ff7004"><div class="progressbar" style={{width: "100%" , backgroundColor: "rgb(235, 235, 235)" , borderRadius: "0px"}}><div class="proggress" style={{backgroundColor: "rgb(255, 112, 4)", height: "7px" , borderradius: "0px" , width: "97%"}}></div><div class="percentCount"></div></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-preduct-wrapper pt-100px pb-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 pr-0">
                            <div className="banner-product-image">
                                <a className="venobox " href="assets/images/banner/8.jpg" data-gall="myGallery">
                                    <img src={product_news_2} className="img-fluid w-100" alt="Banner images"></img>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="banner-product-image mt-lm-15px">
                                <a className="venobox " href="assets/images/banner/9.jpg" data-gall="myGallery">
                                    <img src={product_news_3}  className="img-fluid w-100" alt="Banner images"></img>
                                </a>
                            </div>
                            <div className="banner-product-image mt-3">
                                <a className="venobox " href="assets/images/banner/10.jpg" data-gall="myGallery">
                                    <img src={product_news_4}  className="img-fluid w-100" alt="Banner images"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team-section">
                <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay="0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title text-center">
                                    <h2 className="title">Meet Our Team</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-25px">
                                <div className="team-single" data-aos="fade-up" data-aos-delay="0">
                                    <div className="team-img">
                                        <img className="img-fluid" src={product_news_5}  alt=""></img>
                                    </div>
                                    <div className="team-content">
                                        <h6 className="team-name font--bold mt-5">Ms. Veronica</h6>
                                        <span className="team-title">Web Designer</span>
                                        <ul className="team-social pos-absolute">
                                            <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                            <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                            <li><a href="#"><i className="ion-social-instagram"></i></a></li>
                                            <li><a href="#"><i className="ion-social-linkedin"></i></a></li>
                                            <li><a href="#"><i className="ion-social-rss"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-25px">
                                <div className="team-single" data-aos="fade-up" data-aos-delay="200">
                                    <div className="team-img">
                                        <img className="img-fluid" src={product_news_5}  alt=""></img>
                                    </div>
                                    <div className="team-content">
                                        <h6 className="team-name font--bold mt-5">Missa Santos</h6>
                                        <span className="team-title">CEO Founder</span>
                                        <ul className="team-social pos-absolute">
                                            <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                            <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                            <li><a href="#"><i className="ion-social-instagram"></i></a></li>
                                            <li><a href="#"><i className="ion-social-linkedin"></i></a></li>
                                            <li><a href="#"><i className="ion-social-rss"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-25px">
                                <div className="team-single" data-aos="fade-up" data-aos-delay="400">
                                    <div className="team-img">
                                        <img className="img-fluid" src={product_news_5}  alt=""></img>
                                    </div>
                                    <div className="team-content">
                                        <h6 className="team-name font--bold mt-5">Missa Santos</h6>
                                        <span className="team-title">Chief Officer</span>
                                        <ul className="team-social pos-absolute">
                                            <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                            <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                            <li><a href="#"><i className="ion-social-instagram"></i></a></li>
                                            <li><a href="#"><i className="ion-social-linkedin"></i></a></li>
                                            <li><a href="#"><i className="ion-social-rss"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-25px">
                                <div className="team-single" data-aos="fade-up" data-aos-delay="600">
                                    <div className="team-img">
                                        <img className="img-fluid" src={product_news_5}  alt=""></img>
                                    </div>
                                    <div className="team-content">
                                        <h6 className="team-name font--bold mt-5">Lisa Antonia</h6>
                                        <span className="team-title">CTO</span>
                                        <ul className="team-social pos-absolute">
                                            <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                            <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                            <li><a href="#"><i className="ion-social-instagram"></i></a></li>
                                            <li><a href="#"><i className="ion-social-linkedin"></i></a></li>
                                            <li><a href="#"><i className="ion-social-rss"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="company-logo-section pt-100px pb-100px">
                <div className="company-logo-wrapper" data-aos="fade-up" data-aos-delay="0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="company-logo-slider slider-nav-style-1">
                                    <div className="swiper-container company-logo-slider">
                                        <div className="swiper-wrapper">
                                            <Swiper
                                                slidesPerView={5}
                                                navigation
                                                className="Swiper-sale"
                                                spaceBetween= {22}
                                                >
                                
                                                <SwiperSlide>
                                                    <div className="company-logo-single-item swiper-slide">
                                                    <div className="image">
                                                        <img className="img-fluid" src={product_news_6}  alt=""></img></div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="company-logo-single-item swiper-slide">
                                                    <div className="image">
                                                        <img className="img-fluid" src={product_news_6}  alt=""></img></div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="company-logo-single-item swiper-slide">
                                                    <div className="image">
                                                        <img className="img-fluid" src={product_news_6}  alt=""></img></div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="company-logo-single-item swiper-slide">
                                                    <div className="image">
                                                        <img className="img-fluid" src={product_news_6}  alt=""></img></div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="company-logo-single-item swiper-slide">
                                                    <div className="image">
                                                        <img className="img-fluid" src={product_news_6}  alt=""></img></div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="company-logo-single-item swiper-slide">
                                                    <div className="image">
                                                        <img className="img-fluid" src={product_news_6}  alt=""></img></div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="company-logo-single-item swiper-slide">
                                                    <div className="image">
                                                        <img className="img-fluid" src={product_news_6}  alt=""></img></div>
                                                    </div>
                                                </SwiperSlide>
                                    
                                            </Swiper>
                                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Aboutus;