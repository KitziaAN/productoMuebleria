import React from 'react';
import { useState } from 'react';

const InsertarUsuarios = () => {
  const [nombre, setNombre] = useState('');
  const [puesto, setPuesto] = useState('');
  const [fotografia, setFotografia] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [fecha, setFecha] = useState('');

  const handleAdd = () => {
    console.log(fotografia);
    var formdata = new FormData();
    formdata.append("nombre", nombre);
    formdata.append("puesto", puesto);
    formdata.append("fotografia", fotografia);
    formdata.append("usuario", usuario);
    formdata.append("contrasena", contrasena);
    formdata.append("fecha_ingreso", fecha)

    var requestOptions = {
      mode: 'no-cors',
      header: {
        'Content-Type' : 'application/json; charset=UTF-8'
      },
      method: 'POST',
      body: formdata,
    };
    
    fetch("http://localhost/muebleria-backend/index.php/Api/Usuarios", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        setFotografia(reader.result);       
      };
      reader.readAsDataURL(file);
      console.log(fotografia)
    }
  }

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
                  {/* Nombre */}
                  <div className="form-group">
                    <label for="Nombre">Nombre</label>
                    <input type="text" className="form-control" placeholder="Nombre"
                    value={ nombre } onChange={ event => setNombre (event.target.value )} />
                  </div>
                  {/*  */}

                  {/* Puesto */}
                  <div className="form-group">
                    <label for="Puesto">Puesto</label>
                    <input type="text" className="form-control" id="Puesto" placeholder="Puesto"
                    value={ puesto } onChange={ event => setPuesto (event.target.value )} />
                  </div>
                  {/*  */}

                  {/* Subir Imagen */}
                  <div className="form-group justify-content-center">
                    <img className='center' src={fotografia} height="300px" width="300px"></img>
                    <div className="input-group">
                      <div className="custom-file">
                        <input type="file" accept="image/*" className="custom-file-input" onChange={handleImage} />
                        <label className="custom-file-label" for="exampleInputFile">Selecciona la imagen del producto </label>
                      </div>
                    </div>
                  </div>
                  {/*  */}

                  {/* Usuario */}
                  <div className="form-group">
                    <label for="Usuario">Usuario</label>
                    <input type="text" className="form-control" id="Usuario" placeholder="Usuario"
                    value={ usuario } onChange={ event => setUsuario (event.target.value )} />
                  </div>
                  {/*  */}

                  {/* Contraseña */}
                  <div className="form-group">
                    <label for="Password">Contraseña</label>
                    <input type="password" className="form-control" id="Password" placeholder="Contraseña" 
                    value={ contrasena } onChange={ event => setContrasena (event.target.value )} />
                    </div>
                  {/*  */}

                  {/* Fecha de Entrada */}
                  <div className="form-group">
                    <label for="FechaEntrada">Fecha de Entrada</label>
                    <input type="date" className="form-control" id="FechaEntrada" placeholder="Fecha de Entrada"
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
        <div className="mb-4">&nbsp;</div>
      </div>
    </>
  );
}

export default InsertarUsuarios