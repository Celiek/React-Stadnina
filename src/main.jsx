import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Oferta from "../Oferta/Oferta";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/oferta" element={<Oferta />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("app")
);
