import React from 'react'

import NavbarUsuario from '../Componentes/NavBarPriv/NavbarUsuario';
import BienvenidaUsuario from '../Componentes/NavBarPriv/BienvenidaPriv/BienvenidaUsuario';
import Footer from '../Componentes/Footer';

const Usuario = () => {
  return (
    <>
        <NavbarUsuario />
        <BienvenidaUsuario />
        <Footer />
    </>
  );
}

export default Usuario