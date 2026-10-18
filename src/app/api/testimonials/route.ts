import { NextResponse } from "next/server";

export const runtime = "edge";

export interface StoredTestimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating?: number;
  linkedinUrl?: string;
  avatar?: string;
  createdAt?: string;
}

// Note: Public testimonials are strictly controlled and curated via `portfolioData.ts`.
// Submissions received here are validated and processed for owner review (not publicly auto-published).

export async function GET() {
  return NextResponse.json(
    { success: true, testimonials: [] },
    {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    }
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, role, quote, rating, linkedinUrl } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 80) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid name (2 to 80 characters)" },
        { status: 400 }
      );
    }

    if (!role || typeof role !== "string" || name.trim().length < 2 || role.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: "Please enter your role or title (e.g. Senior Data Scientist, Client)" },
        { status: 400 }
      );
    }

    if (!quote || typeof quote !== "string" || quote.trim().length < 5 || quote.trim().length > 1200) {
      return NextResponse.json(
        { success: false, error: "Please write your testimonial (between 5 and 1200 characters)" },
        { status: 400 }
      );
    }

    let sanitizedLinkedin = "";
    if (linkedinUrl && typeof linkedinUrl === "string" && linkedinUrl.trim()) {
      const trimmed = linkedinUrl.trim();
      const fullUrl = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
      if (!/linkedin\.com\/(in|company|pub)\//i.test(fullUrl)) {
        return NextResponse.json(
          { success: false, error: "Please enter a valid LinkedIn profile URL (e.g. https://linkedin.com/in/username)" },
          { status: 400 }
        );
      }
      sanitizedLinkedin = fullUrl;
    }

    const numericRating = typeof rating === "number" && rating >= 1 && rating <= 5 ? rating : 5;

    const newTestimonial: StoredTestimonial = {
      id: `review-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      role: role.trim(),
      quote: quote.trim(),
      rating: numericRating,
      ...(sanitizedLinkedin ? { linkedinUrl: sanitizedLinkedin } : {}),
      createdAt: new Date().toISOString(),
    };

    console.log("[New Testimonial Submitted for Moderation]:", newTestimonial);

    return NextResponse.json(
      {
        success: true,
        message: "Testimonial submitted for review!",
        testimonial: newTestimonial,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error processing testimonial:", err);
    return NextResponse.json(
      { success: false, error: "Failed to process testimonial. Please try again." },
      { status: 500 }
    );
  }
}
