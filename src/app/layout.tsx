import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import GlobalMenu from "@/components/GlobalMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafid Hoda - Programmer & Teacher",
  description: "Rafid Hoda — programmer, teacher, and storyteller.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${plusJakartaSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-black text-white`}
      >
        <GlobalMenu />
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">{children}</div>
          <footer className="border-t border-zinc-900/80 bg-black/80">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between text-sm text-zinc-400">
              <div className="space-y-1">
                <p className="text-white font-semibold">Rafid Hoda</p>
                <p className="text-zinc-500">© 2026 Rafid Hoda. All rights reserved.</p>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <a className="hover:text-white transition-colors" href="https://x.com/rafidhoda" target="_blank" rel="noreferrer">
                  X
                </a>
                <span className="text-zinc-700">/</span>
                <a className="hover:text-white transition-colors" href="https://www.linkedin.com/in/rafidhoda/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <span className="text-zinc-700">/</span>
                <a className="hover:text-white transition-colors" href="https://www.youtube.com/@rafidhoda" target="_blank" rel="noreferrer">
                  YouTube
                </a>
                <span className="text-zinc-700">/</span>
                <a className="hover:text-white transition-colors" href="https://www.instagram.com/rafidhoda" target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <span className="text-zinc-700">/</span>
                <a className="hover:text-white transition-colors" href="https://www.tiktok.com/@rafidhoda" target="_blank" rel="noreferrer">
                  TikTok
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
