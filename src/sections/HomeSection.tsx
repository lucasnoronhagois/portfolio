import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="container py-5">
      <h1 className="display-4 fw-bold text-center mb-5">
        <span className="project-title">Soluções </span>
        <span className="gradient-title">Inteligentes</span>
      </h1>
      
      <div className="text-center mb-5">
        <p className="fs-4 project-description mx-auto" style={{ maxWidth: '600px' }}>
        Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais.        </p>
      </div>
    </section>
  );
};

export default HomeSection;
