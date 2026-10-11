import { NextResponse } from "next/server";
import { site } from "@/lib/data";
import { contactSchema } from "@/lib/validation";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill the hidden "website" field. Pretend success for bots.
  if (
    typeof body === "object" &&
    body !== null &&
    (body as { website?: unknown }).website
  ) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the highlighted fields",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const d = parsed.data;
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.info("[contact] RESEND_API_KEY not set, enquiry received:", d);
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Mark Travel <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? site.email],
      reply_to: d.email,
      subject: `New enquiry${d.service ? `: ${d.service}` : ""}`,
      text: `Name: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone || "-"}\nService: ${d.service || "-"}\n\n${d.message}`,
    }),
  });
  if (!res.ok)
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again." },
      { status: 502 },
    );
  return NextResponse.json({ ok: true });
}
