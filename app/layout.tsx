import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUVESWIM | Private Swim Lessons in Houston, TX",
  description:
    "Private swim lessons for all ages in Houston, TX. Certified instructor comes to your pool. Results guaranteed by lesson 10. That's the LUVE PROMISE.",
  keywords: [
    "swim lessons Houston",
    "private swim lessons Houston",
    "Houston swim instructor",
    "lifeguard hire Houston",
    "kids swim lessons Houston",
    "adult swim lessons",
    "baby swim lessons",
  ],
  openGraph: {
    title: "LUVESWIM | Houston's Fun Swim Instructor",
    description:
      "Private swim lessons for all ages. We come to you. Results guaranteed by lesson 10, or your money back.",
    type: "website",
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
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${figtree.className} antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
