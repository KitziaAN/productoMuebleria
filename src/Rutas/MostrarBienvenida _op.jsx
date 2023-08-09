import React from 'react';

import Navbar_op from '../Componentes/Navbar_op';
import Bienvenida from '../Componentes/Bienvenida';
import Footer from '../Componentes/Footer';


const MostrarBienvenida_op = () => {
  return (
    <>
        <Navbar_op/>
        <Bienvenida/>
        <Footer/>
    </>
  );
}

export default MostrarBienvenida_op