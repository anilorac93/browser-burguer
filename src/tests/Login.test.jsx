import React from 'react';
import { Login } from  '../pages/login/Login.jsx';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApiMock } from '../API/ApiMock.js';

jest.mock('../API/ApiMock.js');

describe('Login', () => {
  it('should update email state on email input change', () => {
   const { getByLabelText } = render(
      <Router>
        <Login />
      </Router>
    );

    const emailInput = getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'usertest@browserburguer.com' } });
    expect(emailInput.value).toBe('usertest@browserburguer.com');
  });
});

it('should update sector state on sector select change', () => {
   const { getByLabelText } = render(
      <Router>
        <Login />
      </Router>
    );

   const sectorSelect = getByLabelText('Setor');
   fireEvent.change(sectorSelect, { target: { value: 'cozinha' } });
   expect(sectorSelect.value).toBe('cozinha');
 });

 it('should update password state on password input change', () => {
   const { getByLabelText } = render(
      <Router>
        <Login />
      </Router>
    );
   
   const passwordInput = getByLabelText('Senha');
   fireEvent.change(passwordInput, { target: { value: '12345678' } });
   expect(passwordInput.value).toBe('12345678');
 });

 it('should reset form state after form submission', () => {
  const { getByLabelText, getByText }  = render(
     <Router>
       <Login />
     </Router>
   );
  const emailInput = getByLabelText('Email');
  const sectorSelect = getByLabelText('Setor');
  const passwordInput = getByLabelText('Senha');
  const loginButton = getByText('Entrar');

  fireEvent.change(emailInput, { target: { value: 'usertest@browserburguer.com' } });
  fireEvent.change(sectorSelect, { target: { value: 'cozinha' } });
  fireEvent.change(passwordInput, { target: { value: '12345678' } });
  fireEvent.click(loginButton);

  ApiMock.mockImplementation(JSON.stringify({ ok: true }));

  expect(emailInput.value).toBe('usertest@browserburguer.com');
  expect(sectorSelect.value).toBe('cozinha');
  expect(passwordInput.value).toBe('12345678');
});