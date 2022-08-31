import React from 'react'
import './Jury.css'
import jurado1 from './../../assets/img/jurados/1.png'
import jurado2 from './../../assets/img/jurados/2.png'
import jurado3 from './../../assets/img/jurados/3.png'
import jurado4 from './../../assets/img/jurados/4.png'
import jurado5 from './../../assets/img/jurados/5.png'
import CardJury from './CardJury'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function Jury() {
const jurors=[jurado1,
     jurado2,
      jurado3,
      jurado4,
      jurado5];

  return (
    <div className="jury">

        <h1>Nuestro Jurado 2022</h1>
        <Row xs={2} md={3} className="g-4 jury-row">
        {Object.entries(jurors).map(([ key, description ]) => 
        <Col>
          <CardJury image={description} />
        </Col>
      )}
        </Row>
    </div>
  )
}

export default Jury