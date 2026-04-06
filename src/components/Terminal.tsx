"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalSquare, AlertTriangle, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { submitContactForm } from "@/actions/contact";

const formSchema = z.object({
  name: z.string().optional(),
  contactMethod: z.enum(["email", "whatsapp"]),
  contactValue: z.string().min(5, "Información de contacto inválida."),
  command: z.string().min(5, "El protocolo requiere una descripción (min 5 chars)."),
  privacyAccepted: z.boolean().refine((val) => val === true, {
    message: "Debe aceptar el Aviso de Privacidad.",
  }),
});

export default function Terminal() {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [nameVal, setNameVal] = useState("");
  const [contactMethod, setContactMethod] = useState<"email" | "whatsapp">("email");
  const [contactValue, setContactValue] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  
  const [history, setHistory] = useState<{ id: string; type: "input" | "system" | "error" | "success"; text: string }[]>([
    { id: "init-1", type: "system", text: "[SYSTEM] Initializing contact mainframe..." },
    { id: "init-2", type: "system", text: "[SYSTEM] Establishing secure tunnel... DONE." },
    { id: "init-3", type: "system", text: "[SYSTEM] Please provide identification to proceed." },
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() && !privacyAccepted) return;

    const data = { 
      name: nameVal, 
      contactMethod, 
      contactValue, 
      command: inputVal, 
      privacyAccepted 
    };
    
    setHistory((prev) => [
      ...prev, 
      { id: Date.now().toString(), type: "input", text: `root@hipersoft:~$ init_contact_sequence --method=${contactMethod}` }
    ]);

    try {
      formSchema.parse(data);
      setIsProcessing(true);
      setHistory((prev) => [...prev, { id: Date.now().toString() + "-process", type: "system", text: "[PROCESANDO] Cifrando paquetes de datos y enviando al servidor..." }]);
      
      const result = await submitContactForm({
        name: data.name,
        contactMethod: data.contactMethod,
        contactValue: data.contactValue,
        command: data.command
      });
      
      setHistory((prev) => [...prev, { id: Date.now().toString() + "-success", type: "success", text: result.message }]);
      
      // Limpiar formulario tras éxito
      setInputVal("");
      setNameVal("");
      setContactValue("");
      setPrivacyAccepted(false);

    } catch (err) {
      if (err instanceof z.ZodError) {
        setHistory((prev) => [
          ...prev, 
          { id: Date.now().toString() + "-error", type: "error", text: `ROOT_ERROR: ${(err as any).errors[0].message}` }
        ]);
      } else {
        setHistory((prev) => [
          ...prev, 
          { id: Date.now().toString() + "-error", type: "error", text: `SYSTEM_FAILURE: ${(err as Error).message}` }
        ]);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-[#131313] border border-primary/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
      
      <div className="bg-[#2a2a2a] px-4 py-2 flex items-center justify-between border-b border-primary/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-primary/50"></div>
        </div>
        <span className="text-[10px] font-mono text-primary/50 uppercase tracking-widest hidden md:inline">
          CONTACT_PROTOCOL_BETA_V2
        </span>
      </div>

      <div className="p-4 md:p-8 font-mono text-sm space-y-4">
        <div className="h-[180px] overflow-y-auto flex flex-col gap-2 mb-4 scrollbar-thin scrollbar-thumb-primary/20">
          <AnimatePresence>
            {history.map((line) => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-xs md:text-sm tracking-tight ${
                  line.type === "error" ? "text-red-500" :
                  line.type === "success" ? "text-primary glow-text font-bold" :
                  line.type === "input" ? "text-white" : "text-primary/70"
                }`}
              >
                {line.type === "error" && <AlertTriangle size={14} className="inline mr-2 mb-1" />}
                {line.type === "success" && <CheckCircle2 size={14} className="inline mr-2 mb-1" />}
                {line.text}
              </motion.div>
            ))}
          </AnimatePresence>
          {isProcessing && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-mono text-sm animate-pulse">
              _ TRANSMITIENDO...
            </motion.div>
          )}
        </div>

        <form onSubmit={handleCommand} className="flex flex-col gap-4 border-t border-primary/10 pt-6">
          
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 border-b border-white/5 pb-2">
            <label className="text-primary md:min-w-[150px] text-xs md:text-sm">NOMBRE_COMPLETO:</label>
            <input 
              type="text"
              value={nameVal}
              onChange={(e) => setNameVal(e.target.value)}
              disabled={isProcessing}
              className="bg-transparent border-none outline-none focus:ring-0 p-0 text-white placeholder:text-white/20 w-full font-mono caret-primary text-xs md:text-sm uppercase" 
              placeholder="input_name (opt)" 
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 border-b border-white/5 pb-2">
            <label className="text-primary md:min-w-[150px] text-xs md:text-sm">VIA_CONTACTO:</label>
            <div className="flex gap-4">
              <button 
                type="button"
                onClick={() => setContactMethod("email")}
                className={`text-xs md:text-sm px-2 py-0.5 border ${contactMethod === 'email' ? 'bg-primary text-black border-primary' : 'border-white/20 text-white/40 hover:text-white'}`}
              >
                [ EMAIL ]
              </button>
              <button 
                type="button"
                onClick={() => setContactMethod("whatsapp")}
                className={`text-xs md:text-sm px-2 py-0.5 border ${contactMethod === 'whatsapp' ? 'bg-primary text-black border-primary' : 'border-white/20 text-white/40 hover:text-white'}`}
              >
                [ WHATSAPP ]
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 border-b border-white/5 pb-2">
            <label className="text-primary md:min-w-[150px] text-xs md:text-sm">INFO_{contactMethod.toUpperCase()}:</label>
            <input 
              type={contactMethod === 'email' ? 'email' : 'text'}
              value={contactValue}
              onChange={(e) => setContactValue(e.target.value)}
              disabled={isProcessing}
              className="bg-transparent border-none outline-none focus:ring-0 p-0 text-white placeholder:text-white/20 w-full font-mono caret-primary text-xs md:text-sm" 
              placeholder={contactMethod === 'email' ? 'user@domain.com' : '+52 55...'} 
              required
            />
          </div>

          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4 border-b border-white/5 pb-2">
            <label className="text-primary md:min-w-[150px] pt-1 text-xs md:text-sm">DESCRIPCION_PROYECTO:</label>
            <textarea 
              ref={inputRef}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              disabled={isProcessing}
              className="bg-transparent border-none outline-none focus:ring-0 p-0 text-white placeholder:text-white/20 w-full font-mono resize-none caret-primary text-xs md:text-sm" 
              placeholder="describe_your_project (required)" 
              rows={3}
            ></textarea>
          </div>

          <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                id="privacy"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                className="w-4 h-4 appearance-none border border-primary checked:bg-primary cursor-pointer transition-colors"
                disabled={isProcessing}
              />
              <label htmlFor="privacy" className="text-[10px] md:text-xs font-mono uppercase text-[#baccb0] cursor-pointer">
                Acepto <a href="/aviso-de-privacidad" target="_blank" className="text-primary underline">Aviso de Privacidad</a>
              </label>
            </div>
            
            <button 
              type="submit"
              disabled={isProcessing}
              className="w-full md:w-auto bg-primary text-black px-8 py-2 font-bold uppercase hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all disabled:opacity-50 tracking-wider text-sm"
            >
              SEND_PROTOCOL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
