import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/nav.css'
const Nav = (props) => {
  return (
    <nav>
       <div>
        <ul>
        <li><NavLink to="/" className={({isActive}) => isActive ? "activo":undefined}>Home</NavLink></li>
                    <li><NavLink to="/Nosotros" className={({isActive}) => isActive ? "activo":undefined}>Nosotros</NavLink></li>
                    <li><NavLink to="/contacto" className={({isActive}) => isActive ? "activo":undefined}>Contacto</NavLink></li>
                    <li><NavLink to="/eventos" className={({isActive}) => isActive ? "activo":undefined}>Eventos</NavLink></li>
        </ul>
      </div>
      
    </nav>
    
  )
  
}
export default Nav;