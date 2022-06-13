import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

import About from "./services/components/about/about";
import Funcionality from "./services/components/funcionality/funcionality";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/funcionality" element={<Funcionality />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);
