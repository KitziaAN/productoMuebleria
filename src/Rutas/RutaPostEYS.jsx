import React from 'react';

// Importamos NAVBAR Y FOOTER
import Navbar from '../Componentes/Navbar';
import Footer from '../Componentes/Footer';
// Importamos Contenido de Entradas / Salidas POST Insertar
import InsertarEYS from '../Insertar/InsertarEYS';

const RutaPostEYS = () => {
    return (
        <>
            <Navbar />
            <InsertarEYS />
            <Footer />
        </>
    );
}

export default RutaPostEYS