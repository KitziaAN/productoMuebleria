import React from 'react'

const EntradasySalidasMostrar = () => {
  return (
    <>
        <div class="content-wrapper">
            <section class="content">
            <div class="container-fluid">
                <div class="row">
                <div class="col-12">
                    <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Tabla Usuarios</h3>
                    </div>
                    <div class="card-body">
                        <table id="example1" class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>Codigo de producto</th>
                            <th>fecha entrada/salida</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>57405</td>
                            <td>15/09/2022
                            </td>
                        </tr>                      
                        </tbody>
                        <tfoot>
                        <tr>
                            <th>Codigo de producto</th>
                            <th>fecha entrada/salida</th>
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

export default EntradasySalidasMostrar