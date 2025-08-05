import React from 'react';
import { motion } from 'framer-motion';

export default function TypewriterText({ text, delay = 0, duration = 2.5, className }) {
    const textVariants = {
        hidden: { width: 0 },
        visible: {
            width: '100%', // Anima a largura de 0 a 100%
            transition: {
                duration: duration, // Duração da anima digitação
                delay: delay,       // Atraso antes de começar a digitar
                ease: 'linear',     // Easing linear para simular digitação constante
            },
        },
    };

    return (
        <motion.span
            className={`sm:whitespace-wrap md:whitespace-nowrap overflow-hidden block ${className || ''}`} // `block` para largura funcionar, `whitespace-nowrap` para não quebrar linha
            variants={textVariants}
            initial="hidden"
            animate="visible"
        >
            {text}
        </motion.span>
    );
}