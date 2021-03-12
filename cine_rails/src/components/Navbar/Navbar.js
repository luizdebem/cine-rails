import React from 'react'
import { Navbar as NavbarBootstrap, Nav, Form, FormControl, Button, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router';
import './Navbar.css';

const Navbar = ({ location }) => {
  console.log(location);
  return (
    <>
      <NavbarBootstrap bg="dark" variant="dark">
        <NavbarBootstrap.Brand>
          <h1>Cine Rails</h1>
        </NavbarBootstrap.Brand>
        <Row className="mr-auto ml-2">
          <LinkContainer to="/">
            <Nav.Link className={location.pathname === '/' ? 'nav-link current' : 'nav-link'}>Todos os filmes</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/form">
            <Nav.Link className={location.pathname === '/form' ? 'nav-link current' : 'nav-link'}>Adicionar um filme</Nav.Link>
          </LinkContainer>
        </Row>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </NavbarBootstrap>
    </>
  )
}

export default withRouter(Navbar)
