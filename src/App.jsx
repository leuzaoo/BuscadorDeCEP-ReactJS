// Library
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import api from "./services/api";
import Header from "./services/components/header/header";

// Styles
import "./mainStyle.css";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch(e) {
    e.preventDefault();

    if (input === "") {
      alert("Insira um CEP");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Ops, ocorreu um erro ao buscar o CEP.");
      setInput("");
    }
  }

  return (
    <>
      <div>
        <Header />
      </div>

      <form onSubmit={handleSearch} className="container">
        <h1 className="title">Buscador de CEP</h1>

        <div className="inputContainer">
          <input
            className="inputCEP"
            type="text"
            placeholder="digite o CEP..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>

          <button type="submit" className="searchButton" onClick={handleSearch}>
            <FiSearch />
          </button>
        </div>

        {Object.keys(cep).length > 0 && (
          <main className="main">
            <h2 className="cepNumber">CEP: {cep.cep}</h2>
            <div className="localItems">
              <span>Endereço: {cep.logradouro}.</span>
              <span>Bairro: {cep.bairro}.</span>
              <span>Cidade: {cep.localidade}.</span>
            </div>
          </main>
        )}
      </form>
    </>
  );
}

export default App;
