import Card from 'react-bootstrap/Card';


function GridExample(props) {
  return (
          <Card>
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
               Jurado IX Festival Internacional de Circo 
               <br />
               <b>Pista de Oro 2022</b>
              </Card.Text>
            </Card.Body>
          </Card>

  );
}

export default GridExample;