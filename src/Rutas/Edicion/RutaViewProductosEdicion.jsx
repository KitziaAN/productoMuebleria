import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarEdicion from '../../Componentes/NavBarPriv/NavbarEdicion';
import Footer from '../../Componentes/Footer';
// Importamos Contenido de Productos VIEW Mostrar
import MostrarProductosEdicion from './MostrarProductosEdicion';

const RutaViewProductosEdicion = () => {
    return (
        <>
            <NavbarEdicion />
            <MostrarProductosEdicion />
            <Footer />
        </>
    );
}

export default RutaViewProductosEdicion