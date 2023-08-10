import React from 'react';

// Importamos NAVBAR Y FOOTER
import NavbarInsertar from '../../Componentes/NavBarPriv/NavbarInsertar';
import Footer from '../../Componentes/Footer';
// Importamos Contenido de Productos POST Insertar
import InsertarProductos from '../../Insertar/InsertarProductos';


const RutaPostProductosInsertar = () => {
    return (
        <>
            <NavbarInsertar />
            <InsertarProductos />
            <Footer />
        </>
    );
}

export default RutaPostProductosInsertar