import React from 'react';
import './Pagination.css';
const Pagination = ({cardPerPage, totalCards, paginate}) => {
    /* Array contendo o número de botões */
    const pageNumbers = [];
    /* O laço adiciona ao array o número de botões que precisa conter */
    for(let i = 1; i <= Math.ceil(totalCards/ cardPerPage); i++){
        pageNumbers.push(i);
    }
    /* renderização dos botões da paginação com efeito de click para trocar a página */
    return (
        <nav className="paginacao" >
            
            {pageNumbers.map(number =>(
                <div className="paginacaoLi" key={number}>
                    <a onClick={()=> paginate(number)}>
                    <button className="btnPag">{number}</button>
                    </a>
                </div>

            ))}
           
        </nav>
    )
}
export default Pagination;