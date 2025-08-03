import data from '../../data/data.json';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function Sobre() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.section
            id="sobre"
            className="flex flex-col items-center gap-4 mt-20"
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0, transition: { duration: 2 } } : {}}
        >
            <h2 className="text-3xl font-bold font-montserrat">Sobre Mim</h2>
            <p className="text-lg text-center max-w-2xl font-urbanist">
                {data.sobre.description}
            </p>
        </motion.section>
    );
}