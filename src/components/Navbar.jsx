import React from 'react';
import {Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
                <div class="container">
                    <Link to="/Bienvenida" class="navbar-brand">
                        <span class="brand-text font-weight-light">Muebleria</span>
                    </Link>
                    <Link to="/Login" class="navbar-brand">
                        <span class="brand-text font-weight-light">Iniciar sesión</span>
                    </Link>

                    <button
                        class="navbar-toggler order-1"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse order-3" id="navbarCollapse">
                        <ul class="navbar-nav">

                            <li class="nav-item dropdown">
                                <Link
                                    id="dropdownSubMenu1"
                                    to="/"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    class="nav-link dropdown-toggle"
                                >
                                    Categorias
                                </Link>
                                <ul
                                    aria-labelledby="dropdownSubMenu1"
                                    class="dropdown-menu border-0 shadow"
                                >
                                    <li>
                                        <Link to="/MostrarCategorias" class="dropdown-item">
                                            Mostrar{" "}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" class="dropdown-item">
                                            Insertar
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <Link
                                    id="dropdownSubMenu1"
                                    to="#"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    class="nav-link dropdown-toggle"
                                >
                                    Productos
                                </Link>
                                <ul
                                    aria-labelledby="dropdownSubMenu1"
                                    class="dropdown-menu border-0 shadow"
                                >
                                    <li>
                                        <Link to="/MostrarProductos" class="dropdown-item">
                                            Mostrar{" "}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Procontent" class="dropdown-item">
                                            Insertar
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <Link
                                    id="dropdownSubMenu1"
                                    to="#"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    class="nav-link dropdown-toggle"
                                >
                                    Registro de salidas / entradas
                                </Link>
                                <ul
                                    aria-labelledby="dropdownSubMenu1"
                                    class="dropdown-menu border-0 shadow"
                                >
                                    <li>
                                        <Link to="/MostrarEyS" class="dropdown-item">
                                            Mostrar{" "}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/EyS" class="dropdown-item">
                                            Insertar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/GraficasEyS" class="dropdown-item">
                                            Informe
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <Link
                                    id="dropdownSubMenu1"
                                    to="#"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    class="nav-link dropdown-toggle"
                                >
                                    Registro de Usuarios
                                </Link>
                                <ul
                                    aria-labelledby="dropdownSubMenu1"
                                    class="dropdown-menu border-0 shadow"
                                >
                                    <li>
                                        <Link to="/MostrarUsuarios" class="dropdown-item">
                                            Mostrar{" "}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Uscontent" class="dropdown-item">
                                            Insertar
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
