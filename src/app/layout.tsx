import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafid Hoda - The Seller. The Builder. The Teacher. The Storyteller.",
  description: "One person connecting customers, code, and clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          defer
          data-domain="rafidhoda.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
