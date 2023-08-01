import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Mostrar Bienvenida y Login
import MostrarBienvenida from './Rutas/MostrarBienvenida';
import MostrarLogin from './Rutas/MostrarLogin';

// Importar componentes de ruta POST
import RutaPostProductos from './Rutas/RutaPostProductos';
import RutaPostCategorias from './Rutas/RutaPostCategorias';
import RutaPostUsuarios from './Rutas/RutaPostUsuarios';
import RutaPostEYS from './Rutas/RutaPostEYS';

// Importar componentes de ruta VIEW
import RutaViewProductos from './Rutas/RutaViewProductos';
import RutaViewCategorias from './Rutas/RutaViewCategorias';
import RutaViewUsuarios from './Rutas/RutaViewUsuarios';
import RutaViewEYS from './Rutas/RutaViewEYS';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      
        {/* Rutas POST */}
        <Route path='/' element={<MostrarBienvenida />} />
        <Route path='/Bienvenida' element={<MostrarBienvenida />} />
        <Route path='/InsertarProductos' element={<RutaPostProductos />} />
        <Route path='/InsertarCategorias' element={<RutaPostCategorias />} />
        <Route path='/InsertarUsuarios' element={<RutaPostUsuarios />} />
        <Route path='/InsertarEYS' element={<RutaPostEYS />} />

        {/* Rutas VIEW */}
        <Route path='/MostrarProductos' element={<RutaViewProductos />} />
        <Route path='/MostrarCategorias' element={<RutaViewCategorias />} />
        <Route path='/MostrarUsuarios' element={<RutaViewUsuarios />} />
        <Route path='/MostrarEYS' element={<RutaViewEYS />} />
        <Route path='/MostrarLogin' element={<MostrarLogin />} />
        
    </Routes>
    </BrowserRouter>
  );
}

export default App