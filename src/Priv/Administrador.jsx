import React from 'react'

import NavbarAdmin from '../Componentes/NavBarPriv/NavbarAdmin';
import BienvenidaAdmin from '../Componentes/NavBarPriv/BienvenidaPriv/BienvenidaAdmin';
import Footer from '../Componentes/Footer';

const Administrador = () => {
  return (
    <>
        <NavbarAdmin />
        <BienvenidaAdmin />
        <Footer />
    </>
  );
}

export default Administrador