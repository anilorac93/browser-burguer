import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/Login';
// import { Cardapio } from './pages/cardapio';
import './index.css';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/cardapio" element={<Cardapio />} /> */}
      
        </Routes>
      </BrowserRouter>
    );
  };
  
export default App;