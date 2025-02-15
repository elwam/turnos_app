import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Clientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/clientes/')
      .then(response => setClientes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.id}>
            {cliente.nombre} - {cliente.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clientes;