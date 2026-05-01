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
                d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5c-9.2 0-16-5.2-16-15c0-12.2 9.5-22 21.7-22c9.3 0 16.3 5.7 16.3 15.5M80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7l8.2-.3c11 0 19.5-1.5 21.5-14.2c2.3-13.4-6.2-14.9-17.5-14.9m284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7l8-.3c13 0 22-3 22-18c-.1-10.6-9.6-11.1-18.1-11.1M576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48M128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7c28.6 0 46.1-17 46.1-45.8m84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2c-5.8-8.5-14.2-10-23.7-10c-24.5 0-43.2 21.5-43.2 45.2c0 19.5 12.2 32.2 31.7 32.2c9 0 20.2-4.9 26.5-11.9c-.5 1.5-1 4.7-1 6.2c0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9m40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7c0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39l-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5c0 1.2 19.5 56.8 21.2 62.1c-2.7 3.8-20.5 28.6-20.5 31.6c0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6m159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7c28.4 0 45.9-17 45.9-45.8m84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2c-5.5-8.5-14-10-23.7-10c-24.5 0-43.2 21.5-43.2 45.2c0 19.5 12.2 32.2 31.7 32.2c9.3 0 20.5-4.9 26.5-11.9c-.3 1.5-1 4.7-1 6.2c0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9m47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104l-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2zm-90 51.8c-12.2 0-21.7 9.7-21.7 22c0 9.7 7 15 16.2 15c12 0 21.7-9.2 21.7-21.5c.1-9.8-6.9-15.5-16.2-15.5"
              />
            </svg>
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex align-items-center gap-2">
                <div></div>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000000"
                    d="M7.5 12.692h2.615v1.558q0 .19.126.316t.317.126q.19 0 .316-.126T11 14.25v-4.5q0-.19-.126-.316t-.316-.126q-.19 0-.317.126q-.126.126-.126.316v2.058H7.5V9.75q0-.19-.126-.316t-.316-.126q-.19 0-.317.126q-.126.126-.126.316v4.5q0 .19.126.316t.317.126q.19 0 .316-.126t.126-.316v-1.558Zm5.904 2h2.904q.444 0 .76-.316q.317-.316.317-.76v-3.231q0-.445-.317-.761q-.316-.316-.76-.316h-2.904q-.162 0-.283.12T13 9.713v4.576q0 .162.121.283t.283.121Zm.48-.884v-3.616h2.308q.116 0 .212.096q.096.097.096.212v3q0 .115-.096.212q-.096.096-.212.096h-2.307ZM4.616 19q-.69 0-1.152-.462Q3 18.075 3 17.385V6.615q0-.69.463-1.152Q3.925 5 4.615 5h14.77q.69 0 1.152.463q.463.462.463 1.152v10.77q0 .69-.462 1.152q-.463.463-1.153.463H4.615Zm0-1h14.77q.23 0 .423-.192q.192-.193.192-.423V6.615q0-.23-.192-.423Q19.615 6 19.385 6H4.615q-.23 0-.423.192Q4 6.385 4 6.615v10.77q0 .23.192.423q.193.192.423.192ZM4 18V6v12Z"
                  />
                </svg>
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
                    src="/avatar.png"
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
