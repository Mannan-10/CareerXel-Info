import { Metadata } from "next";
import FeaturesContent from "./FeaturesContent";

export const metadata: Metadata = {
  title: "Platform Features | CareerXel AI-Powered Placements & ATS",
  description: "Take an honest, end-to-end tour of CareerXel. Twelve unified modules spanning Resume Building, Smart Matching, proctored AI Mock Interviews, funnels, and enterprise SAML SSO.",
  alternates: {
    canonical: "https://careerxel.com/features",
  },
  openGraph: {
    title: "Platform Features | CareerXel AI-Powered Placements & ATS",
    description: "Take an honest, end-to-end tour of CareerXel. Twelve unified modules spanning Resume Building, Smart Matching, proctored AI Mock Interviews, funnels, and enterprise SAML SSO.",
    type: "website",
  },
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
