"use client";
import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.875rem 1rem",
  border: "1px solid var(--border-dark)",
  borderRadius: "var(--radius-sm)",
  fontSize: "1rem",
  fontFamily: "inherit",
  background: "#fff",
  color: "var(--text-primary)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.875rem",
  fontWeight: 600,
  marginBottom: "0.375rem",
  color: "var(--text-primary)",
};

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Der Versand ist fehlgeschlagen.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Der Versand ist fehlgeschlagen.");
    }
  }

  if (status === "sent") {
    return (
      <div className="card" style={{ textAlign: "center", padding: "3rem 2rem" }}>
        <CheckCircle2 size={48} style={{ color: "var(--accent-primary)", margin: "0 auto 1.25rem" }} />
        <h3>Vielen Dank für Ihre Anfrage!</h3>
        <p style={{ marginBottom: "1.5rem" }}>
          Wir haben Ihre Nachricht erhalten und melden uns in der Regel innerhalb
          eines Werktags bei Ihnen — meist mit einem Terminvorschlag für eine
          persönliche Live-Demo.
        </p>
        <button className="btn btn-outline btn-sm" onClick={() => setStatus("idle")}>
          Weitere Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card" style={{ padding: "2.5rem" }}>
      <div className="grid grid-2" style={{ gap: "1.25rem", marginBottom: "1.25rem" }}>
        <div>
          <label style={labelStyle} htmlFor="lead-name">Name *</label>
          <input id="lead-name" name="name" type="text" required autoComplete="name" placeholder="Max Mustermann" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="lead-firma">Firma</label>
          <input id="lead-firma" name="firma" type="text" autoComplete="organization" placeholder="Mustermann Immobilien GmbH" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="lead-email">E-Mail *</label>
          <input id="lead-email" name="email" type="email" required autoComplete="email" placeholder="name@firma.de" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="lead-telefon">Telefon</label>
          <input id="lead-telefon" name="telefon" type="tel" autoComplete="tel" placeholder="+49 …" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="lead-projekt">Projekt / Vorhaben</label>
          <input id="lead-projekt" name="projekt" type="text" placeholder="z. B. Wohnquartier mit 3 Häusern" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="lead-einheiten">Anzahl Einheiten</label>
          <select id="lead-einheiten" name="einheiten" style={inputStyle} defaultValue="">
            <option value="" disabled>Bitte wählen</option>
            <option value="bis 10">bis 10</option>
            <option value="11–30">11–30</option>
            <option value="31–100">31–100</option>
            <option value="über 100">über 100</option>
          </select>
        </div>
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={labelStyle} htmlFor="lead-nachricht">Ihre Nachricht</label>
        <textarea
          id="lead-nachricht"
          name="nachricht"
          rows={5}
          placeholder="Erzählen Sie uns kurz von Ihrem Projekt und Ihrem Zeitplan."
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      {/* Honeypot gegen Bots — für Menschen unsichtbar */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }} />

      {status === "error" && (
        <p role="alert" style={{ color: "#dc2626", fontWeight: 600, marginBottom: "1rem" }}>{errorMsg}</p>
      )}

      <button type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"} style={{ width: "100%" }}>
        {status === "sending" ? (
          <><Loader2 size={20} className="animate-spin" style={{ animation: "spin 1s linear infinite" }} /> Wird gesendet …</>
        ) : (
          <><Send size={18} /> Anfrage senden</>
        )}
      </button>
      <p style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)", marginTop: "1rem", marginBottom: 0 }}>
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zur
        Bearbeitung der Anfrage zu. Details in der{" "}
        <a href="/datenschutz" style={{ textDecoration: "underline" }}>Datenschutzerklärung</a>.
      </p>
    </form>
  );
}
