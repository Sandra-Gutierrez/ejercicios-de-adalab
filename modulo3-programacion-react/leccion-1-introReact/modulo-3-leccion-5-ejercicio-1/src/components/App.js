import '../styles/App.scss';
import logo from '../images/adalab-logo.png';

console.log('( => Ready! )');

function App() {
  return (
    <div>
      <header className="header">
          <a href="./index.html" className="header_logo"><img src={logo} alt="Logo Adalab" title="Logo Adalab"/></a>
          <nav>
              <ul className="header__list">
                  <li>
                    <a href="#" className="header__list--item" title="Enlace al blog">Blog</a>
                  </li>
                  <li>
                    <a href="#" className="header__list--item" title="Enlace a contacto">Contacto</a>
                  </li>
              </ul>
          </nav>
      </header>
      <main className="main">
          <h1 className="main__title">Creando diversidad digital</h1>
      </main>
    </div>
  );
}

export default App;
