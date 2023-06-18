const Aside = () => {
    return (
      <>
      
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
      
  <div class="brand-link d-flex justify-content-between align-items-center">
  <a class="brand-link" href="index3.html">
  {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"> */}
  <span class="brand-text font-weight-light">MUEBLERIA UTP</span>
  </a>
  
  <a class="nav-link" data-widget="control-sidebar" href="#" role="button"><i class="fas fa-bars"></i></a>
  
  </div>
  <aside class="control-sidebar control-sidebar-light">
      <div class="p-3">
  </div>
  
  </aside>
  
      <div className="sidebar">
        
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
          </div>
          
  
          <div className="info">
            <a href="#" className="d-block">Version 1.0.0 BETA</a>
          </div>
        </div>
        
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>
  
        
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            
            
            <li className="nav-item menu-open">
              
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../layout/top-nav.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Categorias</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../layout/top-nav-sidebar.html" className="nav-link active">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Productos</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../layout/boxed.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Usuarios</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../layout/fixed-sidebar.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Registros</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../layout/fixed-sidebar.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Graficas</p>
                  </a>
                </li>
  
              </ul>
            </li>
           
          </ul>
        </nav>
        
      </div>
      
    </aside>
      </>
    )
  }
  
  export default Aside