import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Bienvenida from './Rutas/Bienvenida';

const ContBienvenida = () => {
  return (
    <>
        <Navbar/>
        <Bienvenida/>
        <Footer/>
    </>
  )
}

export default ContBienvenida;