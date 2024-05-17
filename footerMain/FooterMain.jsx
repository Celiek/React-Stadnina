import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import "./footer.css";


function FooterMain() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={3} mb={5} mb-lg={0}>
            <h4 className="text-uppercase mb-4">Nasza Lokalizacja</h4>
            <p className="lead mb-0">
              Adres ul. Miejska 5, 89-600 Dziemiany
              <br />
              Telefon 594 203 293
              <br />
              E-mail: kontakt@osrodekpegaz.pl
            </p>
          </Col>
          <Col lg={3} mb={5} mb-lg={0}>
            <h4 className="text-uppercase mb-4"> Godziny Otwarcia</h4>
            <span className="text-uppercase mb-4">
              Poniedziałek 6:00:18:00
            </span>{" "}
            <br />
            <span className="text-uppercase mb-4">
              Wtorek 6:00:18:00
            </span>{" "}
            <br />
            <span className="text-uppercase mb-4">
              Środa 6:00:18:00
            </span>{" "}
            <br />
            <span className="text-uppercase mb-4">
              Czwartek 6:00:18:00
            </span>{" "}
            <br />
            <span className="text-uppercase mb-4">
              Piątek 6:00:18:00
            </span>{" "}
            <br />
          </Col>
          <Col lg={3} mb={5} mb-lg={0}>
            <h4 className="text-uppercase mb-4">Socjal Media</h4>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.facebook.com/"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://twitter.com/"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.linkedin.com/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://github.com/"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Col>
          <Col lg={3}>
            <h4 className="text-uppercase mb-4">O aplikacji</h4>
            <p className="lead mb-0">
              4System Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate itaque ab laudantium nulla voluptatem magni impedit
              repellat nemo corrupti asperiores pariatur earum neque non, quidem
              nesciunt! Voluptate commodi modi illum.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterMain;
