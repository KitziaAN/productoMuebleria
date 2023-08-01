import React from 'react';

const InsertarEYS = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 mt-4">
            <div className="card card-dark">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-calendar"></i>&nbsp; Agrega la información de Entradas / Salidas
                </h3>
              </div>

              <form>
                <div className="card-body">
                  {/* Codigo Producto */}
                  <div className="form-group">
                    <label for="CodigoProducto">Codigo Producto</label>
                    <input type="email" className="form-control" id="CodigoProducto" placeholder="Codigo Producto" />
                  </div>
                  {/*  */}

                  {/* Fecha de Entrada */}
                  <div className="form-group">
                    <label for="FechaEntrada">Fecha de Entrada</label>
                    <input type="date" className="form-control" id="FechaEntrada" placeholder="Fecha de Entrada" />
                  </div>
                  {/*  */}

                  {/* Fecha de Salida */}
                  <div className="form-group">
                    <label for="FechaSalida">Fecha de Salida</label>
                    <input type="date" className="form-control" id="FechaSalida" placeholder="Fecha de Salida" />
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
      </div>
    </>
  );
}

export default InsertarEYS