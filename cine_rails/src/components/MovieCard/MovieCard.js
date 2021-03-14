import React from 'react'
import './MovieCard.css'
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import { ApiService } from '../../services/ApiService';
import { useHistory } from 'react-router-dom';

const MovieCard = (props) => {
  const history = useHistory();

  async function handleDelete() {
    const id = props.movie.id;
    try {
      await new ApiService().deleteMovieById(id);
    } catch(e) {}
    history.push('/');
  }

  return (
    <Col xs={12} md={6} lg={4} className="p-3">
      <Card className="round h-100">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body className="card-body">
          <Card.Title><h4 style={{ display: 'inline' }}>{props.movie.title},</h4> {props.movie.year}</Card.Title>
          <Card.Subtitle className="mb-2">
            {props.movie.director && <Link to={{ pathname: `/director/${props.movie.director.id}`, name: props.movie.director.name }}><h5>{props.movie.director.name}</h5></Link>}
          </Card.Subtitle>
          <hr></hr>
          <Card.Subtitle className="mt-2 mb-2">
            Nota: {props.movie.rate}
          </Card.Subtitle>
          <Card.Text className="mb-5" style={{ textAlign: "justify" }}>
            Sinopse: {props.movie.synopsis}
          </Card.Text>
          <div>
            <Link to={{ pathname: '/form', state: { movie: props.movie } }}>
              <Button className="submit-btn" variant="primary">Editar filme</Button>
            </Link>
            <DeleteIcon className="trash-icon" onClick={handleDelete} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default MovieCard
