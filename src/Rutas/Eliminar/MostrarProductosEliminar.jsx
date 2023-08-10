import React, { useEffect, useState } from 'react';

const MostrarProductosEliminar = () => {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const getProductos = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch("http://localhost/muebleria-backend/index.php/Api/Productos", requestOptions)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const deleteProductos = (id) => {
    var requestOptions = {
      header: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'DELETE',
      redirect: 'follow',
    };

    fetch(`http://localhost/muebleria-backend/index.php/Api/Productos/${id}`, requestOptions)
      .then(response => { if (response.ok) { getProductos(); } })
      .catch(error => console.log('Tienes un error al borrar: ', error));
  };

  useEffect(() => {
    getProductos();
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
                    <h3 className="card-title">Tabla de Productos </h3>
                  </div>
                  <div className="card-body">
                    <table id="example1" className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>C.Producto</th>
                          <th>C.Categoria</th>
                          <th>Marca</th>
                          <th>Nombre</th>
                          <th>Piezas</th>
                          <th>Color</th>
                          <th>Material</th>
                          <th>Unidades</th>
                          <th>Dimensiones</th>
                          <th>Precio</th>
                          <th>Descripcion</th>
                          <th>Fecha de alta</th>
                          <th>Opciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map(item => (
                          <tr key={item.codigo_producto}>
                            <td>{item.codigo_producto}</td>
                            <td>{item.codigo_categoria}</td>
                            <td>{item.marca}</td>
                            <td>{item.nombre}</td>
                            <td>{item.piezas}</td>
                            <td>{item.color}</td>
                            <td>{item.material}</td>
                            <td>{item.unidades}</td>
                            <td>{item.dimensiones}</td>
                            <td>{item.precio}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.fecha_alta}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-outline-dark"
                                onClick={() => deleteProductos(item.codigo_producto)}
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

export default MostrarProductosEliminar;
