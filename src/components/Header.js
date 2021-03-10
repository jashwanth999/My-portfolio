import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import "../styles.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Header({ back, scroll }) {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <Navbar
      data-aos={scroll > 80 ? "fade-up" : ""}
      fixed="top"
      id="header"
      expand="lg"
      style={{ backgroundColor: back }}
    >
      <Navbar.Brand
        className="header"
        id="head"
        style={{ fontWeight: "bold", color: "#E2789A", fontSize: 30 }}
      >
        JASHWANTH
      </Navbar.Brand>
      <Navbar.Toggle style={{ fontSize: 16, backgroundColor: "#D7D7D7" }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            style={{
              fontWeight: "bold",
              color: scroll < 550 ? "#E1054B" : "white",
              fontSize: 20
            }}
          >
            <Link to="image" duration={1000}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link
            style={{
              fontWeight: "bold",
              color: scroll >= 550 && scroll < 1000 ? "#E1054B" : "white",
              fontSize: 20
            }}
          >
            <Link to="about" duration={1000}>
              About
            </Link>
          </Nav.Link>
          <Nav.Link
            h
            style={{
              fontWeight: "bold",
              color: scroll >= 1000 && scroll < 1800 ? "#E1054B" : "white",
              fontSize: 20
            }}
          >
            <Link to="resume" duration={1000}>
              Resume
            </Link>
          </Nav.Link>
          <Nav.Link
            style={{
              fontWeight: "bold",
              color: scroll >= 1800 && scroll < 2400 ? "#E1054B" : "white",
              fontSize: 20
            }}
          >
            <Link to="projects" duration={1000}>
              Projects
            </Link>
          </Nav.Link>
          <Nav.Link
            style={{
              fontWeight: "bold",
              color: scroll >= 2400 && scroll < 3000 ? "#E1054B" : "white",
              fontSize: 20
            }}
          >
            <Link to="contact" duration={1000}>
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
