/**
 * api/whatsapp.js — Vercel serverless function
 *
 * Sends a WhatsApp message via Meta Cloud API.
 *
 * Required env vars (set in Vercel Dashboard > Settings > Environment Variables):
 *   WHATSAPP_PHONE_NUMBER_ID   — numeric ID from Meta Developer Console
 *                                (not the phone number itself; find it at
 *                                 developers.facebook.com > your app > WhatsApp > API Setup)
 *   WHATSAPP_ACCESS_TOKEN      — permanent / long-lived system user token
 *
 * POST /api/whatsapp
 * Body: { to: "+351912345678", message: "..." }
 */

const GRAPH_API_VERSION = 'v20.0';
const ALLOWED_ORIGIN = 'https://www.eurowinexp.com';

export default async function handler(req, res) {
  // CORS — allow only the production domain (and localhost in dev)
  const origin = req.headers.origin || '';
  if (origin === ALLOWED_ORIGIN || origin.startsWith('http://localhost')) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

  if (!phoneNumberId || !accessToken) {
    console.error('WhatsApp env vars not configured');
    return res.status(500).json({ error: 'WhatsApp service not configured' });
  }

  const { to, message } = req.body || {};

  if (!to || !message) {
    return res.status(400).json({ error: 'Missing required fields: to, message' });
  }

  // Validate phone number format (E.164)
  if (!/^\+?[1-9]\d{6,14}$/.test(to.replace(/\s/g, ''))) {
    return res.status(400).json({ error: 'Invalid phone number format' });
  }

  // Sanitize message — strip HTML tags, limit length
  const safeMessage = message.replace(/<[^>]*>/g, '').slice(0, 1000);
  const safePhone = to.replace(/\s/g, '');

  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${phoneNumberId}/messages`;

  const payload = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: safePhone,
    type: 'text',
    text: { body: safeMessage },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('WhatsApp API error:', data);
      return res.status(response.status).json({
        error: data?.error?.message || 'Failed to send message',
      });
    }

    return res.status(200).json({ success: true, messageId: data?.messages?.[0]?.id });
  } catch (err) {
    console.error('WhatsApp fetch error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
