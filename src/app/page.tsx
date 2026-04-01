import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-4 min-h-[100dvh]">
      <section className="w-full max-w-4xl flex flex-col gap-8">
        <header className="flex flex-col gap-2 relative">
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase glitch-text" data-text="HIPERSOFT">
            HIPERSOFT
          </h1>
          <p className="text-[#baccb0] font-mono tracking-widest text-[10px] md:text-xs uppercase px-1 border border-outline/30 w-fit">
            // Sovereign Architect _ v1.0.9
          </p>
        </header>

        {/* Carga del componente de Terminal */}
        <article className="w-full">
          <Terminal />
        </article>
      </section>
      
      {/* Required scanline overlay and custom utility classes injected dynamically */}
      <style dangerouslySetInnerHTML={{__html: `
        .glitch-text {
          position: relative;
          color: white;
        }
        .glitch-text::before, .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch-text::before {
          color: var(--color-primary);
          z-index: -1;
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          color: rgba(57, 255, 20, 0.5);
          z-index: -2;
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }
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
    </main>
  );
}
