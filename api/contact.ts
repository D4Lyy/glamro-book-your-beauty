import type { VercelRequest, VercelResponse } from "@vercel/node";

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";
const TO_EMAIL = "contact@glamro.it";
const FROM_EMAIL = "noreply@glamro.it"; // must be a verified sender in Brevo
const FROM_NAME = "Glamro Website";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Server is missing BREVO_API_KEY" });
  }

  try {
    const { name, email, role, subject, message } =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body ?? {};

    // Basic validation
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof role !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !role.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({ error: "Missing or invalid fields" });
    }

    if (name.length > 200 || email.length > 320 || subject.length > 300 || message.length > 5000) {
      return res.status(400).json({ error: "Field too long" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const htmlContent = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Role:</strong> ${escapeHtml(role)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    `;

    const textContent =
      `New contact form submission\n\n` +
      `Name: ${name}\nEmail: ${email}\nRole: ${role}\nSubject: ${subject}\n\n${message}`;

    const brevoRes = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { email: FROM_EMAIL, name: FROM_NAME },
        to: [{ email: TO_EMAIL, name: "Glamro" }],
        replyTo: { email, name },
        subject: `[${role}] ${subject}`,
        htmlContent,
        textContent,
      }),
    });

    if (!brevoRes.ok) {
      const errorText = await brevoRes.text();
      console.error("Brevo API error:", brevoRes.status, errorText);
      return res.status(502).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact handler error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}