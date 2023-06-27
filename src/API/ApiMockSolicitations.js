export const solicitationsAPI = (data) => 
fetch('https://burger-queen-api-mock-nu.vercel.app/products', {
  // fetch('http://localhost:8080/products', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem ('token')
  }
})