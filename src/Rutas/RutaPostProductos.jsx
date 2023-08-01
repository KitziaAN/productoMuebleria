import React from 'react';

// Importamos NAVBAR Y FOOTER
import Navbar from '../Componentes/Navbar';
import Footer from '../Componentes/Footer';
// Importamos Contenido de Productos POST Insertar
import InsertarProductos from '../Insertar/InsertarProductos';


const RutaPostProductos = () => {
    return (
        <>
            <Navbar />
            <InsertarProductos />
            <Footer />
        </>
    );
}

export default RutaPostProductos