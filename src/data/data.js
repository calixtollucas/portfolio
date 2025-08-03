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
    }
}

export default data;
