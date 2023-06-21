export const solicitationsAPI = (data) => 
  fetch('http://localhost:8080/products', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem ('token')
  }
});