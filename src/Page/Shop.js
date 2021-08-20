
// css
import '../css/header/style.css';
import '../css/main/style.css';
import '../css/footer/style.css';

// component
import Product from '../component/Product';
import Pagination from '../component/Pagination';


import React from 'react';

import '@fortawesome/fontawesome-free/css/all.css';


function ShopPage(props) {
    //   state
    const { filterData, loading, currentPosts } = props
    
    // function
    const { addProduct, viewProduct, searchFilterPrice, searchFilterName, postsPerPage, paginate, currentPage , paginatePrev, paginateNext, isLogin} = props
    
    // const amount_product_view = productsList.filter(product => product.product__add === product_id)
    if(loading){
        return <h2>Loading...</h2>
    }
    
    const filterName = [
        {
            value: "",
            label: "Relevance"
        },
        {
            value: "allName",
            label: "All"
        },
        {
            value: "low_high",
            label: "Price Low to High"
        },
        {
            value: "high_low",
            label: "Price High to Low"
        },
        {
            value: "A_Z",
            label: "Name A to Z"
        },
        {
            value: "Z_A",
            label: "Name Z to A"
        },
    ]

    const filterPrice = [
        {
            value: "",
            label: "Price"
        },
        {
            value: "all",
            label: "All"
        },
        {
            value: "sale",
            label: "Sale"
        },
        {
            value: "under_30",
            label: "Under $30"
        },
        {
            value: "30_50",
            label: "From $30 To $50"
        },
        {
            value: "above_50",
            label: "Above $50"
        },

    ]
    return (

        <div>
            {/* SHOP start */}
            <main className="main">
                <div className="main-page">
                    <div className="container py-5">
                        <div className="d-flex align-items-center py-4">
                            <div className="main-stage__page">
                                <h1 className="" >
                                    SHOP
                                </h1>
                            </div>
                            <div className="main-stage__listpage ml-auto ">
                                <ul className="d-flex align-items-center list-breakcrumb">
                                    <li>
                                        <a href="index.html" className="active">Home</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">Shop</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-cart container">
                    <div className=" products-detail py-5">
                        {/* <!-- filter product --> */}
                        <div className=" filter px-4">
                            <div className="product-amount mr-auto ">
                                <span>There Are {filterData.length} Products.</span>
                            </div>
                            <div className="product-filter">
                                <div className="row d-flex align-items-center">
                                    <span className="col-12 col-sm-3">
                                        Sort By:
                                    </span>
                                    <ul className="col-12 col-sm-4 list_filter d-flex align-items-center" >

                                        <select className="d-flex align-items-center" onChange={searchFilterPrice} >
                                            {
                                                filterPrice.map((optionPrice, index) => (
                                                    <option key={index} value={optionPrice.value}>{optionPrice.label}</option>
                                                ))
                                            }
                                        </select>

                                    </ul>
                                    <ul className="col-12 col-sm-5 list_filter d-flex align-items-center">

                                        <select className="d-flex align-items-center" onChange={searchFilterName} >
                                            {
                                                filterName.map((optionName, index) => (
                                                    <option key={index} value={optionName.value} >{optionName.label}</option>
                                                ))
                                            }
                                        </select>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- shop products start --> */}
                        <div className="row products py-4">
                            {
                                currentPosts.map((product, index) => {
                                    return (
                                        <Product key={product._id}
                                            addProduct={addProduct}
                                            product={product}
                                            viewProduct={viewProduct}
                                            isLogin={isLogin}
                                        />
                                    )
                                })
                            }

                           
                        </div>
                        <div className="d-flex pagination-bar justify-content-center">
                            <ul className="pagination pagination text-center">
                                <Pagination 
                                    postsPerPage={postsPerPage}
                                    totalPosts={filterData.length}
                                    paginate={paginate}
                                    currentPage={currentPage}
                                    paginatePrev={paginatePrev}
                                    paginateNext={paginateNext}
                                />
                                {/* <li className="page-item">
                                    <a className="pagination-btn__like btn">Pre</a>
                                </li>
                                <li className="page-item">
                                    <a className="pagination-btn__like btn active">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="pagination-btn__like btn">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="pagination-btn__like btn">Next</a>
                                </li> */}
                            </ul>
                        </div>
                        {/* <!-- shop products end --> */}
                    </div>
                </div>
            </main>
            {/* SHOP end */}
        </div>

    );
}



export default ShopPage;
