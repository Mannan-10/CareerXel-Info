import { NextResponse } from "next/server";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

const STRAPI_CONTACT_TOKEN = process.env.STRAPI_CONTACT_TOKEN;

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  role?: string;
  subject?: string;
  message?: string;
  interestType?: string;
  sourcePage?: string;
  consent?: boolean;
  website?: string; // honeypot field
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    if (!STRAPI_CONTACT_TOKEN) {
      return NextResponse.json(
        { success: false, message: "Server token is missing." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactPayload;

    // Honeypot: real users will not fill this hidden field
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const firstName = body.firstName?.trim();
    const lastName = body.lastName?.trim() || "";
    const email = body.email?.trim().toLowerCase();
    const phone = body.phone?.trim() || "";
    const company = body.company?.trim() || "";
    const role = body.role?.trim() || "";
    const subject = body.subject?.trim() || "About page inquiry";
    const message = body.message?.trim();
    const interestType = body.interestType || "other";
    const sourcePage = body.sourcePage || "about";
    const consent = Boolean(body.consent);

    if (!firstName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and message are required.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const res = await fetch(`${STRAPI_URL}/api/contact-messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_CONTACT_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          firstName,
          lastName,
          email,
          phone,
          company,
          role,
          subject,
          message,
          interestType,
          sourcePage,
          statusType: "new",
          consent,
        },
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();

      return NextResponse.json(
        {
          success: false,
          message: "Failed to save your message.",
          error: errorText,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been submitted successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}