import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <strong>Desarrollo Web Integral 9° A</strong>
        <div>M.I Paulo Daniel Vazquez Mora</div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    marginTop: '20px', // Espacio en blanco arriba del footer
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
};

export default Footer;