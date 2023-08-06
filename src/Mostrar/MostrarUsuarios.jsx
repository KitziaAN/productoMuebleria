import React from 'react';
import { useState, useEffect } from 'react';


const MostrarUsuarios = () => {
    const [data, setData] = useState([]);

    const getUsuarios=()=>{
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

    const deleteUsuarios= (id) => {
        var requestOptions = {
            header:{'Content-Type': 'application/json; charset=utf-8'},
            method: 'DELETE',
            redirect: 'follow',
        };
          
          fetch(`http://localhost/muebleria-backend/index.php/Api/Usuarios/${id}`, requestOptions)
            .then(response => {if(response.ok){getUsuarios();}})
            .then(result => console.log(result))
            .catch(error => console.log('Tienes un error al borrar: ', error));
    };
    
    useEffect(()=>{
        getUsuarios();
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
                            <th>Opciones</th>         
                        </tr>
                        </thead>

                        <tbody>
                            {/* Datos dentro de la Tabla */}
                            {data.map(item =>(
                                <tr key={item.clave_empleado}>
                                    <td>{item.clave_empleado}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.puesto}</td>
                                    <td><img src={item.fotografia+"BASE64_STRING"}></img></td>
                                    <td>{item.usuario}</td>
                                    <td>{item.contrasena}</td>
                                    <td>{item.fecha_ingreso}</td>
                                    <td><button type="button" class="btn btn-outline-dark" onClick={()=> deleteUsuarios(item.codigo_usuario)}>Borrar</button></td>
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