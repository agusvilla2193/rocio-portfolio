import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rocio Diaz Yamaguchi | Portfolio de Edición",
  description: "Especialista en edición cinematográfica, reels de viajes y contenido documental.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-white min-h-screen flex flex-col`}
      >
        <Navbar />
        {/* pt-20 para compensar el Navbar fijo y flex-1 para empujar el footer */}
        <main className="pt-20 flex-1 w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
