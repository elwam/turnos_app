import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Turnos from './pages/Turnos';
import Clientes from './pages/Clientes';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/clientes" element={<Clientes />} />
      </Switch>
    </Router>
  );
}

export default App;