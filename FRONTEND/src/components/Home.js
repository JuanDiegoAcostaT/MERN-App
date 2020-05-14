import React from 'react';

import { Link } from '@reach/router';

export default function Home() {
  return (
    <div className='conatiner'>
      <div className='row text-light text-center'>
        <div className='col-md-12'>
          <h2>Bienvenido a Notes App</h2>
          <p>Tu app de tareas para la familia</p>
        </div>
        <div className='col-md-12'>
          <h3>1. Crea un Usuario</h3>
          <p>Crea un usuario para que sepamos que es tu nota y la puedas indentificar</p>
          <Link className='btn btn-primary' to='/user'>Crea Tu Usuario</Link>
        </div>
        <div className='col-md-12'>
          <h3>2. Crea tu nota</h3>
          <p>Crea tu tarea/nota con titulo, descripción y fecha para orgqanizar tus rutinas del diario.</p>
          <Link className='btn btn-primary' to='/create'>Crea Tus Notas</Link>
        </div>
        <div className='col-md-12'>
          <h3>3. Organizate</h3>
          <p>Listo! , ya puedes ordenar tus dias como mejor te parezaca, nosotros lo hacemos por ti.</p>
          <Link className='btn btn-primary' to='/notes'>Aquí estan tus Notas</Link>
        </div>
      </div>
    </div>
  );
}
