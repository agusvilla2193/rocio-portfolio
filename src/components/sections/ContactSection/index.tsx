"use client";

import React from "react";
import { Button } from "@/components/ui";
import { ENV } from "@/config/env";

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-32 border-t border-white/5 bg-brand-surface/20">
            <div className="section-container text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 italic uppercase tracking-tighter italic">
                    ¿Listo para elevar <br /> tu contenido?
                </h2>
                <p className="text-brand-muted mb-12 max-w-md mx-auto">
                    Ediciones de alto impacto que retienen la audiencia y potencian tu marca personal.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href={`mailto:${ENV.contact.email}`}>
                        <Button variant="primary">Enviar Email</Button>
                    </a>
                    <a
                        href={`https://wa.me/${ENV.contact.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline">WhatsApp Directo</Button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
