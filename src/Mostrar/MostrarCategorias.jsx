import React from 'react';

const MostrarCategorias = () => {
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
                        <tr>
                           <td>345345</td>
                           <td>Mesas</td>
                           <td>22/09/2022</td>
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

export default MostrarCategorias