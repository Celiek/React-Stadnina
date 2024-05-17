import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./oferta.css";

import FooterMain from "../footerMain/FooterMain";
import NavbarMain from "../navbar/NavbarMain";

function Oferta() {
  return (
    <>
      <NavbarMain />
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="vertical-text">Oferta</div>
          </div>
          <div class="col-sm">
            <div class="card" style={{ width: "20em" }}>
              <img
                class="card-image-top"
                src="./src/assets/pensjonatdlakoni.png"
                alt="nie dzoała pasjonatdla koni"
              />
              <div class="card-body">
                <h5 class="card-title">Pensjonat dla Koni</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <h5></h5>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" style={{ width: "20rem" }}>
              <img
                class="card-image-top"
                src="./src/assets/obozyjezdzieckie.png"
                alt="nie działaja obozy jezdzieckie"
              />
              <div class="card-body">
                <h5 class="card-title">Obozy Jezdzieckie</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" style={{ width: "20rem" }}>
              <img
                class="card-image-top"
                src="./src/assets/zawody.png"
                alt="nie dzialaja zawody"
              />
              <div class="card-body">
                <h5 class="card-title">Zawody dla Koni</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="button-wiecej">
        Więcej Szczegółów
      </button>
      <div style={{ height: "500px" }}></div> {/* Przerwa */}
      <img
        src="./src/assets/LinieZawody.png"
        alt="linia się nie ładuje"
      />
      <div style={{height: "200px"}}>

      </div>
      <FooterMain />
    </>
  );
}

export default Oferta;
