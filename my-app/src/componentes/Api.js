import React, { useState,useEffect } from 'react'
import axios from 'axios';
import RenderCard from './RenderCard'
import Pagination from './Pagination'
import './Api.css'

/* Variavel possuindo a Url da api e O ID */
const api={
    baseURL:"https://www.superheroapi.com/api.php",
    id: "1923721664431928",
    
  }

 function Api(props){

  
    /*Utiliza-se hooks*/
    /*Hooks que irão conter o array de herois, o boleano para a animação de carregamento
    , pagina atual e numero de cards por pagina
    */
    const [heroList, setHeroList] = useState([]);  
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardPerPage] = useState (12);
    const [erro, setErro] = useState(false);

    /*O useEffect acessa a api e coloca o resultado da busca no state herois*/
    /* caso não consiga acessar a api gera um alerta avisando ao usuário 
    e da true para animação de carregamento 
    */ 
    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
        const res = await axios.get(api.baseURL + '/'+ api.id +'/search'+'/a')
                .then((res)=> {
                    setLoading(false);
                    setHeroList(res.data.results);
                   
                })
                .catch((error)=>{
                    setErro(true);
                })
                
        }
        fetchPost();
      }, []);
      
      if (erro){
          return(
              <div>
                  <center><h3>Não foi possivel conectar-se com a Api</h3></center>
              </div>
          );
      }else{
            /* Variáveis da paginação, tendo o indice final, primeiro indice e um array pelos indices
            das variáveis
            */
            const indexOfLastCard = currentPage * cardPerPage;
            const indexOfFirsCard = indexOfLastCard - cardPerPage;
            const currentCard = heroList.slice(indexOfFirsCard, indexOfLastCard);
            /* Função que define a pagina atual */
            const paginate= (pageNumber) => setCurrentPage(pageNumber);

            /*Aqui chama o componente que renderiza os cards enviando o array e o loading 
            e renderiza a paginação */
            return(
                <div>       
                    <div className="content">   
                    <RenderCard heroList={currentCard} loading={loading}/>

                    </div>
                    <div className="content2">
                        <Pagination cardPerPage={cardPerPage}
                        totalCards={heroList.length}
                        paginate={paginate}/>
                        </div>
                </div>
            );
     }
    }
    export default Api;
