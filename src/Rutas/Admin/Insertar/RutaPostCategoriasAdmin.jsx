import React from 'react';

// Importamos NAVBAR Y FOOTER

import NavbarAdmin from '../../../Componentes/NavBarPriv/NavbarAdmin';
import Footer from '../../../Componentes/Footer';
// Importamos Contenido de Categorias POST Insertar
import InsertarCategorias from '../../../Insertar/InsertarCategorias';

const RutaPostCategoriasAdmin = () => {
    return (
        <>
            <NavbarAdmin />
            <InsertarCategorias />
            <Footer />
        </>
    );
}

export default RutaPostCategoriasAdmin