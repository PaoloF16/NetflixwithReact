import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="p-5 netflix-color">
      {/* SOCIAL ICONS */}
      <Row className="mb-4">
        <Col className="social-icons d-flex gap-3">
          {/* Facebook */}
          <svg width="23" height="23" viewBox="0 0 20 20">
            <path
              fill="#ffffffff"
              d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0Z"
            />
          </svg>

          {/* Instagram */}
          <svg width="23" height="23" viewBox="0 0 432 432">
            <path
              fill="#ffffffff"
              d="M384 99V56q0-11-11-11h-42q-11 0-11 11v43q0 10 11 10h42q11 0 11-10zM53 387h320q11 0 11-11V195h-45q2 12 2 21q0 53-37.5 90.5T213 344t-90.5-37.5T85 216q0-11 2-21H43v181q0 11 10 11zm160.5-256q-35.5 0-60.5 25t-25 60t25 60t60.5 25t60.5-25t25-60t-25-60t-60.5-25zM384 3q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3h341z"
            />
          </svg>

          {/* Twitter */}
          <svg width="23" height="23" viewBox="0 0 1024 832">
            <path
              fill="#ffffffff"
              d="M1024 128q-91 0-121 4q58-35 89-132q-9 6-29.5 19t-33 20.5T898 55t-36 11Q800 0 709 0q-92 0-144.5 38.5T512 160q0 4-1 27t-1 42.5t2 26.5q-134-7-237-53T96 64q-32 55-32 96q0 57 16 94.5t56 64.5q-40 1-72 1q0 152 146 181q-27 8-56 8q-20 0-39-4q19 61 76.5 97.5T320 640q-23 23-54 37t-71 19.5t-65 6.5t-66 1q-4 0-29 1.5T0 706q27 52 110.5 89T322 832q112 0 207.5-36.5t162-97.5T805 558t69-164t22-170q0-3 9.5-5.5T930 211t31.5-13.5t34-26.5t28.5-43z"
            />
          </svg>

          {/* YouTube */}
          <svg width="23" height="23" viewBox="0 0 24 24">
            <path
              fill="#ffffffff"
              d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48a9.55 9.55 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78a2.49 2.49 0 0 0 .61-1a10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54ZM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08Z"
            />
          </svg>
        </Col>
      </Row>

      {/* LINKS */}
      <Row className="footer-links text-light">
        <Col xs={6} md={3} className="d-flex flex-column">
          <span>Audio and Subtitles</span>
          <span>Media Center</span>
          <span>Privacy</span>
          <span>Contact Us</span>
        </Col>

        <Col xs={6} md={3} className="d-flex flex-column">
          <span>Audio Description</span>
          <span>Investor Relations</span>
          <span>Legal Notices</span>
        </Col>

        <Col xs={6} md={3} className="d-flex flex-column">
          <span>Help Center</span>
          <span>Jobs</span>
          <span>Cookie Preferences</span>
        </Col>

        <Col xs={6} md={3} className="d-flex flex-column">
          <span>Gift Cards</span>
          <span>Terms of Use</span>
          <span>Corporate Information</span>
        </Col>
      </Row>

      {/* BUTTON */}
      <Row className="mt-4">
        <Col>
          <Button
            className="styleButton bg-dark border-0"
            style={{ width: "8em" }}
          >
            Service Code
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
