import logo from './logo.svg';
// css
import './App.css';
import './css/header/style.css';
import './css/main/style.css';
import './css/footer/style.css';

// component
import Product_Side from './component/Product-Side';

import Shop_page from './Page/Shop';
import Home_page from './Page/Home';
import Cart_page from './Page/Cart';
import Details_page from './Page/Details';
import CheckOut_Page from './Page/CheckOut';
import Success_Page from './Page/SuccessCheckOut';
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
import product_item1 from './img/product-item1.jpg';
import product_item2 from './img/product-item2.jpg';
import product_item3 from './img/product-item3.jpg';
import product_item4 from './img/product-item4.jpg';
import product_item5 from './img/product-item5.jpg';
import product_item6 from './img/product-item6.jpg';
import product_item7 from './img/product-item7.jpg';
import product_item8 from './img/product-item8.jpg';
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
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productAction from '../src/actions/productAction'

import '@fortawesome/fontawesome-free/css/all.css';




class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search_isShow: false,
            sideShop_isShow: false,
            sideNav_isShow: false,
            amount_product_details: 1,
            amount_product_add: JSON.parse(localStorage.getItem("amount_product_add")) || [],
            productsList: [
                {
                    product_id: 1,
                    product_img: product_item1,
                    product_img_hover: product_item3,
                    product_date: '2021/02/05',
                    product_sale: 20,
                    product_name: 'Simple Minimal Chair',
                    product_price: 45.59,
                    product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
                    prodcuct_weight: '350',
                    product_dimension: '10 x 20 x 15',
                    product_material: '40% polyester',
                    product_infor: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid',
                    product_amount: 1
                },
                {
                    product_id: 2,
                    product_img: product_item2,
                    product_img_hover: product_item6,
                    product_date: '2021/01/05',
                    product_sale: 20,
                    product_name: 'Wooden decorations',
                    product_price: 29.54,
                    product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
                    prodcuct_weight: '400',
                    product_dimension: '10 x 10 x 15',
                    product_material: '60% cotton, 40% polyester',
                    product_infor: 'American heirloom jean shorts pug seitan letterpress',
                    product_amount: 1
                },
                {
                    product_id: 3,
                    product_img: product_item3,
                    product_img_hover: product_item2,
                    product_date: '2021/02/10',
                    product_sale: 30,
                    product_name: 'High quality vase',
                    product_price: 58.85,
                    product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
                    prodcuct_weight: '600',
                    product_dimension: '30 x 20 x 40',
                    product_material: '60% cotton',
                    product_infor: 'Ut enim ad minim venialo quis nostrud exercitation ullamco',
                    product_amount: 1
                },
                {
                    product_id: 4,
                    product_img: product_item4,
                    product_img_hover: product_item1,
                    product_date: '2021/03/05',
                    product_sale: null,
                    product_name: 'Living & Bedroom',
                    product_price: 45.89,
                    product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
                    prodcuct_weight: '400',
                    product_dimension: '10 x 10 x 15',
                    product_material: '60% cotton, 40% polyester',
                    product_infor: 'American heirloom jean shorts pug seitan letterpress',
                    product_amount: 1
                },
                {
                    product_id: 5,
                    product_img: product_item5,
                    product_img_hover: product_item4,
                    product_date: '2021/01/05',
                    product_sale: null,
                    product_name: 'Living & Bedroom',
                    product_price: 38.85,
                    product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
                    prodcuct_weight: '450',
                    product_dimension: '45 x 130 x 75',
                    product_material: '30% cotton, 70% polyester',
                    product_infor: 'Labore et dolore magna aliqua. Ut enim ad minim venialo',
                    product_amount: 1
                },
                {
                    product_id: 6,
                    product_img: product_item6,
                    product_img_hover: product_item7,
                    product_date: '2021/02/10',
                    product_sale: null,
                    product_name: 'Simple Minimal Chair',
                    product_price: 45.38,
                    product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
                    prodcuct_weight: '400',
                    product_dimension: '10 x 10 x 15',
                    product_material: '60% cotton, 40% polyester',
                    product_infor: 'American heirloom jean shorts pug seitan letterpress',
                    product_amount: 1
                },
                {
                    product_id: 7,
                    product_img: product_item7,
                    product_img_hover: product_item8,
                    product_date: '2021/01/05',
                    product_sale: 40,
                    product_name: 'Living & Bedroom',
                    product_price: 48.25,
                    product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
                    prodcuct_weight: '800',
                    product_dimension: '56 x 30 x 87',
                    product_material: '60% cotton, 40% polyester',
                    product_infor: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna',
                    product_amount: 1
                },
                {
                    product_id: 8,
                    product_img: product_item8,
                    product_img_hover: product_item5,
                    product_date: '2021/02/22',
                    product_sale: 30,
                    product_name: 'High quality vase',
                    product_price: 35.85,
                    product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
                    prodcuct_weight: '400',
                    product_dimension: '10 x 10 x 15',
                    product_material: '60% cotton, 40% polyester',
                    product_infor: 'American heirloom jean shorts pug seitan letterpress',
                    product_amount: 1
                },
            ],
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
            }
        }
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
                .post("https://606435c9f0919700177852da.mockapi.io/account_order", accountOrder)
                .then(res => {
                    console.log(res.data)
                })
                .catch(error => { })
        )
    }

    saveToLocalStorage = () => {
        localStorage.setItem("amount_product_add", JSON.stringify(this.state.amount_product_add));

    };


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

    addProduct = id => {
        let findedIndex = this.state.amount_product_add.find(product => product.product_id === id);
        if (findedIndex) {
            let product = this.state.amount_product_add.map(product => {
                if (product.product_id === id) {
                    return {
                        ...product,
                        product_amount: product.product_amount + this.state.amount_product_details
                    }
                }
                return product;
            })
            this.setState({
                productsList: this.state.productsList,
                amount_product_add: product,
                sideShop_isShow: true,
            }, () => {
                this.saveToLocalStorage()
            })
        } else {
            let findAdd = this.state.productsList.find(product => product.product_id === id);
            const newList = [...this.state.amount_product_add, findAdd]
            this.setState({
                amount_product_add: newList,
                amount_product_details: 1,
                sideShop_isShow: true,
            }, () => {
                this.saveToLocalStorage()
            })
        }

    }


    deleteProduct = id => {
        let newListProducts = [...this.state.amount_product_add.filter(product => product.product_id === id)];
        let findedIndex = newListProducts.find(product => product.product_id === id);
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
            console.log(this.state.productsList)
        })
        findedIndex.product_amount = 0
        console.log(this.state.productsList)
    }

    miunusProduct = id => {
        let newListProducts = [...this.state.amount_product_add];
        let findedIndex = newListProducts.find(product => product.product_id === id);
        if (findedIndex.product_amount > 0) {
            findedIndex.product_amount = findedIndex.product_amount - this.state.amount_product_details
            this.setState({
                amount_product_add: newListProducts,
            }, () => {
                this.saveToLocalStorage()
            })
        } if (indedIndex.product_amount === 0) {
            this.deleteProduct(id)
            this.saveToLocalStorage()
        }
    }


    viewProduct = id => {
        let newListProducts = [...this.state.productsList];
        this.setState({
            findedIndexViewDetail: newListProducts.filter(product => product.product_id === id),
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
            console.log(this.state.accountOrder.account_companyName)
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


    // 

    render() {
        //   state
        const { productsList, products_recommendList, sideShop_isShow, sideNav_isShow, search_isShow, findedIndexViewDetail, amount_product_details, query, amount_product_add, accountOrder } = this.state



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

        return (
            <Router>
                <div >
                    <header className="header">
                        <div className="header-section">
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
                                                <div className={search_isShow ? 'input_search mx-1 d-flex input_search-show' : 'input_search mx-1 d-flex input_search-primary'}>
                                                    <input className="border-right-0" type="text" onChange={this.search} placeholder="Enter your search key" />

                                                    <button onClick={this.submitSearch} type="submit" className="border-left-0 ml-auto"><i className="fa fa-search " aria-hidden="true"></i></button>
                                                </div>
                                                <div className="search icon-items mx-1">
                                                    <img src={search} alt="" onClick={this.openSearch}></img>
                                                </div>
                                                <div className="icon-items mx-1">
                                                    <img src={account} alt=""></img>
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
                                        <div id="shop-side" className={sideShop_isShow ? 'sideshop-open sideshop' : 'sideshop'}>
                                            <a href="javascript:void(0)" className="closebtn" onClick={this.openShop}>&times;</a>

                                            {
                                                amount_product_add.map((product) => {
                                                    return (
                                                        <Product_Side
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
                                        <div id="nav-side" style={{ width: sideNav_isShow ? '250px' : 0 }} className="sidenav">
                                            <a href="javascript:void(0)" className="closebtn" onClick={this.openNav}>&times;</a>
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
                                                    <a className="nav-link" href="">Bogs</a>
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
                            <div className="header-nav bg-dark">
                                <div className="navbar-expand-md">
                                    <div className="navbar-collapse d-flex justify-content-center">
                                        <ul className="navbar-nav py-2">
                                            <li className="nav-item py-1">
                                                <Link to="/" className="nav-link">Home</Link>
                                            </li>
                                            <li className="nav-item py-1">
                                                <a className="nav-link" href="#">About us</a>
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
                                                <a className="nav-link" href="#">Conntact us</a>
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
                            <Home_page
                                products_recommendList={products_recommendList}
                                productsList={productsList}
                                addProduct={this.addProduct}
                                viewProduct={this.viewProduct}
                                product_sale_1={product_sale_1}
                                product_sale_2={product_sale_2}
                                product_news_1={product_news_1}
                                product_news_2={product_news_2}
                                product_news_3={product_news_3}
                            />
                        </Route>
                        <Route path="/shop" >
                            <Shop_page
                                products_recommendList={products_recommendList}
                                productsList={productsList}
                                addProduct={this.addProduct}
                                viewProduct={this.viewProduct}
                                filterData={filterData}
                                searchFilterPrice={this.searchFilterPrice}
                                searchFilterName={this.searchFilterName}
                            />
                        </Route>
                        <Route path="/detail" >
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
                        <Route path="/success" >
                            <Success_Page
                                amount_product_add={amount_product_add}
                                accountOrder={accountOrder} />
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
                                    <input data-toggle="popover" data-content="This form is not sercure. Auto fill has been turn off" placeholder="Your Mail*" type="text" className="p-2" required />
                                    <a href="#" className="btn py-2 px-2" role="button">Send mail</a>
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
