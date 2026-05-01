import { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  NavDropdown,
  Form,
  ListGroup,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const TMDB_API_KEY = "9a50481df5f7ab65610d958387128aa9";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const NavBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchOpen) return;

    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    const delay = setTimeout(() => {
      fetchMoviesBySearch(searchQuery);
    }, 500);

    return () => clearTimeout(delay);
  }, [searchQuery, searchOpen]);

  const fetchMoviesBySearch = async (query) => {
    try {
      setLoading(true);

      const response = await fetch(
        `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${encodeURIComponent(
          query,
        )}`,
      );

      const data = await response.json();
      setSearchResults(data.results || []);
    } catch (error) {
      console.error("Error searching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const getMovieDetails = async (movieId) => {
    try {
      const response = await fetch(
        `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`,
      );

      const data = await response.json();

      setSelectedMovie(data);
      setShowModal(true);
      setSearchOpen(false);
      setSearchQuery("");
      setSearchResults([]);
    } catch (error) {
      console.error("Error getting movie details:", error);
    }
  };

  const handleCloseSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <>
      <Navbar expand="lg" className="netflix-color" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="/netflix_logo.png" alt="NetflixLogo" width={90} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="#">Tv Shows</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">Ratings</Nav.Link>
            </Nav>

            <Nav className="ms-auto d-flex align-items-center gap-3 position-relative">
              <Button
                variant="link"
                className="text-light p-0"
                onClick={() =>
                  searchOpen ? handleCloseSearch() : setSearchOpen(true)
                }
              >
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

              {searchOpen && (
                <div className="search-box position-absolute end-0 top-100 mt-2">
                  <Form.Control
                    type="text"
                    placeholder="Search movie..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />

                  {loading && (
                    <div className="search-loading mt-2 p-2 text-light">
                      Loading...
                    </div>
                  )}

                  {!loading && searchResults.length > 0 && (
                    <ListGroup className="search-results mt-2">
                      {searchResults.slice(0, 6).map((movie) => (
                        <ListGroup.Item
                          key={movie.id}
                          action
                          onClick={() => getMovieDetails(movie.id)}
                          className="d-flex align-items-center gap-2"
                        >
                          <img
                            src={
                              movie.poster_path
                                ? `${IMAGE_URL}${movie.poster_path}`
                                : "/placeholder.jpg"
                            }
                            alt={movie.title}
                            width={40}
                          />

                          <div>
                            <strong>{movie.title}</strong>
                            <p className="mb-0 small text-secondary">
                              {movie.release_date
                                ? movie.release_date.slice(0, 4)
                                : "No date"}
                            </p>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </div>
              )}

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

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        {selectedMovie && (
          <div className="movie-modal-content">
            <Modal.Header closeButton>
              <Modal.Title>{selectedMovie.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img
                src={
                  selectedMovie.poster_path
                    ? `${IMAGE_URL}${selectedMovie.poster_path}`
                    : "/placeholder.jpg"
                }
                alt={selectedMovie.title}
                className="w-100 mb-3 rounded"
              />

              <p>{selectedMovie.overview || "No description available."}</p>

              <p>
                <strong>Rating TMDB:</strong> ⭐{" "}
                {selectedMovie.vote_average?.toFixed(1)}
              </p>

              <p>
                <strong>Release date:</strong>{" "}
                {selectedMovie.release_date || "No date"}
              </p>

              <p>
                <strong>Genres:</strong>{" "}
                {selectedMovie.genres?.map((genre) => genre.name).join(", ")}
              </p>
            </Modal.Body>
          </div>
        )}
      </Modal>
    </>
  );
};

export default NavBar;
