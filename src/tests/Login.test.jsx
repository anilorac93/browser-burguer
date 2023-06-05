import React from 'react';
import { Login } from '../login/Login.jsx';
import { fireEvent, render } from '@testing-library/react';

describe('Login', () => {
it('Atualizar o estado do e-mail na alteração de entrada de e-mail', () => {
   render(Login);
   const {email} = screen.getLabelText('Email');
   fireEvent.change(email, {target: {value:'usertest@browserburguer.com'}})
   
expect(Login).toHaveBeenCalledTimes(1);
expect(email.value).toBe('usertest@browserburguer.com');
});
});