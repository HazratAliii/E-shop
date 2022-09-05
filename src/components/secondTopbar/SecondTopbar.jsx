import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const SecondTopbar = () => {
  return (
    <Navbar
      bg="warning"
      expand="lg"
      className="sticky-top"
      // bg="alert"
      // style={{ color: "white" }}
    >
      <Container fluid bg-primary>
        <Navbar.Brand href="#">HA Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Explore</Nav.Link>
            <div
              style={{
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
                marginLeft: "10%",
                height: "30px",
                marginTop: "2%",
                height: "40%",
              }}
            >
              <input type="text" placeholder="Search" />
              <SearchIcon style={{ cursor: "pointer", marginTop: "1%" }} />
            </div>
          </Nav>
          <Nav.Link href="#" style={{ marginRight: "5%", display: "flex" }}>
            <ShoppingCartIcon />
            <p>2</p>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SecondTopbar;
