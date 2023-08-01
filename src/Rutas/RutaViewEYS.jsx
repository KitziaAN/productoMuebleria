import React from 'react';

// Importamos NAVBAR Y FOOTER
import Navbar from '../Componentes/Navbar';
import Footer from '../Componentes/Footer';
// Importamos Contenido de Entradas / Salidas VIEW Mostrar
import MostrarEYS from '../Mostrar/MostrarEYS';

const RutaViewEYS = () => {
  return (
    <>
            <Navbar />
            <MostrarEYS />
            <Footer />
        </>
  );
}

export default RutaViewEYS