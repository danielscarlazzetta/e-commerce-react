import React, { useState } from 'react';
// import './Dashboard.css';
import initialUsuarios from './initialUsuarios'; // Importa los productos ficticios
import UsuariosList from './UsuariosList';

const DashboardUsers = () => {
  const [users, setUsers] = useState(initialUsuarios);

  const handleUpdate = (id) => {
    console.log(`Actualizar usuario con ID: ${id}`);
    // Lógica para actualizar el producto
  };

  const handleDelete = (id) => {
    console.log(`Eliminar usuario con ID: ${id}`);
    // Lógica para eliminar el producto
    setUsers(users.filter(user => user.id !== id));
  };


  return (
     <>
       <main className="main-content">
        <h1>Dashboard a</h1>
        <UsuariosList
        users={users}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        />
        </main>

        </>
  );
};

export default DashboardUsers;
