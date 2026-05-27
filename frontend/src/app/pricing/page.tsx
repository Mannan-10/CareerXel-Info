import { Metadata } from "next";
import PricingPageClient from "@/components/pricing/PricingPageClient";
import { fetchFromStrapi } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "Honest, Itemized Pricing Plans | CareerXel",
  description: "Transparent pricing. Pay for what you ship, not what you might. Free forever for individuals. Per-seat pricing for teams, and annual plans for institutions.",
  alternates: {
    canonical: "https://careerxel.com/pricing",
  },
  openGraph: {
    title: "Honest, Itemized Pricing Plans | CareerXel",
    description: "Transparent pricing. Pay for what you ship, not what you might. Free forever for individuals. Per-seat pricing for teams, and annual plans for institutions.",
    type: "website",
  },
};

export default async function PricingPage() {
  const json = await fetchFromStrapi("/pricing-plans?sort=order:asc");

  return <PricingPageClient plans={json.data || []} />;
}