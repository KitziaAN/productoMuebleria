import React, { useEffect, useState } from 'react';

const Login = () => {

  const [users, setUsers] = useState([]);
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [puesto, setpuesto] = useState('');
  const [siguiente, setSiguiente] = useState('');
  const [error, setError] = useState('');

  const getUsuarios = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch("http://localhost/muebleria-backend/index.php/Api/Usuarios/", requestOptions)
      .then(response => response.json())
      .then(data => {
        const extractedUsers = data.map(item => ({
          usuario: item.usuario,
          contrasena: item.contrasena,
          puesto: item.puesto
        }));
        setUsers(extractedUsers);       
        // Imprimir en la consola
        console.log("Que mira bobo, andate pasha boludo", extractedUsers);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }


  useEffect(() => {
    getUsuarios();
  }, []);

  const handleLogin = () => {
    const foundUser = users.find(user => user.usuario === usuario && user.contrasena === contrasena);
    if (foundUser) {
      if(foundUser.puesto === "Administrador"){
        setSiguiente('/Bienvenida');
      }else{
        
      }
      console.log(puesto);
      
      
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  useEffect(() => {
    if (siguiente) {
      window.location.href = siguiente;
    }
  }, [siguiente]);

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h1 className="h1">Muebleria</h1>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Estamos emocionados de verte de nuevo </p>
            {/* Formulario */}
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">Usuario</label>
              <input
                type="text"
                className="form-control"
                id="usuario"
                placeholder='Ingresa tu Usuario'
                value={usuario}
                onChange={e => setUsuario(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contrasena" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="contrasena"
                placeholder='No compartas tu contraseña'
                value={contrasena}
                onChange={e => setContrasena(e.target.value)}
              />
            </div>

            {/* Mensaje de error */}
            {error && <div className="alert alert-danger">{error}</div>}

            <button
              className="btn btn-success mx-auto d-block"
              style={{ marginTop: '30px' }}
              onClick={handleLogin}
            >
              Iniciar Sesión
            </button>

            {/* Fin del formulario */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;