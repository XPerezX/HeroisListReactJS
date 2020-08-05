import React, { useState } from 'react'
import './App.css';
import Api from './componentes/Api.js';



function App(props) {
  
  const [searchValue, setSearchValue] = useState(null);
  const [search, setSearch] = useState(false);

  return (
    <div className="App">

      <header className="cabecalho">
       <a href="/"><h3>HeroList</h3></a>
          
      </header>
      <Api/>
        
      
    </div>
  );
}

export default App;
