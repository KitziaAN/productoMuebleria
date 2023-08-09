import React from 'react';
import { useState, useEffect } from 'react';

const MostrarEYS = () => {
  const [data, setData] = useState([]);
  const [fechaD, setFecha] = useState("");

  const getEYS = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch("http://localhost/muebleria-backend/index.php/Api/EntradasYSalidas", requestOptions)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const deleteEYS = (id) => {
    var requestOptions = {
      header: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'DELETE',
      redirect: 'follow',
    };

    fetch(`http://localhost/muebleria-backend/index.php/Api/EntradasYSalidas/${id}`, requestOptions)
      .then(response => { if (response.ok) { getEYS(); } })
      .then(result => console.log(result))
      .catch(error => console.log('Tienes un error al borrar: ', error));
  }

  const seleccionarF = () => {
    var feD = data.map(item => (item.fecha))
    console.log("Las fechas ingresadas son: ", feD)
    const dataArr = new Set(feD);
    const result = [...dataArr];
    console.log(result);
    //setSeleccion(result);
    return (result);
  }

  const mosFecha = () => {
    var fecha = document.getElementById("select").value;
    setFecha(fecha);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(`http://localhost/muebleria-backend/index.php/Api/EntradasYSalidas/${fecha}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        setFecha(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const guardarF = () => {
    print();
  }

  useEffect(() => {
    getEYS();
  }, []);

  return (
    <>
      <div className="wrapper">
        <section className="content mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h1>Informes de entradas y salidas </h1>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="select" id="select" value={fechaD} onChange={mosFecha}>
                      <option value="" disabled>Selecciona una fecha</option>
                      {data.map(item => (
                        <option key={item.codigo_eys} value={item.fecha}>{item.fecha}</option>
                      ))}
                    </select>
                    <div className="row w-100 align-items-center">
                      <div className="col text-center">
                        <button type="button" className="btn btn-outline-dark  regular-button" onClick={() => guardarF()}>Guardar informe</button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <table id="example1"
                      className="table table-bordered table-striped">
                      <thead>
                        {/* Datos de la Tabla */}
                        <tr>
                          <th>Codigo Entrada/Salida</th>
                          <th>Codigo Producto</th>
                          <th>Fecha Entrada/Salida</th>
                          <th>Opciones</th>
                        </tr>
                      </thead>

                      <tbody>
                        {/* Datos dentro de la Tabla */}
                        {data.map(item => (
                          <tr key={item.codigo_eys}>
                            <td>{item.codigo_eys}</td>
                            <td>{item.codigo_producto}</td>
                            <td>{item.fecha}</td>
                            <td><button type="button" className="btn btn-outline-dark" onClick={() => deleteEYS(item.codigo_categoria)}>Borrar</button></td>
                          </tr>
                        ))}

                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card mt-4">
                  <div className="card-header">
                    <h1>Grafica de productos existentes </h1>

                  </div>
                  <div className="card-body">
                    <div className="col-xs-12 col-md-8 col-lg-12">
                      <div className="card">
                        <div className="card-header border-0">

                        </div>
                        <div className="card-body">
                          <div className="d-flex">
                            <p className="d-flex flex-column">
                              <span className="text-bold text-lg">Total de produto: 10000</span>
                              <span>Cantidad</span>
                            </p>
                          </div>


                          <div className="position-relative mb-4">
                            <canvas id="sales-chart" height="200"></canvas>
                          </div>

                          <div className="d-flex flex-row justify-content-end">
                            <span className="mr-2">
                              <i className="fas fa-square text-primary"></i> Mayor existencia
                            </span>

                            <span>
                              <i className="fas fa-square text-gray"></i> Menor existencia
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
        </section>
      </div>
    </>
  );
}

export default MostrarEYS