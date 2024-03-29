import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

export const NavBar = () => {

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Sistema de Cálculos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/'>
                <Nav.Link href="#home">Home</Nav.Link>
            </Link>

            <NavDropdown title="Funções" id="basic-nav-dropdown">

              <NavDropdown.Item href="#action/1">1. Calculadora de Salário</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">2. Análise Numérica</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">3. Fibonacci</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )

}

export default NavBar;
