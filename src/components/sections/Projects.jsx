// src/components/Projects.jsx

import data from "../../data/data"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react"; // <<--- NOVO: Ícones do Lucide React
import AutoHeight from "embla-carousel-auto-height";

export default function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });

    const apiRef = useRef(null);

    return (
        <motion.section
            id="projetos"
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 2, type: "spring", damping: 10, stiffness: 100 }}
            className="flex flex-col items-center justify-center w-screen">
            <h2 className="text-4xl text-primary font-bold">Meus Projetos</h2>
            <Carousel
                className="m-20 w-4/5"
                setApi={(api) => apiRef.current = api}
                opts={
                    {
                        loop: true,
                    }
                }
                plugins={[AutoHeight()]}>
                <CarouselContent>
                    {data.projects.map((p, index) => (
                        <CarouselItem className="lg:basis-1/3 sm:basis-1/2 basis-70">
                            <Card>
                                <CardContent className="flex flex-col gap-4 items-start justify-center">
                                    <h4 className="text-2xl font-bold font-montserrat">{p.name}</h4>
                                    <span className="text-sm">{p.description}</span>
                                    <p>Repositório: <a target="_blank" className="underline text-wrap whitespaces-wrap" href={p.repository} >{p.repository}</a></p>
                                    <div className="flex flex-wrap gap-5">
                                        {p.technologies.map((t, index) => (
                                            <Badge key={index} className="bg-accent">{t}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className="hidden md:flex" />
                <CarouselPrevious className="hidden md:flex" />
                <div className="flex justify-center items-center gap-4 mt-4 mb-20 md:hidden">
                    <button
                        onClick={() => apiRef.current?.scrollPrev()}
                        className="h-8 w-8 rounded-full border bg-background text-foreground shadow hover:bg-accent hover:text-accent justify-center items-center flex "
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={() => apiRef.current?.scrollNext()}
                        className="h-8 w-8 rounded-full border bg-background text-foreground shadow hover:bg-accent hover:text-accent justify-center items-center flex"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </Carousel>

        </motion.section>
    );
}