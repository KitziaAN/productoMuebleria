import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
                  <input type="email" className="form-control" placeholder="Correo Electronico" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Contraseña" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                
                <div className="social-auth-links text-center mt-2 mb-3">

                <Link to="/Bienvenida" className="btn btn-block btn-success">
                  <i>Iniciar Sesion</i>
                </Link>

                <Link to="https://gmail.com/" className="btn btn-block btn-danger">
                  <i className="fab fa-google mr-2"></i> Ingresar con Google
                </Link>

                <Link to="https://www.facebook.com/" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2"></i> Ingresar con Facebook
                </Link>

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