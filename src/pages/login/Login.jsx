import './Login.css';
import React, { useState } from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import ButtonLogin from '../../components/ButtonLogin';
import { useNavigate } from 'react-router-dom';
import ButtonMenuLogin from '../../components/ButtonMenuLogin';
import { login } from '../../API/ApiMock';

export const Login = () => {
  const [email, setEmail] = useState(''); // utiliza o hook useState do React para criar uma variável de estado chamada email. O hook useState retorna um array com dois elementos: o valor atual do estado (email), e uma função para atualizar esse valor (setEmail).
  const [sector, setSector] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {  // Essa função é um manipulador de eventos que é chamado quando o valor do campo de email é alterado pelo usuário.
    setEmail(e.target.value); // É responsável por atualizar o estado email com o novo valor do campo de email.
  };

  const handleSectorChange = (e) => {
    setSector(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }; // Ao chamar as funções de email, setor e senha com o: (e.target.value), estamos atualizando o valor do estado email, setor e senha com o novo valor do campo de email, setor e senha. Isso faz com que o componente seja re-renderizado e o novo valor de cada um deles seja refletido na interface do usuário.

  // A função handleSubmit é um manipulador de evento que é chamado quando o formulário é submetido, ou seja, quando o usuário clica no botão 'Entrar':
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, sector, password)
      .then((response) => {
        if (response.ok && sector === 'atendimento') {
          navigate('/pedidos');
  
          setEmail('');
          setSector('');
          setPassword('');

        } if (response.ok && sector === 'administração') {
          navigate('/administracao');
  
          setEmail('');
          setSector('');
          setPassword('');

        } if (response.ok && sector === 'cozinha') {
          navigate('/cozinha');
  
          setEmail('');
          setSector('');
          setPassword('');

        } else {
          setMessage('Erro ao fazer login. Verifique suas credenciais.');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();

    // Aqui adicionar a lógica para verificar as credenciais e fazer o login.
    // Usar a API e fazer uma requisição para o servidor (vercel).

  const handleMenu = () => {
    navigate2('/cardapio'); // AQUI, SUBSTITUIR /cardapio pela rota correta para a página do cardápio.
  };
  const navigate2 = useNavigate();

  const sectorOptions = [
    { value: 'administração', label: 'Administração' },
    { value: 'atendimento', label: 'Atendimento' },
    { value: 'cozinha', label: 'Cozinha' },
  ];

  return (
    <div className='login-container'>
      <div className='grid-container'>
      <img src='src/assets/logo.png' alt='Logo browser burguer' className='logo' />
      <form onSubmit={handleSubmit}>
        <Input
          label='Email'
          type='email'
          value={email}
          onChange={handleEmailChange}
          required
        />

        <Select
          label='Setor'
          value={sector}
          onChange={handleSectorChange}
          options={[{ value: '', label: 'Qual é o seu departamento?' }, ...sectorOptions]}
        />

        <Input
          label='Senha'
          type='password'
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {/* Usando o onChange e chamando as funções do email, setor e senha, estamos usando uma forma comum de lidar com eventos de mudança em campos de input no React.  */}
        {/* Essas funções de handleEmailChange, do setor e da senha, passamos para o evento onChange do campo de input de email e senha, e do select do setor. Assim, toda vez que o usuário digitar, apagar ou modificar o valor de algum campo ou modificar a opção do select, a função especifíca será chamada e o estado email, setor ou senha será atualizado de acordo. */}
        <ButtonLogin onClick={Login} />
      </form>
      {message && <p className='message'>{message}</p>}
      <ButtonMenuLogin onClick={handleMenu} />
    </div>
    </div>
  );
};