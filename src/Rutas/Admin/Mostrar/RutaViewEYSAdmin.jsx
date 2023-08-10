import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarAdmin from '../../../Componentes/NavBarPriv/NavbarAdmin';
import Footer from '../../../Componentes/Footer';
// Importamos Contenido de Entradas / Salidas VIEW Mostrar
import MostrarEYS from '../../../Mostrar/MostrarEYS';

const RutaViewEYSAdmin = () => {
  return (
    <>
      <NavbarAdmin />
      <MostrarEYS />
      <Footer />
    </>
  );
}

export default RutaViewEYSAdmin