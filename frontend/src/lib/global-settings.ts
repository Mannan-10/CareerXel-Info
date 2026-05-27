import { fetchFromStrapi } from "./strapi";

export type GlobalSetting = {
    id?: number;
    documentId?: string;
    siteName: string;
    logoText: string;
    siteDescription: string;
    primaryCtaText: string;
    primaryCtaUrl: string;
    secondaryCtaText: string;
    secondaryCtaUrl: string;
    footerDescription: string;
    salesEmail?: string | null;
    supportEmail?: string | null;
    phone?: string | null;
    linkedinUrl?: string | null;
    twitterUrl?: string | null;
    githubUrl?: string | null;
}

export const defaultGlobalSetting: GlobalSetting = {
  siteName: "CareerXel",
  logoText: "CareerXel",
  siteDescription:
    "CareerXel is an AI-native career and recruitment platform for candidates, employers, and colleges.",
  primaryCtaText: "Get started",
  primaryCtaUrl: "/candidates",
  secondaryCtaText: "Sign in",
  secondaryCtaUrl: "#",
  footerDescription:
    "An AI-native career and recruitment platform. Built for candidates, employers, and colleges.",
  salesEmail: "sales@careerxel.com",
  supportEmail: "help@careerxel.com",
  phone: "+91 80 4567 8901",
  linkedinUrl: "#",
  twitterUrl: "#",
  githubUrl: "#",
};

export async function getGlobalSetting(): Promise<GlobalSetting> {
    try {
        const json = await fetchFromStrapi("/global-setting?populate=*");

        return json.data || [];
    } catch (error) {
        console.error("Failed to fetch global setting:", error);
        return defaultGlobalSetting;
    }
}