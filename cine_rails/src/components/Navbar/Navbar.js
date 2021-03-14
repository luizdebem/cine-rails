import React, { useState } from 'react'
import { Navbar as NavbarBootstrap, Nav, Form, FormControl, Button, Row, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router';
import './Navbar.css';
import { useHistory } from 'react-router-dom';

const Navbar = ({ location }) => {
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/search?title=${searchInput}`, )
  }

  return (
    <>
      <NavbarBootstrap bg="light" expand="lg">
        <NavbarBootstrap.Brand><LinkContainer to="/"><h1>Cine Rails</h1></LinkContainer></NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link className={location.pathname === '/' ? 'nav-link current' : 'nav-link'}>Todos os filmes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/form">
              <Nav.Link className={location.pathname === '/form' ? 'nav-link current' : 'nav-link'}>Adicionar um filme</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form inline onSubmit={handleSubmit}>
            <FormControl type="text" placeholder="Busque algum filme!" className="mr-sm-2" onChange={(e) => setSearchInput(e.target.value)} />
            <Button className="spaced" type="submit" variant="outline-info">Buscar</Button>
          </Form>
        </NavbarBootstrap.Collapse>
      </NavbarBootstrap>
    </>
  )
}

export default withRouter(Navbar)
