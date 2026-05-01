import { Container, Dropdown, ButtonGroup, Button } from "react-bootstrap";

const DropdownMovies = () => {
  return (
    <section className="mb-4">
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center flex-wrap content-topbar">
          {/* LEFT SIDE */}
          <div className="d-flex align-items-center flex-wrap gap-3">
            <h2 className="mb-0 text-light">TV Shows</h2>

            {/* DROPDOWN */}
            <Dropdown>
              <Dropdown.Toggle variant="secondary" className="border-0">
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Fantasy</Dropdown.Item>
                <Dropdown.Item href="#">Horror</Dropdown.Item>
                <Dropdown.Item href="#">Anime</Dropdown.Item>
                <Dropdown.Item href="#">Comedy</Dropdown.Item>
                <Dropdown.Item href="#">Documentary</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* RIGHT SIDE */}
          <ButtonGroup aria-label="View toggle">
            <Button variant="outline-secondary" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z"
                />
              </svg>
            </Button>

            <Button variant="outline-secondary" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M3 3h5v5H3V3zm9 0h5v5h-5V3zM3 12h5v5H3v-5zm9 0h5v5h-5v-5z"
                />
              </svg>
            </Button>
          </ButtonGroup>
        </div>
      </Container>
    </section>
  );
};
export default DropdownMovies;
