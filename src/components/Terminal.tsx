"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, TerminalSquare, AlertTriangle, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  command: z.string().min(2, "El comando debe tener al menos 2 caracteres."),
  privacyAccepted: z.boolean().refine((val) => val === true, {
    message: "Debe aceptar el aviso de privacidad.",
  }),
});

export default function Terminal() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [history, setHistory] = useState<{ id: string; type: "input" | "system" | "error" | "success"; text: string }[]>([
    { id: "init-1", type: "system", text: "HIPERSOFT MAINFRAME v1.0.9" },
    { id: "init-2", type: "system", text: "Estableciendo conexión segura... OK" },
    { id: "init-3", type: "system", text: "Ingrese comando o mensaje para el sistema:" },
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Auto-focus terminal on click
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const simulateHackingLatency = async () => {
    return new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 800));
  };

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() && !privacyAccepted) return;

    const newCmd = inputVal;
    setInputVal("");
    
    // Add user input to history
    setHistory((prev) => [...prev, { id: Date.now().toString(), type: "input", text: `> ${newCmd}` }]);

    try {
      // Zod Validation
      formSchema.parse({ command: newCmd, privacyAccepted });
      
      setIsProcessing(true);
      setHistory((prev) => [...prev, { id: Date.now().toString() + "-process", type: "system", text: "[PROCESANDO] Estableciendo handshake cifrado..." }]);
      
      // Simulate network request without actually blocking main thread completely
      await simulateHackingLatency();
      
      setHistory((prev) => [...prev, { id: Date.now().toString() + "-success", type: "success", text: "Datos transmitidos correctamente. Fin de la transmisión." }]);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setHistory((prev) => [
          ...prev, 
          { id: Date.now().toString() + "-error", type: "error", text: `ERROR DE SINTAXIS: ${(err as any).errors[0].message}` }
        ]);
      }
    } finally {
      setIsProcessing(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <div 
      onClick={handleTerminalClick}
      className="w-full max-w-4xl mx-auto bg-surface-container border border-outline/30 p-1 relative overflow-hidden font-display shadow-2xl glow-box cursor-text"
    >
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none scanline opacity-20 z-10" />

      {/* Terminal Header */}
      <div className="bg-surface-container-highest border-b border-outline/50 p-3 flex items-center justify-between z-20 relative">
        <div className="flex items-center gap-2 text-primary">
          <TerminalSquare size={18} />
          <span className="text-sm tracking-widest uppercase font-bold">Terminal Activa</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-none bg-outline/50" />
          <div className="w-3 h-3 rounded-none bg-outline/50" />
          <div className="w-3 h-3 rounded-none bg-primary glow-box animate-pulse" />
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 h-[400px] overflow-y-auto flex flex-col gap-2 z-20 relative">
        <AnimatePresence>
          {history.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-sm md:text-base font-mono tracking-tight ${
                line.type === "error" ? "text-red-500" :
                line.type === "success" ? "text-primary glow-text" :
                line.type === "input" ? "text-white" : "text-[#baccb0]"
              }`}
            >
              {line.type === "error" && <AlertTriangle size={14} className="inline mr-2 mb-1" />}
              {line.type === "success" && <CheckCircle2 size={14} className="inline mr-2 mb-1" />}
              {line.text}
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isProcessing && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
            className="text-primary font-mono text-sm animate-pulse"
          >
            _
          </motion.div>
        )}

        {/* Input Area */}
        <form onSubmit={handleCommand} className="mt-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-primary glow-text font-bold">root@hipersoft:~#</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              disabled={isProcessing}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono caret-primary placeholder-[#baccb0]/50"
              placeholder="Ingresa comando..."
              autoComplete="off"
            />
          </div>

          <div className="flex items-center gap-3 mt-4 border border-outline/30 p-3 bg-surface z-30">
            <input 
              type="checkbox" 
              id="privacy"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              className="w-4 h-4 appearance-none border border-primary checked:bg-primary checked:glow-box cursor-pointer"
            />
            <label htmlFor="privacy" className="text-xs font-mono tracking-widest uppercase text-[#baccb0] cursor-pointer select-none">
              Acepto <a href="/aviso-de-privacidad" className="text-primary underline decoration-primary/50 hover:glow-text">Aviso de Privacidad</a> (Req. Seguridad)
            </label>
            <button 
              type="submit" 
              disabled={isProcessing}
              className="ml-auto bg-primary text-void px-4 py-1 text-xs font-bold uppercase hover:bg-white transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              Ejecutar <Send size={14} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
