import { BrevoClient } from "@getbrevo/brevo";

// Initialize Brevo
const client = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY as string,
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, role, subject, message } = req.body;

  try {
    // Send the Transactional Email (to your inbox)
    await client.transactionalEmails.sendTransacEmail({
      subject: `Website Inquiry: [${role}] ${subject}`,
      sender: { name: "Glamro Website", email: "noreply@glamro.it" },
      to: [{ email: "contact@glamro.it", name: "Contact" }],
      replyTo: { email: email, name: name },
      textContent: `New inquiry from ${name}\nRole: ${role}\n\n${message}`,
    });

    return res.status(200).json({ success: true });

  } catch (error: any) {
    console.error("Brevo Error:", error.response?.body || error);
    return res.status(500).json({ 
      message: error.response?.body?.message || "Internal Server Error" 
    });
  }
}