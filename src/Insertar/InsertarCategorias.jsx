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
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-6 mt-4">
            <div class="card card-dark">

              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-clipboard"></i>&nbsp; Agrega la información de Productos
                </h3>
              </div>

              <form>
                <div class="card-body">
                  
                  {/* Tipo */}
                  <div class="form-group">
                    <label for="Tipo">Tipo</label>
                    <input type="text" class="form-control" placeholder="Tipo" 
                    value={ tipo } onChange={ event => setTipo (event.target.value )} />
                  </div>
                  {/*  */}

                  {/* Fecha de alta */}
                  <div class="form-group">
                    <label for="Fechaalta">Fecha de alta</label>
                    <input type="date" class="form-control" placeholder="Fecha de alta" 
                    value={ fecha } onChange={ event => setFecha (event.target.value )} />
                  </div>
                  {/*  */}

                </div>
                <div class="card-footer">
                  <button class="btn btn-success" onClick={ () => handleAdd() }> Confirmar </button>
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