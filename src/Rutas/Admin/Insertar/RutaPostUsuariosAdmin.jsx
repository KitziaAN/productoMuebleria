import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarAdmin from '../../../Componentes/NavBarPriv/NavbarAdmin'
import Footer from '../../../Componentes/Footer';
// Importamos Contenido de Usuarios POST Insertar
import InsertarUsuarios from '../../../Insertar/InsertarUsuarios';

const RutaPostUsuariosAdmin = () => {
    return (
        <>
            <NavbarAdmin />
            <InsertarUsuarios />
            <Footer />
        </>
    );
}

export default RutaPostUsuariosAdmin