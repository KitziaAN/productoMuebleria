import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarEliminacion from '../../Componentes/NavBarPriv/NavbarEliminacion';
import Footer from '../../Componentes/Footer';
// Importamos Contenido de Categorias VIEW Mostrar
import MostrarCategoriasEliminar from './MostrarCategoriasEliminar';

const RutaViewCategoriasEliminacion = () => {
  return (
    <>
            <NavbarEliminacion />
            <MostrarCategoriasEliminar />
            <Footer />
        </>
  );
}

export default RutaViewCategoriasEliminacion