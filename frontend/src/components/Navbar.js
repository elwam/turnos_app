import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/turnos">Turnos</Link>
      <Link to="/clientes">Clientes</Link>
    </nav>
  );
}

export default Navbar;