// src/components/Contato.jsx

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import data from '../../data/data';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

export default function Contato() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.section
            id="contato"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="container mx-auto p-8 pt-20 flex flex-col items-center"
        >
            <motion.h2
                className="text-4xl text-primary font-bold mb-4 text-center"
                variants={itemVariants}
            >
                Entre em Contato
            </motion.h2>

            <motion.p
                className="text-center text-lg text-primary mb-12 max-w-2xl mx-auto"
                variants={itemVariants}
            >
                Ficarei feliz em me conectar! Encontre-me nas plataformas abaixo ou envie um email.
            </motion.p>

            <motion.div
                className="flex flex-col gap-6 max-w-4/5"
                variants={containerVariants}
            >
                {/* Opções de Contato */}
                <motion.a
                    href={`mailto:${data.contatos.email}`}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card text-card-foreground hover:bg-card/80 hover:text-accent transition-colors shadow-md"
                    variants={itemVariants}
                    whileHover={
                        {
                            scale: 1.05
                        }
                    }
                    transition={
                        { type: "spring" }
                    }
                >
                    <Mail className="h-6 w-6 text-primary" />
                    <span className="text-lg font-semibold">Email</span>
                </motion.a>

                <motion.a
                    href="https://www.linkedin.com/in/lucaslcalixto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent flex items-center gap-4 p-4 rounded-lg bg-card text-card-foreground hover:bg-card/80 transition-colors shadow-md"
                    variants={itemVariants}
                    whileHover={
                        {
                            scale: 1.05
                        }
                    }
                    transition={
                        { type: "spring" }
                    }
                >
                    {/*Linkedin*/}
                    <FaLinkedin className="h-6 w-6 text-primary" />
                    <span className="text-lg font-semibold">LinkedIn</span>
                </motion.a>

                <motion.a
                    href="https://github.com/calixtollucas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent flex items-center gap-4 p-4 rounded-lg bg-card text-card-foreground hover:bg-card/80 transition-colors shadow-md"
                    variants={itemVariants}
                    whileHover={
                        {
                            scale: 1.05
                        }
                    }
                    transition={
                        { type: "spring" }
                    }
                >
                    <FaGithub className="h-6 w-6 text-primary" />
                    <span className="text-lg font-semibold">GitHub</span>
                </motion.a>
            </motion.div>
        </motion.section>
    );
}