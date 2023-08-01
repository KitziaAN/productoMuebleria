import React from 'react';

// Importamos NAVBAR Y FOOTER
import Navbar from '../Componentes/Navbar';
import Footer from '../Componentes/Footer';
// Importamos Contenido de Productos VIEW Mostrar
import MostrarProductos from '../Mostrar/MostrarProductos';

const RutaViewProductos = () => {
    return (
        <>
            <Navbar />
            <MostrarProductos />
            <Footer />
        </>
    );
}

export default RutaViewProductos