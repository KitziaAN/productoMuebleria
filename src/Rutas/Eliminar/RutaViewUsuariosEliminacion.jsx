import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarEliminacion from '../../Componentes/NavBarPriv/NavbarEliminacion';
import Footer from '../../Componentes/Footer';
// Importamos Contenido de Usuarios VIEW Mostrar
import MostrarUsuariosEliminar from './MostrarUsuariosEliminar';

const RutaViewUsuariosEliminacion = () => {
  return (
    <>
            <NavbarEliminacion />
            <MostrarUsuariosEliminar />
            <Footer />
        </>
  );
}

export default RutaViewUsuariosEliminacion