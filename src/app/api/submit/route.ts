import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, timezone } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("GOOGLE_APPS_SCRIPT_URL is not set");
      return NextResponse.json({ error: "Form not configured yet. Please set up Google Sheets integration." }, { status: 500 });
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        timezone: timezone || "Unknown",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit to Google Sheets");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json({ error: "Failed to submit. Please check your connection and try again." }, { status: 500 });
  }
}
