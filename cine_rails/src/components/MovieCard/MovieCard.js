import React from 'react'
import './MovieCard.css'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  console.log(props.movie);
  return (
    <Card className="m-5">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{props.movie.title}, {props.movie.year}</Card.Title>
        <Card.Subtitle className="mb-2"><Link to={`/director/${props.movie.director.id}`}>{props.movie.director.name}</Link></Card.Subtitle>
        <Card.Text>
          {props.movie.synopsis}
    </Card.Text>
        <Button variant="primary">Editar filme</Button>
      </Card.Body>
    </Card>
  )
}

export default MovieCard