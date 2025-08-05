import {
    DiJava,
    DiJavascript,
    DiDatabase,
    DiHtml5,
    DiCss3,
    DiReact,
    DiRedis
} from 'react-icons/di';
import {
    SiTypescript,
    SiSpringboot,
    SiSpringsecurity,
    SiHibernate,
    SiJunit5,
    SiJsonwebtokens,
    SiTailwindcss,
    SiShadcnui,
    SiMysql,
    SiPostgresql,
    SiDocker,
    SiGit

} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const data = {
    sobre: {
        "description": "Sou Desenvolvedor Back-end com foco em Java, Spring Boot, PostgreSQL e boas práticas de código. Desde 2021, desenvolvo APIs RESTful escaláveis, aplicando princípios SOLID, arquitetura limpa, TDD e automação de processos. Tenho experiência prática com versionamento Git, autenticação com JWT, containers Docker e bancos relacionais e não relacionais. Busco sempre entregar código limpo, bem estruturado e orientado a resolver problemas reais"
    },
    skills: {
        languages: [
            {
                name: "Java",
                icon: DiJava,
            },
            {
                name: "Javascript",
                icon: DiJavascript
            },
            {
                name: "Typescript",
                icon: SiTypescript
            },
            {
                name: "SQL",
                icon: DiDatabase
            },
            {
                name: "HTML",
                icon: DiHtml5
            },
            {
                name: "CSS",
                icon: DiCss3
            }
        ],
        backend: [
            {
                name: "Spring Framework",
                icon: SiSpringboot
            },
            {
                name: "Spring Security",
                icon: SiSpringsecurity
            },
            {
                name: "Hibernate",
                icon: SiHibernate
            },
            {
                name: "JUnit",
                icon: SiJunit5
            },
            {
                name: "JWT",
                icon: SiJsonwebtokens
            },
        ],
        frontend: [
            {
                name: "React",
                icon: DiReact
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss
            },
            {
                name: "Framer Motion",
                icon: TbBrandFramerMotion
            },
            {
                name: "Shadcn UI",
                icon: SiShadcnui
            }
        ],
        databases: [
            {
                name: "MySQL",
                icon: SiMysql
            },
            {
                name: "PostgreSQL",
                icon: SiPostgresql
            },
            {
                name: "Redis",
                icon: DiRedis
            }
        ],
        tools: [
            {
                name: "Docker",
                icon: SiDocker
            },
            {
                name: "Docker Compose",
                icon: SiDocker
            },
            {
                name: "Git",
                icon: SiGit
            }
        ],
    },
    projects: [
        {
            name: "API Forum Hub",
            description: "Uma API feita em Java, Spring e MySQL que simula um backend de um forum, permitindo operações CRUD de usuários, tópicos e respostas",
            repository: "https://github.com/calixtollucas/forum-hub",
            technologies: [
                "Java",
                "Spring Boot",
                "Spring Security",
                "JWT",
                "MySQL",
                "API REST"
            ],
        },
        {
            name: "Literalura",
            description: "Um programa em CLI que realiza buscas na API Gutendex e oferece opções de cadastro e listagem de livros e autores. ",
            repository: "https://github.com/calixtollucas/challenge-literalura-lucasodev",
            technologies: [
                "Java",
                "Spring Boot",
                "PostgreSQL",
                "API REST",
                "Consumo de API"
            ],
        },
        {
            name: "NeoJurix",
            description: "NeoJurix foi desenvolvido com o proposito de oferecer ao núcleo de práticas jurídicas da faculdade maurício de nassau um sistema para o gerenciamento de atividades jurídicas.",
            repository: "https://github.com/NotaJuris/backend-notajuris",
            technologies: [
                "Java",
                "Spring Boot",
                "Spring Security",
                "JWT",
                "MySQL",
                "API REST",
            ],
        },
        {
            name: "Conversor de Moedas",
            description: "Uma aplicação em CLI de um conversor de moedas com cotação em tempo real, logs e boas práticas de programação com Java.",
            repository: "https://github.com/calixtollucas/conversor-moedas",
            technologies: [
                "Java",
                "Consumo de API",
                "API REST",
            ],
        },
    ],
    experiencias: [
        {
            role: "Suporte de TI",
            company: "TV Arapuan",
            dates: "Abr 2025 - Presente",
            location: "João Pessoa, PB",
            responsibilities: [
                "Mantive e aprimorei performance de dispositivos de transmissão de vídeo ao vivo, garantindo sempre que possível a máxima qualidade e o maior custo benefício",
                "Atuei como suporte de TI, resolvendo problemas técnicos de usuários e dando manuntenção em sistemas internos",
                "Implementei novos fluxos operacionais para aplicar gravação de matérias jornalísticas em nuvem, otimizando o trabalho de editores e cinegrafistas",
                "Participei ativamente de projetos internos do setor de TI, visando aprimorar a qualidade operacional dentro da empresa e automatizando processos."
            ]
        },
        {
            role: "Administrador de TI",
            company: "ROREE",
            dates: "Out 2024 - Mai 2025",
            location: "João Pessoa, PB",
            responsibilities: [
                "fiz o Design e implementação de Landing Pages com Wordpress + Elementor para empresas",
                "Gerenciei planilhas e outros sistemas internos da empresa, emitindo notas fiscais e organizando os dados",
                "Desenvolvi e implementei Dashboards dinâmicos usando Google Looker"
            ]
        }
    ],
    contatos: {
        email: "contato.lucaslcalixto334@gmail.com",
        linkedin: "https://www.linkedin.com/in/lucaslcalixto/",
        github: "https://github.com/calixtollucas"
    }
}

export default data;
