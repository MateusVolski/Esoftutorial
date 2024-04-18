import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import './login.css'
import Logo from '../../assets/logo.jpg';
import Developer from '../../assets/developer.svg';

function Login() {
  useEffect(() => {
    document.title = `EsofTutorial - Login`;
  });
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true)
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true); // Adiciona estado para rastrear a validade do e-mail
  const navigate = useNavigate();

  function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function isValidPassword(password: string): boolean {
    return password.length >= 6;
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(isValidEmail(value)); 
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(isValidPassword(value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password.length >= 6 && isEmailValid) { // Verifica se o e-mail é válido
      navigate('/home');
    }
  };

  return (
    <>
      <div className='wrapper'>
        <div className='left'>
          <div className='header'><img className='logo' src={Logo} alt="logo" /><h2>ESOFTUTORIAL</h2></div>
          <div className='background'><img className='back-png' src={Developer} alt="developer your carrer" /></div>
        </div>
        <div className='right'>
          <div className="login">
            <div className='signin'>
              <div className="header-login">
                <h2>Sign in</h2>
                <p>Não tem conta? <a href="/register">Clique aqui.</a></p>
              </div>
              <form className='form' onSubmit={handleSubmit}>
                <div className='label'>
                  <label htmlFor="email">E-mail</label>
                  <div className={`input ${!isEmailValid ? 'invalid' : ''}`}> {}
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <div className='label'>
                  <label htmlFor="password">Senha</label>
                  <div className={`input ${!isPasswordValid ? 'invalid' : ''}`}> {}
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
                <a className='forgot' href="/forgot">Esqueceu a senha?</a>
                <div className='div-btn'><button className='button' type="submit" disabled={!email || password.length < 6 || !isEmailValid}>Entrar</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
