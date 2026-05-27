import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About CareerXel | AI-Powered Hiring & Placement Platform",
  description: "Meet the team behind CareerXel. Our mission is to make hiring fair, fast, and data-driven for candidates, employers, and colleges.",
  alternates: {
    canonical: "https://careerxel.com/about",
  },
  openGraph: {
    title: "About CareerXel | AI-Powered Hiring & Placement Platform",
    description: "Meet the team behind CareerXel. Our mission is to make hiring fair, fast, and data-driven for candidates, employers, and colleges.",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
