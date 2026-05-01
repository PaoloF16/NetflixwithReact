import { Container, Row, Col, Button } from "react-bootstrap";

const AccountPage = () => {
  return (
    <main className="centerPage">
      <Container className="text-light">
        <Row>
          <Col>
            <h3 className="border-bottom pb-3 mb-4 text-dark">Account</h3>
          </Col>
        </Row>

        <Row className="py-4 border-bottom">
          <Col md={3}>
            <p className="text-secondary small fw-bold mb-3">
              MEMBERSHIP & BILLING
            </p>

            <Button variant="light" size="sm" className="rounded-0 px-4">
              Cancel Membership
            </Button>
          </Col>

          <Col md={9}>
            <AccountInfoRow
              text="student@strive.school"
              link="Change account email"
            />
            <AccountInfoRow text="Password: ********" link="Change password" />
            <AccountInfoRow
              text="Phone: 321 044 1279"
              link="Change phone number"
              className="mb-4"
            />

            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex align-items-center gap-2">
                <PaypalIcon />
                <p className="mb-0 text-secondary">admin@strive.school</p>
              </div>

              <div className="text-end">
                <AccountLink text="Update payment info" className="mb-1" />
                <AccountLink text="Billing details" />
              </div>
            </div>
          </Col>
        </Row>

        <Row className="py-4 border-bottom">
          <Col md={3}>
            <p className="text-secondary small fw-bold mb-3">PLAN DETAILS</p>
          </Col>

          <Col md={9}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="d-flex align-items-center">
                <p className="mb-0 text-secondary">
                  <strong>Premium</strong>
                </p>
                <HdIcon />
              </div>

              <AccountLink text="Change plan" />
            </div>
          </Col>
        </Row>

        <Row className="py-4 border-bottom">
          <Col md={3}>
            <p className="text-secondary small fw-bold mb-3">SETTINGS</p>
          </Col>

          <Col>
            <Row>
              <AccountLink text="Parental Controls" />
              <AccountLink text="Test participation" />
              <AccountLink text="Manage download devices" />
              <AccountLink text="Activate a device" />
              <AccountLink text="Sign out of all devices" />
            </Row>
          </Col>
        </Row>

        <Row className="py-4 border-bottom">
          <Col md={3}>
            <p className="text-secondary small fw-bold mb-3">MY PROFILE</p>
          </Col>

          <Col md={9}>
            <div className="d-flex align-items-center mb-2">
              <div className="d-flex justify-content-between align-items-center w-100">
                <div className="d-flex align-items-center">
                  <img
                    src="/Netflix-assets/assets/avatar.png"
                    alt="Imagen de perfil"
                    className="rounded-circle"
                    width={50}
                    height={50}
                  />

                  <div className="ms-2">
                    <p className="mb-0 text-secondary">
                      <strong>Strive Student</strong>
                    </p>
                  </div>
                </div>

                <div>
                  <AccountLink text="Manage Profiles" />
                  <AccountLink text="Add profile email" />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="pt-3">
          <Col md={4} className="offset-lg-4 text-primary d-flex flex-column">
            <AccountLink text="Language" />
            <AccountLink text="Playback settings" />
            <AccountLink text="Subtitle appearance" />
          </Col>

          <Col md={4} className="offset-lg-4 text-primary d-flex flex-column">
            <AccountLink text="Viewing activity" />
            <AccountLink text="Ratings" />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

const AccountInfoRow = ({ text, link, className = "mb-2" }) => {
  return (
    <div
      className={`d-flex justify-content-between align-items-center ${className}`}
    >
      <p className="mb-0 text-secondary">{text}</p>
      <AccountLink text={link} />
    </div>
  );
};

const AccountLink = ({ text, className = "" }) => {
  return (
    <a
      href="#"
      className={`d-block text-primary text-decoration-none small p-1 ${className}`}
    >
      {text}
    </a>
  );
};

const PaypalIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="30"
      height="30"
      viewBox="0 0 576 512"
      style={{ color: "rgb(74, 85, 101)" }}
    >
      <path
        fill="currentColor"
        d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5c-9.2 0-16-5.2-16-15c0-12.2 9.5-22 21.7-22c9.3 0 16.3 5.7 16.3 15.5M80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7l8.2-.3c11 0 19.5-1.5 21.5-14.2c2.3-13.4-6.2-14.9-17.5-14.9m284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7l8-.3c13 0 22-3 22-18c-.1-10.6-9.6-11.1-18.1-11.1M576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48"
      />
    </svg>
  );
};

const HdIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
    >
      <path
        fill="#000000"
        d="M7.5 12.692h2.615v1.558q0 .19.126.316t.317.126q.19 0 .316-.126T11 14.25v-4.5q0-.19-.126-.316t-.316-.126q-.19 0-.317.126q-.126.126-.126.316v2.058H7.5V9.75q0-.19-.126-.316t-.316-.126q-.19 0-.317.126q-.126.126-.126.316v4.5q0 .19.126.316t.317.126q.19 0 .316-.126t.126-.316v-1.558Zm5.904 2h2.904q.444 0 .76-.316q.317-.316.317-.76v-3.231q0-.445-.317-.761q-.316-.316-.76-.316h-2.904q-.162 0-.283.12T13 9.713v4.576q0 .162.121.283t.283.121Z"
      />
    </svg>
  );
};
export default AccountPage;
