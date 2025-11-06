export interface Company {
  name: string;
  slug: string;
  headline: string;
  description: string;
}

export const companies: Company[] = [
  {
    name: "Notion",
    slug: "notion",
    headline: "Hey Notion 👋 — here's why I should be working there.",
    description: "I've been building tools that help people create and organize their ideas for years. Your mission to make toolmaking universal resonates deeply with my work teaching regular people to build apps and tools. I'd love to bring my experience in education, product development, and community building to help Notion reach even more creators.",
  },
  {
    name: "Vercel",
    slug: "vercel",
    headline: "Hey Vercel 👋 — here's why I should be working there.",
    description: "As someone who's built multiple products using Next.js and deployed them on Vercel, I understand the developer experience you're creating. My background in teaching programming and helping people ship their first apps aligns perfectly with Vercel's mission to make web development accessible to everyone.",
  },
  {
    name: "Stripe",
    slug: "stripe",
    headline: "Hey Stripe 👋 — here's why I should be working there.",
    description: "I've integrated Stripe into multiple products and experienced firsthand how powerful your payment infrastructure is. My experience teaching entrepreneurship and helping creators monetize their work would be valuable in making Stripe's tools even more accessible to the next generation of builders.",
  },
];

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find((company) => company.slug === slug);
}

