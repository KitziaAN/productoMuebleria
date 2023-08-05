import React from 'react';
import { useState, useEffect } from 'react';

const MostrarEYS = () => {
    const [data, setData] = useState([]);

    const getEYS = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
          };
        fetch("http://localhost/muebleria-backend/index.php/Api/EntradasYSalidas", requestOptions)
        .then(response => response.json())
        .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }

    const deleteEYS = (id) => {
        var requestOptions = {
            header:{'Content-Type': 'application/json; charset=utf-8'},
            method: 'DELETE',
            redirect: 'follow',
        };

        fetch(`http://localhost/muebleria-backend/index.php/Api/EntradasYSalidas/${id}`, requestOptions)
            .then(response => {if(response.ok){getEYS();}})
            .then(result => console.log(result))
            .catch(error => console.log('Tienes un error al borrar: ', error));
    }
    
    useEffect(()=>{
        getEYS();
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
                    <h3 class="card-title">Tabla de Entradas y Salidas </h3>
                    </div>
                    <div class="card-body">
                    <table id="example1"
                        class="table table-bordered table-striped">
                        <thead>
                            {/* Datos de la Tabla */}
                        <tr>
                            <th>Codigo Entrada/Salida</th>
                            <th>Codigo Producto</th>
                            <th>Fecha Entrada/Salida</th>
                            <th>Opciones</th>
                        </tr>
                        </thead>

                        <tbody>
                            {/* Datos dentro de la Tabla */}
                            {data.map(item =>(
                                <tr key={item.codigo_eys}>
                                    <td>{item.codigo_eys}</td>
                                    <td>{item.codigo_producto}</td>
                                    <td>{item.fecha}</td>
                                    <td><button type="button" class="btn btn-outline-dark" onClick={()=> deleteEYS(item.codigo_categoria)}>Borrar</button></td>
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

export default MostrarEYS