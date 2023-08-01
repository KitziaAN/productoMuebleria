import React from 'react';

const InsertarUsuarios = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 mt-4">
            <div className="card card-dark">

              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-user"></i>&nbsp; Agrega la información de Usuarios
                </h3>
              </div>

              <form>
                <div className="card-body">
                  {/* Codigo Empleado */}
                  <div className="form-group">
                    <label for="CodigoE">Codigo Empleado</label>
                    <input type="number" className="form-control" id="CodigoE" placeholder="Codigo Empleado" />
                  </div>
                  {/*  */}

                  {/* Nombre */}
                  <div className="form-group">
                    <label for="Nombre">Nombre</label>
                    <input type="text" className="form-control" id="Nombre" placeholder="Nombre" />
                  </div>
                  {/*  */}

                  {/* Puesto */}
                  <div className="form-group">
                    <label for="Puesto">Puesto</label>
                    <input type="text" className="form-control" id="Puesto" placeholder="Puesto" />
                  </div>
                  {/*  */}

                  {/* Usuario */}
                  <div className="form-group">
                    <label for="Usuario">Usuario</label>
                    <input type="text" className="form-control" id="Usuario" placeholder="Usuario" />
                  </div>
                  {/*  */}

                  {/* Contraseña */}
                  <div className="form-group">
                    <label for="Password">Contraseña</label>
                    <input type="password" className="form-control" id="Password" placeholder="Contraseña" />
                  </div>
                  {/*  */}

                  {/* Fecha de Entrada */}
                  <div className="form-group">
                    <label for="FechaEntrada">Fecha de Entrada</label>
                    <input type="date" className="form-control" id="FechaEntrada" placeholder="Fecha de Entrada" />
                  </div>
                  {/*  */}

                  {/* Subir Documentos */}
                  <div className="form-group">
                    <label for="exampleInputFile">Documento</label>
                    <div className="input-group">
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" id="exampleInputFile" />
                        <label className="custom-file-label" for="exampleInputFile">Selecciona la Imagen del usuario</label>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-success">Confirmar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mb-4">&nbsp;</div>
      </div>
    </>
  );
}

export default InsertarUsuarios