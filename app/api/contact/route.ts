import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";


const FROM = "LUVE Swim <test@team.trkaiagency.com>";
const SETH_EMAIL = "contact@luveswim.com";
const SITE_URL = "https://luveswim.com";

// ─── Shared email shell ───────────────────────────────────────────────────────
function emailShell(bodyContent: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LUVE Swim</title>
</head>
<body style="margin:0;padding:0;background:#f4f7f9;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#003B4A;padding:32px 40px;text-align:center;">
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:1px;">
                LUVE SWIM
              </p>
              <p style="margin:6px 0 0;font-size:12px;color:#0CC0DF;letter-spacing:2px;text-transform:uppercase;">
                Houston&apos;s Fun Swim Instructor
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px 40px 32px;">
              ${bodyContent}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f4f7f9;padding:20px 40px;text-align:center;border-top:1px solid #e8edf0;">
              <p style="margin:0;font-size:11px;color:#9aacb4;">
                © 2026 LUVE Swim &nbsp;·&nbsp; Houston, TX
                &nbsp;·&nbsp; <a href="${SITE_URL}" style="color:#0CC0DF;text-decoration:none;">luveswim.com</a>
              </p>
              <p style="margin:6px 0 0;font-size:11px;color:#b0bec5;">
                48-hour cancellation required &nbsp;·&nbsp; Weather reschedules always free
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Seth notification email ──────────────────────────────────────────────────
function sethEmailHtml(name: string, email: string, swimmers: string, message: string): string {
  return emailShell(`
    <p style="margin:0 0 6px;font-size:13px;color:#0CC0DF;font-weight:700;letter-spacing:1px;text-transform:uppercase;">
      New Contact Request
    </p>
    <h1 style="margin:0 0 20px;font-size:22px;font-weight:700;color:#003B4A;line-height:1.3;">
      ${name} wants to get in touch
    </h1>
    <p style="margin:0 0 24px;font-size:15px;color:#3d5260;line-height:1.7;">
      Someone just submitted a contact request through the LUVE Swim website. Here are their details:
    </p>

    <!-- Details card -->
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fafb;border-radius:12px;margin-bottom:28px;">
      <tr>
        <td style="padding:24px 28px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:6px 0;font-size:13px;color:#9aacb4;font-weight:600;width:100px;">Name</td>
              <td style="padding:6px 0;font-size:14px;color:#1A2E3B;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;font-size:13px;color:#9aacb4;font-weight:600;">Email</td>
              <td style="padding:6px 0;font-size:14px;color:#0093B2;">
                <a href="mailto:${email}" style="color:#0093B2;text-decoration:none;">${email}</a>
              </td>
            </tr>
            ${swimmers ? `<tr>
              <td style="padding:6px 0;font-size:13px;color:#9aacb4;font-weight:600;">Swimmers</td>
              <td style="padding:6px 0;font-size:14px;color:#1A2E3B;">${swimmers}</td>
            </tr>` : ""}
            ${message ? `<tr>
              <td style="padding:10px 0 6px;font-size:13px;color:#9aacb4;font-weight:600;vertical-align:top;">Message</td>
              <td style="padding:10px 0 6px;font-size:14px;color:#1A2E3B;line-height:1.6;">${message}</td>
            </tr>` : ""}
          </table>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 24px;font-size:15px;color:#3d5260;line-height:1.7;">
      Reach out to them whenever you get a chance — they're waiting to hear from you!
    </p>

    <!-- CTA -->
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td style="border-radius:50px;background:linear-gradient(135deg,#FF6B6B,#e85555);box-shadow:0 4px 16px rgba(255,107,107,0.3);">
          <a href="mailto:${email}" style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:50px;">
            Reply to ${name} →
          </a>
        </td>
      </tr>
    </table>
  `);
}

// ─── Applicant confirmation email ─────────────────────────────────────────────
function applicantEmailHtml(name: string): string {
  return emailShell(`
    <p style="margin:0 0 6px;font-size:13px;color:#0CC0DF;font-weight:700;letter-spacing:1px;text-transform:uppercase;">
      Request Received
    </p>
    <h1 style="margin:0 0 20px;font-size:22px;font-weight:700;color:#003B4A;line-height:1.3;">
      Hey ${name}, we got your message!
    </h1>
    <p style="margin:0 0 16px;font-size:15px;color:#3d5260;line-height:1.7;">
      Thanks for reaching out to LUVE Swim. Seth has been notified and will get back to you personally as soon as he can.
    </p>
    <p style="margin:0 0 28px;font-size:15px;color:#3d5260;line-height:1.7;">
      In the meantime, feel free to follow along on Instagram or Facebook to see what we're up to in the water.
    </p>

    <!-- Social strip -->
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fafb;border-radius:12px;margin-bottom:32px;">
      <tr>
        <td style="padding:20px 28px;text-align:center;">
          <a href="https://www.instagram.com/luveswim" style="display:inline-block;margin:0 8px;font-size:13px;color:#0093B2;font-weight:600;text-decoration:none;">
            📸 Instagram
          </a>
          <span style="color:#ccd6db;">|</span>
          <a href="https://www.facebook.com/share/1A5bh9JZru/" style="display:inline-block;margin:0 8px;font-size:13px;color:#0093B2;font-weight:600;text-decoration:none;">
            👍 Facebook
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 24px;font-size:14px;color:#9aacb4;line-height:1.7;">
      Don&apos;t forget your U CAN energy&hellip; we&apos;ll see you in the water 🏊‍♂️
    </p>

    <!-- CTA -->
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td style="border-radius:50px;background:linear-gradient(135deg,#0CC0DF,#0093B2);box-shadow:0 4px 16px rgba(12,192,223,0.3);">
          <a href="${SITE_URL}" style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:50px;">
            Visit luveswim.com →
          </a>
        </td>
      </tr>
    </table>
  `);
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, swimmers, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const [sethResult, applicantResult] = await Promise.all([
      resend.emails.send({
        from: FROM,
        to: SETH_EMAIL,
        replyTo: email,
        subject: `New contact request from ${name}`,
        html: sethEmailHtml(name, email, swimmers ?? "", message ?? ""),
      }),
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "We got your message — LUVE Swim",
        html: applicantEmailHtml(name),
      }),
    ]);

    if (sethResult.error || applicantResult.error) {
      console.error("Resend error:", sethResult.error ?? applicantResult.error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
