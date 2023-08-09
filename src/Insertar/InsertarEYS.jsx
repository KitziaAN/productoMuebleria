import React from 'react';
import { useState } from 'react';

const InsertarEYS = () => {
  const [codigoProducto, setCodigoProducto] = useState('');
  const [fecha, setFecha] = useState('');

  const handleAdd = () => {
    console.log(codigoProducto, fecha);
    var formdata = new FormData();
    formdata.append("codigo_producto", codigoProducto);
    formdata.append("fecha", fecha);

    var requestOptions = {
      mode: 'no-cors',
      header: {
        'Content-Type' : 'application/json; charset=UTF-8'
      },
      method: 'POST',
      body: formdata,
    };

    fetch("http://localhost/muebleria-backend/index.php/Api/EntradasYSalidas", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

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
                  {/* Fecha de Entrada */}
                  <div className="form-group">
                    <label htmlFor="CodigoProducto">Codigo Producto</label>
                    <input type="text" className="form-control" placeholder="Código producto" 
                    value={ codigoProducto } onChange={ event => setCodigoProducto (event.target.value )}/>
                  </div>
                  {/*  */}

                  {/* Fecha de Salida */}
                  <div className="form-group">
                    <label htmlFor="FechaSalidaEntrada">Fecha Salida/Entrada</label>
                    <input type="date" className="form-control" placeholder="Fecha de Salida"
                    value={ fecha } onChange={ event => setFecha (event.target.value )} />
                  </div>
                  {/*  */}

                </div>
                <div className="card-footer">
                  <button className="btn btn-success" onClick={ () => handleAdd() }>Confirmar</button>
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