import React from 'react';

import Navbar from '../Componentes/Navbar';
import Bienvenida from '../Componentes/Bienvenida';
import Footer from '../Componentes/Footer';


const MostrarBienvenida = () => {
  return (
    <>
        <Navbar/>
        <Bienvenida/>
        <Footer/>
    </>
  );
}

export default MostrarBienvenida