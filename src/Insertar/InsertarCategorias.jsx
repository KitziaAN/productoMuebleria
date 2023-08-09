import React from 'react';
import { useState } from 'react';

const InsertarCategorias = () => {

  const [tipo, setTipo] = useState('');
  const [fecha, setFecha] = useState('');

  const handleAdd = () => {
    console.log(tipo, fecha);
    var formdata = new FormData();
    formdata.append("tipo", tipo);
    formdata.append("fecha_alta", fecha);

    var requestOptions = {
      mode: 'no-cors',
      header: {
        'Content-Type' : 'application/json; charset=UTF-8'
      },
      method: 'POST',
      body: formdata,
    };
    
    fetch("http://localhost/muebleria-backend/index.php/Api/Categorias/", requestOptions)
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
                  <i className="fas fa-clipboard"></i>&nbsp; Agrega la información de Productos
                </h3>
              </div>

              <form>
                <div className="card-body">
                  
                  {/* Tipo */}
                  <div className="form-group">
                    <label htmlFor="Tipo">Tipo</label>
                    <input type="text" className="form-control" placeholder="Tipo" 
                    value={ tipo } onChange={ event => setTipo (event.target.value )} />
                  </div>
                  {/*  */}

                  {/* Fecha de alta */}
                  <div className="form-group">
                    <label htmlFor="Fechaalta">Fecha de alta</label>
                    <input type="date" className="form-control" placeholder="Fecha de alta" 
                    value={ fecha } onChange={ event => setFecha (event.target.value )} />
                  </div>
                  {/*  */}

                </div>
                <div className="card-footer">
                  <button className="btn btn-success" onClick={ () => handleAdd() }> Confirmar </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InsertarCategorias