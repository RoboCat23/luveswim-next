import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";


const FROM = "LUVE Swim <noreply@booking.luveswim.com>";
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
<body style="margin:0;padding:0;background:#f0f4f6;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f0f4f6" style="background:#f0f4f6;padding:36px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.12);">

          <!-- Header: solid teal — reliable across all email clients -->
          <tr>
            <td bgcolor="#003B4A" style="background:#003B4A;padding:32px 40px 28px;text-align:center;">
              <p style="margin:0 0 8px;font-size:28px;line-height:1;">🌊</p>
              <p style="margin:0 0 4px;font-size:26px;font-weight:900;color:#ffffff;letter-spacing:3px;text-transform:uppercase;">LUVE SWIM</p>
              <p style="margin:0;font-size:10px;color:rgba(255,255,255,0.55);letter-spacing:2px;text-transform:uppercase;">HTX&apos;s Best Swim Instructor &nbsp;·&nbsp; Houston, TX</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td bgcolor="#ffffff" style="background:#ffffff;padding:36px 40px 32px;">
              ${bodyContent}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td bgcolor="#003B4A" style="background:#003B4A;padding:20px 40px 24px;text-align:center;">
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.5);">
                © 2026 LUVE Enterprises Group LLC &nbsp;·&nbsp; Houston, TX
                &nbsp;·&nbsp; <a href="${SITE_URL}" style="color:#0CC0DF;text-decoration:none;">luveswim.com</a>
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
    <!-- Tag -->
    <p style="margin:0 0 4px;font-size:11px;color:#0CC0DF;font-weight:700;letter-spacing:2px;text-transform:uppercase;">
      🏊 New Lesson Request
    </p>
    <h1 style="margin:0 0 6px;font-size:24px;font-weight:800;color:#003B4A;line-height:1.3;">
      ${name} wants to book a lesson
    </h1>
    <p style="margin:0 0 28px;font-size:14px;color:#6b8796;line-height:1.6;">
      New contact request just landed from luveswim.com
    </p>

    <!-- Details card -->
    <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#f0fafb,#e8f6fa);border-radius:14px;margin-bottom:28px;border:1px solid rgba(12,192,223,0.18);">
      <tr>
        <td style="padding:24px 28px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:7px 0;font-size:12px;color:#9aacb4;font-weight:700;text-transform:uppercase;letter-spacing:1px;width:90px;">Name</td>
              <td style="padding:7px 0;font-size:15px;color:#1A2E3B;font-weight:700;">${name}</td>
            </tr>
            <tr>
              <td style="padding:7px 0;font-size:12px;color:#9aacb4;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Email</td>
              <td style="padding:7px 0;font-size:15px;">
                <a href="mailto:${email}" style="color:#0093B2;font-weight:600;text-decoration:none;">${email}</a>
              </td>
            </tr>
            ${swimmers ? `<tr>
              <td style="padding:7px 0;font-size:12px;color:#9aacb4;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Swimmers</td>
              <td style="padding:7px 0;font-size:15px;color:#1A2E3B;">${swimmers}</td>
            </tr>` : ""}
            ${message ? `<tr>
              <td style="padding:10px 0 4px;font-size:12px;color:#9aacb4;font-weight:700;text-transform:uppercase;letter-spacing:1px;vertical-align:top;">Message</td>
              <td style="padding:10px 0 4px;font-size:14px;color:#3d5260;line-height:1.65;">${message}</td>
            </tr>` : ""}
          </table>
        </td>
      </tr>
    </table>

    <!-- CTA -->
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td style="border-radius:50px;background:linear-gradient(135deg,#0CC0DF,#0093B2);box-shadow:0 6px 20px rgba(12,192,223,0.35);">
          <a href="mailto:${email}" style="display:inline-block;padding:14px 32px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:50px;letter-spacing:0.5px;">
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
    <!-- Greeting -->
    <p style="margin:0 0 4px;font-size:11px;color:#0CC0DF;font-weight:700;letter-spacing:2px;text-transform:uppercase;">
      Message Received ✓
    </p>
    <h1 style="margin:0 0 16px;font-size:26px;font-weight:800;color:#003B4A;line-height:1.3;">
      Hey ${name}, you&apos;re one step closer to the water! 🏊‍♂️
    </h1>
    <p style="margin:0 0 20px;font-size:15px;color:#3d5260;line-height:1.75;">
      We&apos;ve got your message and will be in touch within <strong style="color:#0093B2;">24 hours</strong> to set up your first lesson. Get ready to make a splash.
    </p>

    <!-- What to expect card -->
    <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#f0fafb,#e8f6fa);border-radius:14px;margin-bottom:28px;border:1px solid rgba(12,192,223,0.18);">
      <tr>
        <td style="padding:24px 28px;">
          <p style="margin:0 0 14px;font-size:12px;color:#0CC0DF;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">What happens next</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:6px 0;vertical-align:top;width:28px;font-size:16px;">✅</td>
              <td style="padding:6px 0;font-size:14px;color:#3d5260;line-height:1.55;">We&apos;ll reach out within 24 hours to confirm your lesson details</td>
            </tr>
            <tr>
              <td style="padding:6px 0;vertical-align:top;font-size:16px;">📍</td>
              <td style="padding:6px 0;font-size:14px;color:#3d5260;line-height:1.55;">We come to your residential or community pool — no hassle</td>
            </tr>
            <tr>
              <td style="padding:6px 0;vertical-align:top;font-size:16px;">🏆</td>
              <td style="padding:6px 0;font-size:14px;color:#3d5260;line-height:1.55;">Results guaranteed by lesson 10 — that&apos;s the LUVE PROMISE</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- Social strip -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
      <tr>
        <td style="text-align:center;">
          <a href="https://www.instagram.com/luveswim" style="display:inline-block;margin:0 6px;padding:10px 20px;border-radius:50px;background:linear-gradient(135deg,#FF6B6B,#e85555);font-size:13px;color:#ffffff;font-weight:700;text-decoration:none;">
            📸 Instagram
          </a>
          <a href="https://www.facebook.com/share/1A5bh9JZru/" style="display:inline-block;margin:0 6px;padding:10px 20px;border-radius:50px;background:linear-gradient(135deg,#0CC0DF,#0093B2);font-size:13px;color:#ffffff;font-weight:700;text-decoration:none;">
            👍 Facebook
          </a>
        </td>
      </tr>
    </table>

    <!-- CTA -->
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td style="border-radius:50px;background:linear-gradient(135deg,#FF6B6B,#e85555);box-shadow:0 6px 20px rgba(255,107,107,0.35);">
                <a href="${SITE_URL}" style="display:inline-block;padding:14px 32px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:50px;letter-spacing:0.5px;">
                  Visit luveswim.com →
                </a>
              </td>
            </tr>
          </table>
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
