import React from 'react'
// import Formulario from './Formulario'
import './Participa.css'
import logo_festival from './../../assets/img/icons/logo_festival.png'
import PostulcacionCerrada from './PostulcacionCerrada'

function Participa() {

  return (
    <div className='participate'>
                <h2><b>Participa en nuestro Festival</b></h2>
        <div className="container-form">
            <div className="info-form">
                <p></p>
                <p><b>Se parte de este gran evento efectuado por el Sindicato de Artists Circenses de Chile.</b></p>
                <img src={logo_festival} alt="" />
            </div>
            {/* <Formulario/> */}
            <PostulcacionCerrada/>
        </div>

    </div>
  )
}

export default Participa
