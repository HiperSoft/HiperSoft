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
            <h2 className="text-lg md:text-xl font-display font-bold uppercase tracking-wide text-primary mb-4">[ 1.0 RESPONSABLE DEL TRATAMIENTO ]</h2>
            <p className="text-sm md:text-base leading-relaxed text-[#baccb0]">
              HiperSoft (en adelante "El Responsable"), con domicilio para oír y recibir notificaciones en la Ciudad de México, México, es el responsable del uso y protección de sus datos personales, y al respecto le informa lo siguiente de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
            </p>
          </section>

          <section className="z-10 relative">
            <h2 className="text-lg md:text-xl font-display font-bold uppercase tracking-wide text-primary mb-4 mt-8">[ 2.0 DATOS PERSONALES RECABADOS ]</h2>
            <p className="text-sm md:text-base leading-relaxed mb-4 text-[#baccb0]">
              Para llevar a cabo las finalidades descritas en el presente aviso, utilizaremos los siguientes datos personales proporcionados voluntariamente a través de nuestro formulario de contacto (TERMINAL_INTERFACE):
            </p>
            <ul className="list-none flex flex-col gap-2 pl-4 border-l border-outline/50 font-mono text-xs md:text-sm text-[#e2e2e2]">
              <li>{">"} Nombre completo o identificación de usuario (NOMBRE_COMPLETO).</li>
              <li>{">"} Canal de contacto preferido (VÍA_CONTACTO: EMAIL / WHATSAPP).</li>
              <li>{">"} Información de contacto directa (EMAIL_O_WHATSAPP).</li>
              <li>{">"} Descripción de proyecto y requerimientos técnicos (DESCRIPCION_PROYECTO).</li>
              <li>{">"} Metadatos de conexión técnica para seguridad de la infraestructura (DIRECCIÓN IP, LOGS DE ACCESO).</li>
            </ul>
          </section>

          <section className="z-10 relative">
            <h2 className="text-lg md:text-xl font-display font-bold uppercase tracking-wide text-primary mb-4 mt-8">[ 3.0 FINALIDADES DEL TRATAMIENTO ]</h2>
            <p className="text-sm md:text-base leading-relaxed text-[#baccb0] mb-4">
              Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
            </p>
            <ul className="list-none flex flex-col gap-2 pl-4 border-l border-outline/50 font-mono text-xs md:text-sm text-[#e2e2e2]">
              <li>{">"} Atender y dar seguimiento a solicitudes de servicios de desarrollo y arquitectura de software.</li>
              <li>{">"} Establecer comunicación directa para la elaboración de propuestas técnicas y económicas.</li>
              <li>{">"} Verificación de seguridad para prevenir accesos no autorizados al mainframe.</li>
            </ul>
          </section>

          <section className="z-10 relative">
            <h2 className="text-lg md:text-xl font-display font-bold uppercase tracking-wide text-primary mb-4 mt-8">[ 4.0 TRANSFERENCIAS Y SEGURIDAD ]</h2>
            <p className="text-sm md:text-base leading-relaxed text-[#baccb0]">
              Le informamos que sus datos personales no serán compartidos con terceras personas, empresas u organizaciones distintas a nosotros, salvo las excepciones previstas en el artículo 37 de la LFPDPPP o por requerimiento judicial. Toda transmisión se realiza bajo protocolos de encriptación AES-256 y TLS 1.3.
            </p>
          </section>

          <section className="z-10 relative">
            <h2 className="text-lg md:text-xl font-display font-bold uppercase tracking-wide text-primary mb-4 mt-8">[ 5.0 DERECHOS ARCO ]</h2>
            <p className="text-sm md:text-base leading-relaxed text-[#baccb0]">
              Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal (Rectificación); que la eliminemos de nuestros registros o bases de datos (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
              Para el ejercicio de cualquiera de los derechos ARCO, usted deberá enviar una solicitud al correo: <span className="text-primary">info@hipersoft.com.mx</span>.
            </p>
          </section>

          <section className="z-10 relative mt-12 pt-6 border-t border-outline/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="font-mono text-xs text-[#baccb0] uppercase tracking-widest">
              Última actualización: 06_ABRIL_2026
            </p>
            <div className="px-3 py-1 bg-surface border border-primary/30 text-primary text-xs font-mono font-bold uppercase">
              STATUS_LEGAL: COMPLIANT_V1.1
            </div>
          </section>

        </article>
      </section>
    </main>
  );
}
