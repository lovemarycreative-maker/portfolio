import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
        const { type, name, email, message, phone } = req.body;

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
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
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
        console.error('Resend Error:', error);
        return res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
}
