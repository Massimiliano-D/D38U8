import SingleMovie from "./SingleMovie";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

const TVShows = ({ title, movieGenre }) => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    movieFetch(movieGenre);
  }, []);

  const movieFetch = async (query) => {
    const url = `http://www.omdbapi.com/?apikey=c3847fc3&s=${query}`;

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const movies = data.Search;

      setMovieList(movies);
      setIsLoading(false);
    } else {
      const message = response.text();
      console.log(message);
      setIsLoading(false);
    }
  };

  return (
    <Container fluid>
      <h2>{title}</h2>
      <Row>
        {isLoading && <Spinner animation="border" role="status"></Spinner>}
        {movieList &&
          movieList.map((movie) => (
            <Col md="auto" className="m-3" key={movie.imdbID}>
              <SingleMovie movie={movie} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};
export default TVShows;
