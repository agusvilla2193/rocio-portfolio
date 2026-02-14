import Hero from "@/components/sections/Hero";
import VideoGrid from "@/components/sections/VideoGrid";
import ContactSection from "@/components/sections/ContactSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ENV } from "@/config/env";

/**
 * Página principal del Portfolio.
 * Utiliza una estructura modular de secciones para facilitar el mantenimiento.
 */
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Sección de impacto inicial */}
      <Hero />

      {/* Grilla de proyectos cinematográficos */}
      <VideoGrid />

      {/* Sección de llamado a la acción y contacto */}
      <ContactSection />

      {/* Pie de página minimalista */}
      <footer className="py-12 border-t border-white/5 bg-zinc-950 text-center">
        <div className="section-container">
          <p className="text-[10px] md:text-xs text-zinc-500 tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} — Nombre del Editor — Diseñado con precisión
          </p>
        </div>
      </footer>

      {/* Botón flotante de contacto directo */}
      <WhatsAppButton phone={ENV.contact.phone} />
    </main>
  );
}
