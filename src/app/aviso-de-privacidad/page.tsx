import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Aviso de Privacidad | HiperSoft",
  description: "Políticas de seguridad y tratamiento de datos de la infraestructura HiperSoft.",
};

export default function PrivacyPolicy() {
  return (
    <main className="flex-1 flex justify-center p-4 min-h-[100dvh]">
      <section className="w-full max-w-3xl flex flex-col gap-8 py-12 md:py-24">
        
        {/* Navigation & Header */}
        <header className="flex flex-col gap-6">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-primary hover:text-white transition-colors w-fit group font-mono text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            [VOLVER_AL_MAINFRAME]
          </Link>
          
          <div className="flex items-center gap-3">
            <ShieldCheck size={32} className="text-primary glow-text animate-pulse" />
            <h1 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase text-white">
              Privacidad
            </h1>
          </div>
          <div className="h-px w-full bg-outline/50 relative">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-primary glow-box" />
          </div>
        </header>

        {/* Content Body */}
        <article className="max-w-none font-sans flex flex-col gap-6 bg-surface-container border border-outline/30 p-6 md:p-8 relative text-[#e2e2e2]">
          
          {/* Decorative Corner Squares */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-primary/50" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-primary/50" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary/50" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary/50" />

          {/* Scanline background */}
          <div className="absolute inset-0 pointer-events-none scanline opacity-[0.03]" />

          <section className="z-10 relative">
            <h2 className="text-xl font-display font-bold uppercase tracking-wide text-primary mb-4">[ 1.0 IDENTIDAD Y DOMICILIO ]</h2>
            <p className="text-sm md:text-base leading-relaxed text-[#baccb0]">
              HiperSoft, con domicilio virtual en México, es el responsable del tratamiento y protección de sus datos personales. Nuestra infraestructura opera bajo los más altos estándares de cifrado y seguridad descritos como Terminal Excellence.
            </p>
          </section>

          <section className="z-10 relative">
            <h2 className="text-xl font-display font-bold uppercase tracking-wide text-primary mb-4 mt-8">[ 2.0 DATOS RECOPILADOS ]</h2>
            <p className="text-sm md:text-base leading-relaxed mb-4 text-[#baccb0]">
              Para establecer conexión con nuestros servicios, el Mainframe recopilará únicamente la información transmitida mediante protocolos seguros (TLS/SSL). Esto incluye, pero no se limita a:
            </p>
            <ul className="list-none flex flex-col gap-2 pl-4 border-l border-outline/50 font-mono text-xs md:text-sm text-[#e2e2e2]">
              <li>{">"} Metadatos de conexión técnica.</li>
              <li>{">"} Comandos ingresados explícitamente en la terminal.</li>
              <li>{">"} Vectores de contacto proporcionados voluntariamente.</li>
            </ul>
          </section>

          <section className="z-10 relative">
            <h2 className="text-xl font-display font-bold uppercase tracking-wide text-primary mb-4 mt-8">[ 3.0 FINALIDAD DEL TRATAMIENTO ]</h2>
            <p className="text-sm md:text-base leading-relaxed text-[#baccb0]">
              Los datos personales recabados serán utilizados de manera exclusiva para las siguientes finalidades secundarias e inherentes a nuestra operación: 
              Análisis de consultas de arquitectura B2B, autenticación asimétrica de perfiles y depuración de comunicaciones técnicas con nuestros ingenieros.
            </p>
          </section>

          <section className="z-10 relative mt-12 pt-6 border-t border-outline/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="font-mono text-xs text-[#baccb0] uppercase tracking-widest">
              Última actualización: 01_ABRIL_2026
            </p>
            <div className="px-3 py-1 bg-surface border border-primary/30 text-primary text-xs font-mono font-bold uppercase">
              STATUS_SEGURIDAD: OPTIMO
            </div>
          </section>

        </article>
      </section>
    </main>
  );
}
