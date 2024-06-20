import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Register from './Register/Register';
import Login from './pages/Login/Login';
import Produtos from './Produtos/Produtos';

import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <div className="container">
        <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/produtos" element={<Produtos />} />

</Routes>
 
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;