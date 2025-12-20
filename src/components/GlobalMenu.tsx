 "use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Clips", href: "/clips" },
  { label: "Reminders", href: "/reminders" },
  { label: "Movies", href: "/movies" },
  { label: "Ask", href: "/ask" },
];

const shell = "mx-auto w-full max-w-6xl px-4 sm:px-6";

export default function GlobalMenu() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const bgClasses = isScrolled ? "bg-black/80 border border-zinc-800" : "bg-zinc-900/60 border border-zinc-800";

  return (
    <div className="sticky top-0 z-40 backdrop-blur-md">
      <div className={`${shell} py-3`}>
        <div className={`flex items-center justify-between rounded-xl px-4 py-3 transition-colors ${bgClasses}`}>
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-white hover:text-orange-300 transition-colors"
          >
            Rafid Hoda
          </Link>

          <div className="hidden md:flex items-center gap-1 text-sm text-zinc-400">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg border transition-colors ${
                    active
                      ? "border-zinc-700 bg-zinc-800 text-white"
                      : "border-transparent hover:border-zinc-800 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/70 text-white"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition-transform ${isMobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition-opacity ${isMobileOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition-transform ${isMobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-sm">
          <div className={`${shell} pt-24 pb-10`}>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`w-full rounded-xl border px-4 py-3.5 text-base font-medium transition-colors ${
                      active
                        ? "border-zinc-700 bg-zinc-800 text-white"
                        : "border-zinc-800 bg-zinc-900/80 text-zinc-200 hover:text-white hover:border-zinc-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

