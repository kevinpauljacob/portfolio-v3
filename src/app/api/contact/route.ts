import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import z from "zod";

const contactFormRequestSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string().max(10).optional(),
  subject: z.string(),
  message: z.string(),
});

// Email Sender
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactFormRequestSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.errors },
        { status: 400 }
      );
    }

    const { fullName, email, phone, subject, message } = result.data;

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_ADDRESS,
      to: process.env.GMAIL_ADDRESS,
      subject: `${fullName} - ${email} - ${subject}`,
      text: `${message}\nEmail: ${email}\nName: ${fullName}\nPhone: ${
        phone || "N/A"
      }\n\nThis message is sent from the website's contact form`,
    });

    return NextResponse.json({
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
