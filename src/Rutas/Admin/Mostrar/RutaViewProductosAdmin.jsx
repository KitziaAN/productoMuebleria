import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarAdmin from '../../../Componentes/NavBarPriv/NavbarAdmin';
import Footer from '../../../Componentes/Footer';
// Importamos Contenido de Productos VIEW Mostrar
import MostrarProductos from '../../../Mostrar/MostrarProductos';

const RutaViewProductosAdmin = () => {
    return (
        <>
            <NavbarAdmin />
            <MostrarProductos />
            <Footer />
        </>
    );
}

export default RutaViewProductosAdmin