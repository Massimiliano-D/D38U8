import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const SingleMovie = ({ movie }) => {
  return (
    <>
      <Container Fluid>
        <Row>
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col md="auto">
              <Card bg="dark text-white">
                <Card.Img variant="top" src={movie.Poster} />
                <Card.ImgOverlay>
                  <Card.Title>{movie.Title}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default SingleMovie;
