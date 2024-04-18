import './register.css'
import React, { useEffect,useState } from 'react';


const Register: React.FC = () => {
  useEffect(() => {
    document.title = `EsofTutorial - Register`;
  });
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mostrarBotaoLogin, setMostrarBotaoLogin] = useState(false);

  const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
    setMensagem('');
  };

  const handleSobrenomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSobrenome(event.target.value);
    setMensagem('');
  };

  const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(event.target.value);
    setMensagem('');
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setMensagem('');
  };

  const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
    setMensagem('');
  };

  const handleConfirmarSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmarSenha(event.target.value);
    setMensagem('');
  };

  const handleCriarContaClick = () => {
    if (!mensagemNome && !mensagemSobrenome && !mensagemTelefone && !mensagemEmail && !mensagemSenha && !mensagemConfirmarSenha) {
      setMensagem('Confirme seu e-mail para poder logar');
      setNome('');
      setSobrenome('');
      setTelefone('');
      setEmail('');
      setSenha('');
      setConfirmarSenha('');
      setMostrarBotaoLogin(true);
    }
  };

  const handleFazerLoginClick = () => {
    // Redirecionar para a página de login
    window.location.href = '/';
  };

  return (
    <div>
      <h2>Registrar-se</h2>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" value={nome} onChange={handleNomeChange} />
      </div>
      <div>
        <label htmlFor="sobrenome">Sobrenome:</label>
        <input type="text" id="sobrenome" value={sobrenome} onChange={handleSobrenomeChange} />
      </div>
      <div>
        <label htmlFor="telefone">Número de Telefone:</label>
        <input type="tel" id="telefone" value={telefone} onChange={handleTelefoneChange} />
      </div>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" value={senha} onChange={handleSenhaChange} />
      </div>
      <div>
        <label htmlFor="confirmarSenha">Confirmar Senha:</label>
        <input type="password" id="confirmarSenha" value={confirmarSenha} onChange={handleConfirmarSenhaChange} />
      </div>
      <div>
        <button onClick={handleCriarContaClick}>Criar Conta</button>
      </div>
      {mensagem && (
        <div>
          <p>{mensagem}</p>
          {mostrarBotaoLogin && (
            <button onClick={handleFazerLoginClick}>Fazer Login</button>
          )}
        </div>
      )}
    </div>
  );
};


export default Register
