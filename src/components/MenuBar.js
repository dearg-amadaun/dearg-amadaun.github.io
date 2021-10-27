import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function MenuBar() {
    
    return (
      <menubar className="mt-5">
        <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Container fluid={true}>
                <Navbar.Brand>Brendan Rottmund</Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                  <Nav className="ml-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </menubar>
    );
  }  

  export default MenuBar;
