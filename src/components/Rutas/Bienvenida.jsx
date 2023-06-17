const Bienvenida = () => {
    return (
        <div class="card card-primary">
  <div class="card-header">
   <h3 class="card-title" >¡Bienvenidos a todos!</h3> 
    <div class="card-tools">
     
      <button type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fas fa-expand"></i></button>
 
      <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
     
      <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
    </div>
  </div>
  
  <div class="card-body">
  <div class="timeline">
  <div class="time-label">
    <span class="bg-green">17 Jun. 2023</span>
  </div>
  <div>
    <i class="fas fa-envelope bg-blue"></i>
    <div class="timeline-item">
      <span class="time"><i class="fas fa-clock"></i> 12:05</span>
      <h3 class="timeline-header"><a href="#">Muebleria UTP </a> te invita a conocer las nuevas promociones</h3>
      <div class="timeline-body">
      </div>
      <div class="timeline-footer">
        <a class="btn btn-primary btn-sm">ir a productos</a>
        <a class="btn btn-danger btn-sm">Borrar</a>
      </div>
    </div>
  </div>
  <div>
    <i class="fas fa-clock bg-gray"></i>
  </div>
  
</div>   
<center>
  <img
  src={'../public/dist/img/mueble.png'}
  alt="">
  </img></center>   
  </div>
</div>

    )
    }
  
  export default Bienvenida