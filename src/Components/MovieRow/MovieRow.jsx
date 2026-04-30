import { useEffect, useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const API_KEY = "9a50481df5f7ab65610d958387128aa9";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const MovieRow = ({ title = "Trending Now", genreId = "" }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url;

        if (genreId) {
          url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}`;
        } else {
          url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        }

        console.log("title:", title, "genreId:", genreId);
        console.log(url);

        const response = await fetch(url);
        const data = await response.json();

        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [genreId, title]);

  const groupedMovies = [];

  for (let i = 0; i < movies.length; i += 4) {
    groupedMovies.push(movies.slice(i, i + 4));
  }

  return (
    <section className="mb-4">
      <Container fluid>
        <div className="section-heading px-1">
          <h3 className="mb-0 text-white">{title}</h3>
        </div>

        <Carousel indicators={false}>
          {groupedMovies.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="g-2">
                {group.map((movie) => (
                  <Col key={movie.id} xs={6} md={3}>
                    <img
                      src={
                        movie.poster_path
                          ? `${IMAGE_URL}${movie.poster_path}`
                          : "/placeholder.jpg"
                      }
                      className="movie-card"
                      alt={movie.title}
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};
