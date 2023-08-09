import React, { useEffect, useState } from 'react';

const MostrarProductos = () => {

  // Inicia parte de consumo de la API
  const [data, setData] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
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

  const openEditForm = (product) => {
    setEditingProduct(product);
    setIsEditing(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingProduct),
    };

    fetch(`http://localhost/muebleria-backend/index.php/Api/Productos/${editingProduct.codigo_producto}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          setIsEditing(false);
          getProductos(); // Actualizar la lista de productos
        }
      })
      .catch((error) => console.log('Error al actualizar el producto:', error));
  };

  const deleteProductos = (id) => {
    var requestOptions = {
      header: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'DELETE',
      redirect: 'follow',
    };

    fetch(`http://localhost/muebleria-backend/index.php/Api/Productos/${id}`, requestOptions)
      .then(response => { if (response.ok) { getProductos(); } })
      .then(result => console.log(result))
      .catch(error => console.log('Tienes un error al borrar: ', error));
  };

  useEffect(() => {
    getProductos();
  }, []);
  // Termina parte de consumo de la API

  // Muestra la tabla
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
                    <table id="example1"
                      className="table table-bordered table-striped">
                      <thead>
                        {/* Datos de la Tabla */}
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
                          <th>Fotografías</th>
                          <th>Opciones</th>
                        </tr>
                      </thead>

                      <tbody>
                        {/* Datos dentro de la Tabla */}
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
                            <td><img src={item.fotografias}></img></td>
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
      {/* Formulario de edición */}
      {isEditing && editingProduct && (
        <div className="container-fluid mt-3">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card card-dark">
                <div className="card-header">
                  <h2>
                    <i className="fas fa-pencil"></i>&nbsp; Editar información del producto
                  </h2>
                </div>
                <div className="card-body">
                  <form onSubmit={handleUpdate}>
                    <div className="form-group">

                      <label htmlFor="CodigoP">Codigo Producto</label>
                      <input
                        type="number"
                        className="form-control"
                        id="CodigoP"
                        placeholder="Codigo Producto"
                        value={editingProduct.codigo_producto}
                        disabled
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="CodigoC">Codigo Categoria</label>
                      <input
                        type="number"
                        className="form-control"
                        id="CodigoC"
                        placeholder="Codigo Categoria"
                        value={editingProduct.codigo_categoria}
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
                        placeholder="Nombre del Producto"
                        value={editingProduct.nombre}
                        onChange={(e) => setEditingProduct({ ...editingProduct, nombre: e.target.value })}
                      />
                    </div>

                    {/* Marca */}
                    <div className="form-group">
                      <label htmlFor="Marca">Marca</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Nombre"
                        placeholder="Marca"
                        value={editingProduct.marca}
                        onChange={(e) => setEditingProduct({ ...editingProduct, marca: e.target.value })}
                      />
                    </div>

                    {/* Piezas */}
                    <div className="form-group">
                      <label htmlFor="Piezas">Piezas</label>
                      <input
                        type="number"
                        className="form-control"
                        id="Piezas"
                        placeholder="Numero de Piezas"
                        value={editingProduct.piezas}
                        onChange={(e) => setEditingProduct({ ...editingProduct, piezas: e.target.value })}
                      />
                    </div>

                    {/* Color */}
                    <div className="form-group">
                      <label htmlFor="Color">Color</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Color"
                        placeholder="Color"
                        value={editingProduct.color}
                        onChange={(e) => setEditingProduct({ ...editingProduct, color: e.target.value })}
                      />
                    </div>

                    {/* Material */}
                    <div className="form-group">
                      <label htmlFor="Material">Material</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Material"
                        placeholder="Material"
                        value={editingProduct.material}
                        onChange={(e) => setEditingProduct({ ...editingProduct, material: e.target.value })}
                      />
                    </div>

                    {/* Unidades */}
                    <div className="form-group">
                      <label htmlFor="Unidades">Unidades</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Unidades"
                        placeholder="Unidades"
                        value={editingProduct.unidades}
                        onChange={(e) => setEditingProduct({ ...editingProduct, unidades: e.target.value })}
                      />
                    </div>

                    {/* Dimensiones */}
                    <div className="form-group">
                      <label htmlFor="Dimensiones">Dimensiones</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Dimensiones"
                        placeholder="Dimensiones"
                        value={editingProduct.dimensiones}
                        onChange={(e) => setEditingProduct({ ...editingProduct, dimensiones: e.target.value })}
                      />
                    </div>

                    {/* Precio */}
                    <div className="form-group">
                      <label htmlFor="Precio">Precio</label>
                      <input
                        type="number"
                        className="form-control"
                        id="Precio"
                        placeholder="Precio"
                        value={editingProduct.precio}
                        onChange={(e) => setEditingProduct({ ...editingProduct, precio: e.target.value })}
                      />
                    </div>

                    {/* Descripcion */}
                    <div className="form-group">
                      <label htmlFor="Descripcion">Descripcion</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Descripcion"
                        placeholder="Descripcion"
                        value={editingProduct.descripcion}
                        onChange={(e) => setEditingProduct({ ...editingProduct, descripcion: e.target.value })}
                      />
                    </div>

                    {/* Fecha de alta */}
                    <div className="form-group">
                      <label htmlFor="Fechaalta">Fecha de alta</label>
                      <input
                        type="date"
                        className="form-control"
                        id="Fechaalta"
                        placeholder="Fecha de alta"
                        value={editingProduct.fecha_alta}
                        onChange={(e) => setEditingProduct({ ...editingProduct, fecha_alta: e.target.value })}
                      />
                    </div>

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

export default MostrarProductos