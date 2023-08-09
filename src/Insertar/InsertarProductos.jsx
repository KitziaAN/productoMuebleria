import React from 'react';
import { useState } from 'react';

const InsertarProductos = () => {
  
  const [codigoCategoria, setcodigoCategoria] = useState(0);
  const [marca, setMarca] = useState('');
  const [nombre, setNombre] = useState('');
  const [piezas, setPiezas] = useState(0);
  const [color, setColor] = useState('');
  const [material, setMaterial] = useState('');
  const [unidades, setUnidades] = useState('');
  const [dimensiones, setDimensiones] = useState('');
  const [precio, setPrecio] = useState(0.0);
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setfecha] = useState('');
  const [fotografia, setFotografia] = useState('');

  const handleAdd = () => {
    var formdata = new FormData();
    formdata.append("codigo_categoria", codigoCategoria);
    formdata.append("marca", marca);
    formdata.append("nombre", nombre);
    formdata.append("piezas", piezas);
    formdata.append("color", color);
    formdata.append("material", material);
    formdata.append("unidades", unidades);
    formdata.append("dimensiones", dimensiones);
    formdata.append("precio", precio);
    formdata.append("descripcion", descripcion);
    formdata.append("fecha_alta", fecha);
    formdata.append("fotografias", fotografia);

    var requestOptions = {
      mode: 'no-cors',
      header: {
        'Content-Type' : 'application/json; charset=UTF-8'
      },
      method: 'POST',
      body: formdata,
    };

    fetch("http://localhost/muebleria-backend/index.php/Api/Productos", requestOptions)
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
          <div className="col-md-6 mt-5">
            <div className="card card-dark">

              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-clipboard"></i>&nbsp; Agrega la información de Productos
                </h3>
              </div>

              <form>
                <div className="card-body">
                  {/* Codigo Categoria */}
                  <div className="form-group">
                    <label htmlFor="CodigoC">Codigo Categoria</label>
                    <input type="number" className="form-control" placeholder="Codigo Categoria" 
                    value={ codigoCategoria } onChange={ event => setcodigoCategoria (event.target.value )} />
                    </div>
                  {/*  */}

                  {/* Marca */}
                  <div className="form-group">
                    <label htmlFor="Marca">Marca</label>
                    <input type="text" className="form-control" id="Marca" placeholder="Marca del Producto" 
                    value={ marca } onChange={ event => setMarca (event.target.value )} />
                    </div>
                  {/*  */}

                  {/* Nombre */}
                  <div className="form-group">
                    <label htmlFor="Nombre">Nombre</label>
                    <input type="text" className="form-control" id="Nombre" placeholder="Nombre del Producto" 
                    value={ nombre } onChange={ event => setNombre (event.target.value )} />
                    </div>
                  {/*  */}

                  {/* Piezas */}
                  <div className="form-group">
                    <label htmlFor="Piezas">Piezas</label>
                    <input type="number" className="form-control" id="Piezas" placeholder="Numero de Piezas" 
                    value={ piezas } onChange={ event => setPiezas (event.target.value )} />
                    </div>
                  {/*  */}

                  {/* Color */}
                  <div className="form-group">
                    <label htmlFor="Color">Color</label>
                    <input type="text" className="form-control" id="Color" placeholder="Color" 
                    value={ color } onChange={ event => setColor (event.target.value )} />
                    </div>
                  {/*  */}

                  {/* Material */}
                  <div className="form-group">
                    <label htmlFor="Material">Material</label>
                    <input type="text" className="form-control" id="Material" placeholder="Material"
                    value={ material } onChange={ event => setMaterial (event.target.value )} />
                    </div>
                  {/*  */}

                  {/* Unidades */}
                  <div className="form-group">
                    <label htmlFor="Unidades">Unidades</label>
                    <input type="text" className="form-control" id="Unidades" placeholder="Unidades" 
                    value={ unidades } onChange={ event => setUnidades (event.target.value )} />
                    </div>
                  {/*  */}

                  {/* Dimensiones */}
                  <div className="form-group">
                    <label htmlFor="Dimensiones">Dimensiones</label>
                    <input type="text" className="form-control" id="Dimensiones" placeholder="Dimensiones" 
                    value={ dimensiones } onChange={ event => setDimensiones (event.target.value )} />
                    </div>
                  {/*  */}

                  {/* Precio */}
                  <div className="form-group">
                    <label htmlFor="Precio">Precio</label>
                    <input type="number" className="form-control" id="Precio" placeholder="Precio"
                    value={ precio } onChange={ event => setPrecio (event.target.value )} />
                    </div>
                  {/*  */}

                  {/* Descripcion */}
                  <div className="form-group">
                    <label htmlFor="Descripcion">Descripcion</label>
                    <input type="text" className="form-control" id="Descripcion" placeholder="Descripcion" 
                    value={ descripcion } onChange={ event => setDescripcion (event.target.value )} />
                    </div>
                  {/*  */}

                  {/* Fecha de alta */}
                  <div className="form-group">
                    <label htmlFor="Fechaalta">Fecha de alta</label>
                    <input type="date" className="form-control" id="Fechaalta" placeholder="Fecha de alta" 
                    value={ fecha } onChange={ event => setfecha (event.target.value )} />
                    </div>
                  {/*  */}
                  
                  {/* Subir Imagen */}
                  <div className="form-group">
                  <img className='center' src={fotografia} height="300px" width="300px"></img>
                    <div className="input-group">
                      <div className="custom-file">
                        <input type="file" accept="image/*" className="custom-file-input" onChange={handleImage} />
                    <label className="custom-file-label" htmlFor="exampleInputFile">Selecciona la imagen del usuario </label>
                      </div>
                    </div>
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

export default InsertarProductos

