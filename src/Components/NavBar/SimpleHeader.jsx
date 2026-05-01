import { Link } from "react-router-dom";

export const SimpleHeader = () => {
  return (
    <header className="headerShadow">
      <div>
        <img
          src="/netflix_logo.png"
          alt="Netflix Logo"
          width={150}
          as={Link}
          to="/"
        />
      </div>
    </header>
  );
};
