import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Gastón Montivero — Full Stack Developer",
  author: "Gastón Eduardo Montivero",
  description:
    "Licenciado en Sistemas, resido en CABA, ARG SA. Me especializo en el desarrollo y mantenimiento de sistemas de web y de escritorio.",
  lang: "es",
  siteLogo: "/gaston-montivero.jpeg",
  navLinks: [
    { text: "Experiencia", href: "#experience" },
    { text: "Proyectos", href: "#projects" },
    { text: "Sobre mi", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "www.linkedin.com/in/gaston-montivero-e28" },
    { text: "Github", href: "https://github.com/gmontivero" },    
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Gastón Montivero",
    specialty: "Full Stack Developer",
    summary:
      "Licenciado en Sistemas, resido en Capital Federal, ARG. Me especializo en el desarrollo y mantenimiento de sistemas de web y de escritorio.",
    email: "gaston.e.montivero@gmail.com",
  },
  experience: [
    {
      company: "Ministerio de Producción de La Nación",
      position: "Desarrollador Backend",
      startDate: "Abril 2020",
      endDate: "Diciembre 2024",
      summary: [
        "Desarrollo y mantenimiento de Sistema Backend API REST, control de usuarios. Integración con clientes internos y externos, Consumo de servicios web externos usando SOAP y API REST.",
        "Lidere un pequeño equipo para el desarrollo y mantenimiento de un sistema monolítico que maneja expedientes que consume información de Apis externas e internas al organismo.",
      ],
    },
    {
      company: "Ministerio de Transporte de La Nación",
      position: "Desarrollador",
      startDate: "Agosto 2018",
      endDate: "Marzo 2020",
      summary: [
        "Desarrollo y mantenimiento de sistema Legacy de escritorio empresarial, se disminuyó los errores del sistema teniendo la tasa más baja, también se mejoró la velocidad de proceso administrativo. Se agrego más control sobre las tareas de los usuarios.",
        "Desarrollo de sistema web, trabajo en equipo con metodologías ágiles, temporalmente estuve a cargo del equipo controlando y haciendo integraciones del código.",
      ],
    },
    {
      company: "Ministerio de Salud de La Rioja",
      position: "Desarrollador Web",
      startDate: "Agosto 2012",
      endDate: "Diciembre 2018",
      summary:
        "Desarrollo web de varios sistemas para el uso de programas provincial sobre control de salud, sistemas orientados a la carga de datos masivos y a los análisis estadísticos.",
    },
    {
      company: "Answer Soft SRL",
      position: "Desarrollador",
      startDate: "Enero 2006",
      endDate: "Mayo 2012",
      summary:
        "Desarrollo de sistema de escritorio para comercios, con manejo de ocx y dll externas, módulos de facturación, control de depósitos y sucursales",
    },
    {
      company: "Colegio Médico de La Rioja",
      position: "Desarrollador",
      startDate: "Enero 2003",
      endDate: "Julio 2005",
      summary:
        "Desarrollo sistema de escritorio para la carga, control, liquidación y pago de ordenes médicas, manejo de grandes volúmenes de datos mensuales, se logró mejorar los procesos de la institución en un 30%, permitiendo a la empresa mermar un día de trabajo a la semana.",
    },
  ],
  projects: [
    {
      name: "Sistema de Ventas para Pymes",
      summary: "Sistema de facturación con control de stock y manejo de sucursales.",
      linkPreview: "http://answersoft.com.ar/",
      linkSource: "http://answersoft.com.ar/",
      image: "/answersoft.png",
    },
    {
      name: "Digesto Municipal",
      summary: "Sitio web institucional con administración para mostrar las actividades del consejo deliberante municipal.",
      linkPreview: "https://cda.unidad2.com.ar/",
      linkSource: "https://github.com/gmontivero/digesto",
      image: "/digesto.png",
    },
  ],
  about: {
    description: `
     Soy un desarrollador de sistemas con 15 años de experiencia en el diseño y desarrollo de aplicaciones web y de escritorio. A lo largo de mi carrera, me he especializado en tecnologías como PHP, JavaScript, Vue.js y Laravel, creando soluciones innovadoras y robustas que se ajustan a las necesidades de los usuarios y las empresas.

    Mi trayectoria incluye la creación de sistemas escalables, la optimización de procesos existentes y la implementación de interfaces de usuario dinámicas y funcionales. Con un profundo conocimiento en backend, soy capaz de integrar diversas herramientas y frameworks para entregar productos de alta calidad.
    `,
    image: "/gaston-montivero.jpeg",
  },
};

// #5755ff
