import { NextRequest, NextResponse } from "next/server";
import type { ContactForm } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();

    // Validate form data
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Here you would typically send the email using a service like:
    // - SendGrid
    // - Mailgun
    // - Nodemailer
    // - AWS SES
    // For now, we'll just log it
    console.log("Contact form submission:", body);

    // Simulate sending email
    // await sendEmail(body)

    return NextResponse.json(
      { message: "Message received successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "This endpoint only accepts POST requests" },
    { status: 405 },
  );
}
