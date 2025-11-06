import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111] text-[#f1f1f1] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-400 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-amber-500/20 text-amber-400 rounded-lg hover:bg-amber-500/30 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

