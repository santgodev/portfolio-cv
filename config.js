// Configuración del Portafolio CV
// Modifica estos valores para personalizar tu portafolio

const PORTFOLIO_CONFIG = {
    // Información Personal
    personal: {
        name: "Santiago Guevara",
        title: "Full Stack Developer | SOC Cybersecurity Analyst",
        description: "Transformando ideas en soluciones digitales seguras y escalables, combinando desarrollo de software con análisis de ciberseguridad para crear un futuro tecnológico más seguro.",
        email: "santy.29.2004@gmail.com",
        phone: "+57 3102297981",
        location: "Bogotá, Colombia",
        cvFile: "assets/cv.pdf"
    },

    // Redes Sociales
    social: {
        linkedin: "https://www.linkedin.com/in/santiago-guevara-8a59112a4/",
        github: "https://github.com/santgodev",
    },

    // Estadísticas
    stats: {
        experience: "1+",
        projects: "2+",
        certifications: "10+",
        satisfaction: "100%"
    },

    // Experiencia Laboral
    experience: [
     
        {
            title: "SOC Cybersecurity Analyst",
            company: "Mnemo Colombia ",
            period: "10/2024 - Presente",
            achievements: [
                "Reducción del 60% en incidentes de seguridad",
                "Análisis de malware y forense digital",
                "Configuración y monitoreo de SIEM",
                "Automatización de procesos de respuesta a incidentes"
            ]
        },
        {
            title: "Full Stack Developer",
            company: "Sinapptic SAS",
            period: "04/2024 - 09/2024",
            achievements: [
                "Desarrollo de microservicios con Spring Boot y Node.js",
                "Reducción del 40% en tiempo de respuesta de APIs",
                "Mentoría a desarrolladores junior"
            ]
        },
        {
            title: "Desarrollador Backend",
            company: "Sistran Soluciones de Software Seguros",
            period: "10/2021 - 04/2022",
            achievements: [
                "Desarrollo de APIs REST con Spring Boot",
                "Optimización de consultas SQL mejorando rendimiento en 35%",
                "Implementación de autenticación JWT",
                "Integración con servicios de terceros"
            ]
        }
    ],

    // Educación
    education: [
        {
            title: "Ingeniería de Sistemas",
            institution: "Universidad San Jose",
            period: "2023 - En curso",
            description: "Formación en desarrollo de software, arquitectura de sistemas y tecnologías emergentes."
        },
        {
            title: "Tecnólogo en Gestión de Redes",
            institution: "SENA",
            period: "2020 - 2022",
            description: "Especialización en redes de computadores, seguridad informática y administración de sistemas."
        }
    ],

    // Certificaciones
    certifications: [
        {
            name: "CCNA Routing and Switching",
            institution: "Cisco",
            date: "2023",
            icon: "fab fa-cisco"
        },
        {
            name: "Google Cloud Professional",
            institution: "Google Cloud",
            date: "2023",
            icon: "fab fa-google"
        },
        {
            name: "CompTIA Security+",
            institution: "CompTIA",
            date: "2022",
            icon: "fas fa-shield-alt"
        },
        {
            name: "AWS Solutions Architect",
            institution: "Amazon Web Services",
            date: "2022",
            icon: "fab fa-aws"
        }
    ],

    // Cursos de IA
    aiCourses: [
        {
            name: "Machine Learning Fundamentals",
            institution: "Coursera - Stanford University",
            status: "En progreso",
            progress: 75
        },
        {
            name: "Prompt Engineering",
            institution: "OpenAI",
            status: "Completado",
            progress: 100
        },
        {
            name: "Deep Learning Specialization",
            institution: "Coursera - DeepLearning.AI",
            status: "Planificado",
            progress: 0
        }
    ],

    // Habilidades Técnicas
    skills: {
        cybersecurity: [
            { name: "SIEM", level: 90 },
            { name: "Digital Forensics", level: 85 },
            { name: "Malware Analysis", level: 80 },
            { name: "Fortinet", level: 85 },
            { name: "Nmap", level: 90 },
            { name: "Wireshark", level: 85 }
        ],
        backend: [
            { name: "Spring Boot", level: 95 },
            { name: "Node.js", level: 90 },
            { name: "Express.js", level: 85 },
            { name: "API REST", level: 95 },
            { name: "PostgreSQL", level: 90 },
            { name: "MySQL", level: 85 }
        ],
        frontend: [
            { name: "Angular", level: 90 },
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 90 },
            { name: "Bootstrap", level: 85 },
            { name: "Tailwind CSS", level: 80 }
        ],
        cloud: [
            { name: "AWS", level: 85 },
            { name: "Google Cloud", level: 80 },
            { name: "Docker", level: 85 },
            { name: "Jenkins", level: 80 },
            { name: "CI/CD", level: 85 }
        ]
    },

    // Proyectos
    projects: [
        {
            title: "Sistema de Microservicios E-commerce",
            description: "Plataforma de comercio electrónico construida con microservicios usando Spring Boot, Node.js y Angular. Implementa autenticación JWT y pagos seguros.",
            image: "assets/project1.jpg",
            technologies: ["Spring Boot", "Angular", "PostgreSQL", "Docker"],
            github: "#",
            demo: "#"
        },
        {
            title: "SIEM Dashboard de Seguridad",
            description: "Panel de control para monitoreo de seguridad en tiempo real. Integra múltiples fuentes de datos y proporciona alertas automatizadas de amenazas.",
            image: "assets/project2.jpg",
            technologies: ["Node.js", "React", "Elasticsearch", "Kibana"],
            github: "#",
            demo: "#"
        },
        {
            title: "Plataforma de Análisis de Malware",
            description: "Herramienta para análisis automático de malware con sandbox virtual y reportes detallados. Incluye machine learning para detección de amenazas.",
            image: "assets/project3.jpg",
            technologies: ["Python", "Django", "TensorFlow", "AWS"],
            github: "#",
            demo: "#"
        }
    ],

    // Badges
    badges: [
        {
            title: "Top Performer",
            description: "Reconocimiento por excelencia en desarrollo de software",
            date: "2023",
            icon: "fas fa-trophy"
        },
        {
            title: "Security Champion",
            description: "Líder en implementación de mejores prácticas de seguridad",
            date: "2022",
            icon: "fas fa-shield-alt"
        },
        {
            title: "Team Player",
            description: "Reconocimiento por colaboración y trabajo en equipo",
            date: "2022",
            icon: "fas fa-users"
        },
        {
            title: "Innovation Award",
            description: "Premio por innovación en soluciones tecnológicas",
            date: "2021",
            icon: "fas fa-rocket"
        }
    ],

    // Configuración de Animaciones
    animations: {
        aosDuration: 800,
        aosEasing: 'ease-in-out',
        aosOnce: true,
        aosOffset: 100
    },

    // Configuración de Colores
    colors: {
        primary: "#2563eb",
        primaryDark: "#1d4ed8",
        secondary: "#06b6d4",
        accent: "#10b981",
        textPrimary: "#1f2937",
        textSecondary: "#6b7280",
        textLight: "#9ca3af",
        bgPrimary: "#ffffff",
        bgSecondary: "#f8fafc",
        bgDark: "#1f2937",
        borderColor: "#e5e7eb"
    }
};

// Función para aplicar la configuración
function applyConfig() {
    // Aplicar información personal
    document.querySelector('.hero-title').textContent = PORTFOLIO_CONFIG.personal.name;
    document.querySelector('.hero-subtitle').textContent = PORTFOLIO_CONFIG.personal.title;
    document.querySelector('.hero-description').textContent = PORTFOLIO_CONFIG.personal.description;
    
    // Aplicar estadísticas
    const stats = document.querySelectorAll('.stat-number');
    stats[0].textContent = PORTFOLIO_CONFIG.stats.experience;
    stats[1].textContent = PORTFOLIO_CONFIG.stats.projects;
    stats[2].textContent = PORTFOLIO_CONFIG.stats.certifications;
    stats[3].textContent = PORTFOLIO_CONFIG.stats.satisfaction;
    
    // Aplicar información de contacto
    const contactItems = document.querySelectorAll('.contact-details p');
    contactItems[0].textContent = PORTFOLIO_CONFIG.personal.email;
    contactItems[1].textContent = PORTFOLIO_CONFIG.personal.phone;
    contactItems[2].textContent = PORTFOLIO_CONFIG.personal.location;
    
    // Aplicar enlaces sociales
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks[0].href = PORTFOLIO_CONFIG.social.linkedin;
    socialLinks[1].href = PORTFOLIO_CONFIG.social.github;
    socialLinks[2].href = PORTFOLIO_CONFIG.social.twitter;
    socialLinks[3].href = PORTFOLIO_CONFIG.social.instagram;
    
    // Aplicar configuración de AOS
    AOS.init({
        duration: PORTFOLIO_CONFIG.animations.aosDuration,
        easing: PORTFOLIO_CONFIG.animations.aosEasing,
        once: PORTFOLIO_CONFIG.animations.aosOnce,
        offset: PORTFOLIO_CONFIG.animations.aosOffset
    });
}

// Exportar configuración para uso global
window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;

// Aplicar configuración cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', applyConfig); 