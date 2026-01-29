import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, name, email, message, company, phone } = req.body;

    // 1. Store in Supabase
    let dbError = null;
    if (type === 'newsletter') {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email, created_at: new Date().toISOString() }]);
      dbError = error;
    } else {
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name,
          email,
          message,
          company: company || null,
          // phone: phone || null, // Enable if phone is passed
          created_at: new Date().toISOString()
        }]);
      dbError = error;
    }

    if (dbError) {
      console.error('Supabase Error:', dbError);
      // We continue to send email even if DB fails, or you could return error.
      // For now, we log it.
    }

    // 2. Send Email via Resend
    let subject = '';
    let htmlContent = '';

    if (type === 'newsletter') {
      subject = '🎉 New Newsletter Subscriber!';
      htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #0066FF;">New Newsletter Subscription</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p>A new user has subscribed to your newsletter updates.</p>
        </div>
      `;
    } else {
      subject = `📬 New Inquiry from ${name}`;
      htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #0066FF;">New Contact Form Submission</h1>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 10px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <hr style="border: 1px solid #ddd; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `;
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['lovemary.creative@gmail.com'],
      subject: subject,
      html: htmlContent,
      reply_to: email,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Failed to process request', details: error.message });
  }
}
