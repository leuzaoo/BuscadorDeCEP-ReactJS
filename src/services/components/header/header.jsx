import "./header.css";

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
