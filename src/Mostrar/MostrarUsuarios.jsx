import React from 'react';

const MostrarUsuarios = () => {
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
                            <th>Usuario</th>
                            <th>Contraseña</th>
                            <th>Fecha de Entrada</th>
                            <th>Documento</th>
                        </tr>
                        </thead>

                        <tbody>
                            {/* Datos dentro de la Tabla */}
                        <tr>
                           <td>6576575</td>
                           <td>Carlos</td>
                           <td>Subdirector</td>
                           <td>Administrador</td>
                           <td>*******</td>
                           <td>11/11/2022</td>
                           <td>Zenteno.jpg</td>
                        </tr>

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