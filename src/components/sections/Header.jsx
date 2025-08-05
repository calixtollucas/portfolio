import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ToggleTheme from "../ToggleTheme";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScrollTo = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const links = [
        { "name": "Home", "href": "home" },
        { "name": "Sobre", "href": "sobre" },
        { "name": "Skills", "href": "skills" },
        { "name": "Projetos", "href": "projetos" },
        { "name": "Experiências", "href": "experiencias" },
        { "name": "Contato", "href": "contato" },
    ];

    const menuVariants = {
        hidden: { x: "100%" },
        visible: { x: "0%", transition: { type: "spring", stiffness: 100 } },
    };

    return (
        <header className="sticky w-screen z-50 bg-background/80 backdrop-blur-sm p-4 shadow-sm flex items-center justify-center md:justify-beetween">

            {/* Menu Hambúrguer: visível apenas em telas pequenas */}
            <div className="flex items-center gap-4 md:hidden">
                <ToggleTheme />
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-full text-primary hover:bg-secondary/20 transition-colors"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Menu Desktop: visível apenas em telas maiores */}
            <nav className="hidden md:flex gap-6 items-center">
                {links.map((link) => (
                    <motion.a
                        key={link.href}
                        href={`#${link.href}`}
                        className="text-primary hover:text-accent transition-colors duration-300"
                        whileHover={{ y: -2 }}
                        onClick={(e) => handleScrollTo(e, link.href)}
                    >
                        {link.name}
                    </motion.a>
                ))}
                <div className="ml-4">
                    <ToggleTheme />
                    <motion.a
                        href="#contato"
                        className="ml-4 p-2 px-4 rounded-full font-bold text-white 
                               bg-gradient-to-r from-red-500 to-red-700 
                               hover:from-red-600 hover:to-red-800 transition-colors"
                        whileHover={{ y: -2 }}
                        onClick={(e) => handleScrollTo(e, 'contato')}
                    >
                        Me Contrate
                    </motion.a>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden fixed top-0 left-0 w-full h-screen bg-background z-50 flex flex-col items-center p-8 overflow-y-auto"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                    >
                        {/* Botão de Fechar e ToggleTheme dentro do menu móvel */}
                        <div className="absolute top-4 right-4 flex items-center gap-4">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-full text-primary hover:bg-secondary/20 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Links do menu móvel */}
                        <div className="flex flex-col items-center justify-center gap-4 mt-12">
                            {links.map((link) => (
                                <motion.a
                                    key={link.href}
                                    href={`#${link.href}`}
                                    className="text-primary text-2xl font-bold hover:text-accent transition-colors duration-300"
                                    onClick={(e) => handleScrollTo(e, link.href)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                        <motion.a
                            href="#contato"
                            className="ml-4 p-2 px-4 rounded-full font-bold text-white 
                               bg-gradient-to-r from-red-500 to-red-700 mt-4
                               hover:from-red-600 hover:to-red-800 transition-colors"
                            whileHover={{ y: -2 }}
                            onClick={(e) => handleScrollTo(e, 'contato')}
                        >
                            Me Contrate
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}