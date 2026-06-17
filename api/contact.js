export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, package: pkg, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Campos obrigatórios em falta' });
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'geral@eurowinexp.com';
  const toEmail = process.env.CONTACT_TO_EMAIL || 'geral@eurowinexp.com';

  if (!resendApiKey) {
    console.error('RESEND_API_KEY not configured');
    return res.status(500).json({ error: 'Serviço de email não configurado' });
  }

  const subject = `Nova mensagem - ${pkg || 'Contato Geral'}`;

  const htmlBody = `
<h2 style="color:#7f1d1d">Nova mensagem — EuroWine Experience</h2>
<table cellpadding="6" style="font-family:sans-serif;font-size:14px">
  <tr><td><strong>Nome</strong></td><td>${escapeHtml(name)}</td></tr>
  <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
  <tr><td><strong>Telefone</strong></td><td>${escapeHtml(phone || 'Não informado')}</td></tr>
  <tr><td><strong>Pacote</strong></td><td>${escapeHtml(pkg || 'Contato Geral')}</td></tr>
</table>
<p style="font-family:sans-serif;font-size:14px;margin-top:16px"><strong>Mensagem:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
`;

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        html: htmlBody,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error('Resend error:', resendRes.status, errText);
      return res.status(502).json({ error: 'Falha ao enviar email' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Unexpected error in contact handler:', err);
    return res.status(500).json({ error: 'Erro inesperado' });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
