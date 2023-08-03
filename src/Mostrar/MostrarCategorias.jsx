import React from 'react';
import { useState, useEffect } from 'react';

const MostrarCategorias = () => {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
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
    }, []);   

  return (
    <>
        <div class="wrapper">
        <section class="content">
            <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                <div class="card">
                    <div class="card-header">
                    <h3 class="card-title">Tabla de Categorias </h3>
                    </div>
                    <div class="card-body">
                    <table id="example1"
                        class="table table-bordered table-striped">
                        <thead>
                            {/* Datos de la Tabla */}
                        <tr>
                            <th>Codigo Categoria</th>
                            <th>Tipo</th>
                            <th>Fecha de alta</th>
                        </tr>
                        </thead>

                        <tbody>
                            {/* Datos dentro de la Tabla */}
                            {data.map(item =>(
                                <tr key={item.codigo_categoria}>
                                    <td>{item.codigo_categoria}</td>
                                    <td>{item.tipo}</td>
                                    <td>{item.fecha_alta}</td>
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

export default MostrarCategorias