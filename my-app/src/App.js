import React, { useState } from 'react';
import './App.css';
import Api from './componentes/Api.js';



function App(props) {
  
  const [searchValue, setSearchValue] = useState("");
  


  const handleInputChange = (event) =>{
            setSearchValue(event.target.value);
  }

  return (
    <div className="App">

      <header className="cabecalho">
        <a href="/"><p>HeroList</p></a>
        <div className="search">
          <input required onChange={handleInputChange} placeholder="Nome do Heroi" type="text"/> 
            <i class="fa fa-search" aria-hidden="true"></i>
            
        </div>
      </header>

      <Api search={searchValue}/>
        
      
    </div>
  );
}

export default App;
