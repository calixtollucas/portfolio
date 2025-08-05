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
        "description": "Sou Desenvolvedor Back-end especializado em Java, Spring Boot, bancos de dados Relacionais e Desenvolvimento de API's REST. Desde 2021 venho desenvolvendo APIs RESTful escaláveis e testáveis, aplicando princípios SOLID, arquitetura limpa, TDD e boas práticas de versionamento com Git. Tenho experiência com Java, Spring Boot (Spring Framework), JPA (Hibernate), PostgreSQL, MySQL, Redis, MongoDB, Docker, JUnit, Mockito e Maven — tecnologias que aplico em projetos reais e pessoais com foco em organização de código, automação de processos e estabilidade de sistemas."
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
    ]
}

export default data;
