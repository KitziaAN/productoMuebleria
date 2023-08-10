import React from 'react';

const BienvenidaEliminacion = () => {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">¡Bienvenido Brisa!</h1>
        <p className="lead">Tienes el Rol de hacer la Eliminacion de todo lo existente</p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h2>¡Gracias por iniciar sesión!</h2>
          <p>Te damos la bienvenida a nuestra página de muebles. Aquí encontrarás una amplia selección de muebles de alta calidad para todos los espacios de tu hogar.</p>
          <p>Explora nuestra colección y descubre piezas únicas que se adapten a tu estilo y necesidades.</p>
        </div>
        <div className="col-md-6">
          <img
            src="/src/Componentes/IMG/Muebles.jpg"
            alt="Muebles de calidad"
            className="img-fluid rounded"
            style={{ maxHeight: "250px" }}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="feature">
            <i className="fas fa-shipping-fast"></i>
            <h3>Envío rápido y seguro</h3>
            <p>Realizamos envíos rápidos y seguros para que tus muebles lleguen en perfecto estado a tu hogar.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature">
            <i className="fas fa-hand-holding-usd"></i>
            <h3>Excelentes precios</h3>
            <p>Ofrecemos muebles de alta calidad a precios competitivos para que puedas amueblar tu hogar sin preocuparte por tu presupuesto.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature">
            <i className="fas fa-hands-helping"></i>
            <h3>Atención personalizada</h3>
            <p>Nuestro equipo estará encantado de ayudarte y brindarte asesoramiento personalizado para que encuentres los muebles perfectos para tu espacio.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BienvenidaEliminacion;
