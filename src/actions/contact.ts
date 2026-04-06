"use server";

export async function submitContactForm(data: { 
  name?: string; 
  contactMethod: "email" | "whatsapp";
  contactValue: string; 
  command: string 
}) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error("BREVO_API_KEY no configurada");
  }

  const internalEmail = "info@hipersoft.com.mx";

  try {
    // 1. Notificación interna (Siempre para historial en info@hipersoft.com.mx)
    const internalPayload = {
      sender: { name: "HiperSoft Terminal", email: internalEmail },
      to: [{ email: internalEmail, name: "HiperSoft Admin" }],
      subject: `[NUEVO CONTACTO] ${data.name || 'Anónimo'} via ${data.contactMethod.toUpperCase()}`,
      htmlContent: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; background-color: #f9f9f9; border: 1px solid #ddd;">
          <h2 style="color: #000; border-bottom: 2px solid #39FF14; padding-bottom: 10px;">Nueva Solicitud de Contacto</h2>
          <p><strong>Remitente:</strong> ${data.name || 'No proporcionado'}</p>
          <p><strong>Canal Preferido:</strong> ${data.contactMethod.toUpperCase()}</p>
          <p><strong>Información de Contacto:</strong> ${data.contactValue}</p>
          <div style="margin-top: 20px;">
            <p><strong>Mensaje del Protocolo:</strong></p>
            <div style="background: #131313; color: #39FF14; padding: 15px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">
              ${data.command.split('\n').join('<br>')}
            </div>
          </div>
          <p style="font-size: 10px; color: #999; margin-top: 30px;">Transmitido automáticamente desde HiperSoft Mainframe v4.0</p>
        </div>
      `
    };

    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json", "api-key": apiKey },
      body: JSON.stringify(internalPayload)
    });

    // 2. Confirmación al usuario (Solo si seleccionó Email)
    if (data.contactMethod === "email" && data.contactValue.includes("@")) {
      const userPayload = {
        sender: { name: "HiperSoft", email: internalEmail },
        to: [{ email: data.contactValue, name: data.name || "Usuario" }],
        subject: "Confirmación de Contacto - HiperSoft",
        htmlContent: `
          <div style="font-family: monospace; background-color: #131313; color: #39FF14; padding: 20px; border: 1px solid #39FF14;">
            <h2 style="border-bottom: 2px solid #39FF14; padding-bottom: 10px;">[ STATUS: RECIBIDO ]</h2>
            <p>Hola${data.name ? ` ${data.name}` : ''},</p>
            <p>Hemos recibido correctamente tu protocolo de contacto en nuestro Mainframe.</p>
            <p>Pronto uno de nuestros ingenieros estratega se pondrá en contacto contigo para dar seguimiento a tu requerimiento.</p>
            <div style="margin-top: 20px; border-top: 1px solid #3c4b35; padding-top: 10px;">
              <p style="color: #888; font-size: 12px;">COPIA DE TU MENSAJE:</p>
              <div style="background: #1f1f1f; padding: 10px; color: #e2e2e2; font-size: 13px;">
                ${data.command.split('\n').join('<br>')}
              </div>
            </div>
            <p style="margin-top: 30px; font-weight: bold;">Atentamente,<br>HiperSoft | Impulsando la soberanía tecnológica.</p>
          </div>
        `
      };

      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json", "api-key": apiKey },
        body: JSON.stringify(userPayload)
      });
    }

    return {
      success: true,
      message: data.contactMethod === "email" 
        ? "Protocolo transmitido. Revisa tu bandeja de entrada." 
        : "Protocolo transmitido. Nos contactaremos vía WhatsApp pronto."
    };
  } catch (error: any) {
    console.error("Error en submitContactForm:", error.message);
    throw new Error("Fallo en el servidor de comunicaciones SMTP.");
  }
}
