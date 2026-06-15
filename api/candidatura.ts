// Vercel serverless function: receives professional applications,
// adds the lead to a Brevo contact list and notifies the team.
// Required env vars (set in Vercel project settings):
//   BREVO_API_KEY               – Brevo API key
//   BREVO_CANDIDATURA_LIST_ID   – numeric Brevo list ID for applications

const BREVO_API = "https://api.brevo.com/v3";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ message: "Server not configured" });
  }

  const {
    firstName = "",
    lastName = "",
    phone = "",
    email = "",
    profession = "",
    city = "",
    social = "",
    availability = "",
    documents = "",
  } = (req.body || {}) as Record<string, string>;

  // --- Server-side validation ---
  if (!firstName.trim() || firstName.length > 100) return res.status(400).json({ message: "Nome non valido" });
  if (!lastName.trim() || lastName.length > 100) return res.status(400).json({ message: "Cognome non valido" });
  if (!isEmail(email) || email.length > 255) return res.status(400).json({ message: "Email non valida" });
  if (!phone.trim() || phone.length > 40) return res.status(400).json({ message: "Telefono non valido" });
  if (!profession.trim()) return res.status(400).json({ message: "Professione mancante" });
  if (!city.trim() || city.length > 100) return res.status(400).json({ message: "Città non valida" });

  const listId = process.env.BREVO_CANDIDATURA_LIST_ID;

  try {
    // 1. Upsert the contact into the Brevo list.
    if (listId) {
      await fetch(`${BREVO_API}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "api-key": apiKey },
        body: JSON.stringify({
          email,
          updateEnabled: true,
          listIds: [Number(listId)],
          attributes: {
            FIRSTNAME: firstName,
            LASTNAME: lastName,
            SMS: phone,
            PROFESSIONE: profession,
            CITTA: city,
            SOCIAL: social,
            CONSULENZA: availability,
            DOCUMENTI: documents,
          },
        }),
      });
    }

    // 2. Notify the team.
    await fetch(`${BREVO_API}/smtp/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": apiKey },
      body: JSON.stringify({
        sender: { name: "Glamro Website", email: "noreply@glamro.it" },
        to: [{ email: "contact@glamro.it", name: "Glamro" }],
        replyTo: { email, name: `${firstName} ${lastName}` },
        subject: `Nuova candidatura: ${firstName} ${lastName} (${profession})`,
        textContent:
          `Nuova candidatura professionista\n\n` +
          `Nome: ${firstName} ${lastName}\nEmail: ${email}\nTelefono: ${phone}\n` +
          `Professione: ${profession}\nCittà: ${city}\nSocial: ${social}\n` +
          `Disponibile a consulenza: ${availability}\nDocumenti: ${documents}`,
      }),
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Candidatura error:", error?.message || error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
