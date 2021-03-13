import React, { useState } from 'react'
import { Navbar as NavbarBootstrap, Nav, Form, FormControl, Button, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router';
import './Navbar.css';
import { useHistory } from 'react-router-dom';

const Navbar = ({ location }) => {
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/search?title=${searchInput}`)
  }

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
        <Form inline onSubmit={handleSubmit}>
          <FormControl type="text" placeholder="Busque algum filme!" className="mr-sm-2" onChange={(e) => setSearchInput(e.target.value)} />
          <Button type="submit" variant="outline-info">Buscar</Button>
        </Form>
      </NavbarBootstrap>
    </>
  )
}

export default withRouter(Navbar)
