import React from 'react';
import { Link } from 'react-router-dom';

const NavbarUsuario = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand-md navbar-dark navbar-dark">
                <div className="container">
                    <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                        <ul className="navbar-nav">

                            {/* Index */}
                            <li className="nav-item">
                                <Link to="/Usuario" className="nav-link"> Muebleria </Link>
                            </li>
                            
                        </ul>

                        {/* <!-- Boton Cerrar Sesion --> */}
                        <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                            <li className="nav-item">
                                <Link to="/">
                                    <i className="btn btn-dark">Cerrar Sesion</i>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            {/* Navbar */}
        </>
    );
}

export default NavbarUsuario