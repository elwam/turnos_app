import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Turnos from './pages/Turnos';
import Clientes from './pages/Clientes';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </Router>
  );
}

export default App;