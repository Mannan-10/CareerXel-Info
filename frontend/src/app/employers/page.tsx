import { Metadata } from "next";
import EmployersContent from "./EmployersContent";

export const metadata: Metadata = {
  title: "For Employers & Recruiters | CareerXel AI-Powered ATS Platform",
  description: "Accelerate your hiring funnel with our transparent AI-driven ATS. Streamline screening, run identity-verified proctored AI interviews, and organize your pipeline from slot to signed offer.",
  alternates: {
    canonical: "https://careerxel.com/employers",
  },
  openGraph: {
    title: "For Employers & Recruiters | CareerXel AI-Powered ATS Platform",
    description: "Accelerate your hiring funnel with our transparent AI-driven ATS. Streamline screening, run identity-verified proctored AI interviews, and organize your pipeline from slot to signed offer.",
    type: "website",
  },
};

export default function EmployersPage() {
  return <EmployersContent />;
}
