import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

  return (
    <>
      <div className={active ? "icon iconActive" : "icon"} onClick = {ToggleMode}>
        <div className="hamburguer hamburguerIcon"></div>
      </div>
      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        <div className="nav">
          <div className="logotipo">
            <p>Logo</p>
          </div>
          <div className="nav-itens">
            <ul>
              <li>
                <Link className="itens-name" to="/">Buscador</Link>
              </li>
              <li>
                <Link className="itens-name" to="/about">Sobre</Link>
              </li>
              <li>
                <Link className="itens-name" to="/funcionality">Como funciona</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
