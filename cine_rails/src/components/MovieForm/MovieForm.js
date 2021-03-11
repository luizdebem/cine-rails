import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { ApiService } from '../../services/ApiService';

const MovieForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    director: {
      name: ''
    },
    year: '',
    rate: 1,
    synopsis: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    setValidated(true);

    if (form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }

    const res = await new ApiService().postMovie(formData);
  }

  return (
    <Container className="mt-5" style={{ color: 'white' }}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Título do filme</Form.Label>
          <Form.Control required type="text" placeholder="Título" onChange={(e) => { setFormData({ ...formData, title: e.target.value }) }} />
          <Form.Control.Feedback type="invalid">
            Insira um título.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Diretor do filme</Form.Label>
          <Form.Control required type="text" placeholder="Diretor" onChange={(e) => { setFormData({ ...formData, director: { name: e.target.value } }) }} />
          <Form.Control.Feedback type="invalid">
            Insira um diretor.
          </Form.Control.Feedback>
        </Form.Group>

        <Row>
          <Col>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Ano de lançamento</Form.Label>
              <Form.Control required type="text" placeholder="Ano" onChange={(e) => { setFormData({ ...formData, year: e.target.value }) }} />
              <Form.Control.Feedback type="invalid">
                Insira um ano de lançamento.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Avaliação</Form.Label>
              <Form.Control required as="select" onChange={(e) => { setFormData({ ...formData, rate: e.target.value }) }}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Insira uma sinopse</Form.Label>
          <Form.Control required as="textarea" rows={3} onChange={(e) => { setFormData({ ...formData, synopsis: e.target.value }) }} />
          <Form.Control.Feedback type="invalid">
            Insira uma sinopse.
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  )
}

export default MovieForm
