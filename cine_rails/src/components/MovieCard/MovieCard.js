import React from 'react'
import './MovieCard.css'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  return (
    <Card className="m-5">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body className="card-body">
        <Card.Title>{props.movie.title}, {props.movie.year}</Card.Title>
        <Card.Subtitle className="mb-2">
          {props.movie.director && <Link to={{ pathname: `/director/${props.movie.director.id}`, name: props.movie.director.name }}>{props.movie.director.name}</Link>}
        </Card.Subtitle>
        <Card.Text className="mb-5">
          {props.movie.synopsis}
        </Card.Text>
        <Button className="submit-btn" variant="primary">Editar filme</Button>
      </Card.Body>
    </Card>
  )
}

export default MovieCard
