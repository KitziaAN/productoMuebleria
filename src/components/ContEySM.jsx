import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import EntradasySalidasMostrar from './Rutas/EntradasySalidasMostrar';

const ContEySM = () => {
  return (
    <>
        <Navbar/>
        <EntradasySalidasMostrar/>
        <Footer/>
    </>
  )
}

export default ContEySM;