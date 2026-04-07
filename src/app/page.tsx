import Image from "next/image";
import { TerminalSquare, ArrowDown, ShieldCheck, Zap } from "lucide-react";
import Terminal from "@/components/Terminal";
import pkg from "../../package.json";
import RotatingText from "@/components/RotatingText";

export default function Home() {
  return (
    <>
      {/* Global Scanline Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #39FF14 3px)" }}
      />
      <div className="scanline" />

      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-16 bg-[#131313]/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(57,255,20,0.1)]">
        <div className="flex items-center gap-3">
          <TerminalSquare className="text-primary" size={24} />
          <h1 className="text-xl md:text-2xl font-black text-primary drop-shadow-[0_0_10px_rgba(57,255,20,0.6)] font-display tracking-[-0.05em] uppercase">
            HIPERSOFT
          </h1>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="text-primary shadow-[0_0_15px_rgba(57,255,20,0.4)] font-display font-bold uppercase tracking-wider text-sm" href="/">HOME_</a>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-8">
          <div className="absolute inset-0 z-0 opacity-10 flex justify-around pointer-events-none font-mono text-[10px] text-primary" style={{ maskImage: "linear-gradient(to bottom, transparent, black, transparent)" }}>
            <div className="h-full hidden md:block">010101<br />HIPER<br />SOFT<br />010101</div>
            <div className="h-full hidden md:block">SYSTEM<br />BOOT<br />ERROR<br />NONE</div>
            <div className="h-full">MAINFRAME<br />ONLINE<br />SECURE<br />ENCRYPT</div>
            <div className="h-full">ROOT<br />ACCESS<br />GRANTED<br />0000</div>
          </div>
          <div className="relative z-10 text-center max-w-5xl flex flex-col items-center mt-[-10vh]">
            <p className="font-mono text-primary mb-4 tracking-[0.3em] uppercase text-xs md:text-sm">STATUS: OPERATIONAL // V.{pkg.version}</p>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight tracking-tighter uppercase">
              SI PUEDES IMAGINARLO, <br />
              PODEMOS <RotatingText />
            </h2>
            <a 
              href="#contacto"
              className="group relative px-6 py-4 md:px-10 md:py-5 bg-primary text-[#053900] font-display font-black text-sm md:text-xl uppercase tracking-wider hover:shadow-[0_0_30px_rgba(57,255,20,0.8)] hover:bg-white transition-all duration-500 w-fit no-underline inline-block"
            >
              INICIAR PROTOCOLO DE PROYECTO
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white"></div>
            </a>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#353535]">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase">SCROLL_FOR_DATA</span>
            <ArrowDown size={16} className="animate-bounce" />
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-surface-container-lowest border-y border-primary/10 py-12 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <p className="text-3xl md:text-5xl font-display font-bold text-white mb-2">7+ <span className="text-primary block md:inline text-xl md:text-5xl">AÑOS_EXP</span></p>
              <div className="h-px w-full bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            <div className="group">
              <p className="text-3xl md:text-5xl font-display font-bold text-white mb-2">99.9% <span className="text-primary block md:inline text-xl md:text-5xl">CONFIABILIDAD</span></p>
              <div className="h-px w-full bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            <div className="group">
              <p className="text-3xl md:text-5xl font-display font-bold text-white mb-2">24/7 <span className="text-primary block md:inline text-xl md:text-5xl">MONITOREO_CONTINUO</span></p>
              <div className="h-px w-full bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </section>

        {/* Core Operations Grid */}
        <section className="py-24 px-8 max-w-7xl mx-auto relative z-20">
          <div className="flex items-center gap-4 mb-16">
            <h3 className="text-xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">OPERACIONES_CORE</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-container p-8 border border-transparent hover:border-primary/50 transition-all duration-300 group relative overflow-hidden text-left">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <TerminalSquare className="text-primary mb-6" size={36} />
              <h4 className="text-xl font-display font-bold text-white mb-4 uppercase">Desarrollo Web</h4>
              <p className="text-[#baccb0] text-sm mb-8 leading-relaxed">Ecosistemas digitales de alta fidelidad. Arquitectura escalable construida sobre protocolos modernos.</p>
            </div>
            <div className="bg-surface-container p-8 border border-transparent hover:border-primary/50 transition-all duration-300 group relative overflow-hidden text-left">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <ShieldCheck className="text-primary mb-6" size={36} />
              <h4 className="text-xl font-display font-bold text-white mb-4 uppercase">Apps Móviles</h4>
              <p className="text-[#baccb0] text-sm mb-8 leading-relaxed">Interfaces nativas diseñadas para interacción fluida. Experiencia y rendimiento optimizado.</p>
            </div>
            <div className="bg-surface-container p-8 border border-transparent hover:border-primary/50 transition-all duration-300 group relative overflow-hidden text-left">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Zap className="text-primary mb-6" size={36} />
              <h4 className="text-xl font-display font-bold text-white mb-4 uppercase">SEO Estratégico</h4>
              <p className="text-[#baccb0] text-sm mb-8 leading-relaxed">Infiltración en motores de búsqueda. Ingeniería de contenido para visibilidad en el mainframe global.</p>
            </div>
            <div className="bg-surface-container p-8 border border-transparent hover:border-primary/50 transition-all duration-300 group relative overflow-hidden text-left">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <TerminalSquare className="text-primary mb-6" size={36} />
              <h4 className="text-xl font-display font-bold text-white mb-4 uppercase">Hosting Alta Disp.</h4>
              <p className="text-[#baccb0] text-sm mb-8 leading-relaxed">Infraestructura redundante nube. Latencia cero y seguridad militar para tus activos.</p>
            </div>
          </div>
        </section>

        {/* Terminal Section with REAL functional component */}
        <section id="contacto" className="py-24 px-4 md:px-8 bg-surface-container-lowest relative z-30">
          <div className="flex items-center gap-4 mb-16 max-w-7xl mx-auto">
            <h3 className="text-xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">CONTACTANOS</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>
          <Terminal />
        </section>

        {/* Feature Spotlight */}
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            <div className="md:col-span-2 bg-[#131313] relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/10 object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                <h5 className="text-xl md:text-3xl font-display font-bold text-white mb-2 uppercase">INFRAESTRUCTURA_G7</h5>
                <p className="text-[#baccb0] max-w-md text-sm md:text-base">Servidores de última generación ubicados en zonas estratégicas de baja latencia global.</p>
              </div>
            </div>
            <div className="bg-[#1f1f1f] p-10 flex flex-col justify-center border-l border-primary/20">
              <ShieldCheck className="text-primary mb-6" size={48} />
              <h5 className="text-lg md:text-xl font-display font-bold text-white mb-4 uppercase">ENCRIPTACIÓN_TOTAL</h5>
              <p className="text-[#baccb0] text-sm leading-relaxed">Protocolos AES-256 para cada paquete de datos que transita por nuestra red.</p>
            </div>
            <div className="bg-[#1f1f1f] p-10 flex flex-col justify-center border-r border-primary/20">
              <Zap className="text-primary mb-6" size={48} />
              <h5 className="text-lg md:text-xl font-display font-bold text-white mb-4 uppercase">VELOCIDAD_LUZ</h5>
              <p className="text-[#baccb0] text-sm leading-relaxed">Optimización de carga en milisegundos mediante tecnologías Edge Computing.</p>
            </div>
            <div className="md:col-span-2 bg-[#131313] relative overflow-hidden group">
              <div className="absolute inset-0 bg-green-950/20 object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent p-10 flex flex-col justify-center">
                <h5 className="text-xl md:text-3xl font-display font-bold text-white mb-2 uppercase">DESARROLLO_FUTURISTA</h5>
                <p className="text-[#baccb0] max-w-sm text-sm md:text-base">No creamos simples webs, construimos el futuro digital de tu organización.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#131313] border-t border-white/5 relative z-40">
        <div className="flex items-center gap-4 flex-col md:flex-row text-center md:text-left">
          <span className="text-primary font-mono text-lg font-bold">HIPERSOFT_COMPANY</span>
          <span className="text-[#353535] hidden md:block">|</span>
          <p className="text-[#353535] font-sans text-[10px] tracking-[0.2em] uppercase">© 2026 HIPERSOFT_COMPANY.</p>
        </div>
        <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
          <a className="text-[#baccb0] hover:text-primary font-sans text-[10px] tracking-[0.2em] uppercase transition-colors" href="#">SYSTEM_STATUS</a>
          <a className="text-[#baccb0] hover:text-primary font-sans text-[10px] tracking-[0.2em] uppercase transition-colors" href="#">ENCRYPTION_LOGS</a>
          <a className="text-[#baccb0] hover:text-primary font-sans text-[10px] tracking-[0.2em] uppercase transition-colors" href="/sitemap.xml">SITEMAP</a>
        </div>
      </footer>

      {/* Dynamic styles injected from previously created page block */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .glitch-text { position: relative; color: white; }
        .glitch-text::before, .glitch-text::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .glitch-text::before { color: var(--color-primary); z-index: -1; animation: glitch-anim-1 2s infinite linear alternate-reverse; }
        .glitch-text::after { color: rgba(57, 255, 20, 0.5); z-index: -2; animation: glitch-anim-2 3s infinite linear alternate-reverse; }
        @keyframes glitch-anim-1 {
          0% { clip: rect(20px, 9999px, 85px, 0); transform: translate(2px, -2px); }
          20% { clip: rect(98px, 9999px, 14px, 0); transform: translate(-2px, 2px); }
          40% { clip: rect(41px, 9999px, 5px, 0); transform: translate(2px, 2px); }
          60% { clip: rect(100px, 9999px, 53px, 0); transform: translate(-2px, -2px); }
          80% { clip: rect(6px, 9999px, 9px, 0); transform: translate(2px, -2px); }
          100% { clip: rect(50px, 9999px, 80px, 0); transform: translate(-2px, 2px); }
        }
        @keyframes glitch-anim-2 {
          0% { clip: rect(10px, 9999px, 90px, 0); transform: translate(-2px, 2px); }
          20% { clip: rect(30px, 9999px, 10px, 0); transform: translate(2px, -2px); }
          40% { clip: rect(80px, 9999px, 50px, 0); transform: translate(-2px, 2px); }
          60% { clip: rect(15px, 9999px, 25px, 0); transform: translate(2px, -2px); }
          80% { clip: rect(90px, 9999px, 5px, 0); transform: translate(-2px, -2px); }
          100% { clip: rect(2px, 9999px, 30px, 0); transform: translate(2px, 2px); }
        }
      `}} />
    </>
  );
}
