import React, { useEffect, useState } from 'react';

const MostrarCategoriasEliminar = () => {
    const [data, setData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    const getCategorias = () => {
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

    const deleteCategorias = (id) => {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow',
        };

        fetch(`http://localhost/muebleria-backend/index.php/Api/Categorias/${id}`, requestOptions)
            .then(response => { if (response.ok) { getCategorias(); } })
            .catch(error => console.log('Tienes un error al borrar: ', error));
    };

    useEffect(() => {
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
                                                <tr>
                                                    <th>Codigo Categoria</th>
                                                    <th>Tipo</th>
                                                    <th>Fecha de alta</th>
                                                    <th>Opciones</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {data.map(item => (
                                                    <tr key={item.codigo_categoria}>
                                                        <td>{item.codigo_categoria}</td>
                                                        <td>{item.tipo}</td>
                                                        <td>{item.fecha_alta}</td>
                                                        <td>
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
        </>
    );
}

export default MostrarCategoriasEliminar;
