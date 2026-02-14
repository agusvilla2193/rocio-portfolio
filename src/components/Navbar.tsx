"use client";

import React from "react";
import {
    Instagram,
    Linkedin,
    Youtube,
    Video,
    Mail
} from "lucide-react";
import { ENV } from "@/config/env";

/**
 * Interfaz para los enlaces de redes sociales.
 * Usamos React.ReactElement para asegurar que el ícono sea un componente válido.
 */
interface SocialLink {
    href: string;
    icon: React.ReactElement;
    label: string;
    hoverClass: string;
}

const Navbar: React.FC = () => {
    // Definimos los links básicos
    const rawLinks = [
        {
            href: ENV.social.instagram,
            icon: <Instagram size={18} />,
            label: "Instagram",
            hoverClass: "hover:text-[#E1306C]"
        },
        {
            href: ENV.social.tiktok,
            icon: <Video size={18} />,
            label: "TikTok",
            hoverClass: "hover:text-[#00F2EA]"
        },
        {
            href: ENV.social.youtube,
            icon: <Youtube size={18} />,
            label: "YouTube",
            hoverClass: "hover:text-[#FF0000]"
        },
        {
            href: ENV.social.linkedin,
            icon: <Linkedin size={18} />,
            label: "LinkedIn",
            hoverClass: "hover:text-[#0A66C2]"
        },
        {
            href: `mailto:${ENV.contact.email}`,
            icon: <Mail size={18} />,
            label: "Email",
            hoverClass: "hover:text-white"
        },
    ];

    // Filtramos los links que tienen href vacío de forma segura
    const socialLinks: SocialLink[] = rawLinks.filter(link => link.href !== "" && link.href !== undefined);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
            <div className="section-container h-20 flex justify-between items-center w-full">
                {/* Lado Izquierdo: Branding */}
                <div className="flex flex-col items-start select-none">
                    <span className="text-lg font-black tracking-tighter text-white uppercase leading-none">
                        Rocio Diaz Yamaguchi
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-medium mt-1">
                        Creative Video Editor
                    </span>
                </div>

                {/* Lado Derecho: Navegación Social */}
                <div className="flex items-center gap-5">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-zinc-400 transition-all duration-300 hover:scale-125 active:scale-90 ${link.hoverClass}`}
                            aria-label={link.label}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
