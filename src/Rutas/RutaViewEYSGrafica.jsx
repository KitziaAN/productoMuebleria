import React from 'react';

// Importamos NAVBAR Y FOOTER
import Navbar from '../Componentes/Navbar';
import Footer from '../Componentes/Footer';
// Importamos Contenido de Entradas / Salidas VIEW Mostrar
import MostrarEYSGrafica from '../Mostrar/MostrarEYSGrafica';

const RutaViewEYSGrafica = () => {
  return (
    <>
            <Navbar />
            <MostrarEYSGrafica />
            <Footer />
        </>
  );
}

export default RutaViewEYSGrafica