import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState([]);
  const [usuario, setusuario] = useState('');
  const [contrasena, setcontrasena] = useState('');
  const [siguiente, setsiguiente] = useState('')

  const getUsuario = () => {
    var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
        fetch(`http://localhost/muebleria-backend/index.php/Api/Usuarios/${usuario}`, requestOptions)
        .then(response => response.json())
        .then(data => {
        setData(data);

        console.log(data);
        var user = data.usuario;
        var pass = data.contrasena;

        if(user == usuario && pass==contrasena){
          setsiguiente="/Bienvenida";
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const inicioSesion = () => {
    var user = data.usuario;
    var pass = data.contrasena;

    if(user == usuario && pass==contrasena){
      setsiguiente="/Bienvenida";
    }
  }

  useEffect(()=>{
    getUsuario();
  }, []);

  return (
    <>
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <Link className="h1"><b>Muebleria</b></Link>
            </div>
            <div className="card-body">
              <p className="login-box-msg">No compartas tu contraseña con nadie</p>

              <form action="" method="post">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Usuario"
                  value={ usuario }  onChange={ event => setusuario (event.target.value) }/>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Contraseña" 
                  value={ contrasena }  onChange={ event => setcontrasena (event.target.value) }/>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                
                <div className="social-auth-links text-center mt-2 mb-3">
                  <button className="btn btn-block btn-success" onClick={ () => getUsuario()}>Iniciar Sesion</button>
                
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login