import Gallery from "./Gallery";
import { Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
const Homepage = () => {
  return (
    <>
      <Row className="m-3">
        <h2 className="m-3">Tv Shows</h2>
        <Dropdown className="m-4">
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Genres &nbsp;
          </Dropdown.Toggle>

          <Dropdown.Menu className="bg-dark ">
            <Dropdown.Item href="#" className="text-white">
              Comedy
            </Dropdown.Item>
            <Dropdown.Item href="#" className="text-white">
              Drama
            </Dropdown.Item>
            <Dropdown.Item href="#" className="text-white">
              Thriller
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>
      <Gallery movieGenre="hobbit" title="Hobbit" />
      <Gallery movieGenre="lord of the rings" title="Lord of the Rings" />
      <Gallery movieGenre="harry potter" title="Harry Potter" />
    </>
  );
};
export default Homepage;
