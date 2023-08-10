import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarEdicion from '../../Componentes/NavBarPriv/NavbarEdicion';
import Footer from '../../Componentes/Footer';
// Importamos Contenido de Categorias VIEW Mostrar
import MostrarCategoriasEdicion from './MostrarCategoriasEdicion';

const RutaViewCategoriasEdicion = () => {
  return (
    <>
      <NavbarEdicion />
      <MostrarCategoriasEdicion />
      <Footer />
    </>
  );
}

export default RutaViewCategoriasEdicion