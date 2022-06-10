// Library
import { FiSearch } from "react-icons/fi";

// Styles
import "./mainStyle.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="inputContainer">
        <input
          className="inputCEP"
          type="text"
          placeholder="digite o cep..."
        ></input>
        <button type="submit" className="searchButton">
          <FiSearch />
        </button>
      </div>

      <main className="main">
        <h2 className="cepNumber">CEP: 13205-730</h2>
        <div className="localItems">
          <span>Rua: Nome gerado aleatoriamente.</span>
          <span>Complemento: Complemento gerado aleatoriamente.</span>
          <span>Bairro: Bairro aleatório.</span>
          <span>Cidade: Cidade - Estado</span>
        </div>
      </main>
    </div>
  );
}

export default App;
