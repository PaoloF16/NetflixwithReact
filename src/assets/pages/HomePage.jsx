import NavBar from "../../Components/NavBar/NavBar";
import Hero from "../../Components/Hero/Hero";
import DropdownMovies from "../../Components/DropdownMovies/DropdownMovies";
import MovieRow from "../../Components/MovieRow/MovieRow";
import Footer from "../../Components/Footer/footer";

const HomePage = () => {
  return (
    <>
      <body className="netflix-color">
        <header>
          <NavBar />
        </header>
        <main>
          <Hero></Hero>
          <DropdownMovies />
          <MovieRow title="Trending Now" />
          <MovieRow title="Action" genreId={28} />
          <MovieRow title="Comedy" genreId={35} />
          <MovieRow title="Horror" genreId={27} />
          <MovieRow title="Fantasy" genreId={14} />
          <MovieRow title="Adventure" genreId={12} />
          <MovieRow title="Crime" genreId={80} />
          <MovieRow title="Music" genreId={10402} />
          <MovieRow title="Tv Movie" genreId={10770} />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
};
export default HomePage;
