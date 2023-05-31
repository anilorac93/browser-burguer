import React from 'react';
import { Login } from '../Login.jsx'; 

describe('Login', () => {
it('user must login with email, sector and password', () => {
   const email = 'usertest@browserburguer.com';
   const sector = 'admin';
   const password = '123456';
expect(Login).toHaveBeenCalledTimes(1);
}
)
}
)