import { Metadata } from "next";
import CandidatesContent from "./CandidatesContent";

export const metadata: Metadata = {
  title: "For Candidates | CareerXel AI-Powered Career Platform",
  description: "Take control of your tech career. Build adaptive resumes, discover smart job matches, practice with calibrated AI mocks, and follow tailored learning roadmaps.",
  alternates: {
    canonical: "https://careerxel.com/candidates",
  },
  openGraph: {
    title: "For Candidates | CareerXel AI-Powered Career Platform",
    description: "Take control of your tech career. Build adaptive resumes, discover smart job matches, practice with calibrated AI mocks, and follow tailored learning roadmaps.",
    type: "website",
  },
};

export default function CandidatesPage() {
  return <CandidatesContent />;
}
