import React from "react";
import styles from './Login.module.css'

const Login = ()=> {
    return(
         <div> 

<h1>Login</h1> 

<form> 

  <label> 

      <span> 

          Nome: 

      </span> 

      <input type="text" name="displayName" required placeholder="Nome Usuário" /> 

  </label> 

  <label> 

   

    

  </label> 

  <label> 

      <span> 

          Senha: 

      </span> 

      <input type="password" name="displayPassword" required placeholder="Senha Usuário" /> 

  </label> 

  <label> 

 

    

  </label> 

  <button className="btn"> 

      Login

  </button> 

</form> 

</div> 
    )
}
export default Login