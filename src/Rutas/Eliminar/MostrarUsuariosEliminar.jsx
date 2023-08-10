import React, { useState, useEffect } from 'react';

const MostrarUsuariosEliminar = () => {
  const [data, setData] = useState([]);
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

  const deleteUsuarios = (id) => {
    var requestOptions = {
      header: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'DELETE',
      redirect: 'follow',
    };

    fetch(`http://localhost/muebleria-backend/index.php/Api/Usuarios/${id}`, requestOptions)
      .then(response => { if (response.ok) { getUsuarios(); } })
      .catch(error => console.log('Tienes un error al borrar: ', error));
  };

  useEffect(() => {
    getUsuarios();
  }, []);

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
                    <table id="example1" className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Clave Empleado</th>
                          <th>Nombre</th>
                          <th>Puesto</th>
                          <th>Usuario</th>
                          <th>Contraseña</th>
                          <th>Fecha de Ingreso</th>
                          <th>Opciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map(item => (
                          <tr key={item.clave_empleado}>
                            <td>{item.clave_empleado}</td>
                            <td>{item.nombre}</td>
                            <td>{item.puesto}</td>
                            <td>{item.usuario}</td>
                            <td>{item.contrasena}</td>
                            <td>{item.fecha_ingreso}</td>
                            <td>
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
    </>
  );
}

export default MostrarUsuariosEliminar;
