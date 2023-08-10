import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarAdmin from '../../../Componentes/NavBarPriv/NavbarAdmin';
import Footer from '../../../Componentes/Footer';
// Importamos Contenido de Categorias VIEW Mostrar
import MostrarCategorias from '../../../Mostrar/MostrarCategorias';

const RutaViewCategoriasAdmin = () => {
  return (
    <>
      <NavbarAdmin />
      <MostrarCategorias />
      <Footer />
    </>
  );
}

export default RutaViewCategoriasAdmin