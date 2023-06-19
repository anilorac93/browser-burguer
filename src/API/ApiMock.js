export const login = (email, sector, password) => 
  fetch('http://localhost:8080/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    sector,
    password,
  }),
});