import React from 'react'
import { Navbar as NavbarBootstrap, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navbar = () => {
  return (
    <>
      <NavbarBootstrap bg="dark" variant="dark">
        <NavbarBootstrap.Brand>
          <h1>Cine Rails</h1>
        </NavbarBootstrap.Brand>
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Todos os filmes</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/add">
            <Nav.Link>Adicionar um filme</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </NavbarBootstrap>
    </>
  )
}

export default Navbar
