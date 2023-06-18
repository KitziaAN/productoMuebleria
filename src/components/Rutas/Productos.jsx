const Productos = () => {
    return (
      <>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0"> ✌ Productos ✌ </h1>
                </div>
              </div>
            </div>
          </div>
  
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-8 col-lg-12">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h4 className="card-title">
                        <i className="fas fa-user-circle mr-2"></i>
                        Por favor ingresa los valores
                      </h4>
                    </div>
  
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor=""> Codigo de Producto </label>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Codigo de Categoria"
                          required
                        />
                      </div>
  
                      <div className="form-group">
                        <label htmlFor=""> Categoria </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="¿Categoria?"
                          required
                        />
                      </div>
  
                      <div className="form-group">
                        <label htmlFor=""> Marca </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="¿Marca?"
                          required
                        />
                      </div>
  
                      <div className="form-group">
                        <label htmlFor=""> Nombre del Producto </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Dime el nombre del producto"
                          required
                        />
                      </div>
  
                      <div className="form-group">
                        <label htmlFor=""> Piezas </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="¿Piezas?"
                          required
                        />
                      </div>
  
                      <div className="form-group">
                        <label htmlFor=""> Color </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="¿Color?"
                          required
                        />
                      </div>
  
                      <div className="form-group">
                        <label htmlFor=""> Material </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="¿Material?"
                          required
                        />
                      </div>
  
                      <div className="form-group">
                        <label htmlFor=""> Unidades </label>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Unidades"
                          required
                        />
                      </div>
  
                      <div className="form-group">
                        <label htmlFor=""> Dimensiones </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="¿Dimenciones?"
                          required
                        />
                      </div>
  
                      <div className="form-group">
                        <label htmlFor=""> Precio </label>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="¿Precio?"
                          required
                        />
                      </div>
  
                      <div className="form-group">
                        <label htmlFor=""> Descripcion </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="¿Descripcion?"
                          required
                        />
                      </div>
  
                      <div className="form-group">
                        <label htmlFor=""> Fecha de alta </label>
                        <input
                          type="date"
                          name=""
                          id=""
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
  
                    <form action="#" method="post" enctype="multipart/form-data">
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="foto"
                          name="foto"
                        />
                        <label class="custom-file-label" for="foto">
                          Seleccionar fotografía
                        </label>
                      </div>
  
                      <button type="submit" class="btn btn-primary mt-1">
                        Subir
                      </button>
                    </form>
  
                    <div className="card-footer">
                      <button className="btn btn-success gb-orange btn-lg float-right">
                        Enviar
                      </button>
                    </div>
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Productos;