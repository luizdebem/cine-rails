import React from 'react'
import './MovieCard.css'
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  return (
    <Col xs={12} md={6} lg={4} className="p-3">
      <Card className="round h-100">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body className="card-body">
          <Card.Title>{props.movie.title}, {props.movie.year}</Card.Title>
          <Card.Subtitle className="mb-2">
            {props.movie.director && <Link to={{ pathname: `/director/${props.movie.director.id}`, name: props.movie.director.name }}>{props.movie.director.name}</Link>}
          </Card.Subtitle>
          <Card.Subtitle className="mt-2 mb-2">
            Nota: {props.movie.rate}
          </Card.Subtitle>
          <Card.Text className="mb-5">
            {props.movie.synopsis}
          </Card.Text>
          <Link to={{ pathname: '/form', state: { movie: props.movie } }}>
            <Button className="submit-btn" variant="primary">Editar filme</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default MovieCard
