import React from 'react';

// Importamos NAVBAR Y FOOTER
import Navbar from '../Componentes/Navbar';
import Footer from '../Componentes/Footer';
// Importamos Contenido de Categorias VIEW Mostrar
import MostrarCategorias from '../Mostrar/MostrarCategorias';

const RutaViewCategorias = () => {
  return (
    <>
            <Navbar />
            <MostrarCategorias />
            <Footer />
        </>
  );
}

export default RutaViewCategorias