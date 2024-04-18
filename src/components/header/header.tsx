import './header.css'
import Logo from '../../assets/logo.jpg'

function Header() {
  return (
      <>
        <header>
      <div className="header-container">
        <div className="logo-container">
          <img src={Logo} alt="Logo" />
          <h2>ESOFT TUTORIAL</h2>
        </div>
        <nav>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Cursos</a></li>
            <li><a href="#">Contato</a></li>
            <li><button className="start-button">Inicie agora</button></li>
          </ul>
        </nav>
      </div>
    </header>
      </>
  )
}
export default Header
