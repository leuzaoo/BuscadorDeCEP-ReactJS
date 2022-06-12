import React from "react";
import Header from "../header/header";
import "./funcionality.css";

function Funcionality() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="container">
        <div className="card-box">
          <h2 className="title-name card">Para um bom funcionamento:</h2>
          <p>Insira somente números;</p>
          <p>Apenas endereços do <span className="country">Brasil</span>;</p>
          <p>Não coloque espaço entre os números.</p>
        </div>
      </div>
    </>
  );
}

export default Funcionality;
