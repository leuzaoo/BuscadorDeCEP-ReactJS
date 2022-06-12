import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="nav">
        <div className="logotipo">
          <p>Logo</p>
        </div>
        <div className="nav-itens">
          <ul>
            <li>
              <Link to="/">Buscador</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/funcionality">Como funciona</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
