const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchFromStrapi(path: string) {
    const res = await fetch(`${STRAPI_URL}/api${path}`, {
        next: {
            revalidate: 60,
        },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch data from Strapi: ${path}`);
    }

    return res.json();
}