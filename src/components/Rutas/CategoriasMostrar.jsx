import React from 'react'

const CategoriasMostrar = () => {
  return (
    <>
        <div class="content-wrapper">
            <section class="content">
            <div class="container-fluid">
                <div class="row">
                <div class="col-12">
                    <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Tabla Categorias</h3>
                    </div>
                    <div class="card-body">
                        <table id="example1" class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>Codigo categorias</th>
                            <th>Tipo</th>
                            <th>Fecha alta</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>48066</td>
                            <td>Sala</td>
                            <td>24/06/2021</td>
                        </tr>                      
                        </tbody>
                        <tfoot>
                        <tr>
                            <th>Codigo categorias</th>
                            <th>Tipo</th>
                            <th>Fecha alta</th>
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

export default CategoriasMostrar