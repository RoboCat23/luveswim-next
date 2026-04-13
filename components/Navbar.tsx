"use client";

import { useState, useEffect } from "react";

const BOOKING_URL = "https://luveswim.as.me/schedule/a248e30e";
const PHONE_TEL = "tel:+18326005534";
const PHONE_DISPLAY = "(832) 600-5534";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "The Promise", href: "#promise" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(255,255,255,0.97)"
          : "rgba(255,255,255,0)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 24px rgba(12,192,223,0.12)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-pacifico text-2xl tracking-wide"
            style={{ color: "#0CC0DF" }}
            onClick={closeMenu}
          >
            LUVESWIM
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-600 transition-colors duration-200"
                  style={{
                    color: scrolled ? "#1A2E3B" : "#ffffff",
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#0CC0DF")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = scrolled
                      ? "#1A2E3B"
                      : "#ffffff")
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={PHONE_TEL}
              className="text-sm font-600 transition-colors"
              style={{
                color: scrolled ? "#1A2E3B" : "rgba(255,255,255,0.9)",
                fontWeight: 600,
              }}
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-book inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-700 text-white transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #FF6B6B, #e85555)",
                fontWeight: 700,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.transform =
                  "scale(1.04)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
              }
            >
              Book Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: scrolled || menuOpen ? "#1A2E3B" : "#ffffff",
                transform: menuOpen
                  ? "rotate(45deg) translate(4px, 6px)"
                  : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: scrolled || menuOpen ? "#1A2E3B" : "#ffffff",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: scrolled || menuOpen ? "#1A2E3B" : "#ffffff",
                transform: menuOpen
                  ? "rotate(-45deg) translate(4px, -6px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "400px" : "0px",
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="text-base font-600 py-2 border-b border-gray-100"
              style={{ color: "#1A2E3B", fontWeight: 600 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={PHONE_TEL}
            className="text-base font-600 py-2"
            style={{ color: "#0CC0DF", fontWeight: 700 }}
          >
            Call Seth: {PHONE_DISPLAY}
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="text-center px-6 py-3 rounded-full text-white font-700 text-base"
            style={{
              background: "linear-gradient(135deg, #FF6B6B, #e85555)",
              fontWeight: 700,
            }}
          >
            Book Your Lessons
          </a>
        </div>
      </div>
    </nav>
  );
}
