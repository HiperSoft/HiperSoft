"use server";

import * as SibApiV3Sdk from "sib-api-v3-sdk";

export async function submitContactForm(data: { name?: string; email?: string; command: string }) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error("BREVO_API_KEY no configurada");
  }

  // Set API Key
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  const apiKeyAuth = defaultClient.authentications['api-key'];
  apiKeyAuth.apiKey = apiKey;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  try {
    // Si el usuario proporcionó un correo, le enviamos un correo de confirmación
    if (data.email) {
      sendSmtpEmail.subject = "Confirmación de Contacto - HiperSoft Mainframe";
      sendSmtpEmail.htmlContent = `
        <div style="font-family: monospace; background-color: #131313; color: #39FF14; padding: 20px;">
          <h2>[ STATUS: RECIBIDO ]</h2>
          <p>Hola${data.name ? ` ${data.name}` : ''},</p>
          <p>Hemos recibido correctamente tu protocolo de contacto en nuestro Mainframe B2B.</p>
          <p>Pronto uno de nuestros ingenieros estratega estará en contacto contigo para darle seguimiento a:</p>
          <pre style="background: #1f1f1f; padding: 10px; border: 1px solid #3c4b35; color: #e2e2e2;">
${data.command}
          </pre>
          <p>Atentamente,<br><strong>HiperSoft | Sovereign Architect</strong></p>
        </div>
      `;
      sendSmtpEmail.sender = { "name": "HiperSoft", "email": "info@hipersoft.com.mx" };
      sendSmtpEmail.to = [{ "email": data.email, "name": data.name || "Usuario" }];

      await apiInstance.sendTransacEmail(sendSmtpEmail);
    }

    // TODO: En un escenario real, también puedes enviar un correo a 'info@hipersoft.com.mx' para notificar al equipo interno.

    return { 
      success: true, 
      message: data.email ? "Datos transmitidos y correo de confirmación enviado." : "Datos transmitidos correctamente." 
    };
  } catch (error: any) {
    console.error("Error al enviar correo con Brevo: ", error.response?.text || error.message);
    throw new Error("Fallo al establecer comunicación SMTP con el servidor de correos.");
  }
}
