import React from 'react';
import { useState, useEffect } from 'react';


const MostrarUsuarios = () => {

  // Inicia parte de consumo de la API
  const [data, setData] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const getUsuarios = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch("http://localhost/muebleria-backend/index.php/Api/Usuarios", requestOptions)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const openEditForm = (user) => {
    setEditingUser(user);
    setIsEditing(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingUser),
    };

    fetch(`http://localhost/muebleria-backend/index.php/Api/Usuarios/${editingUser.clave_empleado}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          setIsEditing(false);
          getUsuarios(); // Actualizar la lista de usuarios
        }
      })
      .catch((error) => console.log('Error al actualizar el usuario:', error));
  };

  const deleteUsuarios = (id) => {
    var requestOptions = {
      header: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'DELETE',
      redirect: 'follow',
    };

    fetch(`http://localhost/muebleria-backend/index.php/Api/Usuarios/${id}`, requestOptions)
      .then(response => { if (response.ok) { getUsuarios(); } })
      .then(result => console.log(result))
      .catch(error => console.log('Tienes un error al borrar: ', error));
  };

  useEffect(() => {
    getUsuarios();
  }, []);


  // Termina parte de consumo de la API

  return (
    <>
      <div className="wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Tabla de Usuarios </h3>
                  </div>
                  <div className="card-body">
                    <table id="example1"
                      className="table table-bordered table-striped">
                      <thead>
                        {/* Datos de la Tabla */}
                        <tr>
                          <th>Clave Empleado</th>
                          <th>Nombre</th>
                          <th>Puesto</th>
                          <th>Usuario</th>
                          <th>Contraseña</th>
                          <th>Fecha de Ingreso</th>
<<<<<<< HEAD
                          <th>Fotografía</th>
=======
                          {/* <th>Fotografía</th> */}
>>>>>>> erick
                          <th>Opciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Datos dentro de la Tabla */}
                        {data.map(item => (
                          <tr key={item.clave_empleado}>
                            <td>{item.clave_empleado}</td>
                            <td>{item.nombre}</td>
                            <td>{item.puesto}</td>
                            <td>{item.usuario}</td>
                            <td>{item.contrasena}</td>
                            <td>{item.fecha_ingreso}</td>
<<<<<<< HEAD
                            <td><img src={item.fotografia}></img></td>
=======
                            {/* <td><img src={item.fotografia}></img></td> */}
>>>>>>> erick
                            <td>
                              <button
                                type="button"
                                className="btn btn-outline-dark mr-2"
                                onClick={() => openEditForm(item)}
                              >
                                Editar
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-dark"
                                onClick={() => deleteUsuarios(item.clave_empleado)}
                              >
                                Borrar
                              </button>
                            </td>
                          </tr>
                        ))}
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {isEditing && editingUser && (
        <div className="container-fluid mt-3">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card card-dark">
                <div className="card-header">
                  <h2>
                    <i className="fas fa-pencil"></i>&nbsp; Editar información del usuario
                  </h2>
                </div>
                <div className="card-body">
                  <form onSubmit={handleUpdate}>
                    <div className="form-group">
                      <label htmlFor="CodigoE">Codigo Empleado</label>
                      <input
                        type="number"
                        className="form-control"
                        id="CodigoE"
                        placeholder="Codigo Empleado"
                        value={editingUser.clave_empleado}
                        disabled
                      />
                    </div>

                    {/* Nombre */}
                    <div className="form-group">
                      <label htmlFor="Nombre">Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Nombre"
                        placeholder="Nombre"
                        value={editingUser.nombre}
                        onChange={(e) => setEditingUser({ ...editingUser, nombre: e.target.value })}
                      />
                    </div>
                    {/*  */}

                    {/* Puesto */}
                    <div className="form-group">
                      <label htmlFor="Puesto">Puesto</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Puesto"
                        placeholder="Puesto"
                        value={editingUser.puesto}
                        onChange={(e) => setEditingUser({ ...editingUser, puesto: e.target.value })}
                      />
                    </div>
                    {/*  */}

                    {/* Usuario */}
                    <div className="form-group">
                      <label htmlFor="Usuario">Usuario</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Usuario"
                        placeholder="Usuario"
                        value={editingUser.usuario}
                        onChange={(e) => setEditingUser({ ...editingUser, usuario: e.target.value })}
                      />
                    </div>
                    {/*  */}

                    {/* Contraseña */}
                    <div className="form-group">
                      <label htmlFor="Password">Contraseña</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Password"
                        placeholder="Contraseña"
                        value={editingUser.contrasena}
                        onChange={(e) => setEditingUser({ ...editingUser, contrasena: e.target.value })}
                      />
                    </div>
                    {/*  */}

                    {/* Fecha de Entrada */}
                    <div className="form-group">
                      <label htmlFor="FechaEntrada">Fecha de Entrada</label>
                      <input
                        type="date"
                        className="form-control"
                        id="FechaEntrada"
                        placeholder="Fecha de Entrada"
                        value={editingUser.fecha_ingreso}
                        onChange={(e) => setEditingUser({ ...editingUser, fecha_ingreso: e.target.value })}
                      />
                    </div>
                    {/*  */}


                    <div className="card-footer">
                      <button type="submit" className="btn btn-success">
                        Guardar Cambios
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary ml-2"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MostrarUsuarios