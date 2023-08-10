import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarEliminacion from '../../Componentes/NavBarPriv/NavbarEliminacion';
import Footer from '../../Componentes/Footer';
// Importamos Contenido de Productos VIEW Mostrar
import MostrarProductosEliminar from './MostrarProductosEliminar';

const RutaViewProductosEliminacion = () => {
    return (
        <>
            <NavbarEliminacion />
            <MostrarProductosEliminar />
            <Footer />
        </>
    );
}

export default RutaViewProductosEliminacion