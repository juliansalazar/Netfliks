import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom'

export default function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Netfliks</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <NavLink to={"/comedia"} className={"nav-link"}>Comedia</NavLink>  */}
            {/* <Nav.Link href="#action1">Home</Nav.Link> */}
            {/* <Nav.Link href="#action2">Categorias</Nav.Link> */}
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item> <NavLink to={"/comedia"} className={"nav-link"}>Comedia</NavLink></NavDropdown.Item>
              <NavDropdown.Item> <NavLink to={"/independientes"} className={"nav-link"}>Independientes</NavLink></NavDropdown.Item>
              <NavDropdown.Item> <NavLink to={"/cienciaficcion"} className={"nav-link"}>Ciencia Ficción</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Sorprendeme!</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
