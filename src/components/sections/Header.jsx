import ToggleTheme from "../ToggleTheme"
import { motion } from "motion/react"

export default function Header() {

    const handleScrollTo = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const links = [
        {
            "name": "Home",
            "href": "home"
        },
        {
            "name": "Sobre",
            "href": "sobre"
        },
        {
            "name": "Skills",
            "href": "skills"
        },
        {
            "name": "Projetos",
            "href": "projetos"
        },
        {
            "name": "Experiências",
            "href": "experiencias"
        },
        {
            "name": "Contato",
            "href": "contato"
        },
    ]

    return (
        <header className="flex flex-row bg-primary-foreground p-4 justify-center gap-2 shadow-sm">
            <nav className="flex flex-1 gap-4 items-center justify-center ">
                {
                    links.map((link, index) => (
                        <motion.a
                            key={index}
                            href={`#${link.href}`}
                            className="text-primary hover:text-accent transition-colors duration-300"
                            whileHover={{ y: -2 }}
                            onClick={(e) => handleScrollTo(e, link.href)}
                        >
                            {link.name}
                        </motion.a>
                    ))
                }
            </nav>
            <ToggleTheme className="flex-1" />
        </header >
    )
}