"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const BOOKING_URL = "https://luveswim.as.me/schedule/a248e30e";
const PHONE_TEL = "tel:+18326005534";
const PHONE_DISPLAY = "(832) 600-5534";
const EMAIL_HREF = "mailto:contact@luveswim.com";
const EMAIL_DISPLAY = "Contact@luveswim.com";
const INSTAGRAM_URL = "https://www.instagram.com/luveswim?igsh=N3prazFlcDI0NWJ0&utm_source=qr";
const FACEBOOK_URL = "https://www.facebook.com/share/1A5bh9JZru/?mibextid=wwXIfr";

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
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Main navbar */}
      <div
        className="transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(12,192,223,0.12)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center" onClick={closeMenu}>
              <Image
                src="/logo-luveswim.png"
                alt="LUVE SWIM"
                width={140}
                height={52}
                className="object-contain"
                priority
              />
            </a>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-600 transition-colors duration-200"
                    style={{ color: "#1A2E3B", fontWeight: 600 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0CC0DF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#1A2E3B")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop right side */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={EMAIL_HREF}
                className="text-sm transition-colors duration-200"
                style={{ color: "#1A2E3B" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0CC0DF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1A2E3B")}
              >
                {EMAIL_DISPLAY}
              </a>
              <span style={{ color: "rgba(26,46,59,0.2)" }}>|</span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors duration-200"
                style={{ color: "#1A2E3B" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0CC0DF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1A2E3B")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors duration-200"
                style={{ color: "#1A2E3B" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0CC0DF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1A2E3B")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-700 text-white transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #FF6B6B, #e85555)", fontWeight: 700 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.04)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
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
                  transform: menuOpen ? "rotate(45deg) translate(4px, 6px)" : "none",
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
                  transform: menuOpen ? "rotate(-45deg) translate(4px, -6px)" : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: menuOpen ? "480px" : "0px",
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
              href={EMAIL_HREF}
              className="text-base font-600 py-2"
              style={{ color: "#0CC0DF", fontWeight: 600 }}
            >
              {EMAIL_DISPLAY}
            </a>
            <div className="flex items-center gap-4 py-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-600"
                style={{ color: "#1A2E3B", fontWeight: 600 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-600"
                style={{ color: "#1A2E3B", fontWeight: 600 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </a>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-center px-6 py-3 rounded-full text-white font-700 text-base"
              style={{ background: "linear-gradient(135deg, #FF6B6B, #e85555)", fontWeight: 700 }}
            >
              Book Your Lessons
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
