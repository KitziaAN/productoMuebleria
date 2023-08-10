import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarInsertar from '../../Componentes/NavBarPriv/NavbarInsertar';
import Footer from '../../Componentes/Footer';
// Importamos Contenido de Entradas / Salidas POST Insertar
import InsertarEYS from '../../Insertar/InsertarEYS';

const RutaPostEYSInsertar = () => {
    return (
        <>
            <NavbarInsertar />
            <InsertarEYS />
            <Footer />
        </>
    );
}

export default RutaPostEYSInsertar