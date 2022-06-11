import "./header.css";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <>
      <div className="nav">
        <div className="logotipo">
          <p>LEO</p>
        </div>
        <div className="nav-itens">
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Como funciona</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
