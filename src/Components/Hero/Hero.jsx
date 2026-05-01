import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="hero-banner">
      {/* BACKGROUND */}
      <div className="hero-banner-bg">
        <img src="stranger-things.jpg" alt="Stranger Things banner" />
      </div>

      {/* OVERLAY */}
      <div className="hero-banner-overlay"></div>

      {/* CONTENT */}
      <Container className="hero-banner-content">
        {/* NETFLIX KICKER */}
        <div className="hero-kicker">
          <img src="/netflix-3.svg" alt="" width={200} />
        </div>

        {/* TITLE */}
        <h1 className="hero-title">Stranger Things</h1>

        {/* META */}
        <div className="hero-meta">
          <span>Show</span>
          <span>Fantasy</span>
          <span>2022</span>
          <span>TV-14</span>
        </div>

        {/* DESCRIPTION */}
        <p className="hero-description">
          Stranger Things is a thrilling sci-fi mystery set in the 1980s, where
          a group of friends in Hawkins uncover dark secrets, government
          experiments, and a terrifying parallel dimension known as the Upside
          Down.
        </p>

        {/* ACTIONS */}
        <div className="hero-actions d-flex gap-3">
          {/* PLAY */}
          <Button
            variant="light"
            className="btn-hero-play d-flex align-items-center justify-content-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
            >
              <circle
                cx="13"
                cy="13"
                r="11"
                fill="none"
                stroke="#000"
                strokeWidth="2"
              />
              <path fill="#000" d="m17 13l-6 4V9" />
            </svg>
          </Button>

          {/* INFO */}
          <Button variant="light" className="btn-hero-info">
            More Info
          </Button>
        </div>
      </Container>

      {/* BADGE */}
      <div className="hero-badge">Season 5 Coming Soon</div>
    </section>
  );
};
export default Hero;
