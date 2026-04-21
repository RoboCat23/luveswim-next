"use client";

const BOOKING_URL = "/book";
const PHONE_TEL = "tel:+18326005534";
const PHONE_DISPLAY = "(832) 600-5534";
const EMAIL = "Contact@luveswim.com";
const EMAIL_HREF = "mailto:contact@luveswim.com";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/luveswim?igsh=N3prazFlcDI0NWJ0&utm_source=qr",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1A5bh9JZru/?mibextid=wwXIfr",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact">
      {/* Main footer strip */}
      <div
        className="px-4 py-14"
        style={{ background: "#003B4A" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10 flex-wrap">
          {/* Logo + tagline */}
          <div className="flex-shrink-0">
            <p
              className="font-pacifico text-3xl mb-2"
              style={{ color: "#0CC0DF" }}
            >
              LUVESWIM
            </p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              Houston&apos;s Best Swim Instructor
            </p>
            <p
              className="mt-3 text-sm italic"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              &quot;Where U Can Do It&quot;
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs font-700 uppercase tracking-widest mb-1"
              style={{ color: "#0CC0DF", fontWeight: 700 }}
            >
              Get in Touch
            </p>
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.85)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#0CC0DF")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.85)")
              }
            >
              <span>📞</span> {PHONE_DISPLAY}
            </a>
            <a
              href={EMAIL_HREF}
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.85)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#0CC0DF")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.85)")
              }
            >
              <span>✉️</span> {EMAIL}
            </a>
            <p
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              <span>📍</span> Houston, TX area
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs font-700 uppercase tracking-widest mb-1"
              style={{ color: "#0CC0DF", fontWeight: 700 }}
            >
              Quick Links
            </p>
            {[
              { label: "About", href: "#about" },
              { label: "Services & Pricing", href: "#services" },
              { label: "The LUVE PROMISE", href: "#promise" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Book a Lesson", href: BOOKING_URL, external: false },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.75)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#0CC0DF")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.75)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social + CTA */}
          <div className="flex flex-col gap-4">
            <p
              className="text-xs font-700 uppercase tracking-widest mb-1"
              style={{ color: "#0CC0DF", fontWeight: 700 }}
            >
              Follow Us
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.75)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#0CC0DF";
                    (e.currentTarget as HTMLElement).style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.75)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href={BOOKING_URL}
              className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full font-700 text-sm transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #FF6B6B, #e85555)",
                color: "#ffffff",
                fontWeight: 700,
                boxShadow: "0 4px 16px rgba(255,107,107,0.3)",
              }}
            >
              Book a Lesson →
            </a>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div
        className="px-4 py-5 text-center"
        style={{ background: "#002533" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            © 2026 Luve Enterprises LLC. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            48-hour cancellation required · No-shows charged in full
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Cancellation Policy"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#0CC0DF")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.45)")
                }
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
