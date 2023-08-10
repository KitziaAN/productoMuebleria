import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarInsertar from '../../Componentes/NavBarPriv/NavbarInsertar';
import Footer from '../../Componentes/Footer';
// Importamos Contenido de Categorias POST Insertar
import InsertarCategorias from '../../Insertar/InsertarCategorias';

const RutaPostCategoriasInsertar = () => {
    return (
        <>
            <NavbarInsertar />
            <InsertarCategorias />
            <Footer />
        </>
    );
}

export default RutaPostCategoriasInsertar