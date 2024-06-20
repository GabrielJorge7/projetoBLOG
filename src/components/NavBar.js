import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
 
const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <NavLink to="/" className={styles.brand}>
        BLOG<span>BielMLPK</span>
      </NavLink>
 
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/Home" className={({isActive}) => (isActive ? styles.active:"")}>Casa</NavLink>
        </li>
        <li>
          <NavLink to="/Produtos"className={({isActive}) => (isActive ? styles.active:"")}>Produtos</NavLink>
        </li>
 
        <li>
          <NavLink to="/Login" className={({isActive}) => (isActive ? styles.active:"")}>Login</NavLink>
        </li>
 
        <li>
          <NavLink to="/Register"className={({isActive}) => (isActive ? styles.active:"")}>Cadastrar</NavLink>
        </li>
 
        <li>
          <NavLink to="/About"className={({isActive}) => (isActive ? styles.active:"")}>Sobre</NavLink>
        </li>

      
      </ul>
    </nav>
  );
};
 
export default NavBar;
 
