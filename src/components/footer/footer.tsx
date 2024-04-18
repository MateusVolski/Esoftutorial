import './footer.css'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>ESOFTutorial</h3>
          <div>          
            <p>Sobre nós</p>
            <p>Login</p>
            <p>Cursos</p>
          </div>
        </div>
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <ul>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
            <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
            <li><a href="https://discord.com/">Discord</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;