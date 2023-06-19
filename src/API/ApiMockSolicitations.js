export const solicitationsAPI = (email, password) => 
  fetch('http://localhost:8080/products', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    password,
  }),
});