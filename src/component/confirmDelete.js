
import '../App.css';
import React , {useState, useEffect} from 'react'

function confirmDelete({ confirmYes }) {
    return (
        <div>
            <div>
                <button onClick={confirmYes}>Yes</button>
                <button>No</button>
            </div>
        </div>
    )
}

export default confirmDelete;
