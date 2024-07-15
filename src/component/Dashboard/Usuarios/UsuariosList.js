import React from 'react';
import './UsuariosList.css';
import '../../Btn.css';

const UsuariosList = ({ users, onUpdate, onDelete }) => {

  return (
    <div className="product-list">
      {users.map((user) => (
        <div key={user.id} className="product-item">
          <h3>{user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>Numero: {user.numerFhone}</p>
          <p>Direccion: {user.direccion}</p>
        
          <button class="card-button" onClick={() => onUpdate(user.id)}>Actualizar</button>
          <button class="card-button" onClick={() => onDelete(user.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default UsuariosList;
