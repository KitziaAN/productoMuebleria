const UsuariosMostrar = () => {
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
                            <th>Clave empleado</th>
                            <th>Nombre</th>
                            <th>Puesto</th>
                            <th>Fotografia</th>
                            <th>Usuario</th>
                            <th>Contraseña</th>
                            <th>Fecha registro</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>584158</td>
                            <td>Juanita Lopez
                            </td>
                            <td>Vendedora</td>
                            <td>foto.jpg</td>
                            <td>Juanita.lopez</td>
                            <td>*****</td>
                            <td>14/07/2022</td>
                        </tr>                      
                        </tbody>
                        <tfoot>
                        <tr>
                            <th>Clave empleado</th>
                            <th>Nombre</th>
                            <th>Puesto</th>
                            <th>Fotografia</th>
                            <th>Usuario</th>
                            <th>Contraseña</th>
                            <th>Fecha registro</th>
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
  
  export default UsuariosMostrar;