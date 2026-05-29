import { Metadata } from "next";
import { fetchFromStrapi } from "@/lib/strapi";
import ResourcesContent from "./ResourcesContent";

export const metadata: Metadata = {
  title: "Resources, Guides & Playbooks | CareerXel",
  description: "Explore tech career roadmaps, playbooks, hiring datasets, guides, and webinars to accelerate your career or team hiring.",
  alternates: {
    canonical: "https://careerxel.com/resources",
  },
  openGraph: {
    title: "Resources, Guides & Playbooks | CareerXel",
    description: "Explore tech career roadmaps, playbooks, hiring datasets, guides, and webinars to accelerate your career or team hiring.",
    type: "website",
  },
};



export type ResourceItem = {
  id: number;
  documentId?: string;
  title: string;
  slug: string;
  description: string;
  category:
    | "Engineering"
    | "Hiring"
    | "Placements"
    | "AI"
    | "Stories"
    | "Product"
    | "Guides"
    | "Docs"
    | "Webinars";
  resourceType: "article" | "dataset" | "playbook" | "webinar" | "guide" | "doc";
  glyph?: string | null;
  publishedDate: string;
  readTime?: string | null;
  authorName?: string | null;
  authorRole?: string | null;
  content?: string | null;
  isFeatured?: boolean | null;
  isActive?: boolean | null;
  order: number;
  downloadFormat?: string | null;
  externalUrl?: string | null;
};

async function getResources(): Promise<ResourceItem[]> {
  const json = await fetchFromStrapi(
    "/resources?filters[isActive][$eq]=true&sort=order:asc"
  );

  return json.data || [];
}

export default async function ResourcesPage() {
  const resources = await getResources();

  return <ResourcesContent resources={resources} />;
}
