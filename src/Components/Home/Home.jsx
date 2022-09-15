import React from 'react'
import Carousel from '../Carousel/Carousel';
import boletos from './../../assets/img/home/boletos.png'
import instagram from './../../assets/img/home/instagram.png'
import jurado from './../../assets/img/home/jurado.png'
import youtube from './../../assets/img/home/youtube.png'
import './Home.css'
import {useNavigate} from 'react-router-dom'



function Portada() {
  const navigate =useNavigate();
  return (
    <div className="home">
        <Carousel/>


        <div className="home-container">
          <div className="home-content">
            <img src={youtube} alt="canal del festival" />
            </div>
          <div className="home-content">
            <a href="https://ticketplus.cl/events/festival-internacional-de-circo-en-chile">
            <img src={boletos} alt="boletos" />
            </a>
            </div>
        </div>
        <div className="home-container">

          <div className="home-content">
            <img src={jurado} alt="jurado" onClick={()=>navigate('/jurado')}/>
            </div>
          <div className="home-content">
            <a href="https://instagram.com/festivalpistadeoro">

            <img src={instagram} alt="fotos del festival"  />
            </a>
            </div>
        </div>
      
    </div>
  )
}

export default Portada