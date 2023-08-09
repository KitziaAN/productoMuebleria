import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand-md navbar-dark navbar-dark">
                <div className="container">
                    <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                        <ul className="navbar-nav">

                            {/* Index */}
                            <li className="nav-item">
                                <Link to="/Bienvenida" className="nav-link"> Muebleria </Link>
                            </li>

                            {/* <!-- Productos --> */}
                            <li className="nav-item dropdown">
                                <Link id="dropdownSubMenu1" to="#" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false"
                                    className="nav-link dropdown-toggle"> Productos </Link>
                                <ul aria-labelledby="dropdownSubMenu1"
                                    className="dropdown-menu border-0 shadow">
                                    <li><Link to="/InsertarProductos" className="dropdown-item">
                                        Insertar </Link></li>
                                    <li><Link to="/MostrarProductos" className="dropdown-item">
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
                                    <li><Link to="/InsertarCategorias" className="dropdown-item">
                                        Insertar </Link></li>
                                    <li><Link to="/MostrarCategorias" className="dropdown-item">
                                        Mostrar </Link></li>
                                </ul>
                            </li>

                            {/* <!-- Entradas / Salidas --> */}
                            <li className="nav-item dropdown">
                                <Link id="dropdownSubMenu1" to="#" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false"
                                    className="nav-link dropdown-toggle"> Entradas / Salidas </Link>
                                <ul aria-labelledby="dropdownSubMenu1"
                                    className="dropdown-menu border-0 shadow">
                                    <li><Link to="/InsertarEYS" className="dropdown-item">
                                        Insertar
                                    </Link></li>
                                    <li><Link to="/MostrarEYS" className="dropdown-item">
                                        Mostrar
                                    </Link></li>
                                    <li><Link to="/MostrarEYSGrafica" className="dropdown-item">
                                        Informes
                                    </Link></li>
                                </ul>
                            </li>
                        </ul>

                        {/* <!-- Boton Cerrar Sesion --> */}
                        <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                            <li className="nav-item">
                                <Link to="/MostrarLogin">
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

export default Navbar