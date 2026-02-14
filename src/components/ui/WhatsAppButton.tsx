"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppProps {
    phone: string; // Ejemplo: "5491122334455"
    message?: string;
}

const WhatsAppButton: React.FC<WhatsAppProps> = ({ phone, message = "Hola! Me interesa tu trabajo de edición." }) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:rotate-6 transition-all duration-300 group"
            aria-label="Contactar por WhatsApp"
        >
            <div className="absolute right-full mr-3 bg-zinc-900 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-800 pointer-events-none">
                ¿Hablamos de tu proyecto?
            </div>
            <MessageCircle size={28} fill="currentColor" />
        </a>
    );
};

export default WhatsAppButton;
