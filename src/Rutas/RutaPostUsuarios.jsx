import React from 'react';

// Importamos NAVBAR Y FOOTER
import Navbar from '../Componentes/Navbar';
import Footer from '../Componentes/Footer';
// Importamos Contenido de Usuarios POST Insertar
import InsertarUsuarios from '../Insertar/InsertarUsuarios';

const RutaPostUsuarios = () => {
    return (
        <>
            <Navbar />
            <InsertarUsuarios />
            <Footer />
        </>
    );
}

export default RutaPostUsuarios