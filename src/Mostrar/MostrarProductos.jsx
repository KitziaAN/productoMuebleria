import React from 'react';

const MostrarProductos = () => {
  return (
    <>
        <div class="wrapper">
        <section class="content">
            <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                <div class="card">
                    <div class="card-header">
                    <h3 class="card-title">Tabla de Productos </h3>
                    </div>
                    <div class="card-body">
                    <table id="example1"
                        class="table table-bordered table-striped">
                        <thead>
                            {/* Datos de la Tabla */}
                        <tr>
                            <th>C.Producto</th>
                            <th>C.Categoria</th>
                            <th>Nombre</th>
                            <th>Piezas</th>
                            <th>Color</th>
                            <th>Material</th>
                            <th>Unidades</th>
                            <th>Dimensiones</th>
                            <th>Precio</th>
                            <th>Descripcion</th>
                            <th>Fecha de alta</th>
                            <th>Documento</th>
                        </tr>
                        </thead>

                        <tbody>
                            {/* Datos dentro de la Tabla */}
                        <tr>
                            <td>657657</td>
                            <td>345345</td>
                            <td>Mesa de Billar</td>
                            <td>1</td>
                            <td>Verde</td>
                            <td>Madera</td>
                            <td>12</td>
                            <td>2.5 mt x 2 mt</td>
                            <td>$28 000</td>
                            <td>Tacos incluidos</td>
                            <td>12/10/2022</td>
                            <td>Billar.jpg</td>
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

export default MostrarProductos