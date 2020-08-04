import React from 'react';
import './Pagination.css';
const Pagination = ({cardPerPage, totalCards, paginate}) => {
    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(totalCards/ cardPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav className="paginacao" >
            
            {pageNumbers.map(number =>(
                <div className="paginacaoLi" key={number}>
                    <a onClick={()=> paginate(number)} href="!#">
                    <button className="btnPag">{number}</button>
                    </a>
                </div>

            ))}
           
        </nav>
    )
}
export default Pagination;