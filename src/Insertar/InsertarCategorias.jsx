import React from 'react';

const InsertarCategorias = () => {
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
                  {/* Codigo Categoria */}
                  <div class="form-group">
                    <label for="CodigoC">Codigo Categoria</label>
                    <input type="number" class="form-control" id="CodigoC" placeholder="Codigo Categoria" />
                  </div>
                  {/*  */}

                  {/* Tipo */}
                  <div class="form-group">
                    <label for="Tipo">Tipo</label>
                    <input type="text" class="form-control" id="Tipo" placeholder="Tipo" />
                  </div>
                  {/*  */}

                  {/* Fecha de alta */}
                  <div class="form-group">
                    <label for="Fechaalta">Fecha de alta</label>
                    <input type="date" class="form-control" id="Fechaalta" placeholder="Fecha de alta" />
                  </div>
                  {/*  */}

                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-success">Confirmar</button>
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