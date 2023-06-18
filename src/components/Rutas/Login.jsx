const Login = () => {
    return (
      <>
          <div className="hold-transition login-page">
        <div className="login-box">
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Ingresa los datos requeridos</p>
  
              <form action="" method="post">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Correo"
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
  
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
              </form>
  
              <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  Inicia Sesion
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Login