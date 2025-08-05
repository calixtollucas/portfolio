// src/components/Experience.jsx

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import data from '../../data/data';

// Dados de exemplo das suas experiências
const experiencesData = data.experiencias;

// Animações para a seção e para os itens
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Atraso na animação de cada filho
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

export default function Experiencias() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.section
            id="experiencias"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="container mx-auto p-8"
        >
            <motion.h2
                className="text-4xl text-primary font-bold mb-12 text-center"
                variants={itemVariants}
            >
                Experiências
            </motion.h2>

            <div className="flex flex-col gap-8">
                {experiencesData.map((exp, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.03
                        }}
                        transition={{
                            type: "spring", damping: 10, stiffness: 100
                        }}
                        className="bg-card text-card-foreground p-6 rounded-lg shadow-md border-l-4 border-accent hover:text-accent"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="text-2xl font-semibold font-montserrat">
                                    {exp.role}
                                </h3>
                                <p className="text-lg font-bold text-primary">
                                    {exp.company}
                                </p>
                            </div>
                            <div className="text-right">
                                <span className="block text-sm font-light text-muted-foreground">
                                    {exp.dates}
                                </span>
                                <span className="block text-sm font-light text-muted-foreground">
                                    {exp.location}
                                </span>
                            </div>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-primary">
                            {exp.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}