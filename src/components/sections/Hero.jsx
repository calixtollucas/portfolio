import { motion } from "motion/react";
import TypewriterText from "../TypewriterText";

export default function Hero() {
    return (
        <motion.section className="container flex gap-4 items-center justify-around p-5 md:flex-row flex-col-reverse"
            initial={{ opacity: 0, y: 50 }}
            animate={{
                opacity: 1, y: 0,
                transition: {
                    duration: 2, // Aumenta a duração para uma transição mais lenta
                    ease: "easeInOut" // Muda o easing para 'easeInOut' para suavizar a animação
                }
            }}
            id="home"
        >
            <div className="hero-left flex flex-col items-center md:items-start max-w-5/6">
                <h3>Oi, eu sou o</h3>
                <h1 className="text-5xl font-bold font-urbanist text-center text-wrap md:text-left">Lucas Calixto</h1>
                <TypewriterText className="font-mono text-accent text-2xl text-center" text="Desenvolvedor Java Back-end" />
            </div>
            <motion.div
                className="hero-right"
                initial={
                    { y: 0 }
                }
                animate={
                    {
                        y: [0, -10, 0, 10, 0], // Mantemos os keyframes para flutuar para cima e para baixo
                        transition: {
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "linear",// <<--- MUDANÇA CHAVE AQUI: 'linear' ou um array de easing customizado
                            duration: 5,      // <<--- MUDANÇA CHAVE AQUI: Aumentar a duração para ser mais lento
                        }
                    }
                }
            >
                <img src="src/assets/euwebp.webp"
                    alt="Hero Image"
                    className="hero-image rounded-full w-64 h-64 object-cover shadow-lg"
                />
            </motion.div>
        </motion.section >
    );
}