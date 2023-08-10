import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarAdmin from '../../../Componentes/NavBarPriv/NavbarAdmin'
import Footer from '../../../Componentes/Footer';
// Importamos Contenido de Productos POST Insertar
import InsertarProductos from '../../../Insertar/InsertarProductos';


const RutaPostProductosAdmin = () => {
    return (
        <>
            <NavbarAdmin />
            <InsertarProductos />
            <Footer />
        </>
    );
}

export default RutaPostProductosAdmin