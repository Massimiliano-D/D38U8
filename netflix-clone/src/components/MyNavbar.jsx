import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
const MyNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="myNavbar">
        <Navbar.Brand className="myNavbar">
          <img src="assets/logo.png" alt="logo" id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="myNavbar" />
        <Navbar.Collapse id="responsive-navbar-nav" className="myNavbar">
          <Nav className="mr-auto myNavbar">
            <Link to="/" className="nav-link myNavbar">
              Home{" "}
            </Link>
            <Link to="/TvShows" className="nav-link myNavbar">
              TV Shows
            </Link>
            <Nav.Link href="#" className="myNavbar ">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="myNavbar ">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="myNavbar ">
              My List
            </Nav.Link>
          </Nav>
          <Nav className="myNavbar ">
            <i className="fa fa-search icons myNavbar m-2"></i>
            <div id="kids" className="myNavbar m-2">
              KIDS
            </div>
            <i className="fa fa-bell icons myNavbar m-2"></i>
            <i className="fa fa-user icons myNavbar m-2"></i>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
