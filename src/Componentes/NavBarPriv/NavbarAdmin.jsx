import React from 'react';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand-md navbar-dark navbar-dark">
                <div className="container">
                    <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                        <ul className="navbar-nav">

                            {/* Index */}
                            <li className="nav-item">
                                <Link to="/Administrador" className="nav-link"> Administrador </Link>
                            </li>


                            {/* <!-- Productos --> */}
                            <li className="nav-item dropdown">
                                <Link id="dropdownSubMenu1" to="#" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false"
                                    className="nav-link dropdown-toggle"> Productos </Link>
                                <ul aria-labelledby="dropdownSubMenu1"
                                    className="dropdown-menu border-0 shadow">
                                    <li><Link to="/InsertarProductosAdmin" className="dropdown-item">
                                        Insertar </Link></li>
                                    <li><Link to="/MostrarProductosAdmin" className="dropdown-item">
                                        Mostrar
                                    </Link></li>
                                </ul>
                            </li>

                            {/* <!-- Categorias --> */}
                            <li className="nav-item dropdown">
                                <Link id="dropdownSubMenu1" to="#" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false"
                                    className="nav-link dropdown-toggle"> Categorias </Link>
                                <ul aria-labelledby="dropdownSubMenu1"
                                    className="dropdown-menu border-0 shadow">
                                    <li><Link to="/InsertarCategoriasAdmin" className="dropdown-item">
                                        Insertar </Link></li>
                                    <li><Link to="/MostrarCategoriasAdmin" className="dropdown-item">
                                        Mostrar </Link></li>
                                </ul>
                            </li>

                            {/* <!-- Usuarios --> */}
                            <li className="nav-item dropdown">
                                <Link id="dropdownSubMenu1" to="#" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false"
                                    className="nav-link dropdown-toggle"> Usuarios </Link>
                                <ul aria-labelledby="dropdownSubMenu1"
                                    className="dropdown-menu border-0 shadow">
                                    <li><Link to="/InsertarUsuariosAdmin" className="dropdown-item">
                                        Insertar </Link></li>
                                    <li><Link to="/MostrarUsuariosAdmin" className="dropdown-item">
                                        Mostrar
                                    </Link></li>
                                </ul>
                            </li>

                            {/* <!-- Entradas / Salidas --> */}
                            <li className="nav-item dropdown">
                                <Link id="dropdownSubMenu1" to="#" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false"
                                    className="nav-link dropdown-toggle"> Entradas / Salidas </Link>
                                <ul aria-labelledby="dropdownSubMenu1"
                                    className="dropdown-menu border-0 shadow">
                                    <li><Link to="/InsertarEYSAdmin" className="dropdown-item">
                                        Insertar
                                    </Link></li>
                                    <li><Link to="/MostrarEYSAdmin" className="dropdown-item">
                                        Mostrar
                                    </Link></li>
                                    <li><Link to="/MostrarEYSGraficaAdmin" className="dropdown-item">
                                        Informes
                                    </Link></li>
                                </ul>
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

export default NavbarAdmin