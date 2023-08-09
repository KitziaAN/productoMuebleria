import React, { useEffect, useState } from 'react';

const MostrarCategorias = () => {
    const [data, setData] = useState([]);
    const [editingCategory, setEditingCategory] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const getCategorias=()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
          };
        fetch("http://localhost/muebleria-backend/index.php/Api/Categorias/", requestOptions)
        .then(response => response.json())
        .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    }

    const openEditForm = (category) => {
        setEditingCategory(category);
        setIsEditing(true);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
    
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editingCategory),
        };
    
        fetch(`http://localhost/muebleria-backend/index.php/Api/Categorias/${editingCategory.codigo_categoria}`, requestOptions)
          .then((response) => {
            if (response.ok) {
              setIsEditing(false);
              getCategorias(); // Actualizar la lista de categorías
            }
          })
          .catch((error) => console.log('Error al actualizar la categoría:', error));
      };

    const deleteCategorias= (id) => {
        var requestOptions = {
            //header:{'Content-Type': 'application/json; charset=utf-8'},
            method: 'DELETE',
            redirect: 'follow',
          };
          
          fetch(`http://localhost/muebleria-backend/index.php/Api/Categorias/${id}`, requestOptions)
            .then(response => {if(response.ok){getCategorias();}})
            .then(result => console.log(result))
            .catch(error => console.log('Tienes un error al borrar: ', error));
    };
   
    useEffect(()=>{
        getCategorias();
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
                                    <h3 className="card-title">Tabla de Categorias </h3>
                                </div>
                                <div className="card-body">
                                    <table id="example1"
                                        className="table table-bordered table-striped">
                                        <thead>
                                            {/* Datos de la Tabla */}
                                            <tr>
                                                <th>Codigo Categoria</th>
                                                <th>Tipo</th>
                                                <th>Fecha de alta</th>
                                                <th>Opciones</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {/* Datos dentro de la Tabla */}
                                            {data.map(item =>(
                                                <tr key={item.codigo_categoria}>
                                                    <td>{item.codigo_categoria}</td>
                                                    <td>{item.tipo}</td>
                                                    <td>{item.fecha_alta}</td>
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
                                                            onClick={() => deleteCategorias(item.codigo_categoria)}
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
            {isEditing && editingCategory && (
                <div className="container-fluid mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <div className="card card-dark">
                        <div className="card-header">
                        <h2>
                            <i className="fas fa-pencil"></i>&nbsp; Editar información de la categoría
                        </h2>
                        </div>
                        <div className="card-body">
                        <form onSubmit={handleUpdate}>
                            <div className="form-group">
                            <label htmlFor="CodigoC">Codigo de la categoria</label>
                            <input
                                type="number"
                                className="form-control"
                                id="CodigoC"
                                placeholder="Codigo Categoria"
                                value={editingCategory.codigo_categoria}
                                disabled
                            />
                            </div>

                            <div className="form-group">
                            <label htmlFor="Tipo">Tipo de producto</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Tipo"
                                placeholder="Tipo"
                                value={editingCategory.tipo}
                                onChange={(e) => setEditingCategory({ ...editingCategory, tipo: e.target.value })}
                            />
                            </div>
                            
                            <div className="form-group">
                            <label htmlFor="Fechaalta">Fecha de alta</label>
                            <input
                                type="date"
                                className="form-control"
                                id="Fechaalta"
                                placeholder="Fecha de alta"
                                value={editingCategory.fecha_alta}
                                onChange={(e) => setEditingCategory({ ...editingCategory, fecha_alta: e.target.value })}
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

export default MostrarCategorias