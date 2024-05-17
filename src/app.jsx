import React from "react";
import "./main.css";
import "bootstrap/dist/css/bootstrap.css";
import NavbarMain from "../navbar/NavbarMain";
import FooterMain from "../footerMain/FooterMain";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function App() {
  return (
    <>
      <NavbarMain />
      <Container fluid>
        <Row>
          <Col className="welcome-text" sm={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            aspernatur delectus laboriosam. Magnam nemo odit optio animi labore
            nulla iusto dignissimos delectus ullam, repellendus aperiam quaerat
            voluptas, quidem aut. Tenetur.
          </Col>
          <Col className="welcome-text" sm={8}>
            <div
              style={{
                backgroundColor: "rgba(147, 87, 0, 0.52)",
                borderRadius: "10px",
                border: "2px solid black",
              }}
            >
              <p className="p-welcome-text">
                Witaj na stronie naszej stadniny koni! Cieszymy sie że
                odwiedzasz nasza stronę, jesteśmy dumni z naszej stadniny koni
                która, jest domem dla wielu pięknych i zdowych koni różnych ras.
              </p>
              <p className="p-welcome-text">
                Nasza pasja i miłość do tych wspaniałych zwierząt jest tym, co
                napędza nas każdego dnia. Nasza stadnina oferuje szeroki zakres
                usług, w tym lekcje jazdy konnej dla osób w każdym wieku,
                treningi dla koni a także możliwość adopcji koni. Zawsze staramy
                się zapewnić naszym koniom najlepszą opiekę i miłość na jaką
                zasługują.
              </p>
              <p className="p-welcome-text">
                Zapraszamy cię do zapozniania się z naszą stroną i odkrycia, co
                nasza stadnina ma do zaoferowania. Jeśli masz jakiekolwiek
                pytania lub chciałbyś odwiedzić nas osobiście, skontaktuj się z
                nami. Czekamy na ciebie z otwartymi ramionami! Dziękujemy za
                odwiedziny i mamy nadzieję, że pokochasz nasza stadninę tak jak
                my! Chcesz dowiedzieć się więcej o nas &nbsp;
                <a href="">Kliknij</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ height: "500px" }}></div> {/* Przerwa */}
      <FooterMain />
    </>
  );
}

export default App;
