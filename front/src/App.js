
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

import Home from './pages/Home';
import Novedades from './pages/Novedades';
import Contacto from './pages/Contacto';
import Eventos from './pages/Eventos';
import './App.css'

function App() {
  return (
    <div className="App">
      
    <Header/>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/"element={<Home/>} />
      <Route path="Novedades"element={<Novedades/>} />
      <Route path="Contacto"element={<Contacto/>} />
      <Route path="Eventos"element={<Eventos/>} />
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
