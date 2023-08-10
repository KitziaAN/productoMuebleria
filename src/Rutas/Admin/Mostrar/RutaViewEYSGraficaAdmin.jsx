import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarAdmin from '../../../Componentes/NavBarPriv/NavbarAdmin';
import Footer from '../../../Componentes/Footer';
// Importamos Contenido de Entradas / Salidas VIEW Mostrar
import MostrarEYSGrafica from '../../../Mostrar/MostrarEYSGrafica';

const RutaViewEYSGraficaAdmin = () => {
  return (
    <>
      <NavbarAdmin />
      <MostrarEYSGrafica />
      <Footer />
    </>
  );
}

export default RutaViewEYSGraficaAdmin