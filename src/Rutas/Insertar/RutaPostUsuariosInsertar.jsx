import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarInsertar from '../../Componentes/NavBarPriv/NavbarInsertar';
import Footer from '../../Componentes/Footer';
// Importamos Contenido de Usuarios POST Insertar
import InsertarUsuarios from '../../Insertar/InsertarUsuarios';

const RutaPostUsuariosInsertar = () => {
    return (
        <>
            <NavbarInsertar />
            <InsertarUsuarios />
            <Footer />
        </>
    );
}

export default RutaPostUsuariosInsertar