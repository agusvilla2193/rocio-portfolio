"use client";

import React, { useRef } from 'react';
import { Project } from '@/types';

interface VideoCardProps {
    project: Project;
}

export const VideoCard: React.FC<VideoCardProps> = ({ project }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch((err) => console.log("Playback error:", err));
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className="group relative bg-brand-surface/50 rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-white/20 shadow-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="aspect-[9/16] w-full overflow-hidden bg-black">
                <video
                    ref={videoRef}
                    src={project.videoUrl}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
                />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/60 to-transparent translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-brand-muted font-medium">
                    {project.country} • <span className="text-white/60">{project.category}</span>
                </p>
            </div>
        </div>
    );
};
