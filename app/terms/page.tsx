import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — LUVE Swim",
  description: "Terms and conditions for LUVE Swim services.",
};

export default function TermsPage() {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "tos-content.md"),
    "utf-8"
  );

  // Start from the actual content div, skipping the Termly <style> and logo <span>
  const contentStart = raw.indexOf('<div data-custom-class="body">');
  const html = contentStart !== -1 ? raw.slice(contentStart) : raw;

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/* Nav */}
      <div style={{ background: "#003B4A" }}>
        <div className="w-full px-6 py-5 flex items-center justify-between max-w-5xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-luveswim.png"
              alt="LUVE SWIM"
              width={110}
              height={40}
              className="object-contain brightness-0 invert"
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold transition-opacity hover:opacity-100"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            ← Back to site
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-14">
        <div
          className="bg-white rounded-2xl shadow-sm px-8 py-12 md:px-14 md:py-16"
          style={{ border: "1px solid #e5eaf0" }}
        >
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <p className="text-center text-xs mt-8" style={{ color: "#9aacb4" }}>
          © 2026 LUVE Enterprises Group LLC · Houston, TX
        </p>
      </div>

    </div>
  );
}
