import React from 'react';
import { useState, useEffect } from 'react';


const MostrarUsuarios = () => {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
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
                    <h3 class="card-title">Tabla de Usuarios </h3>
                    </div>
                    <div class="card-body">
                    <table id="example1"
                        class="table table-bordered table-striped">
                        <thead>
                            {/* Datos de la Tabla */}
                        <tr>
                            <th>Codigo Empleado</th>
                            <th>Nombre</th>
                            <th>Puesto</th>
                            <th>Fotografía</th>
                            <th>Usuario</th>
                            <th>Contraseña</th>
                            <th>Fecha de Entrada</th>         
                        </tr>
                        </thead>

                        <tbody>
                            {/* Datos dentro de la Tabla */}
                            {data.map(item =>(
                                <tr key={item.clave_empleado}>
                                    <td>{item.clave_empleado}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.puesto}</td>
                                    <td>{item.fotografia}</td>
                                    <td>{item.usuario}</td>
                                    <td>{item.contrasena}</td>
                                    <td>{item.fecha_ingreso}</td>
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

export default MostrarUsuarios