import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarAdmin from '../../../Componentes/NavBarPriv/NavbarAdmin'
import Footer from '../../../Componentes/Footer';
// Importamos Contenido de Entradas / Salidas POST Insertar
import InsertarEYS from '../../../Insertar/InsertarEYS';

const RutaPostEYSAdmin = () => {
    return (
        <>
            <NavbarAdmin />
            <InsertarEYS />
            <Footer />
        </>
    );
}

export default RutaPostEYSAdmin