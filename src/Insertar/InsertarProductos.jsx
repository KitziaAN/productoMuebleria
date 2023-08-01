import React from 'react';

const InsertarProductos = () => {
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
                  {/* Codigo Producto */}
                  <div className="form-group">
                    <label for="CodigoP">Codigo Producto</label>
                    <input type="number" className="form-control" id="CodigoP" placeholder="Codigo Producto" />
                  </div>
                  {/*  */}

                  {/* Codigo Categoria */}
                  <div className="form-group">
                    <label for="CodigoC">Codigo Categoria</label>
                    <input type="number" className="form-control" id="CodigoC" placeholder="Codigo Categoria" />
                  </div>
                  {/*  */}

                  {/* Nombre */}
                  <div className="form-group">
                    <label for="Nombre">Nombre</label>
                    <input type="text" className="form-control" id="Nombre" placeholder="Nombre del Producto" />
                  </div>
                  {/*  */}

                  {/* Piezas */}
                  <div className="form-group">
                    <label for="Piezas">Piezas</label>
                    <input type="number" className="form-control" id="Piezas" placeholder="Numero de Piezas" />
                  </div>
                  {/*  */}

                  {/* Color */}
                  <div className="form-group">
                    <label for="Color">Color</label>
                    <input type="text" className="form-control" id="Color" placeholder="Color" />
                  </div>
                  {/*  */}

                  {/* Material */}
                  <div className="form-group">
                    <label for="Material">Material</label>
                    <input type="text" className="form-control" id="Material" placeholder="Material" />
                  </div>
                  {/*  */}

                  {/* Unidades */}
                  <div className="form-group">
                    <label for="Unidades">Unidades</label>
                    <input type="number" className="form-control" id="Unidades" placeholder="Unidades" />
                  </div>
                  {/*  */}

                  {/* Dimensiones */}
                  <div className="form-group">
                    <label for="Dimensiones">Dimensiones</label>
                    <input type="number" className="form-control" id="Dimensiones" placeholder="Dimensiones" />
                  </div>
                  {/*  */}

                  {/* Precio */}
                  <div className="form-group">
                    <label for="Precio">Precio</label>
                    <input type="number" className="form-control" id="Precio" placeholder="Precio" />
                  </div>
                  {/*  */}

                  {/* Descripcion */}
                  <div className="form-group">
                    <label for="Descripcion">Descripcion</label>
                    <input type="email" className="form-control" id="Descripcion" placeholder="Descripcion" />
                  </div>
                  {/*  */}

                  {/* Fecha de alta */}
                  <div className="form-group">
                    <label for="Fechaalta">Fecha de alta</label>
                    <input type="date" className="form-control" id="Fechaalta" placeholder="Fecha de alta" />
                  </div>
                  {/*  */}
                  
                  {/* Subir Documentos */}
                  <div className="form-group">
                    <label for="exampleInputFile">Documento</label>
                    <div className="input-group">
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" id="exampleInputFile" />
                        <label className="custom-file-label" for="exampleInputFile">Selecciona la imagen del producto </label>
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

export default InsertarProductos

