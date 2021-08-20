
// css


// componen


import React from 'react';

import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';


function Contact(props) {
    return(
        <div className="contact-area pb-100px pt-100px">
            <div className="container">
                <div className="contact-map mb-50px">
                    <div id="mapid" data-aos="fade-up" data-aos-delay="200">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                <a href="https://sites.google.com/view/maps-api-v2/mapv2"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-row-2 row">
                    <div className="col-lg-4 col-md-5 mb-lm-60px col-sm-12 col-xs-12 w-sm-100">
                        <div className="contact-info-wrap">
                            <h2 className="title" data-aos="fade-up" data-aos-delay="200">Contact Info</h2>
                            <div className="single-contact-info" data-aos="fade-up" data-aos-delay="200">
                                <div className="contact-info-inner">
                                    <span className="sub-title">Phone:</span>
                                </div>
                                <div className="contact-info-dec">
                                    <p><a href="tel:+012345678102">+012 345 678 102</a></p>
                                    <p><a href="tel:+012345678102">+012 345 678 102</a></p>
                                </div>
                            </div>
                            <div className="single-contact-info" data-aos="fade-up" data-aos-delay="200">
                                <div className="contact-info-inner">
                                    <span className="sub-title">Email:</span>
                                </div>
                                <div className="contact-info-dec">
                                    <p><a href="mailto://urname@email.com">urname@email.com</a></p>
                                    <p><a href="mailto://urwebsitenaem.com">urwebsitenaem.com</a></p>
                                </div>
                            </div>
                            <div className="single-contact-info" data-aos="fade-up" data-aos-delay="200">
                                <div className="contact-info-inner">
                                    <span className="sub-title">Address:</span>
                                </div>
                                <div className="contact-info-dec">
                                    <p>Address goes here,</p>
                                    <p>street, Crossroad 123.</p>
                                </div>
                            </div>
                            <div className="contact-social">
                                <h3 className="title" data-aos="fade-up" data-aos-delay="200">Follow Us</h3>
                                <div className="social-info" data-aos="fade-up" data-aos-delay="200">
                                    <ul className="d-flex">
                                        <li>
                                            <a href="#"><i className="icon-social-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-social-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-social-youtube"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-social-google"></i></a>
                                        </li>
                                        <li>
                                            <a className="m-0" href="#"><i className="icon-social-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
                        <div className="contact-form">
                            <div className="contact-title mb-30">
                                <h2 className="title" data-aos="fade-up" data-aos-delay="200">Get In Touch</h2>
                            </div>
                            <form className="contact-form-style" id="contact-form" action="https://htmlmail.hasthemes.com/nazmul/mail.php" method="post">
                                <div className="row">
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                        <input name="name" placeholder="Name*" type="text" />
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                        <input name="email" placeholder="Email*" type="email" />
                                    </div>
                                    <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
                                        <input name="subject" placeholder="Subject*" type="text" />
                                    </div>
                                    <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
                                        <textarea name="message" placeholder="Your Message*"></textarea>
                                        <button className="btn btn-primary btn-hover-dark mt-4 rounded-0" data-aos="fade-up" data-aos-delay="200" type="submit">SEND</button>
                                    </div>
                                </div>
                            </form>
                            <p className="form-messege"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Contact;