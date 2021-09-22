// component
import Product from '../component/Product';


import React from 'react';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

function AddProduct(props){
    const { ConfigDB ,productadd,detail, product_img,product_date,product_sale,product_name,product_price,product_description, prodcuct_weight,product_dimension,product_material,product_infor,product_amount, } = props
    console.log(detail)
    return(
        <div>
            {
            detail.length === 0 ?
                    <div className="checkout-area pt-100px pb-100px">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="addproduct-info-wrap">
                                        <h3>Add Prouct</h3>

                                        <div className="row">
                                        <div className="col-lg-12">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Prouct Name</label>
                                                    <input type="text" onChange={product_name} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Price</label>
                                                    <input type="text" onChange={product_price}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Sale</label>
                                                    <input type="text" onChange={product_sale}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Date</label>
                                                    <input type="date" id="date" onChange={product_date}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Description</label>
                                                    <input className="addproduct-description" placeholder="Description" type="text" onChange={product_description}/>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="addproduct-info mb-20px">
                                                    <label> Image </label>
                                                    <form >
                                                        <div className="custom-file mb-3">
                                                        <input type="file" className="custom-file-input" id="customFile" name="filename" onChange={product_img}/>
                                                        <label className="custom-file-label" forHtml="customFile">Choose file</label>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Weight</label>
                                                    <input type="text" onChange={prodcuct_weight}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Amout</label>
                                                    <input type="text" onChange={product_amount}/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Marterial</label>
                                                    <input type="text" onChange={product_material}/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Dimension</label>
                                                    <input type="text" onChange={product_dimension}/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Information</label>
                                                    <input type="text" onChange={product_infor}/>
                                                </div>
                                            </div>
                                            <a onClick={productadd} className="Submitbtn">Add</a>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    :
                
            detail.map((product)=>{
                return(
                    <div className="checkout-area pt-100px pb-100px">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="addproduct-info-wrap">
                                        <h3>Update Prouct</h3>
                                        <div className="row">
                                        <div className="col-lg-12">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Prouct Name</label>
                                                    <input type="text" onChange={product_name} value={product.product_name}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Price</label>
                                                    <input type="text" onChange={product_price} value={product.product_price}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Sale</label>
                                                    <input type="text" onChange={product_sale} value={product.product_sale}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Date</label>
                                                    <input type="date" id="date" onChange={product_date} value={product.product_date}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Description</label>
                                                    <input className="addproduct-description" placeholder="Description" type="text" onChange={product_description} value={product.product_description}/>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="addproduct-info mb-20px">
                                                    <label> Image </label>
                                                    <form >
                                                        <div className="custom-file mb-3">
                                                        <input type="file" className="custom-file-input" id="customFile" name="filename" onChange={product_img} />
                                                        <label className="custom-file-label" forHtml="customFile">Choose file</label>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Weight</label>
                                                    <input type="text" onChange={prodcuct_weight} value={product.prodcuct_weight}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Amout</label>
                                                    <input type="text" onChange={product_amount} value={product.product_amount}/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Marterial</label>
                                                    <input type="text" onChange={product_material} value={product.product_material}/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Dimension</label>
                                                    <input type="text" onChange={product_dimension} value={product.product_dimension}/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="addproduct-info mb-20px">
                                                    <label>Information</label>
                                                    <input type="text" onChange={product_infor} value={product.product_infor}/>
                                                </div>
                                            </div>
                                            <Link onClick={()=>ConfigDB()} className="Submitbtn">Update</Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                )
                
            })
        
        }
        </div>
    );

    
}
export default AddProduct;