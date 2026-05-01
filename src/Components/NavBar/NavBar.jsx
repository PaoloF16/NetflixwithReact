import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="netflix-color" variant="dark">
      <Container fluid>
        {/* LOGO */}
        <Navbar.Brand as={Link} to="/" href="#">
          <img src="/netflix_logo.png" alt="NetflixLogo" width={90} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* LINKS IZQUIERDA */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" href="#">
              Home
            </Nav.Link>
            <Nav.Link href="#">Tv Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">Ratings</Nav.Link>
          </Nav>

          {/* DERECHA (Search, Bell, Profile) */}
          <Nav className="ms-auto d-flex align-items-center gap-3">
            {/* SEARCH */}
            <Button variant="link" className="text-light p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Button>

            {/* BELL */}
            <a href="#" className="text-light d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
            </a>

            {/* PROFILE DROPDOWN */}
            <NavDropdown
              id="profile-dropdown"
              align="end"
              title={
                <img
                  src="/avatar.png"
                  alt="profile"
                  width={30}
                  className="rounded"
                />
              }
            >
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
