import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Turnos() {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/turnos/')
      .then(response => setTurnos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Lista de Turnos</h1>
      <ul>
        {turnos.map(turno => (
          <li key={turno.id}>
            {turno.descripcion} - {turno.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Turnos;