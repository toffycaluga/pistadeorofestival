import React from 'react'
import Formulario from './Formulario'
import './Participa.css'
import logo_festival from './../../assets/img/icons/logo_festival.png'

function Participa() {

  return (
    <div className='participate'>
                <h2><b>Participa en nuestro Festival</b></h2>
        <div className="container-form">
            <div className="info-form">
                <p></p>
                <p>Se parte de este gran evento efectuado por el Sindicato de Artists Circenses de Chile.</p>
                <img src={logo_festival} alt="" />
            </div>
            <Formulario/>
        </div>

    </div>
  )
}

export default Participa
