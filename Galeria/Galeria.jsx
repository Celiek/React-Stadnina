import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./galeria.css";

import NavbarMain from "../navbar/NavbarMain";
import FooterMain from "../footerMain/FooterMain";

function Galeria() {
  return (
    <>
    <NavbarMain/>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="col">Pierwsza kolumna, pierwszy rząd</div>
              <div class="col">Pierwsza kolumna, drugi rząd</div>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <div class="col">Druga kolumna, pierwszy rząd</div>
              <div class="col">Druga kolumna, drugi rząd</div>
            </div>
          </div>
          <div class="col">Trzecia kolumna</div>
        </div>
      </div>
      <FooterMain/>
    </>
  );
}

export default Galeria;
