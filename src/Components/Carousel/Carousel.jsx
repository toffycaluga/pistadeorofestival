import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import foto1 from './../../assets/img/carousel/carousel_1.gif'
import foto2 from './../../assets/img/carousel/carousel_2.png'
import foto3 from './../../assets/img/carousel/carousel_3.png'
import ubicacion from './../../assets/img/carousel/ubicacion.png';
import {useNavigate} from 'react-router-dom'

function IndividualIntervalsExample() {
  const navigate = useNavigate();
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={foto1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={foto2}
          alt="Second slide"
        />
    
        <Carousel.Caption>
            <a href="https://goo.gl/maps/FaaCF7FuJSEN2meq5" className="ubicacion-circo">
          <img src={ubicacion} alt="ubicacion" />
            </a>
           
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
        onClick={()=>navigate('/Participa')}
          className="d-block w-100"
          src={foto3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;