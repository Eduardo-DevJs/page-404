import logo from "./assets/404errors.png";
import vector from "./assets/Vector.svg";
import navegador from "./assets/Group 5.svg";
import sailorLeft from "./assets/sailor_left.png";
import sailorRight from "./assets/sailor_right.png";
import shadowYellow from "./assets/Vector.png";
import "./App.css";

export default function App() {
  return (
    <div>
      <header className="container header">
        <img src={logo} alt="Logo 404" />

        <nav>
          <ul className="menu">
            <li>Home</li>
            <li>Produtos</li>
            <li>Sobre nós</li>
            <li>Preço</li>
            <li>Contato</li>
          </ul>
        </nav>

        <div className="sign">
          <a href="#">Sign In</a>
          <button className="btn-singup">SingUp</button>
        </div>
      </header>

      <main className="main">
        <div className="main-center">
          <img src={navegador} alt="" />
          <h1>No Results Found</h1>
          <p>Vish, deu ruim 😢, não existe essa página! Volte ao começo</p>
        </div>
      </main>

      <img
        style={{ position: "absolute", zIndex: "-1", top: 0, right: 0 }}
        src={vector}
        alt="vector"
      />

      <img
        style={{ position: "absolute", bottom: 0, right: 0 }}
        src={sailorLeft}
        alt=""
      />

      <img
        style={{ position: "absolute", bottom: 0, left: 0 }}
        src={sailorRight}
        alt=""
      />

      <img
        style={{ position: "absolute", zIndex: "-1", bottom: 0, left: 0 }}
        src={shadowYellow}
        alt=""
      />
    </div>
  );
}
