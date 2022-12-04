import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const NavbarTop = props => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" >
        <Container>
          <Navbar.Brand>Todo page </Navbar.Brand>
        </Container>
      </Navbar>
    )
   
}
export default NavbarTop