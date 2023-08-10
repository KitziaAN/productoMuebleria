import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Login
import MostrarLogin from './Rutas/Login/MostrarLogin';

// Privilegios
import Administrador from './Priv/Administrador';
import Insertar from './Priv/Insertar';
import Edicion from './Priv/Edicion';
import Eliminacion from './Priv/Eliminacion';
import Usuario from './Priv/Usuario';


// Administrador Insertar
import RutaPostProductosAdmin from './Rutas/Admin/Insertar/RutaPostProductosAdmin';
import RutaPostCategoriasAdmin from './Rutas/Admin/Insertar/RutaPostCategoriasAdmin';
import RutaPostUsuariosAmin from './Rutas/Admin/Insertar/RutaPostUsuariosAdmin';
import RutaPostEYSAdmin from './Rutas/Admin/Insertar/RutaPostEYSAdmin';
// Administrador Mostrar
import RutaViewProductosAdmin from './Rutas/Admin/Mostrar/RutaViewProductosAdmin';
import RutaViewCategoriasAdmin from './Rutas/Admin/Mostrar/RutaViewCategoriasAdmin';
import RutaViewUsuariosAdmin from './Rutas/Admin/Mostrar/RutaViewUsuariosAdmin';
import RutaViewEYSAdmin from './Rutas/Admin/Mostrar/RutaViewEYSAdmin';
import RutaViewEYSGraficaAdmin from './Rutas/Admin/Mostrar/RutaViewEYSGraficaAdmin';

// Rol de Insertar
import RutaPostProductosInsertar from './Rutas/Insertar/RutaPostProductosInsertar';
import RutaPostCategoriasInsertar from './Rutas/Insertar/RutaPostCategoriasInsertar';
import RutaPostUsuariosInsertar from './Rutas/Insertar/RutaPostUsuariosInsertar';
import RutaPostEYSInsertar from './Rutas/Insertar/RutaPostEYSInsertar';

// Rol Edicion
import RutaViewProductosEdicion from './Rutas/Edicion/RutaViewProductosEdicion';
import RutaViewCategoriasEdicion from './Rutas/Edicion/RutaViewCategoriasEdicion';
import RutaViewUsuariosEdicion from './Rutas/Edicion/RutaViewUsuariosEdicion';

// Rol Eliminacion
import RutaViewProductosEliminacion from './Rutas/Eliminar/RutaViewProductosEliminacion';
import RutaViewCategoriasEliminacion from './Rutas/Eliminar/RutaViewCategoriasEliminacion';
import RutaViewUsuariosEliminacion from './Rutas/Eliminar/RutaViewUsuariosEliminacion';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<MostrarLogin />} />
        <Route path='/Login' element={<MostrarLogin />} />

        {/* Privilegios */}
        <Route path='/Usuario' element={<Usuario />} />

        {/* Inicia Administrador */}
        <Route path='/Administrador' element={<Administrador />} />
        <Route path='/InsertarProductosAdmin' element={<RutaPostProductosAdmin />} />
        <Route path='/InsertarCategoriasAdmin' element={<RutaPostCategoriasAdmin />} />
        <Route path='/InsertarUsuariosAdmin' element={<RutaPostUsuariosAmin />} />
        <Route path='/InsertarEYSAdmin' element={<RutaPostEYSAdmin />} />
        {/* ------------------------------------------------------------------------- */}
        <Route path='/MostrarProductosAdmin' element={<RutaViewProductosAdmin />} />
        <Route path='/MostrarCategoriasAdmin' element={<RutaViewCategoriasAdmin />} />
        <Route path='/MostrarUsuariosAdmin' element={<RutaViewUsuariosAdmin />} />
        <Route path='/MostrarEYSAdmin' element={<RutaViewEYSAdmin />} />
        <Route path='/MostrarEYSGraficaAdmin' element={<RutaViewEYSGraficaAdmin />} />
        {/* Termina Administrador */}

        {/* Inicia Insertar */}
        <Route path='/Insertar' element={<Insertar />} />

        <Route path='/InsertarProductosInsertar' element={<RutaPostProductosInsertar />} />
        <Route path='/InsertarCategoriasInsertar' element={<RutaPostCategoriasInsertar />} />
        <Route path='/InsertarUsuariosInsertar' element={<RutaPostUsuariosInsertar />} />
        <Route path='/InsertarEYSInsertar' element={<RutaPostEYSInsertar />} />
        {/* Termina Insertar */}

        {/* Inicia Edicion */}
        <Route path='/Edicion' element={<Edicion />} />

        <Route path='/MostrarProductosEdicion' element={<RutaViewProductosEdicion />} />
        <Route path='/MostrarCategoriasEdicion' element={<RutaViewCategoriasEdicion />} />
        <Route path='/MostrarUsuariosEdicion' element={<RutaViewUsuariosEdicion />} />
        {/* Termina Edicion */}

        {/* Inicia Eliminacion */}
        <Route path='/Eliminacion' element={<Eliminacion />} />

        <Route path='/MostrarProductosEliminacion' element={<RutaViewProductosEliminacion />} />
        <Route path='/MostrarCategoriasEliminacion' element={<RutaViewCategoriasEliminacion />} />
        <Route path='/MostrarUsuariosEliminacion' element={<RutaViewUsuariosEliminacion />} />
        {/* Termina Eliminacion */}

        









      </Routes>
    </BrowserRouter>
  );
}

export default App