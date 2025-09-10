import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="container py-5">
      <h2 className="display-5 fw-bold text-center mb-5">
        <span className="gradient-title">Sobre</span>
      </h2>
      
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <h3 className="h2 fw-semibold project-title mb-4">Quem sou eu?</h3>
              <p className="project-description mb-3">
                Sou um desenvolvedor apaixonado por tecnologia e inovação. Entregando soluções em desenvolvimento
                web moderno, sempre busco criar soluções eficientes e experiências digitais excepcionais.
              </p>
              <p className="project-description mb-4">
                Com foco em React, TypeScript e outras tecnologias modernas, estou sempre
                aprendendo e evoluindo para entregar o melhor resultado em cada projeto.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">HTML</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="glass-card">
                <h4 className="h4 fw-semibold project-title mb-4">Minhas Especialidades</h4>
                <div>
                  <div className="mb-4">
                    <h5 className="project-title fw-medium mb-2">Desenvolvimento Frontend</h5>
                    <p className="project-description small">
                      Criação de interfaces modernas e responsivas com React e TypeScript.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h5 className="project-title fw-medium mb-2">Desenvolvimento Backend</h5>
                    <p className="project-description small">
                      APIs robustas e escaláveis com Node.js e bancos de dados modernos.
                    </p>
                  </div>
                  <div>
                    <h5 className="project-title fw-medium mb-2">UI/UX Design</h5>
                    <p className="project-description small">
                      Foco na experiência do usuário e design centrado no cliente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
