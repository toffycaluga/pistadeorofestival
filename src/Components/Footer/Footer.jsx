import React from 'react'
import './Footer.css'
import logo_sindicato from './../../assets/img/icons/logo_sindicato.png';
import fed_lat from './../../assets/img/icons/fed_lat.png';
import fed_mun from './../../assets/img/icons/fed_mun.png';
import mincul from './../../assets/img/icons/mincul.png';

function Footer() {
  return (
   <div className="footer">
        <div className="group-1">
            <div className="box">
                <figure>
                    
                        <img src={logo_sindicato} alt="sindicato circense de chile" />
                    
                </figure>
            </div>
            <div className="box">
                <h4>Afiliados a </h4>
                <div className="federations">
                    <img src={fed_lat} alt="federacion latinoamericana de circo" />
                    <img src={fed_mun} alt="federacion mundial de circo" />
                </div>
            </div>
            <div className="box">
                <div className="mincul">
                    <div className="item-1">
                        <h4>Proyecto Fondart</h4>
                        <h4>Convocatoria 2020</h4>
                    </div>
                    <div className="item">
                        <img src={mincul} alt="ministerio de cultura" />
                    </div>
                </div>
            </div>
        </div>
        <div className="group-2">
            <small>&copy; 2022 <b>Pista de Oro Festival</b> -Todos los derechos reservados</small><br />
            <small>Powered By: <b>Toffy Caluga</b></small>
        </div>
   </div>
  )
}

export default Footer