import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsSearch } from "react-icons/bs";
import { FaWindows } from "react-icons/fa";

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      style={{ border: "1px solid black" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <FaWindows size={"2em"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="sample">Sample</Nav.Link>
            <Nav.Link href="features">Features</Nav.Link>
            <Nav.Link href="layout">Layout</Nav.Link>
            <Nav.Link href="shops">Our Shops</Nav.Link>
            <Nav.Link href="themes">Buy Themes</Nav.Link>
            <Nav.Link eventKey={2} href="search">
              <BsSearch />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
