import Link from "next/link";

const navItems = [
  { label: "Reminders", href: "/reminders" },
  { label: "Movies", href: "/movies" },
];

const shell = "mx-auto w-full max-w-6xl px-4 sm:px-6";

export default function GlobalMenu() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur-md">
      <div className={`${shell} py-3`}>
        <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-white hover:text-orange-300 transition-colors"
          >
            Rafid Hoda
          </Link>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 rounded-lg hover:bg-zinc-800 hover:text-white transition-colors border border-transparent hover:border-zinc-800"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

