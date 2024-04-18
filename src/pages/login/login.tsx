import './login.css'
import { useEffect,useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  useEffect(() => {
    document.title = `EsofTutorial - Login`;
  });
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [formError, setFormError] = useState<string>('');
  const navigate = useNavigate();

  function isValidEmail(email: string):boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if(!isValidEmail(value)){
      setEmailError('Por favor, insira um e-mail válido');
    } else {
      setEmailError('');
    }
    setFormError('');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 6) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres');
    } else {
      setPasswordError('');
    }
    setFormError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!isValidEmail(email)) {
      setEmailError('Por favor, insira um e-mail válido');
    }
    if (password.length < 6) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres');
    }
    if (email && password.length >= 6) {
      navigate('/home');
    }  else {
      setFormError('Por favor, preencha todos os campos corretamente');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className='error'>{emailError}</p>}
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p>{passwordError}</p>}
        </div>
        {formError && <p>{formError}</p>}
        <button className = 'btn-login' type="submit" disabled={!email || password.length < 6}>
          Entrar
        </button>
      </form>
      <p>
        Esqueceu sua senha? <a href="/forgot">Clique aqui.</a>.
        </p>
        <p>
        Não tem conta? <a href="/register">Clique aqui.</a>.
        </p>
    </div>
  );
}

export default Login
