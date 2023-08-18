
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      
    <Header/>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/"element={<Home/>} />
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
