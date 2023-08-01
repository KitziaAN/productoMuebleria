import React from 'react';

const MostrarEYS = () => {
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
                            <th>Codigo Producto</th>
                            <th>Fecha de Entrada</th>
                            <th>Fecha de Salida</th>
                        </tr>
                        </thead>

                        <tbody>
                            {/* Datos dentro de la Tabla */}
                        <tr>
                           <td>657657</td>
                           <td>12/10/2022</td>
                           <td>13/10/2022</td>
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

export default MostrarEYS