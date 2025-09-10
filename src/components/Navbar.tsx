import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #374151'}}>
      <div className="container">
        <div className="navbar-brand fs-3 fw-bold">        
          <span className="gradient-title">Lucas Noronha</span>
        </div>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          style={{border: 'none'}}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto d-flex align-items-center gap-3">
            <a href="#home" className="nav-link project-title">Home</a>
            <a href="#about" className="nav-link project-title">Sobre</a>
            <a href="#projects" className="nav-button">Projetos</a>
            <a href="#contact" className="nav-button">Contato</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
