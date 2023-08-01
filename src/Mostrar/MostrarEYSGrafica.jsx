
const MostrarEYSGrafica = () => {
    return (
      <>
          <div class="wrapper">
        
              <div class="content-wrapper">
                <div className="content-header">
                  <div className="container">
                    <div className="row mb-2">
                      <div className="col-sm-6">
                        <h1 className="m-0"> Informes salidas/entradas  </h1>
                      </div>
                    </div>
                  </div>
                </div>
  
  
                <div className="content">
                  <div className="container_fluis">
                    <div className="row justify-content-center">
                      <div className="col-xs-6 col-md-4 col-lg-6">
                        <div className="card card-dark">
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
                              <label htmlFor=""> Fecha</label>
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
                            Buscar
                            </button>
                          </div>
  
                        </div>
                      </div>
  
                      <div class="col-xs-12 col-md-8 col-lg-12">
                        <div class="card">
                          <div class="card-header border-0">
                            <div class="d-flex justify-content-between">
                              <h3 class="card-title">Cantidad de producto existente</h3>
                              <a href="javascript:void(0);">Ver informe</a>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="d-flex">
                              <p class="d-flex flex-column">
                                <span class="text-bold text-lg">Total de produto: 0.0</span>
                                <span>Cantidad</span>
                              </p>
                            </div>
                          
  
                            <div class="position-relative mb-4">
                              <canvas id="sales-chart" height="200"></canvas>
                            </div>
  
                            <div class="d-flex flex-row justify-content-end">
                              <span class="mr-2">
                                <i class="fas fa-square text-primary"></i> Mayor existencia
                              </span>
  
                              <span>
                                <i class="fas fa-square text-gray"></i> Menor existencia
                              </span>
                            </div>
                          </div>
                        </div>
                      
  
                      </div>
                    </div>
                  </div>
                </div>
            
              </div>
    
          </div>
      </>
    );
  };
  
  export default MostrarEYSGrafica;