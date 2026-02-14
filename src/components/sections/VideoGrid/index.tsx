"use client";

import React, { useEffect, useState } from 'react';
import { VideoCard } from './VideoCard';
import { getProjects } from '@/data/projects';
import { Project } from '@/types';

const VideoGrid: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Simulamos la carga asíncrona para no harcodear la vista
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                console.error("Error loading projects:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div className="py-20 text-center text-brand-muted uppercase tracking-widest animate-pulse">
                Cargando portfolio...
            </div>
        );
    }

    return (
        <section id="work" className="py-24">
            <div className="section-container">
                <div className="flex flex-col mb-12 text-start">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-brand-muted mb-2 font-bold">
                        Proyectos Seleccionados
                    </h2>
                    <div className="h-px w-20 bg-white/10" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <VideoCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoGrid;
