export const login = (email, sector, password) => 
  fetch('https://burger-queen-api-mock-nu.vercel.app/login', {
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