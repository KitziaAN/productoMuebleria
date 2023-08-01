import React from 'react';

// Importamos NAVBAR Y FOOTER
import Navbar from '../Componentes/Navbar';
import Footer from '../Componentes/Footer';
// Importamos Contenido de Usuarios VIEW Mostrar
import MostrarUsuarios from '../Mostrar/MostrarUsuarios';

const RutaViewUsuarios = () => {
  return (
    <>
            <Navbar />
            <MostrarUsuarios />
            <Footer />
        </>
  );
}

export default RutaViewUsuarios