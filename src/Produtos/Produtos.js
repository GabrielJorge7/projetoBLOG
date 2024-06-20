import React from "react"; 
import styles from "./Produtos.module.css"; 
import { useState, useEffect } from "react"; 

  

const Produtos = () => { 

  const [displayName, setDisplayName]=useState(''); 

  const [displayValor, setDisplayValor]  = useState(''); 

  const [displayTipo, setDisplayTipo]  = useState(''); 

  const [displayMarca, setDisplayMarca]  = useState(''); 

  const [error, setError] = useState(''); 

  const handleSubmit = (e)=> { 
    e.preventDefault(); 
} 
  
  return ( 

    <div> 

      <h1>Cadastro de Produto</h1> 

      <form onSubmit={handleSubmit}>.

        <label> 

            <span> 

                Nome: 

            </span> 

            <input type="text" name="displayName" required placeholder="Nome do Produto" /> 

        </label> 

        <label> 

            <span> 

                Tipo:

            </span> 

            <input type="text" name="displayValor" required placeholder="Tipo do Produto" /> 

        </label> 

        <label> 

            <span> 

                Valor:

            </span> 

            <input type="text" name="displayTipo" required placeholder="Valor do Produto" /> 

        </label> 
        
        <label> 

<span> 

    Marca: 

</span> 

<input type="text" name="displayMarca" required placeholder="Marca" /> 

</label> 

        


        

      

        <button className="btn"> 

            Cadastrar 

        </button> 

      </form> 

    </div> 

  ); 

}; 

  

export default Produtos; 