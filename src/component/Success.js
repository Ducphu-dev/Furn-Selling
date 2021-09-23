
import '../App.css';
import React from 'react'
import { Link } from 'react-router-dom';

function Success(props) {
    const { product } = props
    // function
    const { isSuccess } = props

    
    const success = () =>{
        // console.log(isSuccess)
        if(isSuccess === ""){
            return "Success"
        }if(isSuccess === true){
            return "Success success annimationSuccess"
        }if(isSuccess === false){
            return "Success fail annimationFail"
        }
    }
    
    const content = () =>{
        // console.log(isSuccess)
        if(isSuccess === true){
            return "Thành công"
        }if(isSuccess === false){
            return "Thất bại"
        }
    }

    return (
        <div className={success()}>
            <div className="Success-content">
                <p>
                    {content()}
                </p>
                <i className="fa fa-check-circle mr-2" aria-hidden="true" />
            </div>
        </div>
    )
}

export default Success;
