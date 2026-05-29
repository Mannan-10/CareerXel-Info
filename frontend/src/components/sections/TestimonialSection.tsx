import { fetchFromStrapi } from "@/lib/strapi";
import TestimonialCarousel from "@/components/sections/TestimonialCarousal";

export type Testimonial = {
  id: number;
  documentId?: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  category?: "candidate" | "employer" | "college";
  order: number;
  isActive?: boolean;
};

async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const json = await fetchFromStrapi(
      "/testimonials?filters[isActive][$eq]=true&sort=order:asc"
    );

    return json.data || [];
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return [];
  }
}

export default async function TestimonialSection() {
  const testimonials = await getTestimonials();

  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="light section" data-screen-label="06 Voices">
      <div className="container">
        <h2 className="h-section" style={{ marginBottom: 40 }}>
          What teams say.
        </h2>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
