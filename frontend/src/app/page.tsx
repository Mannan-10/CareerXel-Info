import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import LogoStrip from "@/components/sections/LogoStrip";
import AudienceSection from "@/components/sections/AudienceSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ProductDepthSection from "@/components/sections/ProductDepthSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import NumbersSection from "@/components/sections/NumbersSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "CareerXel | AI-Powered Career & Recruitment Platform",
  description: "CareerXel is a premium career and recruitment platform. We scale resume building, smart matching, and verified proctored interviews for candidates, employers, and colleges.",
  alternates: {
    canonical: "https://careerxel.com/",
  },
  openGraph: {
    title: "CareerXel | AI-Powered Career & Recruitment Platform",
    description: "CareerXel is a premium career and recruitment platform. We scale resume building, smart matching, and verified proctored interviews for candidates, employers, and colleges.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <LogoStrip />
      <AudienceSection />
      <FeatureGrid />
      <ProductDepthSection />
      <WorkflowSection />
      <NumbersSection />
      <TestimonialSection />
      <CTASection />
    </main>
  );
}
