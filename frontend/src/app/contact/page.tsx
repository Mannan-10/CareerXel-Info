import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact CareerXel | Talk to Sales, Support, and Partnerships",
  description:
    "Contact CareerXel for sales, support, press, partnerships, and institutional onboarding.",
  alternates: {
    canonical: "https://careerxel.com/contact",
  },
  openGraph: {
    title: "Contact CareerXel | Talk to Sales, Support, and Partnerships",
    description:
      "Contact CareerXel for sales, support, press, partnerships, and institutional onboarding.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
