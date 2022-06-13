import React from "react";
import Header from "../header/header";
import "./about.css";

function About() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="container">
        <div className="about">
          <h2>Desenvolvido por:</h2>
          <p className="dev-name">Leonardo Costa de Oliveira;</p>
          <p className="function-name">Desenvolvedor Frontend.</p>
        </div>
      </div>
    </>
  );
}

export default About;
