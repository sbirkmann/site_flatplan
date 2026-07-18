import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  firma?: string;
  email?: string;
  telefon?: string;
  projekt?: string;
  einheiten?: string;
  nachricht?: string;
  // Honeypot – von Menschen nie ausgefüllt
  website?: string;
};

function esc(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export async function POST(request: Request) {
  let data: LeadPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot: Bots still verwerfen, aber Erfolg melden
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Bitte Name und eine gültige E-Mail-Adresse angeben." },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEAD_TO, LEAD_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !LEAD_TO) {
    console.error("Lead-Funnel: SMTP-Konfiguration unvollständig.");
    return NextResponse.json(
      { error: "Der Versand ist derzeit nicht möglich. Bitte schreiben Sie uns direkt per E-Mail." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT ?? 587) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string | undefined][] = [
    ["Name", name],
    ["Firma", data.firma],
    ["E-Mail", email],
    ["Telefon", data.telefon],
    ["Projekt", data.projekt],
    ["Einheiten", data.einheiten],
    ["Nachricht", data.nachricht],
  ];

  const text = rows
    .filter(([, v]) => v?.trim())
    .map(([k, v]) => `${k}: ${v!.trim()}`)
    .join("\n");

  const html = `
    <h2>Neue Anfrage über flatplan.de</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .filter(([, v]) => v?.trim())
        .map(
          ([k, v]) =>
            `<tr><td style="font-weight:bold;border:1px solid #ddd">${k}</td><td style="border:1px solid #ddd">${esc(v!.trim())}</td></tr>`
        )
        .join("")}
    </table>`;

  try {
    await transporter.sendMail({
      from: LEAD_FROM ?? SMTP_USER,
      to: LEAD_TO,
      replyTo: email,
      subject: `flatplan.de Lead: ${name}${data.firma ? ` (${data.firma})` : ""}`,
      text,
      html,
    });
  } catch (err) {
    console.error("Lead-Funnel: Mailversand fehlgeschlagen.", err);
    return NextResponse.json(
      { error: "Der Versand ist fehlgeschlagen. Bitte versuchen Sie es später erneut." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
