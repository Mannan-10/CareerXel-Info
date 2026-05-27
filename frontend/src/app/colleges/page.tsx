import { Metadata } from "next";
import CollegesContent from "./CollegesContent";

export const metadata: Metadata = {
  title: "For Colleges & Placement Offices | CareerXel Calibrated Placements",
  description: "Breathe transparency into placements. Bulk onboard cohorts, track all interviews and status realtime, get detailed per-student reports, and access NAAC accreditation exports.",
  alternates: {
    canonical: "https://careerxel.com/colleges",
  },
  openGraph: {
    title: "For Colleges & Placement Offices | CareerXel Calibrated Placements",
    description: "Breathe transparency into placements. Bulk onboard cohorts, track all interviews and status realtime, get detailed per-student reports, and access NAAC accreditation exports.",
    type: "website",
  },
};

export default function CollegesPage() {
  return <CollegesContent />;
}
