import data from '../../data/data';
import { Card } from '../ui/card';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <motion.section
            id='skills'
            className="flex flex-col items-center gap-6 mt-20"
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0, transition: { duration: 2 } } : {}}
        >
            <h2 className="text-5xl font-bold">Minhas Skills</h2>
            <h3 className="text-3xl font-semibold">Linguagens</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {data.skills.languages.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <Card className="w-32 h-32 flex items-center justify-center" key={index}>
                            <div className="flex flex-col items-center justify-center">
                                <Icon className="text-4xl mb-2" />
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                        </Card>
                    );
                })}
            </div>
            <h3 className="text-3xl font-semibold">Back-end</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {data.skills.backend.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <Card className="w-32 h-32 flex items-center justify-center text-center" key={index}>
                            <div className="flex flex-col items-center justify-center">
                                <Icon className="text-4xl mb-2" />
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                        </Card>
                    );
                })}
            </div>
            <h3 className="text-3xl font-semibold">Front-end</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {data.skills.frontend.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <Card className="w-32 h-32 flex items-center justify-center text-center" key={index}>
                            <div className="flex flex-col items-center justify-center">
                                <Icon className="text-4xl mb-2" />
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                        </Card>
                    );
                })}
            </div>
            <h3 className="text-3xl font-semibold">Databases</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {data.skills.databases.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <Card className="w-32 h-32 flex items-center justify-center text-center" key={index}>
                            <div className="flex flex-col items-center justify-center">
                                <Icon className="text-4xl mb-2" />
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                        </Card>
                    );
                })}
            </div>
            <h3 className="text-3xl font-semibold">Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {data.skills.tools.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <Card className="w-32 h-32 flex items-center justify-center text-center" key={index}>
                            <div className="flex flex-col items-center justify-center">
                                <Icon className="text-4xl mb-2" />
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </motion.section>
    );
}