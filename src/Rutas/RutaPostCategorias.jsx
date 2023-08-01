import React from 'react';

// Importamos NAVBAR Y FOOTER
import Navbar from '../Componentes/Navbar';
import Footer from '../Componentes/Footer';
// Importamos Contenido de Categorias POST Insertar
import InsertarCategorias from '../Insertar/InsertarCategorias';

const RutaPostCategorias = () => {
    return (
        <>
            <Navbar />
            <InsertarCategorias />
            <Footer />
        </>
    );
}

export default RutaPostCategorias