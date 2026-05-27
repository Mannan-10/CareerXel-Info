import fs from "node:fs";
import path from "node:path";
import { cache } from "react";

export const LEGACY_SLUGS = [
  "about",
  "ai",
  "candidates",
  "colleges",
  "employers",
  "features",
  "pricing",
  "resources",
] as const;

export type LegacySlug = (typeof LEGACY_SLUGS)[number];

type LegacyPageContent = {
  css: string;
  markup: string;
};

const ROUTE_MAP: Record<string, string> = {
  "index.html": "/",
  "about.html": "/about",
  "ai.html": "/ai",
  "candidates.html": "/candidates",
  "colleges.html": "/colleges",
  "employers.html": "/employers",
  "features.html": "/features",
  "pricing.html": "/pricing",
  "resources.html": "/resources",
};

function resolveLegacyFilePath(slug: LegacySlug): string {
  const fileName = `${slug}.html`;
  const filePath = path.resolve(process.cwd(), "legacy-html", fileName);

  if (fs.existsSync(filePath)) {
    return filePath;
  }

  throw new Error(`Legacy page not found for "${slug}" at: ${filePath}`);
}

function extractInlineStyle(html: string): string {
  const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  return styleMatch?.[1]?.trim() ?? "";
}

function extractSectionsOnly(html: string): string {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyMarkup = bodyMatch?.[1] ?? html;

  const firstSectionIndex = bodyMarkup.indexOf("<section");
  const footerIndex = bodyMarkup.indexOf("<footer");

  const fromIndex = firstSectionIndex >= 0 ? firstSectionIndex : 0;
  const toIndex = footerIndex > fromIndex ? footerIndex : bodyMarkup.length;

  return bodyMarkup
    .slice(fromIndex, toIndex)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .trim();
}

function rewriteLegacyLinks(markup: string): string {
  return markup.replace(
    /href=(["'])([^"']+?\.html)(#[^"']*)?\1/gi,
    (_match: string, quote: string, href: string, hash = "") => {
      const normalizedHref = href.replace(/^\.?\//, "");
      const fileName = normalizedHref.split("/").pop() ?? normalizedHref;
      const routePath = ROUTE_MAP[fileName] ?? `/${fileName.replace(/\.html$/i, "")}`;

      return `href=${quote}${routePath}${hash}${quote}`;
    },
  );
}

export const getLegacyPageContent = cache((slug: LegacySlug): LegacyPageContent => {
  const htmlPath = resolveLegacyFilePath(slug);
  const rawHtml = fs.readFileSync(htmlPath, "utf-8");

  return {
    css: extractInlineStyle(rawHtml),
    markup: rewriteLegacyLinks(extractSectionsOnly(rawHtml)),
  };
});
