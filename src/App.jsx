import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Energia from './pages/Energia';
import Agua from './pages/Agua';
import Sustentabilidade from './pages/Sustentabilidade';
import Combustivel from './pages/Combustivel';

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
