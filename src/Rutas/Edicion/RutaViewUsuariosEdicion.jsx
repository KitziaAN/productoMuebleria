import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarEdicion from '../../Componentes/NavBarPriv/NavbarEdicion';
import Footer from '../../Componentes/Footer';
// Importamos Contenido de Usuarios VIEW Mostrar
import MostrarUsuariosEdicion from './MostrarUsuariosEdicion';

const RutaViewUsuariosEdicion = () => {
  return (
    <>
            <NavbarEdicion />
            <MostrarUsuariosEdicion />
            <Footer />
        </>
  );
}

export default RutaViewUsuariosEdicion