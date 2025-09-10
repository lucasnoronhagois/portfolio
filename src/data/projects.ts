export interface Project {
  id: number;
  title: string;
  images: string[];
  description: string;
  githubLink: string;
  liveLink: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Projeto Clinical",
    images: [
      "/clinicallogin.png",
      "/patientdetails.png",
      "/clinicalreports.png"
    ],
    description: "API REST - Sistema completo de gerenciamento de clínica médica com atendimentos e relatórios. (Projeto privado no GitHub)",
    githubLink: "https://github.com/lucasnoronhagois/clinicaldeploy",
    liveLink: "https://clinicaldeploy.vercel.app/login",
    tags: ["Node.js", "TypeScript", "React", "MySQL", "Bootstrap", "Middleware", "JWT"]
  },
  {
    id: 2,
    title: "Calendário de Eventos",
    images: [
      "/boxcalendar.png",
      "/boxcalendar2.png",
    ],
    description: "Sistema desenvolvido para consulta de eventos de um determinado jogo online ",
    githubLink: "https://github.com/lucasnoronhagois/box-calendar",
    liveLink: "https://box-calendar-two.vercel.app/",
    tags: ["JavaScript", "HTML", "CSS", "Charts.js"]
  },
  {
    id: 3,
    title: "How Many Tries",
    images: [
      "/howmanytries.png",
      "/howmanytries2.png",      
    ],
    description: "Sistema desenvolvido para simulação de quantas tentativas seriam necessárias para um determinado evento ocorrer",
    githubLink: "https://github.com/lucasnoronhagois/how-many-tries",
    liveLink: "https://how-many-tries.vercel.app/",
    tags: ["React", "Node.js", "MongoDB", "Stripe"]
  }
];
