"use client";

import React from "react";
import { Button } from "@/components/ui";

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Background Glow dinámico usando Tailwind v4 variables */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-muted)_0%,transparent_70%)] opacity-10 -z-10" />

            <div className="section-container">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic mb-6 bg-gradient-to-b from-white to-brand-muted bg-clip-text text-transparent">
                    VISUAL <br /> STORYTELLER
                </h1>
                <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Transformando paisajes en experiencias cinematográficas.
                    Especialista en edición de Reels y contenido documental.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#work">
                        <Button variant="primary">Explorar Proyectos</Button>
                    </a>
                    <a href="#contact">
                        <Button variant="outline">Trabajemos Juntos</Button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
