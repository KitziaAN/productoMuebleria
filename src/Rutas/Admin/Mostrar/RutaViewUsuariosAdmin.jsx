import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarAdmin from '../../../Componentes/NavBarPriv/NavbarAdmin';
import Footer from '../../../Componentes/Footer';
// Importamos Contenido de Usuarios VIEW Mostrar
import MostrarUsuarios from '../../../Mostrar/MostrarUsuarios';

const RutaViewUsuariosAdmin = () => {
  return (
    <>
      <NavbarAdmin />
      <MostrarUsuarios />
      <Footer />
    </>
  );
}

export default RutaViewUsuariosAdmin