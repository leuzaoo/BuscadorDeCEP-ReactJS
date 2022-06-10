// Library
import { VscSearch } from "react-icons/vsc";



function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="inputContainer">
        <input className="inputCEP" type="text" placeholder="digite o cep..."></input>
        <button type="submit" className="searchButton">
          <VscSearch />
        </button>
      </div>
    </div>
  );
}

export default App;
