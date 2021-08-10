
import '../App.css';
import React , {useState, useEffect} from 'react'

function Pagination({ postsPerPage, totalPosts, paginate, currentPage, paginatePrev, paginateNext}) {
    // console.log(currentPage
    
    let pageNumber = []
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        
        pageNumber.push(i)
        
    }
    const [appState, setAppState] = useState({
        activeObject: null,
        objects: pageNumber
    }) 

    const changeActive = (number) =>{
        setAppState({
            ...appState, activeObject: appState.objects[number]
        })
        console.log(appState.activeObject)
    }
    
    
    // console.log(pageNumber)
    return (
       <nav>
           <ul className="pagination pagination text-center">
                <li className="page-item">
                    <a onClick={()=>paginatePrev(currentPage) } className="pagination-btn__like btn">Pre</a>
                </li>
                {
                    pageNumber.map((number, index) =>(
                        <li key={number} className="page-item" >
                            <a  onClick={()=>paginate(number) } className="pagination-btn__like btn ">
                                {number}
                            </a>
                        </li>
                    ))
                }
                <li className="page-item">
                    <a onClick={()=>paginateNext(totalPosts,currentPage) } className="pagination-btn__like btn">Next</a>
                </li>
            </ul>
       </nav>
    )
}

export default Pagination;
