import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  const {
    full_name,
    email,
    project_type,
    services,
    budget,
    timeline,
    website,
    message,
  } = data;

  const summaryHtml = `
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Website:</strong> ${website || 'Not provided'}</p>
    <p><strong>Project Type:</strong> ${project_type}</p>
    <p><strong>Services:</strong> ${services}</p>
    <p><strong>Budget:</strong> ${budget}</p>
    <p><strong>Timeline:</strong> ${timeline}</p>
    <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
  `;

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Thanks for reaching out!</title>
    <style>
      body {
        margin: 0;
        background-color: #0f172a;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #e2e8f0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #1e293b;
        border-radius: 8px;
        overflow: hidden;
      }
      .header {
        background-color: #0f172a;
        padding: 24px;
        text-align: center;
      }
      .header img {
        max-width: 160px;
        height: auto;
      }
      .body {
        padding: 32px;
      }
      h1 {
        font-size: 24px;
        color: #facc15;
      }
      p {
        font-size: 16px;
        line-height: 1.6;
        color: #cbd5e1;
      }
      .summary {
        background-color: #334155;
        padding: 16px;
        margin-top: 24px;
        border-radius: 6px;
        font-size: 14px;
      }
      .footer {
        text-align: center;
        padding: 24px;
        font-size: 12px;
        color: #64748b;
      }
      @media (max-width: 600px) {
        .body {
          padding: 24px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="https://weblitzstack.com/weblitzstacklogo.png" alt="WeblitzStack Logo" />
      </div>
      <div class="body">
        <h1>Thanks for reaching out, ${full_name}!</h1>
        <p>
          I'm glad you contacted WeblitzStack. Here's a summary of your submission. I’ll personally review it and get back to you shortly.
        </p>
        <div class="summary">
          ${summaryHtml}
        </div>
        <p>Talk soon, <br/>Josiah from WeblitzStack</p>
      </div>
      <div class="footer">
        © 2025 WeblitzStack • Subic, Zambales<br />
        <a href="https://weblitzstack.com" style="color: #f97316;">Visit our website</a>
      </div>
    </div>
  </body>
  </html>
  `;

  try {
    // 1. Email to Admin
    await resend.emails.send({
      from: 'Josiah from WeblitzStack <josiah@weblitzstack.com>',
      to: ['jsmav1611travel@gmail.com'],
      subject: 'New Hire Me Inquiry - WeblitzStack',
      html: summaryHtml,
    });

    // 2. Email to Client
    await resend.emails.send({
      from: 'Josiah from WeblitzStack <josiah@weblitzstack.com>',
      to: [email],
      subject: 'Thanks for contacting WeblitzStack!',
      html,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error('Email sending failed:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
