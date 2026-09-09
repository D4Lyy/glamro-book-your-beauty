import * as Brevo from '@getbrevo/brevo';

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ message: 'Server not configured' });
  }

  const {
    firstName = '',
    lastName = '',
    phone = '',
    email = '',
    profession = '',
    city = '',
    social = '',
    availability = '',
    documents = '',
  } = (req.body || {}) as Record<string, string>;

  const isAvailable = 
    typeof availability === 'boolean' 
      ? availability 
      : ['true', 'on', 'yes', '1', 'si'].includes(String(availability).toLowerCase().trim());

  if (!firstName.trim() || firstName.length > 100) return res.status(400).json({ message: 'Nome non valido' });
  if (!lastName.trim() || lastName.length > 100) return res.status(400).json({ message: 'Cognome non valido' });
  if (!isEmail(email) || email.length > 255) return res.status(400).json({ message: 'Email non valida' });
  if (!phone.trim() || phone.length > 40) return res.status(400).json({ message: 'Telefono non valido' });
  if (!profession.trim()) return res.status(400).json({ message: 'Professione mancante' });
  if (!city.trim() || city.length > 100) return res.status(400).json({ message: 'Città non valida' });

  let formattedPhone: string | null = null;
  let cleanPhone = phone.replace(/\D/g, '');
  if (cleanPhone.startsWith('39')) cleanPhone = cleanPhone.slice(2);
  if (cleanPhone.startsWith('0')) cleanPhone = cleanPhone.slice(1);
  if (cleanPhone.length >= 9 && cleanPhone.length <= 10) {
    formattedPhone = `39${cleanPhone}`;
  }

  const client = new Brevo.BrevoClient({
    apiKey: apiKey, 
  });

  try {
    await client.contacts.createContact({
      email: email,
      attributes: {
        NOME: firstName,
        COGNOME: lastName,
        ...(formattedPhone && { SMS: formattedPhone }),
        EMAIL: email,
        CITY: city,
        PROFESSIONE: profession,
        SOCIALS: social,
        DISPONIBILE_CONSULENZA: isAvailable,
        DOCUMENTI_DISPONIBILI: documents,
      },
      listIds: [34],
      updateEnabled: true
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    const errorMessage = error.response?.body?.message || error.message || 'Errore durante la candidatura';
    console.error('Brevo API Error:', errorMessage);
    return res.status(400).json({ message: errorMessage });
  }
}