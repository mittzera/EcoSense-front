import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Energia from './pages/Energia/Energia';
import Agua from './pages/Agua/Agua';
import Sustentabilidade from './pages/Sustentabilidade/Sustentabilidade';
import Combustivel from './pages/Combustivel/Combustivel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/energia" element={<Energia />} />
        <Route path="/agua" element={<Agua />} /> 
        <Route path="/combustivel" element={<Combustivel />} />  
        <Route path="/sustentabilidade" element={<Sustentabilidade />} />
      </Routes>
    </Router>
  );
}

export default App;
