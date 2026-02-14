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
 * Garantiza que no se utilicen tipos 'any'.
 */
interface SocialLink {
    href: string;
    icon: React.JSX.Element; // Usamos React.JSX.Element para mayor precisión en v19
    label: string;
}

const Navbar: React.FC = () => {
    // Generamos la lista de links filtrando aquellos que no tengan URL configurada
    const socialLinks: SocialLink[] = [
        { href: ENV.social.instagram, icon: <Instagram size={18} />, label: "Instagram" },
        { href: ENV.social.tiktok, icon: <Video size={18} />, label: "TikTok" },
        { href: ENV.social.youtube, icon: <Youtube size={18} />, label: "YouTube" },
        { href: ENV.social.linkedin, icon: <Linkedin size={18} />, label: "LinkedIn" },
        { href: `mailto:${ENV.contact.email}`, icon: <Mail size={18} />, label: "Email" },
    ].filter((link): link is SocialLink => link.href !== "");

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center w-full">
                {/* Lado Izquierdo: Branding */}
                <div className="flex flex-col items-start">
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
                            className="text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
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
