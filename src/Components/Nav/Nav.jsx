import React from 'react';
import './Nav.css'
import {useNavigate} from 'react-router-dom'

function Nav() {
    const navigate = useNavigate();
  return (
    <nav className="nav_home">
        <ul>
            <li><b onClick={()=>navigate('/')}>Home</b></li>
            <li><a href="https://goo.gl/maps/FaaCF7FuJSEN2meq5"><b>Como Llegar</b></a></li>
            <li><b onClick={()=>navigate('/Participa')}>Postula al festival</b></li>
            <li><b onClick={()=>navigate('/jurado')}>Nuestro Jurado</b></li>
            <li><b onClick={()=>navigate('/historia-festival')}>Historia del Festival</b></li>
        </ul>
    </nav>
  );
}

export default Nav;