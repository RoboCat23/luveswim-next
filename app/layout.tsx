import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luveswim.com"),
  title: {
    default: "LUVESWIM | Private Swim Lessons in Houston, TX",
    template: "%s | LUVESWIM",
  },
  description:
    "Private swim lessons for kids and adults in Houston, TX. Certified instructor comes to your residential or community pool. Results guaranteed by lesson 10. That's the LUVE PROMISE.",
  applicationName: "LUVE Swim",
  authors: [{ name: "Seth Green" }],
  creator: "LUVE Enterprises Group LLC",
  publisher: "LUVE Enterprises Group LLC",
  keywords: [
    "swim lessons Houston",
    "private swim lessons Houston",
    "Houston swim instructor",
    "lifeguard hire Houston",
    "kids swim lessons Houston",
    "adult swim lessons Houston",
    "sibling swim package Houston",
    "pool party lifeguard Houston",
    "in-home swim lessons",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "LUVESWIM | Houston's Best Swim Instructor",
    description:
      "Private swim lessons for kids and adults. We come to your residential or community pool. Results guaranteed by lesson 10, or your money back.",
    url: "https://luveswim.com",
    siteName: "LUVE Swim",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/seth.jpg",
        width: 827,
        height: 989,
        alt: "Seth Green — LUVE Swim instructor in Houston, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LUVESWIM | Houston's Best Swim Instructor",
    description:
      "Private swim lessons for kids and adults. We come to your residential or community pool. Results guaranteed by lesson 10.",
    images: ["/seth.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800&family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${bricolage.className} antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
