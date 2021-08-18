import logo from './logo.svg';
// css
import './App.css';
import './css/header/style.css';
import './css/main/style.css';
import './css/footer/style.css';
import './css/style.css';

// component
import Product_Side from './component/Product-Side';

import Shop_page from './Page/Shop';
import Home_page from './Page/Home';
import Cart_page from './Page/Cart';
import Contact from './Page/Contact';
import Aboutus from './Page/Aboutus';
import Details_page from './Page/Details';
import CheckOut_Page from './Page/CheckOut';
import Success_Page from './Page/SuccessCheckOut';
import Login_Page from './Page/Login';
import Success from './component/Success';
// data
import search from './img/search.png';
import account from './img/account.png';
import card from './img/shop-card.png';
import sercurity_poli from './img/sercurity.png';
import delivery_poli from './img/delivery.png';
import return_poli from './img/return.png';
import product1 from './img/product1.jpg';
import product2 from './img/product2.jpg';
import product3 from './img/product3.jpg';
import product_sale_1 from './img/product_sale-1.jpg';
import product_sale_2 from './img/product_sale-2.jpg';
import product_news_1 from './img/product_news1.jpg';
import product_news_2 from './img/product_news2.jpg';
import product_news_3 from './img/product_news3.jpg';

// frameword
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productAction from '../src/actions/productAction'
import ScrollToTop from './component/ScrollToTop';

import '@fortawesome/fontawesome-free/css/all.css';


import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import validator from 'validator';

// const initialState = 


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search_isShow: false,
            sideShop_isShow: false,
            sideNav_isShow: false,
            amount_product_details: 1,
            amount_product_add: [],
            productsList: [],
            products_recommendList: [
                {
                    prodcuct_img: product1,
                    product_name: 'New Office Chair Collection',
                },
                {
                    prodcuct_img: product2,
                    product_name: 'New Office Chair Collection',
                },
                {
                    prodcuct_img: product3,
                    product_name: 'New Office Chair Collection',
                },
            ],
            findedIndexViewDetail: [],
            query: {
                product_name: "",
                product_sort_price: "",
                product_sort_all: ""
            },
            accountOrder: {
                account_id: 0,
                account_firstName: "",
                account_lastName: "",
                account_companyName: "",
                account_country: "",
                account_address: "",
                account_apartment: "",
                account_city: "",
                account_state: "",
                account_phone: 0,
                account_email: "",
                account_product: [],
                account_product_total: 0
            },
            loading: false,
            currentPage: 1,
            postsPerPage:12,
            list__recommend: [
                {
                    title: "New Arrivals",
                    hints: "new"
                },
                {
                    title: "Best Sellers",
                    hints: "hot"
                },
                {
                    title: "Sale Items",
                    hints: "sales"
                },
                {
                    title: "On Sales",
                    hints: "all"
                },
            ],
            offset: 0,
            loginAccount:{
                usernameLogin: "",
                passwordLogin: ""
            },
            registerAccount:{
                usernameReg: "",
                passwordReg: "",
                emailReg: "",
            },
            errorMsg:{
                usernameRegError:"",
                passwordRegError:"",
                emailRegError:"",
            },
            errorLoginMsg:{
                usernameLoginError:"",
                passwordLoginError:"",
                emailLoginError:"",
            },
            isSuccess: "",
            isLogin: false,
            addToCard: {
                userCard: []
            },
            // accountLogined:{
            //     username: "",
            //     passwordLogin: ""
            // },
        }
    }

   

 

    componentDidMount(){
        const loggedInUser = JSON.parse(sessionStorage.getItem("card"));
        if (loggedInUser) {
            // const foundUser = JSON.parse(loggedInUser);
            console.log(loggedInUser)
            this.setState({
                isLogin: true,
                amount_product_add: loggedInUser
            })
        }
        

        const fetchPosts = async () =>{
            this.setState({
                loading: true
            })
            await axios
            .get("http://localhost:3001/posts")
            .then((res)=>{
                this.setState({
                    productsList: res.data
                })
            })
            this.setState({
                loading: false
            })
        }
        fetchPosts();
        // console.log(this.state.isSuccess)
    }

    componentDidUpdate(){
        window.onscroll = () => {
            this.setState({
                offset: window.pageYOffset
            })
        }
        sessionStorage.setItem('card',JSON.stringify(this.state.amount_product_add));
    }
   
   
    orderBtn = () => {
        const { accountOrder } = this.state;
        let total = this.state.amount_product_add.reduce((total, product) =>
            Math.ceil(total = total + ((product.product_price - Math.ceil((product.product_price * (product.product_sale / 100)))) * product.product_amount)), 0
        )
        this.setState({
            accountOrder: {
                ...accountOrder,
                account_product: this.state.amount_product_add,
                account_product_total: total
            }
        }, () =>
            axios
                .post("http://localhost:3001/userinfor", accountOrder)
                .then(res => {
                    // console.log(res.data)
                })
                .catch(error => { })
        )
    }

    
 


    search = (e) => {
        this.setState({
            query: {
                ...this.state.query,
                product_name: e.target.value,
            }
        })
    }

    searchFilterPrice = (e) => {
        this.setState({
            query: {
                ...this.state.query,
                product_sort_price: e.target.value,
            }
        })
    }

    searchFilterName = (e) => {
        this.setState({
            query: {
                ...this.state.query,
                product_sort_all: e.target.value,
            }
        })
    }

    addProduct = async id => {
        let findedIndex = this.state.amount_product_add.find(product => product._id === id);
        if (findedIndex) {
            let product = this.state.amount_product_add.map(product => {
                if (product._id === id) {
                    return {
                        ...product,
                        product_amount: product.product_amount + this.state.amount_product_details
                    }
                }
                return product;
            })
            const add = await this.setState({
                productsList: this.state.productsList,
                amount_product_details: 1,
                amount_product_add: product,
                sideShop_isShow: true,
                
            },()=>{
                this.saveToLocalStorage()
            })
        } else {
            let findAdd = this.state.productsList.find(product => product._id === id);
            const newList = [...this.state.amount_product_add, findAdd]
            const add = await this.setState({
                amount_product_add: newList,
                amount_product_details: 1,
                sideShop_isShow: true,
                
            },()=>{
                this.saveToLocalStorage()
            })
            
        }

    }

    saveToLocalStorage = async () => {
        const id = sessionStorage.getItem('id');
        console.log(id)
        
        const add = await this.setState({
            addToCard:{
                ...this.state.addToCard,
                userCard: this.state.amount_product_add
            }
        })
        console.log(this.state.addToCard)
        axios
            .patch(`http://localhost:3001/users/${id}`, this.state.addToCard)
            .then(res => {
                // console.log(res)
            })
            .catch(error => { 
            })

    };



    deleteProduct = id => {
        let newListProducts = [...this.state.amount_product_add.filter(product => product._id === id)];
        let findedIndex = newListProducts.find(product => product._id === id);
        for (var i = 0; i < this.state.amount_product_add.length; i++) {
            if (this.state.amount_product_add[i] === findedIndex) {
                this.state.amount_product_add.splice(i, 1);
                i--;
            }
        }
        this.setState({
            productsList: this.state.productsList,
            amount_product_add: this.state.amount_product_add,
        }, () => {
            this.saveToLocalStorage()
            // console.log(this.state.productsList)
        })
        findedIndex.product_amount = 1
        // console.log(this.state.productsList)
    }

    miunusProduct = id => {
        let newListProducts = [...this.state.amount_product_add];
        let findedIndex = newListProducts.find(product => product._id === id);
        if (findedIndex.product_amount > 0) {
            findedIndex.product_amount = findedIndex.product_amount - this.state.amount_product_details
            this.setState({
                amount_product_add: newListProducts,
            }, () => {
                this.saveToLocalStorage()
            })
        } if (findedIndex.product_amount === 0) {
            this.deleteProduct(id)
            this.saveToLocalStorage()
        }
    }


    viewProduct = id => {
        let newListProducts = [...this.state.productsList];
        // console.log(id)
        this.setState({
            findedIndexViewDetail: newListProducts.filter(product => product._id === id),
            amount_product_details: 1
        })
    }

    minus_details = () => {
        if (this.state.amount_product_details !== 1) {
            this.setState({
                amount_product_details: this.state.amount_product_details - 1
            })
        }

    }

    plus_details = () => {
        this.setState({
            amount_product_details: this.state.amount_product_details + 1
        })
    }

    // Nav side open
    openShop = () => {
        this.setState({
            sideShop_isShow: !this.state.sideShop_isShow
        })
    }
    openNav = () => {
        this.setState({
            sideNav_isShow: !this.state.sideNav_isShow
        })
    }
    openSearch = () => {
        this.setState({
            search_isShow: !this.state.search_isShow
        })
    }

    // form checkout bill

    formFirstName = e => {
        this.setState({
            accountOrder: {
                ...this.state.accountOrder,
                account_firstName: e.target.value,
            }
        })
    };

    formLastName = e => {
        this.setState({
            accountOrder: {
                ...this.state.accountOrder,
                account_lastName: e.target.value,
            }
        })
    };

    formCompanyName = e => {
        this.setState({
            accountOrder: {
                ...this.state.accountOrder,
                account_companyName: e.target.value,
            }
        }, () => {
            // console.log(this.state.accountOrder.account_companyName)
        })
    };

    formCountryName = e => {
        this.setState({
            accountOrder: {
                ...this.state.accountOrder,
                account_country: e.target.value,
            }
        })
    };

    formAddress = e => {
        if(e.target.value === null){
            console.log("not thing")
        }   
        this.setState({
            accountOrder: {
                ...this.state.accountOrder,
                account_address: e.target.value,
            }
        })
    };

    formApartment = e => {
        this.setState({
            accountOrder: {
                ...this.state.accountOrder,
                account_apartment: e.target.value,
            }
        })
    };

    formCity = e => {
        this.setState({
            accountOrder: {
                ...this.state.accountOrder,
                account_city: e.target.value,
            }
        })
    };

    formState = e => {
        this.setState({
            accountOrder: {
                ...this.state.accountOrder,
                account_state: e.target.value,
            }
        })
    };

    formPhone = e => {
        this.setState({
            accountOrder: {
                ...this.state.accountOrder,
                account_phone: e.target.value,
            }
        })
    };

    formEmail = e => {
        this.setState({
            accountOrder: {
                ...this.state.accountOrder,
                account_email: e.target.value,
            }
        })
    }

    
    paginate = (number) => {
        this.setState({
            currentPage: number
        })
    }

    paginatePrev = (number) =>{
        if(number <= 1){
            return false;
        }
        else{
            this.setState({
                currentPage: number - 1
            })
        }
       
    }
    paginateNext = (total, number) =>{
        if(number >= Math.ceil(total / this.state.postsPerPage)){
            return false;
        }
        else{
            this.setState({
                currentPage: number + 1
            })
        }
    }

    // Register
    UserNameReg = (e) =>{
        
        this.setState({
            registerAccount:{
                ...this.state.registerAccount,
                usernameReg: e.target.value
            },
        })
        
    }

    PasswordReg = (e) =>{
        this.setState({
            registerAccount:{
                ...this.state.registerAccount,
                passwordReg: e.target.value
            }
        })
    }

    EmailReg = (e) =>{
        this.setState({
            registerAccount:{
                ...this.state.registerAccount,
                emailReg: e.target.value
            }
        })
    }

    validateName = (nameError) => {
        if(!this.state.registerAccount.usernameReg){
            return nameError = "User name can not be blank!"
            
        }
    }

    validatePassword = (passwordError) => {
        if(!this.state.registerAccount.passwordReg){
            return passwordError = "Password can not be blank!"
            
        }
    }

    validateEmail = (emailError) => {
        
        if(!this.state.registerAccount.emailReg){
            return emailError = "Email can not be blank!"
        }
        else if(!this.isEmail(this.state.registerAccount.emailReg)){
            return emailError = "Email is wrong!"
        }
    }

    validateNameLogin = (nameError) => {
        if(!this.state.loginAccount.usernameLogin){
            return nameError = "User name can not be blank!"
            
        }
    }

    validatePasswordLogin = (passwordError) => {
        if(!this.state.loginAccount.passwordLogin){
            return passwordError = "Password can not be blank!"
            
        }
    }

 

    validateReg = () =>{
        let usernameRegError = "";
        let passwordRegError = "";
        let emailRegError = "";
        
        const namevalidate = this.validateName(usernameRegError)
        const passwordvalidate = this.validatePassword(passwordRegError)
        const emailvalidate = this.validateEmail(emailRegError)

       
        
        if(namevalidate  || passwordvalidate || emailvalidate ){
            this.setState({
                errorMsg:{
                    ...this.state.errorMsg,
                    usernameRegError: namevalidate ,
                    passwordRegError: passwordvalidate,
                    emailRegError: emailvalidate 
                },
            })
            return false
        }
        
        return true
        
        
    }

    validateLogin = () =>{
        let usernameLoginError = "";
        let passwordLoginError = "";
        
        const namevalidate = this.validateNameLogin(usernameLoginError)
        const passwordvalidate = this.validatePasswordLogin(passwordLoginError)
        
        if(namevalidate  || passwordvalidate ){
            this.setState({
                errorLoginMsg:{
                    ...this.state.errorLoginMsg,
                    usernameLoginError: namevalidate ,
                    passwordLoginError: passwordvalidate
                },
            })
            return false
        }
        return true
        
        
    }
    
    
    setFail= () =>{
        this.setState({
            isSuccess: false
        });
        setTimeout(function () {
            this.setState({ isSuccess: "" }); //After 1 second, set render to true
        }.bind(this), 4500)
    
    }

    setSuccess = () =>{

        this.setState({
            isSuccess: true
        });
        setTimeout(function () {
            this.setState({ isSuccess: "" }); //After 1 second, set render to true
        }.bind(this), 4500)
        
    
    }

    
    registerPosts = async () =>{
        const {registerAccount} = this.state
        // this.setState({
        //     loading: true
        // })
      
        await axios
        
        .post("http://localhost:3001/users", registerAccount)
        .catch((res)=>{
            if(res.response){
                if(res.response.data.name) {
                    this.setState({
                        errorMsg:{
                            ...this.state.errorMsg,
                            usernameRegError: res.response.data.Msg,
                        }
                    },()=>{
                        this.setFail()
                    })
                    return false
                } 
                if(res.response.data.email) {
                    this.setState({
                        errorMsg:{
                            ...this.state.errorMsg,
                            emailRegError: res.response.data.Msg,
                        },
                    },()=>{
                        this.setFail()
                    })
                    return false
                } 
            }
        })
        .then((res)=>{
            if(res.status === 200){
                this.setSuccess()
            }
            
        })
    }

    loginPosts = async () =>{
        console.log()
        const {loginAccount} = this.state
       
        await axios
        .post("http://localhost:3001/users/getuser", loginAccount)
        .catch((res) =>{
            console.log( res.response);
            if(res.response){
                if(res.response.data.name){
                    this.setState({
                        errorLoginMsg:{
                            ...this.state.errorLoginMsg,
                            usernameLoginError: res.response.data.Msg,
                            passwordLoginError: res.response.data.Msg,
                        }
                    },()=>{
                        this.setFail()
                    })
                    return false
                }   
                if(res.response.data.password){
                    this.setState({
                        errorLoginMsg:{
                            ...this.state.errorLoginMsg,
                            usernameLoginError: res.response.data.Msg,
                            passwordLoginError: res.response.data.Msg,
                        }
                    },()=>{
                        this.setFail()
                    })
                    return false
                }   
            }
        })
        .then((res)=>{
            console.log(res.status)
            if(res.status === 200){
                this.setSuccess()
                this.setState({
                    isLogin: true,
                    amount_product_add: res.data.usercard
                })
                // console.log(res.data)
                sessionStorage.setItem('username',res.data.userName );
                sessionStorage.setItem('id',res.data.userId );
                sessionStorage.setItem('card',JSON.stringify(res.data.usercard));
            }
            
        })
    }

    btnReg = (e) =>{

        const {registerAccount} = this.state
        const isTrue = true
        const validate  = this.validateReg()
        console.log(validate)
        
        if(!validate){
            if(validate !== isTrue){
                this.setFail()
                
            }
        }
        if(validate ){
            if(validate === isTrue){
                this.setState({
                    errorMsg:{
                        ...this.state.errorMsg,
                        usernameRegError: "" ,
                        passwordRegError: "" ,
                        emailRegError: ""
                    },
                },()=>{
                    this.registerPosts()
                })
                
            }
            
        } 
        
    }
    // login

    UserNameLogin = (e) =>{
        this.setState({
            loginAccount:{
                ...this.state.loginAccount,
                usernameLogin: e.target.value
            }
        })
    }

    PasswordLogin = (e) =>{
        this.setState({
            loginAccount:{
                ...this.state.loginAccount,
                passwordLogin: e.target.value
            }
        })
    }

    btnLogin = async () =>{
        const validate = this.validateLogin()
        if(!validate){
            if(validate !== true){
                this.setFail()
                
            }
        }
        if(validate ){
            if(validate === true){
                this.setState({
                    errorLoginMsg:{
                        ...this.state.errorLoginMsg,
                        usernameLoginError: "" ,
                        passwordLoginError: "" 
                    },
                },()=>{
                    
                    this.loginPosts()
                })
                
            }
            
        } 
    }

    
    // constraint
    isEmail(emailConstraint) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailConstraint);
    }

    render() {
        
        //   state
        
        const { productsList, products_recommendList, sideShop_isShow, sideNav_isShow, search_isShow, findedIndexViewDetail, amount_product_details, query, amount_product_add, accountOrder,loading,currentPage,postsPerPage,list__recommend, offset,registerAccount,errorMsg, isSuccess,errorLoginMsg, isLogin } = this.state
        const filterData = productsList
            .filter((product) =>
                product.product_name.toLowerCase().includes(query.product_name.toLowerCase())
            )
            .filter(product => {
                switch (query.product_sort_price) {
                    default:
                        return true;
                    case 'all':
                        return product;
                    case 'sale':
                        return product.product_sale !== null;
                    case 'under_30':
                        return product.product_price <= 30;
                    case '30_50':
                        return product.product_price >= 30 && product.product_price <= 50;
                    case 'above_50':
                        return product.product_price >= 50;
                }
            })

            .sort((a, b) => {
                if (query.product_sort_all === "allName" && a.product_name.toLowerCase() < b.product_name.toLowerCase()) {
                    return 0;
                }
                if (query.product_sort_all === "low_high") {
                    return a.product_price - b.product_price;
                }
                if (query.product_sort_all === "high_low") {
                    return a.product_price - b.product_price;
                }
                if (query.product_sort_all === "A_Z" && a.product_name.toLowerCase() < b.product_name.toLowerCase()) {
                    return -1;
                }
                if (query.product_sort_all === "Z_A" && a.product_name.toLowerCase() > b.product_name.toLowerCase()) {
                    return -1;
                }
            })
             // get currents posts
            const indexOfLastPost = currentPage * postsPerPage;
            const indexOfFirstPost = indexOfLastPost - postsPerPage;
            const currentPosts = filterData.slice(indexOfFirstPost, indexOfLastPost)
            
        return (
            <Router  >
                <div >
                    <header className="header">
                        <div className="header-section">
                            <Success
                            isSuccess={isSuccess}/>
                            {/* <!-- wellcome start --> */}
                            <div className="header-wellcome bg-dark">
                                <div className="container d-flex align-items-center py-2">
                                    <div className="wellcome__title">
                                        <span className="font-italic">Default Wellcome Message</span>
                                    </div>
                                    <div className="wellcome__nation ml-auto">
                                        <ul className="d-flex align-items-center">
                                            <li className="dropdown mx-2">
                                                <span className="d-flex align-items-center" data-toggle="dropdown">
                                                    <a className="nation mx-2" href="#">Language: USA</a>
                                                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                                                    {/* <img src="./img/drop-down.png" alt=""></img> */}
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#">Link 1</a>
                                                        <a className="dropdown-item" href="#">Link 2</a>
                                                        <a className="dropdown-item" href="#">Link 3</a>
                                                    </div>
                                                </span>
                                            </li>
                                            <li className="dropdown mx-2">
                                                <span className="d-flex align-items-center" data-toggle="dropdown">
                                                    <a className="nation mx-2" href="#">Currency: USA</a>
                                                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                                                    <div className="dropdown-menu text-dark">
                                                        <a className="dropdown-item" href="#">Link 1</a>
                                                        <a className="dropdown-item" href="#">Link 2</a>
                                                        <a className="dropdown-item" href="#">Link 3</a>
                                                    </div>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- wellcome end -->   */}

                            {/* <!-- logo start --> */}
                            <div className="header-logo">
                                <div className="container-lg py-2">
                                    <nav className="navbar-expand-md d-flex align-items-center py-3">
                                        <div className="logo-img">
                                            <Link className="navbar-brand" to="/">
                                                <img src="https://htmldemo.hasthemes.com/furns/furns/assets/images/logo/logo.png" alt=""></img>
                                            </Link>
                                        </div>
                                        <div className="logo-icon ml-auto d-flex align-items-center">
                                            <div className="d-flex align-items-center">
                                                
                                                <div className="search icon-items mx-1">
                                                    <img src={search} alt="" onClick={this.openSearch}></img>
                                                    <div className={search_isShow ? 'input_search mx-1 d-flex input_search-show' : 'input_search mx-1 d-flex input_search-primary'}>
                                                        <input className="border-right-0" type="text" onChange={this.search} placeholder="Enter your search key" />

                                                        <button onClick={this.submitSearch} type="submit" className="border-left-0 ml-auto"><i className="fa fa-search " aria-hidden="true"></i></button>
                                                    </div>
                                                </div>
                                                <div className="icon-items mx-1">
                                                    <Link to="/login" style={{display: isLogin ? "none":"block" }}>
                                                        <img src={account} alt=""></img>
                                                    </Link>
                                                    <Link to="/login" style={{display: isLogin ? "block":"none" }}>
                                                        <div className="loginSuccess">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image-fill" viewBox="0 0 16 16">
                                                                <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
                                                            </svg>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div onClick={this.openShop} className="icon-items mx-1">
                                                    <img src={card} alt="" ></img>
                                                    <span className="badge rounded-circle">
                                                        {
                                                            amount_product_add.reduce((total, product) =>
                                                                total = total + product.product_amount, 0
                                                            )
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="navbar-collapse">
                                                <div className="navbar-toggler custom-color" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                                    <span className="navbar-toggler-icon" onClick={this.openNav}></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* nav side shop */}
                                        <div id="shop-side" className={sideShop_isShow ? 'sideshop-open sideshop' : 'sideshop'} style={{ top: offset > 140 ? "64px" : 0 }}>
                                            <a href="javascript:void(0);" className="closebtn" onClick={this.openShop}>&times;</a>

                                            {
                                                amount_product_add.map((product) => {
                                                    return (
                                                        <Product_Side key={product._id}
                                                            // key={product.product__id}
                                                            product={product}
                                                            deleteProduct={this.deleteProduct}
                                                            viewProduct={this.viewProduct}
                                                        />
                                                    )
                                                })
                                            }


                                            <div className="shop-side__pay d-flex py-4  justify-content-center">
                                                <div className="proceed card border-0 text-center" >
                                                    <div className="card-body">
                                                        <div className="proceed__total d-flex ">
                                                            <p className="card-text mr-auto">Sub-Total :</p>
                                                            <p className="total card-text">
                                                                {
                                                                    amount_product_add.reduce((total, product) =>
                                                                        Math.ceil(total = total + ((product.product_price - Math.ceil((product.product_price * (product.product_sale / 100)))) * product.product_amount)), 0
                                                                    )
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="proceed__total d-flex ">
                                                            <p className="card-text mr-auto">Eco Tax ({2.00}) :</p>
                                                            <p className="total card-text">$2.00</p>
                                                        </div>
                                                        <div className="proceed__total d-flex ">
                                                            <p className="card-text mr-auto">Total :</p>
                                                            <p className="total card-text">
                                                                {
                                                                    amount_product_add.reduce((total, product) =>
                                                                        Math.ceil(total = total + ((product.product_price - Math.ceil((product.product_price * (product.product_sale / 100)))) * product.product_amount)), 0
                                                                    )
                                                                }
                                                            </p>
                                                        </div>
                                                        <div></div>
                                                        <Link to="/cart" className="btn px-5 py-3" role="button">View Cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* nav side */}
                                        <div id="nav-side" style={{ left: sideNav_isShow ? 0 : '-250px' }} className="sidenav">
                                            <a  className="closebtn" onClick={this.openNav}>&times;</a>
                                            <ul className="navbar-nav">
                                                <li className="nav-item py-1">
                                                    <Link to="/" className="nav-link" href="#">Home</Link>
                                                </li>
                                                <li className="nav-item py-1">
                                                    <a className="nav-link" href="#">About us</a>
                                                </li>
                                                <li className="nav-item py-1">
                                                    <Link to="/shop" className="nav-link"> Shop</Link>
                                                </li>
                                                <li className="nav-item py-1">
                                                    <a className="nav-link" href="">Blogs</a>
                                                </li>
                                                <li className="nav-item py-1">
                                                    <a className="nav-link" href="#">Conntact us</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            {/* <!-- logo end --> */}
                            {/* <!-- nav start --> */}
                            <div className={"header-nav "}>
                                <div className="navbar-expand-md">
                                    <div className="navbar-collapse d-flex justify-content-center">
                                        <ul className="navbar-nav py-2">
                                            <li className="nav-item py-1">
                                                <Link to="/" className="nav-link">Home</Link>
                                            </li>
                                            <li className="nav-item py-1">
                                            <Link to="/aboutus" className="nav-link">About us</Link>
                                            </li>
                                            <li className="nav-item py-1">
                                                <Link to="/shop" className="nav-link">Shop</Link>
                                            </li>
                                            <li className="nav-item dropdown py-1">
                                                <span className="d-flex align-items-center" data-toggle="dropdown">
                                                    <a className="nav-link" href="#">Blogs</a>
                                                    <img src="./img/drop-down.png" alt=""></img>
                                                    <div className="dropdown-menu text-dark">
                                                        <a className="dropdown-item" href="#">Link 1</a>
                                                        <a className="dropdown-item" href="#">Link 2</a>
                                                        <a className="dropdown-item" href="#">Link 3</a>
                                                    </div>
                                                </span>
                                            </li>
                                            <li className="nav-item py-1">
                                                <Link to="/contact" className="nav-link">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={offset > 140 ? "header-nav scroll-active header-scroll" : "header-nav  header-scroll"}>
                                <div className="navbar-expand-md">
                                    <div className="navbar-collapse d-flex justify-content-center">
                                        <ul className="navbar-nav py-2">
                                            <li className="nav-item py-1">
                                                <Link to="/" className="nav-link">Home</Link>
                                            </li>
                                            <li className="nav-item py-1">
                                                <Link to="/aboutus" className="nav-link">About us</Link>
                                            </li>
                                            <li className="nav-item py-1">
                                                <Link to="/shop" className="nav-link">Shop</Link>
                                            </li>
                                            <li className="nav-item dropdown py-1">
                                                <span className="d-flex align-items-center" data-toggle="dropdown">
                                                    <a className="nav-link" href="#">Blogs</a>
                                                    <img src="./img/drop-down.png" alt=""></img>
                                                    <div className="dropdown-menu text-dark">
                                                        <a className="dropdown-item" href="#">Link 1</a>
                                                        <a className="dropdown-item" href="#">Link 2</a>
                                                        <a className="dropdown-item" href="#">Link 3</a>
                                                    </div>
                                                </span>
                                            </li>
                                            <li className="nav-item py-1">
                                                <Link to="/contact" className="nav-link">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- nav end --> */}
                        </div>
                    </header>


                    {/* main */}
                    <Switch>
                        <Route path="/" exact>
                            <ScrollToTop/>
                            <Home_page
                                key="1"
                                products_recommendList={products_recommendList}
                                productsList={productsList}
                                addProduct={this.addProduct}
                                viewProduct={this.viewProduct}
                                product_sale_1={product_sale_1}
                                product_sale_2={product_sale_2}
                                product_news_1={product_news_1}
                                product_news_2={product_news_2}
                                product_news_3={product_news_3}
                                list__recommend={list__recommend}
                            />
                        </Route>
                        <Route path="/shop" >
                            <ScrollToTop/>
                            <Shop_page
                                products_recommendList={products_recommendList}
                                productsList={productsList}
                                addProduct={this.addProduct}
                                viewProduct={this.viewProduct}
                                filterData={filterData}
                                searchFilterPrice={this.searchFilterPrice}
                                searchFilterName={this.searchFilterName}
                                loading={loading}
                                currentPosts={currentPosts}
                                postsPerPage={postsPerPage}
                                paginate={this.paginate}
                                currentPage= {currentPage}
                                paginatePrev={this.paginatePrev}
                                paginateNext={this.paginateNext}
                            />
                        </Route>
                        <Route path="/detail" >
                            <ScrollToTop/>
                            <Details_page
                                products_recommendList={products_recommendList}
                                findedIndexViewDetail={findedIndexViewDetail}
                                productsList={productsList}
                                addProduct={this.addProduct}
                                viewProduct={this.viewProduct}
                                sercurity_poli={sercurity_poli}
                                delivery_poli={delivery_poli}
                                return_poli={return_poli}
                                plus_details={this.plus_details}
                                minus_details={this.minus_details}
                                amount_product_details={amount_product_details}
                            />
                        </Route>
                        <Route path="/cart">
                            <ScrollToTop/>
                            <Cart_page
                                products_recommendList={products_recommendList}
                                amount_product_add={amount_product_add}
                                productsList={productsList}
                                viewProduct={this.viewProduct}
                                productsList={productsList}
                                deleteProduct={this.deleteProduct}
                                miunusProduct={this.miunusProduct}
                                addProduct={this.addProduct}
                                deleteAllProduct={this.deleteAllProduct}
                            />
                        </Route>
                        <Route path="/checkout" >
                            <ScrollToTop/>
                            <CheckOut_Page
                                amount_product_add={amount_product_add}
                                accountOrder={accountOrder}
                                formFirstName={this.formFirstName}
                                formLastName={this.formLastName}
                                formCompanyName={this.formCompanyName}
                                formCountryName={this.formCountryName}
                                formAddress={this.formAddress}
                                formApartment={this.formApartment}
                                formCity={this.formCity}
                                formState={this.formState}
                                formPhone={this.formPhone}
                                formEmail={this.formEmail}
                                orderBtn={this.orderBtn}
                            />
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/aboutus">
                            <Aboutus/>
                        </Route>
                        <Route path="/success" >
                            <ScrollToTop/>
                            <Success_Page
                                amount_product_add={amount_product_add}
                                accountOrder={accountOrder} />
                        </Route>
                        <Route path="/login" >
                            <ScrollToTop/>
                            <Login_Page 
                            // reg
                                UserNameReg={this.UserNameReg}
                                PasswordReg={this.PasswordReg}
                                EmailReg={this.EmailReg}
                                btnReg={this.btnReg}
                                errorMsg={errorMsg}
                            // login
                                UserNameLogin={this.UserNameLogin}
                                PasswordLogin={this.PasswordLogin}
                                btnLogin={this.btnLogin}
                                errorLoginMsg={errorLoginMsg}
                            />
                        </Route>
                        
                    </Switch>
                    {/* main */}
                    <footer>
                        <div className="container">
                            <div className="row footer-section">
                                <div className="footer-about col-6 col-lg-4">
                                    <h6 className="my-3">ABOUT US</h6>
                                    <p className="detail__infor">Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                                </div>
                                <div className="footer-infor col-6 col-lg-3">
                                    <h6 className="my-3">INFORMATION</h6>
                                    <ul className="footer__list">
                                        <li className="list-items my-2"><a className="" href="">About us</a></li>
                                        <li className="list-items my-2"><a className="" href="">Delivery Information</a></li>
                                        <li className="list-items my-2"><a className="" href="">Privacy & Policy</a></li>
                                        <li className="list-items my-2"><a className="" href="">Terms & Condition</a></li>
                                        <li className="list-items my-2"><a className="" href="">Manufactures</a></li>
                                    </ul>
                                </div>
                                <div className="footer-account col-6 col-lg-2">
                                    <h6 className="my-3">MY ACCOUNT</h6>
                                    <ul className="footer__list">
                                        <li className="list-items my-2"><a className="" href="">My Account</a></li>
                                        <li className="list-items my-2"><a className="" href="">My Art</a></li>
                                        <li className="list-items my-2"><a className="" href="">Login</a></li>
                                        <li className="list-items my-2"><a className="" href="">Wishlist</a></li>
                                        <li className="list-items my-2"><a className="" href="">Checkout</a></li>
                                    </ul>
                                </div>
                                <div className="footer-news col-6 col-lg-3">
                                    <h6 className="my-3">NEWSLETTER</h6>
                                    <div className="email-send">
                                        <input data-toggle="popover" data-content="This form is not sercure. Auto fill has been turn off" placeholder="Your Mail*" type="text" className="p-2" defaultValue="Your Mail*" required />
                                        <a href="#" className="btn py-2 px-2" role="button">Send mail</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </Router>
        );
    }


}

export default Index;

// const mapStateToProps = state => {
//     return {
//         query: state.query,
//         filterData: state.filterData
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         ...bindActionCreators(productAction, dispatch)
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Index);
