import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import './RenderCard.css';
import ReactImageFallback from "react-image-fallback";

 const RenderCard = ({heroList, loading}) => {
    /*Enquanto Effect está pegando os dados ocorre a animação de loading */
    if (loading){
        return <center> <ReactBootStrap.Spinner animation="border" /></center>;
    }
    /* Quando os dados são carregados, o array heroList é pecorrido pelo map 
    e renderiza os cards
    */
    return (
        <div className="hero">        
        {heroList.map((dados)=> (      
            <div className="heroCard" key={dados.id}>
                <div className="imageCard">                   
                <ReactImageFallback fallbackImage={require('../img/default-fallback-image.png')}
                 src={dados.image.url}/>
                </div>
                <h2>{dados.name} </h2>
                <div className="heroContent">
                    <h3>Inteligencia: {dados.powerstats.intelligence} </h3> 
                    
                </div>                 
                <div className="heroContent">
                    <h3>Força: {dados.powerstats.strength}</h3>
                    
                </div>                   
                <div className="heroContent">
                    <h3>Velocidade: {dados.powerstats.speed}</h3>
                    
                </div>
                <div className="heroContent">
                    <h3>Poder: {dados.powerstats.power}</h3>
                    
                </div>

            </div>) ) }
           
        </div>
    )
}
export default RenderCard;