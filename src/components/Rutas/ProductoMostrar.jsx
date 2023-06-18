import React from 'react'

const ProductoMostrar = () => {
  return (
    <>
        <div class="content-wrapper">
            <section class="content">
            <div class="container-fluid">
                <div class="row">
                <div class="col-12">
                    <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Tabla Productos</h3>
                    </div>
                    <div class="card-body">
                        <table id="example1" class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>Codigo producto</th>
                            <th>Categoria</th>
                            <th>Marca</th>
                            <th>Nombre</th>
                            <th>Piezas</th>
                            <th>Color</th>
                            <th>Material</th>
                            <th>Unidades</th>
                            <th>Dimensiones</th>
                            <th>Precio</th>
                            <th>Descripción</th>
                            <th>Fecha alta</th>
                            <th>Fotografias</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>45808</td>
                            <td>Salas
                            </td>
                            <td>Resto</td>
                            <td>Sala curveada</td>
                            <td>3</td>
                            <td>Cafe</td>
                            <td>Madera</td>
                            <td>10
                            </td>
                            <td>70*50cm</td>
                            <td>$5,000</td>
                            <td>Sala de madera</td>
                            <td>17/08/2021</td>
                            <td>foto.jpg</td>
                        </tr>                      
                        </tbody>
                        <tfoot>
                        <tr>
                        <th>Codigo producto</th>
                            <th>Categoria</th>
                            <th>Marca</th>
                            <th>Nombre</th>
                            <th>Piezas</th>
                            <th>Color</th>
                            <th>Material</th>
                            <th>Unidades</th>
                            <th>Dimensiones</th>
                            <th>Precio</th>
                            <th>Descripción</th>
                            <th>Fecha alta</th>
                            <th>Fotografias</th>
                        </tr>
                        </tfoot>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    </>
  )
}

export default ProductoMostrar;