import './forgot.css'
import React, { useEffect,useState } from 'react';

function Forgot() {
  useEffect(() => {
    document.title = `EsofTutorial - Forgot`;
  });
  
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [message, setMessage] = useState('');

  function isValidEmail(email: string):boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleRecoverClick = () => {
    if (isValidEmail(email)) {
      setMessage(`Caso o e-mail escolhido corresponda a algum cadastrado na plataforma, será enviada instruções por lá.`);
    } else {
      setMessage('Por favor, insira um e-mail válido');
    }
    setShowForm(false);
  };

  const handleLoginClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="container">
      <h2>Recuperação de Senha</h2>
      {showForm ? (
        <form>
          <div>
            <label className= "one" htmlFor="email">
              E-mail  
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              />
          </div>
          <div className="forgot-btn">
          <button className="forgot-btn"
            type="button"
            onClick={handleRecoverClick}
            >
            Recuperar
          </button>
          </div>
          
        </form>
      ) : (
        <div>
          <p>{message}</p>
          <button
            type="button"
            onClick={handleLoginClick}
            >
            Fazer Login
          </button>
        </div>
      )}
    </div>
  );
}
export default Forgot
