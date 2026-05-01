import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";

const EditProfile = () => {
  return (
    <Container className="py-5 text-light netflix-color m-2">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={9}>
          <h1 className="display-2 border-bottom pb-3 mb-4">Edit Profile</h1>

          <Row>
            <Col xs={12} md={3} className="mb-4 mb-md-0">
              <img
                src="/kids_icon.png"
                alt="avatar"
                className="img-fluid"
                width={150}
                height={150}
              />
            </Col>

            <Col xs={12} md={9}>
              <div className="pb-4 border-bottom">
                <Form.Group className="mb-4">
                  <Form.Control
                    type="text"
                    className="rounded-0 border-0 text-light bg-secondary"
                    placeholder="Strive Student"
                  />
                </Form.Group>

                <h3 className="h4 mb-3">Language:</h3>

                <Dropdown>
                  <Dropdown.Toggle
                    variant="dark"
                    className="border border-light rounded-0"
                  >
                    English
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">English</Dropdown.Item>
                    <Dropdown.Item href="#">Español</Dropdown.Item>
                    <Dropdown.Item href="#">Français</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="py-4 border-bottom">
                <h3 className="h4 mb-3">Maturity Settings:</h3>

                <Button
                  variant="secondary"
                  className="rounded-0 text-uppercase mb-3"
                >
                  All Maturity Ratings
                </Button>

                <p className="mb-3">
                  Show titles of <strong>all maturity ratings</strong> for this
                  profile.
                </p>

                <Button variant="outline-light" className="rounded-0 px-4">
                  EDIT
                </Button>
              </div>

              <div className="py-4">
                <h3 className="h4 mb-3">Autoplay Controls</h3>

                <Form.Check
                  type="checkbox"
                  id="autoplayNext"
                  label="Autoplay next episode in a series on all devices."
                  defaultChecked
                  className="mb-3 rounded-0"
                />

                <Form.Check
                  type="checkbox"
                  id="autoplayPreview"
                  label="Autoplay previews while browsing on all devices."
                  defaultChecked
                  className="rounded-0"
                />
              </div>
            </Col>
          </Row>

          <Row className="border-top mt-4 pt-4">
            <Col className="d-flex flex-wrap gap-3">
              <Button variant="light" className="rounded-0 px-4">
                SAVE
              </Button>

              <Button variant="outline-light" className="rounded-0 px-4">
                CANCEL
              </Button>

              <Button variant="outline-light" className="rounded-0 px-4">
                DELETE PROFILE
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default EditProfile;
