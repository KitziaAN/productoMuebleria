const Categorias = () => {
    return (
      <>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0"> ✌ Categorias ✌ </h1>
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
                        <label htmlFor=""> Codigo de Categoria </label>
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
                        <label htmlFor=""> Tipo </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="¿Tipo?"
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
    );
  }
  
  export default Categorias